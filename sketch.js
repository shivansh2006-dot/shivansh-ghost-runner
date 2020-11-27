var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climberGroup;
var ghostImg,ghost;
var invisibleblock,blockGroup;


function preload() {
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png")
  ghostImg=loadImage("ghost-standing.png");
}







function setup() {
  createCanvas(600, 600);
  tower = createSprite(300, 300);
  tower.addImage("tower", towerImg);
  tower.velocityY = 1;
  
  ghost=createSprite(300,300,50,50);
  ghost.addImage("ghost",ghostImg);
  ghost.scale=0.3;
}


function draw() {
  background(0);
  if (tower.y > 400) {
    tower.y = 300;
  }
  if(keyDown("space")){
   ghost.velocityY=-12; 
    
  }
  ghost.velocityY=ghost.velocityY+0.8;
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3;
  }
   if(keyDown("left_arrow")){
    ghost.x=ghost.x-3;
  }
  
  
  spawndoors();
  drawSprites();


}

function spawndoors() {
  if (frameCount % 240 === 0) {
    door = createSprite(200, -50);
    door.addImage("door", doorImg);
    door.velocityY = 1;
    door.x = Math.round(random(120, 400));
    
    

climber=createSprite(200,10);
    climber.addImage("climber",climberImg);
    climber.velocityY=1;
    climber.x=door.x;
    
    invisibleblock=createSprite(200,15);
    invisibleblock.velocityY=1 ; 
    invisibleblock.width=climber.width;
    invisibleblock.height=2;
    invisibleblock.x=door.x;
    invisibleblock.debug=true;
  }

}