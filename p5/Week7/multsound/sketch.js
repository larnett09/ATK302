var = song1;

function preload() {
  song1 = loadSound('assets/donkey.mp3');
}

function setup() {
  // put setup code here
  createCanvas(800, 800)
  background('green')
  song1.play()

}

function draw() {
  // put drawing code here
}

function mousReleased() {
  if (song1.isplaying()) {
    song1.pause();
  } else {
    song1.play();
  }


}

function touchStarted() {
  getAudioContext().resume();
}