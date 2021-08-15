
let playerScore = 0;
let computerScore = 0;
let gameNum = 0;

function computerPlay() {

    let num = Math.floor(Math.random() * 3);
    let shoot

    if (num == 0) {
        shoot = "dwaynejohnson";
    } 
    else if (num == 1) {
        shoot = "dundermifflin";
    }
    else {
        shoot = "edwardshands"
    }

    return shoot;
}

function playRound(playerSelection, computerSelection) {
    let result;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        result = "Tie you bitch!";
    }
    else if (playerSelection == "dwaynejohnson" && computerSelection == "edwardshands") {
        result = "You can smell what The Rock is cooking.  You win!!";
        playerScore = ++playerScore;
    }
    else if (playerSelection == "dundermifflin" && computerSelection == "dwaynejohnson") {
        result = "Yesssssssssshhhhh.  You win.";
        playerScore = ++playerScore;
    }
    else if (playerSelection == "edwardshands" && computerSelection == "dundermifflin") {
        result = "That Johnny Depp, he make a me cry.  You win!";
        playerScore = ++playerScore;
    }
    else {
        result = "le whoooo ze herrrrrr....."
        computerScore = ++computerScore;
    } 

    return result;
}




/*  function game() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        let playerSelection = prompt("DwayneJohnson... DunderMifflin... EdwardsHands... SHOOT!",'');
        console.log("Player selected: " + playerSelection);
        let computerSelection = computerPlay();
        console.log("Computer selected: " + computerSelection);
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        (result == "You can smell what The Rock is cooking.  You win!!" || 
        result == "Yesssssssssshhhhh.  You win." || 
        result == "That Johnny Depp, he make a me cry.  You win!") ? playerScore++ :
        (result == "le whoooo ze herrrrrr.....") ? computerScore++ : console.log("TIE");
        console.log("Player Score = " + playerScore);
        console.log("Computer Score = " + computerScore);
        if (i == 4) {
            if (playerScore == computerScore) { 
                console.log("TIE GAME");
            }
            else if (playerScore > computerScore) {
                console.log("You're a mother fuckin WINNER!!!");
            }
            else {
                console.log("GAME OVER.  YOU LOSE.")
            }
        }
        else {

        }
    }
}  */



/* Rock Paper Scissors UI */
const container = document.querySelector('#container'); 

const btn1 = document.querySelector('#btn1');
btn1.addEventListener("click", () => {
    alert("You chose Rock");
    let playerSelection = "dwaynejohnson";
    let computerSelection = computerPlay();
    console.log("Player selected: " + playerSelection);
    console.log("Computer selected: " + computerSelection);
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    const div = document.createElement('div');
    div.textContent = "Player selected: " + playerSelection + ". Computer selected: " + computerSelection + ". " + result + ". Player score = " + playerScore + ". Computer Score = " + computerScore;
    container.appendChild(div); 
    gameNum = ++gameNum;
    roundTally();
});
 
const btn2 = document.querySelector('#btn2');
btn2.addEventListener("click", () => {
    alert("You chose Paper");
    let playerSelection = "dundermifflin";
    let computerSelection = computerPlay();
    console.log("Player selected: " + playerSelection);
    console.log("Computer selected: " + computerSelection);
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    const div = document.createElement('div');
    div.textContent = "Player selected: " + playerSelection + ". Computer selected: " + computerSelection + ". " + result + ". Player score = " + playerScore + ". Computer Score = " + computerScore;
    container.appendChild(div); 
    gameNum = ++gameNum;
    roundTally();
});
 
const btn3 = document.querySelector('#btn3');
btn3.addEventListener("click", () => {
    alert("You chose Scissors");
    let playerSelection = "edwardshands";
    let computerSelection = computerPlay();
    console.log("Player selected: " + playerSelection);
    console.log("Computer selected: " + computerSelection);
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    const div = document.createElement('div');
    div.textContent = "Player selected: " + playerSelection + ". Computer selected: " + computerSelection + ". " + result + ". Player score = " + playerScore + ". Computer Score = " + computerScore;
    container.appendChild(div); 
    gameNum = ++gameNum;
    roundTally();
});

function roundTally() {
    if (playerScore >= 5 || computerScore >= 5) {
            if (playerScore == computerScore) { 
                console.log("FIRST TO FIVE RESULT: Tie");
                const div = document.createElement('div');
                div.textContent = "FIRST TO FIVE RESULT: Tie";
                container.appendChild(div); 
            }
            else if (playerScore > computerScore) {
                console.log("FIRST TO FIVE RESULT: You're a mother fuckin WINNER!!!");
                const div = document.createElement('div');
                div.textContent = "FIRST TO FIVE RESULT: You're a mother fuckin WINNER!!!";
                container.appendChild(div); 
            }
            else {
                console.log("FIRST TO FIVE RESULT:  You lose.");
                const div = document.createElement('div');
                div.textContent = "FIRST TO FIVE RESULT:  You lose.";
                container.appendChild(div); 
            }
            gameNum = 0;
            playerScore = 0;
            computerScore = 0;
        }
        else {
            console.log("Play again");
            const div = document.createElement('div');
            div.textContent = "Play again";
            container.appendChild(div); 
        }

    }
