"use client";
import { deskMatImage } from "@public/images"; // Ensure you have this image exported
import Picture from "@src/components/picture/Picture";
import { useRouter } from "next/navigation";
import React from "react";

const BestSellingBanner = () => {
	const router = useRouter();

	return (
		<section className='w-full bg-white py-12 md:py-20 px-6 lg:px-10'>
			<div className='max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24'>
				{/* LEFT COLUMN: PRODUCT IMAGE */}
				<div className='w-full md:w-1/2 flex justify-center md:justify-end'>
					<div className='relative w-full max-w-[550px] aspect-square overflow-hidden rounded-sm shadow-sm p-4 md:p-8'>
						<Picture
							src={deskMatImage}
							alt='Quality Computer Mat'
							className='w-full h-full object-contain transition-transform duration-700 hover:scale-105'
						/>
					</div>
				</div>

				{/* RIGHT COLUMN: CONTENT */}
				<div className='w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left'>
					{/* Header with specific gold underline logic */}
					<div className='relative mb-6'>
						<h2 className='font-serif text-3xl md:text-5xl text-gray-800'>
							Best Selling Item
						</h2>
						{/* The Gold Underline seen in the image */}
						<div className='absolute -bottom-2 left-0 md:left-0 w-12 h-[2px] bg-brand-gold' />
					</div>

					<h3 className='text-lg md:text-xl font-bold text-gray-700 mb-4 mt-2'>
						Quality Computer Mat
					</h3>

					<p className='text-gray-500 text-sm md:text-base leading-relaxed max-w-md mb-8'>
						Experience comfort and precision with our Quality Computer Mats —
						durable, sleek, and designed to enhance every click, scroll, and
						workspace setup.
					</p>

					<button
						onClick={() => router.push("/category")}
						className='bg-brand-black hover:bg-gray-800 text-white px-10 py-3 text-xs font-bold uppercase tracking-widest transition-all active:scale-95 flex items-center gap-3 group'
					>
						Order Now
						<span className='group-hover:translate-x-1 transition-transform'>
							→
						</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default BestSellingBanner;
