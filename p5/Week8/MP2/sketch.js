var myState = 0 ;
var timer = 0 ;
var kick, clap;
var osc1;
var osc1amp
var fft
var oct
var isPlaying
var freq
var keyIndex
var pentaTable

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

  pentaTable = [55.0, 65.4064, 73.4162, 77.7817, 82.4069, 97.9989]
  oct = 0
  keyIndex = 0
  freq = 440
  isPlaying = false
  osc1amp = 0.0
  osc1 = new p5.Oscillator()
  fft = new p5.FFT()
  osc1.setType('sawtooth')
  osc1.freq(freq)
  osc1.amp(0)
  osc1.start(
}

function draw() {
  // put drawing code here

  switch(myState) {
    case 0:
    background(random(0,255),random(0,0),random(0,255));
    fill('white')
    text("House music is a feeling!", 500, 500);
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
    text("House music you feel in your soul!", 500, 500);
    textAlign(CENTER, CENTER);
    textSize(28)
    clap.play()
    break ;

    case 3:
    background(random(0,255),random(0,0),random(0,255));
    fill('white')
    text("This is your brain on house music!", 500, 500);
    textAlign(CENTER, CENTER);
    textSize(28)
    break ;

    case 4:
    background(random(0,255),random(0,0),random(0,255));
    fill('white')
    text("House music Is a feeling!", 500, 500);
    textAlign(CENTER, CENTER);
    textSize(28)

    playFreq()
    text("oct : " + oct, 10, 10)
    text(keyIndex, 50, 10)
    text("Hz : " + pentaTable[keyIndex] * pow(2, oct), 10, 20)
    text("sawtooth : " + int(osc2amp * 10), width / 4, height - 30)
    var waveform = fft.waveform()
    beginShape()
    strokeWeight(2)
    for (var i = 0; i < waveform.length; i++){
    var x = map(i * 5, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 2, height/10 * 8, 0);
    vertex(x, y);
 }
 endShape();
}

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
