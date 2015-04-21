if(Meteor.isClient) {
    Meteor.startup(function() {
        window.client = new Caress.Client({
            host: 'localhost',
            port: 5000
        });
        client.connect();
    });

}


if(Meteor.isServer) {
    Meteor.startup(function() {

        var io = Npm.require('socket.io')(5000);
        var CaressServer = Npm.require('caress-server');

        var caressServer = new CaressServer('0.0.0.0', 3333, {debug: false, json: true});

        io.on('connection', function(socket) {
            caressServer.on('tuio', function(msg) {
                socket.emit('tuio', msg);
            });
        });
        io.on('disconnect', function() {
            console.log("Socket.io client disconnected.");
        })
    });
}