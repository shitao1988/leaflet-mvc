// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		backboneLocalstorage: {
			deps: ['backbone'],
			exports: 'Store'
		}
	},
	paths: {
		jquery: 'lib/jquery',
		leaflet:'lib/leaflet/leaflet',
		underscore: 'lib/underscore',
		backbone: 'lib/backbone/backbone',
		handlebars:'lib/handlebars',
		backboneLocalstorage: 'lib/backbone/backbone.localStorage',
		text: 'lib/require/text'
	}
});

require([
	'views/app',
	'routers/router'
], function( MapView, Workspace ) {
	// Initialize routing and start Backbone.history()
	new Workspace();
	Backbone.history.start();

	// Initialize the application view
	new MapView({el: '#map'});
});
