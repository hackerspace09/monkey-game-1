
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var time = 0
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 200);
  
  
  
  
  monkey = createSprite(300,170,50,50)         
  monkey.addAnimation("monl",monkey_running)
  monkey.scale = 0.08

  
  ground = createSprite(300,175,600,10)
  
  
  bananaGroup = new Group();
  obstacleGroup = new Group();

  

  
}


function draw() {
background("white");
  
  
  
   if(keyDown("space")){
      monkey.velocityY = -10;
    }
  monkey.velocityY = monkey.velocityY +0.5;
  

  monkey.collide(ground);

  spawnBanana();
  
  spawnObstacle();
  
  drawSprites();
  
  time = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+time,100,50)

}

function spawnBanana(){
  if(frameCount % 70 === 0) {
    var banana = createSprite(600,50,10,40);
    banana.velocityX = -5
    banana.addImage ("banana",bananaImage)
    banana.y = Math.round(random(80,100))
    banana.scale = 0.1
    banana.lifetime = 110;
    bananaGroup.add(banana);
    }
}

function spawnObstacle(){
  if(frameCount % 200 === 0) {
    var obstacle = createSprite(600,160,10,40);
    obstacle.velocityX = -5
    obstacle.addImage ("obstacle",obstacleImage)
    obstacle.scale = 0.1
    obstacle.lifetime = 110;
    obstacleGroup.add(obstacle);
    }
}