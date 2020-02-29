var myState = 0;
var timer = 0;


function setup() {
  // put setup code here
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  background('white');
  fill('black');
  rect(width / 2, height / 2, 150, 400);

  switch (myState) {
    case 0: // green

      fill('green');
      ellipse(width / 2, height / 2 + 125, 100, 100);

      fill('white');
      ellipse(width / 2, height / 2 - 125, 100, 100);
      ellipse(width / 2, height / 2, 100, 100);

      timer++;
      if (timer > 250) {
        myState = 1;
        timer = 0;
      }

      break;

    case 1: // yellow

      fill('yellow');
      ellipse(width / 2, height / 2, 100, 100);

      fill('white');
      ellipse(width / 2, height / 2 - 125, 100, 100);
      ellipse(width / 2, height / 2 + 125, 100, 100);

      timer++;
      if (timer > 250) {
        myState = 2;
        timer = 0;
      }

      break;

    case 2: // red
      fill('red');
      ellipse(width / 2, height / 2 - 125, 100, 100);

      fill('white');
      ellipse(width / 2, height / 2, 100, 100);
      ellipse(width / 2, height / 2 + 125, 100, 100);

      break;
      timer--;
      if (timer > 250) {
        myState = 1;
        timer = 0;
      }

  }


}
