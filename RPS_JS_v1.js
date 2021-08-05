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
    }
    else if (playerSelection == "dundermifflin" && computerSelection == "dwaynejohnson") {
        result = "Yesssssssssshhhhh.  You win.";
    }
    else if (playerSelection == "edwardshands" && computerSelection == "dundermifflin") {
        result = "That Johnny Depp, he make a me cry.  You win!";
    }
    else {
        result = "le whoooo ze herrrrrr....."
    } 

    return result;
}


let playerScore = 0;
let computerScore = 0;

function game() {
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



}