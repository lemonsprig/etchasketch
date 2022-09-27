const gamearea = document.querySelector('.game-area');
const gameareHeight = gamearea.clientHeight;
const gameareaWidth = gamearea.clientWidth;
const btnClear = document.querySelector('#clear').addEventListener('click', clearGrid);
const btnSetSize = document.querySelector('#setSize').addEventListener('click', setSize);

let gridSize = 16;
let selectedColour = "#000000";


function colour(target) {
    let selectedColour =  document.querySelector('#colourpicker').value;
    target.style.backgroundColor = selectedColour;
}

function randomColour(target){
    let randomColour = Math.floor(Math.random()*16777215).toString(16);
    target.style.backgroundColor = "#" + randomColour;    
}

function erase(target) {
    target.style.backgroundColor = "#FFFFFF";
}

function fill(event){
    let colorMode = document.querySelector('input[name="colorMode"]:checked').value;
    if (colorMode === "colorSelect") {
        console.log(event)
        colour(event.originalTarget);
    } else if (colorMode === "random") {
        randomColour(event.originalTarget);
    } else if (colorMode === "erase") {
        erase(event.originalTarget)
    }
}

function clearGrid() {
    const cells = gamearea.querySelectorAll('.cell');
    //cells.forEach(cell => cell.style.backgroundColor = "#FFFFFF");
    cells.forEach(cell => cell.remove());
    drawGrid();
}

function setSize() {
    newSize = Number(prompt('Please enter a number between 1 and 100. This will set the size of your grid'));
    if(newSize != null && typeof(newSize)== "number" && newSize > 0 && newSize <=100) {
        gridSize = newSize;
        clearGrid();
    }
}

function drawGrid() {
    gamearea.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gamearea.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (i=0; i<(gridSize*gridSize); i++) {
        const cell = document.createElement('div');
        cell.classList = "cell";
        cell.id = `cell-${i}`;
        gamearea.appendChild(cell);
        cell.addEventListener('mouseover', fill);
    }
}

drawGrid();