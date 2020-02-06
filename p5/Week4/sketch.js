var tsurudapic;
var flumepic;
var eprompic;
var tsurudafont;

//function preload() {}

function setup() {
  createCanvas(1200, 1200);
  background("black")
  tsurudapic = loadImage("assets/atk302tsuruda.jpg");
  flumepic = loadImage("assets/atk302flume.jpg");
  eprompic = loadImage("assets/atk302eprom.jpg");
  tsurudafont = loadFont("assets/tsurudaf.otf");
}

function draw() {
  image(tsurudapic, 10, 10, 300, 300);
  image(flumepic, 210, 410, 300, 300);
  image(eprompic, 610, 210, 300, 300);

  fill('#ED225D');   // SETS the color
  textFont(tsurudafont);  // SETS the font
  textSize(20);    // SETS the size of the font
  text('TSURUDA', 10, 50); // DISPLAYS TEXT WITH THE FONT
}

}

//console for mouse position
//text(mouseX + ",  " + mouseY, mouseX + 10, mouseY + 10);
//}
