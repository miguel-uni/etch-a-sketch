function createParentDivs() {
    for (let i = 1; i <= 16; i++) {
        const container = document.getElementById('container');
        const div = document.createElement('div');

        div.setAttribute('id', i);
        div.classList.add('parent');
        container.appendChild(div);
    };
};

function createChildDivs() {
    for (let i = 1; i <= 16; i++) {
        const parentDiv = document.getElementById(i);
        
        if (parentDiv) {
            for (let z = 1; z <= 16; z++) {
                const div = document.createElement('div');
                
                div.classList.add('child');
                parentDiv.appendChild(div);
            };
        };
    };
};

createParentDivs();
createChildDivs();