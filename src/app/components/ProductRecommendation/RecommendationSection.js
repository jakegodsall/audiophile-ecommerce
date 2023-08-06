import RecommendationItem from './RecommendationItem';

const RecommendationSection = ({ others }) => {
	return (
		<div className="flex flex-col items-center sm:mb-[12rem]">
			<p className="mb-[4rem] text-[2.4rem] font-bold uppercase tracking-[0.085rem] sm:text-[3.2rem] lg:mb-[6.4rem]">
				You may also like
			</p>
			<ul className="flex flex-col items-center gap-y-[5.6rem] sm:flex-row sm:gap-x-[1.1rem] lg:gap-x-[3rem]">
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
