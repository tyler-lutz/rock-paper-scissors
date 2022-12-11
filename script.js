let playerScore = 0;
let computerScore = 0;
let round = 0;

const choices = document.querySelectorAll('.btn');
const resultsElement = document.querySelector('.results');
const roundElement = document.querySelector('.round');
const scoresElement = document.querySelector('.scores');
const playerScoreText = document.querySelector('.playerScore');
const computerScoreText = document.querySelector('.computerScore');

choices.forEach((choice) => {
    choice.addEventListener('click', e => playRound(e));
})

function updateScores(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection === computerSelection):
            resultsElement.textContent = `Tie! You both chose ${playerSelection}`;
            break;
        case (playerSelection === 'rock' && computerSelection === 'scissors'):
        case (playerSelection === 'paper' && computerSelection === 'rock'):
        case (playerSelection === 'scissors' && computerSelection === 'paper'):
            resultsElement.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            playerScore++;
            break;
        default:
            resultsElement.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++;
            break;
    }

    roundElement.textContent = `Round: ${round}`;
    playerScoreText.textContent = `Player: ${playerScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;
}

function endGame() {
    if (playerScore === 5 || computerScore === 5 ) {
        choices.forEach((choice) => {
            choice.setAttribute('disabled', '');
        })

        if (playerScore > computerScore) {
            resultsElement.textContent = 'GAME OVER! YOU WIN!'
        } else {
            resultsElement.textContent = 'GAME OVER! YOU LOSE!'
        }
    }
}

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors'; 
    }
}

function playRound(e) {
    let playerSelection;

    if (e.target.classList.contains('rock-btn')) {
        playerSelection = 'rock';
    } else if (e.target.classList.contains('paper-btn')) {
        playerSelection = 'paper';
    } else {
        playerSelection = 'scissors';
    }
    round++;
    updateScores(playerSelection, getComputerChoice());
    endGame();
}