module.exports = {
	options: { livereload: true },
	scripts: {
		files: ['src/js/local/**/*.js'],
		tasks: ['js']
	},
	css: {
		files: ['src/sass/**/*.scss'],
		tasks: ['css']
	},
	images: {
		files: ['src/images/**/*.{gif,jpg,jpeg,png,svg}'],
		tasks: ['image']
	},
	content: {
		files: ['src/content/**/*'],
		tasks: ['copy']
	},
    grunt: {
        files: ['grunt/*', 'Gruntfile.js']
    }
};
