var tsurudapic;

function preload() {
  tsurudapic = loadImage('assets/atk302tsuruda.jpg');
}

function setup() {
  createCanvas(800, 800);
  tsurudapic = loadImage('assets/atk302tsuruda.jpg');
}

function draw() {
  image(tsurudapic, 10, 10);
}
