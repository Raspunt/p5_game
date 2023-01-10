
export class Player{

    constructor(p5,x,y,r){
        this.p5 = p5;
        this.x = x;
        this.y = y;
        this.r = r;
    }



    draw(){
        this.p5.ellipse(
            this.x,
            this.y,
            this.r,
            this.r,
        )
    }


}