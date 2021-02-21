/* Legend: 
    smashBoy = square : currentShape = 1
    orangeRicky = L, right facing : currentShape = 2
    blueRicky = L, left facing : currentShape = 3
    clevelandZ = Z, right facing : currentShape = 4
    rhodeIslandZ = Z, left facing : currentShape = 5
    hero = I : currentShape = 6
    teewee = T : currentShape = 7
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
let xAxis = 4;
let yAxis = 0;
let = displayXAxis = 5;
let boardYAxis = 0;
let counter = 0;
let scoreTotal = 0;
let currentShape = 0;
//variables to hold dom objects 
function smashBoy(i) {
    tetrisBoard[i][xAxis] = 1
    tetrisBoard[i + 1][xAxis] = 1
    tetrisBoard[i][xAxis + 1]  = 1
    tetrisBoard[i + 1][xAxis + 1] = 1
}
function orangeRicky(i) {
    tetrisBoard[i][xAxis] = 1
    tetrisBoard[i + 1][xAxis]  = 1
    tetrisBoard[i + 2][xAxis] = 1
    tetrisBoard[i + 2][xAxis + 1] = 1
}
function boardStateEraser(i) {
    if(currentShape == 1) {
        tetrisBoard[i - 1][xAxis] = 0
        tetrisBoard[i][xAxis] = 0
        tetrisBoard[i - 1][xAxis + 1]  = 0
        tetrisBoard[i][xAxis + 1] = 0
    } else if(currentShape == 2) {
        tetrisBoard[i - 1][xAxis] = 1
        tetrisBoard[i][xAxis]  = 1
        tetrisBoard[i + 1][xAxis] = 1
        tetrisBoard[i + 1][xAxis + 1] = 1
    }
}




//FUNCTIONS
//function to add scores up after each row is completed, up to a max win condition
function scoreTracker(x) {
    scoreTotal += x;
    return scoreTotal;
}

function smashBoyShaper() {
    currentShape = 1;
    counter = 0;
    let i = 0;
    let z = setInterval(function() {
        if(i >= 1) {
            shapeErase(i)
            boardStateEraser(i)
        }
        smashBoy(i)
        i += 1;
        counter += 1;
        smashBoyDisplay(i)
        console.log(tetrisBoard)
        if (i + 1 >= tetrisBoard.length) {
            clearInterval(z);
            currentShape = 0;
            return;
        }
    }, 100)   
}

function orangeRickyShaper() {
    currentShape = 2;
    counter = 0;
    let i = 0;
    let z = setInterval(function() {
        if(i >= 1) {
            shapeErase(i)
            boardStateEraser(i)
        }
        orangeRicky(i)
        i += 1;
        counter += 1;
        orangeRickyDisplay(i)
        console.log(tetrisBoard)
        if (i + 2 >= tetrisBoard.length) {
            clearInterval(z);
            currentShape = 0;
            return;
        }
    }, 100)   
}



//Visual functions that add visual css classlists, & remove them
function smashBoyDisplay(x) {
    let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis] + ")") 
    let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis + 1] + ")") 
    let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis] + ")") 
    let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis + 1] + ")") 
    let smashBoy = [blockLight, blockLight2, blockLight3, blockLight4]
    smashBoy.forEach(ele => ele.classList.add("blockpiece"))
}
function orangeRickyDisplay(x) {
    let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis] + ")") 
    let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis] + ")") 
    let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x + 1] * 10 + displayXAxis] + ")") 
    let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [[x + 1] * 10 + displayXAxis + 1] + ")") 
    let orangeRicky = [blockLight, blockLight2, blockLight3, blockLight4]
    orangeRicky.forEach(ele => ele.classList.add("blockpiece"))
}

// shapeErase will check to see which shape function is stored in a changing variable, and execute an according if eraser
function shapeErase(x) {
    if(currentShape == 1) {
        let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis] + ")") 
        let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis + 1] + ")") 
        let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis] + ")") 
        let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis + 1] + ")")
        blockLight.classList.remove("blockpiece")
        blockLight2.classList.remove("blockpiece")
        blockLight3.classList.remove("blockpiece")
        blockLight4.classList.remove("blockpiece") 
    } else if (currentShape == 2) {
        let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis] + ")") 
        let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis] + ")") 
        let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x + 1] * 10 + displayXAxis] + ")") 
        let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [[x + 1] * 10 + displayXAxis + 1] + ")") 
        blockLight.classList.remove("blockpiece")
        blockLight2.classList.remove("blockpiece")
        blockLight3.classList.remove("blockpiece")
        blockLight4.classList.remove("blockpiece") 
    } 
}

//function to flip the block
//function to check to see if a full row of grid elements are all switched to 1, and then switches all values to 0 & deletes blocks
//function to check to see if any grid elements at the top are switched to 1, prompting lose condition
//function to check is highscore varialbe hits a certain level, prompting win condition



//*********************************************************************************** */ 
//will have to also refuse inputs when counter = 0, when the function has an interval
document.addEventListener("keydown", function(evnt) {
    if(evnt.code == "ArrowLeft") {
        if (xAxis > 0) {
            if ([counter + 1] < tetrisBoard.length) {
                shapeErase(counter)
                boardStateEraser(counter)
            }
            xAxis -= 1;
            displayXAxis -=1;
        } 
    } else if (evnt.code == "ArrowRight") {
        if(xAxis < 8) {
            if ([counter + 1] < tetrisBoard.length) {
                shapeErase(counter)
                boardStateEraser(counter)
            }
            xAxis += 1;
            displayXAxis += 1;
        }
    } 
})




const shapeFuncArr = [
    smashBoyShaper, 
    orangeRickyShaper,
]

function render() {
    shapeFuncArr[Math.floor(Math.random() * shapeFuncArr.length)]();
}
render()

//eventlistener for the 3 music options
