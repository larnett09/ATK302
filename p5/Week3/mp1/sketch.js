function setup() {
  <<
  << << < HEAD
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(1000, 800);
  rectMode(CENTER)
  background(100);
}

function draw() { //press that mouse

  if (mouseIsPressed) {
    ellipse(50, 50, 50, 50);
  } else {
    rect(25, 25, 50, 50);

  } else {

    //mouse aint mouse pressed

    rect(50, 50, 50, 50);
  }

  function mouseReleased() {
    console.log(mouseX + ", " + mouseY, 40, 40);

    ===
    === =
    //
    createCanvas(800, 700);
    background('#');
    noStroke();
  }

  function draw() {
    background(153, 204, 255);
    fill(0);


    if (mouseIsPressed) {

      //flames, this portion of code I copied (changed triangle positions) from Notabel on github whom also was in ATK302
      fill(random(255), random(255), random(255));
      triangle(170, 500, 190, 500, 180, 420);

      fill('yellow');
      triangle(180, 500, 210, 500, 190, 390);

      fill(random(255), random(255), random(255));
      triangle(190, 500, 220, 500, 200, 405);

      fill('yellow');
      triangle(200, 500, 230, 500, 220, 410);

      //second flames
      fill('yellow');
      triangle(600, 500, 630, 500, 620, 420);

      fill(random(255), random(255), random(255));
      triangle(590, 500, 620, 500, 600, 405);

      fill('yellow');
      triangle(580, 500, 610, 500, 590, 390);

      fill(random(255), random(255), random(255));
      triangle(570, 500, 590, 500, 580, 410);
      //My code continues

      //lines
      stroke(0, 0, 0);
      strokeWeight(2);

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
      // rect(200, 250, 50, 200);

      //missile
      rectMode(CENTER)
      fill(166, 166, 166);
      rect(440, 350, 50, 300);

      fill(230, 230, 230);
      //rect(600, 250, 50, 200);

      //triangles for warheads
      fill(255, 0, 0);
      // triangle(176, 350, 225, 350, 202, 405)
      // triangle(575, 350, 625, 350, 602, 405)

      //triangles for fins
      //triangle(175, 250, 150, 200, 175, 200);
      //triangle(625, 250, 650, 200, 625, 200);

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
      ellipse(400, 500, 25, 50);

      //rect for missiles
      fill(255, 255, 255)
      rect(200, 600, 50, 200);
      rect(600, 600, 50, 200);

      //triangle for cones
      // triangle(176, 350, 225, 350, 202, 405)
      // triangle(575, 350, 625, 350, 602, 405)

      //triangles for fins
      fill(255, 0, 0)
      triangle(175, 550, 150, 500, 175, 500);
      triangle(225, 550, 250, 500, 225, 500);
      triangle(575, 550, 550, 500, 575, 500);
      triangle(625, 550, 650, 500, 625, 500);

    } else {

      //lines
      stroke(0, 0, 0);
      strokeWeight(2);

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
      ellipse(400, 500, 25, 50);

    }
    print(mouseIsPressed);

    //console for mouse position
    //text(mouseX + ",  " + mouseY, mouseX + 10, mouseY + 10);
    >>>
    >>> > ae079b724ddfdd0323f2cbd94640d5f1ac025b31
  }