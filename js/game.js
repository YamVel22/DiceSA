const dice1 = document.querySelector("#dice1");
const dice2 = document.querySelector("#dice2");

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

// Function to update the player names on the HTML page
function updatePlayerNames() {
  document.getElementById("name1").innerText = player1.name;
  document.getElementById("name2").innerText = player2.name;
}

// Call the function to update player names initially
updatePlayerNames();

let turns = 0; // Add a variable to track the number of turns
let isRolling = false; // Variable to track if the dice is currently rolling

// Add event listener to the button for rolling the dice
document.querySelector("button").addEventListener("click", function () {
  if (!isRolling && turns < 7) { // Check if the dice is not currently rolling and the number of turns is less than 5
    isRolling = true; // Set rolling to true to prevent multiple clicks during the animation
    currentFace1 = updateDice(dice1, currentFace1, player1);
    currentFace2 = updateDice(dice2, currentFace2, player2);
    turns++; // Increment the turns counter
  } else if (!isRolling) {
    endGame(); // Call the endGame function after the last turn
  }
});

function endGame() {
  // Check the highest score
  let winner;
  if (player1.score > player2.score) {
    winner = player1;
  } else if (player2.score > player1.score) {
    winner = player2;
  }

  // Display the result
  const resultElement = document.getElementById("result");
  if (winner) {
    resultElement.innerText = `Congratulations, ${winner.name}! You have won!`;
  } else {
    resultElement.innerText = "What a tie!";
  }

  // Display countdown timer
  let countdown = 10;
  const countdownElement = document.getElementById("countdown");

  const countdownInterval = setInterval(() => {
    countdownElement.innerText = `Restarting in ${countdown} seconds...`;
    countdown--;

    if (countdown < 0) {
      clearInterval(countdownInterval);

      // Reset the game after the countdown
      turns = 0; // Reset the turns counter
      player1.score = 0; // Reset player 1 score
      player2.score = 0; // Reset player 2 score
      updateScore(player1, 0); // Update player 1 score on the UI
      updateScore(player2, 0); // Update player 2 score on the UI
      resultElement.innerText = ""; // Clear the result message
      countdownElement.innerText = ""; // Clear the countdown message
      isRolling = false; // Reset the rolling state
    }
  }, 1000);
}

function showFace(face) {
  face.classList.add("fadeIn");
  setTimeout(function () {
    face.classList.remove("fadeOut");
    face.classList.remove("hidden");
  }, 900);
}

function hideFace(face) {
  face.classList.add("fadeOut");
  setTimeout(function () {
    face.classList.remove("fadeIn");
    face.classList.remove("fadeOut"); // Add this line to remove "fadeOut" class
    face.classList.add("hidden");
  }, 900);
}

function rollDice(diceElement) {
  diceElement.classList.add("roll");
}

function stopRoll(diceElement) {
  diceElement.classList.remove("roll");
}

function generateNum() {
  return Math.floor(Math.random() * 6) + 1;
}

function updateDice(diceElement, currentFace, player) {
  hideFace(currentFace);
  rollDice(diceElement);

  const num1 = generateNum();

  // Ensure a 1% probability of both dice being the same number
  const num2 = Math.random() < 0.01 ? num1 : generateNum();

  switch (num1) {
    case 1:
      currentFace = diceElement.querySelector(".dot");
      break;
    case 2:
      currentFace = diceElement.querySelector(".two");
      break;
    case 3:
      currentFace = diceElement.querySelector(".three");
      break;
    case 4:
      currentFace = diceElement.querySelector(".four");
      break;
    case 5:
      currentFace = diceElement.querySelector(".five");
      break;
    case 6:
      currentFace = diceElement.querySelector(".six");
      break;
  }

  showFace(currentFace);
  setTimeout(function () {
    stopRoll(diceElement);
    updateScore(player, num1 + num2);
    isRolling = false; // Set rolling to false to allow the button click for the next turn
  }, 3000);

  return currentFace;
}

function updateScore(player, num) {
  player.score += num;
  document.getElementById(`score${player.number}`).innerText = player.score;
}

// Initialize currentFace variables
let currentFace1 = dice1.querySelector(".six");
let currentFace2 = dice2.querySelector(".six");

function quitPage() {
  window.location.href = "https://youtu.be/dXEVs32KHuo?si=7ygkSLpMHe3CbF3j";
}

function goBack() {
  window.location.href = "/html/rules.html";
}
