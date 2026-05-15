
const cells = document.querySelectorAll(".cell");
const resetBtn = document.querySelector(".reset-btn");

let currentPlayer = "X";
let gameActive = true;
let count = 0;


const winPatterns = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];


cells.forEach((cell, index) => {
cell.addEventListener("click", function() {

if (cell.textContent !== "" || !gameActive) {
return;
}

cell.textContent = currentPlayer;
count++;

checkWinner();


if (gameActive) {
currentPlayer = currentPlayer === "X" ? "O" : "X";
}

});
});


function checkWinner() {

for (let pattern of winPatterns) {
let a = cells[pattern[0]].textContent;
let b = cells[pattern[1]].textContent;
let c = cells[pattern[2]].textContent;

if (a !== "" && a === b && b === c) {
alert(currentPlayer + " Wins!");
gameActive = false;
return;
}
}

if (count === 9) {
alert("It's a Draw!");
gameActive = false;
}
}


resetBtn.addEventListener("click", resetGame);

function resetGame() {
cells.forEach(cell => {
cell.textContent = "";
});

currentPlayer = "X";
gameActive = true;
count = 0;

document.body.style.backgroundColor = "#4f476e";
}


