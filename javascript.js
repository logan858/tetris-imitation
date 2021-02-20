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
//starting positions for each block
let square1 = 5
let square2 = 4

//variables to hold dom objects 




//FUNCTIONS
//function to add scores up after each row is completed, up to a max win condition
let scoreTotal = 0;
function scoreTracker(x) {
    scoreTotal += x;
    return scoreTotal;
}

//functions to choose how theSQUARE shape will move down the screen
function squareShaper(y, x) {
    let i = 0;
    let z = setInterval(function() {
        //switches board states to 0
        if(i >= 1) {
            shapeErase(i)
            for(j = 0; j < tetrisBoard.length; j++) {
                tetrisBoard[i - 1][j] = 0;
            }
        }

        // need the event listeners in here, and the erase function has to run inside the keystrokes just before the switch the square1 & 2 vars
        //
        //
        //switches board states to 1, going down
        tetrisBoard[0 + i][square1] = 1
        tetrisBoard[0 + i][square2]  = 1
        tetrisBoard[1 + i][square1] = 1
        tetrisBoard[1 + i][square2] = 1
        i += 1;
        shapeDisplay(i)
        if (i + 1 >= tetrisBoard.length) {
            clearInterval(z);
            return;
        }
    }, 300)   
}
squareShaper();


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

//console.log(tetrisBoard)
//function to move the object down a space in the grid every interval of time
//function to flip the block
//function to check to see if a full row of grid elements are all switched to 1, and then switches all values to 0 & deletes blocks
//function to check to see if any grid elements at the top are switched to 1, prompting lose condition
//function to check is highscore varialbe hits a certain level, prompting win condition





// //EVENTLISTENERS
// squares.addEventListener("click", function(evnt) {
//     let click = evnt.target
//     console.log(click);
//     if(click.classList.contains("blockpiece")) {
//         click.classList.remove("blockpiece")
//     } else {
//         click.classList.add("blockpiece")
//     }
// })
//event listeners for left arrow & right arrow, and for spacebar/click to flip object
document.addEventListener("keydown", function(evnt) {
    if(evnt.code == "ArrowLeft") {
        if (square1 > 1) {
            square1 -= 1;
        } 
        if (square2 > 0) {
            square2 -= 1;
        }
    } else if (evnt.code == "ArrowRight") {
        if(square1 < 9) {
            square1 += 1;
        }
        if(square2 < 8) {
            square2 += 1;
        }
    }
})


//eventlistener for the 3 music options
