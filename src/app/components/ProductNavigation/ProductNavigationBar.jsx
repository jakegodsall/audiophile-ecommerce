import ProductNavigationItem from './ProductNavigationItem';

import HeadphoneImage from '../../../../public/images/shared/desktop/image-category-thumbnail-headphones.png';
import SpeakersImage from '../../../../public/images/shared/desktop/image-category-thumbnail-speakers.png';
import EarphonesImage from '../../../../public/images/shared/desktop/image-category-thumbnail-earphones.png';

const PRODUCTS = [
	{
		id: 1,
		title: 'headphones',
		image: HeadphoneImage,
		link: '/headphones',
	},
	{
		id: 2,
		title: 'speakers',
		image: SpeakersImage,
		link: '/speakers',
	},
	{
		id: 3,
		title: 'earphones',
		image: EarphonesImage,
		link: '/earphones',
	},
];

const ProductNavigationBar = () => {
	return (
		<div className="flex w-full flex-col items-center bg-white px-[2.4rem] pb-[4rem] pt-[8rem] lg:px-[3.9rem]">
			<ul className="flex w-full flex-col items-center gap-[6.8rem] sm:max-w-[75rem] sm:flex-row sm:gap-[1rem] lg:m-0 lg:max-w-[111rem] lg:gap-[3rem]">
				{PRODUCTS.map((product) => {
					return (
						<li
							key={product.id}
							className="flex w-full flex-col items-center"
						>
							<ProductNavigationItem product={product} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ProductNavigationBar;
