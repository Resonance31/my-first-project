module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
   grunt.initConfig({
             cssmin: {
                 style: {
                    options: {
           keepSpecialComments: 0,
             report: "gzip"
          },
        files: {
        "css/style.min.css": ["css/style.css"]
		}
	}	
 }
   });
   
   
   grunt.registerTask("build", [
   "cssmin"
   ]);
   
};