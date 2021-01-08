var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var s=0;
var worl=1;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;


function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  if(gameState < 2)
  {
  background(back_img);
  }
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
   
  ;
  for(var plr in allPlayers){
    var index2 =0;
  index2++;
  if(fruitGroup.isTouching(players[index2-1]))
  {
    
    player.score +=10;
    fruitGroup.destroyEach();
    
  }
  }

if(player.score===100)
{
  gameState=2;

}

playerScore();


}

function playerScore()
{
  textSize(25);
  fill("blue");
  
  var score1Ref = database.ref('players/player1/score');
      score1Ref.on("value", function (data) {
         var score1 = data.val();
         text("Player1 Score : "+score1,displayWidth-displayWidth+10,displayHeight - displayHeight+30);
        
      
        }
      )
 
      var score2Ref = database.ref('players/player2/score');
      score2Ref.on("value", function (data) {
      var score2 = data.val();
        text("Player2 Score : "+score2,displayWidth-displayWidth+10,displayHeight - displayHeight+60);
     
        
    }
      )
    }