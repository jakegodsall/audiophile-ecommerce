'use client';

import React, { useState } from 'react';
import RadioControl from '../formControls/RadioControl';

const PaymentDetails = ({ onRadioHandler, radioValue }) => {
	console.log(radioValue);
	const handleOptionChange = (e) => {
		onRadioHandler(e.target.value);
	};

	return (
		<div>
			<h3 className="mb-[1.6rem] text-[1.3rem] font-medium uppercase tracking-[0.1rem] text-primary-orange">
				Payment Details
			</h3>
			<div>
				<legend className="mb-[1.7rem] text-[1.2rem] font-bold">
					Payment Method
				</legend>
				<div className="flex flex-col gap-[1.6rem]">
					<RadioControl
						value="e-money"
						selected={radioValue === 'e-money'}
						handleOptionChange={handleOptionChange}
					/>
					<RadioControl
						value="cash-on-delivery"
						selected={radioValue === 'cash-on-delivery'}
						handleOptionChange={handleOptionChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default PaymentDetails;
