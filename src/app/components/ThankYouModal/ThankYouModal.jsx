import { motion } from 'framer-motion';
import Link from 'next/link';

const ThankYouModal = () => {
	return (
		<motion.div
			className="fixed bottom-[9rem] left-0 right-0 top-[9rem] z-10 flex h-full max-w-[144rem] flex-col
			items-center justify-center bg-black/40"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { delay: 0.2 } }}
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { delay: 0.2 } }}
				exit={{ opacity: 0 }}
				className="translate-y-[-10rem] rounded-xl bg-white p-[4.8rem]"
			>
				<h1 className="mb-[2.4rem] max-w-[28rem] text-[3.2rem] font-bold uppercase">
					Thank you for your order
				</h1>
				<p className="mb-[35px] text-[1.5rem] text-[#808080]">
					You will receive an email confirmation shortly.
				</p>
				<Link
					href="/"
					className="block w-full bg-primary-orange py-[1.5rem] text-center text-[1.3rem] font-bold uppercase text-white"
				>
					Back to home
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default ThankYouModal;
