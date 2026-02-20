"use client";
import ProductCard2 from "@src/components/Cards/ProductCard2";
import { WooCommerce } from "@src/components/lib/woocommerce";
import GlobalLoader from "@src/components/modal/GlobalLoader";
import React, { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";

export const Loader = () => (
	<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 w-full'>
		{[1, 2, 3, 4].map((i) => (
			<div
				key={i}
				className='w-full aspect-[3/4] bg-white/50 animate-pulse rounded-sm'
			/>
		))}
	</div>
);

const SortedProducts = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [products, setProducts] = useState<any[]>([]);
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	useEffect(() => {
		const fetchNewArrivals = async () => {
			try {
				setIsLoading(true);
				// Fetching 8 products to show a full grid
				const response = await WooCommerce.get(
					"products?per_page=8&orderby=date&order=desc",
				);
				setProducts(response.data);
			} catch (error) {
				console.error("Error fetching products:", error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchNewArrivals();
	}, []);

	return (
		<section className='w-full py-12 md:py-24 bg-[#F5F4F0] px-4 md:px-10'>
			<div className='max-w-[1440px] mx-auto'>
				{/* --- Header Section: Sophisticated Serif Style --- */}
				<div className='flex flex-col items-center mb-12 md:mb-16'>
					<div className='relative inline-block text-center'>
						<span className='text-[10px] md:text-xs font-bold text-brand-gold uppercase tracking-[0.3em] mb-2 block'>
							Selection 01
						</span>
						<h2 className='font-serif text-3xl md:text-5xl text-gray-900 tracking-tight'>
							New Arrivals
						</h2>
						{/* Minimal Gold Underline */}
						<div className='absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[1.5px] bg-brand-gold' />
					</div>
				</div>

				{/* --- Product Grid: 2 cols on Mobile, 4 on Desktop --- */}
				<div className='min-h-[400px]'>
					{isLoading ? (
						<Loader />
					) : (
						<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-10'>
							{products.map((product: any) => (
								<div key={product.id} className='animate-fade-in'>
									<ProductCard2
										id={product?.id}
										image={product?.images[0]?.src}
										oldAmount={product?.regular_price}
										newAmount={product?.price}
										description={product?.name}
										// Pass category to match the design's sub-label
										category={product?.categories?.[0]?.name || "Component"}
									/>
								</div>
							))}
						</div>
					)}
				</div>

				{/* --- Centered Luxury Action Button --- */}
				{!isLoading && (
					<div className='mt-16 md:mt-24 flex justify-center'>
						<button
							onClick={() => router.push("/category")}
							className='bg-black hover:bg-gray-800 text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.25em] transition-all active:scale-95 flex items-center gap-3 group shadow-xl'
						>
							View All Products
							<FiArrowRight className='group-hover:translate-x-1 transition-transform text-brand-gold' />
						</button>
					</div>
				)}
			</div>

			<GlobalLoader isPending={isPending} />
		</section>
	);
};

export default SortedProducts;
