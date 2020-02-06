function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(1000, 800);
  rectMode(CENTER)
  background(100) ;
}

function draw() {//press that mouse

  if (mouseIsPressed) {
     ellipse(50, 50, 50, 50);
   } else {
     rect(25, 25, 50, 50);

   } else {

   //mouse aint mouse pressed

   rect(50, 50, 50, 50);
 }

function mouseReleased() {
  console.log(mouseX + ", " + mouseY, 40 , 40);

}
