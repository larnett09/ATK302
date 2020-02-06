function setup() {
  creatCanvas(800, 800)
  rectMode(CENTER)
  background(100)
  // put setup code here
}

function draw() {
  //lines
  stroke(0, 0, 0);
  strokeWeight(2);
  plane();
}

Function fish() {
  //line(400, 300, 200, 100);
  //line(400, 300, 200, 200);
  line(400, 300, 200, 300);
  //line(400, 300, 200, 400);

  //line(400, 300, 600, 100);
  // line(400, 300, 600, 200);
  line(400, 300, 600, 300);
  //line(400, 300, 600, 400);

  //rectangles
  fill(255, 255, 255)
  rectMode(CENTER)

  fill(166, 166, 166);
  rect(360, 350, 50, 300);

  fill(230, 230, 230);
  rect(200, 250, 50, 200);

  //2nd set
  rectMode(CENTER)
  fill(166, 166, 166);
  rect(440, 350, 50, 300);

  fill(230, 230, 230);
  rect(600, 250, 50, 200);

  //triangles for warheads
  fill(255, 0, 0);
  triangle(176, 350, 225, 350, 202, 405)
  triangle(575, 350, 625, 350, 602, 405)

  //triangles for fins
  triangle(175, 250, 150, 200, 175, 200);
  triangle(625, 250, 650, 200, 625, 200);


  //triangles for the wings
  fill(64, 64, 64)
  triangle(75, 100, 375, 450, 380, 200)
  triangle(725, 100, 425, 450, 420, 200)
  triangle(395, 105, 350, 75, 385, 170)
  triangle(450, 75, 415, 170, 405, 105)


  //ellipses
  ellipseMode(CENTER); // Set ellipseMode is CORNER
  fill(102, 102, 102)
  ellipse(400, 350, 50, 500);

  fill(51, 51, 204)
  ellipse(400, 500, 25, 50); // put drawing code here
}