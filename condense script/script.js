// I like to add in the following, please help suggest and update my code:
// in the case if the 1st and 2nd dice are the same, backend to roll the dice again until numbers are different
// scenarios for final tie between player 1 and 2 aka tie breaker round
// console.logs instances

gameMode = "instructions";
playerOneDiceResults = [];
playerTwoDiceResults = [];
playerOneScore = 0;
playerTwoScore = 0;

var main = function (input) {
  var myOutputValue = `<center><strong> Welcome to BEAT-THAT-DICE game!</strong> 🎲 🎲 🎲<br><br>
  ---> click the [submit] button above to start your game </strong> </center>
  <br><br> </strong> 
  <small> <hr></hr>
  <br><br>
  <u>House rules</u>: <br><br>
    1.  Two players will play the game in order. <br><br>
    2.  When a player clicks [submit], he/she will rolls 2 dice,<br>for example 3 and 6.<br><br>
    3.  Player gets to choose the order of the dice. If he/she wants a bigger number 63, they have to choice the 2nd dice as the 1st number. <br><br>
    4.  Similarly next player will roll. <br><br>
    5.  After both players have rolled, player with the higher number wins. <br><br></small>`;

  // changing mode from instruction to player one
  if (gameMode == "instructions") {
    gameMode = "playerOne";
    return myOutputValue;
  } else if (gameMode == "playerOne") {
    gameMode = "playerOneChoice";
    for (counter = 0; counter < 2; counter += 1) {
      playerOneDiceResults.push(diceRoll());
    }
    myOutputValue = `<center> <br><br>
    <big> Hello Player 1!!</big><br><br>
    <small><br><br></small>
    For Dice 1 >>>> you rolled ${playerOneDiceResults[0]} <br><br>
    For Dice 2 >>>> you rolled ${playerOneDiceResults[1]} <br><br> 
    <br><br>
    <big> <b> Select the first number of your score </b> </big><br><br>
    <strong><big> Enter <big>1</big>  (for ${playerOneDiceResults[0]}) <br><br>
    OR <br><br>
    Enter <big>2</big>  (for ${playerOneDiceResults[1]}) <br><br> </center></strong></big>
    <br><br>`;
    return myOutputValue;
  } else if (gameMode == "playerOneChoice") {
    gameMode = "playerTwo";
    if (input == 1) {
      playerOneScore = playerOneDiceResults[0] * 10 + playerOneDiceResults[1];
    } else if (input == 2) {
      playerOneScore = playerOneDiceResults[1] * 10 + playerOneDiceResults[0];
    }
    myOutputValue = `<center> <b> Player 1 made a choice 🎲 : Dice 1  </b> <br><br>
      [Dice ${input}] will be use for the first number of score which is ${playerOneDiceResults[0]}.<br><br>
      <br><br>
      <big><strong> Player 1 scored ${playerOneScore}. </strong></big><br><br>
      <br><br>
      It is now Player 2's turn...</center>`;
    return myOutputValue;
  } else if (gameMode == "playerTwo") {
    gameMode = "playerTwoChoice";
    for (counter = 0; counter < 2; counter += 1) {
      playerTwoDiceResults.push(diceRoll());
    }
    myOutputValue = `<center> <br><br>
    <big> Hello Player 2!!</big><br><br>
    <small><br><br></small>
    For Dice 1 >>>> you rolled ${playerTwoDiceResults[0]} <br><br>
    For Dice 2 >>>> you rolled ${playerTwoDiceResults[1]} <br><br> 
    <br><br>
    <big> <b> Select the first number of your score </b> </big><br><br>
    <strong><big> Enter <big>1</big>  (for ${playerTwoDiceResults[0]}) <br><br>
    OR <br><br>
    Enter <big>2</big>  (for ${playerTwoDiceResults[1]}) <br><br> </center></strong></big>
    <br><br>`;
    return myOutputValue;
  } else if (gameMode == "playerTwoChoice") {
    if (input == 1) {
      playerTwoScore = playerTwoDiceResults[0] * 10 + playerTwoDiceResults[1];
      if (playerOneScore > playerTwoScore) {
        myOutputValue = `<center> <b> Player 2 made a choice 🎲 : Dice 1  </b> <br><br>
      [Dice ${input}] will be used for the first number of the score, which is ${playerTwoDiceResults[0]}.<br><br>
      <br><br>
      <big><strong> Player 2 scored ${playerTwoScore} against Player 1's ${playerOneScore} </strong></big><br><br>
      <br><br>
      The winner is.... Player One.
      <br><br>
      Congratulations Player One! </center>`;
      } else {
        myOutputValue = `<center> <b> Player 2 made a choice 🎲 : Dice 1  </b> <br><br>
      [Dice ${input}] will be used for the first number of the score, which is ${playerTwoDiceResults[0]}.<br><br>
      <br><br>
      <big><strong> Player 2 scored ${playerTwoScore} against Player 1's ${playerOneScore} </strong></big><br><br>
      <br><br>
      The winner is.... Player Two.
      <br><br>
      Congratulations Player Two! </center>`;
      }
    } else if (input == 2) {
      playerTwoScore = playerTwoDiceResults[0] * 10 + playerTwoDiceResults[1];
      if (playerOneScore > playerTwoScore) {
        myOutputValue = `<center> <b> Player 2 made a choice 🎲 : Dice 2  </b> <br><br>
      [Dice ${input}] will be used for the first number of the score, which is ${playerTwoDiceResults[0]}.<br><br>
      <br><br>
      <big><strong> Player 2 scored ${playerTwoScore} against Player 1's ${playerOneScore} </strong></big><br><br>
      <br><br>
      The winner is.... Player One.
      <br><br>
      Congratulations Player One! </center>`;
      } else {
        myOutputValue = `<center> <b> Player 2 made a choice 🎲 : Dice 2  </b> <br><br>
      [Dice ${input}] will be used for the first number of the score, which is ${playerTwoDiceResults[0]}.<br><br>
      <br><br>
      <big><strong> Player 2 scored ${playerTwoScore} against Player 1's ${playerOneScore} </strong></big><br><br>
      <br><br>
      The winner is.... Player Two.
      <br><br>
      Congratulations Player Two! </center>`;
      }
    }
    return myOutputValue;
  }
};
// Dice roll function ; no input required
// Library command to generate random decimal from 0 to 5.999999 --> round down the decimal to an integer --> random result to be min 1 and max 6
var diceRoll = function () {
  return Math.floor(Math.random() * 6) + 1;
};
