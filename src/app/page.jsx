import BringingAudio from './components/BringingAudio';
import Hero from './components/Hero';
import HomePageProductSection1 from './components/HomePageProductSections/HomePageProductSection1';
import HomePageProductSection2 from './components/HomePageProductSections/HomePageProductSection2';
import ProductNavigationBar from './components/ProductNavigation/ProductNavigationBar';

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<Hero />
			<ProductNavigationBar />
			<div className="mb-[4rem] flex w-full max-w-[37.8em] flex-col items-center  gap-[2.4rem] px-[2.4rem] sm:mt-[6rem] sm:max-w-none lg:mx-0 lg:mx-0 lg:max-w-[111rem] lg:gap-[4.8rem] lg:px-0">
				<HomePageProductSection1 />
				<HomePageProductSection2 />
			</div>
			<BringingAudio />
		</div>
	);
}
