'use client';

import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';

import QuantitySelector from './UI/QuantitySelector';
import { CartContext } from '../context/CartContext';

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
		<div className="flex flex-col gap-[8.8rem] px-[2.4rem]">
			<div className="pt-[1.6rem]">
				<p
					className="pb-[2.4rem] text-[1.5rem] font-medium capitalize text-black/50"
					onClick={goBackHandler}
				>
					Go back
				</p>
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
						className="mb-[3.2rem] rounded-[0.8rem]"
					/>
				</picture>
				<div className="flex flex-col gap-[2.4rem]">
					{product.new && (
						<p className="text-[1.4rem] uppercase tracking-[1rem] text-primary-orange">
							new product
						</p>
					)}
					<h1 className="text-[2.8rem] font-bold uppercase tracking-[0.1rem]">
						{product.name}
					</h1>
					<p className="text-[1.5rem] font-medium leading-[2.5rem] text-black/50">
						{product.description}
					</p>
					<p className="text-[1.8rem] font-bold uppercase tracking-[0.1286rem]">
						$ {product.price}
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
			<div className="flex flex-col gap-[2.4rem]">
				<h2 className="text-[2.4rem] font-bold uppercase tracking-[0.085rem]">
					Features
				</h2>
				<p className="text-[1.5rem] font-medium leading-[2.5rem] text-black/50">
					{product.features}
				</p>
			</div>
			<div className="flex flex-col gap-[2.4rem]">
				<h2 className="text-[2.4rem] font-bold uppercase tracking-[0.085rem]">
					In the box
				</h2>
				<ul className="flex flex-col gap-[0.8rem]">
					{product.includes.map(({ quantity, item }, key) => {
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
					})}
				</ul>
			</div>
			<div>
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
						className="mb-[3.2rem] rounded-[0.8rem]"
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
						className="mb-[3.2rem] rounded-[0.8rem]"
					/>
				</picture>
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
						className="mb-[3.2rem] rounded-[0.8rem]"
					/>
				</picture>
			</div>
		</div>
	);
};

export default ProductDetail;
