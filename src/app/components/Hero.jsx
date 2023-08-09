'use client';

import { useRouter } from 'next/navigation';

const Hero = () => {
	const router = useRouter();

	return (
		<div className="bg- flex flex-col items-center bg-black bg-hero-mobile bg-cover bg-center bg-repeat-x text-center sm:bg-hero-tablet lg:items-start lg:bg-hero-desktop">
			<div className="mt-[10.8rem] flex flex-col items-center p-[3rem] sm:mt-[12.8rem] sm:p-0 lg:ml-[16.5rem] lg:items-start">
				<p className="mb-[1.6rem] text-[1.4rem] uppercase tracking-[1rem] text-white/50 sm:mb-[2.4rem]">
					new product
				</p>
				<p className="mb-[2.4rem] text-[3.6rem] font-normal uppercase tracking-[0.125rem] text-white sm:max-w-[40rem] sm:text-[5.6rem] sm:font-bold lg:text-left">
					XX99 Mark II Headphones
				</p>
				<p className="mb-[2.8rem] max-w-[32rem] text-[1.5rem] font-medium text-white/75 sm:mb-[4rem] lg:text-left">
					Experience natural, lifelike audio and exceptional build
					quality made for the passionate music enthusiast.
				</p>
				<button
					className="mb-[11.2rem] bg-primary-orange px-[3rem] py-[1.5rem] text-[1.3rem] font-bold uppercase tracking-[0.1rem] text-white sm:mb-[16.8rem]"
					type="button"
					onClick={() =>
						router.push('headphones/xx99-mark-two-headphones')
					}
				>
					see product
				</button>
			</div>
		</div>
	);
};

export default Hero;
