module.exports = function(grunt) {
	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            options: {
              mergeIntoShorthands: false,
              roundingPrecision: -1
            },
            target: {
              files: {
                'public/css/output.css': 
                    [
                      'public/vendor/animate/animate.min.css',
                      'public/vendor/bootstrap/css/bootstrap.min.css',
                      'public/css/stylesheet.css',
                    ]
              }
            }
          }
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
}