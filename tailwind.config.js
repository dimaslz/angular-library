module.exports = {
	prefix: '',
	purge: {
		// enabled: process.env.NODE_ENV === 'production',
		enabled: true,
		content: [
			'./projects/**/*.{html,ts}',
		]
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	// plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};