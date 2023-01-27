
var trex ,trex_running;
var ground, groundImage, invisibleGround;

function preload(){
  trex_running  = loadAnimation("trex1.png", "trex3.png", "trex4.png");
 
  //cargar imagen del suelo
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running)
  trex.scale = 0.5;

  //suelo
  ground = createSprite(200, 180, 400, 20);
  //agregar imagen y reiniciar el suelo
  ground.addImage("ground", groundImage);
  //crear suelo invisible
  invisibleGround = createSprite(200, 185, 400, 10);
  invisibleGround.visible = false;
}

function draw(){
  background("white")
  
  //mover el suelo
  ground.velocityX = -2;
  //console.log("velocidad del suelo" + ground.x)

  //reestablecer el suelo
  if(ground.x < 0){
    ground.x  = ground.width/2;
  }

  //console.log(trex.y)

  if(keyDown("space") && trex.y >= 100){
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.8;

  //cambiar a suelo invisible
  trex.collide(invisibleGround)

 drawSprites();
}
