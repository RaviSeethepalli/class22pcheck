const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1;
var bob2
var bob3;
var bob4
var bob5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var opt={
		restitition:0.3

	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	bob1 = Bodies.circle(400,300,40,opt);
    World.add(world,bob1);
	bob2 = Bodies.circle(410,300,40,opt);
    World.add(world,bob2);
	bob3 = Bodies.circle(420,300,40,opt);
    World.add(world,bob3);
	bob4 = Bodies.circle(430,300,40,opt);
    World.add(world,bob4);
	bob5 = Bodies.circle(430,300,40,opt);
    World.add(world,bob5);
	con1=Matter.Constraint.create({
    
		bodyA:bob1,
		bodyB:roof,
		pointB: {x:-80,y:0},
		length:200,
		stiffness:0.05
	  })
   
	  World.add(world,con1)
	con2=Matter.Constraint.create({
    
		bodyA:bob2,
		bodyB:roof,
		pointB: {x:-80,y:0},
		length:200,
		stiffness:0.05
	  })
   
	  World.add(world,con2)
	  con3=Matter.Constraint.create({
    
		bodyA:bob3,
		bodyB:roof,
		pointB: {x:-80,y:0},
		length:200,
		stiffness:0.05
	  })
   
	  World.add(world,con3)
	  con4=Matter.Constraint.create({
    
		bodyA:bob4,
		bodyB:roof,
		pointB: {x:-80,y:0},
		length:200,
		stiffness:0.05
	  })
   
	  World.add(world,con4)
	  con5=Matter.Constraint.create({
    
		bodyA:bob5,
		bodyB:roof,
		pointB: {x:-80,y:0},
		length:200,
		stiffness:0.5
	  })
   
	  World.add(world,con5)
	Engine.run(engine);
	
	
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  
  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  //create ellipse shape for multiple bobs here
ellipse(bob1.position.x,bob1.position.y,50)
ellipse(bob2.position.x,bob2.position.y,50)
ellipse(bob3.position.x,bob3.position.y,50)
ellipse(bob4.position.x,bob4.position.y,50)
ellipse(bob5.position.x,bob5.position.y,50)
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
