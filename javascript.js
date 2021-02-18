//BOARDSTATES
//array to hold the state of each grid element on the board, values of 0 or 1
//var to keep track of the current score
let tetrisBoard = [
    [0,0], [1, 0], [2, 0], [3, 0], [5, 0], [6, 0], [7,0], [8,0], [9,0], [10,0],
    [11,0], [12,0], [13,0], [14,0], [15,0], [16,0], [17,0], [18,0], [19,0], [20,0],
    /*{21:0, 22:0, 23:0, 24:0, 25:0, 26:0, 27:0, 28:0, 29:0, 30:0},
    {31:0, 32:0, 33:0, 34:0, 35:0, 36:0, 37:0, 38:0, 39:0, 40:0},
    {41:0, 42:0, 43:0, 44:0, 45:0, 46:0, 47:0, 48:0, 49:0, 50:0},
    {51:0, 52:0, 53:0, 54:0, 55:0, 56:0, 57:0, 58:0, 59:0, 60:0},
    {61:0, 62:0, 63:0, 64:0, 65:0, 66:0, 67:0, 68:0, 69:0, 70:0},
    {71:0, 72:0, 73:0, 74:0, 75:0, 76:0, 77:0, 78:0, 79:0, 80:0},
    {81:0, 82:0, 83:0, 84:0, 85:0, 86:0, 87:0, 88:0, 89:0, 90:0},
    {91:0, 92:0, 93:0, 94:0, 95:0, 96:0, 97:0, 98:0, 99:0, 100:0},*/
]
let scoreTotal = 0;

//VARS
//each object shape will have a variable to hold it in
let lL = function() {
    tetrisBoard[4][1] = 1;
    tetrisBoard[5][1] = 1;
    tetrisBoard[14][1] = 1;
    tetrisBoard[15][1] = 1;
}
lL();
console.log(tetrisBoard[1][0])
//variables to hold eventlisteners to move the block left or right, to flip 
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

//function to add scores up after each block stops moving
function score(x) {
    scoreTotal += 100;
    return scoreTotal;
}
//function to choose which of the object shapes will go next, and display that object on the document
function shaper() {
    for (i = 0; i < tetrisBoard.length; i++) {
       if (tetrisBoard[i][1] == 0) {
                console.log(tetrisBoard);
                let sqTarget = document.querySelectorAll(".grid");
                sqTarget[i].classList.add("blockpiece");
            }
        }
    }
//console.log(tetrisBoard[0][3])
shaper();
//console.log(tetrisBoard)
//function to move the object down a space in the grid every interval of time
//function to move the block left
//function to move the block right
//function to flip the block
//function to check to see if a full row of grid elements are all switched to 1, and then switches all values to 0 & deletes blocks
//function to check to see if any grid elements at the top are switched to 1, prompting lose condition
//function to check is highscore varialbe hits a certain level, prompting win condition


//eventlisteners
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