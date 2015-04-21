if(Meteor.isClient) {
    Meteor.startup(function() {
        window.client = new Caress.Client({
            host: 'localhost',
            port: 5000
        });
        client.connect();

        document.addEventListener('touchmove', onTouchMove, false);
        document.addEventListener('touchstart', onTouchStart, false);

        var debugs = [];

        function onTouchStart(e)  {
            $debug = $('<div class="debug"></div>');
            $debug.css({
                'position': 'absolute',
                'left': e.clientX,
                'top': e.clientY,
                'background-color': 'red',
                'width': '40px',
                'height': '40px'
            });
            console.log(e);
            $('body').append($debug);
            debugs.push($debug);
            //mouse.set(((e.clientX / window.innerWidth)*2) - 1, -((e.clientY/window.innerHeight) * 2) + 1, 1);
            //debugMouse.set(e.clientX, e.clientY, 1);
        }
        function onTouchMove(e) {
            for(var i=0;i<debugs.length;i++) {
                $debug = debugs[i];
                $debug.css({
                    'left': e.clientX,
                    'top': e.clientY
                })
            }
        }

    });

}


if(Meteor.isServer) {
    Meteor.startup(function() {

        var io = Meteor.npmRequire('socket.io')(5000);

        var CaressServer = Meteor.npmRequire('caress-server');
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