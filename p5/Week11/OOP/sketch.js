var myCar ;
var myCar2 ;
var myCar3 ;

function setup() {
  createCanvas(800, 800) ;
  myCar = new Car() ;
  myCar2 = new Car() ;
  myCar3 = new Car() ;
}

function draw() {
  background('black') ;

  myCar.display() ;
  myCar.drive() ;

  myCar2.display() ;
  myCar2.drive() ;

  myCar3.display() ;
  myCar3.drive() ;
}

function Car() {
  this.pos = createVector(random(width), random(height)) ;
  this.vel createVector(random(-5,5), random(-5,5)) ;

  this.display = function() {
    rect(this.pos.x, this.pos.y, 100, 100) ;
  }

  this.drive = function() {
    this.pos.add(this.vel)  ;
    if (this.pos.x > width) this.pos.x = 0 ;
    if (this.pos.x <0) this.pos.x = width ;
    if (this.pos.y > height) this.pos.y = 0 ;
    if (this.pos.y <0) this.pos.y = height ;
    }

}
