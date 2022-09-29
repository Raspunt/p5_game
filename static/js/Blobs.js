
let mapSize = 2000

function Blobs(countBlob,r) {

    this.blobs = []

    this.CreateEnemyBlobs = ()=>{

        for (let i = 0 ;i < countBlob ;i++){
            
            let pos = this.randomLocation()
            this.blobs.push(new Blob(pos.x,pos.y,r))
        }


         
    }


    this.ShowAllBlobs =(blob)=>{

        for (let i = 0; i < this.blobs.length; i++){
            this.blobs[i].show();

            if (blob.eats(this.blobs[i])){
                this.blobs.splice(i,1)
            }
        }

    }

    this.randomLocation = ()=>{
        
        let x = random(-mapSize,mapSize)
        let y = random(-mapSize,mapSize)


        return createVector(x,y)
    }




}