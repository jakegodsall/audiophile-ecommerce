'use client';

import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Image from 'next/image';
import { ProductsContext } from '@/app/context/ProductsContext';
import Link from 'next/link';
import CartItem from './CartItem';
import {
	formatCurrency,
	getSelectedProducts,
	getTotalPrice,
} from '@/app/utilities/dataTransform';

const CartModal = ({ handleCartModal }) => {
	const { cart, setCart } = useContext(CartContext);
	const { products } = useContext(ProductsContext);

	const productArray = getSelectedProducts(cart, products);

	const totalPrice = getTotalPrice(productArray);
	console.log(productArray);

	return (
		<div
			className="absolute bottom-[9rem] left-0 right-0 top-[9rem] z-20 h-full bg-black/40"
			onClick={handleCartModal}
		>
			<div className="relative mx-[2.4rem] mt-[2.4rem] flex flex-col items-center rounded-[0.8rem] bg-white px-[2.8rem] py-[3.2rem]">
				<h3 className=" mb-[3.2rem] self-start text-[1.8rem] font-bold uppercase tracking-[0.12rem]">
					Cart {`(${productArray.length})`}
				</h3>
				<ul className="mb-[3.2rem] flex w-full flex-col gap-y-[2.4rem]">
					{productArray.map((product) => {
						return (
							<li key={product.id}>
								<CartItem product={product} />
							</li>
						);
					})}
				</ul>
				<div className="mb-[3.2rem] flex w-full justify-between">
					<p className="text-[1.5rem] font-medium uppercase text-black/50">
						total
					</p>
					<p className="text-[1.8rem] font-bold uppercase">
						{totalPrice !== 0
							? formatCurrency(totalPrice)
							: formatCurrency(0)}
					</p>
				</div>
				<Link
					href="/checkout"
					className="w-full bg-primary-orange px-[5.5rem] py-[2rem] text-center text-[1.3rem] font-bold uppercase leading-[0.1rem] text-white"
				>
					Checkout
				</Link>
			</div>
		</div>
	);
};

export default CartModal;
