import ProductListItem from './ProductListItem';

const ProductList = ({ products }) => {
	return (
		<ul className="flex flex-col gap-[12rem]">
			{products.map((product) => {
				return (
					<li className={product.id}>
						<ProductListItem product={product} />
					</li>
				);
			})}
		</ul>
	);
};

export default ProductList;
