Package.describe({
  name: 'zlot:tuio-caress',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('client/caress-0.1.0.js', 'client');
  api.addFiles('client/dependencies/socket.io.js', 'client');
  api.use('meteorhacks:npm', 'server');
  api.addFiles('tuio-caress.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('zlot:tuio-caress');
  api.addFiles('tuio-caress-tests.js');
});