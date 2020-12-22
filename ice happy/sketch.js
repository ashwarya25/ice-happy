//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//var engine, world;
var jerry,jerryImg,tom,tomImg,spike,spikeImg,climber,climberImg,cloud,cloudImg,coin,coinImg;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("background.png");
    jerryImg=loadImage("Jerry.png");
    tomImg=loadImage("Tom.png");
    spikeImg=loadImage("Spike.png");
    climberImg=loadImage("climber.png");
    cloudImg=loadImage("cloud.png");
    coinImg=loadImage("coin.png");
}

function setup(){
    var canvas = createCanvas(600,1200);
    //engine = Engine.create();
    //world = engine.world;
    tom=createSprite(50,50,30,100);
    tom.addImage(tomImg);
    
}

function draw(){
    background(backgroundImg);
   // Engine.update(engine);
    if (keyIsDown("space")) {
        tom.velocityY=-5;
    }
    spawnClimbers();
   // tom.collide(climber);
    drawSprites();
}

function spawnClimbers() {
    if (frameCount%60===0) {
        climber=createSprite(100,100,50,20);
        climber.addImage(climberImg);
        climber.x=random(50,400);
        climber.y=random(200,1000);
    }
}