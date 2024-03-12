// Author: Yamkelani

// Patched logic for a dice game. Do not change the name of the script.
// This JavaScript file is linked to the game.html file.

// Selecting dice elements from the HTML document
const dice1 = document.querySelector("#dice1");
const dice2 = document.querySelector("#dice2");

// Initializing player objects with default values and retrieving from local storage
const player1 = {
  name: localStorage.getItem("player1Name") || "Player One",
  score: 0,
  number: 1,
};

const player2 = {
  name: localStorage.getItem("player2Name") || "Player Two",
  score: 0,
  number: 2,
};

// Function to update player names on the HTML page
function updatePlayerNames() {
  document.getElementById("name1").innerText = player1.name;
  document.getElementById("name2").innerText = player2.name;
}

// Initial update of player names
updatePlayerNames();

// Variable to track the number of turns and a flag for rolling state
let turns = 0;
let isRolling = false;

// Event listener for the button click
document.querySelector("button").addEventListener("click", function () {
  // Allowing a roll only if not currently rolling and turns are less than 6
  if (!isRolling && turns < 6) {
    isRolling = true;
    // Updating dice faces and incrementing turns
    currentFace1 = updateDice(dice1, currentFace1, player1);
    currentFace2 = updateDice(dice2, currentFace2, player2);
    turns++;
  } else if (!isRolling) {
    // Ending the game if not rolling and turns are equal to or more than 6
    endGame();
  }
});

// Function to handle the end of the game
function endGame() {
  let winner;
  // Determining the winner based on scores
  if (player1.score > player2.score) {
    winner = player1;
  } else if (player2.score > player1.score) {
    winner = player2;
  }

  // Displaying the result on the HTML page
  const resultElement = document.getElementById("result");
  if (winner) {
    resultElement.innerText = `Awe🇿🇦, ${winner.name}! You are the top dawg!`;
  } else {
    resultElement.innerText =
      "That's tough👀, both of you are standing on business!";
  }

  // Setting up a countdown for game reset
  let countdown = 7;
  const countdownElement = document.getElementById("countdown");

  const countdownInterval = setInterval(() => {
    countdownElement.innerText = `Mandela effect in ${countdown} seconds...`;
    countdown--;

    // Resetting the game after the countdown
    if (countdown < 0) {
      clearInterval(countdownInterval);
      turns = 0;
      player1.score = 0;
      player2.score = 0;
      updateScore(player1, 0);
      updateScore(player2, 0);
      resultElement.innerText = "";
      countdownElement.innerText = "";
      isRolling = false;
    }
  }, 1000);
}

// Function to show dice face with a fadeIn effect
// removes the fadeout and hidden effects
function showFace(face) {
  face.classList.add("fadeIn");
  setTimeout(function () {
    face.classList.remove("fadeOut");
    face.classList.remove("hidden");
  }, 900);
}

// Function to hide dice face with a fadeOut effect
// removss fadeout and fade in and adds hidden to the spinning
function hideFace(face) {
  face.classList.add("fadeOut");
  setTimeout(function () {
    face.classList.remove("fadeIn");
    face.classList.remove("fadeOut");
    face.classList.add("hidden");
  }, 900);
}

// Function to add rolling animation class to dice
function rollDice(diceElement) {
  diceElement.classList.add("roll");
}

// Function to remove rolling animation class from dice
function stopRoll(diceElement) {
  diceElement.classList.remove("roll");
}

// Function to update the dice face and player score
function updateDice(diceElement, currentFace, player) {
  // Hiding the current dice face and adding rolling animation
  hideFace(currentFace);
  rollDice(diceElement);

  // Generating a random number between 1 and 6
  const roll = Math.floor(Math.random() * 6) + 1;

  // Updating the current face based on the random roll
  switch (roll) {
    case 1:
      currentFace = diceElement.querySelector(".dot");
      console.log("Dice landed on: 1");
      break;
    case 2:
      currentFace = diceElement.querySelector(".two");
      console.log("Dice landed on: 2");
      break;
    case 3:
      currentFace = diceElement.querySelector(".three");
      console.log("Dice landed on: 3");
      break;
    case 4:
      currentFace = diceElement.querySelector(".four");
      console.log("Dice landed on: 4");
      break;
    case 5:
      currentFace = diceElement.querySelector(".five");
      console.log("Dice landed on: 5");
      break;
    case 6:
      currentFace = diceElement.querySelector(".six");
      console.log("Dice landed on: 6");
      break;
  }

  // Showing the new dice face and updating the score after a delay
  showFace(currentFace);
  setTimeout(function () {
    stopRoll(diceElement); // Removing rolling animation class after delay
    updateScore(player, roll); // Updating score with the random roll
    isRolling = false; // Resetting the rolling flag
  }, 3000);

  return currentFace;
}

// Function to update player score on the HTML page
function updateScore(player, num) {
  player.score += num;
  document.getElementById(`score${player.number}`).innerText = player.score;
}

// Initial faces for the two dice
let currentFace1 = dice1.querySelector(".six");
let currentFace2 = dice2.querySelector(".six");

// Function to redirect to a specific URL
function quitPage() {
  window.location.replace("https://youtu.be/dXEVs32KHuo?si=7ygkSLpMHe3CbF3j");
}

// Function to navigate back to the rules.html page
function goBack() {
  window.location.href = "rules.html";
}
