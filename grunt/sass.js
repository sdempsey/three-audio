module.exports = {
	options: {
        precision: 3,
        style: 'expanded',
        sourcemap: 'inline'
    },
	dist: {
		files: { 'dist/assets/css/main.css': 'src/sass/main.scss' }
	}
};