module.exports = function(grunt) {
  grunt.initConfig({

    coffee: {

      dist: {
        expand: true,
        cwd: 'coffee',
        src: ['*.coffee', '**/*.coffee'],
        dest: 'js',
        ext: '.js'
      }
    },

    sass: {
      dist: {
        expand: true,
        cwd: 'scss',
        src: ['**/*.scss'],
        dest: 'css',
        ext: '.css'
      }
    },

    cssmin: {
      combine: {
        files: {
          'styles.css': ['css/*.css']
        }
      }
    },

    watch: {
      coffee: {
        files: ['coffee/*.coffee', 'coffee/**/*.coffee'],
        tasks: ['coffee']
      },

      sass: {
        files: ['scss/*.scss'],
        tasks: ['sass']
      },

      cssmin: {
        files: ['css/*.css'],
        tasks: ['cssmin']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');


  // Setip tasks, wanch should be last
  grunt.registerTask('run', ['coffee', 'sass', 'cssmin', 'watch']);
  grunt.registerTask('default', ['run']);

};