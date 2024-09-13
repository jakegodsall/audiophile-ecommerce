import React from 'react';
import clsx from 'clsx';

const BillingDetails = ({ onChangeHandler, errors }) => {
	console.log('errors', errors);
	return (
		<fieldset className="mb-[3.2rem] sm:flex sm:flex-wrap">
			<legend className="mb-[1.6rem] text-[1.3rem] font-medium uppercase tracking-[0.1rem] text-primary-orange">
				Billing Details
			</legend>
			<div className="mb-[2.4rem] flex flex-col sm:mr-[1.6rem] sm:flex-1">
				<div className="mb-[1rem] flex items-center justify-between">
					<label
						htmlFor="name"
						className="text-[1.2rem] font-bold tracking-[-0.02rem]"
					>
						Name
					</label>
					{errors.name && <p className="text-error">{errors.name}</p>}
				</div>
				<input
					type="text"
					placeholder="Alexei Ward"
					id="name"
					name="name"
					className={clsx(
						'rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] tracking-[-0.025rem] focus:outline focus:outline-primary-orange',
						errors.name && 'outline outline-1 outline-error',
					)}
					onChange={(e) => {
						onChangeHandler(e, 'billing');
					}}
				/>
			</div>
			<div className="mb-[2.4rem] flex flex-col sm:flex-1">
				<div className="mb-[1rem] flex items-center justify-between">
					<label
						htmlFor="email"
						className="text-[1.2rem] font-bold tracking-[-0.02rem]"
					>
						Email Address
					</label>
					{errors.email && (
						<p className="text-error">{errors.email}</p>
					)}
				</div>
				<input
					type="text"
					placeholder="alexei@mail.com"
					id="email"
					name="email"
					className={clsx(
						'rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] tracking-[-0.025rem] focus:outline focus:outline-primary-orange',
						errors.email && 'outline outline-1 outline-error',
					)}
					onChange={(e) => {
						onChangeHandler(e, 'billing');
					}}
				/>
			</div>
			<div className="mb-[2.4rem] flex flex-col sm:w-[calc(50%-0.8rem)]">
				<div className="mb-[1rem] flex items-center justify-between">
					<label
						htmlFor="phone"
						className="text-[1.2rem] font-bold tracking-[-0.02rem]"
					>
						Phone Number
					</label>
					{errors.phone && (
						<p className="text-error">{errors.phone}</p>
					)}
				</div>
				<input
					type="text"
					placeholder="+1 202-555-0136"
					id="phone"
					name="phone"
					className={clsx(
						'rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] tracking-[-0.025rem] focus:outline focus:outline-primary-orange',
						errors.phone && 'outline outline-1 outline-error',
					)}
					onChange={(e) => {
						onChangeHandler(e, 'billing');
					}}
				/>
			</div>
		</fieldset>
	);
};

export default BillingDetails;
