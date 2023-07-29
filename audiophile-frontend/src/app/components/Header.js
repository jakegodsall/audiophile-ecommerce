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
		<header className="flex items-center justify-between px-[2.4rem] py-[3.2rem]">
			<div className="flex items-center justify-between gap-x-[7.5rem]">
				<Hamburger
					isActive={mobileMenuOpen}
					setIsActive={setIsActiveHandler}
				/>
				<Image
					src={Logo}
					width={143}
					height={23}
					className="h-[2.5rem] w-[14.3rem]"
					alt="audiophile logo"
				/>
			</div>
			<Image src={CartIcon} alt="shopping cart" />
		</header>
	);
};

export default Header;
