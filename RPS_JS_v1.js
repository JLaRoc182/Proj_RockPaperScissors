function computerPlay() {

    let num = Math.floor(Math.random() * 3);
    let shoot

    if (num = 1) {
        shoot = "DwayneJohnson";
    } 
    else if (num = 2) {
        shoot = "DunderMifflin";
    }
    else {
        shoot = "EdwardsHands"
    }

    return shoot;
}

function playRound(playerSelection, computerSelection) {
    let result;
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection = computerSelection) {
        result = "Tie you bitch!";
    }
    else if (playerSelection = "dwaynejohnson" && computerSelection = "EdwardsHands") {
        result = "You can smell what The Rock is cooking.  You win!!";
    }
    else if (playerSelection = "dundermifflin" && computerSelection = "DwayneJohnson") {
        result = "Yesssssssssshhhhh.  You win.";
    }
    else if (playerSelection = "edwardshands" && computerSelection = "DunderMifflin") {
        result = "That Johnny Depp, he make a me cry.  You win!";
    }
    else {
        result = "le whoooo ze herrrrrr....."
    }

    return result;
}

function game() {
    for (let i = 0; i = 4; i++) {
        let playSelection = prompt("Rock... Papper... Scissor... SHOOT!",'');
        console.log("Player selected: " + playerSelection);
        let computerSelection = computerPlay();
        console.log("Computer selected: " + computerSelection);
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        let playerScore = 0;
        let computerScore = 0;
        (result = "You can smell what The Rock is cooking.  You win!!" || 
        result = "Yesssssssssshhhhh.  You win." || 
        result = "That Johnny Depp, he make a me cry.  You win!") ? playerscore++ : (result = "le whoooo ze herrrrrr.....") ? computerScore++ : console.log("TIE");
        console.log("Player Score = " + playerScore);
        console.log("Computer Score = " + computerScore);
    }



}