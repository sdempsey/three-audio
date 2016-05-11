module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: 'src/grunticon',
            src: ['*.svg', '*.png'],
            dest: 'dist/assets/css'
        }],
        options: {
            enhanceSVG: true
        }
    }
};