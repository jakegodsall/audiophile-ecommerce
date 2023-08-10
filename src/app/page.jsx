import Hero from './components/Hero';
import HomePageProductSection1 from './components/HomePageProductSections/HomePageProductSection1';
import HomePageProductSection2 from './components/HomePageProductSections/HomePageProductSection2';
import ProductNavigationBar from './components/ProductNavigation/ProductNavigationBar';

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<Hero />
			<ProductNavigationBar />
			<div className="mx-[2.4rem] mt-[9rem] flex w-full flex-col items-center gap-[2.4rem] sm:mt-[6rem] lg:mx-0 lg:max-w-[111rem] lg:gap-[4.8rem]">
				<HomePageProductSection1 />
				<HomePageProductSection2 />
			</div>
		</div>
	);
}
