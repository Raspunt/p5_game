
const blobServer = require('./blobServer.js')


let blobs = blobServer.blobs
let Blob = blobServer.Blob


module.exports = function SocketHandler(io) {


    io.on("connection", (socket) => {
        socket.on('playerUpdate', (data) => {
            try {
                let blob;
                for (let i = 0; i < blobs.length; i++) {
                    if (blobs[i].id === socket.id) {
                        blob = blobs[i]
                    }
                }

                blob.x = data.x
                blob.y = data.y
                blob.r = data.r

            } catch (error) {
            }
        })
        
        socket.on('playerConnected', (data) => {
            let blob = new Blob(socket.id, data.username, data.x, data.y, data.r);

            blobs.push(blob)
            console.log("player ready");

            socket.emit("user_id", socket.id);

        })
        socket.on('RemovePlayer', (data) => {
            console.log(data['player_id']);
            blobs.splice(data['player_id'], 1)
        })

        console.log(`user connected id=${socket.id}`);
        io.emit("User connect hooray");
    });

    io.on("disconnect", (socket) => {
        for (let i = 0; i < blobs.length; i++) {
            if (blobs[i].id === socket.id) {
                blobs[i].splise(0, 1)

            }
        }
        console.log("user disconect");
    })
}


