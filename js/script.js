// Function to submit player names
// we are using local storage as we are goung to be calling this names later in another file 
function submitPlayer(playerNumber) {
  const playerName = document
    .getElementById(`player${playerNumber}`)
    .value.trim();

  if (playerNumber === 1) {
    localStorage.setItem("player1Name", playerName);
  } else if (playerNumber === 2) {
    localStorage.setItem("player2Name", playerName);
  }

  // Check if both names are entered
  if (
    localStorage.getItem("player1Name") &&
    localStorage.getItem("player2Name")
  ) {
    document.getElementById("continue").disabled = false;
  }
}

// Function to begin the game
function continueGame() {
  // Check if both names are entered before proceeding
  const player1Name = localStorage.getItem("player1Name");
  const player2Name = localStorage.getItem("player2Name");

  if (player1Name && player2Name) {
    console.log("Unto the Rules!");
    window.location.href = "/html/rules.html";
  } else {
    alert("Please enter both player names before continuing the game.");
  }
}
