
// Function to submit player names
// we are using local storage as we are going to be calling these names later in another file
function submitPlayer(playerNumber) {
  const playerNameInput = document.getElementById(`player${playerNumber}`);
  const playerName = playerNameInput ? playerNameInput.value.trim() : '';

  if (playerNumber === 1) {
    localStorage.setItem('player1Name', playerName);
  } else if (playerNumber === 2) {
    localStorage.setItem('player2Name', playerName);
  }

  // Check if both names are entered
  const bothNamesEntered = localStorage.getItem('player1Name') && localStorage.getItem('player2Name');
  document.getElementById('continue').disabled = !bothNamesEntered;
}

function continueGame() {
  // Check if both names are entered before proceeding
  const player1Name = localStorage.getItem('player1Name');
  const player2Name = localStorage.getItem('player2Name');

  if (player1Name && player2Name) {
    console.log('Moving on to the Rules!');
    window.location.href = '/html/rules.html';
  } else {
    alert('Please enter both player names before continuing the game.');
  }
}

function quitGame() {
  // Clear stored player names in local storage to stop errors
  localStorage.removeItem('player1Name');
  localStorage.removeItem('player2Name');

  // Redirect to another HTML page when the quit button is clicked
  window.location.href = '/html/quit.html';
}

// Reset stored player names when the page is swiped in a slick manner
window.addEventListener('pageshow', function (event) {
  localStorage.removeItem('player1Name');
  localStorage.removeItem('player2Name');
});
