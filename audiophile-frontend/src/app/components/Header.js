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
		<header className="mx-[2.4rem] flex items-center justify-between border-b-[1px] border-white/10 py-[3.2rem] sm:mx-[4rem] sm:py-[4rem]">
			<div className="flex items-center justify-between gap-x-[7.5rem] sm:gap-[4.2rem] ">
				<div className="md:hidden">
					<Hamburger
						isActive={mobileMenuOpen}
						setIsActive={setIsActiveHandler}
					/>
				</div>
				<Image
					src={Logo}
					width={143}
					height={23}
					className="h-[2.5rem] w-[14.3rem]"
					alt="audiophile logo"
				/>
			</div>
			<nav className="w-[0]  overflow-hidden transition-all duration-1000 md:w-[45rem]">
				<ul className="flex gap-[3.4rem]">
					<li className="letter-spacing-[2px] cursor-pointer text-[1.3rem] uppercase tracking-[2px] text-white hover:text-primary-orange">
						home
					</li>
					<li className="letter-spacing-[2px] cursor-pointer text-[1.3rem] uppercase tracking-[2px] text-white hover:text-primary-orange">
						headphones
					</li>
					<li className="letter-spacing-[2px] cursor-pointer text-[1.3rem] uppercase tracking-[2px] text-white hover:text-primary-orange">
						speakers
					</li>
					<li className="letter-spacing-[2px] cursor-pointer text-[1.3rem] uppercase tracking-[2px] text-white hover:text-primary-orange">
						earphones
					</li>
				</ul>
			</nav>
			<Image
				src={CartIcon}
				alt="shopping cart"
				className="cursor-pointer"
			/>
		</header>
	);
};

export default Header;
