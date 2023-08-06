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
				'hero-mobile':
					'url("/public/images/home/mobile/image-earyphones-yx1.jpg")',
				'hero-tablet':
					'url("/images/home/tablet/image-earyphones-yx1.jpg")',
				'hero-desktop':
					'url("/images/home/desktop/image-earyphones-yx1.jpg")',
			},
			colors: {
				'primary-orange': 'var(--color-primary-orange)',
				'secondary-orange': 'var(--color-secondary-orange)',
				'primary-black': 'var(--color-primary-black)',
				'primary-grey': 'var(--color-primary-grey)',
				'secondary-grey': 'var(--color-secondary-grey)',
			},
		},
	},
	plugins: [],
};
