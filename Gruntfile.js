module.exports = function(grunt){
  grunt.initConfig({
    htmlmin:{
      options:{
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      dev: {
        files: {
          'dist/index.html': './index.html'
        }
      }
    },
    cssmin: {
      'dist/rectangle.css': 'rectangle.css'
    },
    uglify:{
      'dist/rectangle.js':'rectangle.js'  
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default',['htmlmin','cssmin','uglify']);
};

