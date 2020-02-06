var tsurudapic;
var flumepic;
var eprompic;
var tsurudafont;
var epromfont;
var flumefont;
//var tsurudasong;
//var flumesong;
//var epromsong;

//function preload() {}

function setup() {
  createCanvas(1200, 1200);
  background("black")
  tsurudapic = loadImage("assets/atk302tsuruda.jpg");
  flumepic = loadImage("assets/atk302flume.jpg");
  eprompic = loadImage("assets/atk302eprom.jpg");

  tsurudafont = loadFont("assets/tsurudaf.ttf");
  epromfont = loadFont("assets/epromf.ttf");
  flumefont = loadFont("assets/flumef.ttf");

  //tsurudasong = loadSong("assets/tsurudafubar.mp3");
  //flumesong = loadSong("assets/flumeleftalone.mp3");
  //epromsong = loadSong("assets/epromcenterofvip.mp3");
}

function draw() {
  image(tsurudapic, 10, 10, 300, 300);
  image(flumepic, 210, 410, 300, 300);
  image(eprompic, 610, 210, 300, 300);

  fill('#ffffff'); // SETS the color
  textFont(tsurudafont, 40); // SETS the font
  text("TSURUDA", 20, 350); // DISPLAYS TEXT WITH THE FONT

  fill('#ffffff'); // SETS the color
  textFont(epromfont, 40); // SETS the font
  text("EPROM", 620, 550); // DISPLAYS TEXT WITH THE FONT

  fill('#ffffff'); // SETS the color
  textFont(flumefont, 40); // SETS the font
  text("FLUME", 220, 750); // DISPLAYS TEXT WITH THE FONT
}

}
