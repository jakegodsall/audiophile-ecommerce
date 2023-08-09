import Hero from './components/Hero';
import HomePageProductSection1 from './components/HomePageProductSections/HomePageProductSection1';
import ProductNavigationBar from './components/ProductNavigation/ProductNavigationBar';

export default function Home() {
	return (
		<div>
			<Hero />
			<HomePageProductSection1 />
			<ProductNavigationBar />
		</div>
	);
}
