var = song1, song2, song3;

function preload() {
  song1 = loadSound('assets/donkey.mp3');
}

function setup() {

  createCanvas(800, 800);
  background(255, 0, 0);
  song1.play(); // this is what starts the sound

}

function draw() {

}

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause();
  } else {
    song1.play() ;
  }


}


function touchStarted() {
  getAudioContext().resume();
}
