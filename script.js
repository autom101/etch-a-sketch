let divArray = [];

function createDivs(sideLength) {
    const amount = sideLength * sideLength;
    for (let i = 0; i < amount; i++) {
        divArray[i] = document.createElement('div');
        divArray[i].classList.add('child-div');
        divArray[i].textContent = i % 16 + 1;
        container.appendChild(divArray[i]);
    }
}

function createEventListener(item) {
    item.addEventListener('mouseover', e => {
        item.setAttribute('style', 'background-color: grey;');
    })
}

container = document.querySelector('.container');

createDivs(16);

divArray.forEach(createEventListener);
