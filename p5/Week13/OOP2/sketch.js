var cars = [] ;
var frogPos ;
var myState = 0;
var timer = 0 ;
var maxCars = 20 ;
var frog ;
var fly ;
var bg ;
function setup() {

  createCanvas(800, 800) ;

  // spawn cars!!!
  for (var i = 0; i < 5; i++) {
    cars.push(new Car()) ;
  }


  frogPos = createVector(400, height - 100) ;

  textAlign(CENTER);
  imageMode(CENTER);
  frog = loadImage('https://larnett09.github.io/ATK302/p5/Week13/assets/frog.png');
  fly = loadImage('https://larnett09.github.io/ATK302/p5/Week13/assets/fly.png');
  bg = loadImage('https://larnett09.github.io/ATK302/p5/Week13/assets/gamebackground.jpg');
}

function draw() {

  switch (myState) {

    case 0:
      image(bg, 400, 400, 800, 800) ;
      fill('black') ;
      textSize(24) ;
      text("Welcome to Bugeater! EAT BUGS! Click to Start!", width/2, height/2) ;
      break;

    case 1: // the game state
      image(bg, 400, 400, 800, 800) ;
      game() ;
      timer++ ;
      if (timer>1000) {
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

  //  for (var i = 0; i < maxCars; i++) {
  //    cars.push(new Car()) ;
//  }
    break ;

    case 3: // the lose myState
    resetTheGame() ;
    myState = 0 ;

    //or (var i = 0; i < maxCars; i++) {
    //  cars.push(new Car()) ;
  //  }
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
    //fill(this.r, this.g, this.b) ;
    //rect(this.pos.x, this.pos.y, 30, 30) ;
    image(fly, this.pos.x, this.pos.y, 50, 50);
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
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 10;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 10;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 10;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 10;

}

function resetTheGame() {
  cars = [] ;
  // spawn cars!!!
  for (var i = 0; i < 10; i++) {
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
  //fill('green');
  //ellipse(frogPos.x, frogPos.y, 60, 60);
  image(frog, frogPos.x, frogPos.y) ;
  checkForKeys() ;
}
