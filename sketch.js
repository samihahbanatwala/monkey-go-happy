var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var ground
var bananaGroup
var FoodGroup, obstacleGroup
var score
var survivaTime=0;
var obstacle

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
   obstacleImage = loadImage("obstacle.png");
  bananaImage = loadImage("banana.png");
 
 
}



function setup() {
  

ground=createSprite(400,397,900,25);
ground.velocityX=-4;
ground.x=ground.width/2
console.log(ground.x)
  
  monkey=createSprite(7,330,900,10);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.2

 obstacleGroup=createGroup();
  bananaGroup=createGroup();
 
}


function draw() {
  createCanvas(400,400)
background("lightblue")
   
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  
  
  if (World.frameCount%80===0){
    
    banana=createSprite(400,200,20,20);
    banana.y=Math.round(random(130,170));
    banana.velocityX=-8
    banana.addAnimation("moving",bananaImage);
    banana.setLifetime=50;
    banana.scale=0.2
    bananaGroup.add(banana)
   
  }
  
     monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  ground.x=ground.width/2
  
 
  
    
  stroke ("white");
textSize(20);
fill("white");
text("Score: "+score,500,50);
  
  stroke ("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time:"+survivalTime,100,50)
     
  
   if (frameCount % 60 === 0){
   var obstacle = createSprite(260,20,100,40);
    obstacle.y=Math.round(random(350,350));
    obstacle.velocityX=-6
    obstacle.addImage(obstacleImage);
    obstacle.setLifetime=50;
   obstacle.scale=0.2
    obstacleGroup.add(obstacle)
    
  
  }
   
 
  
  drawSprites();
  



}