

function Blob(x,y,r) {

    this.pos = createVector(x, y)
    this.r = r
    this.zoom = 1
    

    this.show =()=> {
        fill(255)
        ellipse(this.pos.x,this.pos.y,this.r)
    }

    this.followMouse =()=>{

        
        let vel = createVector(mouseX-width/2,mouseY-height/2)
        vel.setMag(3);
        this.pos.add(vel)

  

    }

    this.moveCamera =()=>{

        let newzoom = 64 / this.r
        this.zoom = lerp(this.zoom,newzoom,0.1)

        translate(width/2 , height/2)
        scale(this.zoom)
        translate(-this.pos.x,-this.pos.y)
    }

    this.eats =(outher)=>{

        let d = p5.Vector.dist(this.pos,outher.pos)
        if (d < this.r/2 + outher.r/2){

            let sum = PI * this.r * this.r + PI * outher.r * outher.r
            this.r = sqrt(sum/PI)

            return true;
        }
        else{
            return false;
        }

    }

    this.sendPosition =(message)=> {
      
        socket.emit(message, 
        {
          x : this.pos.x,
          y : this.pos.y,
          r : this.r
        });
      
    }




    


}