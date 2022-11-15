
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
        if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb')
            return userInput;
        else
            console.log('Error!');
    };

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    switch(number) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
        default: return 'invalid choice';
    }
}

function determineWinner(userChoice, computerChoice) {
    if(userChoice === computerChoice)
        return console.log('It is a tie!');
    if(userChoice === 'rock')
            return computerChoice === 'scissors' ? console.log('You win!') : console.log('The computer wins!');
    else if(userChoice === 'paper')
            return computerChoice === 'rock' ? console.log('You win!') : console.log('The computer wins!');
    else if(userChoice === 'scissors')
            return computerChoice === 'paper' ? console.log('You win!') : console.log('The computer wins!');
    else if(userChoice === 'bomb')
        return console.log('You win!');
    }

function playGame() {
    let userChoice = getUserChoice('bomb');
    console.log(`You chose: ${userChoice}`);
    let computerChoice = getComputerChoice();
    console.log(`The computer chose: ${computerChoice}`);
    let winner = determineWinner(userChoice, computerChoice);
}

playGame();