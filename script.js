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


// Logic for a single round

    //All player and comp choice combinations and win/lose outcome.
function playRound(humanChoice, computerChoice){

    if(humanChoice === computerChoice){
        return "It's a tie";
    }

   else if(
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper') ||
        (humanChoice == 'rock' && computerChoice == 'scissors')
   ){
    return "You Win!";
   }

   else{return"Computer Wins"}
            
}

//Global variables
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


    
       


//Logic for a single game
function playGame(){
    for( let round = 0; round <=4; round++){
playRound(humanSelection, computerSelection); 

}
// Logic of the player scores
        let playerScore = 0;
        let botScore = 0;
    
    
const result = playRound(humanSelection)
    console.log(result)

if (result === "You Win!"){
    playerScore++
}
if(result === "Computer Wins"){
    botScore++
}
console.log("Score - " + "You: " + playerScore + "   Computer score: " + botScore)
}




playGame()

