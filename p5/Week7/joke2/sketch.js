var myState = 0;
var timer = 0;


function preload() {

}

function setup() {
  // put setup code here
  createCanvas(800, 800);

}

function draw() {
  // put drawing code here
  background('white');

  switch (myState) {
    case 0:
      text("How do you make a Kleenex dance?", 400, 400);
      timer++;
      if (timer > 250) {
        myState = 1;
        timer = 0;
      }
      break;

    case 1:
      text("Put a little boogie in it!", 400, 400);
      timer++;
      if (timer > 250) {
        myState = 0;
        timer = 0;
      }
      break;

  }
}
