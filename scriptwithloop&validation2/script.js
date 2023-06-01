var gameMode = "instructions";
var playerOneDiceResults = [];
var playerTwoDiceResults = [];
var playerOneScore = 0;
var playerTwoScore = 0;

var main = function (input) {
  var myOutputValue = "";

  if (gameMode === "instructions") {
    myOutputValue = `<center><strong>Welcome to BEAT-THAT-DICE game!</strong> 🎲 🎲 🎲<br><br>
      ---> Click the [submit] button below to start your game</center>
      <br><br>
      <small><hr></hr><br><br>
      <u>House rules</u>:<br><br>
      1. Two players will play the game in order.<br><br>
      2. When a player clicks [submit], they will roll 2 dice, for example, 3 and 6.<br><br>
      3. The player gets to choose the order of the dice. If they want a bigger number like 63, they have to choose the 2nd dice as the 1st number.<br><br>
      4. Similarly, the next player will roll.<br><br>
      5. After both players have rolled, the player with the higher number wins.<br><br></small>`;
    gameMode = "playerOne";
  } else if (gameMode === "playerOne") {
    for (var counter = 0; counter < 2; counter += 1) {
      playerOneDiceResults.push(diceRoll());
    }
    if (playerOneDiceResults[0] === playerOneDiceResults[1]) {
      // Re-roll if both dice have the same number
      playerOneDiceResults = [];
      return "Player 1 rolled the same number for both dice. Re-rolling...";
    }
    myOutputValue = `<center><br><br>
      <big>Hello Player 1!!</big><br><br>
      <small><br><br></small>
      For Dice 1 >>> you rolled ${playerOneDiceResults[0]}<br><br>
      For Dice 2 >>> you rolled ${playerOneDiceResults[1]}<br><br> 
      <br><br>
      <big><b>Select the first number of your score</b></big><br><br>
      <strong><big>Enter <big>1</big> (for ${playerOneDiceResults[0]})<br><br>
      OR<br><br>
      Enter <big>2</big> (for ${playerOneDiceResults[1]})</center></strong></big>
      <br><br>`;
    gameMode = "playerOneChoice";
  } else if (gameMode === "playerOneChoice") {
    if (input === "1" || input === "2") {
      var selectedDiceIndex = parseInt(input);
      playerOneScore =
        playerOneDiceResults[selectedDiceIndex - 1] * 10 +
        playerOneDiceResults[1 - selectedDiceIndex];
      myOutputValue = `<center><b>Player 1 made a choice 🎲: Dice ${input}</b><br><br>
        [Dice ${input}] will be used for the first number of the score, which is ${
        playerOneDiceResults[selectedDiceIndex - 1]
      }.<br><br>
        <br><br>
        <big><strong>Player 1 scored ${playerOneScore}.</strong></big><br><br>
        <br><br>
        It is now Player 2's turn...</center>`;
      gameMode = "playerTwo";
    } else {
      myOutputValue = `<center>Invalid input. Please enter either 1 or 2.</center>`;
    }
  } else if (gameMode === "playerTwo") {
    for (var counter = 0; counter < 2; counter += 1) {
      playerTwoDiceResults.push(diceRoll());
    }
    if (playerTwoDiceResults[0] === playerTwoDiceResults[1]) {
      // Re-roll if both dice have the same number
      playerTwoDiceResults = [];
      return "Player 2 rolled the same number for both dice. Re-rolling...";
    }
    myOutputValue = `<center><br><br>
      <big>Hello Player 2!!</big><br><br>
      <small><br><br></small>
      For Dice 1 >>> you rolled ${playerTwoDiceResults[0]}<br><br>
      For Dice 2 >>> you rolled ${playerTwoDiceResults[1]}<br><br> 
      <br><br>
      <big><b>Select the first number of your score</b></big><br><br>
      <strong><big>Enter <big>1</big> (for ${playerTwoDiceResults[0]})<br><br>
      OR<br><br>
      Enter <big>2</big> (for ${playerTwoDiceResults[1]})</center></strong></big>
      <br><br>`;
    gameMode = "playerTwoChoice";
  } else if (gameMode === "playerTwoChoice") {
    if (input === "1" || input === "2") {
      var selectedDiceIndex = parseInt(input);
      playerTwoScore =
        playerTwoDiceResults[selectedDiceIndex - 1] * 10 +
        playerTwoDiceResults[1 - selectedDiceIndex];
      if (playerOneScore > playerTwoScore) {
        myOutputValue = `<center><b>Player 2 made a choice 🎲: Dice ${input}</b><br><br>
          [Dice ${input}] will be used for the first number of the score, which is ${
          playerTwoDiceResults[selectedDiceIndex - 1]
        }.<br><br>
          <br><br>
          <big><strong>Player 2 scored ${playerTwoScore} against Player 1's ${playerOneScore}</strong></big><br><br>
          <br><br>
          The winner is.... Player One.<br><br>
          Congratulations Player One!</center>`;
      } else if (playerTwoScore > playerOneScore) {
        myOutputValue = `<center><b>Player 2 made a choice 🎲: Dice ${input}</b><br><br>
          [Dice ${input}] will be used for the first number of the score, which is ${
          playerTwoDiceResults[selectedDiceIndex - 1]
        }.<br><br>
          <br><br>
          <big><strong>Player 2 scored ${playerTwoScore} against Player 1's ${playerOneScore}</strong></big><br><br>
          <br><br>
          The winner is.... Player Two.<br><br>
          Congratulations Player Two!</center>`;
      } else {
        myOutputValue = `<center><b>Player 2 made a choice 🎲: Dice ${input}</b><br><br>
          [Dice ${input}] will be used for the first number of the score, which is ${
          playerTwoDiceResults[selectedDiceIndex - 1]
        }.<br><br>
          <br><br>
          <big><strong>It's a tie!</strong></big><br><br>
          Both players scored ${playerOneScore}.<br><br>
          Play again!</center>`;
      }
      gameMode = "instructions";
    } else {
      myOutputValue = `<center>Invalid input. Please enter either 1 or 2.</center>`;
    }
  }

  return myOutputValue;
};

// Function to roll a dice and return a random number from 1 to 6
var diceRoll = function () {
  return Math.floor(Math.random() * 6) + 1;
};
