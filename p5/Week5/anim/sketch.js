var x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('black');
  fill('red')
  text("Parasite", x, 100) ;
  x = x + 5;
  if (x > width) {
    x = 0;
  }
}
