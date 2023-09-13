'use client';

import React, { useState } from 'react';
import BillingDetails from './BillingDetails';
import ShippingDetails from './ShippingDetails';
import PaymentDetails from './PaymentDetails';

const CheckoutForm = () => {
	const [formData, setFormData] = useState({
		billing: {
			name: '',
			email: '',
			phone: '',
		},
		shipping: {
			address: '',
			zip: '',
			city: '',
			country: '',
		},
		payment: {},
	});

	const onChangeHandler = (e, section) => {
		const input = e.target.name;
		const value = e.target.value;

		let newSection = { ...formData[section] };
		newSection = { ...newSection, [input]: value };
		setFormData((prevState) => {
			return {
				...prevState,
				[section]: newSection,
			};
		});

		console.log(formData);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(e);
	};

	return (
		<form
			onSubmit={onSubmitHandler}
			className="flex w-full flex-col items-center bg-[#FAFAFA] px-[2.4rem]"
		>
			<div className="w-full bg-white p-[2.4rem]">
				<h1 className="mb-[3.2rem] text-[2.8rem] font-bold uppercase tracking-[0.1rem]">
					Checkout
				</h1>
				<BillingDetails onChangeHandler={onChangeHandler} />
				<ShippingDetails onChangeHandler={onChangeHandler} />
				{/* <PaymentDetails /> */}
			</div>
			<div>
				<button type="submit">Continue & Pay</button>
			</div>
		</form>
	);
};

export default CheckoutForm;
