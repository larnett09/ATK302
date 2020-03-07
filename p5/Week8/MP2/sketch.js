var myState = 0;
var timer = 0;
var kick, clap, hats, snare;
var osc;
var oscamp;
var fft;
var oct;
var isPlaying;
var freq;
var keyIndex;


function preload() {
  kick = loadSound('assets/kick1.mp3');
  clap = loadSound('assets/kickclap1.mp3');
  kick.loop();
  kick.stop();
  clap.loop();
  clap.stop();

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("Black");
  frameRate(1);
}

function draw() {
  // put drawing code here

  switch (myState) {
    case 0:
      background('black');
      textSize(42);
      fill('white')
      text("WARNING FLASHING LIGHTS MAY CAUSE SIEZURES", 500, 500);
      textAlign(CENTER, CENTER);
      textSize(42);

      break;

    case 1:
      //background(random(0,255),random(0,0),random(0,255));
      background('black')
      textSize(42);
      fill(random(0, 255), random(0, 0), random(0, 255))
      text("House music gets you dancing.", 500, 500);
      textAlign(CENTER, CENTER);
      textSize(28);
      kick.play();


      break;

    case 2:
      background('Black');
      textSize(42);
      fill(random(0, 255), random(0, 0), random(0, 255));
      text("House music you feel in your soul!", 500, 500);
      textAlign(CENTER, CENTER);
      clap.play();
      break;

    case 3:
      background('Black');
      textSize(42);
      fill(random(0, 255), random(0, 0), random(0, 255));
      text("This is your brain on house music!", 500, 500);
      textAlign(CENTER, CENTER);
      break;

    case 4:
      background(random(0, 255), random(0, 0), random(0, 255));
      textSize(42);
      fill('white');
      text("House music Is a feeling!", 500, 500);
      textAlign(CENTER, CENTER);


      osc = new p5.Oscillator();
      osc.setType('sawtooth');
      osc.start();
      playFreq();
      text("oct : " + oct, 10, 10);
      text(keyIndex, 50, 10);
      text("sawtooth : " + int(oscamp * 10), width / 4, height - 30);
      var waveform = fft.waveform();
      beginShape();
      strokeWeight(2);

      //Still mising something here??
      for (var i = 0; i < waveform.length; i++) {
        var x = map(i * 5, 0, waveform.length, 0, width);
        var y = map(waveform[i], -1, 2, height / 10 * 8, 0);
        vertex(x, y);
      }
  }
  endShape();


}


function mouseReleased() {
  myState = myState + 0;
  if (myState > 5) {
    myState = 0;
  }
}

function mouseMoved() {
  oct = int(map(height - mouseY, 0, height, 0, 48) / 6)
  keyIndex = int(map(height - mouseY, 0, height, 0, 48) % 6)
  playFreq()
}

function playFreq() {
  if (keyIndex > 5) {
    keyIndex = 0
    oct++
  } else if (keyIndex < 0) {
    keyIndex = 5
    oct--
  }

  function oscPlay() {
    osc.stop()
  }
}