var myState = 0;
var timer = 5;


function setup() {
  // put setup code here
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  background(100);
  fill('black');
  rect(width / 2, height / 2, 150, 400);

  switch (myState) {
    case 0: // green state
      fill('grey');
      ellipse(width / 2, height / 2 - 125, 100, 100); // top circle
      ellipse(width / 2, height / 2, 100, 100); // middle

      fill('green');
      ellipse(width / 2, height / 2 + 125, 100, 100); // bottom
			timer++ ;
      if (timer > 5) {
        myState = 1;
        timer = 0;
      }

      break;

    case 1: // yellow state      fill('grey');

      fill('grey');
      ellipse(width / 2, height / 2 - 125, 100, 100); // top circle
      ellipse(width / 2, height / 2 + 125, 100, 100); // bottom

      fill('yellow');
      ellipse(width / 2, height / 2, 100, 100); // middle
				timer++ ;
	    if (timer > 5) {
        myState = 2;
        timer = 0;
      }

      break;

    case 2: // red state
      fill('red');
      ellipse(width / 2, height / 2 - 125, 100, 100); // top circle

      fill('grey');
      ellipse(width / 2, height / 2, 100, 100); // middle
      ellipse(width / 2, height / 2 + 125, 100, 100); // bottom

      break;
			timer++ ;
      if (timer > 5) {
        myState = 0;
        timer = 0;
      }

  }


}
