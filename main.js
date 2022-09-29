
const path = require('path');

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


let blobs = []

app.use(express.static(path.join(__dirname, 'static')))

app.get('/', function (req, res) {  
  res.sendFile(__dirname+'/public/index.html');  
});  

io.on("connection", (socket) => {
  

  socket.on('mouse', (data)=>{
    console.log(`Player position ${data.x} ${data.y}`);
  })

  io.emit("User connect hooray");
});


server.listen(8000, () => {
  console.log('listening on *8000');
});