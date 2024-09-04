import React from 'react';

const EMoneyDetails = () => {
	return (
		<fieldset className="flex flex-col sm:flex-row sm:gap-x-[1.6rem]">
			<div className="mb-[2.4rem] flex flex-col sm:flex-1">
				<label
					htmlFor="e-money-number"
					className="mb-[1rem] text-[1.2rem] font-bold tracking-[-0.02rem]"
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
			<div className="mb-[2.4rem] flex flex-col sm:flex-1">
				<label
					htmlFor="e-money-pin"
					className="mb-[1rem] text-[1.2rem] font-bold tracking-[-0.02rem]"
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
		</fieldset>
	);
};

export default EMoneyDetails;
