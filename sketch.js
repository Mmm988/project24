
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper,ground;

var ground,ball;
var box1,box2,box3;

function setup() {
	createCanvas(800, 400);
    rectMode(CENTER);

	engine=Engine.create();
	world = engine.world;

	ground=createSprite(400,380,800,20);
	ground.shapeColor="brown"

	box1=createSprite(600,365,200,10)
	box1.shapeColor="darkBlue";

	box2=createSprite(505,320,10,80)
	box2.shapeColor="darkblue";

	box2=createSprite(695,320,10,80)
	box2.shapeColor="darkblue";

	ball=new Ball(200,200,50);

	Engine.run(engine);


  
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(CENTER);
  ball.display();
  //keyPressed();
  drawSprites(); 
}

function keyPressed(){
	Matter.Body.applyForce(ball.Body,ball.Body.position,{x:85,y:-85})
}