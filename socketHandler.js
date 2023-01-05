
const blobServer = require('./blobServer.js')


let playerBlobs = blobServer.playerBlobs
let PlayerBlob = blobServer.PlayerBlob


module.exports = function SocketHandler(io) {


    io.on("connection", (socket) => {

        socket.on('playerUpdate', (data)=>{
            

            try {

                let blob;
                for(let i = 0; i < playerBlobs.length;i++ ){
                    if (playerBlobs[i].ip === socket.handshake.address){
                        blob = playerBlobs[i]
                    }
                }                
                blob.x = data.x
                blob.y = data.y
                blob.r = data.r
            
            }catch(error){}

            // console.log(blobs);

            io.emit('ListPlayers',playerBlobs);
         
        })

        socket.on('playerConnected', (data)=>{
            let player  = new PlayerBlob(
                socket.id,
                socket.handshake.address,
                data.username,
                data.x,
                data.y,
                data.r
            );

            if(ArrayConstainsIp(playerBlobs,socket.handshake.address) === undefined){                
                playerBlobs.push(player)
                console.log("player ready");
            }
        })

            
        socket.on("disconnect",(socket)=>{
            console.log("user disconect");
        })




        console.log(`user connected id=${socket.id}`);
    });

}




function ArrayConstainsIp(arr,ip){

    for(let i=0; i<arr.length; i++){
        if(arr[i].ip === ip)return true ;
    }

}

    
