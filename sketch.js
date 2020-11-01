//Create variables here
var dog, happydog, image1, image2, database, foodS, foodStock;
function preload()
{
  //load images here
  image1 = loadImage("images/Dog.png");
  image2 = loadImage("images/happydog.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog = createSprite(220,300,10,10);
  dog.addImage(image1);
  dog.scale = 0.25;
  
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(image2)
  }
    drawSprites();
    fill ("orange")
    textSize(15)
    text ("Food Remaining: "+ foodS, 100,170);

    fill("blue")
    textSize(15);
    text("Note: Press Up Arrow key to Feed Your Dog", 120,50)
  //add styles here
  }

  function readStock(data){
    foodS = data.val();
  }

  function writeStock(x){
    if(x<=0){
      x=0;
    }
    else{
      x=x-1;
    }

    database.ref('/').update({
      Food: x
    })
  }
