import Image from 'next/image';

import MobileImage from '../../../public/images/shared/mobile/image-best-gear.jpg';
import TabletImage from '../../../public/images/shared/tablet/image-best-gear.jpg';
import DesktopImage from '../../../public/images/shared/desktop/image-best-gear.jpg';

const BringingAudio = () => {
	return (
		<div className="flex flex-col items-center bg-white px-[2.4rem] py-[4rem]">
			<Image
				src={MobileImage}
				width="327"
				height="300"
				className="rounded-2xl"
			/>
			<div className="my-[4.2rem] flex flex-col items-center gap-[3.2rem]">
				<h3 className="text-center text-[2.8rem] font-bold uppercase tracking-[1px] ">
					Bringing you the{' '}
					<span className="text-primary-orange">best</span> audio gear
				</h3>
				<p className="text-center text-[1.5rem] leading-[2.5rem] text-black/50">
					Located at the heart of New York City, Audiophile is the
					premier store for high end headphones, earphones, speakers,
					and audio accessories. We have a large showroom and luxury
					demonstration rooms available for you to browse and
					experience a wide range of our products. Stop by our store
					to meet some of the fantastic people who make Audiophile the
					best place to buy your portable audio equipment.
				</p>
			</div>
		</div>
	);
};

export default BringingAudio;
