import MobileImage from '../../../../public/images/home/mobile/image-speaker-zx7.jpg';
import TabletImage from '../../../../public/images/home/tablet/image-speaker-zx7.jpg';
import DesktopImage from '../../../../public/images/home/desktop/image-speaker-zx7.jpg';
import Link from 'next/link';

const HomePageProductSection1 = () => {
	return (
		<div className="mx-[2.4rem] flex flex-col items-center rounded-[0.8rem] bg-primary-orange">
			<picture>
				<source></source>
				<source></source>
				<img src={MobileImage} alt="" />
			</picture>
			<div className="flex max-w-[28rem] flex-col items-center">
				<p className="mb-[2.4rem] text-center text-[3.6rem] uppercase leading-[4rem] tracking-[0.129rem] text-white">
					ZX9 Speaker
				</p>
				<p className="mb-[2.4rem] text-center text-[1.5rem] leading-[2.5rem] text-white/75">
					Upgrade to premium speakers that are phenomenally built to
					deliver truly remarkable sound.
				</p>
				<Link
					href="speakers/zx7-speaker"
					className="mb-[5.5rem] bg-black px-[3rem] py-[1.5rem] text-center text-[1.3rem] uppercase tracking-[0.1rem] text-white"
				>
					See Product
				</Link>
			</div>
		</div>
	);
};

export default HomePageProductSection1;
