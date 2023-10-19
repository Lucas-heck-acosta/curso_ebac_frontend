module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            production: {
                options: {
                    compress: true
                }, files:
                {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        replace:
        {
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'ENDERECO_JS',
                            replacement: './scripts/main.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },

        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
            }
        }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'replace:dist', 'uglify']);
};
