const gamearea = document.querySelector('.game-area');
const gameareHeight = gamearea.clientHeight;
const gameareaWidth = gamearea.clientWidth;

let gridSize = 16;
columns = `repeat(${gridSize}, 1fr);`
gamearea.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
gamearea.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

function colour() {
    this.style.backgroundColor = "red";
}

function randomColour(){
    let randomColour = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = "#" + randomColour;
    
}

for (i=0; i<(gridSize*gridSize); i++) {
    const cell = document.createElement('div');
    cell.classList = "cell";
    cell.id = `cell-${i}`;
    gamearea.appendChild(cell);
    cell.addEventListener('mouseover', randomColour);
}