var myState = 0 ;
var timer = 0 ;
var kick;

function preload(){
  //gif = loadGif('assets/giphybrain1.webp');
  kick = loadSound('assets/kick1');
  kick.loop();
  kick.stop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
}

function draw() {
  // put drawing code here

  switch(myState) {
    case 0:
    background(random(0,255),random(0,0),random(0,255));
    fill('white')
    text("This is your Brain on House", 500, 500);
    textAlign(CENTER, CENTER);
    textSize(28);
    kick.play()


    timer++;
    if (timer > 250) {
      myState = 1;
      timer = 0;
}
    break ;

    case 1:
    background(random(0,255),random(0,0),random(0,255));
    // put a timer in here -
    // if timer counted up to 200, go to state 2 and reset timer!


    break ;

    case 2:
    background(random(0,255),random(0,0),random(0,255));
    break ;

    case 3:
    background(random(0,255),random(0,0),random(0,255));
    break ;

    case 4:
    background(random(0,255),random(0,0),random(0,255));
    break ;

  }

}

function mouseReleased() {
  if (myState == 0) {
    myState = 1 ;
  }

  if (myState == 2) {
    myState = 3 ;
  }

  //console for mouse position
  //text(mouseX + ",  " + mouseY, mouseX + 10, mouseY + 10);

}
