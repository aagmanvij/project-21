var wall,thickness;
var bullet,speed, weight;



function setup() {

  createCanvas(1600,400);

thickness = random(22,83);
speed = random(223,321);
weight = random(30,52)

wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = "80,80,80"

bullet = createSprite(100,200,20,20);
bullet.velocityX = speed;

}

function draw() {
  background(225,225,225);  

if(collided(bullet,wall))
{

bullet.velocityX = 0;
var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

if (damage>10)
{
wall.shapeColor = "red";
}

if(damage<10)
{

wall.shapeColor = "green"

}

}

  drawSprites();
}

function collided(bullet,wall)
{

bulletrightedge = bullet.x+bullet.width;
wallleftedge = wall.x;

if(bulletrightedge>=wallleftedge){

return true;

}
return false;
}