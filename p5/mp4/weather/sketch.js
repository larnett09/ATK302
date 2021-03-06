var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var bg ;
var sun ;
var cloud ;
var x = 0 ;
var ws = 0 ;
var temperature = 0 ;

function preload() {
  bg = loadImage('https://larnett09.github.io/ATK302/p5/mp4/weather/assets/bg.png') ;
  cloud = loadImage('https://larnett09.github.io/ATK302/p5/mp4/weather/assets/cloud.png') ;
  sun = loadImage('https://larnett09.github.io/ATK302/p5/mp4/weather/assets/sun.png') ;
}

function setup() {
  createCanvas(400, 400) ;
  background('black')
  //createImage(bg, 0, 400) ; 
   
  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!


  imageMode(CENTER) ;
  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?q=Vancouver, us&units=imperial&';
  var myIDString = 'appid=06c501c724291e7f017446666447cc76'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.  
}


function gotData(data) {
  weather = data ;
  console.log(data) ; // for debugging purposes, print out the JSON data when we get it.
  ws = weather.wind.speed ;  
  temperature = weather.main.temp ;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
          myState = 1;
      }
      break;

    case 1:
    image(bg, 0, 400, 800, 0) ;  
    imageMode(CENTER) ;  
    fill('white') ;
    text("Lovely Weather in Vancouver", 20, 20) ;
// parse the weather object and put some text or images using at least 3 different weather data!
    text("The Temperature is"+ weather.main.temp, 20, 40);
    text("The Humidity is"+ weather.main.humidity, 20, 60);
    text("The Windspeed is"+ weather.wind.speed, 20, 80);
    image(cloud, x, 250, 200, 100);
    x = x + ws/2 ;
    if (x > width) x = 0 ;

    image(sun, width-10, height-10, 350, 390) ;
    var tmp = 0 ;
    tmp = map(temperature, -10, 90, 2, height-10) ;


    break;

  }
}
