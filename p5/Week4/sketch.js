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
  tsurudafont = loadFont("assets/tsurudaf.ttf");
}

function draw() {
  image(tsurudapic, 10, 10, 300, 300);
  image(flumepic, 210, 410, 300, 300);
  image(eprompic, 610, 210, 300, 300);

  fill('#ffffff');   // SETS the color
 textFont(tsurudafont, 40);  // SETS the font
 textSize();    // SETS the size of the font
 text("TSURUDA", 20, 320); // DISPLAYS TEXT WITH THE FONT
}

//}

//console for mouse position
//text(mouseX + ",  " + mouseY, mouseX + 10, mouseY + 10);
//}
