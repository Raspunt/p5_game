
let mapSize = 2000



function Blobs(countBlob,r) {

    this.blobs = []


    this.CreateEnemyBlobs = ()=>{

        for (let i = 0 ;i < countBlob ;i++){
            
            let pos = this.randomLocation()
            this.blobs.push(new Blob(0,pos.x,pos.y,r))
        }


         
    }


    this.ShowAllBlobs =(blob)=>{

        for (let i = 0; i < this.blobs.length; i++){
            this.blobs[i].show();

            if (blob.eats(this.blobs[i])){
                this.blobs.splice(i,1)
            }
        }


        let playerBlobs = []

        for(let i = 0 ; i < app.listPlayers.length;i++){

            let id = app.listPlayers[i].id; 
            let x = app.listPlayers[i].x;
            let y = app.listPlayers[i].y;
            let r = app.listPlayers[i].r;

            let blob = new Blob(id,x,y,r)

            playerBlobs.push(blob)

        }
        
        for(let i = 0 ; i < playerBlobs.length;i++){
            
            playerBlobs[i].show()

            let userID = sessionStorage.getItem("user_id");



            if (userID != playerBlobs[i].id){

                if (blob.eats(playerBlobs[i])){

                    playerBlobs.splice(i,1)
                    app.listPlayers.splice(i,1)

                    socket.emit('RemovePlayer', 
                    {
                        player_id:i
                    });
                }


            }

            

                    
        }
    

        // for (let i = 0; i < playerList.length;i++){

            
        //     playerList[i].show();
            
        //     if (blob.eats(playerList[i])){
        //         playerList.splice(i,1)
        //     }
            
        // }



    }

  

    this.randomLocation = ()=>{
        
        let x = random(-mapSize,mapSize)
        let y = random(-mapSize,mapSize)


        return createVector(x,y)
    }


    this.syncAllPlayers  =()=>{

        socket.emit('GetAllPlayers', 
            {
              x : this.pos.x,
              y : this.pos.y,
              r : this.r
        });

    }




}