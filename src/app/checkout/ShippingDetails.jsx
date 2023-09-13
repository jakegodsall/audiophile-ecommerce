import React from 'react';

const ShippingDetails = ({ onChangeHandler }) => {
	return (
		<fieldset>
			<legend className="text-[1.3rem] font-medium uppercase tracking-[0.1rem] text-primary-orange">
				Shipping Info
			</legend>
			<div className="mb-[2.4rem] flex flex-col">
				<label
					htmlFor="address"
					className="mb-[1rem] text-[1.2rem] tracking-[-0.02rem]"
				>
					Your Address
				</label>
				<input
					type="text"
					placeholder="1137 Williams Avenue"
					id="address"
					name="address"
					className="rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] tracking-[-0.025rem] focus:outline-none"
					onChange={(e) => {
						onChangeHandler(e, 'shipping');
					}}
				/>
			</div>
			<div className="mb-[2.4rem] flex flex-col">
				<label
					htmlFor="zip"
					className="mb-[1rem] text-[1.2rem] tracking-[-0.02rem]"
				>
					ZIP Code
				</label>
				<input
					type="text"
					placeholder="10001"
					id="zip"
					name="zip"
					className="rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] tracking-[-0.025rem] focus:outline-none"
					onChange={(e) => {
						onChangeHandler(e, 'shipping');
					}}
				/>
			</div>
			<div className="mb-[2.4rem] flex flex-col">
				<label
					htmlFor="city"
					className="mb-[1rem] text-[1.2rem] tracking-[-0.02rem]"
				>
					City
				</label>
				<input
					type="text"
					placeholder="New York"
					id="city"
					name="city"
					className="rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] tracking-[-0.025rem] focus:outline-none"
					onChange={(e) => {
						onChangeHandler(e, 'shipping');
					}}
				/>
			</div>
			<div className="mb-[2.4rem] flex flex-col">
				<label
					htmlFor="country"
					className="mb-[1rem] text-[1.2rem] tracking-[-0.02rem]"
				>
					Country
				</label>
				<input
					type="text"
					placeholder="United States"
					id="country"
					className="rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] tracking-[-0.025rem] focus:outline-none"
					onChange={(e) => {
						onChangeHandler(e, 'shipping');
					}}
				/>
			</div>
		</fieldset>
	);
};

export default ShippingDetails;
