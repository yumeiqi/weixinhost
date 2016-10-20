module.exports = function(grunt) {      // Project configuration.

    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    //没有matchdep，我们需要为每个依赖关系写grunt.loadNpmTasks('grunt-task-name'),这将很快增加和安装其他插件

    grunt.initConfig({          //Read the package.json (optional)
        pkg: grunt.file.readJSON("package.json"),
        
        htmlhint: {
            build: {
                options: {
                    'tag-pair':true,
                    'tagname-lowercase':true,
                    'attr-lowercase':true,
                    'attr-value-double-quotes':true,
                    'doctype-first':true,
                    'spec-char-escape':true,
                    'id-unique':true,
                    'head-script-disabled':true,
                    'style-disabled':true
                },
                src:['src/*.html']
            }
        },

        cssc: {
            build: {
                options: {
                    consolidateViaDeclarations: true,
                    consolidateViaSelectors: true,
                    consolidateMediaQueries: true
                },
                files: {
                    'build/css/style.css':'build/css/style.css'
                }
            }
        },
        cssmin: {
            build: {
                src: 'build/css/style.css',
                dest: 'build/css/style.css'
            }
        },

        sass: {
            build: {
                files: {
                    'build/css/style.css':'src/sass/master.scss'
                }
            }
        },

        uglify: {
            build: {
                files: {
                    'build/js/app.min.js' : ['src/js/app.js']
                }
            }
        },

        watch:{
            html: {
                files:['src/*.html'],
                tasks:['htmlhint']
            },

            css: {
                files: ['src/sass/*.scss'],
                tasks: ['buildcss']
            },

            js: {
                files: ['src/js/app.js'],
                tasks: ['uglify']
            }
        }



    });
    grunt.registerTask('default',[]);
    grunt.registerTask('buildcss',  ['sass', 'cssc', 'cssmin']);
}
