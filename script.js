//Computer Choice
//
// Logic to get computer choice
    //function to randomly return "rock" "paper" "scissors"
function getComputerChoice(){
    let choice = Math.floor((Math.random() * 3) + 1);

    if (choice === 1){
        return "rock"
    }
    if  (choice === 2){
        return "paper"
    }
    if (choice === 3){
        return "scissors"
    }
}




// Logic to get Human choice
function getHumanChoice(){
    let chosen = prompt("Choose Rock, Paper or Scissors");
    let human = chosen.toLowerCase();
    if (human === "rock"){
        return "rock"
    }
    if (human === "paper"){
        return "paper"
    }
    if (human === "scissors")
        return "scissors"
}



// Logic for a single round of gameplay

    //All player and comp choice combinations and win/lose outcome.
    //score increment after win or lose and no increment on draw.
function playRound(humanChoice, computerChoice){
 if(humanChoice == computerChoice){
        return "It's a tie";
    }

   else if(
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper') ||
        (humanChoice == 'rock' && computerChoice == 'scissors')
   ){
    return "You Win!";
   }

   else{return"Computer Wins!"}
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const result = playRound(humanSelection,computerSelection)
     console.log(result)

   




function playGame(){
playRound(humanSelection, computerSelection); 


// Logic of the player scores
        let playerScore = 0;
        let botScore = 0;

    if (result === "You Win!"){
    playerScore++
}
    if(result === "Computer Wins!"){
    botScore++
    }

console.log("You selected: " + humanSelection + "   " + "Computer selected: " + computerSelection)

console.log("Your score = " +playerScore+ " Computer = " +botScore)

}

playGame()