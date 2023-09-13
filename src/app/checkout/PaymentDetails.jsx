import React from 'react';

const PaymentDetails = () => {
	return (
		<fieldset>
			<legend className="text-[1.3rem] font-medium uppercase tracking-[0.1rem] text-primary-orange">
				Payment Details
			</legend>
			<div>
				<legend>Payment Method</legend>
				<label className="flex w-full gap-[1.6rem] rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[1.6rem] py-[1.8rem] text-[1.4rem] font-bold tracking-[-0.025rem]">
					<input
						type="radio"
						name="payment-method"
						id="e-money"
						value="e-money"
						className="hidden"
					/>
					<div className=" relative flex h-[2rem] w-[2rem] flex-col items-center justify-center rounded-full border-[0.1rem] border-[#CFCFCF] ">
						{/* <div className="h-4 w-4 rounded-full bg-primary-orange"></div> */}
					</div>
					e-Money
				</label>

				<div>
					<input
						type="radio"
						name="payment-method"
						id="cash-on-delivery"
						value="cash-on-delivery"
					/>
					<label htmlFor="cash-on-delivery">Cash on Delivery</label>
				</div>
			</div>
		</fieldset>
	);
};

export default PaymentDetails;
