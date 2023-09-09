// images: background(highschool, classes 6-7, house, practice areas)
// self-drawn: characters (boys+girls), life bars (stats)
var database,form, gameState, banner_img;

function preload()
{
  banner_img = loadImage("images/game_banner_placeholder.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

  database = firebase.database();
  
  form = new Form();
}


function draw() {

  background(0);
  
  drawSprites();
  form.display();
 
}



