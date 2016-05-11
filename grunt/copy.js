module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: 'src/content/',
			src: ['**'],
			dest: 'dist/'
		}]
	}
};