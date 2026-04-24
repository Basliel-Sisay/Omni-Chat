const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const rend = express();
const server = http.createServer(rend);
const io = new Server(server);
rend.use(express.static('public'));
io.on('connection', function (socket){
    console.log("Connected to with unique ID: " + socket.id);
    socket.on("Message", function (message){
        console.log("Message received: "+ message);
        io.emit("Message", message);
    });
    socket.on("disconnect", function(){
        console.log("Disconnected: ", socket.id);
    });

});
server.listen(3000, function(){
    console.log("Connected to localhost 3000");
});