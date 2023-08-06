import Link from 'next/link';

const ProductListItem = ({ product, ltrKey }) => {
	return (
		<div
			className={
				ltrKey % 2 === 0
					? 'flex flex-col items-center px-[2.4rem] text-center sm:max-w-[68.9rem] sm:px-[4rem] lg:max-w-none lg:flex-row lg:gap-[12.5rem] lg:px-[16.5rem]'
					: 'flex flex-col items-center px-[2.4rem] text-center sm:max-w-[68.9rem] sm:px-[4rem] lg:max-w-none lg:flex-row-reverse lg:gap-[12.5rem] lg:px-[16.5rem]'
			}
		>
			<picture className="lg:max-w-[56rem] lg:flex-1">
				<source
					media="(min-width: 1024px)"
					srcSet={product.categoryImage.desktop}
				/>
				<source
					media="(min-width: 640px)"
					srcSet={product.categoryImage.tablet}
				/>
				<img
					src={product.categoryImage.mobile}
					alt={product.name}
					className="w-full rounded-2xl lg:max-w-[56rem]"
				/>
			</picture>
			<div className="mt-[3.2rem] flex flex-col items-center gap-[2.4rem] sm:max-w-[57.2rem] lg:flex-1 lg:items-start lg:text-left">
				<p
					className={
						product.new
							? 'text-[1.4rem] uppercase tracking-[1rem] text-primary-orange'
							: 'hidden'
					}
				>
					new product
				</p>
				<p className="text-[2.8rem] font-bold uppercase tracking-[0.1rem] sm:text-[4rem]">
					{product.name}
				</p>
				<p className="text-[1.5rem] leading-[2.5rem] text-black/50">
					{product.description}
				</p>
				<Link
					href={`${product.category}/${product.slug}`}
					className="mt-[1.2rem] w-auto bg-primary-orange px-[3rem] py-[1.5rem] text-[1.3rem] font-bold uppercase tracking-[0.1rem] text-white"
				>
					See Product
				</Link>
			</div>
		</div>
	);
};

export default ProductListItem;
