var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
 /* fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;*/


  gameObject1 = createSprite(400, 100, 50, 80);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(400, 800, 80, 30);
  gameObject2.shapeColor = "green";
 /* gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";*/


  gameObject1.velocityY = -5;
  gameObject2.velocityY = +5;
}

function draw() {
  background(0,0,0);  
//  gameObject1.x = World.mouseX;
  //gameObject1.y = World.mouseY;

/* if(isTouching(gameObject3,gameObject1)){
 gameObject3.shapeColor = "yellow";
gameObject1.shapeColor = "yellow";

 } else{
 gameObject3.shapeColor = "green";
gameObject1.shapeColor = "green";


 }*/
  bounce(gameObject1,gameObject2);
  drawSprites();
}
function bounce(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 
}