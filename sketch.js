const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2;
var bird1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(200, 390, 400, 10);

    box1 = new Box(180, 350, 50, 50);
    box2 = new Box(280, 350, 50, 50);
    pig1 = new Pig(230, 350);
    log1 = new Log(230, 320, 150, PI/2);
    box3 = new Box(180, 280, 50, 50);
    box4 = new Box(280, 280, 50, 50);
    pig2 = new Pig(230, 280);
    log2 = new Log(230, 255, 150, PI/2);

    bird1 = new Bird(100, 100);

    box5 = new Box(240, 250, 50, 50);

    log3 = new Log(225, 250, 80, PI/4);
    log4 = new Log(230, 250, 80, PI/4);
}

function draw(){
    background(100);
    Engine.update(engine);
    ground1.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    //bird1.display();
    //box5.display();
    //log3.display();
    //log4.display();
   
}