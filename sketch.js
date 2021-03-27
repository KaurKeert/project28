
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const 	Constraint=Matter.Constraint;

var ground1,bottomside,leftside,rightside,ball1;
var bini,bin;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



	ground1=new Ground(200,500,1200,20)
bottomside=new Dustbin(700,480,150,20)
leftside=new Dustbin(630,440,20,100)
rightside=new Dustbin(770,440,20,100)
ball1=new Ball(160,230,30)
rope1=new rope(ball1.body,{x:160,y:200})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ground1.display();
bottomside.display();
leftside.display();
rightside.display();
ball1.display();
rope1.display();
  drawSprites();
 
}

function mouseDragged(){

	Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	rope1.fly()
}