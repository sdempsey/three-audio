module.exports = {
	dist: {
		options: {
			cache: false
		},
		files: [{
			expand: true,
			cwd: 'src/images',
			src: ['**/*.{png,jpg,gif,svg}'],
			dest: 'dist/assets/images'
		}]
	}
};