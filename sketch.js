var fixedRect, movingRect;
var car,wall;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(100,100,40,60);
  car.velocityX = 5;
  wall = createSprite(800,100,40,150);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect,fixedRect)){

text("touched",600,600)

}
else{

text("Not Touched",600,600)

}

bounceOff(car,wall);

  drawSprites();
}


