import ProductNavigationItem from './ProductNavigationItem';

import HeadphoneImage from '../../../../public/images/shared/desktop/image-category-thumbnail-headphones.png';
import SpeakersImage from '../../../../public/images/shared/desktop/image-category-thumbnail-speakers.png';
import EarphonesImage from '../../../../public/images/shared/desktop/image-category-thumbnail-earphones.png';

const PRODUCTS = [
	{
		id: 1,
		title: 'headphones',
		image: HeadphoneImage,
		link: '#/',
	},
	{
		id: 2,
		title: 'speakers',
		image: SpeakersImage,
		link: '#/',
	},
	{
		id: 3,
		title: 'earphones',
		image: EarphonesImage,
		link: '#/',
	},
];

const ProductNavigationBar = () => {
	return (
		<div className="flex w-full flex-col items-center bg-white px-[2.4rem] pb-[4rem] pt-[8rem]">
			<ul className="flex w-full flex-col items-center gap-[6.8rem] sm:max-w-[75rem] sm:flex-row sm:gap-[1rem] lg:max-w-[111rem] lg:gap-[3rem]">
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
