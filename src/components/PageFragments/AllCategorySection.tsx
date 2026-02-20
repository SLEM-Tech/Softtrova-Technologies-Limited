"use client";
import React, { useEffect, useRef, useState } from "react";

import Picture from "../picture/Picture";
import { useCategories, WooCommerce } from "../lib/woocommerce";
import ProductCard from "../Cards/ProductCard";
import HomeCard from "../Cards/HomeCard";
import Carousel from "../Reusables/Carousel";
import Link from "next/link";
import { convertToSlug, convertToSlug2 } from "@constants";
import { useEncryptionHelper } from "../EncryptedData";
import { useDispatch } from "react-redux";
import { updateCategorySlugId } from "../config/features/subCategoryId";
import { useRouter } from "next/navigation";
import { heroBg, heroImage, heroImage2, heroImage3 } from "@public/images";
import { Rubik } from "next/font/google";
import HeroCarousel from "../Cards/HeroCarousel";
import AboutUs from "./AboutUs";
import WhyChooseUs from "./WhyChooseUs";
import { FiCheckCircle } from "@node_modules/react-icons/fi";

const rubik = Rubik({
	subsets: ["latin-ext"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	display: "swap", // Professional standard for performance
});

const AllCategorySection = () => {
	const sliderRef = useRef<HTMLDivElement>(null);
	const [maxScrollTotal, setMaxScrollTotal] = useState(0);
	const [scrollLeftTotal, setScrollLeftTotal] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const dispatch = useDispatch();
	const router = useRouter();

	// State to hold products by category
	const [categoryProductsMap, setCategoryProductsMap] = useState<{
		[key: string]: ProductType[];
	}>({});
	// WooCommerce API Category
	const {
		data: categories,
		isLoading: categoryWpIsLoading,
		isError: categoryIsError,
	} = useCategories("");

	const Categories: CategoryType[] = categories;
	const TotalCatgory = Categories?.length - 1;

	useEffect(() => {
		const fetchCategoryProducts = async () => {
			try {
				setIsLoading(true);

				const filteredCategories = categories
					?.filter((category: CategoryType) => category?.count > 0)
					?.slice(0, 5);

				if (filteredCategories) {
					const productsPromises = filteredCategories.map(
						async (category: CategoryType) => {
							const response = await WooCommerce.get(
								`products?category=${category?.id}`,
							);

							// Check if there is at least one product in the category
							const firstProductImage =
								response?.data.length > 0
									? response?.data[0]?.images[0]?.src
									: null;

							return {
								categoryId: category?.id,
								firstProductImage: firstProductImage, // Store the first product's image
							};
						},
					);

					const productsResults = await Promise.all(productsPromises);

					// Update the state with the first product images mapped by category
					const productsMap = productsResults.reduce(
						(acc: any, result: any) => ({
							...acc,
							[result.categoryId]: result.firstProductImage,
						}),
						{},
					);

					setCategoryProductsMap(productsMap);
				}
			} catch (error) {
				console.error("Error fetching category products:", error);
			} finally {
				setIsLoading(false);
			}
		};

		if (categories?.length) {
			fetchCategoryProducts();
		}
	}, [categories]);

	const handleNext = () => {
		if (sliderRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
			const maxScroll = scrollWidth - clientWidth;
			setScrollLeftTotal(scrollLeft);
			setMaxScrollTotal(maxScroll);

			sliderRef.current.scrollLeft += 600; // Adjust the scroll distance as needed
			setCurrentIndex((prevIndex) =>
				prevIndex < TotalCatgory - 1 ? prevIndex + 1 : prevIndex,
			);
		}
	};

	const handlePrev = () => {
		if (sliderRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
			const maxScroll = scrollWidth - clientWidth;
			setScrollLeftTotal(scrollLeft);
			setMaxScrollTotal(maxScroll);
			// console.log(scrollLeft);
			if (scrollLeft > 0) {
				sliderRef.current.scrollLeft -= 600; // Adjust the scroll distance as needed
				setCurrentIndex((prevIndex) =>
					prevIndex > 0 ? prevIndex - 1 : prevIndex,
				);
			}
		}
	};

	return (
		<>
			<section className='w-full min-h-[80vh] lg:h-screen flex flex-col lg:flex-row bg-brand-cream overflow-hidden'>
				{/* LEFT COLUMN: CONTENT */}
				<div className='w-full lg:w-1/2 flex flex-col justify-center px-8 py-12 lg:px-24 lg:py-0 space-y-8'>
					{/* "Welcome To" Badge */}
					<span className='inline-block px-4 py-1.5 rounded-full w-fit bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-wide'>
						Welcome To
					</span>

					{/* Main Heading (Serif Font) */}
					<h1
						className={`font-serif text-5xl lg:text-7xl font-bold text-gray-800 leading-[1.1] tracking-tight`}
					>
						The Place Of <br />
						Quality Computer <br />
						Accessories
					</h1>

					{/* Description */}
					<p className='text-gray-600 text-sm lg:text-base leading-relaxed max-w-lg'>
						{/* Adjusted copy to fit the refined brand voice */}
						{/* The Place of Quality Computer Accessories — */}
						Premium, reliable, and stylish tech essentials designed to enhance
						performance, productivity, and your ultimate computing experience.
					</p>

					{/* CTA Button (Black background, white text) */}
					<button
						onClick={() => router.push("/category")}
						className='w-fit bg-primary-500 hover:bg-primary-400 text-white px-10 py-4 font-bold uppercase tracking-widest transition-all active:scale-95 text-sm shadow-lg shadow-black/20'
					>
						Order Now &rarr;
					</button>
				</div>

				{/* RIGHT COLUMN: IMAGE */}
				<div className='w-full lg:w-1/2 relative h-[60vh] grid place-items-center lg:h-full bg-gray-200'>
					<Picture
						src={heroBg} // This should be your monitor arm image
						alt='Quality Computer Accessories'
						className='w-full h-full object-contain aspect-square'
					/>
					{/* No gradient overlay needed here due to the light background */}
				</div>
			</section>

			<AboutUs />
			{/* Category Section Styling Idea */}
			<div className='grid grid-cols-2 lg:grid-cols-5 mx-auto max-w-[1440px] mt-8 lg:mt-12 gap-4 lg:gap-6 px-4 lg:px-10'>
				{Categories?.slice(0, 5).map((cat) => {
					const displayImage = cat.image?.src ?? categoryProductsMap[cat?.id];

					return (
						<Link
							key={cat.id}
							href={`/category/${convertToSlug(cat.name)}-${cat.id}`}
							className='group relative h-40 lg:h-48 bg-white rounded-sm overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-[0_15px_30px_rgba(177,151,107,0.1)]'
						>
							{/* --- IMAGE LAYER --- */}
							<div className='absolute inset-0 w-full h-full overflow-hidden bg-[#F9F9F9]'>
								<Picture
									src={displayImage}
									alt={cat.name}
									className='w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0'
								/>
							</div>

							{/* --- LUXURY GRADIENT OVERLAY (Subtler) --- */}
							<div className='absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500' />

							{/* --- CONTENT LAYER --- */}
							<div className='absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6'>
								{/* Minimalist Sub-label */}
								<span className='text-[8px] lg:text-[9px] font-bold text-brand-gold uppercase tracking-[0.3em] block mb-1 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500'>
									New Selection
								</span>

								<h3 className='text-sm lg:text-base font-serif text-[#1A1A1A] uppercase tracking-tight group-hover:text-brand-gold transition-colors duration-300'>
									{cat.name}
								</h3>

								{/* Gold technical line - appears on hover */}
								<div className='h-[1.5px] w-0 bg-brand-gold mt-2 group-hover:w-8 transition-all duration-500' />
							</div>

							{/* Decorative Corner (Top Right) */}
							<div className='absolute top-2 right-2 size-4 border-t border-r border-brand-gold/20 group-hover:border-brand-gold/60 transition-colors duration-500' />
						</Link>
					);
				})}
			</div>

			{/* </Carousel> */}
		</>
	);
};

export default AllCategorySection;
