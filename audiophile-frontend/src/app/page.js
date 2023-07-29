import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
	return (
		<div className="flex h-screen w-full flex-col items-center bg-black">
			<div className="w-full max-w-[101rem]">
				<Header />
				<div className="h-[10rem] w-full bg-white"></div>
				<Footer />
			</div>
		</div>
	);
}
