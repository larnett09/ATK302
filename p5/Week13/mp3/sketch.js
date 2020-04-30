var cars = [] ;
var frogPos ;
var myState = 0;
var timer = 0 ;
var maxCars = 20 ;
var frog ;
var fly ;
var bg ;
var alpha, beta, gamma; // orientation data
var xPosition = 0;
var yPosition = 0;
var x = 0; // acceleration data
var y = 0;
var z = 0;


function preload() {
  
}

function setup() {

  createCanvas(windowWidth, windowHeight);

   // initialize accelerometer variables
   alpha = 0;
   beta = 0;
   gamma = 0;
 
   frog = loadImage('https://larnett09.github.io/ATK302/p5/Week13/assets/frog.png') ;
   imageMode(CENTER);
   rectMode(CENTER);

  // spawn cars!!!
  for (var i = 0; i < 5; i++) {
    cars.push(new Car()) ;
  }


  textAlign(CENTER) ;
  imageMode(CENTER) ;
  fly = loadImage('https://larnett09.github.io/ATK302/p5/Week13/assets/fly.png') ;
  bg = loadImage('https://larnett09.github.io/ATK302/p5/Week13/assets/gamebackground.jpg') ;

}

function draw() {
  background('white'); //

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);

  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition); // move everything over by x, y

  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad

  image(frog.png, 0, 0, 500, 500);
  //  	rect(0, 0, 100, 100) ;
  pop();

  // DECORATIONS
  // Just a bunch of text commands to display data coming in from addEventListeners
  textAlign(LEFT);
  textSize(20);
  fill('black');
  text("orientation data:", 25, 25);
  textSize(15);
  text("alpha: " + alpha, 25, 50);
  text("beta: " + beta, 25, 70);
  text("gamma: " + gamma, 25, 90);
  textSize(20);
  text("acceleration data:", 25, 125);
  textSize(15);
  text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
  text("y = " + y.toFixed(2), 25, 170);
  text("z = " + z.toFixed(4), 25, 190);

  // MORE DECORATIONS - write that pretty ATK type on top.
  fill('black');
  noStroke();
  textSize(100);
  textAlign(CENTER);
  text("flies", width / 2, height / 2);

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
      if (timer>700) {
        myState = 3 ;
        timer = 0 ;
      }
      break;

    case 2: // the win state
      image(bg, 400, 400, 800, 800) ;
      fill('black') ;
      text("WINNER WINNER FLIES FOR DINNER!!!", width/2, height/2);
      break;

    case 3: // the lose state
      image(bg, 400, 400, 800, 800)
      fill('black');
      text("YOU LOST!", width/2, height/2);
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


//function checkForKeys() {
//  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 10;
//  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 10;
//  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 10;
//  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 10;

//}

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


function touchStarted() {
  getAudioContext().resume() ;

}
