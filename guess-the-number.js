// Your code goes in this file.
function play() {
    getName()
    playGame()
}

function getName() {
    let name = prompt('What is your name?')
    alert('Hi ' + name + ' You are playing guess the number. You need to guess a number between 1 and 20 (inclusive). You have 3 tries to get it right.')
}

function playGame() {
    let playAgain = 'yes'

    while (playAgain == 'yes') {
        const randomNum = Math.floor(Math.random() * 20) + 1
        alert(randomNum)

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
        //plays the game again
        playAgain = prompt('Would you like to play again?')
    }
}
