// Your code goes in this file.
function guessNumber(){
    const randomNum = Math.floor(Math.random() * 20) + 1

    alert ('You are playing guess the number. You have to pick a number between 1 and 20 (inclusive). You have 3 guesses to get it right!')
    let newName = prompt ('What is your name?')
    let number =''
    let guess = prompt ('Hi ' + newName + ' ,enter a number between 1 and 20')

    while(number !== randomNum) {
        number = prompt('Guess a number from 1 to 20')
    }
    if(number = randomNum) {
            alert('You guessed the correct number')
    }
}
guessNumber();

