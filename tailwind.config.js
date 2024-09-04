/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'hero-mobile': 'url("/images/home/mobile/image-hero.jpg")',
				'hero-tablet': 'url("/images/home/mobile/image-hero.jpg")',
				'hero-desktop': 'url("/images/home/desktop/image-hero.jpg")',
			},
			colors: {
				'primary-orange': 'var(--color-primary-orange)',
				'secondary-orange': 'var(--color-secondary-orange)',
				'primary-black': 'var(--color-primary-black)',
				'primary-grey': 'var(--color-primary-grey)',
				'secondary-grey': 'var(--color-secondary-grey)',
				error: 'var(--error)',
			},
		},
	},
	plugins: [],
};
