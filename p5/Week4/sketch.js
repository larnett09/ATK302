var tsurudapic;
var flumepic;
var eprompic;

function preload() {
  tsurudapic = loadImage("images/atk302tsuruda.jpg");
  flumepic = loadImage("images/atk302flume.jpg")
  eprompic = loadImage("images.atk302eprom.jpg")
}

function setup() {
  createCanvas(800, 800);
//  tsurudapic = loadImage("assets/atk302tsuruda.jpg");
}

function draw() {
  image(tsurudapic, 10, 10);
  image(flumepic, 210, 210);
  image(eprompic, 410, 410);
}
