var myState = 0;

function preload() {

}

function setup() {
  // put setup code here
  createCanvas(800, 800);

}

function draw() {
  // put drawing code here
  background('black');
  switch (myState) {
    case 0:
      text("What time did the man go to the Dentist?")
      break;

    case 1:
      text("Tooth-hurty!", 400, 400);
      break;

  }
}

function mousReleased() {
  myState = myState + 1;
  if (myState > 1) {
    myState = 0;
  }
}