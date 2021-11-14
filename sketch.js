var player1, player2;
var island, bullet, ground;
var player2Img,islandImage, bg, bgImage;
var changeDirection;
var bullet, bulletImg, bulletGroup, invsableGround;
var keyState = "noState";
function preload() {
  
  player2Img = loadImage("tank.jpg")
  bgImage = loadImage("bg.jpg")
  islandImage = loadImage("islandImage.jpg")
  bulletImg = loadImage("bullet1.png")
}

function setup() {
  createCanvas(600,800);

  bg = createSprite(300,400);
  bg.addImage(bgImage);
  bg.velocityY = 3;
  bg.scale = 3;

  player1 = createSprite(280,700,20,20);
  player1.shapeColor = "yellow";

  player2 = createSprite(280,50,20,20);
  player2.shapeColor = "blue"
  
  bulletGroup = createGroup();

  invsableGround = createSprite(780)

}

function draw() {
  
  background(0);
  
  //if (frameCount % 60 === 0) {
    //var island = createSprite(200, -50);
    //var climber = createSprite(200,10);
    //var invisibleBlock = createSprite(200,15);
    //invisibleBlock.width = climber.width;
    //invisibleBlock.height = 2;
    
    //island.x = Math.round(random(120,400));
    //invisibleBlock.x = island.x;
    
    //island.addImage(islandImage);
    
    //island.velocityY = 1;
    //climber.velocityY = 1;
    //invisibleBlock.velocityY = 1;
    
    //ghost.depth = island.depth;
    //ghost.depth +=1;
   
    //assign lifetime to the variable
    //island.lifetime = 800;
    //climber.lifetime = 800;
    //invisibleBlock.lifetime = 800;

    
    //islandGroup.add(island);
    //invisibleBlock.debug = true;
    //invisibleBlockGroup.add(invisibleBlock);
  //}

  //islandGroup.setLifetimeEach(-1);
  //islandGroup.setVelocityXEach(0);
  player2.x = player1.x;

  if (bg.y > 600) {
    bg.y = 500;
  }

  if(frameCount % 125 === 0){
    shootBullet();
  }

  if(bullet > length) {
    bulletGroup.destroyEach()
  }

  if(keyIsDown("space")){
  player1.velocityY = player1.velocityY + 0.5;
  }
  islands(); 
  drawSprites();
}

function islands() {

  if (frameCount % 50 === 0) {
  island = createSprite(200,200,50,50);
  island.addImage(islandImage);
  island.scale = 0.25
  island.velocityY = 5;

  island.y = Math.round(random(1,10));
  island.x = Math.round(random(80,400));
  }
  }

function keyPressed() {
  
  if (keyIsDown(LEFT_ARROW)) {
    player1.velocityX = -5;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    player1.velocityX = 5;
  }

  else if (keyIsDown(DOWN_ARROW)) {
    player1.velocityX = 0;
  }
  else if (keyIsDown(UP_ARROW)) {
    if(frameCount % 125 === 0) {
    player1.velocityY = player1.velocityY - 1;
    }
  }
}

function shootBullet(){
  bullet= createSprite(150, width/2, 50,20)
  bullet.x= player2.x-20
  bullet.y= player2.y
  bullet.addImage(bulletImg)
  bullet.scale=0.12
  bullet.velocityY= 7
  bulletGroup.add(bullet)
}
