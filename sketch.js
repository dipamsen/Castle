const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var log1, ground;
var log2, log3, log4, log5;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    log1 = new Log(50,50,80,0);
    log2 = new Log(80,100,80,0);
    log3 = new Log(110,150,80,0);
    log4 = new Log(140,200,80,0);
    log5 = new Log(95,50,80,-PI/2);
    ground = new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();   
    log5.display();
}