// Your code goes in this file.
alert ('You are playing guess the number. You have to pick a number between 1 and 20 (inclusive). You have 3 guesses to get it right!')
let newName = prompt ('What is your name?')

const random = Math.floor(Math.random() * 20) + 1

let newNum = prompt ('Hi ' + newName + ' Guess a number from 1 to 20')

while(newNum !== random) {
    let newNum = prompt ('Guess a number from 1 to 20')
}

if(number == random) {
    alert('Correct! Would you like to play again?')
    ''
}