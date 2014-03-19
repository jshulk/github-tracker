module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-cafe-mocha');
	grunt.loadNpmTasks('grunt-jscoverage');
	grunt.loadNpmTasks('grunt-env');

	grunt.initConfig({
		env : {
			test : {
				NODE_ENV : 'TEST'
			},
			coverage : {
				NODE_ENV : 'COVERAGE'
			}
		},
		cafemocha: {
			test: {
				src : 'test/*.js',
				options : {
					ui : 'bdd', 
					reporter : 'spec'
				}
			},
			coverage : {
				src : 'test/*.js',
				options : {
					reporter : 'html-cov',
					ui: 'bdd',
					coverage : {
						output : 'coverage.html'
					}
				}
			}
		},
		jscoverage:{
			options : {
				inputDirectory : 'lib',
				outputDirectory : 'lib-cov',
				highlight : false	
			}
			
		}
	});

	grunt.registerTask('test', ['env:test', 'cafemocha:test']);
	grunt.registerTasks('coverage', ['env:coverage', 'jscoverage', 'cafemocha:coverage']);
};
