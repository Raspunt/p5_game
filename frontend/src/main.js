
import p5 from 'p5'


import css_loader from "./game/css_loader"

import { socket } from './socket/main';
import { Player } from './game/player'



new p5(function(p5)
{


  p5.setup =()=>{

    p5.createCanvas(
        p5.windowWidth,
        p5.windowHeight
    );
    
    socket.emit('PlayerConnect')
  }

  p5.draw =()=>{
    p5.background(55);


  }

  p5.windowResized =()=>{
    p5.resizeCanvas(p5.windowWidth,p5.windowHeight);
  }


})