import { motion } from 'framer-motion';

import ProductNavigationBar from '../ProductNavigation/ProductNavigationBar';

const MobileMenu = ({ closeMenu }) => {
	const closeMobileMenu = () => {
		closeMenu(true);
	};

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { delay: 0.6 } }}
				exit={{ opacity: 0 }}
				className="absolute bottom-0 left-0 right-0 top-[9rem] h-screen bg-white"
			></motion.div>
			<motion.div
				initial={{ y: -1000 }}
				animate={{ y: 20 }}
				exit={{ y: -1000 }}
				transition={{ duration: 1 }}
				className="absolute bottom-0 left-0 right-0 top-[-2rem] z-20 h-full bg-black/40"
				onClick={closeMobileMenu}
			>
				<div className="fixed left-0 top-[9rem] w-full">
					<ProductNavigationBar />
				</div>
			</motion.div>
		</>
	);
};

export default MobileMenu;
