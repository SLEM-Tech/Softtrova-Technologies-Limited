"use client";
import React, {
	useMemo,
	useState,
	useTransition,
	Fragment,
	useRef,
	useEffect,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "react-use-cart";
import { useAppDispatch, useAppSelector } from "../hooks";
import Drawer from "rc-drawer";
import { useCustomer } from "../lib/woocommerce";
import {
	currencyOptions,
	filterCustomersByEmail,
	headerNavLinks,
} from "@constants";
import { getFirstCharacter, signOut } from "@utils/lib";
import { LogoImage } from "@utils/function";
import Picture from "../picture/Picture";
import { APICall } from "@utils";
import { fetchExchangeRate } from "@utils/endpoints";
import { setBaseCurrency, setExchangeRate } from "../Redux/Currency";
import FormToast from "../Reusables/Toast/SigninToast";
import useToken from "../hooks/useToken";

// Headless UI Components
import { Menu, Transition } from "@headlessui/react";
import {
	FiSearch,
	FiLogOut,
	FiMenu,
	FiX,
	FiFacebook,
	FiTwitter,
	FiYoutube,
	FiLinkedin,
} from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";
import Flag from "react-world-flags";
import GlobalLoader from "../modal/GlobalLoader";
import MobileNav from "./MobileNav";
import ProductTable from "../Tables/ProductTable";
import CategoryPageBottomHeader from "./CategoryPageBottomHeader";
import ProductPageBottomHeader from "./ProductPageBottomHeader";
import { FaShoppingBag } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { ImSpinner2 } from "react-icons/im";
import Link from "next/link";

const Header = () => {
	const pathname = usePathname();
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { email } = useToken();
	const { totalItems, cartTotal } = useCart();

	const { baseCurrency } = useAppSelector((state) => state.currency);
	const [isPending, startTransition] = useTransition();

	const [isCartOpen, setIsCartOpen] = useState(false);
	const [drawerVisible, setDrawerVisible] = useState(false);
	const [searchValue, setSearchValue] = useState("");

	const [isSearchExpanded, setIsSearchExpanded] = useState(false);
	const searchRef = useRef<HTMLInputElement>(null);

	const { data: customer } = useCustomer("");
	const wc_customer_info = useMemo(
		() => filterCustomersByEmail(customer as Woo_Customer_Type[], email),
		[customer, email],
	);

	useEffect(() => {
		if (isSearchExpanded && searchRef.current) {
			searchRef.current.focus();
		}
	}, [isSearchExpanded]);

	const onOpenCart = () => setIsCartOpen(true);
	const onCloseCart = () => setIsCartOpen(false);

	const handleCurrencyChange = async (code: string) => {
		const selectedObj = currencyOptions.find((c) => c.code === code);
		if (!selectedObj) return;
		try {
			const data = await APICall(fetchExchangeRate, ["NGN", code], true, true);
			if (data) {
				dispatch(setExchangeRate(data));
				dispatch(setBaseCurrency(selectedObj));
				FormToast({ message: `Switched to ${code}`, success: true });
			}
		} catch (error) {
			FormToast({ message: "Currency switch failed", success: false });
		}
	};

	const handleSearch = () => {
		if (!searchValue) return;
		startTransition(() => {
			router.push(`/search?q=${searchValue}`);
			setIsSearchExpanded(false);
		});
	};

	const userDropDownLinks = [
		{ id: 1, href: "/user/dashboard", icon: <BiUser />, label: "My Account" },
		{ id: 2, href: "/user/my-orders", icon: <FiSearch />, label: "Orders" },
		{ id: 3, onClick: onOpenCart, icon: <FaShoppingBag />, label: "Cart" },
	];

	return (
		<>
			<header className='flex flex-col w-full bg-[#F5F4F0] z-[100] fixed top-0 border-b border-black/5 transition-all duration-300'>
				{/* 1. TOP UTILITY BAR (Socials + Account + Cart + Search) */}
				<div className='hidden slg:flex items-center justify-between w-full py-2 max-w-[1540px] px-10 mx-auto border-b border-black/[0.03]'>
					{/* Social Icons */}
					<div className='flex items-center gap-4 text-gray-600'>
						<FiFacebook className='cursor-pointer hover:text-brand-gold transition-colors text-sm' />
						<FiTwitter className='cursor-pointer hover:text-brand-gold transition-colors text-sm' />
						<FiYoutube className='cursor-pointer hover:text-brand-gold transition-colors text-sm' />
						<FiLinkedin className='cursor-pointer hover:text-brand-gold transition-colors text-sm' />
					</div>

					<div className='flex items-center gap-6'>
						{/* Account */}
						<Menu as='div' className='relative'>
							<Menu.Button className='flex items-center gap-2 text-[13px] font-medium text-gray-700 hover:text-brand-gold transition-colors'>
								<BiUser className='text-lg' />
								<span>{wc_customer_info?.first_name || "Account"}</span>
							</Menu.Button>
							<Transition
								as={Fragment}
								enter='transition duration-200'
								enterFrom='opacity-0 y-1'
								enterTo='opacity-100 y-0'
							>
								<Menu.Items className='absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-2xl p-1.5 z-[110] outline-none'>
									{userDropDownLinks.map((item) => (
										<Menu.Item key={item.id}>
											{({ active }) => (
												<button
													onClick={(e) => {
														if (item.onClick) item.onClick();
														else router.push(item.href || "#");
													}}
													className={`${active ? "bg-brand-cream text-brand-gold" : "text-gray-600"} flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-all`}
												>
													{item.label}
												</button>
											)}
										</Menu.Item>
									))}
									<Menu.Item>
										{({ active }) => (
											<button
												onClick={() => signOut()}
												className={`${active ? "bg-red-50 text-red-600" : "text-red-500"} flex w-full items-center px-3 py-2 text-xs font-bold transition-all mt-1 border-t border-gray-50 pt-2`}
											>
												Log Out
											</button>
										)}
									</Menu.Item>
								</Menu.Items>
							</Transition>
						</Menu>

						{/* Cart Info */}
						<div
							className='flex items-center gap-2 text-[13px] font-medium text-gray-700 cursor-pointer hover:text-brand-gold transition-colors'
							onClick={onOpenCart}
						>
							<FaShoppingBag className='text-base' />
							<span>
								Cart:({totalItems} {baseCurrency.code})
							</span>
						</div>

						{/* Expandable Search Trigger */}
						<div className='flex items-center'>
							<div
								className={`relative flex items-center transition-all duration-500 ease-in-out ${isSearchExpanded ? "w-64" : "w-6"}`}
							>
								<div
									className={`flex items-center w-full rounded-full transition-all duration-500 ${isSearchExpanded ? "bg-white px-3 h-8 border border-gray-200 opacity-100" : "w-0 opacity-0 overflow-hidden"}`}
								>
									<input
										ref={searchRef}
										type='text'
										placeholder='Search...'
										className='w-full bg-transparent text-xs text-black outline-none'
										value={searchValue}
										onChange={(e) => setSearchValue(e.target.value)}
										onKeyDown={(e) => e.key === "Enter" && handleSearch()}
										onBlur={() => {
											if (!searchValue) setIsSearchExpanded(false);
										}}
									/>
								</div>
								{!isSearchExpanded && (
									<FiSearch
										className='text-lg text-gray-600 cursor-pointer hover:text-brand-gold'
										onClick={() => setIsSearchExpanded(true)}
									/>
								)}
							</div>
						</div>
					</div>
				</div>

				{/* 2. MAIN NAVIGATION BAR (Logo + Nav Links) */}
				<div className='hidden slg:grid grid-cols-12 items-center w-full py-6 max-w-[1540px] px-10 mx-auto'>
					{/* Logo */}
					<div className='col-span-3'>
						<LogoImage className='!w-[45px] hover:scale-105 transition-transform' />
					</div>

					{/* Nav Links */}
					<div className='col-span-9 flex justify-end items-center gap-10'>
						{headerNavLinks.map((link) => (
							<Link
								key={link.id}
								href={link.href}
								className={`text-[13px] font-bold uppercase tracking-[0.15em] transition-all hover:text-brand-gold relative group ${
									pathname === link.href ? "text-brand-gold" : "text-gray-500"
								}`}
							>
								{link.text}
								<span
									className={`h-[1px] inline-block bg-brand-gold absolute left-0 -bottom-1 transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`}
								/>
							</Link>
						))}

						{/* Keep Currency Toggle here for functionality */}
						<Menu as='div' className='relative ml-4'>
							<Menu.Button className='flex items-center gap-1 text-[11px] font-black text-gray-400 uppercase tracking-widest hover:text-brand-gold transition-colors'>
								{baseCurrency.code} <SlArrowDown className='text-[8px]' />
							</Menu.Button>
							<Transition
								as={Fragment}
								enter='transition duration-100'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
							>
								<Menu.Items className='absolute right-0 mt-2 w-36 bg-white border border-gray-100 rounded-xl shadow-xl p-1.5 z-[110] outline-none'>
									{currencyOptions.map((c) => (
										<Menu.Item key={c.code}>
											{({ active }) => (
												<button
													onClick={() => handleCurrencyChange(c.code)}
													className={`${active ? "bg-gray-50 text-brand-gold" : "text-gray-600"} flex w-full items-center gap-2 rounded-lg px-3 py-2 text-[10px] font-bold uppercase transition-all`}
												>
													<Flag code={c.countryCode} className='w-4' /> {c.code}
												</button>
											)}
										</Menu.Item>
									))}
								</Menu.Items>
							</Transition>
						</Menu>
					</div>
				</div>

				{/* Mobile Header */}
				<div className='slg:hidden flex flex-col w-full p-5 gap-4 bg-[#F5F4F0] border-b border-gray-200'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-4'>
							<button
								onClick={() => setDrawerVisible(true)}
								className='p-2 rounded-xl bg-white border border-gray-200'
							>
								<FiMenu className='text-xl text-black' />
							</button>
							<LogoImage className='!w-[35px]' />
						</div>
						<div
							onClick={onOpenCart}
							className='relative p-3 rounded-xl bg-brand-black shadow-lg'
						>
							<FaShoppingBag className='text-lg text-white' />
							{totalItems > 0 && (
								<span className='absolute -top-1 -right-1 size-5 bg-brand-gold text-white border-2 border-[#F5F4F0] rounded-full text-[9px] flex items-center justify-center font-bold'>
									{totalItems}
								</span>
							)}
						</div>
					</div>
				</div>

				{/* Conditional Bottom Headers */}
				{(pathname.includes("/category") ||
					pathname.includes("/home-item")) && (
					<div className='bg-[#EBEAE4]/50 border-t border-black/5'>
						{pathname.includes("/category") ? (
							<CategoryPageBottomHeader />
						) : (
							<ProductPageBottomHeader />
						)}
					</div>
				)}
			</header>

			<Drawer
				open={isCartOpen}
				onClose={onCloseCart}
				placement='right'
				width={
					typeof window !== "undefined" && window.innerWidth > 768
						? 500
						: "100%"
				}
				className='bg-white shadow-2xl'
			>
				<ProductTable onClose={onCloseCart} />
			</Drawer>

			<GlobalLoader isPending={isPending} />
			<MobileNav
				closeDrawer={() => setDrawerVisible(false)}
				drawerVisible={drawerVisible}
			/>
		</>
	);
};

export default Header;
