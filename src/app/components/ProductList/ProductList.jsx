import ProductListItem from './ProductListItem';

const ProductList = ({ products }) => {
	return (
		<ul className="flex flex-col items-center gap-[12rem] lg:mb-[12rem]">
			{products.map((product, key) => {
				return (
					<li
						key={product.id}
						className="flex w-full flex-col items-center"
					>
						<ProductListItem product={product} ltrKey={key} />
					</li>
				);
			})}
		</ul>
	);
};

export default ProductList;
