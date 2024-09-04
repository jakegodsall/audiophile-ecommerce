import React from 'react';

const BillingDetails = ({ onChangeHandler }) => {
	return (
		<fieldset className="mb-[3.2rem] sm:flex sm:flex-wrap">
			<legend className="mb-[1.6rem] text-[1.3rem] font-medium uppercase tracking-[0.1rem] text-primary-orange">
				Billing Details
			</legend>
			<div className="mb-[2.4rem] flex flex-col sm:mr-[1.6rem] sm:flex-1">
				<label
					htmlFor="name"
					className="mb-[1rem] text-[1.2rem] font-bold tracking-[-0.02rem]"
				>
					Name
				</label>
				<input
					type="text"
					placeholder="Alexei Ward"
					id="name"
					name="name"
					className="rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] tracking-[-0.025rem] focus:outline focus:outline-primary-orange"
					onChange={(e) => onChangeHandler(e, 'billing')}
				/>
			</div>
			<div className="mb-[2.4rem] flex flex-col sm:flex-1">
				<label
					htmlFor="email"
					className="mb-[1rem] text-[1.2rem] font-bold tracking-[-0.02rem]"
				>
					Email Address
				</label>
				<input
					type="text"
					placeholder="alexei@mail.com"
					id="email"
					name="email"
					className="rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] tracking-[-0.025rem] focus:outline focus:outline-primary-orange"
					onChange={(e) => onChangeHandler(e, 'billing')}
				/>
			</div>
			<div className="mb-[2.4rem] flex flex-col sm:w-[calc(50%-0.8rem)]">
				<label
					htmlFor="phone"
					className="mb-[1rem] text-[1.2rem] font-bold tracking-[-0.02rem]"
				>
					Phone Number
				</label>
				<input
					type="text"
					placeholder="+1 202-555-0136"
					id="phone"
					name="phone"
					className="rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] tracking-[-0.025rem] focus:outline focus:outline-primary-orange"
					onChange={(e) => onChangeHandler(e, 'billing')}
				/>
			</div>
		</fieldset>
	);
};

export default BillingDetails;
