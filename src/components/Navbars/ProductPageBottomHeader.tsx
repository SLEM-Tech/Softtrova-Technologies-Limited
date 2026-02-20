"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiArrowRightSLine } from "react-icons/ri"; // Sleeker minimalist chevron

const ProductPageBottomHeader = () => {
	const pathname = usePathname();

	// Technical Extraction Logic
	function extractAndCapitalize(path: string) {
		const match = path.match(/\/[^/]+\/([^/]+)-/);
		if (match && match[1]) {
			const extractedText = match[1].replace(/-/g, " ");
			return extractedText.charAt(0).toUpperCase() + extractedText.slice(1);
		}
		return null;
	}

	const formattedLastWord = extractAndCapitalize(pathname);

	return (
		<nav className='hidden slg:flex w-full bg-[#F5F4F0] border-b border-gray-200'>
			<div className='max-w-[1440px] mx-auto w-full px-10 py-4 flex items-center gap-3'>
				{/* HOME LINK */}
				<Link
					href='/'
					className='text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-[#0A0A0A] transition-colors'
				>
					Home
				</Link>

				<RiArrowRightSLine className='text-gray-400 text-sm' />

				{/* SHOP/PRODUCT CATEGORY LINK */}
				<Link
					href='/category'
					className='text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-[#0A0A0A] transition-colors'
				>
					Inventory
				</Link>

				{formattedLastWord && (
					<>
						<RiArrowRightSLine className='text-gray-400 text-sm' />

						{/* CURRENT PRODUCT - Luxury Gold Highlight */}
						<h4 className='text-[11px] font-bold uppercase text-brand-gold truncate max-w-[300px]'>
							{formattedLastWord}
						</h4>
					</>
				)}
			</div>
		</nav>
	);
};

export default ProductPageBottomHeader;
