import React from 'react';

const RadioControl = ({ selected, value, handleOptionChange }) => {
	return (
		<label
			className="flex w-full gap-[1.6rem] rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[1.6rem] py-[1.8rem] text-[1.4rem] font-bold tracking-[-0.025rem]"
			onClick={handleOptionChange}
		>
			<input
				type="radio"
				name="payment-method"
				id={value}
				value={value}
				className="hidden"
			/>
			<div className=" relative flex h-[2rem] w-[2rem] flex-col items-center justify-center rounded-full border-[0.1rem] border-[#CFCFCF] ">
				{selected && (
					<div className="h-4 w-4 rounded-full bg-primary-orange"></div>
				)}
			</div>
			<p className="capitalize">{value.replaceAll('-', ' ')}</p>
		</label>
	);
};

export default RadioControl;
