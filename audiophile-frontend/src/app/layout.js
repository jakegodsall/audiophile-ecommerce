import './globals.css';
import { Manrope } from 'next/font/google';

import Header from './components/Header';
import BringingAudio from './components/BringingAudio';
import ProductNavigationBar from './components/ProductNavigation/ProductNavigationBar';
import Footer from './components/Footer';
import { ProductsProvider } from './context/ProductsContext';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
	title: 'Audiophile',
	description: 'Audiophile Ecommerce Application',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={manrope.className}>
				<div className="flex h-screen w-full flex-col items-center bg-white">
					<div className="w-full max-w-[144rem]">
						<Header />
						<ProductsProvider>{children}</ProductsProvider>
						<ProductNavigationBar />
						<BringingAudio />
						<Footer />
					</div>
				</div>
			</body>
		</html>
	);
}
