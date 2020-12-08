
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rope = new rope(bob.body, ground.body, bobDiameter*2, 0);
    rope2 = new rope(bob2.body, ground.body, bob2Diameter*2, 0);
    rope3 = new rope(bob3.body, ground.body, bob3Diameter*2, 0);
    rop4 = new rope(bob4.body, ground.body, bob4Diameter*2, 0);

    bob = new bob(350, 240, 50, 50);
    bob2 = new Bob(400, 240, 50, 50);
	bob3 = new bob(450, 220, 50, 50);
	bob4 = new bob(500, 220, 50, 50);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();

  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();

 
  
  
  drawSprites();
 
}



