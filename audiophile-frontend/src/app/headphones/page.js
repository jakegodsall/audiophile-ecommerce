import ProductListItem from '../components/ProductListItem';

const HEADPHONES = [
	{
		id: 1,
		slug: 'yx1-earphones',
		name: 'YX1 Wireless Earphones',
		image: {
			mobile: './assets/product-yx1-earphones/mobile/image-product.jpg',
			tablet: './assets/product-yx1-earphones/tablet/image-product.jpg',
			desktop: './assets/product-yx1-earphones/desktop/image-product.jpg',
		},
		category: 'earphones',
		categoryImage: {
			mobile: './assets/product-yx1-earphones/mobile/image-category-page-preview.jpg',
			tablet: './assets/product-yx1-earphones/tablet/image-category-page-preview.jpg',
			desktop:
				'./assets/product-yx1-earphones/desktop/image-category-page-preview.jpg',
		},
		new: true,
		price: 599,
		description:
			'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
		features:
			'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',
		includes: [
			{
				quantity: 2,
				item: 'Earphone unit',
			},
			{
				quantity: 6,
				item: 'Multi-size earplugs',
			},
			{
				quantity: 1,
				item: 'User manual',
			},
			{
				quantity: 1,
				item: 'USB-C charging cable',
			},
			{
				quantity: 1,
				item: 'Travel pouch',
			},
		],
		gallery: {
			first: {
				mobile: './assets/product-yx1-earphones/mobile/image-gallery-1.jpg',
				tablet: './assets/product-yx1-earphones/tablet/image-gallery-1.jpg',
				desktop:
					'./assets/product-yx1-earphones/desktop/image-gallery-1.jpg',
			},
			second: {
				mobile: './assets/product-yx1-earphones/mobile/image-gallery-2.jpg',
				tablet: './assets/product-yx1-earphones/tablet/image-gallery-2.jpg',
				desktop:
					'./assets/product-yx1-earphones/desktop/image-gallery-2.jpg',
			},
			third: {
				mobile: './assets/product-yx1-earphones/mobile/image-gallery-3.jpg',
				tablet: './assets/product-yx1-earphones/tablet/image-gallery-3.jpg',
				desktop:
					'./assets/product-yx1-earphones/desktop/image-gallery-3.jpg',
			},
		},
		others: [
			{
				slug: 'xx99-mark-one-headphones',
				name: 'XX99 Mark I',
				image: {
					mobile: './assets/shared/mobile/image-xx99-mark-one-headphones.jpg',
					tablet: './assets/shared/tablet/image-xx99-mark-one-headphones.jpg',
					desktop:
						'./assets/shared/desktop/image-xx99-mark-one-headphones.jpg',
				},
			},
			{
				slug: 'xx59-headphones',
				name: 'XX59',
				image: {
					mobile: './assets/shared/mobile/image-xx59-headphones.jpg',
					tablet: './assets/shared/tablet/image-xx59-headphones.jpg',
					desktop:
						'./assets/shared/desktop/image-xx59-headphones.jpg',
				},
			},
			{
				slug: 'zx9-speaker',
				name: 'ZX9 Speaker',
				image: {
					mobile: './assets/shared/mobile/image-zx9-speaker.jpg',
					tablet: './assets/shared/tablet/image-zx9-speaker.jpg',
					desktop: './assets/shared/desktop/image-zx9-speaker.jpg',
				},
			},
		],
	},
	{
		id: 2,
		slug: 'xx59-headphones',
		name: 'XX59 Headphones',
		image: {
			mobile: './assets/product-xx59-headphones/mobile/image-product.jpg',
			tablet: './assets/product-xx59-headphones/tablet/image-product.jpg',
			desktop:
				'./assets/product-xx59-headphones/desktop/image-product.jpg',
		},
		category: 'headphones',
		categoryImage: {
			mobile: './assets/product-xx59-headphones/mobile/image-category-page-preview.jpg',
			tablet: './assets/product-xx59-headphones/tablet/image-category-page-preview.jpg',
			desktop:
				'./assets/product-xx59-headphones/desktop/image-category-page-preview.jpg',
		},
		new: false,
		price: 899,
		description:
			'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
		features:
			'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
		includes: [
			{
				quantity: 1,
				item: 'Headphone unit',
			},
			{
				quantity: 2,
				item: 'Replacement earcups',
			},
			{
				quantity: 1,
				item: 'User manual',
			},
			{
				quantity: 1,
				item: '3.5mm 5m audio cable',
			},
		],
		gallery: {
			first: {
				mobile: './assets/product-xx59-headphones/mobile/image-gallery-1.jpg',
				tablet: './assets/product-xx59-headphones/tablet/image-gallery-1.jpg',
				desktop:
					'./assets/product-xx59-headphones/desktop/image-gallery-1.jpg',
			},
			second: {
				mobile: './assets/product-xx59-headphones/mobile/image-gallery-2.jpg',
				tablet: './assets/product-xx59-headphones/tablet/image-gallery-2.jpg',
				desktop:
					'./assets/product-xx59-headphones/desktop/image-gallery-2.jpg',
			},
			third: {
				mobile: './assets/product-xx59-headphones/mobile/image-gallery-3.jpg',
				tablet: './assets/product-xx59-headphones/tablet/image-gallery-3.jpg',
				desktop:
					'./assets/product-xx59-headphones/desktop/image-gallery-3.jpg',
			},
		},
		others: [
			{
				slug: 'xx99-mark-two-headphones',
				name: 'XX99 Mark II',
				image: {
					mobile: './assets/shared/mobile/image-xx99-mark-two-headphones.jpg',
					tablet: './assets/shared/tablet/image-xx99-mark-two-headphones.jpg',
					desktop:
						'./assets/shared/desktop/image-xx99-mark-two-headphones.jpg',
				},
			},
			{
				slug: 'xx99-mark-one-headphones',
				name: 'XX99 Mark I',
				image: {
					mobile: './assets/shared/mobile/image-xx99-mark-one-headphones.jpg',
					tablet: './assets/shared/tablet/image-xx99-mark-one-headphones.jpg',
					desktop:
						'./assets/shared/desktop/image-xx99-mark-one-headphones.jpg',
				},
			},
			{
				slug: 'zx9-speaker',
				name: 'ZX9 Speaker',
				image: {
					mobile: './assets/shared/mobile/image-zx9-speaker.jpg',
					tablet: './assets/shared/tablet/image-zx9-speaker.jpg',
					desktop: './assets/shared/desktop/image-zx9-speaker.jpg',
				},
			},
		],
	},
	{
		id: 3,
		slug: 'xx99-mark-one-headphones',
		name: 'XX99 Mark I Headphones',
		image: {
			mobile: './assets/product-xx99-mark-one-headphones/mobile/image-product.jpg',
			tablet: './assets/product-xx99-mark-one-headphones/tablet/image-product.jpg',
			desktop:
				'./assets/product-xx99-mark-one-headphones/desktop/image-product.jpg',
		},
		category: 'headphones',
		categoryImage: {
			mobile: './assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg',
			tablet: './assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg',
			desktop:
				'./assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg',
		},
		new: false,
		price: 1750,
		description:
			'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
		features:
			'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.',
		includes: [
			{
				quantity: 1,
				item: 'Headphone unit',
			},
			{
				quantity: 2,
				item: 'Replacement earcups',
			},
			{
				quantity: 1,
				item: 'User manual',
			},
			{
				quantity: 1,
				item: '3.5mm 5m audio cable',
			},
		],
		gallery: {
			first: {
				mobile: './assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg',
				tablet: './assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg',
				desktop:
					'./assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg',
			},
			second: {
				mobile: './assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg',
				tablet: './assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg',
				desktop:
					'./assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg',
			},
			third: {
				mobile: './assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg',
				tablet: './assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg',
				desktop:
					'./assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg',
			},
		},
		others: [
			{
				slug: 'xx99-mark-two-headphones',
				name: 'XX99 Mark II',
				image: {
					mobile: './assets/shared/mobile/image-xx99-mark-two-headphones.jpg',
					tablet: './assets/shared/tablet/image-xx99-mark-two-headphones.jpg',
					desktop:
						'./assets/shared/desktop/image-xx99-mark-two-headphones.jpg',
				},
			},
			{
				slug: 'xx59-headphones',
				name: 'XX59',
				image: {
					mobile: './assets/shared/mobile/image-xx59-headphones.jpg',
					tablet: './assets/shared/tablet/image-xx59-headphones.jpg',
					desktop:
						'./assets/shared/desktop/image-xx59-headphones.jpg',
				},
			},
			{
				slug: 'zx9-speaker',
				name: 'ZX9 Speaker',
				image: {
					mobile: './assets/shared/mobile/image-zx9-speaker.jpg',
					tablet: './assets/shared/tablet/image-zx9-speaker.jpg',
					desktop: './assets/shared/desktop/image-zx9-speaker.jpg',
				},
			},
		],
	},
];

const Headphones = () => {
	return (
		<div>
			<div className="flex flex-col items-center bg-black py-[3.2rem]">
				<h1 className="mx-auto bg-black text-[2.8rem] font-bold uppercase tracking-[.2rem] text-white">
					Headphones
				</h1>
			</div>
			<div>
				<ul className="flex flex-col gap-[12rem]">
					{HEADPHONES.map((product) => {
						return (
							<li className={product.id}>
								<ProductListItem product={product} />
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Headphones;