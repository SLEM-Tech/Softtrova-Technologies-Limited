import AppLayout from "@src/components/AppLayout";
import Picture from "@src/components/picture/Picture";
import { AboutUsContent } from "@utils/contents/General";

const page = () => {
	return (
		<AppLayout>
			<main className='mx-auto mt-32 md:mt-36 pb-10 slg:pb-32'>
				<section className='flex w-full flex-col items-center pt-7 slg:pt-16 gap-4 px-16 text-center'>
					<h3 className='font-semibold  text-xl md:text-3xl tracking-tighter'>
						About Us
					</h3>
				</section>

				<div className='grid slg:grid-cols-2 mt-2 sm:mt-5 slg:mt-10 px-4 slg:px-16 overflow-hidden'>
					<AboutUsContent />
				</div>
			</main>
		</AppLayout>
	);
};

export default page;
