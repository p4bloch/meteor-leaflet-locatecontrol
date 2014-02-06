Package.describe({
  summary: "Leaflet LocateControl Plugin for Meteor"
});

Package.on_use(function (api, where) {
  api.add_files('lib/locate.js', 'client');
  api.add_files('styles/locate.css', 'client');
  api.add_files('images/locate.png', 'client');
  api.add_files('images/locate_alt.png', 'client');
  api.add_files('images/locate_touch.png', 'client');
  api.add_files('images/locate_touch_alt.png', 'client');
  api.add_files('images/spinner.gif', 'client');
});