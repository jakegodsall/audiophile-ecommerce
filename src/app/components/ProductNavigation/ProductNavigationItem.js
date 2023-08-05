import Image from 'next/image';
import Link from 'next/link';

import IconArrowRight from '../../../../public/images/shared/desktop/icon-arrow-right.svg';

const ProductNavigationItem = ({ product }) => {
	return (
		<div className="relative flex w-full max-w-[32.7rem] flex-col lg:max-w-[35rem] ">
			<Image
				src={product.image}
				alt="headphones"
				className="absolute left-0 right-0 top-[-4rem] mx-auto h-[10.4rem] w-auto lg:h-auto lg:w-[15rem]"
			/>
			<div className="flex h-[14.5rem] w-full max-w-[32.7rem] flex-col items-center gap-[1.7rem] rounded-xl bg-[#F1F1F1] pb-[2.2rem] pt-[6.8rem] lg:h-[20.4rem] lg:max-w-[35rem] lg:pt-[10rem]">
				<p className="cursor-default text-[1.5rem] font-bold uppercase tracking-[0.18rem] lg:text-[1.8rem]">
					{product.title}
				</p>
				<Link href={product.link} className="flex items-center gap-4">
					<p className="text-[1.3rem] font-bold uppercase tracking-[0.1rem] opacity-50">
						shop
					</p>
					<Image src={IconArrowRight} alt="icon arrow right" />
				</Link>
			</div>
		</div>
	);
};

export default ProductNavigationItem;
