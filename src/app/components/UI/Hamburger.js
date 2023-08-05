const Hamburger = ({ isActive, setIsActive }) => {
	return (
		<div
			className="flex h-[1.5rem] w-[1.6rem] flex-col justify-between"
			onClick={setIsActive}
		>
			<div
				className={
					isActive
						? 'h-[3px] w-full translate-y-[.6rem] rotate-[45deg] transform bg-white transition-transform duration-500'
						: 'h-[3px] w-full bg-white transition-transform duration-500'
				}
			></div>
			<div
				className={
					isActive
						? 'h-[3px] w-full bg-white opacity-0 transition-opacity duration-500'
						: 'opacity-1 opacity-1 h-[3px] w-full bg-white transition-opacity duration-500'
				}
			></div>
			<div
				className={
					isActive
						? 'h-[3px] w-full translate-y-[-.6rem] rotate-[135deg] transform bg-white transition-transform duration-500'
						: 'h-[3px] w-full bg-white transition-transform duration-500'
				}
			></div>
		</div>
	);
};

export default Hamburger;
