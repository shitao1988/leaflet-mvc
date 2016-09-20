define(['jquery', 'leaflet', 'underscore', 'backbone', 'collections/features',  'common'], function($, L, _, Backbone, Features,  Common) {
    var MapView = Backbone.View.extend({
        initialize: function() {
            this.listenTo(Features, 'reset', this.addMarkers);
            this.listenTo(Features, 'add', this.addMarker);
            this.render();
        },
        render: function() {

            this.map = L.map(this.el).setView([39, -77.4], 7);

			L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(this.map);
            this.markers = new L.LayerGroup().addTo(this.map);

            Features.add([
			    {
			      "id": 257,
			      "content": "literally there are cats everywhere",
			      "lat": "38.340543",
			      "lng": "-75.599324",
			      "user_id": 1
			    },
			    {
			      "id": 256,
			      "content": "whos cats are these???",
			      "lat": "38.340543",
			      "lng": "-76.599324",
			      "user_id": 1
			    }
			  ]);
            return this;
        },
        addMarkers: function() {
            Features.each(function(model, idx) {
                var marker = L.marker([model.attributes.lat, model.attributes.lng]).bindPopup(model.attributes.content);
                this.markers.addLayer(marker);
            }, this);
        },
        addMarker: function(model) {
            var marker = L.marker([model.attributes.lat, model.attributes.lng]).bindPopup(model.attributes.content);
            this.markers.addLayer(marker);
        }
    });
    return MapView;
});