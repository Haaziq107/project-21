var wall,thickness;

var bullet,speed,weight;

var damage;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

   bullet=createSprite(50,200, 50, 20);
  bullet.velocityX = speed;
  //bullet.shapeColor="red";

   wall=createSprite(1200,200,thickness,height/2);
   wall.shapeColor=(80,80,80);
   
}

function draw() {
  background(255,255,255);  
  bullet.collide(wall);

 if (hasCollided(bullet,wall)){
   bullet.velocityX=0;
    damage=(0.5 *weight *speed *speed)/(thickness*3);
   if (damage>10){
     text(damage,500,200);
     wall.shapeColor="red";
   }

   if (damage<10){
    wall.shapeColor="green";
  }
 }
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
  return false

}