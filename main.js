let button = document.getElementsByTagName('button');
for (i = 0; i < button.length; i++) {
    button[i].setAttribute('onClick', `clickFunc(${i+1})`)
}


let choices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let winsConditions = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9], 
    [1, 5, 9], 
    [3, 5, 7], 
    [1, 4, 7], 
    [2, 5, 8], 
    [3, 6, 9]
];


let player1Choices = [];
let player2Choices = [];

// function to compare to win condition

function checkWin(playerChoices) {
   for (let condition of winsConditions) {
    if (condition.every(position => playerChoices.includes(position))) {
        return true;
    } else {
        return false;
    }
   }
}

function endGame() {
    player1Choices = [];
    player2Choices = [];
    console.log("ready for new game");
}

let currentPlayer = 'player1';
// adding selected inputs to the array for inputs
function clickFunc(id) {
    if (currentPlayer === 'player1' && !(player1Choices.includes(id))) {
        player1Choices.push(id);
        console.log('Player 1 Chooses' + `${player1Choices}`);
        console.log("Player 2 Turn");   
        if (checkWin(player1Choices)) {
            console.log('player 1 wins');
            console.log('Game finished');
            endGame();
        }

        currentPlayer = 'player2';
    } else if (currentPlayer === 'player2' && !(player2Choices.includes(id))) {
        player2Choices.push(id);
        console.log('Player 2 Chooses' + `${player2Choices}`);
        console.log("Player 1 Turn");
        if (checkWin(player2Choices)) {
            console.log('player 2 wins');
            console.log('Game finished');
            endGame();
        }

        currentPlayer = 'player1';
    }

}
