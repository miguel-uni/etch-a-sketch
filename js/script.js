function createParentDivs(num) {
    for (let i = 1; i <= num; i++) {
        const gridContainer = document.getElementById('grid-container');
        const parentDiv = document.createElement('div');

        parentDiv.setAttribute('id', i);
        parentDiv.classList.add('square-container');
        gridContainer.appendChild(parentDiv);
    };
};

function createChildDivs(num) {
    for (let i = 1; i <= num; i++) {
        const parentDiv = document.getElementById(i);
        
        if (parentDiv) {
            for (let z = 1; z <= num; z++) {
                const childDiv = document.createElement('div');
                
                childDiv.setAttribute('id', 'child-div');
                childDiv.classList.add('square');
                parentDiv.appendChild(childDiv);
            };
        };
    };
};

function deleteDivs(cssSelector) {
    let nodes = document.querySelectorAll(cssSelector);

    for(let i = 0; i < nodes.length; i++){
        nodes[i].parentNode.removeChild(nodes[i]);
    };
};

function paintSquares(color) {
    let allSquares = document.querySelectorAll('.square');

    allSquares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = color;
        });
    });
};

// when button clicked and number inputted change parent and child divs density to number
function setNewDivs() {
    const button = document.getElementById('squares-selection');
    
    button.addEventListener('click', () => {
        let num = prompt('how many squares do you want?');
    
        if (num <= 100) {
            deleteDivs('#child-div');
            deleteDivs('square-container');
            createParentDivs(num);
            createChildDivs(num);
            paintSquares(defaulColor);
        } else {
            return;
        };
    });
};

function getRandomColor() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
};

// function to use random colors to paint when button is clicked
function setRainbowMode() {
    const button = document.getElementById('rainbow-button');

    button.addEventListener('click', () => {
        let allSquares = document.querySelectorAll('.square');

        allSquares.forEach((square) => {
            square.addEventListener('mouseover', () => {
                let rgb = getRandomColor();
                square.style.backgroundColor = rgb;
            });
        });
    });
};

// function to change which color is used depending on what button is clicked
function setButtonMode(id, color) {
    const button = document.getElementById(id);

    button.addEventListener('click', () => {
        paintSquares(color);
    });
};

// function to clear the grid when clicked 
function clearGrid() {
    const button = document.getElementById('clear-button');

    button.addEventListener('click', () => {
        deleteDivs('#child-div');
        deleteDivs('square-container');
        createParentDivs(16);
        createChildDivs(16);
        paintSquares(defaulColor);
    });
};


const defaulColor = 'black';

createParentDivs(16);
createChildDivs(16);
paintSquares(defaulColor);
setNewDivs();
setRainbowMode();
setButtonMode('eraser-button', 'white');
setButtonMode('color-button', defaulColor);
clearGrid();