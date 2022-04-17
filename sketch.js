var path,jake,left_boundary,right_boundary, coin , coinImg,player

function preload(){
  //pre-load images
track=loadImage("path.png");
jake=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  //making path
  path=createSprite(200,200,400,1600);
  path.addImage(track);
  path.velocityY=4;
  // path.y=path.height/30;
//making a player 
player=createSprite(50,355,20,20)
player.scale=0.8;
//boundaries
right_boundary=createSprite(382,214,15,1600);
right_boundary.visible=false ;

left_boundary=createSprite(16,198,15,1600);
left_boundary.visible=false ;
track.velocityY=5;
player.addAnimation("j",jake);
}

function draw() {
  background(0);
player.x=mouseX;
if(path.y>400){
path.y=height/2
}
drawSprites();
}
