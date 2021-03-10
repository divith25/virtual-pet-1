//Create variables here
var dog
function preload()
{
  dogimage=loadAnimation("images/dogimg.png")
  dogsitimage=loadAnimation("images/dogimg1.png")
}

function setup() {
  createCanvas(800, 700);
  
  
dog=createSprite(600,500,50,50)
dog.addAnimation("image",dogimage)
dog.addAnimation("image1",dogsitimage)
dog.scale=0.5

this.button = createButton('feed');
this.button.position(displayWidth/2 + 30, displayHeight/2);
}


function draw() { 
  
  background("blue")

  this.button.mousePressed(()=>{
    dog.changeAnimation("image1",dogsitimage)
    dog.scale=0.5
    console.log("sit")
  })

  drawSprites();
  //add styles here

}



