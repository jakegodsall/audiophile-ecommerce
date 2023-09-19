'use client';

import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';

import QuantitySelector from './UI/QuantitySelector';
import { CartContext } from '../context/CartContext';
import RecommendationSection from './ProductRecommendation/RecommendationSection';
import { formatCurrency } from '../utilities/dataTransform';

const ProductDetail = ({ product }) => {
	const router = useRouter();
	const { cart, setCart } = useContext(CartContext);
	const [quantity, setQuantity] = useState(1);

	const quantityHandler = (quantity) => {
		setQuantity(quantity);
	};

	const addToCartHandler = () => {
		const productCart = {
			productId: product.id,
			quantity: quantity,
		};

		setCart((prevState) => {
			const item = prevState.find((el) => el.productId === product.id);
			if (item) {
				item.quantity += quantity;
				return prevState;
			} else {
				return [...prevState, productCart];
			}
		});
	};

	const goBackHandler = () => {
		router.back();
	};

	return (
		<div className="flex flex-col items-center">
			<div className="flex max-w-[45rem] flex-col items-center px-[2.4rem] sm:max-w-[75rem] lg:max-w-[110rem]">
				<p
					className="mb-[2.4rem] mt-[1.6rem] cursor-pointer self-start text-[1.5rem] font-medium capitalize text-black/50 sm:mt-[3.3rem] lg:mb-[5.6rem] lg:mt-[7.9rem]"
					onClick={goBackHandler}
				>
					Go back
				</p>
				<div className="flex  flex-col items-center gap-[8.8rem] sm:gap-[12rem]">
					<div className="w-full sm:flex sm:items-center sm:justify-between">
						<picture>
							<source
								media={'(min-width: 1024px)'}
								srcSet={product.image.desktop}
							/>
							<source
								media={'(min-width: 640px)'}
								srcSet={product.image.tablet}
							/>
							<img
								src={product.image.mobile}
								alt={product.name}
								className="mb-[3.2rem] rounded-[0.8rem] sm:max-w-[28rem] lg:max-w-[54rem]"
							/>
						</picture>
						<div className="flex flex-col gap-[2.4rem] sm:max-w-[34rem]">
							{product.new && (
								<p className="text-[1.4rem] uppercase tracking-[1rem] text-primary-orange">
									new product
								</p>
							)}
							<h1 className="text-[2.8rem] font-bold uppercase tracking-[0.1rem] md:text-[4rem]">
								{product.name}
							</h1>
							<p className="text-[1.5rem] font-medium leading-[2.5rem] text-black/50">
								{product.description}
							</p>
							<p className="text-[1.8rem] font-bold uppercase tracking-[0.1286rem]">
								{formatCurrency(product.price)}
							</p>
							<div className="flex items-center gap-[1.6rem]">
								<QuantitySelector
									quantity={quantity}
									setQuantity={quantityHandler}
								/>
								<button
									className="bg-primary-orange px-[3rem] py-[1.5rem] text-[1.3rem] font-bold uppercase tracking-[0.1rem] text-white"
									onClick={addToCartHandler}
									type="button"
								>
									Add to cart
								</button>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-y-[8.8rem] md:w-full md:flex-row">
						<div className="flex flex-col gap-[2.4rem] md:max-w-[63.5rem] md:flex-[2]">
							<h2 className="text-[2.4rem] font-bold uppercase tracking-[0.085rem] md:text-[3.2rem]">
								Features
							</h2>
							<p className="text-[1.5rem] font-medium leading-[2.5rem] text-black/50">
								{product.features}
							</p>
						</div>
						<div className="flex flex-col gap-[2.4rem] sm:w-full sm:flex-row sm:items-start md:ml-[7rem] md:flex-1 md:flex-col lg:ml-[12.5rem]">
							<h2 className="text-[2.4rem] font-bold uppercase tracking-[0.085rem] sm:flex-1 md:flex-initial md:text-[3.2rem]">
								In the box
							</h2>
							<ul className="flex flex-col gap-[0.8rem] sm:flex-1">
								{product.includes.map(
									({ quantity, item }, key) => {
										return (
											<li
												key={key}
												className="flex  items-center gap-[2.4rem]"
											>
												<p className="text-[1.5rem] font-bold text-primary-orange">
													{quantity}x
												</p>
												<p className="text-[1.5rem] font-medium text-black/50">
													{item}
												</p>
											</li>
										);
									},
								)}
							</ul>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row sm:gap-x-[2rem]">
						<div className="flex flex-col sm:justify-between">
							<picture>
								<source
									media={'(min-width: 1024px)'}
									srcSet={product.gallery.first.desktop}
								/>
								<source
									media={'(min-width: 640px)'}
									srcSet={product.gallery.first.tablet}
								/>
								<img
									src={product.gallery.first.mobile}
									alt={product.name}
									className="mb-[3.2rem] rounded-[0.8rem] sm:mb-0"
								/>
							</picture>

							<picture>
								<source
									media={'(min-width: 1024px)'}
									srcSet={product.gallery.second.desktop}
								/>
								<source
									media={'(min-width: 640px)'}
									srcSet={product.gallery.second.tablet}
								/>
								<img
									src={product.gallery.second.mobile}
									alt={product.name}
									className="mb-[3.2rem] rounded-[0.8rem] sm:mb-0"
								/>
							</picture>
						</div>
						<picture>
							<source
								media={'(min-width: 1024px)'}
								srcSet={product.gallery.third.desktop}
							/>
							<source
								media={'(min-width: 640px)'}
								srcSet={product.gallery.third.tablet}
							/>
							<img
								src={product.gallery.third.mobile}
								alt={product.name}
								className="mb-[3.2rem] rounded-[0.8rem] sm:mb-0"
							/>
						</picture>
					</div>
					<div>
						<RecommendationSection others={product.others} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
