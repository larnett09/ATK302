var myState = 0 ;
var timer = 0 ;
var kick, clap;

function preload(){
  //gif = loadGif('assets/giphybrain1.webp');
  kick = loadSound('assets/kick1.mp3');
  clap = loadSound('assets/kickclap1.mp3');
  kick.loop();
  kick.stop();
  clap.loop();
  clap.stop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  frameRate(1);
}

function draw() {
  // put drawing code here

  switch(myState) {
    case 0:
    background(random(0,255),random(0,0),random(0,255));
    fill('white')
    text("House music Is a feeling!", 500, 500);
    textAlign(CENTER, CENTER);
    textSize(28);

    timer++;
    if (timer > 250) {
      myState = 1;
      timer = 0;
}
    break ;

    case 1:
    //background(random(0,255),random(0,0),random(0,255));
    background('black')
    fill('white')
    text("House music gets you dancing.", 500, 500);
    textAlign(CENTER, CENTER);
    textSize(28)
    kick.play()


    break ;

    case 2:
    background(random(0,255),random(0,0),random(0,255));
    fill('white')
    text("House music Is a feeling!", 500, 500);
    textAlign(CENTER, CENTER);
    textSize(28)
    clap.play()
    break ;

    case 3:
    background(random(0,255),random(0,0),random(0,255));
    fill('white')
    text("House music Is a feeling!", 500, 500);
    textAlign(CENTER, CENTER);
    textSize(28)
    break ;

    case 4:
    background(random(0,255),random(0,0),random(0,255));
    fill('white')
    text("House music Is a feeling!", 500, 500);
    textAlign(CENTER, CENTER);
    textSize(28)
    break ;

  }


function mouseReleased() {
  if (myState == 0) {
    myState = 1 ;
  }
}
  if (myState == 1) {
    myState = 2 ;
  }
}
  if (myState == 2) {
    myState = 3 ;

}