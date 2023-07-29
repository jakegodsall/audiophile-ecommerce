import Image from 'next/image';

import Logo from '../../../public/images/shared/desktop/logo.svg';
import FacebookLogo from '../../../public/images/shared/desktop/icon-facebook.svg';
import TwitterLogo from '../../../public/images/shared/desktop/icon-twitter.svg';
import InstaLogo from '../../../public/images/shared/desktop/icon-instagram.svg';

const Footer = () => {
	return (
		<footer className="flex flex-col items-center pb-[3.8rem]">
			<div className="flex max-w-[32.7rem] flex-col items-center gap-[4.8rem]">
				<div className="h-[0.4rem] w-[10rem] bg-primary-orange"></div>
				<Image
					src={Logo}
					alt="logo"
					width={143}
					height={25}
					className="h-[2.5rem] w-[14.3rem]"
				/>
				<nav>
					<ul className="flex flex-col gap-[1.6rem]">
						<li className="letter-spacing-[2px] cursor-pointer text-center text-[1.3rem] uppercase tracking-[2px] text-white hover:text-primary-orange">
							home
						</li>
						<li className="letter-spacing-[2px] cursor-pointer text-center text-[1.3rem] uppercase tracking-[2px] text-white hover:text-primary-orange">
							headphones
						</li>
						<li className="letter-spacing-[2px] cursor-pointer text-center text-[1.3rem] uppercase tracking-[2px] text-white hover:text-primary-orange">
							speakers
						</li>
						<li className="letter-spacing-[2px] cursor-pointer text-center text-[1.3rem] uppercase tracking-[2px] text-white hover:text-primary-orange">
							earphones
						</li>
					</ul>
				</nav>
				<p className="text-center text-[1.5rem] leading-[2.5rem] tracking-[.2px] text-white/50">
					Audiophile is an all in one stop to fulfill your audio
					needs. We're a small team of music lovers and sound
					specialists who are devoted to helping you get the most out
					of personal audio. Come and visit our demo facility - we're
					open 7 days a week.
				</p>
				<p className="text-center text-[1.5rem] font-bold tracking-[.2px] text-white/50">
					Copyright 2021. All Rights Reserved
				</p>
				<div>
					<ul className="flex gap-[2rem]">
						<li>
							<a href="#">
								<Image
									src={FacebookLogo}
									width={24}
									height={24}
									alt="facebook logo"
								/>
							</a>
						</li>
						<li>
							<a href="#">
								<Image
									src={TwitterLogo}
									width={24}
									height={24}
									alt="twitter logo"
								/>
							</a>
						</li>
						<li>
							<a href="#">
								<Image
									src={InstaLogo}
									width={24}
									height={24}
									alt="instagram logo"
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
