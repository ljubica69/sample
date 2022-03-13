
var player1 = prompt("enter player 1 name");
var player2 = prompt("enter player 2 name");


var round = 0;

var player1Score = 0;
var player2Score = 0;
var player1Dice = 0;
var player2Dice = 0;

function game(){
    round++;
     player1Dice = Math.ceil(Math.random()*6);
     player2Dice = Math.ceil(Math.random()*6);

     player1Score += player1Dice;
     player2Score += player2Dice;

    console.log("%c*** ROUND"+round+  "***" , "color:tomato;text-shadow: 1px 1px #ddd;border-bottom: 2px dotted red;");
    console.log(player1 + " " +player1Dice+" : "+player2Dice+ " "+player2+" ("+player1Score+":"+player2Score+")" );

    if(round <10){
        game()
    }else{
    
     checkWinner();
        
    }

}



function checkWinner() {
       if(player1Score > player2Score){
           console.log("%c*** Winer "+player1+  "***" , "color:tomato;text-shadow: 1px 1px #ddd;border-bottom: 2px dotted red;");  
        }else if(player1Score < player2Score){
          console.log("%c*** Winer "+player2+  "***" , "color:blue;text-shadow: 1px 1px #ddd;border-bottom: 2px dotted red;");  
        }else{
               console.log("%c*** No Winer ***" , "color:green;text-shadow: 1px 1px #ddd;border-bottom: 2px dotted red;");  
        } 
}

game();