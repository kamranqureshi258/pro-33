const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snow;
var ground;
var bg;
var ground;
var engine, world;
function preload(){
 bg=loadImage("snow2.jpg") 
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
 snow=new Snow(50,200,20)
 ground=new Ground(600,600,1200,30)
  

}
function draw() {
  
  background(0); 
  ground.display();
  snow.display();
 
}
