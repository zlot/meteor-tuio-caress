if(Meteor.isClient) {
  Tinytest.add('my own example', function(test) {
    window.client = new Caress.Client({
      host: 'localhost',
      port: 5000
    });
    client.connect();

    // wait a moment for client to connect (client.connect() has no callback ability)
    setTimeout(function(){
      test.isTrue(client.connected, "client should have connected to websocket server served by socket.io");
    }, 1000);
  });
}


