let playerScore = null
let computerScore = null

const computerPlay = () => {
    // Array containing rock paper scissors choices
    const rpsArray = ["rock", "paper", "scissors"]
    const randomiser = Math.floor(Math.random() * rpsArray.length)
    return rpsArray[randomiser]
}

const playRound = (computerSelection, playerSelection) => {
    computerSelection = computerPlay()
    const playerInput = prompt('Choose either Rock, Paper or Scissors - Good Luck!', playerSelection).toLowerCase()
    console.log(`Player: ${playerInput} | Computer: ${computerSelection}`)
    let result = null
    
    // Checks against Rock
    if(playerInput === "rock" && computerSelection === 'scissors') {
        result = 'You win! Rock beats Scissors'
        playerScore += 1
    } else if(playerInput === "rock" && computerSelection === 'paper') {
        result = 'You lose! Paper beats Rock'
        computerScore += 1
    } else if(playerInput === "rock" && computerSelection === 'rock') {
        result = 'It\'s a draw!'
    }

    // Checks against Paper
    if(playerInput === "paper" && computerSelection === 'rock') {
        result = 'You win! Paper beats Rock'
        playerScore += 1
    } else if(playerInput === "paper" && computerSelection === 'scissors') {
        result = 'You lose! Scissors beats Paper'
        computerScore += 1
    } else if(playerInput === "paper" && computerSelection === 'paper') {
        result = 'It\'s a draw!'
    }

    // Checks against Scissors
    if(playerInput === "scissors" && computerSelection === 'paper') {
        result = 'You win! Scissors beats Paper'
        playerScore += 1
    } else if(playerInput === "scissors" && computerSelection === 'rock') {
        result = 'You lose! Rock beats Scissors'
        computerScore += 1
    } else if(playerInput === "scissors" && computerSelection === 'scissors') {
        result = 'It\'s a draw!'
    }

    return console.log(result)
}

const game = () => {
    let count = 5
    while(count > 0) {
        playRound()
        count--
    }
    if(playerScore > computerScore) {
        console.log('Congratulations - You win!!')
    } else if(playerScore > computerScore) {
        console.log('Ohh no you lose! The Computer wins! \n Better luck next time 🙂')
    } else {
        console.log('It was a draw!')
    }
}