function play(playerChoice) {
    var choices = ['rock', 'paper', 'scissors']
    var randI = Math.floor(Math.random() * choices.length)
    var compChoice = choices[randI]
    alert('YOU CHOSE: ' +playerChoice+"  THE COMPUTER CHOSE: " + compChoice)
    
    if(compChoice == playerChoice){
        return alert('TIE GAME!')
    }

    // ROCK compChoice
    if (compChoice === "rock") {
        if (playerChoice == "scissors") { alert('You lost.')}
        else if (playerChoice == 'paper') { alert('You WON!')}
        
    }

    // PAPER compChoice
    if (compChoice == "paper") {
        if (playerChoice == 'scissors') { alert('You WON!') }
        else if (playerChoice == 'paper') { alert('its a tie') }
        else if (playerChoice == 'rock') { alert('You lost.') }

    }
    // SCISSORS compChoice
    if (compChoice == 'scissors') {
        if (playerChoice == 'scissors') { alert('its a tie') }
        else if (playerChoice == 'paper') { alert('You lost.') }
        else if (playerChoice == 'rock') { alert('You WON!') }
    }

}






function runCode(x) {
    var choices = ['rock', 'paper', 'scissors']
    var randI = Math.floor(Math.random() * choices.length)
    var compChoice = choices[randI]
    document.getElementById('banana').innerHTML = compChoice;
}

