/* Legend: 
    smashBoy = square
    orangeRicky = L, right facing
    blueRicky = L, left facing
    clevelandZ = Z, right facing
    rhodeIslandZ = Z, left facing
    hero = I
    teewee = T
*/

//BOARDSTATES
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

let squares = document.getElementById("boardplate")
function cGrid (x) { 
    for(i = 1; i <= x; i++) {
        let g = document.createElement("div");
        g.classList.add("grid");
        g.id = i;
        squares.appendChild(g);
    }
}
cGrid(200);



//VARS
//starting positions for each block on the x axis
let square1 = 5
let square2 = 4
let counter = 0
let scoreTotal = 0;
//variables to hold dom objects 
function smashBoy(i) {
    tetrisBoard[0 + i][square1] = 1
    tetrisBoard[0 + i][square2]  = 1
    tetrisBoard[1 + i][square1] = 1
    tetrisBoard[1 + i][square2] = 1
}
function orangeRicky(i) {
    tetrisBoard[0 + i][square2] = 1
    tetrisBoard[1 + i][square2]  = 1
    tetrisBoard[2 + i][square2] = 1
    tetrisBoard[2 + i][square1] = 1
}




//FUNCTIONS
//function to add scores up after each row is completed, up to a max win condition
function scoreTracker(x) {
    scoreTotal += x;
    return scoreTotal;
}

function smashBoyShaper() {
    let i = 0;
    let z = setInterval(function() {
        if(i >= 1) {
            shapeErase(i)
            for(j = 0; j < tetrisBoard.length; j++) {
                tetrisBoard[i - 1][j] = 0;
            }
        }
        smashBoy(i)
        i += 1;
        counter += 1;
        shapeDisplay(i)
        if (i + 1 >= tetrisBoard.length) {
            clearInterval(z);
            return;
        }
    }, 200)   
}

function orangeRickyShaper() {
    let i = 0;
    let z = setInterval(function() {
        if(i >= 1) {
            shapeErase(i)
            for(j = 0; j < tetrisBoard.length; j++) {
                tetrisBoard[i - 1][j] = 0;
            }
        }
        orangeRicky(i)
        i += 1;
        counter += 1;
        shapeDisplay(i)
        if (i + 1 >= tetrisBoard.length) {
            clearInterval(z);
            return;
        }
    }, 200)   
}



//Visual functions that add visual css classlists, & remove them
function shapeDisplay(x) {
    let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + square1 + 1] + ")") 
    let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + square2 + 1] + ")") 
    let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + square1 + 1] + ")") 
    let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + square2 + 1] + ")") 
    blockLight.classList.add("blockpiece")
    blockLight2.classList.add("blockpiece")
    blockLight3.classList.add("blockpiece")
    blockLight4.classList.add("blockpiece")
}

function shapeErase(x) {
    let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + square1 + 1] + ")") 
    let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x - 1 ] * 10 + square2 + 1] + ")") 
    let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + square1 + 1] + ")") 
    let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + square2 + 1] + ")")
    blockLight.classList.remove("blockpiece")
    blockLight2.classList.remove("blockpiece")
    blockLight3.classList.remove("blockpiece")
    blockLight4.classList.remove("blockpiece") 
}

//function to flip the block
//function to check to see if a full row of grid elements are all switched to 1, and then switches all values to 0 & deletes blocks
//function to check to see if any grid elements at the top are switched to 1, prompting lose condition
//function to check is highscore varialbe hits a certain level, prompting win condition



document.addEventListener("keydown", function(evnt) {
if(evnt.code == "ArrowLeft") {
    if (square1 > 1) {
        if (counter + 1 < tetrisBoard.length) {
            shapeErase(counter)
        }
        square1 -= 1;
    } 
    if (square2 > 0) {
        if (counter + 1 < tetrisBoard.length) {
            shapeErase(counter)
        }
        square2 -= 1;
    }
} else if (evnt.code == "ArrowRight") {
    if(square1 < 9) {
        if (counter + 1 < tetrisBoard.length) {
            shapeErase(counter)
        }
        square1 += 1;
    }
    if(square2 < 8) {
        if (counter + 1 < tetrisBoard.length) {
            shapeErase(counter)
        }
        square2 += 1;
    }
} 
})


const shapeFuncArr = [
    smashBoyShaper, 
    orangeRickyShaper,
]

function render() {
    shapeFuncArr[0]()
}

render()

//eventlistener for the 3 music options
