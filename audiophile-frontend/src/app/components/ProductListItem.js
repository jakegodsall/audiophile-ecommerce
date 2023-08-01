import Image from 'next/image';

const ProductListItem = ({ product }) => {
	return (
		<div className="flex flex-col items-center px-[2.4rem] text-center">
			<Image src="" alt="" />
			<div className="flex flex-col gap-[2.4rem]">
				<p className="text-[1.4rem] uppercase tracking-[1rem] text-primary-orange">
					new product
				</p>
				<p className="text-[2.8rem] font-bold uppercase tracking-[0.1rem]">
					{product.name}
				</p>
				<p className="text-[1.5rem] text-black/50 ">
					{product.description}
				</p>
				<a href="">See Product</a>
			</div>
		</div>
	);
};

export default ProductListItem;
