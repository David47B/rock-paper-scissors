const computerPlay = () => {
    // Array containing rock paper scissors choices
    const rpsArray = ["Rock", "Paper", "Scissors"]
    const randomiser = Math.floor(Math.random() * rpsArray.length)
    return rpsArray[randomiser]
}