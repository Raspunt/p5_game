


let blobs = []

function Blob(id,x,y,r){
  this.id = id
  this.x = x;
  this.y = y
  this.r = r

}

function SendAllPlayers(io) {


    setInterval(()=>{

        io.emit('ListPlayers',blobs)
        // console.log(blobs);
      
    },100)


}



module.exports = {
    SendAllPlayers:SendAllPlayers,
    Blob:Blob,
    blobs:blobs,
}