function createDivs(sideLength) {
    const amount = sideLength * sideLength;
    let divArray = [];
    for (let i = 0; i < amount; i++) {
        divArray[i] = document.createElement('div');
        divArray[i].classList.add('child-div');
        divArray[i].textContent = i % 16 + 1;
        container.appendChild(divArray[i]);
    }
}

container = document.querySelector('.container');

createDivs(16);