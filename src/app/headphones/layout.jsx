import BringingAudio from '../components/BringingAudio';
import ProductNavigationBar from '../components/ProductNavigation/ProductNavigationBar';

const ProductLayout = ({ children }) => {
	return (
		<div>
			{children}
			<ProductNavigationBar />
			<BringingAudio />
		</div>
	);
};

export default ProductLayout;
