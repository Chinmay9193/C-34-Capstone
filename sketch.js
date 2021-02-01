//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint = Matter.Constraint
//creating variables to create your own engine and world
var engine, world;
var box;


function setup() {
  createCanvas(1200,800);
 
  //learn this syntax
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,600,1200,20)
  box1 = new Box(600,100,70,70)
  box2 = new Box(600,100,70,70)
  box3 = new Box(600,100,70,70)
  box4 = new Box(600,100,70,70)
  box5= new Box(600,100,70,70)
  box6 = new Box(600,100,70,70)
  ball = new Ball (200,200,80,80)
  rope = new Rope(ball.body,{x:500,y:50})

  //render shows what happens in the backend
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 400,
        height: 400,
        showAngleIndicator: true
    }
});

Render.run(render);

 
}

function draw() {
  background("skyblue");  
  Engine.update(engine);

  ground.display(); 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  ball.display();
  rope.display();
}