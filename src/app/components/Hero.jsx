const Hero = () => {
	return (
		<div className="flex flex-col items-center bg-black bg-hero-mobile text-center">
			<p className="text-[1/4rem] tracking-[1rem] text-white/50">
				new product
			</p>
			<p className="text-[3.6rem] font-bold uppercase tracking-[1.25rem] text-white">
				XX99 Mark II Headphones
			</p>
			<p className="text-[1.5rem] font-medium text-white/75">
				Experience natural, lifelike audio and exceptional build quality
				made for the passionate music enthusiast.
			</p>
			<button
				className="bg-primary-orange px-[3rem] py-[1.5rem] text-[1.3rem] font-bold uppercase tracking-[0.1rem] text-white"
				type="button"
			>
				see product
			</button>
		</div>
	);
};

export default Hero;
