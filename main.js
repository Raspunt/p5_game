
const path = require('path');


const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const SocketHandler = require("./socketHandler")
const blobServer = require('./blobServer.js')






SocketHandler(io)
blobServer.SendAllPlayers(io)





app.use(express.static(path.join(__dirname, 'static')))

app.get('/', function (req, res) {  
  res.sendFile(__dirname+'/public/index.html');  
});  




server.listen(8000, () => {
  console.log('listening on *8000');
});