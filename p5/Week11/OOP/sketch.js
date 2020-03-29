var myCar ;
var myCar2 ;

function setup() {
  createCanvas(800, 800) ;
  myCar = new Car() ;
  myCar2 = new Car() ;
}

function draw() {
  background('black') ;

  myCar.display() ;
  myCar.drive() ;

  myCar2.display() ;
  myCar2.drive() ;
}

function Car() {
  this.pos = createVector(random(width), random(height)) ;

  this.display = function() {
    rect(this.x, 100, 100, 100) ;
  }

  this.drive = function() {
    this.x = this.x + 5 ;
    if (this.x > width){
      this.x = 0 ;
    }
  }

}
