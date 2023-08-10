import Link from 'next/link';

const HomePageProductSection1 = () => {
	return (
		<div className="flex w-full flex-col items-center overflow-hidden rounded-[0.8rem] bg-primary-orange px-[2.3rem] sm:max-w-[75rem] lg:max-w-none lg:flex-row">
			<div className="relative">
				<picture>
					<source
						media="(min-width: 1024px)"
						src="/images/home/desktop/image-speaker-zx9.png"
					></source>
					<source
						media="(min-width: 640px)"
						src="/images/home/tablet/image-speaker-zx9.png"
					></source>
					<img
						src="/images/home/mobile/image-speaker-zx9.png"
						alt="ZX0 Speaker"
						className="mb-[3.2rem] mt-[5.5rem] max-w-[17.2rem] lg:relative lg:bottom-[-4rem] lg:mx-[11.8rem] lg:max-w-[410rem]"
					/>
				</picture>
			</div>
			<div className="flex max-w-[28rem] flex-col items-center lg:items-start">
				<p className="mb-[2.4rem] max-w-[18rem] text-center text-[3.6rem] uppercase leading-[4rem] tracking-[0.129rem] text-white sm:max-w-[26rem] sm:text-[5.6rem] sm:leading-[5.6rem] lg:text-left">
					ZX9 Speaker
				</p>
				<p className="mb-[2.4rem] text-center text-[1.5rem] leading-[2.5rem] text-white/75 lg:mb-[4rem] lg:text-left">
					Upgrade to premium speakers that are phenomenally built to
					deliver truly remarkable sound.
				</p>
				<Link
					href="speakers/zx7-speaker"
					className="relative z-20 mb-[5.5rem] bg-black px-[3rem] py-[1.5rem] text-center text-[1.3rem] uppercase tracking-[0.1rem] text-white lg:mb-0"
				>
					See Product
				</Link>
			</div>
		</div>
	);
};

export default HomePageProductSection1;
