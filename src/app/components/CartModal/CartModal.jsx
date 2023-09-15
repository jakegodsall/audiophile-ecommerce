'use client';

import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Image from 'next/image';
import { ProductsContext } from '@/app/context/ProductsContext';
import QuantitySelector from '../UI/QuantitySelector';
import Link from 'next/link';

const CartModal = ({ handleCartModal }) => {
	const { cart, setCart } = useContext(CartContext);
	const { products } = useContext(ProductsContext);

	console.log(products);

	console.log('from cart', cart);

	const dummyCart = [
		{
			productId: 3,
			quantity: 6,
		},
	];

	const product = products.find(
		(product) => product.id === dummyCart[0].productId,
	);

	const reducedProduct = [
		{
			id: product.id,
			name: product.name,
			price: product.price,
			image: product.image.mobile,
			quantity: dummyCart[0].quantity,
		},
	];

	console.log(reducedProduct);

	return (
		<div
			className="absolute bottom-[9rem] left-0 right-0 top-[9rem] z-20 h-full bg-black/40"
			onClick={handleCartModal}
		>
			<div className="relative mx-[2.4rem] mt-[2.4rem] flex flex-col items-center rounded-[0.8rem] bg-white px-[2.8rem] py-[3.2rem]">
				<h3 className=" mb-[3.2rem] self-start text-[1.8rem] font-bold uppercase tracking-[0.12rem]">
					Cart {`(${reducedProduct.length})`}
				</h3>
				<ul className="mb-[3.2rem] flex flex-col">
					{reducedProduct.map((product) => {
						return (
							<li key={product.id}>
								<div className="flex items-center">
									<Image
										src={product.image}
										width={64}
										height={64}
										className="mr-[1.6rem]"
									/>
									<div>
										<p className="text-[1.5rem] font-bold leading-[2.5rem]">
											{product.name}
										</p>
										<p className="text-[1.4rem] font-bold text-black/50">
											${product.price}
										</p>
									</div>
									<QuantitySelector
										quantity={product.quantity}
									/>
								</div>
							</li>
						);
					})}
				</ul>
				<div className="mb-[3.2rem] flex w-full justify-between">
					<p className="text-[1.5rem] font-medium uppercase text-black/50">
						total
					</p>
					<p className="text-[1.8rem] font-bold uppercase">$ 5,396</p>
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
