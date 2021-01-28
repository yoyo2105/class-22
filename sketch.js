const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var yuvraj;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   

var yuvi={
    isStatic:true
}


yuvraj=Bodies.rectangle(200,390,400,10,yuvi);
World.add(world,yuvraj)



    var ball_options ={
      restitution:0.8
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

   
}

function draw(){
    background(0);
    Engine.update(engine);
   

rectMode(CENTER);
rect(yuvraj.position.x,yuvraj.position.y,400,20);


    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}