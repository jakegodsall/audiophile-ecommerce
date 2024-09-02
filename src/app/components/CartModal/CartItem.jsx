import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { CartContext } from '@/app/context/CartContext';
import QuantitySelector from '../UI/QuantitySelector';
import { formatCurrency } from '@/app/utilities/dataTransform';

const CartItem = ({ product }) => {
	const router = useRouter();

	const { cart, setCart } = useContext(CartContext);
	const [quantity, setQuantity] = useState(product.quantity);

	useEffect(() => {
		setCart((prevState) => {
			const newState = prevState
				.map((item) =>
					item.id === product.id
						? { ...item, quantity: quantity }
						: item,
				)
				.filter((item) => item.quantity > 0); // Remove items with quantity 0
			return newState;
		});
	}, [quantity]);

	return (
		<div className="flex w-full items-center justify-between">
			<div className="flex items-center">
				<Image
					src={product.image}
					alt={product.name}
					width={64}
					height={64}
					className="mr-[1.6rem]"
					onClick={() => {
						router.push(product.link);
					}}
				/>
				<div>
					<p className="text-[1.5rem] font-bold leading-[2.5rem]">
						{product.name}
					</p>
					<p className="text-[1.4rem] font-bold text-black/50">
						{formatCurrency(product.price)}
					</p>
				</div>
			</div>
			<QuantitySelector
				quantity={quantity}
				setQuantity={setQuantity}
				cart
			/>
		</div>
	);
};

export default CartItem;
