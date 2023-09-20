'use client';

import React, { useState } from 'react';
import RadioControl from '../formControls/RadioControl';

const paymentOptions = [
	{
		id: 1,
		value: 'cash-on-delivery',
	},
	{
		id: 2,
		value: 'e-money',
	},
];

const PaymentDetails = ({ onRadioHandler, radioValue }) => {
	radioValue;
	const handleOptionChange = (e) => {
		onRadioHandler(e.target.value);
	};

	return (
		<div className="mb-[3.2rem]">
			<h3 className="mb-[1.6rem] text-[1.3rem] font-medium uppercase tracking-[0.1rem] text-primary-orange">
				Payment Details
			</h3>
			<fieldset>
				<legend className="mb-[1.7rem] text-[1.2rem] font-bold">
					Payment Method
				</legend>
				<ul className="flex flex-col items-end gap-[1.6rem]">
					{paymentOptions.map((option) => {
						return (
							<li key={option.id} className="w-full sm:w-1/2">
								<RadioControl
									value={option.value}
									selected={radioValue === option.value}
									handleOptionChange={handleOptionChange}
								/>
							</li>
						);
					})}
				</ul>
			</fieldset>
		</div>
	);
};

export default PaymentDetails;
