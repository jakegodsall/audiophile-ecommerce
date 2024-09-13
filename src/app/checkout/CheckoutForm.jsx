'use client';

import { useState } from 'react';

import FormValidator from '../utilities/formValidator';

import BillingDetails from './formSections/BillingDetails';
import ShippingDetails from './formSections/ShippingDetails';
import PaymentDetails from './formSections/PaymentDetails';
import EMoneyDetails from './formSections/EMoneyDetails';
import SummaryDetails from './formSections/SummarySection/SummaryDetails';
import CashOnDeliveryText from './formSections/CashOnDeliveryText';

import ThankYouModal from '../components/ThankYouModal/ThankYouModal';

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
		payment: {
			method: 'e-money',
		},
	});

	const [errors, setErrors] = useState({
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
	}); // object of validation errors

	const onChangeHandler = (e, section) => {
		const input = e.target.name;
		const value = e.target.value;

		setFormData((prevState) => {
			const currentSection = prevState[section];

			// Only update if the value has changed to avoid unnecessary state updates
			if (currentSection[input] !== value) {
				return {
					...prevState,
					[section]: {
						...currentSection,
						[input]: value,
					},
				};
			}

			// If the value hasn't changed, return the previous state
			return prevState;
		});
	};

	const onRadioHandler = (radioValue) => {
		let newSection = { ...formData.payment };
		newSection.method = radioValue;

		setFormData((prevState) => {
			return {
				...prevState,
				payment: {
					...prevState.payment,
					method: radioValue,
				},
			};
		});
	};

	const validateForm = () => {
		let errors = {
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
		};

		// Billing validation
		if (!FormValidator.validateTextInput(formData.billing.name)) {
			errors.billing.name = 'Name is required.';
		}
		if (!FormValidator.validateEmail(formData.billing.email)) {
			errors.billing.email = 'Invalid email.';
		}
		if (!FormValidator.validatePhoneNumber(formData.billing.phone)) {
			errors.billing.phone = 'Invalid phone number.';
		}

		// Shipping validation
		if (!FormValidator.validateTextInput(formData.shipping.address)) {
			errors.shipping.address = 'Address is required.';
		}
		if (!FormValidator.validateZipCode(formData.shipping.zip)) {
			errors.shipping.zip = 'Invalid zip code.';
		}
		if (!FormValidator.validateTextInput(formData.shipping.city)) {
			errors.shipping.city = 'City is required.';
		}
		if (!FormValidator.validateTextInput(formData.shipping.country)) {
			errors.shipping.country = 'Country is required.';
		}

		return errors;
	};

	const hasValidationErrors = (errors) => {
		// Check each field in the object for non-empty strings
		return Object.keys(errors).some((section) =>
			Object.values(errors[section]).some((error) => error.trim() !== ''),
		);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();

		// Validate the form data
		const validationErrors = validateForm();
		console.log('Validation errors:', validationErrors); // Check if there are validation errors

		if (hasValidationErrors(validationErrors)) {
			// If there are validation errors, set them in the state and prevent form submission
			setErrors(validationErrors);
			return;
		}

		// Submit form data
		console.log('Form data submitted:', formData); // No need for a `const` here unless you're assigning something

		// Clear errors after successful submission
		setErrors({
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
		});
	};

	return (
		<>
			<form
				onSubmit={onSubmitHandler}
				className="flex w-full flex-col items-center rounded-[0.8rem] pb-[9.7rem] sm:pb-[11.6rem] lg:flex-row lg:gap-x-[3rem] lg:pb-[14.1rem]"
			>
				<div className="mb-[3.2rem] w-full bg-white p-[2.4rem]">
					<h1 className="mb-[3.2rem] text-[2.8rem] font-bold uppercase tracking-[0.1rem]">
						Checkout
					</h1>
					<BillingDetails
						onChangeHandler={onChangeHandler}
						errors={errors.billing}
					/>
					<ShippingDetails
						onChangeHandler={onChangeHandler}
						errors={errors.shipping}
					/>
					<PaymentDetails
						onRadioHandler={onRadioHandler}
						radioValue={formData.payment.method}
					/>
					{formData.payment.method == 'cash-on-delivery' && (
						<CashOnDeliveryText />
					)}
					{formData.payment.method == 'e-money' && <EMoneyDetails />}
				</div>
				<div className="w-full lg:max-w-[40%] lg:self-start">
					<SummaryDetails />
				</div>
			</form>
			<ThankYouModal />
		</>
	);
};

export default CheckoutForm;
