const CheckoutForm = () => {
	return (
		<form className="flex w-full flex-col items-center bg-[#FAFAFA] px-[2.4rem]">
			<div className="w-full bg-white p-[2.4rem]">
				<h1 className="uppercase">Checkout</h1>
				<fieldset>
					<legend>Billing Details</legend>
					<div>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							placeholder="Alexei Ward"
							id="name"
						/>
					</div>
					<div>
						<label htmlFor="email">Email Address</label>
						<input
							type="email"
							placeholder="alexeiward@mail.com"
							id="email"
						/>
					</div>
					<div>
						<label htmlFor="phone">Phone Number</label>
						<input
							type="text"
							placeholder="+1 202-555-0136"
							id="phone"
						/>
					</div>
				</fieldset>
				<fieldset>
					<legend>Shipping Info</legend>
					<div>
						<label htmlFor="address">Your Address</label>
						<input
							type="text"
							placeholder="1137 Williams Avenue"
							id="address"
						/>
					</div>
					<div>
						<label htmlFor="zip">ZIP Code</label>
						<input type="text" placeholder="10001" id="zip" />
					</div>
					<div>
						<label htmlFor="city">City</label>
						<input type="text" placeholder="New York" id="city" />
					</div>
					<div>
						<label htmlFor="country">Country</label>
						<input
							type="text"
							placeholder="United States"
							id="country"
						/>
					</div>
				</fieldset>
				<fieldset>
					<legend>Payment Details</legend>
					<div>
						<legend>Payment Method</legend>
						<div>
							<input
								type="radio"
								name="payment-method"
								id="e-money"
								value="e-money"
							/>
							<label htmlFor="e-money">e-Money</label>
						</div>
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
					<div>
						<label htmlFor="e-money-number">e-Money Number</label>
						<input type="text" id="e-money-number" />
					</div>
					<div>
						<label htmlFor="e-money-pin">e-Money PIN</label>
						<input type="text" id="e-money-pin" />
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
