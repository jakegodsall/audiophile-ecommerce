'use client';

import { useContext } from 'react';
import ProductList from '../components/ProductList/ProductList';
import { ProductsContext } from '../context/ProductsContext';

const Speakers = () => {
	const { products } = useContext(ProductsContext);

	const SPEAKERS = products.filter(
		(product) => product.category === 'speakers',
	);

	return (
		<div>
			<div className="flex flex-col items-center bg-black py-[3.2rem] ">
				<h1 className="mx-auto bg-black text-[2.8rem] font-bold uppercase tracking-[.2rem] text-white">
					Speakers
				</h1>
			</div>
			<div className="pt-[6.4rem] sm:pt-[12rem] lg:pt-[16rem]">
				<ProductList products={SPEAKERS} />
			</div>
		</div>
	);
};

export default Speakers;
