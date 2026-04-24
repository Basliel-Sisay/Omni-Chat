const express = require('express');
const http = require('http');
const {Server} = require('socket.io');

const rend = express();
const server = http.createServer(rend);
const io = new Server(server);
rend.use(express.static('public'));

io.on('connection', function (socket){
    const date = new Date().toLocaleTimeString();
    console.log("[", date, "]: New client connected with ID: ", socket.id);
    console.log("Total clients connected: ",io.engine.clientsCount);
    socket.on("Message", function (message){
        const sent = new Date().toLocaleTimeString();
        console.log("[", sent, "] Message received from", socket.id, ":", message);
        console.log("Broadcasting message to ",io.engine.clientsCount," clients...");
        io.emit("Message", message);
    });
    socket.on("disconnect", function(){
        const dis = new Date().toLocaleTimeString();
        console.log("[", dis, "] Client disconnected: ", socket.id);
        console.log(io.engine.clientsCount," Clients left");
    });
});
server.listen(3000, function(){
    const serverTime = new Date().toLocaleTimeString();
    console.log("[", serverTime, "] server running at http://localhost:3000");
});