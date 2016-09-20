define([
	'jquery',
	'backbone',
	'collections/features',
	'common'
], function( $, Backbone, Features, Common ) {

	var Workspace = Backbone.Router.extend({
		routes:{
			'*filter': 'setFilter'
		},

		setFilter: function(params) {
			// Set the current filter to be used
			if (params!=null) {
                Common.FeatureFilter = params.trim() || '';
			}
			

			// Trigger a collection filter event, causing hiding/unhiding
			// of the Todo view items
			Features.trigger('filter');
		}
	});

	return Workspace;
});
