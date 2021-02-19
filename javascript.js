//BOARDSTATES
//array to hold the state of each grid element on the board, values of 0 or 1
//var to keep track of the current score
let tetrisBoard = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]
let scoreTotal = 0;
console.log(tetrisBoard)


//VARS
//each object shape will have a variable to hold it in
let sS = [];
let sLL = [];
let sLR = [];
let sT = [];
let sI = [];
let shapeArr = [sS, sLL, sLR, sT, sI]


//variables to hold dom objects (used to move the block left or right, to flip. dom objects to select score, start button, play music button)
let squares = document.getElementById("boardplate")



//FUNCTIONS
//creates grid+
function cGrid (x) { 
    for(i = 1; i <= x; i++) {
        let g = document.createElement("div");
        g.classList.add("grid");
        g.id = i;
        squares.appendChild(g);
    }
}
cGrid(200);

//function to add scores up after each row is completed, up to a max win condition
function score() {
    scoreTotal += 100;
    return scoreTotal;
}
//functions to choose how each shape will move down the screen
function squareShaper() {
        let z = setInterval(function() {
            for(i = 0; i < [tetrisBoard.length - 1]; i++) {
                tetrisBoard[i][4] = 1
                tetrisBoard[i][5] = 1
                tetrisBoard[1 + i][4] = 1
                tetrisBoard[1 + i][5] = 1
                console.log(tetrisBoard)
                if (tetrisBoard[i][4] == 1) {
                    let idHighLighter = document.querySelector("#5");
                    console.log(idHighLighter)
                    idHighLighter.classList.add("blockpiece")
                }
            }
            clearInterval(z);
        }, 1000)
        
}
squareShaper();



//console.log(tetrisBoard)
//function to move the object down a space in the grid every interval of time
//function to move the block left
//function to move the block right
//function to flip the block
//function to check to see if a full row of grid elements are all switched to 1, and then switches all values to 0 & deletes blocks
//function to check to see if any grid elements at the top are switched to 1, prompting lose condition
//function to check is highscore varialbe hits a certain level, prompting win condition





//EVENTLISTENERS
squares.addEventListener("click", function(evnt) {
    let click = evnt.target
    console.log(click);
    if(click.classList.contains("blockpiece")) {
        click.classList.remove("blockpiece")
    } else {
        click.classList.add("blockpiece")
    }
})

//event listeners for left arrow & right arrow, and for spacebar/click to flip object
//eventlistener for the 3 music options