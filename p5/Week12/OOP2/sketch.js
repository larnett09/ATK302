var cars = [];
var frogPos;
var myState = 0;
var timer = 0 ;

function setup() {

  createCanvas(800, 800);

  // spawn cars!!!
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }


  frogPos = createVector(400, height - 100);

  textAlign(CENTER)
  //rectMode(CENTER);
  //ellipseMode(CENTER);
}

function draw() {

  switch (myState) {

    case 0:
      background('black');
      fill('white');
      textSize(24)
      text("welcome to bugeater! click!", width/2, height/2);
      break;

    case 1: // the game state
      game();
      timer++ ;
      if (timer>600) {
        myState = 3 ;
        timer = 0 ;
      }
      break;

    case 2: // the win state
      background('green');
      fill('white');
      text("WINNER WINNER CHICKEN DINNER!!!", width/2, height/2);
      break;

    case 3: // the lose state
      background('blue');
      fill('white');
      text("You LOST!", width/2, height/2);
      break;
  }
}

function mouseReleased() {
  switch(myState){
    case 0:
    myState = 1 ;
    break ;

    case 2: // the win state!
    resetTheGame() ;
    myState = 0 ;
    break ;

    case 3: // the lose myState
    resetTheGame() ;
    myState = 0 ;
    break ;

  }
}

function Car() {
  //atributes
  this.pos = createVector(random(width), random(height)) ;
  this.vel = createVector(random(-5,5), random(-5,5)) ;
  this.r = random(255) ;
  this.g = random(255) ;
  this.b = random(255) ;


  //methods
  this.display = function() {
    fill(this.r, this.g, this.b) ;
    rect(this.pos.x, this.pos.y, 30, 30) ;
  }

  this.drive = function() {
    this.pos.add(this.vel)  ;
    if (this.pos.x > width) this.pos.x = 0 ;
    if (this.pos.x <0) this.pos.x = width ;
    if (this.pos.y > height) this.pos.y = 0 ;
    if (this.pos.y <0) this.pos.y = height ;
    }

}


function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

function resetTheGame() {
  cars = [] ;
  // spawn cars!!!
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
  timer = 0 ;

}


function game() {
  background(100);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);

    }
  }

  if (cars.length == 0) {
    myState = 2 ;
  }

  // draw the frog
  fill('green');
  ellipse(frogPos.x, frogPos.y, 60, 60);
  checkForKeys();
}
