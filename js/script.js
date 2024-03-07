  // Variables to store player names
  let player1Name = '';
  let player2Name = '';

  // Function to submit player names
  function submitPlayer(playerNumber) {
    const playerName = document.getElementById(`player${playerNumber}`).value.trim();

    if (playerNumber === 1) {
      player1Name = playerName;
    } else if (playerNumber === 2) {
      player2Name = playerName;
    }

    // Check if both names are entered
    if (player1Name !== '' && player2Name !== '') {
      document.getElementById('begin').disabled = false;
    }
  }

  // Function to begin the game
  function beginGame() {
    // Check if both names are entered before proceeding
    if (player1Name !== '' && player2Name !== '') {
      // Redirect to the next page or perform other actions
      // Example: window.location.href = 'next_page.html';
      console.log('Game is beginning!');
    } else {
      alert('Please enter both player names before beginning the game.');
    }
  }