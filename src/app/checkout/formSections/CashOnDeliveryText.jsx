import Image from 'next/image';
import React from 'react';

import CashOnDeliveryIcon from '../../../../public/images/checkout/icon-cash-on-delivery.svg';

const CashOnDeliveryText = () => {
	return (
		<div className="flex items-center gap-x-[3.2rem]">
			<Image
				src={CashOnDeliveryIcon}
				height="48"
				width="48"
				alt="cash-on-delivery"
			/>
			<div className="text-[1.5rem] leading-[2.5rem] text-black/50">
				The 'Cash on Delivery' option enables you to pay in cash when
				our delivery courier arrives at your residence. Just make sure
				your address is correct so that your order will not be
				cancelled.
			</div>
		</div>
	);
};

export default CashOnDeliveryText;
