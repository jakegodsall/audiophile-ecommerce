'use client';

import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Image from 'next/image';
import { ProductsContext } from '@/app/context/ProductsContext';
import Link from 'next/link';
import CartItem from './CartItem';
import { getSelectedProducts } from '@/app/utilities/dataTransform';

const CartModal = ({ handleCartModal }) => {
	const { cart, setCart } = useContext(CartContext);
	const { products } = useContext(ProductsContext);

	// const productArray = getSelectedProducts(cart, products);

	const productArray = [
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

	const totalPrice = productArray.reduce((accumulator, currentItem) => {
		return (accumulator = currentItem.price * currentItem.quantity);
	}, 0);

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
						$ {totalPrice !== 0 ? totalPrice : 0}
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
