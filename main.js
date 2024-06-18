//  assigning everything id need in JS
let button = document.getElementsByTagName('button');
let p = document.getElementById('winner');
// create ids & functions without more work in HTML
for (i = 0; i < button.length; i++) {
    button[i].setAttribute('onClick', `clickFunc(${i+1})`);
    button[i].setAttribute('id', `${i+1}`);
}

// logic for the game
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


// players info
let player1name = document.getElementById('player1name');
let player2name = document.getElementById('player2name');
let div = document.getElementById('main');
let restart = document.getElementById('restart');
div.style.display = 'none';
restart.style.display = 'none'
let player1Choices = [];
let player2Choices = [];
let player1;
let player2;
let currentPlayer = 'player1';

// let players use their names, make the game visible once name is selected
function assign() {
    player1 = player1name.value;
    player2 = player2name.value;
    div.style.display = 'block'
    restart.style.display = 'block'
    p.textContent = `${player1}'s turn`
}


// check if anyone won
function checkWin(playerChoices) {
   for (let condition of winsConditions) {
    if (condition.every(position => playerChoices.includes(position))) {
        return true;
    } 
    } return false;
   }

// reset everything for a new game
function endGame() {
    player1Choices = [];
    player2Choices = [];
   div.style.display = 'none';
    for (let i = 0; i < button.length; i++) {
        button[i].textContent = '';
    }
}


// adding selected inputs to the array for inputs
function clickFunc(id) {
    // select all the buttons using their id
    const button = document.getElementById(`${id}`)
    if (currentPlayer === 'player1' && !(player1Choices.includes(id))) {
        player1Choices.push(id);
        button.textContent = 'X';
        if (checkWin(player1Choices)) {
            endGame();
            p.textContent = `${player1} Wins!`
        } else {
        currentPlayer = 'player2';
        p.textContent = `${player2}'s turn`
        }
    } else if (currentPlayer === 'player2' && !(player2Choices.includes(id))) {
        player2Choices.push(id);
        button.textContent = 'O';
        if (checkWin(player2Choices)) {
            endGame();
            p.textContent = `${player2} Wins!`
        } else {
        currentPlayer = 'player1';
        p.textContent = `${player1}'s turn`
        }
    }

}
