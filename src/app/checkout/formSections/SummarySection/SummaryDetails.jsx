'use client';

import React, { useContext } from 'react';
import {
	formatCurrency,
	getSelectedProducts,
	getTotalPrice,
} from '@/app/utilities/dataTransform';
import { CartContext } from '@/app/context/CartContext';
import { ProductsContext } from '@/app/context/ProductsContext';
import SummaryItem from './SummaryItem';

const SummaryDetails = () => {
	const { cart } = useContext(CartContext);
	const { products } = useContext(ProductsContext);

	const selectedProducts = getSelectedProducts(cart, products);

	const totalPrice = getTotalPrice(selectedProducts);
	const shippingPrice = 50;
	const vatPrice = totalPrice * 0.2;

	const summaryValues = {
		price: formatCurrency(getTotalPrice(selectedProducts)),
		shipping: formatCurrency(50),
		vat: formatCurrency(getTotalPrice(selectedProducts) * 0.2),
		total: formatCurrency(getTotalPrice(selectedProducts) + 50),
	};

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
					<p className="text-[1.8rem] font-bold uppercase">
						{summaryValues.price}
					</p>
				</div>
				<div className="mb-[0.8rem] flex items-center justify-between">
					<p className="text-[1.5rem] font-medium uppercase text-black/50">
						Shipping
					</p>
					<p className="text-[1.8rem] font-bold uppercase">
						{summaryValues.shipping}
					</p>
				</div>
				<div className="mb-[2.4rem] flex items-center justify-between">
					<p className="text-[1.5rem] font-medium uppercase text-black/50">
						VAT (INCLUDED)
					</p>
					<p className="text-[1.8rem] font-bold uppercase">
						{summaryValues.vat}
					</p>
				</div>
				<div className=" mb-[3.2rem] flex items-center justify-between">
					<p className="text-[1.5rem] font-medium uppercase text-black/50">
						Grand Total
					</p>
					<p className="text-[1.8rem] font-bold uppercase text-primary-orange">
						{summaryValues.totalPrice}
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
