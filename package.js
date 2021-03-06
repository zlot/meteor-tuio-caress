Package.describe({
  name: 'zlot:tuio-caress',
  version: '0.2.0',
  // Brief, one-line summary of the package.
  summary: 'Converts TUIO events into W3C Touch Events. A meteor wrapper for Caress server/client by ekryski.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/zlot/meteor-tuio-caress',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('client/caress-0.1.0.js', 'client');
  api.addFiles('client/dependencies/socket.io.js', 'client');
  api.addFiles('tuio-caress.js');
});

Npm.depends({
  "socket.io": "1.1.0",
  "caress-server": "0.2.1"
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('zlot:tuio-caress');
  api.addFiles('tuio-caress-tests.js');
});
