Package.describe({
  summary: "Leaflet LocateControl Plugin for Meteor"
});

Package.on_use(function (api, where) {
  api.add_files('lib/locate.js', 'client');
});