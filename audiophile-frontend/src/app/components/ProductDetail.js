const ProductDetail = ({ product }) => {
	console.log(product);

	return (
		<div className="flex flex-col gap-[8.8rem] px-[2.4rem]">
			<div>
				<picture>
					<source
						media={'(min-width: 1024px)'}
						srcSet={product.image.desktop}
					/>
					<source
						media={'(min-width: 640px)'}
						srcSet={product.image.tablet}
					/>
					<img
						src={product.image.mobile}
						alt={product.name}
						className="mb-[3.2rem] rounded-[0.8rem]"
					/>
				</picture>
				<div className="flex flex-col gap-[2.4rem]">
					{product.new && (
						<p className="text-[1.4rem] uppercase tracking-[1rem] text-primary-orange">
							new product
						</p>
					)}
					<h1 className="text-[2.8rem] font-bold uppercase tracking-[0.1rem]">
						{product.name}
					</h1>
					<p className="text-[1.5rem] font-medium leading-[2.5rem] text-black/50">
						{product.description}
					</p>
					<p className="text-[1.8rem] font-bold uppercase tracking-[0.1286rem]">
						$ {product.price}
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-[2.4rem]">
				<h2 className="text-[2.4rem] font-bold uppercase tracking-[0.085rem]">
					Features
				</h2>
				<p className="text-[1.5rem] font-medium leading-[2.5rem] text-black/50">
					{product.features}
				</p>
			</div>
			<div className="flex flex-col gap-[2.4rem]">
				<h2 className="text-[2.4rem] font-bold uppercase tracking-[0.085rem]">
					In the box
				</h2>
				<ul className="flex flex-col gap-[0.8rem]">
					{product.includes.map(({ quantity, item }, key) => {
						return (
							<li
								key={key}
								className="flex  items-center gap-[2.4rem]"
							>
								<p className="text-[1.5rem] font-bold text-primary-orange">
									{quantity}x
								</p>
								<p className="text-[1.5rem] font-medium text-black/50">
									{item}
								</p>
							</li>
						);
					})}
				</ul>
			</div>
			<div>
				<picture>
					<source
						media={'(min-width: 1024px)'}
						srcSet={product.gallery.first.desktop}
					/>
					<source
						media={'(min-width: 640px)'}
						srcSet={product.gallery.first.tablet}
					/>
					<img
						src={product.gallery.first.mobile}
						alt={product.name}
						className="mb-[3.2rem] rounded-[0.8rem]"
					/>
				</picture>
				<picture>
					<source
						media={'(min-width: 1024px)'}
						srcSet={product.gallery.second.desktop}
					/>
					<source
						media={'(min-width: 640px)'}
						srcSet={product.gallery.second.tablet}
					/>
					<img
						src={product.gallery.second.mobile}
						alt={product.name}
						className="mb-[3.2rem] rounded-[0.8rem]"
					/>
				</picture>
				<picture>
					<source
						media={'(min-width: 1024px)'}
						srcSet={product.gallery.third.desktop}
					/>
					<source
						media={'(min-width: 640px)'}
						srcSet={product.gallery.third.tablet}
					/>
					<img
						src={product.gallery.third.mobile}
						alt={product.name}
						className="mb-[3.2rem] rounded-[0.8rem]"
					/>
				</picture>
			</div>
		</div>
	);
};

export default ProductDetail;
