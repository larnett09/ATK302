var tsurudapic;
var flumepic;
var eprompic;

//function preload() {}

function setup() {
  createCanvas(800, 800);
  tsurudapic = loadImage("images/atk302tsuruda.jpg");
  flumepic = loadImage("images/atk302flume.jpg");
  eprompic = loadImage("images.atk302eprom.jpg");
}

function draw() {
  image(tsurudapic, 10, 10, 100, 100);
  image(flumepic, 210, 210, 100, 100);
  image(eprompic, 410, 410, 100, 100);
}
