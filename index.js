const containerWidth = 960; //will always be a square
let numberOfSquares = 16;
const borderSize = 1; //in pixels

function calcSquareWidth() {
    //let squareWidth = (containerWidth / numberOfSquares) - (borderSize * 2);

    let squareWidth = (containerWidth / numberOfSquares) //+ /((containerWidth % numberOfSquares) / containerWidth)
    //let remainder = (containerWidth % numberOfSquares) / containerWidth
    console.log(squareWidth);
    //console.log(remainder);
    return squareWidth;
};

function generateGrid(squares) {
    let gridCount = squares * squares;
    let width = calcSquareWidth();
    let height = calcSquareWidth();

    const container = document.querySelector('#container');
    container.replaceChildren();
    container.setAttribute('style', 'border: ' + borderSize + 'px solid black; width: ' + containerWidth + 'px; height: ' + containerWidth + 'px;');


    for (let i = 0; i < gridCount; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        //square.setAttribute('id', i)
        square.setAttribute('style', 'border: ' + borderSize + 'px solid black; width: ' + width + 'px; height: ' + height + 'px;');
        square.addEventListener(
            "mouseover",
            (event) => {
                event.target.style.backgroundColor = 'black';
            },
            false,
        );
        container.appendChild(square);
    }


};

generateGrid(numberOfSquares);

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    numberOfSquares = prompt("Enter the number of squares per side");
    if (numberOfSquares > 100) {
        alert("Squares per side cannot exceed 100")

    }
    else {
        generateGrid(numberOfSquares);
    }
});
