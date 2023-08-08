const BringingAudio = () => {
	return (
		<div className="flex flex-col items-center bg-white px-[2.4rem] py-[4rem] lg:flex-row-reverse lg:justify-center lg:gap-[12.5rem] lg:px-[4rem] lg:py-[16rem]">
			<picture>
				<source
					media="(min-width: 1024px)"
					srcSet="/images/shared/desktop/image-best-gear.jpg"
				/>
				<source
					media="(min-width: 640px)"
					srcSet="/images/shared/tablet/image-best-gear.jpg"
				/>
				<img
					src="/images/shared/mobile/image-best-gear.jpg"
					alt="man with headphones"
					className="w-full rounded-2xl sm:max-w-[75rem] lg:max-w-[58rem]"
				/>
			</picture>

			<div className="my-[4.2rem] flex flex-col items-center gap-[3.2rem] sm:max-w-[57rem] lg:max-w-[44.5rem] ">
				<h3 className="text-center text-[2.8rem] font-bold uppercase tracking-[0.1rem] sm:text-[4rem] sm:leading-[4.4rem] sm:tracking-[0.15rem] lg:text-left">
					Bringing you the{' '}
					<span className="text-primary-orange">best</span> audio gear
				</h3>
				<p className="text-center text-[1.5rem] leading-[2.5rem] text-black/50 lg:text-left">
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
