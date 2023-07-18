/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
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
