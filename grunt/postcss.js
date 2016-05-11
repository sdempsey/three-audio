module.exports = {
	options: {
		map: true,
		processors: [
			require('pixrem')(),
			require('autoprefixer')({ browsers: ['last 2 versions'] }),
			require('cssnano')(),
            require('css-mqpacker')({sort: true})
		]
	},
	dist: {
		src: 'dist/assets/css/main.css'
	}
};