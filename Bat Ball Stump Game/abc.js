const bat = document.querySelector('#bat');
const ball = document.querySelector('#ball');
const stump = document.querySelector('#stump');
const statment = document.querySelector('#statment');
const playerScoreEl = document.querySelector('#player-score');
const computerScoreEl = document.querySelector('#computer-score');
const tieScoreEl = document.querySelector('#tie-score');

// Initialize scores from localStorage or set to 0
let playerScore = parseInt(localStorage.getItem('playerScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;
let tieScore = parseInt(localStorage.getItem('tieScore')) || 0;

// Update display with loaded scores
playerScoreEl.textContent = playerScore;
computerScoreEl.textContent = computerScore;
tieScoreEl.textContent = tieScore;

bat.addEventListener("click", () => playRound('Bat'));
ball.addEventListener("click", () => playRound('Ball'));
stump.addEventListener("click", () => playRound('Stump'));

function computerChoice() {
    const choices = ['Bat', 'Ball', 'Stump'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(user) {
    const computer = computerChoice();
    let result;
    
    // Determine the winner
    if (user === computer) {
        result = "Match is tie";
        tieScore++;
    } else if (
        (user === "Bat" && computer === "Ball") ||
        (user === "Ball" && computer === "Stump") ||
        (user === "Stump" && computer === "Bat")) {
        result = "You Win";
        playerScore++;
    } else {
        result = "You Lose";
        computerScore++;
    }
    
    // Update scores in localStorage
    localStorage.setItem('playerScore', playerScore);
    localStorage.setItem('computerScore', computerScore);
    localStorage.setItem('tieScore', tieScore);
    
    // Update display
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    tieScoreEl.textContent = tieScore;
    
    // Display result with appropriate styling
    statment.innerHTML = `
        <span class="${result.toLowerCase().replace(' ', '-')}">${result}</span>
        \nYou chose <span class="highlight">${user}</span> 
        and computer chose <span class="highlight">${computer}</span>
    `;
    
    // Add visual feedback
    highlightResult(result);
}

function highlightResult(result) {
    statment.className = '';
    setTimeout(() => {
        statment.classList.add(result.toLowerCase().replace(' ', '-'));
    }, 10);
}

// Clear scores if needed (you can call this function when you want to reset)
function resetScores() {
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;
    localStorage.setItem('playerScore', playerScore);
    localStorage.setItem('computerScore', computerScore);
    localStorage.setItem('tieScore', tieScore);
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    tieScoreEl.textContent = tieScore;
}

// Add this button to your HTML if you want a reset button:
// <button onclick="resetScores()">Reset Scores</button>