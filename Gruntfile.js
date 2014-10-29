module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            files: ['./static/**/*.less'],
            tasks: ['less']
        },

        less: {
            options: {
                paths: ['./static/styles'],
                sourceMap: true,
                sourceMapFilename: './static/styles/source.css.map',
                sourceMapURL: 'source.css.map'
            },
            files: {
                expand: true,
                cwd: './static/styles',
                src: ['*.less'],
                dest: './static/styles',
                ext: '.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
};