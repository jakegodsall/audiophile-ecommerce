'use client';

import { useContext } from 'react';

import { ProductsContext } from '../context/ProductsContext';
import ProductList from '../components/ProductList/ProductList';

const Headphones = () => {
	const { products } = useContext(ProductsContext);

	const HEADPHONES = products.filter(
		(product) => product.category === 'headphones',
	);

	return (
		<div>
			<div className="flex flex-col items-center bg-black py-[3.2rem] ">
				<h1 className="mx-auto bg-black text-[2.8rem] font-bold uppercase tracking-[.2rem] text-white">
					Headphones
				</h1>
			</div>
			<div className="pt-[6.4rem] sm:pt-[12rem] lg:pt-[16rem]">
				<ProductList products={HEADPHONES} />
			</div>
		</div>
	);
};

export default Headphones;
