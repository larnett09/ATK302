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
      text("What time is it?", 400, 400);
      timer++;
      if (timer > 25) {
        myState = 1;
        timer = 0;
      }
      break;

    case 1:
      text("25!", 400, 400);
      timer++;
      if (timer > 25) {
        myState = 0;
        timer = 0;
      }
      break;

  }
}
