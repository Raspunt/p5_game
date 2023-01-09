
let mapSize = 1000


function Blobs(countBlob,r) {

    this.blobs = []


    this.CreateEnemyBlobs = ()=>{
        
        for (let i = 0 ;i < countBlob ;i++){
            let pos = this.randomLocation()
            this.blobs.push(new Blob(pos.x,pos.y,r))
        }   
    }


    this.ShowAllBlobs =(player)=>{


        // eating blobs
        // for (let i = 0; i < this.blobs.length; i++){
        //     this.blobs[i].show();

        //     strokeWeight(5);

        //     if (player.eats(this.blobs[i])){
        //         this.blobs.splice(i,1)
        //     }
        // }

        // player blobs
        for(let i = 0 ; i < listPlayers.length;i++){

            let username = listPlayers[i].username;
            let ip = listPlayers[i].ip;
            let x =  listPlayers[i].x;
            let y =  listPlayers[i].y;
            let r =  listPlayers[i].r;

            let blob = new Blob(x,y,r);
            blob.ip = ip;
            
            
            console.log(window.location.hostname.includes(blob.ip));
            // console.log(player.eatsPlayer(blob));

            // if (listPlayers[i].ip.includes(window.location.hostname) !== true){
   
            //     if (player.eats(blob)){
            //         listPlayers.splice(i,1)
            //     }                
            // }

            blob.show()
            blob.showUsername(username)

        }
    }


    this.randomLocation = ()=>{
        
        let x = random(-mapSize,mapSize)
        let y = random(-mapSize,mapSize)

        return createVector(x,y)
    }


    this.ISPlayerInsideMap =(blob)=>{

        let mapSizeWithPlayer = mapSize - blob.r/2

        if(blob.pos.x < mapSizeWithPlayer && blob.pos.x > -mapSizeWithPlayer && blob.pos.y < mapSizeWithPlayer && blob.pos.y > -mapSizeWithPlayer){
          return true ;
        }else{
          return false ;
        }
  
    
    }


    this.drawBordersOfMap =()=>{
        // botton line
        line(-mapSize, mapSize, mapSize,mapSize);
        
        // // left line
        line(-mapSize, -mapSize, -mapSize, mapSize);

        // right line
        line(mapSize, mapSize, mapSize, -mapSize);

        // top line
        line(mapSize, -mapSize,-mapSize, -mapSize);
        
        strokeWeight(5);
    }



}