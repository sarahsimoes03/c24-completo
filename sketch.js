
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn1;
var retangulo;
var angle= 60;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var bola_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  btn1 = createImg('up.png');
  btn1.position(350,30);
  btn1.size(50,50);
  btn1.mouseClicked(vForce);

  retangulo = Bodies.rectangle(100,200,400,20,ground_options);
  World.add(world,retangulo);

  bola = Bodies.circle(100,10,20,bola_options);
  World.add(world,bola);

  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  Matter.Body.rotate(retangulo,angle);
  push();
  translate(retangulo.position.x, retangulo.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  angle +=0.1;
  
  ellipse(bola.position.x,bola.position.y,20);
  rect(ground.position.x,ground.position.y,650,20)  
}

function vForce()
{
  Matter.Body.applyForce(bola,{x:0,y:0},{x:0,y:-0.05});
}
  