const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
    ground1 = new Ground(500,650,1000,20);

    Engine.run(engine);
}

function draw(){
    
    background("pink");
   // rectMode(CENTER);
    ground1.display();
}
