function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(600, 400);
  background('#66ccff');
  noStroke();


  //trunks of junk

  fill('#663300');
  rectMode(CENTER);
  rect(100, 280, 20, 280);

  fill('#663300');
  rectMode(CENTER);
  rect(300, 280, 20, 280);

  fill('#663300');
  rectMode(CENTER);
  rect(500, 280, 20, 280);

  //start of arcs for hills

  fill('#009933');
  arc(100, 400, 280, 280, PI, TWO_PI);


  fill('#003300');
  arc(300, 400, 280, 280, PI, TWO_PI);


  fill('#33cc33');
  arc(500, 400, 280, 280, PI, TWO_PI);

  // second smaller set of arcs

  fill('#33cc33');
  arc(100, 400, 200, 200, PI, TWO_PI);

  fill('#009933');
  arc(300, 400, 200, 200, PI, TWO_PI);

  fill('#003300');
  arc(500, 400, 200, 200, PI, TWO_PI);

  //triangles for branches

  fill('#003300');
  triangle(100, 20, 50, 240, 150, 240);

  fill('#33cc33');
  triangle(300, 20, 250, 240, 350, 240);

  fill('#009933');
  triangle(500, 20, 450, 240, 550, 240);

}