import './globals.css';
import { Manrope } from 'next/font/google';

import Header from './components/Header';
import BringingAudio from './components/BringingAudio';
import ProductNavigationBar from './components/ProductNavigation/ProductNavigationBar';
import Footer from './components/Footer';
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
	title: 'Audiophile',
	description: 'Audiophile Ecommerce Application',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={manrope.className + 'w-full'}>
				<div className="relative flex w-full flex-col items-center bg-white">
					<div className=" w-full max-w-[144rem]">
						<Header />
						<ProductsProvider>
							<CartProvider>{children}</CartProvider>
						</ProductsProvider>
						<ProductNavigationBar />
						<BringingAudio />
						<Footer />
					</div>
				</div>
			</body>
		</html>
	);
}
