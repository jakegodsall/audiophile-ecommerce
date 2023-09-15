'use client';

import React, { useContext } from 'react';
import { getSelectedProducts } from '@/app/utilities/dataTransform';
import { CartContext } from '@/app/context/CartContext';
import { ProductsContext } from '@/app/context/ProductsContext';

const SummaryDetails = () => {
	const { cart } = useContext(CartContext);
	const { products } = useContext(ProductsContext);

	const selectedProducts = getSelectedProducts(cart, products);

	return (
		<div>
			<ul>
				{selectedProducts.map((product) => {
					return <li key={product.id}></li>;
				})}
			</ul>
			<button type="submit">Continue & Pay</button>
		</div>
	);
};

export default SummaryDetails;
