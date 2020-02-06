var tsurudapic;
var flumepic;
var eprompic;

//function preload() {}

function setup() {
  createCanvas(1200, 1200);
  background("black")
  tsurudapic = loadImage("images/atk302tsuruda.jpg");
  flumepic = loadImage("images/atk302flume.jpg");
  eprompic = loadImage("images/atk302eprom.jpg");
}

function draw() {
  image(tsurudapic, 10, 10, 300, 300);
  image(flumepic, 210, 410, 300, 300);
  image(eprompic, 610, 210, 300, 300);
}

//console for mouse position
//text(mouseX + ",  " + mouseY, mouseX + 10, mouseY + 10);
//}
