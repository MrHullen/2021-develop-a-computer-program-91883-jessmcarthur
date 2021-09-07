// Your code goes in this file.
function guessNumber(){
const randomNum = Math.floor(Math.random() * 20) + 1

alert ('You are playing guess the number. You have to pick a number between 1 and 20 (inclusive). You have 3 guesses to get it right!')
let newName = prompt ('What is your name?')

let guess = prompt ('Hi ' + newName + ' Enter a number between 1 and 20')

    if(guess < randomNum) {
        alert('Your guess is too low')
    } else if(guess > randomNum) {
        alert('Your guess is too high')
    } else if(guess==randomNum) {
        alert('You guessed correct!')
    }
}
