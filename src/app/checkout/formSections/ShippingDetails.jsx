import React from 'react';
import clsx from 'clsx';

const ShippingDetails = ({ onChangeHandler, errors }) => {
	console.log(errors);

	return (
		<fieldset className="mb-[3.2rem] flex flex-col sm:flex-row sm:flex-wrap">
			<legend className="mb-[1.6rem] text-[1.3rem] font-medium uppercase tracking-[0.1rem] text-primary-orange">
				Shipping Info
			</legend>
			<div className="mb-[2.4rem] flex flex-col sm:w-full">
				<div className="mb-[1rem] flex items-center justify-between">
					<label
						htmlFor="address"
						className="text-[1.2rem] font-bold tracking-[-0.02rem]"
					>
						Your Address
					</label>
					{errors.address && (
						<p className="text-error">{errors.address}</p>
					)}
				</div>
				<input
					type="text"
					placeholder="1137 Williams Avenue"
					id="address"
					name="address"
					className={clsx(
						'rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] tracking-[-0.025rem] focus:outline focus:outline-primary-orange',
						errors.address && 'outline outline-1 outline-error',
					)}
					onChange={(e) => {
						onChangeHandler(e, 'shipping');
					}}
				/>
			</div>
			<div className="mb-[2.4rem] flex flex-col sm:mr-[1.6rem] sm:flex-1">
				<div className="flex items-center justify-between">
					<label
						htmlFor="zip"
						className="mb-[1rem] text-[1.2rem] font-bold tracking-[-0.02rem]"
					>
						ZIP Code
					</label>
					{errors.zip && <p className="text-error">{errors.zip}</p>}
				</div>
				<input
					type="text"
					placeholder="10001"
					id="zip"
					name="zip"
					className={clsx(
						'rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] tracking-[-0.025rem] focus:outline focus:outline-primary-orange',
						errors.zip && 'outline outline-1 outline-error',
					)}
					onChange={(e) => {
						onChangeHandler(e, 'shipping');
					}}
				/>
			</div>
			<div className="mb-[2.4rem] flex flex-col sm:flex-1">
				<div className="mb-[1rem] flex items-center justify-between">
					<label
						htmlFor="city"
						className="text-[1.2rem] font-bold tracking-[-0.02rem]"
					>
						City
					</label>
					{errors.city && <p className="text-error">{errors.city}</p>}
				</div>
				<input
					type="text"
					placeholder="New York"
					id="city"
					name="city"
					className={clsx(
						'rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] font-bold tracking-[-0.025rem] focus:outline focus:outline-primary-orange',
						errors.city && 'outline outline-1 outline-error',
					)}
					onChange={(e) => {
						onChangeHandler(e, 'shipping');
					}}
				/>
			</div>
			<div className="mb-[2.4rem] flex flex-col sm:w-[calc(50%-0.8rem)]">
				<div className="mb-[1rem] flex items-center justify-between">
					<label
						htmlFor="country"
						className="text-[1.2rem] font-bold tracking-[-0.02rem]"
					>
						Country
					</label>
					{errors.country && (
						<p className="text-error">{errors.country}</p>
					)}
				</div>
				<input
					type="text"
					placeholder="United States"
					id="country"
					name="country"
					className={clsx(
						'rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] tracking-[-0.025rem] focus:outline focus:outline-primary-orange',
						errors.country && 'outline outline-1 outline-error',
					)}
					onChange={(e) => {
						onChangeHandler(e, 'shipping');
					}}
				/>
			</div>
		</fieldset>
	);
};

export default ShippingDetails;
