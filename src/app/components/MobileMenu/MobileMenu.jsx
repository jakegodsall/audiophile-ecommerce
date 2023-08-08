import ProductNavigationBar from '../ProductNavigation/ProductNavigationBar';

const MobileMenu = ({ closeMenu }) => {
	const closeMobileMenu = () => {
		closeMenu(true);
	};

	return (
		<div
			className="absolute bottom-[9rem] left-0 right-0 top-[9rem] z-20 h-full bg-black/40"
			onClick={closeMobileMenu}
		>
			<div className="fixed left-0 top-[9rem] w-full">
				<ProductNavigationBar />
			</div>
		</div>
	);
};

export default MobileMenu;
