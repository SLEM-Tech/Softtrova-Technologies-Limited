import React from "react";
import Picture from "../picture/Picture";
import { maintenanceImg, accessoriesImg, hardwareImg } from "@public/images";

const OurServices = () => {
	const services = [
		{
			image: maintenanceImg,
			title: "Computer Maintenance",
		},
		{
			image: accessoriesImg,
			title: "Computer Accessories",
		},
		{
			image: hardwareImg,
			title: "Computer Hardware",
		},
	];

	return (
		<section className='w-full bg-background py-12 md:py-4 px-4 sm:px-8 lg:px-10'>
			<div className='max-w-[1440px] mx-auto'>
				{/* Section Heading - Responsive sizing and alignment */}
				<h2 className='font-serif text-2xl md:text-4xl text-gray-800 mb-8 md:mb-16 text-center md:text-left'>
					Our Services
				</h2>

				{/* 
				    Grid Logic:
				    - grid-cols-1: 1 column on mobile
				    - md:grid-cols-3: 3 columns on tablets/desktops
				*/}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12'>
					{services.map((item, index) => (
						<div
							key={index}
							className='flex flex-col items-center space-y-4 md:space-y-6 group cursor-pointer'
						>
							{/* Image Container - aspect-square keeps it perfectly square on all screens */}
							<div className='w-full aspect-square overflow-hidden rounded-sm shadow-sm bg-surface'>
								<Picture
									src={item.image}
									alt={item.title}
									className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
								/>
							</div>

							{/* Label - Reduced margin on mobile, wide tracking preserved */}
							<h3 className='font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-[11px] md:text-sm text-brand-gold group-hover:text-primary-500 transition-colors duration-300 text-center leading-relaxed px-4 md:px-0'>
								{item.title}
							</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurServices;
