var garden, gardenImg;
var tom, tomwalking, tomstanding, tomresting;
var jerry, jerryewalking, jerrystanding, jerryresting;

function preload() {
    
  tomresting = loadAnimation("images/tomOne.png");
  tomwalking = loadAnimation("images/tomTwo.png","images/tomthree.png");
  tomstanding = loadAnimation("images/tomFour.png");
  gardenImg = loadImage("images/garden.png");

  jerryresting = loadAnimation("images/jerryOne.png");
  jerryewalking = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
  jerrystanding = loadAnimation("images/jerryFour.png")

}

function setup(){

    createCanvas(1000,800);
    
    garden = createSprite(200,400);
    garden.addImage(gardenImg);
    
    tom = createSprite(550,500,1,5);
    tom.addAnimation("resting",tomresting);
    tom.addAnimation("walking",tomwalking);
    tom.addAnimation("standing",tomstanding);
    

    tom.scale = 0.1;

    jerry = createSprite(250,600,5,1);
    jerry.addAnimation("resting",jerryresting);
    jerry.addAnimation("walking",jerryewalking);
    jerry.addAnimation("standing",jerrystanding);
    

    jerry.scale = 0.1;

}

function draw() {

   // background("blue");
  console.log(tom.width);
  
  var w = tom.width/2+jerry.width/2;
  
  var h = tom.height/2+jerry.height/2;

  if(tom.x-jerry.x<w && jerry.x-tom.x<w && tom.y-jerry.y<h && jerry.y-tom.y<h){
    tom.changeAnimation("standing",tomstanding);
    jerry.changeAnimation("standing",jerrystanding);
  }else{
    tom.changeAnimation("walking",tomwalking);
    jerry.changeAnimation("walking",jerryewalking);
  }

  
  

  keyPressed();
  drawSprites();
}


function keyPressed(){

  if(keyDown("Left_Arrow")){

    tom.x = tom.x-5;
    tom.changeAnimation("walking",tomwalking);
    jerry.changeAnimation("walking",jerryewalking);

}else if(keyDown("Right_Arrow")){

  tom.x = tom.x+5;

  tom.changeAnimation("walking",tomwalking);
  jerry.changeAnimation("walking",jerryewalking);


}if(keyDown("Up_Arrow")){

    tom.y = tom.y-5;

    tom.changeAnimation("walking",tomwalking);
    jerry.changeAnimation("walking",jerryewalking);


}else if(keyDown("Down_Arrow")){

    tom.y = tom.y+5;

    tom.changeAnimation("walking",tomwalking);
    jerry.changeAnimation("walking",jerryewalking);


}



}
