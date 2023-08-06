import RecommendationItem from './RecommendationItem';

const RecommendationSection = ({ others }) => {
	return (
		<div>
			<p className="mb-[4rem] text-[2.4rem] font-bold uppercase tracking-[0.085rem]">
				You may also like
			</p>
			<ul className="flex flex-col gap-[5.6rem]">
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
