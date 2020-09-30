var car,wall;
var speed,weight;
var obj1,obj2;
var deformation;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  car.velocityX = speed;
}

function draw() {
  background("Black")
  if (wall.x-car.x < (wall.width+car.width)/2){
    car.velocityX = 0;
    deformation = (0.5*weight*speed*speed)/22500
    if (deformation < 100){
    car.shapeColor = ("Green")
    }else if (deformation < 180 && deformation > 100 ){
      car.shapeColor = ("Yellow")
    }else if (deformation > 180){
      car.shapeColor = ("Red");
    }
  }
  drawSprites();
}

