var diver;
var bg;
var plasticBags_img, plasticBags;
var plasticBottles_img, plasticBottles;
var plasticCan, plasticCan_img;
var plasticwaste;
var plasticWasteGroup;

var bomb, bomb_img;
var bombSound;

var diver, diver_img;
var staticDiver, staticDiver_img;

var octopus, octopus_img;
var nemo, nemo_img;
var angelFish, angelFish_img;

var life1, life2, life3, life4, life5;
var life1_img, life2_img, lif3_img, life4_img;

var introBg, introBg_img;

var flippedDiverStatic, flippedDiver_img;

var gameState = "play";

var count = 0;

var scoreText = 0;
var score, score_img;

var marineNinja, marineNinja_img;

var howToPlay, howToPlay_img;
var instructions, instructions_img;

var playButton, playButton_img, playButton2;
var instructButton, instructButton_img;

var playText, playText_img;
var instructText, instructText_img;

function preload(){
  bg = loadImage('images/THEFINALIMGBG.png');

  plasticBags_img = loadImage('images/plasticbottle1.png');
  plasticBottles_img = loadImage('images/plasticbottle.png'); 

 
  diver_img = loadAnimation('images/diverImg1.png','images/diverImg2.png','images/diverImg3.png','images/diverimg4.png','images/diverImg5.png','images/diverImg6.png','images/diverImg7.png','images/diverImg8.png')
  staticDiver_img = loadImage('images/diverImg4.png');
  
  flippedDiver_img = loadAnimation('images/flippedDiver1.png','images/flippedDiver2.png','images/flippedDiver3.png','images/flippedDiver4.png','images/flippedDiver5.png','images/flippedDiver6.png','images/flippedDiver7.png','images/flippedDiver8.png');
  flippedDiverStatic = loadImage('images/flippedDiver1.png');

  
}
function setup() {

  createCanvas(1200,310);  
 
   bg2 = createSprite(300,150,1200,800);
   bg2.addImage(bg); 
   bg2.scale = 0.142;
    
 

   diver = createSprite(80,150);
   diver.addAnimation("diversfirstimg",staticDiver_img);
   diver.scale = 0.25;

   diver.addAnimation("diverMoving",diver_img);
   diver.addAnimation("flippedDiver",flippedDiver_img);
   diver.addAnimation("flippedDiverInStatic",flippedDiverStatic)

   plasticWasteGroup = new Group();
   

}

function draw(){
  background("red");
  if(gameState === "play"){
  if(frameCount > 100){
    spawnPlasticWaste();
    
  }
   
   
   if(keyWentDown(RIGHT_ARROW)){
     diver.changeAnimation("diverMoving",diver_img);
     diver.velocityX = 4;
   }
   if(keyWentUp(RIGHT_ARROW)){
     diver.changeAnimation("diversfirstimg",staticDiver_img);
     diver.velocityX = 0;
   }
   if(keyWentDown(DOWN_ARROW)){
    diver.changeAnimation("diverMoving",diver_img);
    diver.velocityY = 4;
  }
  if(keyWentUp(DOWN_ARROW)){
    diver.changeAnimation("diversfirstimg",staticDiver_img);
    diver.velocityY = 0;
  }
  if(keyWentDown(UP_ARROW)){
    diver.changeAnimation("diverMoving",diver_img);
    diver.velocityY = -4;
  }
  if(keyWentUp(UP_ARROW)){
    diver.changeAnimation("diversfirstimg",staticDiver_img);
    diver.velocityY = 0;
  }
  if(keyWentDown(LEFT_ARROW)){
    diver.changeAnimation("flippedDiver",flippedDiver_img);   
    diver.velocityX = -4
  }
  if(keyWentUp(LEFT_ARROW)){
    diver.changeAnimation("flippedDiverInStatic",flippedDiverStatic);
    diver.velocityX = 0;
  }
  for(var i = 0; i < plasticWasteGroup.length; i++){
    if(plasticWasteGroup.get(i).y >= 270){
      plasticWasteGroup.get(i).addImage(bomb_img);
      plasticWasteGroup.get(i).scale = 0.1;
      plasticWasteGroup.get(i).velocityY = 0;
     
      if(frameCount % 50 === 0 && plasticWasteGroup.get(i).y >= 270){
        
        plasticWasteGroup.get(i).destroy();
        
      }
      
    }
    if(diver.isTouching(plasticWasteGroup.get(i)) && plasticWasteGroup.get(i).y < 270){
      plasticWasteGroup.get(i).destroy();
      
            
    }
   }//for loop ends here

  }

drawSprites();
}
 
function spawnPlasticWaste(){
  if(frameCount % 50 === 0 && diver.x <= 160){
    var rand = Math.round(random(1,2));
    var plasticwaste = createSprite(random(320,520), random(-5,-15));
    switch(rand){
      case 1: plasticwaste.addImage(plasticBags_img);
     plasticwaste.scale = 0.03
      break;

      case 2: plasticwaste.addImage(plasticBottles_img);
      plasticwaste.scale = 0.1
      break;

      default:
        break;
      
    }
    plasticWasteGroup.add(plasticwaste);
    plasticwaste.velocityY = 1 + scoreText/25; 
  }

  if(frameCount % 40 === 0 && diver.x > 200 && diver.x < 320 ){
    var rand = Math.round(random(1,2));
    var plasticwaste = createSprite(random(320,480), random(-5,-15));
    switch(rand){
      case 1: plasticwaste.addImage(plasticBags_img);
     plasticwaste.scale = 0.03
      break;

      case 2: plasticwaste.addImage(plasticBottles_img);
      plasticwaste.scale = 0.1
      break;

      default:
        break;
      
    }
    plasticWasteGroup.add(plasticwaste);
    plasticwaste.velocityY = 1 + scoreText/25; 
    
  }
  if(frameCount % 40 === 0 && diver.x > 320 && diver.x < 480 ){
    var rand = Math.round(random(1,2));
    var plasticwaste = createSprite(random(480,640), random(-5,-15));
    switch(rand){
      case 1: plasticwaste.addImage(plasticBags_img);
     plasticwaste.scale = 0.03
      break;

      case 2: plasticwaste.addImage(plasticBottles_img);
      plasticwaste.scale = 0.1
      break;

      default:
        break;
      
    }
    plasticWasteGroup.add(plasticwaste);
    plasticwaste.velocityY = 1 + scoreText/25; 
    
  }
  if(frameCount % 40 === 0 && diver.x > 640 && diver.x < 800 ){
    var rand = Math.round(random(1,2));
    var plasticwaste = createSprite(random(680,800), random(-5,-15));
    switch(rand){
      case 1: plasticwaste.addImage(plasticBags_img);
     plasticwaste.scale = 0.03
      break;

      case 2: plasticwaste.addImage(plasticBottles_img);
      plasticwaste.scale = 0.1
      break;

      default:
        break;
      
    }
    plasticWasteGroup.add(plasticwaste);
    plasticwaste.velocityY = 1 + scoreText/25; 
    
  }

}