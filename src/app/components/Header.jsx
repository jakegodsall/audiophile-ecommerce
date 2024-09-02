'use client';

import { useState, useEffect, useContext } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Logo from '../../../public/images/shared/desktop/logo.svg';
import CartIcon from '../../../public/images/shared/desktop/icon-cart.svg';
import Hamburger from './UI/Hamburger';
import MobileMenu from './MobileMenu/MobileMenu';
import CartModal from './CartModal/CartModal';
import { CartContext } from '../context/CartContext';
import { AnimatePresence } from 'framer-motion';

const Header = () => {
	const router = useRouter();
	const { cart } = useContext(CartContext);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [cartModalOpen, setCartModalOpen] = useState(false);
	const [numberInCart, setNumberInCart] = useState(0);

	useEffect(() => {
		setNumberInCart(
			cart.reduce((accumulator, product) => {
				return accumulator + product.quantity;
			}, 0),
		);
	}, [cart]);

	const closeMenuFromModal = () => {
		setMobileMenuOpen((prevState) => !prevState);
	};

	const handleCartModal = () => {
		setCartModalOpen((prevState) => !prevState);
	};

	const forceCloseCartModal = () => {
		setCartModalOpen(false);
	};

	const setIsActiveHandler = () => {
		setMobileMenuOpen((prevState) => !prevState);
	};

	return (
		<header className="fixed z-30 flex w-full max-w-[144rem] items-center justify-between border-b-[1px] border-white/10 bg-black px-[2.4rem] py-[3.2rem] sm:px-[4rem] sm:py-[4rem] lg:justify-between">
			<div className="lg:hidden">
				<Hamburger
					isActive={mobileMenuOpen}
					setIsActive={setIsActiveHandler}
				/>
			</div>
			<Image
				src={Logo}
				width={143}
				height={23}
				className="h-[2.5rem] w-[14.3rem] cursor-pointer sm:ml-[4.2rem] lg:ml-0"
				alt="audiophile logo"
				onClick={() => router.push('/')}
			/>

			<nav className="hidden w-[0] lg:flex lg:w-[45rem]">
				<ul className="flex gap-[3.4rem]">
					<li className="letter-spacing-[2px] cursor-pointer text-[1.3rem] uppercase tracking-[2px] text-white active:text-primary-orange">
						<Link href="/" onClick={forceCloseCartModal}>
							home
						</Link>
					</li>
					<li className="letter-spacing-[2px] cursor-pointer text-[1.3rem] uppercase tracking-[2px] text-white active:text-primary-orange">
						<Link href="/headphones" onClick={forceCloseCartModal}>
							headphones
						</Link>
					</li>
					<li className="letter-spacing-[2px] cursor-pointer text-[1.3rem] uppercase tracking-[2px] text-white active:text-primary-orange">
						<Link href="/speakers" onClick={forceCloseCartModal}>
							speakers
						</Link>
					</li>
					<li className="letter-spacing-[2px] cursor-pointer text-[1.3rem] uppercase tracking-[2px] text-white active:text-primary-orange">
						<Link href="/earphones" onClick={forceCloseCartModal}>
							earphones
						</Link>
					</li>
				</ul>
			</nav>
			<div className="relative">
				<Image
					src={CartIcon}
					alt="shopping cart"
					className="cursor-pointer sm:ml-auto lg:ml-0"
					onClick={handleCartModal}
				/>
				{numberInCart > 0 && (
					<p className="absolute right-[-1rem] top-[-1.2rem] rounded-full bg-primary-orange p-[.4rem] text-white">
						{numberInCart}
					</p>
				)}
			</div>
			<AnimatePresence>
				{mobileMenuOpen && (
					<MobileMenu closeMenu={closeMenuFromModal} />
				)}
			</AnimatePresence>
			<AnimatePresence>
				{cartModalOpen && (
					<CartModal handleCartModal={handleCartModal} />
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;
