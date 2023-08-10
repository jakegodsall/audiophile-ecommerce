import Link from 'next/link';

const HomePageProductSection2 = () => {
	return (
		<div className="relative w-full overflow-hidden rounded-[0.8rem] sm:max-w-[75rem] lg:max-w-[111rem]">
			<picture>
				<source
					media="(min-width: 1024px)"
					srcSet="/images/home/desktop/image-speaker-zx7.jpg"
				/>
				<source
					media="(min-width: 640px)"
					srcSet="/images/home/tablet/image-speaker-zx7.jpg"
				/>
				<img
					src="/images/home/mobile/image-speaker-zx7.jpg"
					alt="ZX7 Speaker"
					className=" w-full"
				/>
			</picture>
			<div className="absolute left-[10%] top-[30%] flex flex-col items-start sm:left-[6.8rem] sm:top-[10rem]">
				<p className="mb-[3.2rem] text-[2.8rem] font-semibold uppercase tracking-[0.2rem]">
					ZX7 speaker
				</p>
				<Link
					className="border-[0.1rem] border-black px-[3rem] py-[1.5rem] text-[1.3rem] font-bold uppercase tracking-[0.1rem]"
					href="speakers/zx7-speaker"
				>
					See product
				</Link>
			</div>
		</div>
	);
};

export default HomePageProductSection2;
