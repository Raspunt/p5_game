


var playerBlobs = []

function PlayerBlob(id,ip,username,x,y,r){
  this.id = id;
  this.ip = ip;
  this.username = username;
  this.x = x;
  this.y = y;
  this.r = r;

}



module.exports = {
    PlayerBlob:PlayerBlob,
    playerBlobs:playerBlobs,
}