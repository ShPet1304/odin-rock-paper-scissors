
//Global Score Variables
let playerScore = 0;
let computerScore = 0;

//UI Logic
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let press ;

rock.addEventListener('click',choseRock)

function choseRock(){
    press = "rock";
    playRound();
  
}

paper.addEventListener('click',chosePaper)

function chosePaper(){
    press = "paper";
    playRound();
  
}
scissors.addEventListener('click',choseScissors)

function choseScissors(){
    press = "scissors";
    playRound();
  
}


// Logic for a single round of gameplay
function playRound(){
    //Function to generate computer choices
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

    //Function to select player choice
function getHumanChoice(){
    return press;
}

    //Function to compare choices and determine a round winner
function determineWinner(humanChoice, computerChoice){
 if(humanChoice == computerChoice){
        return "It's a tie";
    }

   else if(
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper') ||
        (humanChoice == 'rock' && computerChoice == 'scissors')
   ){
    return "You Win This Round!";
   }

   else{return"Computer Wins This Round!"}

   
}

//Global Variables
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const result = determineWinner(humanSelection,computerSelection)

//Score increments depending on round winner
    if (result === "You Win This Round!"){
    playerScore++
}
    if(result === "Computer Wins This Round!"){
    computerScore++
}


//Round Result output
let results = document.querySelector('.results')
let you = document.querySelector('.playerChose')
let comp = document.querySelector('.computerChose')
let playScore = document.querySelector('.playerScore')
let compScore = document.querySelector('.computerScore')

results.textContent = result;
you.textContent =" " + humanSelection;
comp.textContent =" " + computerSelection;
playScore.textContent= " " +playerScore;
compScore.textContent= " " +computerScore;
return;
}



//Function for a full game with 5 rounds
function playGame(){
  //  for (let round = 1; round <=5; round++){
    //    playRound()};
//Game over message at the end of 5 rounds with winner declared
        console.log("Game Over")

    if (playerScore > computerScore){
        console.log("You Win!!!😁") 
    }
    else if(computerScore > playerScore){
        console.log("You lose 🙁")}
    else {console.log("It's a tie 😲")}
    
    
}



