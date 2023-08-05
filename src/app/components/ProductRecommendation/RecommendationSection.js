import RecommendationItem from './RecommendationItem';

const RecommendationSection = ({ others }) => {
	console.log(others);
	return (
		<div>
			<ul>
				{others.map((product, key) => {
					return (
						<li key={key}>
							<RecommendationItem product={product} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default RecommendationSection;
