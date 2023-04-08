let cells = document.querySelectorAll('.cell'),
player = document.querySelector('.player'),
restartBtn = document.querySelector('.restart-game'),
playerTurn = "X";
winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

],

count = 0;

function checkForWin(){
    winningCombinations.forEach(combination =>{
        let check = combination.every(idx =>
        cells[idx].innerHTML == playerTurn);
        if(check){
            highlightCells(combination);
        }
    });
}

function highlightCells(combination){
    combination.forEach(idx => {
        cells[idx].classList.add('highlight');
    });
}

function inactiveCells(){
    cells.forEach(cells => {
        cells.classList.add('inactive');
    });
}

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        count++;
        if(cell.innerHTML !== "") return;
        cell.innerHTML = playerTurn;
        checkForWin();
        if(count == 9){
            alert("Draw");
            inactiveCells();
        }
        playerTurn = playerTurn == "X" ? "O": "X";
        player.innerHTML = `${playerTurn}'s turn`;
    });
});

restartBtn.addEventListener('click', () => {
    location.reload();
});