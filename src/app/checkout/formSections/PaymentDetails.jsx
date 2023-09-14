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
			<h3 className="text-[1.3rem] font-medium uppercase tracking-[0.1rem] text-primary-orange">
				Payment Details
			</h3>
			<div>
				<legend>Payment Method</legend>
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
	);
};

export default PaymentDetails;
