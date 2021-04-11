var dog
var happydog
var database
var foodS
var foodStock
var happydogimg,dogimg1
var database
var petFOOD

function preload()
{
	happydogImg=loadImage("images/happydog.png")
  dog1Img=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog = createSprite(450,300,50,50);
    dog.addImage("dogImg1",dog1Img);
    dog.scale=0.5 ;
    foodStock=database.ref("food")
    foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
 
  console.log(foodS)
  writeStock(foodS)
  
  dog.addImage(happydogImg)
  }
  
  drawSprites();
  //add styles here
  textSize(25);
    fill("black");
    text("food remaining:"+ foodS,170,80);
    text("press space to feed the dog!" ,170 , 120 )

}
function writeStock(petFOOD){
  if(petFOOD<=0){
      petFOOD=0
  }
  else{
      petFOOD=petFOOD-1;
  }
  console.log(petFOOD)

  database.ref('/').update({
      food:petFOOD
  })
}
function readStock(data){
  foodS = data.val();
  
}


