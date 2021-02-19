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
function score(x) {
    scoreTotal += x;
    return scoreTotal;
}

//functions to choose how theSQUARE shape will move down the screen
function squareShaper(y, x) {
    let i = 0;
    let z = setInterval(function() {
        //switches any previous boardstatus container the previoys shape location back to 0
        if(i > 2) {
            for(j = 0; j < 10; j++) {
                tetrisBoard[i- 1][j] = 0;
            }
        }
        //switches board status to 1, going down
        tetrisBoard[0 + i][4 - y + x] = 1
        tetrisBoard[0 + i][5 - y + x]  = 1
        tetrisBoard[1 + i][4 - y + x] = 1
        tetrisBoard[1 + i][5 - y + x] = 1
        console.log(tetrisBoard[3])
        i += 1;
        if (i + 1 >= 10) {
            clearInterval(z);
            return;
        }
        }, 1000)   
}
squareShaper(0, 0);


function shapeMaker() {

}

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







/// EXTRA blocks of code
        //originally updated the visuals (css)
        // for(i = 0; i < tetrisBoard.length; i++) {
        //         let block1 = document.getElementById( + "5");
        //         let block2 = document.getElementById("6");
        //         let block3 = document.getElementById("15");
        //         let block4 = document.getElementById("16");
        //         block1.classList.add("blockpiece")
        //         block2.classList.add("blockpiece")
        //         block3.classList.add("blockpiece")
        //         block4.classList.add("blockpiece")
        //         console.log("test")