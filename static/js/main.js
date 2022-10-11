

var blob;
var blobs;

let gameOver = false

function setup() { 
  let canvas = createCanvas(800, 800);
  
  canvas.parent('canvas_pos')
  
  blob = new Blob(0,0,0,64);
  blobs = new Blobs(1000,16)
  
  blobs.CreateEnemyBlobs()

  blob.sendPosition('playerConnected')

  
} 

function draw() { 
  background(0);

  //  camera moving to the player
  blob.moveCamera();

  if (!gameOver){
    
    //  display player
    blob.show();
    // player move to the mouse
    blob.followMouse();

  }else{
    
  }

  //  Parameter means who can eat blobs
  blobs.ShowAllBlobs(blob)

  // send information to the server
  blob.sendPosition('playerUpdate')



  


    
}

