'use client';

import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Image from 'next/image';

const CartModal = ({ handleCartModal }) => {
	const { cart, setCart } = useContext(CartContext);

	console.log('from cart', cart);

	return (
		<div
			className="absolute bottom-[9rem] left-0 right-0 top-[9rem] z-20 h-full bg-black/40"
			onClick={handleCartModal}
		>
			<div className="relative mx-[2.4rem] mt-[2.4rem] rounded-[0.8rem] bg-white">
				<h3>Cart</h3>
				<ul>
					{cart.map((product) => {
						return (
							<li key={product.id}>
								<div>
									<Image />
									<div>{product.name}</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default CartModal;
