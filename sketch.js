
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var roof;
var bobobject1, bobobject2, bobobject3, bobobject4, bobobject5;
var rope1,rope2,rope3,rope4,rope5

function preload() {
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,250,400,40);
	

	bob1 = new Bob(255,500,70);
	bob2 = new Bob(325,500,70);
	bob3 = new Bob(395,500,70);
	bob4 = new Bob(465,500,70);
	bob5 = new Bob(535,500,70);




	rope1 = new Rope(bob1.body,roof.body,-70*2,0);
    rope2 = new Rope(bob2.body,roof.body,-70*1,0);
    rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,70*1,0);
	rope5 = new Rope(bob5.body,roof.body,70*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	
		
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100, y:-100});
	
	}
	
	}
	



