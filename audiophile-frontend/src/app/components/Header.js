import Image from 'next/image';

import Logo from '../../../public/images/shared/desktop/logo.svg';
import CartIcon from '../../../public/images/shared/desktop/icon-cart.svg';

const Header = () => {
	return (
		<header className="flex items-center justify-between px-[2.4rem] py-[3.2rem]">
			<div className="items-cente flex justify-between">
				<div>Hamburger</div>
				<Image
					src={Logo}
					width={143}
					height={23}
					className="h-[2.5rem] w-[14.3rem]"
				/>
			</div>
			<Image src={CartIcon} />
		</header>
	);
};

export default Header;
