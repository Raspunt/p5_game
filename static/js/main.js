

var blob;
var blobs;

let gameOver = false

function setup() { 
  let canvas = createCanvas(800, 800);
  
  canvas.parent('canvas_pos')
  
  blob = new Blob(0,0,0,64);
  blobs = new Blobs(5000,16)
  
  blobs.CreateEnemyBlobs()

  blob.sendPosition('playerConnected')

  
} 

function draw() { 
  background(100);


  //  camera moving to the player
  blob.moveCamera();

  if (!gameOver){
    
    //  display player
    blob.show();
    // player move to the mouse

    let mapSizeWithPlayer = mapSize - blob.r/2
    if(blob.pos.x < mapSizeWithPlayer && blob.pos.x > -mapSizeWithPlayer && blob.pos.y < mapSizeWithPlayer && blob.pos.y > -mapSizeWithPlayer){
      blob.followMouse();
    }else {
      if (blob.pos.x >= 0){
        blob.pos.x -= 1
      }else{
        blob.pos.x += 1
      }

      if (blob.pos.y >= 0){
        blob.pos.y -= 1
      }else{
        blob.pos.y += 1
      }

    }

 


  }else{
    
  }

  //  Parameter means who can eat blobs
  blobs.ShowAllBlobs(blob)

  // send information to the server
  blob.sendPosition('playerUpdate')


}

