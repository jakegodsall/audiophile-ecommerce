const RecommendationItem = ({ product }) => {
	console.log(product);

	return (
		<div>
			<picture>
				<source />
				<source />
				<img src="" alt="" />
			</picture>
			<p>{product.name}</p>
			<button type="button">See product</button>
		</div>
	);
};

export default RecommendationItem;
