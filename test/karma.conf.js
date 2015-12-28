module.exports = function(config) {
	config.set({

		basePath : '../',

		files : [ 'test/unit/*.js' ],

		autoWatch : true,

		frameworks : [ 'jasmine' ],

		// browsers : ['Chrome', 'Firefox'],
		browsers : [ 'Chrome' ],

		plugins : [ 'karma-chrome-launcher',
		// 'karma-firefox-launcher',
		'karma-jasmine' ],

		junitReporter : {
			outputFile : 'test_out/unit.xml',
			suite : 'unit'
		}

	});
};