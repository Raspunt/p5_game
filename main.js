
const path = require('path');


const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const SocketHandler = require("./socketHandler")
const blobServer = require('./blobServer.js')
const dbServer = require('./dbServer.js')
const Router = require('./routes.js')





SocketHandler(io)
blobServer.SendAllPlayers(io)
dbServer.ConnectToDb()




app.use(express.static(path.join(__dirname, 'static')))


let r = new Router(app)

r.StartListen()



server.listen(8000, () => {
  console.log('listening on *8000');
});