

function Blob(x,y,r) {

    this.pos = createVector(x, y);
    this.r = r ;
    this.zoom = 1 ;
    this.username = "" ;
    this.ip = "";
    

    this.show =()=> {
        fill(255);
        ellipse(this.pos.x,this.pos.y,this.r) ;
    }

    this.followMouse =()=>{
        
        let mousePos = createVector(
            (mouseX+this.pos.x)-width/2,
            (mouseY+this.pos.y)-height/2
            );

            let d = p5.Vector.dist(mousePos, this.pos)
            
            if (d > this.r/2){
                
                
            let lineVector = p5.Vector.sub(mousePos, this.pos);
            strokeWeight(10);
            line(this.pos.x,
                this.pos.y,
                this.pos.x + lineVector.x,
                this.pos.y + lineVector.y
                );
            
            let vel = createVector(mouseX-width/2,mouseY-height/2);
            vel.setMag(3);
            this.pos.add(vel);         
        }




        
    }



    this.moveCamera =()=>{

        let newzoom = 64 / this.r;
        this.zoom = lerp(this.zoom,newzoom,0.01);

        translate(width/2 , height/2);
        scale(this.zoom);
        translate(-this.pos.x,-this.pos.y);
    }

    this.eats =(outher)=>{

        let d = p5.Vector.dist(this.pos,outher.pos);
        if (d < this.r/2 + outher.r/2){

            let sum = PI * this.r * this.r + PI * outher.r * outher.r
            this.r = sqrt(sum/PI)

            return true;
        }
        else{
            return false;
        }

    }

    this.eatsPlayer =(outher)=>{

        // console.log(outher.ip,window.location.hostname);


        // console.log(outher);

        

        let d = p5.Vector.dist(this.pos,outher.pos);
        if (d < this.r/2 + outher.r/2){


            
            // if (outher.ip.includes(window.location.hostname) !== true){
    
                // let sum = PI * this.r * this.r + PI * outher.r * outher.r
                // this.r = sqrt(sum/PI)

                // socket.emit('RemovePlayer',outher.ip)
                // console.log(true);
            
            // }

            return true;
        }
        else{
            return false;
        }
    }

    this.sendPosition =(message)=> {
        
        socket.emit(message, 
        {
          username : this.username,
          x : this.pos.x,
          y : this.pos.y,
          r : this.r
        });

    }


    this.showUsername =(username)=>{
        fill(0);
        text(username, this.pos.x, this.pos.y+(this.r/2));
        textSize(30);
    }


    this.StepBack =()=>{

        if (this.pos.x >= 0){
            this.pos.x -= 1
          }else{
            this.pos.x += 1
          }
    
          if (this.pos.y >= 0){
            this.pos.y -= 1
          }else{
            this.pos.y += 1
        }
    }





}
