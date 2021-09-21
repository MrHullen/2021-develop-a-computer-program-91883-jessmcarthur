// Your code goes in this file.
//creates function to start the game
function play() {
    getName()
    playGame()
}
//creates function to get the users name
function getName() {
    let name = prompt('What is your name?')
    alert('Hi ' + name + '. You are playing guess the number. You need to guess a number between 1 and 20 (inclusive). You have 3 tries to get it right.')
}
//creates a function to play the game
function playGame() {
    let playAgain = 'yes'
    //creates a while loop to play the game again
    while (playAgain == 'yes') {
        //creates a random number
        const randomNum = Math.floor(Math.random() * 20) + 1

        //creates 2 variables
        let maxTries = 3
        let counter = 0

        //while loop  plays the game
        while (counter != maxTries) {
            counter += 1
            let guess = prompt('Guess a number between 1 and 20')
            if (guess != randomNum) {
                alert('Incorrect!')
            } else {
                counter = maxTries
                alert('Correct!')
            }
        }
        //asks the user if they want to play again
        playAgain = prompt('Would you like to play again?')
    }
}
