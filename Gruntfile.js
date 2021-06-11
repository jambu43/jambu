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
                'public/css/style.min.css': 
                    [
                      'public/vendor/animate/animate.min.css',
                      'public/vendor/bootstrap/css/bootstrap.min.css',
                      'public/vendor/font-awesome/css/all.min.css',
                      'public/css/stylesheet.css'
                    ]
              }
            }
          }
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
}