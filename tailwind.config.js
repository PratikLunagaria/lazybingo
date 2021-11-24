module.exports = {
	purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontSize: {
				xxs: '0.5rem',
				xxxs: '0.25rem'
			}
		}
	},
	variants: {
		extend: {
			animation: [ 'hover', 'focus' ]
		}
	},
	plugins: []
};
