var fixedRect, movingRect;
var rect1
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1=createSprite(100,100,20,20);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(Touching(movingRect,fixedRect)){
movingRect.shapeColor="green"
fixedRect.shapeColor="green"
  }
  else{
movingRect.shapeColor="blue"
fixedRect.shapeColor="yellow"
  }
  if(Touching(rect1,movingRect)){
rect1.shapeColor="purple"
movingRect.shapeColor="purple"
  }
  else{
    rect1.shapeColor="red"
  }
  drawSprites();
}
function Touching(Vivaan,Monika){
  if (Vivaan.x - Monika.x < Monika.width/2 + Vivaan.width/2
    && Monika.x - Vivaan.x < Monika.width/2 + Vivaan.width/2
    && Vivaan.y - Monika.y < Monika.height/2 + Vivaan.height/2
    && Monika.y - Vivaan.y < Monika.height/2 + Vivaan.height/2) {
      return true;
  //movingRect.shapeColor = "red";
  //fixedRect.shapeColor = "red";
}
else {
  //movingRect.shapeColor = "green";
  //fixedRect.shapeColor = "green";
  return false;
}
}