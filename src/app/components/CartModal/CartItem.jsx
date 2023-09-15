import React from 'react';
import Image from 'next/image';
import QuantitySelector from '../UI/QuantitySelector';

const CartItem = ({ product }) => {
	return (
		<div className="flex items-center">
			<Image
				src={product.image}
				width={64}
				height={64}
				className="mr-[1.6rem]"
			/>
			<div>
				<p className="text-[1.5rem] font-bold leading-[2.5rem]">
					{product.name}
				</p>
				<p className="text-[1.4rem] font-bold text-black/50">
					${product.price}
				</p>
			</div>
			<QuantitySelector quantity={product.quantity} />
		</div>
	);
};

export default CartItem;
