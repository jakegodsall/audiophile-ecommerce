'use client';

import { useState } from 'react';

const QuantitySelector = ({ quantity, setQuantity, cart }) => {
	const decreaseHandler = () => {
		if (quantity > 0) {
			setQuantity((prevValue) => (prevValue -= 1));
		}
	};

	const increaseHandler = () => {
		setQuantity((prevValue) => (prevValue += 1));
	};

	return (
		<div
			className={
				cart
					? 'flex gap-[2rem] bg-[#F1F1F1] px-[1.2rem] py-[0.7rem]'
					: 'flex gap-[2.5rem] bg-[#F1F1F1] p-[1.5rem]'
			}
		>
			<button
				className="text-[1.5rem] font-bold tracking-[0.1rem] text-black/25"
				onClick={decreaseHandler}
				type="button"
			>
				-
			</button>
			<p className="text-[1.5rem] font-bold tracking-[0.1rem] text-black">
				{quantity}
			</p>
			<button
				className="text-[1.5rem] font-bold tracking-[0.1rem] text-black/25"
				onClick={increaseHandler}
				type="button"
			>
				+
			</button>
		</div>
	);
};

export default QuantitySelector;
