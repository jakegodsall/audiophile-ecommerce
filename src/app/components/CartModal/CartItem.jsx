import React from 'react';
import Image from 'next/image';
import QuantitySelector from '../UI/QuantitySelector';
import { useRouter } from 'next/navigation';

const CartItem = ({ product }) => {
	const router = useRouter();
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
						${product.price}
					</p>
				</div>
			</div>
			<QuantitySelector quantity={product.quantity} cart />
		</div>
	);
};

export default CartItem;
