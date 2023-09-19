import Image from 'next/image';

const SummaryItem = ({ product }) => {
	console.log('from item', product);
	return (
		<div className="flex items-center justify-between ">
			<div className="flex items-center gap-x-[1.6rem]">
				<Image
					src={product.image}
					alt={product.name}
					width="64"
					height="64"
					className="rounded-[0.8rem]"
				/>
				<div>
					<p className="text-[1.5rem] font-bold leading-[2.5rem]">
						{product.name}
					</p>
					<p className="text-[1.4rem] font-bold leading-[2.5rem] text-black/50">
						$ {product.price}
					</p>
				</div>
			</div>
			<p className="text-[1.5rem] font-bold text-black/50">
				x{product.quantity}
			</p>
		</div>
	);
};

export default SummaryItem;
