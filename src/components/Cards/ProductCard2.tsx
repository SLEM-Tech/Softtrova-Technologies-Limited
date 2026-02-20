"use client";

import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCart } from "react-use-cart";
import Link from "next/link";
import Picture from "../picture/Picture";
import { FormatMoney2 } from "../Reusables/FormatMoney";
import { convertToSlug } from "@constants";

interface ProductCard2Props {
	id: string | number;
	image: string;
	oldAmount?: string;
	newAmount: string;
	description: string;
	category?: string;
	boxShadow?: boolean;
}

const ProductCard2 = ({
	id,
	image,
	oldAmount,
	newAmount,
	description,
	category = "Hardware",
	boxShadow = true,
}: ProductCard2Props) => {
	const { addItem, removeItem, updateItem, getItem } = useCart();

	const ID = id.toString();
	const cartItem = getItem(ID);
	const quantity = cartItem?.quantity || 0;
	const price = parseInt(newAmount);
	const slugDesc = convertToSlug(description);

	const discount = oldAmount
		? Math.round(((parseInt(oldAmount) - price) / parseInt(oldAmount)) * 100)
		: 0;

	const addToCart = () => {
		addItem({ id: ID, name: description, price, quantity: 1, image });
	};

	const increase = () => updateItem(ID, { quantity: quantity + 1 });
	const decrease = () => {
		if (quantity <= 1) removeItem(ID);
		else updateItem(ID, { quantity: quantity - 1 });
	};

	return (
		<div
			className={`group relative flex flex-col w-full bg-white transition-all duration-500 ${
				boxShadow
					? "hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)]"
					: "border border-gray-100"
			} rounded-sm`}
		>
			{/* --- IMAGE CONTAINER: Height reduced from 4/5 to 1.2/1 --- */}
			<div className='relative aspect-[1.2/1] w-full bg-[#F9F9F9] flex items-center justify-center overflow-hidden p-4 md:p-5'>
				{/* Minimalist Sale Badge */}
				{discount > 0 && (
					<span className='absolute top-3 left-3 bg-brand-gold text-white text-[8px] font-bold px-2 py-0.5 rounded-full z-10 tracking-widest'>
						-{discount}%
					</span>
				)}

				<Link
					href={`/home-item/product/${slugDesc}-${id}`}
					className='w-full h-full flex items-center justify-center'
				>
					<Picture
						src={image}
						alt={description}
						className='object-contain w-[80%] h-[80%] transition-transform duration-700 group-hover:scale-105'
					/>
				</Link>
			</div>

			{/* --- CONTENT AREA: Tightened padding and spacing --- */}
			<div className='flex flex-col flex-grow p-3 md:p-4 space-y-1.5'>
				<div className='space-y-0.5'>
					<p className='text-[8px] text-brand-gold font-bold uppercase tracking-[0.2em]'>
						{category}
					</p>
					<Link
						href={`/home-item/product/${slugDesc}-${id}`}
						className='text-xs md:text-sm font-medium text-[#1A1A1A] line-clamp-1 hover:text-brand-gold transition-colors'
						dangerouslySetInnerHTML={{ __html: description }}
					/>
				</div>

				{/* Price Section: Compact row --- */}
				<div className='flex items-baseline gap-2'>
					<span className='text-brand-gold font-bold text-base tracking-tight'>
						{price ? <FormatMoney2 value={price} /> : "N/A"}
					</span>
					{oldAmount && (
						<span className='text-[9px] line-through text-gray-400 font-medium'>
							<FormatMoney2 value={parseInt(oldAmount)} />
						</span>
					)}
				</div>

				{/* --- ACTION BUTTONS: Lowered height --- */}
				<div className='mt-auto pt-1'>
					{quantity === 0 ? (
						<button
							onClick={(e) => {
								e.preventDefault();
								addToCart();
							}}
							className='w-full bg-[#0A0A0A] text-white py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-brand-gold transition-all active:scale-95 flex items-center justify-center'
						>
							Add to cart
						</button>
					) : (
						<div className='flex items-center justify-between w-full bg-[#F5F4F0] p-0.5 rounded-sm border border-gray-200'>
							<button
								onClick={decrease}
								className='size-8 flex items-center justify-center bg-white text-[#121212] hover:text-brand-gold transition-colors shadow-sm'
							>
								<AiOutlineMinus size={10} />
							</button>
							<span className='text-xs font-bold text-[#121212]'>
								{quantity}
							</span>
							<button
								onClick={increase}
								className='size-8 flex items-center justify-center bg-[#0A0A0A] text-white hover:bg-brand-gold transition-colors shadow-sm'
							>
								<AiOutlinePlus size={10} />
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductCard2;
