'use client';

import { useState, useContext, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CartContext } from '../../context/CartContext';
import { ProductsContext } from '@/app/context/ProductsContext';
import Link from 'next/link';
import CartItem from './CartItem';
import {
	formatCurrency,
	getSelectedProducts,
	getTotalNumberOfProducts,
	getTotalPrice,
} from '@/app/utilities/dataTransform';

const CartModal = ({ handleCartModal, forceCloseCartModal }) => {
	const { products } = useContext(ProductsContext); // all available products
	const { cart, setCart } = useContext(CartContext); // items selected in user's cart

	// get array of selected products for rendering in the modal
	const productArray = getSelectedProducts(cart, products);

	const [totalPrice, setTotalPrice] = useState(0);

	// state for deciding whether to show cart items or empty message
	const [showEmptyMessage, setShowEmptyMessage] = useState(true);

	// total price of all items in the cart
	// const totalPrice = getTotalPrice(productArray);

	// total number of items in the cart
	const numOfProductsInCart = getTotalNumberOfProducts(cart);

	const clearCartHandler = () => {
		setCart([]);
		setShowEmptyMessage(false);

		setTimeout(() => {
			setShowEmptyMessage(true);
		}, 500);
	};

	useEffect(() => {
		const productArray = getSelectedProducts(cart, products);
		const total = getTotalPrice(productArray);
		setTotalPrice(total);
	});

	return (
		// overlay
		<>
			<motion.div
				className="fixed bottom-[9rem] left-0 right-0 top-[9rem] z-10 flex
			h-full max-w-[144rem] flex-col items-center bg-black/40
			md:top-[10.5rem] md:block lg:ml-auto lg:mr-auto"
				onClick={forceCloseCartModal}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0, transition: { delay: 0.2 } }}
			></motion.div>
			{/* cart modal */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { delay: 0.2 } }}
				exit={{ opacity: 0 }}
				className="fixed left-0 right-0 top-[9rem] z-20 mx-auto mt-[4rem] flex min-h-[32rem] w-[90%] max-w-[37rem] flex-col items-center rounded-[0.8rem] bg-white px-[2.8rem] py-[3.2rem] md:ml-auto md:mr-[4rem] md:w-full lg:absolute lg:mr-[16.5rem] lg:mt-[3.2rem]"
			>
				<div className="mb-[3.2rem] flex w-full flex-row items-center justify-between">
					<h3 className="self-start text-[1.8rem] font-bold uppercase tracking-[0.12rem]">
						Cart{' '}
						{numOfProductsInCart !== 0 &&
							`(${numOfProductsInCart})`}
					</h3>
					{numOfProductsInCart !== 0 && (
						<p
							className="cursor-pointer text-[1.5rem] font-medium text-black/50 underline"
							onClick={clearCartHandler}
						>
							Remove All
						</p>
					)}
				</div>
				<AnimatePresence>
					{numOfProductsInCart === 0 && showEmptyMessage && (
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="mt-[4rem] text-[1.6rem]"
						>
							Your cart is empty.
						</motion.p>
					)}
				</AnimatePresence>
				<AnimatePresence>
					{numOfProductsInCart !== 0 && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="flex w-full flex-col"
						>
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
								className="w-[60%] self-start bg-primary-orange  py-[2rem] text-center text-[1.3rem] font-bold uppercase leading-[0.1rem] text-white"
								onClick={handleCartModal}
							>
								Checkout
							</Link>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</>
	);
};

export default CartModal;
