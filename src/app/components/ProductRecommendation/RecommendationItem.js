import { useRouter } from 'next/navigation';

const RecommendationItem = ({ product }) => {
	const router = useRouter();

	return (
		<div className="flex flex-col items-center gap-[3.2rem]">
			<picture>
				<source
					media="(min-width: 1024px)"
					srcSet={product.image.desktop}
				/>
				<source
					media="(min-width: 640px)"
					srcSet={product.image.tablet}
				/>
				<img
					src={product.image.mobile}
					alt={product.name}
					className="rounded-[0.8rem]"
				/>
			</picture>
			<p className="text-[2.4rem] font-bold uppercase tracking-[0.171rem]">
				{product.name}
			</p>
			<button
				onClick={() => router.push('/' + product.slug)}
				type="button"
				className="cursor-pointer bg-primary-orange px-[3rem] py-[1.5rem] text-[1.3rem] font-bold uppercase tracking-[0.1rem] text-white"
			>
				See product
			</button>
		</div>
	);
};

export default RecommendationItem;
