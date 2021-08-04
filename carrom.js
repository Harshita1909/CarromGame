class carrom
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		
		this.body=Bodies.rectangle(x, y, w, h , options);
		this.image=loadImage("CARROM_BOARD-removebg-preview.png")
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			//push()
			//translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill("black")
			image(this.image,groundPos.x,groundPos.y,this.w,this.h);
			//pop()
			
	}

}