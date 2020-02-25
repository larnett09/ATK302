var = song1, song2, song3;
var myState = 0;

function preload() {
  song1 = loadSound('assets/donkey.mp3');
  song2 = loadSound('assets/skate.mp3');
  song3 = loadSound('assets/thrill.mp3');

}

function setup() {

  createCanvas(800, 800);
  background(255, 0, 0);
  //song1.play(); // this is what starts the sound

}

function draw() {
  switch (myState) {
    case 0:
      song1.play();
      myState = 1;
      break;

    case 1:
      break;

    case 2:
      song2.play();
      myState = 3;
      break;

    case 3:
      break;

    case 4:
      song3.play();
      myState = 5;
      break;

    case 5:
      break;
  }
}

function mousReleased() {
  myState = myState + 1;
  if (myState > 5) {
    myState = 0;
  }

  song1.pause();
  song2.pause();
  song3.pause();

  getAudioContext().resume();
}

function touchStarted() {
  getAudioContext().resume();
}