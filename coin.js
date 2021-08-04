class coin {
    constructor(x,y,r){
            this.x=x;
            this.y=y;
            this.radius=r;
            this.coin=createSprite(x,y,r);
            this.coinImage=loadImage("WHITE_COIN-removebg-preview.png");
    }

   
    display(){
        this.coin.addImage(this.coinImage);
        this.coin.scale=0.2; 
    }
}