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
    [0,0,0,0,0,0,0,0,0,0]
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
//starting positions for each block on the x axis
let xAxis = 4;
let = displayXAxis = 5;
let counter = 0;
let scoreTotal = 0;
let currentShape = 0;

//variables for tracking & altering shape flips.  plus odd shapes.
let threeWide = 0;
let rightBumper = 0;


//functions that effect the board state, each shape
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
function blueRicky(i) {
    tetrisBoard[i][xAxis + 1] = 1
    tetrisBoard[i + 1][xAxis + 1]  = 1
    tetrisBoard[i + 2][xAxis + 1] = 1
    tetrisBoard[i + 2][xAxis] = 1
}
function clevelandZ(i) {
    tetrisBoard[i][xAxis] = 1
    tetrisBoard[i][xAxis + 1] = 1
    tetrisBoard[i + 1][xAxis + 1]  = 1
    tetrisBoard[i + 1][xAxis + 2] = 1
}
function rhodeIslandZ(i) {
    tetrisBoard[i + 1][xAxis] = 1
    tetrisBoard[i + 1][xAxis + 1] = 1
    tetrisBoard[i][xAxis + 1]  = 1
    tetrisBoard[i][xAxis + 2] = 1
}
function hero(i) {
    tetrisBoard[i][xAxis] = 1
    tetrisBoard[i + 1][xAxis] = 1
    tetrisBoard[i + 2][xAxis]  = 1
    tetrisBoard[i + 3][xAxis] = 1
}
function teeWee(i) {
    tetrisBoard[i][xAxis] = 1
    tetrisBoard[i][xAxis + 1] = 1
    tetrisBoard[i + 1][xAxis + 1]  = 1
    tetrisBoard[i][xAxis + 2] = 1
}
//erases the board state
function boardStateEraser(i) {
    if(currentShape == 1) {
        tetrisBoard[i - 1][xAxis] = 0
        tetrisBoard[i][xAxis] = 0
        tetrisBoard[i - 1][xAxis + 1]  = 0
        tetrisBoard[i][xAxis + 1] = 0
    } else if(currentShape == 2) {
        tetrisBoard[i - 1][xAxis] = 0
        tetrisBoard[i][xAxis]  = 0
        tetrisBoard[i + 1][xAxis] = 0
        tetrisBoard[i + 1][xAxis + 1] = 0
    } else if(currentShape == 3) {
        tetrisBoard[i - 1][xAxis + 1] = 0
        tetrisBoard[i][xAxis + 1]  = 0
        tetrisBoard[i + 1][xAxis + 1] = 0
        tetrisBoard[i + 1][xAxis] = 0
    } else if(currentShape == 4) {
        tetrisBoard[i - 1][xAxis] = 0
        tetrisBoard[i - 1][xAxis + 1] = 0
        tetrisBoard[i][xAxis + 1]  = 0
        tetrisBoard[i][xAxis + 2] = 0
    } else if(currentShape == 5) {
        tetrisBoard[i][xAxis] = 0
        tetrisBoard[i][xAxis + 1] = 0
        tetrisBoard[i - 1][xAxis + 1]  = 0
        tetrisBoard[i - 1][xAxis + 2] = 0
    } else if(currentShape == 6) {
        tetrisBoard[i - 1][xAxis] = 0
        tetrisBoard[i][xAxis] = 0
        tetrisBoard[i + 1][xAxis]  = 0
        tetrisBoard[i + 2][xAxis] = 0
    } else if(currentShape = 7) {
        tetrisBoard[i - 1][xAxis] = 0
        tetrisBoard[i - 1][xAxis + 1] = 0
        tetrisBoard[i][xAxis + 1]  = 0
        tetrisBoard[i - 1][xAxis + 2] = 0
    }
}




//FUNCTIONS
//function to add scores up after each row is completed, up to a max win condition
function scoreTracker(x) {
    scoreTotal += x;
    return scoreTotal;
}
function resetStates(z) {
    xAxis = 4;
    displayXAxis = 5;
    currentShape = 0;
    threeWide = 0;
    rightBumper = 0;
    clearInterval(z);
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
        if (i < tetrisBoard.length - 1) {
            if (tetrisBoard[i + 1][xAxis] === 1 || tetrisBoard[i + 1][xAxis + 1] === 1) {
                resetStates(z);
                return;
            }
        } else {
            resetStates(z);
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
        if (i + 2 < tetrisBoard.length) {
            if (tetrisBoard[i + 2][xAxis] === 1 || tetrisBoard[i + 2][xAxis + 1] === 1) {
                resetStates(z);
                return;
            }
        } else {
            resetStates(z)
                return;
        }
    }, 100)   
}
function blueRickyShaper() {
    currentShape = 3;
    counter = 0;
    let i = 0;
    let z = setInterval(function() {
        if(i >= 1) {
            shapeErase(i)
            boardStateEraser(i)
        }
        blueRicky(i)
        i += 1;
        counter += 1;
        blueRickyDisplay(i)
        if (i + 2 < tetrisBoard.length) {
            if (tetrisBoard[i + 2][xAxis] === 1 || tetrisBoard[i + 2][xAxis + 1] === 1) {
                resetStates(z);
                return;
            }
        } else {
            resetStates(z)
                return;
        }
    }, 100)   
}
function clevelandZShaper() {
    threeWide = 1;
    currentShape = 4;
    counter = 0;
    let i = 0;
    let z = setInterval(function() {
        if(i >= 1) {
            shapeErase(i)
            boardStateEraser(i)
        }
        clevelandZ(i)
        i += 1;
        counter += 1;
        clevelandZDisplay(i)
        if (i + 1 < tetrisBoard.length) {
            if (tetrisBoard[i][xAxis] === 1 || tetrisBoard[i + 1][xAxis + 1] === 1 || tetrisBoard[i + 1][xAxis + 2]) {
                resetStates(z);
                return;
            }
        } else {
            resetStates(z)
                return;
        }
    }, 100)   
}
function rhodeIslandZShaper() {
    threeWide = 1;
    currentShape = 5;
    rightBumper = -1;
    counter = 0;
    let i = 0;
    let z = setInterval(function() {
        if(i >= 1) {
            shapeErase(i)
            boardStateEraser(i)
        }
        rhodeIslandZ(i)
        i += 1;
        counter += 1;
        rhodeIslandZDisplay(i)
        if (i + 1 < tetrisBoard.length) {
            if (tetrisBoard[i + 1 ][xAxis] === 1 || tetrisBoard[i + 1][xAxis + 1] === 1 || tetrisBoard[i][xAxis + 2] === 1) {
                resetStates(z);
                return;
            }
        } else {
            resetStates(z)
                return;
        }
    }, 100)   
}
function heroShaper() {
    threeWide = -1
    currentShape = 6;
    counter = 0;
    let i = 0;
    let z = setInterval(function() {
        if(i >= 1) {
            shapeErase(i)
            boardStateEraser(i)
        }
        hero(i)
        i += 1;
        counter += 1;
        heroDisplay(i)
        if (i + 3 < tetrisBoard.length) {
            if (tetrisBoard[i + 3][xAxis] === 1) {
                resetStates(z);
                return;
            }
        } else {
            resetStates(z)
                return;
        }
    }, 100)   
}
function teeWeeShaper() {
    threeWide = 1;
    currentShape = 7;
    counter = 0;
    let i = 0;
    let z = setInterval(function() {
        if(i >= 1) {
            shapeErase(i)
            boardStateEraser(i)
        }
        teeWee(i)
        i += 1;
        counter += 1;
        teeWeeDisplay(i)
        if (i + 1 < tetrisBoard.length) {
            if (tetrisBoard[i][xAxis] === 1 || tetrisBoard[i + 1][xAxis + 1] === 1 || tetrisBoard[i][xAxis + 2]) {
                resetStates(z);
                return;
            }
        } else {
            resetStates(z)
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
function blueRickyDisplay(x) {
    let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis + 1] + ")") 
    let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis + 1] + ")") 
    let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x + 1] * 10 + displayXAxis + 1] + ")") 
    let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [[x + 1] * 10 + displayXAxis] + ")") 
    let orangeRicky = [blockLight, blockLight2, blockLight3, blockLight4]
    orangeRicky.forEach(ele => ele.classList.add("blockpiece"))
}
function clevelandZDisplay(x) {
    let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis] + ")") 
    let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis + 1] + ")") 
    let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis + 1] + ")") 
    let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis + 2] + ")") 
    let smashBoy = [blockLight, blockLight2, blockLight3, blockLight4]
    smashBoy.forEach(ele => ele.classList.add("blockpiece"))
}
function rhodeIslandZDisplay(x) {
    let blockLight = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis] + ")") 
    let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis + 1] + ")") 
    let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis + 1] + ")") 
    let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis + 2] + ")") 
    let smashBoy = [blockLight, blockLight2, blockLight3, blockLight4]
    smashBoy.forEach(ele => ele.classList.add("blockpiece"))
}
function heroDisplay(x) {
    let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis] + ")") 
    let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis] + ")") 
    let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x + 1] * 10 + displayXAxis] + ")") 
    let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [[x + 2] * 10 + displayXAxis] + ")") 
    let orangeRicky = [blockLight, blockLight2, blockLight3, blockLight4]
    orangeRicky.forEach(ele => ele.classList.add("blockpiece"))
}
function teeWeeDisplay(x) {
    let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis] + ")") 
    let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis + 1] + ")") 
    let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis + 2] + ")") 
    let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis + 1] + ")") 
    let smashBoy = [blockLight, blockLight2, blockLight3, blockLight4]
    smashBoy.forEach(ele => ele.classList.add("blockpiece"))
}

// shapeErase will check to see which shape function is stored in a changing variable, and execute an according if eraser
function shapeErase(x) {
    if(currentShape == 1) {
        let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis] + ")") 
        let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis + 1] + ")") 
        let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis] + ")") 
        let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis + 1] + ")")
        let smashBoy = [blockLight, blockLight2, blockLight3, blockLight4]
        smashBoy.forEach(ele => ele.classList.remove("blockpiece"))
    } else if (currentShape == 2) {
        let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis] + ")") 
        let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis] + ")") 
        let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x + 1] * 10 + displayXAxis] + ")") 
        let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [[x + 1] * 10 + displayXAxis + 1] + ")") 
        let orangeRicky = [blockLight, blockLight2, blockLight3, blockLight4]
        orangeRicky.forEach(ele => ele.classList.remove("blockpiece"))
    } else if (currentShape == 3) {
        let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis + 1] + ")") 
        let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis + 1] + ")") 
        let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x + 1] * 10 + displayXAxis + 1] + ")") 
        let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [[x + 1] * 10 + displayXAxis] + ")") 
        let orangeRicky = [blockLight, blockLight2, blockLight3, blockLight4]
        orangeRicky.forEach(ele => ele.classList.remove("blockpiece"))
    } else if (currentShape == 4) {
        let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis] + ")") 
        let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis + 1] + ")") 
        let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis + 1] + ")") 
        let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis + 2] + ")") 
        let smashBoy = [blockLight, blockLight2, blockLight3, blockLight4]
        smashBoy.forEach(ele => ele.classList.remove("blockpiece"))
    } else if(currentShape == 5) {
        let blockLight = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis] + ")") 
        let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis + 1] + ")") 
        let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis + 1] + ")") 
        let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis + 2] + ")") 
        let smashBoy = [blockLight, blockLight2, blockLight3, blockLight4]
        smashBoy.forEach(ele => ele.classList.remove("blockpiece"))
    } else if(currentShape == 6) {
        let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis] + ")") 
        let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis] + ")") 
        let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x + 1] * 10 + displayXAxis] + ")") 
        let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [[x + 2] * 10 + displayXAxis] + ")") 
        let orangeRicky = [blockLight, blockLight2, blockLight3, blockLight4]
        orangeRicky.forEach(ele => ele.classList.remove("blockpiece"))
    } else if(currentShape == 7) {
        let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis] + ")") 
        let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis + 1] + ")") 
        let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis + 2] + ")") 
        let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis + 1] + ")") 
        let smashBoy = [blockLight, blockLight2, blockLight3, blockLight4]
        smashBoy.forEach(ele => ele.classList.remove("blockpiece"))
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
            if (currentShape > 0) {
                
                if ([counter + 1] < tetrisBoard.length && tetrisBoard[counter + 1][xAxis - 1] === 0 && tetrisBoard[counter][xAxis - 1] === 0) {
                    shapeErase(counter)
                    boardStateEraser(counter)
                    xAxis -= 1;
                    displayXAxis -=1;
                    return;
                }
            }
        } 
    } else if (evnt.code == "ArrowRight") {
        if(currentShape > 0) {
            if([xAxis + threeWide] < 8) {
                if ([counter + 1] < tetrisBoard.length && tetrisBoard[counter + 1][xAxis + threeWide + 2] == 0 && tetrisBoard[counter + 2][xAxis + threeWide + 2] === 0) {
                    shapeErase(counter)
                    boardStateEraser(counter)
                    xAxis += 1;
                    displayXAxis += 1;
                    return;
                }
            }            
        } else {
            return;
        }
    } 
})




const shapeFuncArr = [
    smashBoyShaper, 
    orangeRickyShaper,
    blueRickyShaper,
    clevelandZShaper,
    rhodeIslandZShaper,
    heroShaper,
    teeWeeShaper,
]

function render() {
    shapeFuncArr[Math.floor(Math.random() * shapeFuncArr.length)]();
}

 
//render()
setInterval(render, 2400)
//smashBoyShaper()
//setInterval(teeWeeShaper, 2400)


//eventlistener for the 3 music options
