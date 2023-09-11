const CheckoutForm = () => {
	return (
		<form className="flex w-full flex-col items-center bg-[#FAFAFA] px-[2.4rem]">
			<div className="w-full bg-white p-[2.4rem]">
				<h1 className="mb-[3.2rem] text-[2.8rem] font-bold uppercase tracking-[0.1rem]">
					Checkout
				</h1>
				<fieldset>
					<legend className="mb-[1.6rem] text-[1.3rem] font-medium uppercase tracking-[0.1rem] text-primary-orange">
						Billing Details
					</legend>
					<div className="mb-[2.4rem] flex flex-col">
						<label
							htmlFor="name"
							className="mb-[1rem] text-[1.2rem] tracking-[-0.02rem]"
						>
							Name
						</label>
						<input
							type="text"
							placeholder="Alexei Ward"
							id="name"
							className="rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] tracking-[-0.025rem] focus:outline-none"
						/>
					</div>
					<div className="mb-[2.4rem] flex flex-col">
						<label
							htmlFor="email"
							className="mb-[1rem] text-[1.2rem] tracking-[-0.02rem]"
						>
							Email Address
						</label>
						<input
							type="text"
							placeholder="alexei@mail.com"
							id="email"
							className="rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] tracking-[-0.025rem] focus:outline-none"
						/>
					</div>
					<div className="mb-[2.4rem] flex flex-col">
						<label
							htmlFor="phone"
							className="mb-[1rem] text-[1.2rem] tracking-[-0.02rem]"
						>
							Phone Number
						</label>
						<input
							type="text"
							placeholder="+1 202-555-0136"
							id="phone"
							className="rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] tracking-[-0.025rem] focus:outline-none"
						/>
					</div>
				</fieldset>
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
							className="rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] tracking-[-0.025rem] focus:outline-none"
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
							className="rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] tracking-[-0.025rem] focus:outline-none"
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
							className="rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] tracking-[-0.025rem] focus:outline-none"
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
						/>
					</div>
				</fieldset>
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
							<label htmlFor="cash-on-delivery">
								Cash on Delivery
							</label>
						</div>
					</div>
				</fieldset>
				<div>
					<div className="mb-[2.4rem] flex flex-col">
						<label
							htmlFor="e-money-number"
							className="mb-[1rem] text-[1.2rem] tracking-[-0.02rem]"
						>
							e-Money Number
						</label>

						<input
							type="text"
							id="e-money-number"
							placeholder="238521993"
							className="rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] tracking-[-0.025rem] focus:outline-none"
						/>
					</div>
					<div className="mb-[2.4rem] flex flex-col">
						<label
							htmlFor="e-money-pin"
							className="mb-[1rem] text-[1.2rem] tracking-[-0.02rem]"
						>
							e-Money PIN
						</label>
						<input
							type="text"
							id="e-money-pin"
							placeholder="6891"
							className="rounded-[0.8rem] border-[0.1rem] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] tracking-[-0.025rem] focus:outline-none"
						/>
					</div>
				</div>
			</div>
			<div>
				<button type="submit">Continue & Pay</button>
			</div>
		</form>
	);
};

export default CheckoutForm;
