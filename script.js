let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors'; 
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        roundWinner = 'player';
        playerScore++;
    } else {
        roundWinner = 'computer';
        computerScore++;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper, Scissors').toLowerCase();
        let computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);
        console.log(roundWinner);
    }
}

game();