import Image from 'next/image';

import HeadphonesImage from '../../../../public/images/shared/desktop/image-category-thumbnail-headphones.png';
import IconArrowRight from '../../../../public/images/shared/desktop/icon-arrow-right.svg';

const ProductNavigationItem = () => {
	return (
		<div className="relative flex w-full max-w-[32.7rem] flex-col">
			<Image
				src={HeadphonesImage}
				alt="headphones"
				className="absolute left-0 right-0 top-[-4rem] mx-auto h-[10.4rem] w-auto"
			/>
			<div className="flex h-[14.5rem] w-full max-w-[32.7rem] flex-col items-center gap-[1.7rem] rounded-xl bg-[#F1F1F1] pb-[2.2rem] pt-[6.8rem]">
				<p className="text-[1.5rem] font-bold uppercase tracking-[0.18rem]">
					Headphones
				</p>
				<a href="#/" class="flex items-center gap-4">
					<p className="text-[1.3rem] font-bold uppercase tracking-[0.1rem] opacity-50">
						shop
					</p>
					<Image src={IconArrowRight} alt="icon arrow right" />
				</a>
			</div>
		</div>
	);
};

export default ProductNavigationItem;
