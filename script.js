let divArray = [];
let childDivHeight = 0;
let childDivWidth = 0;

let numberOfDivsPerSide = 16;

//Iterate over array, creating a child div at each index
function createDivs(sideLength) {
    const amount = sideLength * sideLength;
    for (let i = 0; i < amount; i++) {
        divArray[i] = document.createElement('div');
        divArray[i].classList.add('child-div');
        divArray[i].style.width = 100 / sideLength + '%';
        divArray[i].style.height = 100 / sideLength + '%';
        container.appendChild(divArray[i]);
    }
}

//When mouse hovers over the square, change the background-color to black
function createEventListener(item) {
    item.addEventListener('mouseover', e => {
        item.setAttribute('style', 'background-color: black;');
        item.style.width = 100 / numberOfDivsPerSide + '%';
        item.style.height = 100 / numberOfDivsPerSide + '%';
    })
}

container = document.querySelector('.container');
clearButton = document.querySelector('.clear');
createButton = document.querySelector('.create');

//Clear board once button is clicked
clearButton.addEventListener('click', e => {
    for (let i = 0; i < numberOfDivsPerSide * numberOfDivsPerSide; i++) {
        divArray[i].remove();
    }

    createDivs(numberOfDivsPerSide);
    divArray.forEach(createEventListener);
})

//Clear board and create new board based on user's desired grid size
createButton.addEventListener('click', e => {
    for (let i = 0; i < numberOfDivsPerSide * numberOfDivsPerSide; i++) {
        divArray[i].remove();
    }

    numberOfDivsPerSide = parseInt(prompt('How many sqares per side would you like?', '16'))
    createDivs(numberOfDivsPerSide);
    divArray.forEach(createEventListener);
})

// Initialize the board
createDivs(numberOfDivsPerSide);
divArray.forEach(createEventListener);
