"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri"; // Using a sleeker tech-minimalist chevron

const CategoryPageBottomHeader = () => {
	const router = useRouter();
	const pathname = usePathname();

	// Extraction logic
	const match = pathname.match(/\/category\/([^-]+)/);
	let usedWord = null;
	if (match && match[1]) {
		usedWord = match[1];
	}

	const capitalizeFirstLetter = (word: string | null) => {
		if (word) {
			const decodedWord = decodeURIComponent(word);
			return (
				decodedWord.charAt(0).toUpperCase() + decodedWord.slice(1).toLowerCase()
			);
		}
		return "";
	};

	const formattedLastWord = capitalizeFirstLetter(usedWord);

	return (
		<nav className='hidden slg:flex w-full bg-[#F5F4F0] border-b border-gray-200'>
			<div className='max-w-[1440px] mx-auto w-full px-10 py-4 flex items-center gap-3'>
				{/* HOME LINK */}
				<button
					className='text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-[#0A0A0A] transition-colors'
					onClick={() => router.push("/")}
				>
					Home
				</button>

				{/* SEPARATOR */}
				<RiArrowRightSLine className='text-gray-400 text-sm' />

				{/* INTERMEDIATE LINK */}
				<button
					className='text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-[#0A0A0A] transition-colors'
					onClick={() => router.push("/category")}
				>
					Collections
				</button>

				{formattedLastWord && (
					<>
						{/* SEPARATOR */}
						<RiArrowRightSLine className='text-gray-400 text-sm' />

						{/* CURRENT PAGE - Luxury Style */}
						<h4 className='text-[11px] font-bold uppercase text-brand-gold'>
							{formattedLastWord}
						</h4>
					</>
				)}
			</div>
		</nav>
	);
};

export default CategoryPageBottomHeader;
