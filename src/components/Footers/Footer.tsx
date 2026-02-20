"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useToken from "../hooks/useToken";
import { signOut } from "@utils/lib";
import {
	CompanyName,
	CompanyShortName,
	filterCustomersByEmail,
} from "@constants";
import { useCustomer } from "../lib/woocommerce";
import { LogoImage } from "@utils/function";
import { usePathname } from "next/navigation";
import {
	BiLogoFacebook,
	BiLogoLinkedin,
	BiLogoTiktok,
	BiLogoWhatsapp,
} from "react-icons/bi";

interface footerDataProps {
	title: string;
	links: {
		label: string;
		href: string;
		function?: () => void;
	}[];
}

const Footer = () => {
	const { email } = useToken();
	const currentYear = new Date().getFullYear();
	const pathname = usePathname();
	const { data: customer } = useCustomer("");
	const wc_customer_info = filterCustomersByEmail(customer, email);
	const firstName = wc_customer_info?.first_name;

	const socialIcons = [
		{ id: 1, icon: <BiLogoTiktok />, link: "#" },
		{ id: 2, icon: <BiLogoWhatsapp />, link: "#" },
		{ id: 3, icon: <BiLogoFacebook />, link: "#" },
		{ id: 4, icon: <BiLogoLinkedin />, link: "#" },
	];

	const footerData: footerDataProps[] = [
		{
			title: "User Control",
			links: [
				{
					label: firstName ? "My Dashboard" : "Create Account",
					href: firstName ? "/user/dashboard" : "/user/register",
				},
				{
					label: "Order Tracking",
					href: "/user/my-orders",
				},
				{
					label: firstName ? "Secure Log Out" : "Account Login",
					href: firstName ? "" : "/user/login",
					function: firstName ? signOut : undefined,
				},
			],
		},
		{
			title: "The Gallery",
			links: [
				{ label: "About Softtrova", href: "/about" },
				{ label: "Technical FAQ", href: "/faq" },
				{ label: "Our Services", href: "/contact-us" },
			],
		},
		{
			title: "Legal",
			links: [
				{ label: "Terms of Use", href: "/terms-of-use?terms-of-use" },
				{ label: "Privacy Policy", href: "/terms-of-use?privacy-policy" },
				{ label: "Shipping Policy", href: "/terms-of-use?delivery-return" },
				{ label: "Returns & Refunds", href: "/terms-of-use?refund-policy" },
			],
		},
	];

	return (
		<footer className='w-full bg-[#F5F4F0] border-t border-gray-200 pt-20'>
			<div className='max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20'>
				{/* Brand Column */}
				<div className='lg:col-span-4 space-y-8 text-center lg:text-left'>
					<div className='flex flex-col items-center lg:items-start gap-4'>
						<LogoImage className='!w-[50px]' />
						<h2 className='text-[#0A0A0A] font-serif text-2xl tracking-tight'>
							{CompanyShortName}
						</h2>
					</div>

					<p className='text-gray-500 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0 font-medium'>
						Curating high-performance hardware and elegant computer accessories
						for the discerning professional setup.
					</p>

					<div className='flex justify-center lg:justify-start gap-4'>
						{socialIcons.map((soc) => (
							<motion.a
								key={soc.id}
								href={soc.link}
								whileHover={{ y: -3 }}
								className='size-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#B1976B] hover:border-[#B1976B] transition-all duration-300'
							>
								{soc.icon}
							</motion.a>
						))}
					</div>
				</div>

				{/* Links Columns */}
				<div className='lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8'>
					{footerData.map((section, idx) => (
						<div key={idx} className='space-y-6'>
							<h5 className='text-[#B1976B] text-[12px] font-bold uppercase tracking-[0.2em]'>
								{section.title}
							</h5>
							<ul className='space-y-4'>
								{section.links.map((link, lIdx) => (
									<li key={lIdx}>
										<Link
											href={link.href}
											onClick={link.function}
											className={`text-sm font-medium transition-all duration-300 ${
												pathname === link.href
													? "text-[#0A0A0A] underline underline-offset-8 decoration-[#B1976B]"
													: "text-gray-500 hover:text-[#0A0A0A]"
											}`}
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			{/* Bottom Bar */}
			<div className='w-full border-t border-gray-200 py-5 bg-white'>
				<div className='max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6'>
					<div className='text-gray-400 text-[11px] font-medium tracking-widest uppercase'>
						&copy; {currentYear} {CompanyName} &mdash; All rights reserved.
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
