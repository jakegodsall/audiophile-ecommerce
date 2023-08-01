import Image from 'next/image';
import Link from 'next/link';

const ProductListItem = ({ product }) => {
	return (
		<div className="flex flex-col items-center  px-[2.4rem] text-center">
			<img
				src={product.image.mobile}
				alt=""
				width={327}
				height={352}
				className="rounded-2xl"
			/>
			<div className="mt-[3.2rem] flex flex-col items-center gap-[2.4rem]">
				<p className="text-[1.4rem] uppercase tracking-[1rem] text-primary-orange">
					new product
				</p>
				<p className="text-[2.8rem] font-bold uppercase tracking-[0.1rem]">
					{product.name}
				</p>
				<p className="text-[1.5rem] text-black/50 ">
					{product.description}
				</p>
				<Link
					href={`headphones/${product.slug}`}
					className="w-auto bg-primary-orange px-[3rem] py-[1.5rem] text-[1.3rem] font-bold uppercase tracking-[0.1rem] text-white"
				>
					See Product
				</Link>
			</div>
		</div>
	);
};

export default ProductListItem;
