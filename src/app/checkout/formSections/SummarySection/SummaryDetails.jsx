'use client';

import React, { useContext } from 'react';
import { getSelectedProducts } from '@/app/utilities/dataTransform';
import { CartContext } from '@/app/context/CartContext';
import { ProductsContext } from '@/app/context/ProductsContext';
import SummaryItem from './SummaryItem';

const SummaryDetails = () => {
	const { cart } = useContext(CartContext);
	const { products } = useContext(ProductsContext);

	// const selectedProducts = getSelectedProducts(cart, products);
	const selectedProducts = [
		{
			id: 2,
			name: 'XX59',
			price: 899,
			image: '/images/product-xx59-headphones/mobile/image-product.jpg',
			quantity: 4,
		},
		{
			id: 4,
			name: 'XX99',
			price: 2999,
			image: '/images/product-xx99-mark-two-headphones/mobile/image-product.jpg',
			quantity: 3,
		},

		{
			id: 6,
			name: 'ZX9',
			price: 4500,
			image: '/images/product-zx9-speaker/mobile/image-product.jpg',
			quantity: 115,
		},
	];

	return (
		<div className="w-full rounded-[0.8rem] bg-white px-[2.4rem] py-[3.2rem]">
			<h3 className="mb-[3.2rem] text-[1.8rem] font-bold uppercase tracking-[0.12rem]">
				Summary
			</h3>
			<ul className="mb-[3.2rem] flex flex-col gap-[3.2rem]">
				{selectedProducts.map((product) => {
					return (
						<li key={product.id}>
							<SummaryItem product={product} />
						</li>
					);
				})}
			</ul>
			<div>
				<div className="mb-[0.8rem] flex items-center justify-between">
					<p className="text-[1.5rem] font-medium uppercase text-black/50">
						Total
					</p>
					<p className="text-[1.8rem] font-bold uppercase">$5396</p>
				</div>
				<div className="mb-[0.8rem] flex items-center justify-between">
					<p className="text-[1.5rem] font-medium uppercase text-black/50">
						Shipping
					</p>
					<p className="text-[1.8rem] font-bold uppercase">$ 50</p>
				</div>
				<div className="mb-[2.4rem] flex items-center justify-between">
					<p className="text-[1.5rem] font-medium uppercase text-black/50">
						VAT (INCLUDED)
					</p>
					<p className="text-[1.8rem] font-bold uppercase">$ 1,079</p>
				</div>
				<div className=" mb-[3.2rem] flex items-center justify-between">
					<p className="text-[1.5rem] font-medium uppercase text-black/50">
						Grand Total
					</p>
					<p className="text-[1.8rem] font-bold uppercase text-primary-orange">
						$5,466
					</p>
				</div>
				<button
					type="submit"
					className="w-full bg-primary-orange py-[1.5rem] text-[1.3rem] font-bold uppercase text-white "
				>
					Continue & Pay
				</button>
			</div>
		</div>
	);
};

export default SummaryDetails;
