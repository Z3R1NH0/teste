var teste;
var x;

function setup() {
  createCanvas(400,400);
 
  teste = createSprite (200,200,30,15);

  //teste.velocityX = 3;

 
}

function draw() 
{
   background("black");

  if (keyDown ("s")){
 teste.y = teste.y + 4;
  }
  
  drawSprites();
}



