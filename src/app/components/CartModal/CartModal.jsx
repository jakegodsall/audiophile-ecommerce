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

	const clearCartHandler = () => {
		setCart([]);
	};

	return (
		<div
			className="absolute bottom-[9rem] left-0 right-0 top-[9rem] z-20 h-full max-w-[144rem] bg-black/40 md:top-[10.5rem] lg:ml-auto lg:mr-auto"
			onClick={handleCartModal}
		>
			<div className="fixed left-0 right-0 mx-6 mt-[2.4rem] flex max-w-[37rem] flex-col items-center rounded-[0.8rem] bg-white px-[2.8rem] py-[3.2rem] md:right-[4rem] md:ml-auto lg:right-[16.5rem] lg:mt-[3.2rem]">
				<div className="mb-[3.2rem] flex w-full flex-row items-center justify-between">
					<h3 className="self-start text-[1.8rem] font-bold uppercase tracking-[0.12rem]">
						Cart {`(${productArray.length})`}
					</h3>
					<p
						className="cursor-pointer text-[1.5rem] font-medium text-black/50 underline"
						onClick={clearCartHandler}
					>
						Remove All
					</p>
				</div>
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
