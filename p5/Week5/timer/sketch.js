var timer = 200 ;

function setup() {
  // put setup code here
  createCanvas(800, 800) ;
  background('green') ;
}

function draw() {
  // put drawing code here
  //textsize(100)
  //text('timer', width/2, height/2);
  timer-- ;
  if (timer == 0){
    background(random(256), random(256), random(256)) ;
    timer = 200 ;
  }
}
