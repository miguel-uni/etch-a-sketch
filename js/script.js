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

function paintSquares() {
    let allSquares = document.querySelectorAll(".square");
    
    allSquares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.classList.add('active');
        });
    });
};

function changeQuantityOfSquares() {
    const button = document.getElementById('squares-selection');
    
    button.addEventListener('click', () => {
        let num = prompt('how many squares do you want?');
    
        if (num <= 100) {
            deleteDivs('#child-div');
            deleteDivs('square-container');
            createParentDivs(num);
            createChildDivs(num);
            paintSquares();
        } else {
            return;
        };
    });
};

createParentDivs(16);
createChildDivs(16);
paintSquares();
changeQuantityOfSquares();