var bg;
var form;
var gameState = 0;
var player,game;
var database, playerCount;
var player1,player2,plrImg1,plrImg2,players
var allPlayers;

function preload()
{
bg = loadImage("Images/WEMBLEY.jpg")
plrImg1 = loadImage("Images/football1.png")
plrImg2 = loadImage("Images/football2.png")
}

function setup() 
{
  
  database = firebase.database();
  createCanvas(displayWidth - 25,displayHeight - 25);
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() 
{
  background(bg)
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}

