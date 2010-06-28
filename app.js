// System
var sys = require("sys"),
http = require("http"),
events = require("events"),
path = require("path"),
fs = require('fs');

// Local
require.paths.unshift(__dirname);
require.paths.push(__dirname + '/lib');
function Dump(thing) {
    if (arguments.length > 1) {
        thing = arguments;
    }
    sys.puts(sys.inspect(thing));
}

// the vendor directory
var dirs = fs.readdirSync('./vendor');
for (i in dirs) {
    require.paths.push(fs.realpathSync('./vendor/' + dirs[i]));
}


var io = require('socket.io');

// require the router
var router = require('router');

// socket.io, I choose you
// simplest chat application evar
var buffer = [],
json = JSON.stringify;

/* Socket.IO listener */
//io.listen(server, {
//
//    onClientConnect: function(client) {
//        client.send(json({
//            buffer: buffer
//        }));
//        client.broadcast(json({
//            announcement: client.sessionId + ' connected'
//        }));
//    },
//
//    onClientDisconnect: function(client) {
//        client.broadcast(json({
//            announcement: client.sessionId + ' disconnected'
//        }));
//    },
//
//    onClientMessage: function(message, client) {
//        var msg = {
//            message: [client.sessionId, message]
//        };
//        buffer.push(msg);
//        if (buffer.length > 15) {
//            buffer.shift();
//        }
//        client.broadcast(json(msg));
//    }
//
//});

