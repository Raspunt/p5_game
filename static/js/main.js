

var player;
var blobs;

let gameOver = false

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight - 10);
  canvas.parent('canvas_pos');



  player = new Blob(0, 0, 64);
  blobs = new Blobs(10, 16);

  
  blobs.CreateEnemyBlobs();
  player.sendPosition('playerConnected');
  
  
  
}

function draw() {
  background(100);
 
  
  if (socket_is_online) {

    player.moveCamera();
  
    if (blobs.ISPlayerInsideMap(player)) {     
      player.followMouse();
    }else{
      player.StepBack();
    }

    blobs.ShowAllBlobs(player)
    player.sendPosition('playerUpdate')
    blobs.drawBordersOfMap();

  } else {
    fill(0);
    text('server not work', windowWidth / 2, windowHeight / 2);
    textAlign(CENTER);
    textSize(100);
  }




}

