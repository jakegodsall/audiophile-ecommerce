'use client';

import React, { useState } from 'react';
import RadioControl from '../formControls/RadioControl';

const PaymentDetails = ({ onRadioHandler }) => {
	const [isEMoney, setIsEMoney] = useState(true);

	const onChangeHandler = () => {
		setIsEMoney((prevState) => {
			const newState = !prevState;

			if (newState) {
				onRadioHandler('e-money');
			} else {
				onRadioHandler('cash-on-delivery');
			}

			return newState;
		});
	};

	return (
		<fieldset>
			<legend className="text-[1.3rem] font-medium uppercase tracking-[0.1rem] text-primary-orange">
				Payment Details
			</legend>
			<div>
				<legend>Payment Method</legend>
				<RadioControl
					value="e-money"
					selected={isEMoney}
					onChangeHandler={onChangeHandler}
				/>
				<RadioControl
					value="cash-on-delivery"
					selected={!isEMoney}
					onChangeHandler={onChangeHandler}
				/>
			</div>
		</fieldset>
	);
};

export default PaymentDetails;
