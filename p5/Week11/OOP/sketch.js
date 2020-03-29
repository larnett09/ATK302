var = myCar;


function setup() {
  createCanvas(800, 800);
  myCar = new Car();
}

function draw() {
  background('blue');

  myCar.display() ;

}

function Car() {
  this.x = 100;

  this.display = function() {
    rect(this.x, 100, 100, 100);
  }

  this.drive = function() {
    this.x = this.x + 5;
  }

}
