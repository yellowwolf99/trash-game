const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground, paper;
var box1, box2, box3;

function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);
	
	paper = new Paper(10,10,10,10)
	
	ground=Bodies.rectangle(width/2, height-35, width,10);
	ground.shapeColor=color(255);

	box1=createSprite(500, 620, 20, 100);
	box1.shapeColor=color("white");

	box2=createSprite(300, 620, 20, 100);
	box2.shapeColor=color("white");

	box3=createSprite(400, 670, 200, 20);
	box3.shapeColor=color("white");


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	//Create a Ground
	ground = Bodies.rectangle(width / 2, 650, width, 10, 
		{
			isStatic: true
		});
 	World.add(world, ground);	
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();	
}

function keyPressed() 
{
 if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(paper.body,paper.body.position, {
	  x: 85,
	  y: -85
	});
    
  }
}



