var trex, trex_running, trex_collided;


function preload() {
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
trex_collided = loadImage("trex_collided.png");

}
function setup() {
createCanvas(600, 200);
//create a trex sprite
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;
  
//create a ground sprite

}
function draw() {
background(220);
//jump when the space button is pressed
if (keyDown("space")) {
trex.velocityY = -10;
}
trex.velocityY = trex.velocityY + 0.8

drawSprites();
}
