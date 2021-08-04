
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var message,messageImage;
var Carrom;
var Coin;

function preload()
{
	messageImage=loadImage("TITLE-removebg-preview.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
message=createSprite(400,230,10,10);
message.addImage(messageImage);

	Engine.run(engine);
Carrom = new carrom (400,450,800,700);
Coin = new coin(400,450,10);

}


function draw() {
  rectMode(CENTER);
  background("green")
Carrom.display();
Coin.display();
  drawSprites();
 
}
