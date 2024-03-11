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

function updatePlayerNames() {
  document.getElementById("name1").innerText = player1.name;
  document.getElementById("name2").innerText = player2.name;
}

updatePlayerNames();

let turns = 0;
let isRolling = false;

document.querySelector("button").addEventListener("click", function () {
  if (!isRolling && turns < 6) {
    isRolling = true;
    currentFace1 = updateDice(dice1, currentFace1, player1);
    currentFace2 = updateDice(dice2, currentFace2, player2);
    turns++;
  } else if (!isRolling) {
    endGame();
  }
});

function endGame() {
  let winner;
  if (player1.score > player2.score) {
    winner = player1;
  } else if (player2.score > player1.score) {
    winner = player2;
  }

  const resultElement = document.getElementById("result");
  if (winner) {
    resultElement.innerText = `Congratulations, ${winner.name}! You have won!`;
  } else {
    resultElement.innerText = "What a tie!";
  }

  let countdown = 10;
  const countdownElement = document.getElementById("countdown");

  const countdownInterval = setInterval(() => {
    countdownElement.innerText = `Restarting in ${countdown} seconds...`;
    countdown--;

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
    face.classList.remove("fadeOut");
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
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log("Generated number:", randomNumber);
  return randomNumber;
}

function updateDice(diceElement, currentFace, player) {
  hideFace(currentFace);
  rollDice(diceElement);

  const num1 = generateNum();
  const num2 = generateNum();

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
    isRolling = false;
  }, 3000);

  return currentFace;
}

function updateScore(player, num) {
  player.score += num;
  document.getElementById(`score${player.number}`).innerText = player.score;
}

let currentFace1 = dice1.querySelector(".six");
let currentFace2 = dice2.querySelector(".six");

function quitPage() {
  window.location.href = "https://youtu.be/dXEVs32KHuo?si=7ygkSLpMHe3CbF3j";
}

function goBack() {
  window.location.href = "/html/rules.html";
}
