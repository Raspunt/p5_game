

var player;
var blobs;

let gameOver = false
let username = localStorage.getItem('username');

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight - 10);
  canvas.parent('canvas_pos');



  player = new Blob(0, 0, 64);
  blobs = new Blobs(500, 15);

  blobs.CreateEnemyBlobs();

  if (username != null){

    player.username = username;
    player.sendPosition('playerConnected');

  }else {
    window.location.href ='/login'
  } 



  
  
  
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

