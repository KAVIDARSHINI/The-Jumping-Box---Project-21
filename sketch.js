var canvas;
var base1,base2,base3,base4;
var box;
var edges;

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    base1 = createSprite(88,560,175,20);
    base1.shapeColor = "mediumblue";
    
    base2 = createSprite(290,560,210,20);
    base2.shapeColor = "red";

    base3 = createSprite(510,560,210,20);
    base3.shapeColor = "green";

    base4 = createSprite(713,560,175,20);
    base4.shapeColor = "gold";


    //create box sprite and give velocity

    box = createSprite(200,200,40,40);
    box.shapeColor = "white";
    box.x = Math.round(random(20,750))

    box.velocityY = 5;
    box.velocityX = 3;


}

function draw() {
    background("grey");
    //create edgeSprite
  
    edges = createEdgeSprites();
    box.bounceOff(edges); 
    
    
    if(base1.isTouching(box) && box.bounceOff(base1) ){
      box.shapeColor = "mediumblue";
    }

    if(base2.isTouching(box) && box.bounceOff(base2)){
      box.shapeColor = "red";
      box.velocityY = 0;
      box.velocityX = 0;
    }

    if(base3.isTouching(box) && box.bounceOff(base3)){
      box.shapeColor = "green";
    }

    if(base4.isTouching(box) && box.bounceOff(base4)){
      box.shapeColor = "yellow";
    }

    
    //add condition to check if box touching surface and make it box

    drawSprites();
}

