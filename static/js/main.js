

var blob;
var blobs;

function setup() { 
  createCanvas(800, 800);
  blob = new Blob(0,0,64);
  blobs = new Blobs(1000,16)
  
  blobs.CreateEnemyBlobs()
  
} 

function draw() { 
  background(0);
  
  blob.moveCamera();
  blob.show();
  blob.followMouse();
  blobs.ShowAllBlobs(blob)

  socket.emit('mouse', {mx : mouseX, my : mouseY});



    
}

