const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground;
var tri1
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,200,80,120);
   // box2 = new Box(180,100,50,50);
    ground = new Ground(200,390,400,20);
    //tri1 = new Triangle(200,200,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
}