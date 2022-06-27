const black = '#333';
const white = '#fefefe';
const rainbow = getRandomColor();
const defaultSize = 16;

let currentColor = black;
let currentSize = defaultSize;

function createParentDivs(num) {
    for (let i = 1; i <= num; i++) {
        const gridContainer = document.querySelector('.grid-container');
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

function getRandomColor() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
};

function paintSquares(color) {
    let allSquares = document.querySelectorAll('.square');

    allSquares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            if (color === rainbow) {
                rgb = getRandomColor();
                square.style.backgroundColor = rgb;
            } else {
                square.style.backgroundColor = color;
            };
        });
    });
};

// when button clicked and number inputted change parent and child divs density to number
function setNewSize() {
    const button = document.getElementById('squares-selection');
    
    button.addEventListener('click', () => {
        let num = prompt('Set new grid size');

        if ((num === null) || (num === String()) || (num <= 0)) {
            return;
        } else if (num <= 100) {
            deleteDivs('#child-div');
            deleteDivs('square-container');
            createParentDivs(num);
            createChildDivs(num);
            setCurrentSize(num);

            if (currentColor === white) {
                setCurrentColor(black);
            };

            paintSquares(currentColor);
        } else {
            return;
        };
    });
};

// function to change which color is used depending on what button is clicked
function setButtonMode(id, color) {
    const button = document.getElementById(id);

    button.addEventListener('click', () => {
        setCurrentColor(color);
        paintSquares(currentColor);
    });
};

// function to clear the grid when clicked 
function clearGrid() {
    const button = document.getElementById('clear-button');

    button.addEventListener('click', () => {
        deleteDivs('#child-div');
        deleteDivs('square-container');
        createParentDivs(currentSize);
        createChildDivs(currentSize);

        if (currentColor === white) {
            setCurrentColor(black);
        };

        paintSquares(currentColor);
    });
};

function setCurrentColor(color) {
    currentColor = color;
};

function setCurrentSize(num) {
    currentSize = num;
};

createParentDivs(defaultSize);
createChildDivs(defaultSize);
paintSquares(black);
setNewSize();
setButtonMode('rainbow-button', rainbow);
setButtonMode('eraser-button', white);
setButtonMode('color-button', black);
clearGrid();