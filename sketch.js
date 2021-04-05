
var Play=1;
var End=0;
var gameState=1;
var score=0;
function preload(){
  bgIm=loadImage("track.jpg");
  coneIm=loadImage("Traffic Cone.png")
  BCoin=loadAnimation("Bronze_21.png","Bronze_22.png","Bronze_23.png","Bronze_24.png","Bronze_25.png","Bronze_26.png","Bronze_27.png","Bronze_28.png","Bronze_29.png","Bronze_30.png")
  GCoin=loadAnimation("Gold_21.png","Gold_22.png","Gold_23.png","Gold_24.png","Gold_25.png","Gold_26.png","Gold_27.png","Gold_28.png","Gold_29.png","Gold_30.png")
  SCoin=loadAnimation("Silver_21.png","Silver_22.png","Silver_23.png","Silver_24.png","Silver_25.png","Silver_26.png","Silver_27.png","Silver_28.png","Silver_29.png","Silver_30.png")  
  CarAnim=loadAnimation("1.png","2.png","3.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight*2);
  bg=createSprite(width/2,height/2-height/4,displayWidth,displayHeight*4)
  bg.addImage(bgIm);
  bg.scale=2
  bg.velocityY=5

  Car=createSprite(width/2,height-100,20,20);
  Car.addAnimation("animation",CarAnim);
  Car.scale=0.7;

  camera.position.x=Car.x;
  camera.position.y=Car.y;
  


  /*cone=createSprite(width/2+340,height/2,10,10)
  cone.addImage(coneIm)
  cone.scale=0.5*/  
  coneGroup=new Group();
  BCoinGroup=new Group();
  SCoinGroup=new Group();
  GCoinGroup=new Group();

  //Car.debug=true
  Car.setCollider("rectangle",0,0,Car.width-170,Car.height-50);

}

function draw() {
  //background(0);
  if(gameState===Play){
  if(bg.y>displayHeight*4){
    bg.y=height/2-height/4
  }
  if(frameCount%100===0&&!(frameCount%120===0)){

  
  createCones();

  }

  if(keyWentDown(RIGHT_ARROW)){
    Car.velocityX=6
  }
  if(keyWentUp(RIGHT_ARROW)){
    Car.velocityX=0
  }
  if(keyWentDown(LEFT_ARROW)){
    Car.velocityX=-6
  }
  if(keyWentUp(LEFT_ARROW)){
    Car.velocityX=0
  }
  console.log(Car.x);
  if(Car.x>1180){
    Car.x=1280
  }
  if(Car.x<288){
    Car.x=288
  }

  if(frameCount%120===0){
    var rand=Math.round(random(1,3));
    switch(rand){
      case 1:BronzeCoin();
      break;
      case 2:SilverCoin();
      break;
      case 3:GoldCoin();
      break;

    }
    
  }
  
  
  if(BCoinGroup.isTouching(Car)){
    BCoinGroup.destroyEach();
    score=score+1;
    fill("red");
  text("Wow",displayWidth/2,displayHeight/2-100);
  }

  if(SCoinGroup.isTouching(Car)){
    SCoinGroup.destroyEach();
    score=score+2;
    fill("red");
  text("Wow",displayWidth/2,displayHeight/2-100);
  }
  if(GCoinGroup.isTouching(Car)){
    GCoinGroup.destroyEach();
    score=score+3;
    fill("red");
  text("Wow",displayWidth/2,displayHeight/2-100);
  }
  if(coneGroup.isTouching(Car)){
    gameState=End;
  }
  drawSprites();
  fill("red");
  text("Score"+score,displayWidth/2,displayHeight/2-50);
  
  }else if(gameState===End){
    BCoinGroup.setLifetimeEach(-1);
    SCoinGroup.setLifetimeEach(-1);
    GCoinGroup.setLifetimeEach(-1);
    coneGroup.setLifetimeEach(-1)
    bg.velocityY=0;
    textSize(24);
    fill("red");
    text("Game Over",width/2,50);
  }

  
}

function createCones(){
var rand=Math.round(random(1,4));

cone=createSprite(0,0,10,10)



switch(rand){
  case 1:
    cone.x=width/2-340
    break;
  case 2:
    cone.x=width/2-110
    break;
  case 3:
    cone.x=width/2+110
    break;  
  case 4:
    cone.x=width/2+340
    break;
  default:
    break;


    

}
cone.addImage(coneIm);
cone.scale=0.5;
cone.velocityY=5
cone.lifetime=350
//cone.debug=true
cone.setCollider("circle",0,0,cone.height-150)
coneGroup.add(cone);



}

function BronzeCoin(){
var rando=Math.round(random(1,4));

BrCoin=createSprite(0,0,10,10)



switch(rando){
  case 1:
    BrCoin.x=width/2-340
    break;
  case 2:
    BrCoin.x=width/2-110
    break;
  case 3:
    BrCoin.x=width/2+110
    break;  
  case 4:
    BrCoin.x=width/2+340
    break;
  default:
    break;
}


BrCoin.addAnimation("animation",BCoin);
BrCoin.scale=0.2;
BrCoin.velocityY=5;
BrCoin.lifetime=350;
//BrCoin.debug=true
BrCoin.setCollider("circle",0,0,BrCoin.width-270)
BCoinGroup.add(BrCoin);

}

function SilverCoin(){
  var randomn=Math.round(random(1,4));
  
  SiCoin=createSprite(0,0,10,10)
  
  
  
  switch(randomn){
    case 1:
      SiCoin.x=width/2-340
      break;
    case 2:
      SiCoin.x=width/2-110
      break;
    case 3:
      SiCoin.x=width/2+110
      break;  
    case 4:
      SiCoin.x=width/2+340
      break;
    default:
      break;
  }
  
  
  SiCoin.addAnimation("animation",SCoin);
  SiCoin.scale=0.2;
  SiCoin.velocityY=5;
  SiCoin.lifetime=350;
  //SiCoin.debug=true
  SiCoin.setCollider("circle",0,0,SiCoin.width-270)
  SCoinGroup.add(SiCoin)
  }

  function GoldCoin(){
    var randomno=Math.round(random(1,4));
    
    GoCoin=createSprite(0,0,10,10)
    
    
    
    switch(randomno){
      case 1:
        GoCoin.x=width/2-340
        break;
      case 2:
        GoCoin.x=width/2-110
        break;
      case 3:
        GoCoin.x=width/2+110
        break;  
      case 4:
        GoCoin.x=width/2+340
        break;
      default:
        break;
    }
    
    
    GoCoin.addAnimation("animation",GCoin);
    GoCoin.scale=0.2;
    GoCoin.velocityY=5;
    GoCoin.lifetime=350;
    //GoCoin.debug=true;
    GoCoin.setCollider("circle",0,0,GoCoin.width-270)
    GCoinGroup.add(GoCoin);
    }