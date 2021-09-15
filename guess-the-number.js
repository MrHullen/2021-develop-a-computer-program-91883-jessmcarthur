// Your code goes in this file.
function guessNumber() {
    let randomNum = Math.floor(Math.random() * 20) + 1
    alert(randomNum)

    let maxTries = 3
    let counter = 0

    alert('You are playing guess the number. You have to pick a number between 1 and 20 (inclusive). You have 3 guesses to get it right!')
    let name = prompt('What is your name?')

    while (counter != maxTries) {
        counter += 1
        let guess = prompt('Guess a number between 1 and 20')

        if (guess != randomNum) {
            alert('Incorrect!')
        } else {
            (guess == randomNum)
            alert('Correct!')
        }
    }
}