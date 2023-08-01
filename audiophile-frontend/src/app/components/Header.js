'use client';

import { useState } from 'react';

import Image from 'next/image';

import Logo from '../../../public/images/shared/desktop/logo.svg';
import CartIcon from '../../../public/images/shared/desktop/icon-cart.svg';
import Hamburger from './UI/Hamburger';

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const setIsActiveHandler = () => {
		setMobileMenuOpen((prevState) => !prevState);
	};

	return (
		<header className="flex items-center justify-between border-b-[1px] border-white/10 bg-black px-[2.4rem] py-[3.2rem] sm:mx-[4rem] sm:justify-start sm:py-[4rem] lg:justify-between">
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
				className="h-[2.5rem] w-[14.3rem] sm:ml-[4.2rem] lg:ml-0"
				alt="audiophile logo"
			/>

			<nav className="hidden w-[0] lg:flex lg:w-[45rem]">
				<ul className="flex gap-[3.4rem]">
					<li className="letter-spacing-[2px] cursor-pointer text-[1.3rem] uppercase tracking-[2px] text-white active:text-primary-orange">
						home
					</li>
					<li className="letter-spacing-[2px] cursor-pointer text-[1.3rem] uppercase tracking-[2px] text-white active:text-primary-orange">
						headphones
					</li>
					<li className="letter-spacing-[2px] cursor-pointer text-[1.3rem] uppercase tracking-[2px] text-white active:text-primary-orange">
						speakers
					</li>
					<li className="letter-spacing-[2px] cursor-pointer text-[1.3rem] uppercase tracking-[2px] text-white active:text-primary-orange">
						earphones
					</li>
				</ul>
			</nav>
			<Image
				src={CartIcon}
				alt="shopping cart"
				className="cursor-pointer sm:ml-auto lg:ml-0"
			/>
		</header>
	);
};

export default Header;
