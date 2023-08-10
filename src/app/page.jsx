import Hero from './components/Hero';
import HomePageProductSection1 from './components/HomePageProductSections/HomePageProductSection1';
import ProductNavigationBar from './components/ProductNavigation/ProductNavigationBar';

export default function Home() {
	return (
		<div>
			<Hero />
			<ProductNavigationBar />
			<div className="mx-[2.4rem] mt-[9rem] flex flex-col items-center sm:mt-[6rem] lg:mx-[3.9rem]">
				<HomePageProductSection1 />
			</div>
		</div>
	);
}
