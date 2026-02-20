import React from "react";
import { Rubik } from "next/font/google";
import Picture from "../picture/Picture";
import { heroBg } from "@public/images";

const rubik = Rubik({
	subsets: ["latin-ext"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	display: "swap", // Professional standard for performance
});

const WhyChooseUs = () => {
	return (
		<div className='relative w-full lg:w-[85%] mx-auto h-[35vh] lg:h-[50vh] lg:rounded-2xl grid place-items-center overflow-hidden'>
			{/* The Background Image */}
			<Picture
				src={heroBg}
				alt='Gaming Setup'
				className='w-full h-full object-cover rounded-2xl scale-105'
			/>

			{/* Dark Gradient Overlay for Readability */}
			<div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent' />

			{/* Content Overlay */}
			<div className='absolute inset-0 flex flex-col justify-center mx-auto px-8 lg:px-20 max-w-5xl space-y-6'>
				<h1
					className={`text-3xl lg:text-6xl font-black mx-auto text-white text-center max-w-2xl  ${rubik.className}`}
				>
					Why Choose us
				</h1>
			</div>
		</div>
	);
};

export default WhyChooseUs;
