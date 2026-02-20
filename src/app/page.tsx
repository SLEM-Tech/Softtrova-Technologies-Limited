import AppLayout from "@src/components/AppLayout";
import AllCategorySection from "@src/components/PageFragments/AllCategorySection";
import SortedProducts from "./(Home)/_components/SortedProducts";
import { SEODATA } from "@constants/seoContants";
import { Metadata } from "next";
import AppMenu from "@src/components/Navbars/AppMenu";
import FaqAccordion from "@src/components/Reusables/Accordion/FaqAccordion";
import MachineMaintenance from "./(Home)/_components/MachineMaintenance";
import BestSellingBanner from "./(Home)/_components/BestSellingBanner";

const { description, title, ogImage, keywords } = SEODATA.home;
export const metadata: Metadata = {
	title: title,
	description: description,
	keywords: keywords,
	icons: ogImage,
	openGraph: {
		images: [
			{
				url: ogImage ?? "",
			},
		],
	},
};

const page = () => {
	return (
		<AppLayout className=' mt-32 lg:mt-0'>
			<AllCategorySection />
			<div className='mx-auto lg:pl-2 mt-4'>
				<SortedProducts />
			</div>
			<BestSellingBanner />
			<div className='pt-4 px-2 sm:px-0 mx-auto max-w-[1256px] mt-6 sm:mt-12'>
				<div className='sm:mt-3'>
					<section className='flex w-full flex-col items-center pt-5 lg:pt-16 text-center'>
						<h3 className='font-semibold text-xl sm:text-2xl slg:text-4xl tracking-tighter'>
							Frequently Asked Question
						</h3>
						<FaqAccordion />
					</section>
				</div>
			</div>
			<AppMenu />
		</AppLayout>
	);
};

export default page;
