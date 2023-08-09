import ProductNavigationBar from '../components/ProductNavigation/ProductNavigationBar';

const ProductLayout = ({ children }) => {
	return (
		<div>
			{children}
			<ProductNavigationBar />
		</div>
	);
};

export default ProductLayout;
