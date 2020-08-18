/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. 
Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. 
After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score 
gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer,dice1 , dice2, gamePlaying;

init(); //inital config for game

var lastDice;
//document.querySelector('#current-' + activePlayer).textContent = dice;

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//another way to insert text on the html document

//var x = document.querySelector('#score-0').textContent;

//document.querySelector('.btn-roll').addEventListener('click', btn);

// anonymous function, dont have a name and cant be used twice or more
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){ // if there isnt a winner yet the code below runs
    
    //1. random number
    dice1 = Math.floor(Math.random() * 6 ) + 1;
    dice2 = Math.floor(Math.random() * 6 ) + 1;    
    

    //2. display the score
    document.getElementById('dice1').style.display = 'block';
    document.getElementById('dice2').style.display = 'block';
    document.getElementById('dice1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice2').src = 'dice-' + dice2 + '.png';


    //3. Update the round score IF the rolled number was NOT 1
    /*
        if (dice === 6 && lastDice === 6) { 
           // player loses score
           scores[activePlayer] = 0; 
           document.querySelector('#score-' + activePlayer).textContent = '0';
           nextPlayer();

        } else if (dice != 1) {
          //add score
         roundScore += dice;
         document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
        //next player
        nextPlayer();
        }
        lastDice = dice;
        */

       if (dice1 != 1 && dice2 != 1) {
        //add score
       roundScore += dice1 + dice2;
       document.querySelector('#current-' + activePlayer).textContent = roundScore;
      } else {
      //next player
      nextPlayer();
      }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying){
    // add current score to GLOBAL score
    scores[activePlayer] += roundScore;
    
    // update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    var input = document.querySelector('.final-score').value;
    var winningScore;

    //undefined, 0, null or '' ace COERCED to false
    //anything else is COERCED true
    if(input) {
        winningScore = input;
    } else {
        winningScore = 100;
    }
    // check if player won the game
    if (scores[activePlayer] >= winningScore) {
    document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false; // stops the game so you can continuo rolling the dice
    } else {
        //next player
        nextPlayer();
    }
    }
    
    
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //document.querySelector('.player-0-panel').classList.remove('remove');
        //document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.player-1-panel').classList.toggle('active'); // display de style of the active player
        document.querySelector('.player-0-panel').classList.toggle('active');

        document.getElementById('dice1').style.display = 'none';
        document.getElementById('dice2').style.display = 'none'; //delete the dice img

};

document.querySelector('.btn-new').addEventListener('click', init);

function init() { //init parameters from game
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';


    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0'; 
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active'); //add active to player 1


}











