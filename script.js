const Score1 = document.querySelector('#playerRecentScore1');
const Score2 = document.querySelector('#playerRecentScore2');
const dice = document.querySelector('#dice');
const rollDiceBtn = document.querySelector('#rollDiceBtn');
const newGameBtn = document.querySelector('#newGameBtn');
const currentScore1 = document.getElementById('playerCurrentScore1');
const currentScore2 = document.getElementById('playerCurrentScore2');

// Starting conditions
Score1.textContent = 0;
Score2.textContent = 0;
dice.classList.add('hidden');
let currentScore = 0;
let activePlayer = 1;

// Switch player function
const switchPlayer = function () {
    document.getElementById(`playerCurrentScore${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 1 ? 2 : 1;
    Score1.classList.toggle('player--active');
    Score2.classList.toggle('player--active');
}

// Roll dice button event listener
rollDiceBtn.addEventListener('click', function () {
    // Generate a dice roll
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    // Display dice
    dice.classList.remove('hidden');
    dice.src = `images/dice-${diceNumber}.png`;

    // Check if diceNumber != 1, add the dice number to the current score
    if (diceNumber !== 1) {
        // Add the dice to the current score
        currentScore += diceNumber;
        document.getElementById(`playerCurrentScore${activePlayer}`).textContent = currentScore;
    } else {
        // If diceNumber is 1, reset current score to 0 and switch player
        switchPlayer();
    }
});


const holdBtn = document.querySelector('#holdBtn');

// Hold button event listener
holdBtn.addEventListener('click', function () {
    // Your existing logic to calculate recent score and switch player goes here

    // Update the recent score for the active player
    let recentScore = parseInt(document.getElementById(`playerRecentScore${activePlayer}`).textContent);
    recentScore += currentScore;
    document.getElementById(`playerRecentScore${activePlayer}`).textContent = recentScore;

    // Reset the current score to zero
    currentScore = 0;

    // Update the current score display to zero
    document.getElementById(`playerCurrentScore${activePlayer}`).textContent = currentScore;

    // Check if player score is >= 20
    if (recentScore >= 20) {
        // Remove original gradient background class

        document.getElementById('game-container').classList.remove('bg-gradient-to-br', 'from-pink-500', 'to-gray-200');

        // Add new background color class
        document.getElementById('game-container').classList.add('bg-gradient-custom');

        // Change background color of body
        document.getElementById('game-container').classList.remove('bg-gradient-to-br', 'from-blue-500', 'to-purple-700');
        document.body.classList.add('bg-gradient-winner'); // Corrected to use classList.add method

        // Display congratulatory message
        const congratulationsMessage = document.createElement('div');
        congratulationsMessage.textContent = 'Congratulations 🎉';
        congratulationsMessage.classList.add('congratulations-message');
        document.body.appendChild(congratulationsMessage);

        // Disable rollDiceBtn and holdBtn
        rollDiceBtn.disabled = true;
        holdBtn.disabled = true;
    } else {
        // Switch to the next player
        switchPlayer();
    }
});

newGameBtn.addEventListener('click', function () {
    Score1.textContent = 0;
    Score2.textContent = 0;
    dice.classList.add('hidden');
    currentScore1.textContent = 0;
    currentScore2.textContent = 0;
    document.getElementById('game-container').classList.add('bg-gradient-to-br', 'from-pink-500', 'to-gray-200');
    document.getElementById('game-container').classList.remove('bg-gradient-custom');
    document.getElementById('game-container').classList.add('bg-gradient-to-br', 'from-blue-500', 'to-purple-700');
    document.body.classList.remove('bg-gradient-winner');
    const congratulationsMessage = document.querySelector('.congratulations-message');
    if (congratulationsMessage) {
        congratulationsMessage.remove();
    }
    rollDiceBtn.disabled = false;
    holdBtn.disabled = false;;
})