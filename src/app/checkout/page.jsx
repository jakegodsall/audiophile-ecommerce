'use client';

import { useRouter } from 'next/navigation';
import CheckoutForm from './CheckoutForm';

const CheckoutPage = () => {
	const router = useRouter();

	const goBackHandler = () => {
		router.back();
	};

	return (
		<div className="bg-[#FAFAFA] px-[2.4rem]">
			<p
				className="mb-[2.4rem] mt-[1.6rem] cursor-pointer self-start text-[1.5rem] font-medium capitalize text-black/50 sm:mt-[3.3rem] lg:mb-[5.6rem] lg:mt-[7.9rem]"
				onClick={goBackHandler}
			>
				Go back
			</p>
			<CheckoutForm />
		</div>
	);
};

export default CheckoutPage;
