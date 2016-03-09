//Filename: rockpaperscissors.js
//Author: Morgan Sharif
//Email: morgan.sharif@gmail.com
//WDI - San Francisco - Spring, 2016

'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `getInput()`.
function getPlayerMove(move) {
    return move || getInput();
}

// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
function getComputerMove(move) {
    return move || randomPlay();
}

// Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
// Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
// The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
function getWinner(playerMove, computerMove) {
    var winner;
    if (playerMove == computerMove){
          winner = "tie"
    } else if (playerMove == "rock"){
          ((computerMove == "scissors") ? winner = "player" : winner = "computer")
    } else if (playerMove == "paper"){
          ((computerMove == "rock") ? winner = "player" : winner = "computer")
    } else {
          ((computerMove == "paper") ? winner = "player" : winner = "computer")
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var roundNumber = 1;
    while ((playerWins < 5) && (computerWins < 5)){
      console.log ("Round: " + roundNumber);
      var playerMove = getPlayerMove();
      //checks for invalid move provided by user input and asks until a proper move is entered
      while ((playerMove != "rock") && (playerMove != "paper") && (playerMove != "scissors")){
        console.log("Invalid selection.");
        playerMove = getPlayerMove();
      }
      var computerMove = getComputerMove();
      console.log("Player   -> " + playerMove);
      console.log("Computer -> " + computerMove);
      var roundWinner = getWinner(playerMove, computerMove);
      if (roundWinner !== "tie"){
        (roundWinner == "player" ? ((console.log(playerMove + " beats " + computerMove)), playerWins ++) : ((console.log(computerMove + " beats " + playerMove)), computerWins ++));
        console.log (roundWinner + " wins!");
      } else {
        console.log("Tie. No winner this round.");
      }
      console.log("|=====================|");
      console.log("|  Player  | Computer |");
      console.log("|    " + playerWins + "     |     " + computerWins + "    |");
      console.log("|=====================|");
      roundNumber ++;
    }
    (playerWins == 5 ? console.log("Player Wins!") : console.log("Computer Wins!"));
    return [playerWins, computerWins];
}
