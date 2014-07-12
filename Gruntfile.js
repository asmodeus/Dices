module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // concat: {

    //   options: {
    //     separator: ';'
    //   },

    //   dist: {
    //     src: ['src/**/*.js'],
    //     dest: 'dist/<%= pkg.name %>.js'
    //   }

    // },

    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    //   },

    //   dist: {
    //     files: {
    //       'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
    //     }
    //   }
    // },


    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        reporter: require('jshint-jenkins-checkstyle-reporter'),
        reporterOutput: 'coverage/lint/jshint-checkstyle.xml',
        browser: true,     // I'm in a browser
        undef: true,       // Must define all variables used (or use /*global ...*/)
        unused: 'vars',    // Don't define variables you don't need. (params are ok)
        sub: true,         // Allow dict['key']
        eqnull: true,      // x == null
        indent: 2,         // 2 tabs
        curly: true,       // if () {
        noarg: true,       // No arguments.calle[re]
        freeze: true,      // No native prototype extension
        gcl: true,         // I'm friends with Google Closure Compiler
        '-W030': true,     // /** @type {string} */ this.str;
      }
    },
  });

  

  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');

  // grunt.registerTask('test', ['jshint', 'karma']);

  grunt.registerTask('default', []);

};