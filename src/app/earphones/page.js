'use client';

import { useContext } from 'react';

import ProductList from '../components/ProductList/ProductList';
import { ProductsContext } from '../context/ProductsContext';

const Earphones = () => {
	const { products } = useContext(ProductsContext);

	const EARPHONES = products.filter(
		(product) => product.category === 'earphones',
	);

	return (
		<div>
			<div className="flex flex-col items-center bg-black py-[3.2rem]">
				<h1 className="mx-auto bg-black text-[2.8rem] font-bold uppercase tracking-[.2rem] text-white">
					Earphones
				</h1>
			</div>
			<div className="pt-[6.4rem]">
				<ProductList products={EARPHONES} />
			</div>
		</div>
	);
};

export default Earphones;
