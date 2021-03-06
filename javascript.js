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
const start = document.getElementById("start")
const reset = document.querySelector(".reset")
let score = document.getElementById("score")
let totalBlocks = document.getElementById("totalblocks")
let linesRemaining = document.getElementById("lines");
let sB = document.getElementById("smashboy")
let oR = document.getElementById("orangericky")
let bR = document.getElementById("bluericky")
let cZ = document.getElementById("clevelandz")
let riZ = document.getElementById("rhodeislandz")
let he = document.getElementById("hero")
let teeW = document.getElementById("teewee")
const easyDiff = document.querySelector(".diff1")
const medDiff = document.querySelector(".diff2")
const hardDiff = document.querySelector(".diff3")

function cGrid (x) { 
    for(i = 1; i <= x; i++) {
        let g = document.createElement("div");
        g.classList.add("grid");
        g.id = i;
        squares.appendChild(g);
    }
}
cGrid(200);

//eventlisteners & functions for the music options
let audioOne = document.getElementById("audio1")
let audioTwo = document.getElementById("audio2")
let audioThree = document.getElementById("audio3")
let audioFour = document.getElementById("audio4")

function playAud1() {
    audioOne.volume = 0.05;
    audioOne.loop = true;
    audioOne.play();
    pauseAud2();
    pauseAud3();
    pauseAud4();
    audioFour.pause();
    buttns[0].classList.add("active-music")
} 
function pauseAud1() {
    audioOne.pause();
    buttns[0].classList.remove("active-music")
} 
function playAud2() {
    audioTwo.volume = 0.1;
    audioTwo.loop = true;
    audioTwo.play();
    pauseAud1();
    pauseAud3();
    pauseAud4();
    buttns[2].classList.add("active-music")
} 
function pauseAud2() {
    audioTwo.pause();
    buttns[2].classList.remove("active-music")
} 
function playAud3() {
    audioThree.volume = 0.1;
    audioThree.loop = true;
    audioThree.play();
    pauseAud1();
    pauseAud2();
    pauseAud4();
    buttns[4].classList.add("active-music")
}  
function pauseAud3() {
    audioThree.pause();
    buttns[4].classList.remove("active-music")
} 
function playAud4() {
    audioFour.volume = 0.1;
    audioFour.loop = true;
    audioFour.play();
    pauseAud1();
    pauseAud2();
    pauseAud3();
    buttns[6].classList.add("active-music")
} 
function pauseAud4() {
    audioFour.pause();
    buttns[6].classList.remove("active-music")
} 
let buttns = document.querySelectorAll('button')
buttns[0].addEventListener("click", playAud1);
document.addEventListener("keydown", (evnt) => {
    if(evnt.code == "Digit1") {
        playAud1()
    }
});
buttns[1].addEventListener("click", pauseAud1);
buttns[2].addEventListener("click", playAud2);
document.addEventListener("keydown", (evnt) => {
    if(evnt.code == "Digit2") {
        playAud2()
    }
});
buttns[3].addEventListener("click", pauseAud2);
buttns[4].addEventListener("click", playAud3);
document.addEventListener("keydown", (evnt) => {
    if(evnt.code == "Digit3") {
        playAud3()
    }
});
buttns[5].addEventListener("click", pauseAud3);
buttns[6].addEventListener("click", playAud4);
document.addEventListener("keydown", (evnt) => {
    if(evnt.code == "Digit4") {
        playAud4()
    }
});
buttns[7].addEventListener("click", pauseAud4);
document.addEventListener("keydown", (evnt) => {
    if(evnt.code == "KeyP") {
        pauseAud1();
        pauseAud2();
        pauseAud3();
        pauseAud4();
    }
});
//event listeners for difficulty mode

easyDiff.addEventListener("click", function() {
    if(gameOn == 0) {
        medDiff.removeAttribute("id");
        hardDiff.removeAttribute("id");
        easyDiff.id = "active-mode";
        linesRem = diffMode[0];
        linesRemaining.textContent = "lines remaining: " + linesRem;
    }    
})
medDiff.addEventListener("click", function() {
    if(gameOn == 0) {
        easyDiff.removeAttribute("id");
        hardDiff.removeAttribute("id");
        medDiff.id = "active-mode";
        linesRem = diffMode[1];
        linesRemaining.textContent = "lines remaining: " + linesRem;
    }
})
hardDiff.addEventListener("click", function() {
    if(gameOn == 0) {
        medDiff.removeAttribute("id");
        easyDiff.removeAttribute("id");
        hardDiff.id = "active-mode";
        linesRem = diffMode[2];
        linesRemaining.textContent = "lines remaining: " + linesRem;
    }
})

//starting positions for each block on the x axis
let xAxis = 4;
let displayXAxis = 5;
let counter = 0;
let wideFlipCounter = 0;
let scoreTotal = 0;
const diffMode = [15, 25, 50];
let linesRem = diffMode[0];
let blockCounter = 0;
let shapeCounts = [0, 0, 0, 0, 0, 0, 0]
let currentShape = 0;
let gameOn = 0;
score.textContent = "score: - "
totalBlocks.textContent = "total blocks: - " 
linesRemaining.textContent = "lines remaining: " + linesRem;

//variables for tracking & altering shape flips.  plus odd shapes.
let threeWide = 0;
let rightBumper = 0;
//variables for flipping shapes
let visualY = 0;
let visualX = 0;
let visualY2 = 0;
let visualX2 = 0;
let visualY3 = 0;
let visualX3 = 0;
let visualY4 = 0;
let visualX4 = 0;

//functions that effect the board state, each shape
function smashBoy(i) {
    tetrisBoard[i][xAxis] = 1
    tetrisBoard[i + 1][xAxis] = 1
    tetrisBoard[i][xAxis + 1]  = 1
    tetrisBoard[i + 1][xAxis + 1] = 1
}
function orangeRicky(i) {
    tetrisBoard[i + visualY][xAxis + visualX] = 1
    tetrisBoard[i + 1 + visualY2][xAxis + visualX2]  = 1
    tetrisBoard[i + 2 + visualY3][xAxis + visualX3] = 1
    tetrisBoard[i + 2 + visualY4][xAxis + 1 + visualX4] = 1
}
function blueRicky(i) {
    tetrisBoard[i + visualY][xAxis + 1 + visualX] = 1
    tetrisBoard[i + 1 + visualY2][xAxis + 1 + visualX2]  = 1
    tetrisBoard[i + 2 + visualY3][xAxis + 1 + visualX3] = 1
    tetrisBoard[i + 2 + visualY4][xAxis + visualX4] = 1
}
function clevelandZ(i) {
    tetrisBoard[i + visualY][xAxis + visualX] = 1
    tetrisBoard[i + visualY2][xAxis + 1 + visualX2] = 1
    tetrisBoard[i + 1 + visualY3][xAxis + 1 + visualX3]  = 1
    tetrisBoard[i + 1 + visualY4][xAxis + 2 + visualX4] = 1
}
function rhodeIslandZ(i) {
    tetrisBoard[i + 1 + visualY][xAxis + visualX] = 1
    tetrisBoard[i + 1 + visualY2][xAxis + 1 + visualX2] = 1
    tetrisBoard[i + visualY3][xAxis + 1 + visualX3]  = 1
    tetrisBoard[i + visualY4][xAxis + 2 + visualX4] = 1
}
function hero(i) {
    tetrisBoard[i + visualY][xAxis + visualX] = 1
    tetrisBoard[i + 1 + visualY2][xAxis + visualX2] = 1
    tetrisBoard[i + 2 + visualY3][xAxis + visualX3]  = 1
    tetrisBoard[i + 3 + visualY4][xAxis + visualX4] = 1
}
function teeWee(i) {
    tetrisBoard[i + visualY][xAxis + visualX] = 1
    tetrisBoard[i + visualY2][xAxis + 1 + visualX2] = 1
    tetrisBoard[i + 1 + visualY3][xAxis + 1 + visualX3]  = 1
    tetrisBoard[i + visualY4][xAxis + 2 + visualX4] = 1
}
//erases the board state
function boardStateEraser(i) {
    if(currentShape == 1) {
        tetrisBoard[i - 1][xAxis] = 0
        tetrisBoard[i][xAxis] = 0
        tetrisBoard[i - 1][xAxis + 1]  = 0
        tetrisBoard[i][xAxis + 1] = 0
    } else if(currentShape == 2) {
        tetrisBoard[i - 1 + visualY][xAxis + visualX] = 0
        tetrisBoard[i + visualY2][xAxis + visualX2]  = 0
        tetrisBoard[i + 1 + visualY3][xAxis + visualX3] = 0
        tetrisBoard[i + 1 + visualY4][xAxis + 1 + visualX4] = 0
    } else if(currentShape == 3) {
        tetrisBoard[i - 1 + visualY][xAxis + 1 + visualX] = 0
        tetrisBoard[i + visualY2][xAxis + 1 + visualX2]  = 0
        tetrisBoard[i + 1 + visualY3][xAxis + 1 + visualX3] = 0
        tetrisBoard[i + 1 + visualY4][xAxis + visualX4] = 0
    } else if(currentShape == 4) {
        tetrisBoard[i - 1 + visualY][xAxis + visualX] = 0
        tetrisBoard[i - 1 + visualY2][xAxis + 1 + visualX2] = 0
        tetrisBoard[i + visualY3][xAxis + 1 + visualX3]  = 0
        tetrisBoard[i + visualY4][xAxis + 2 + visualX4] = 0
    } else if(currentShape == 5) {
        tetrisBoard[i + visualY][xAxis + visualX] = 0
        tetrisBoard[i + visualY2][xAxis + 1 + visualX2] = 0
        tetrisBoard[i - 1 + visualY3][xAxis + 1 + visualX3]  = 0
        tetrisBoard[i - 1 + visualY4][xAxis + 2 + visualX4] = 0
    } else if(currentShape == 6) {
        tetrisBoard[i - 1 + visualY][xAxis + visualX] = 0
        tetrisBoard[i + visualY2][xAxis + visualX2] = 0
        tetrisBoard[i + 1 + visualY3][xAxis + visualX3]  = 0
        tetrisBoard[i + 2 + visualY4][xAxis + visualX4] = 0
    } else if(currentShape == 7) {
        tetrisBoard[i - 1 + visualY][xAxis + visualX] = 0
        tetrisBoard[i - 1 + visualY2][xAxis + 1 + visualX2] = 0
        tetrisBoard[i + visualY3][xAxis + 1 + visualX3]  = 0
        tetrisBoard[i - 1 + visualY4][xAxis + 2 + visualX4] = 0
    }
}

//functions: basic game mechanics 
function resetStates(z) {
    xAxis = 4;
    displayXAxis = 5;
    blockCounters()
    currentShape = 0;
    threeWide = 0;
    rightBumper = 0;
    clearInterval(z);
    lineClear();
    visualY = 0;
    visualX = 0;
    visualY2 = 0;
    visualX2 = 0;
    visualY3 = 0;
    visualX3 = 0;
    visualY4 = 0;
    visualX4 = 0;
    presses = 0;
    winnerCheck();
    loserCheck();
}
function blockCounters() {
    blockCounter += 1;
    scoreTotal += 25;
    if(currentShape == 1) {
        shapeCounts[0] += 1;
    } else if(currentShape == 2) {
        shapeCounts[1] += 1;
    } else if(currentShape == 3) {
        shapeCounts[2] += 1;
    } else if(currentShape == 4) {
        shapeCounts[3] += 1;
    } else if(currentShape == 5) {
        shapeCounts[4] += 1;
    } else if(currentShape == 6) {
        shapeCounts[5] += 1;
    } else if(currentShape == 7) {
        shapeCounts[6] += 1;
    }
    score.textContent = "score: " + scoreTotal; 
    totalBlocks.textContent = "total blocks: " + blockCounter;
    sB.textContent = "smash boy: " + shapeCounts[0];
    oR.textContent = "orange ricky: " + shapeCounts[1];
    bR.textContent = "blue ricky: " + shapeCounts[2];
    cZ.textContent = "cleveland z: " + shapeCounts[3];
    riZ.textContent = "rhode island z: " + shapeCounts[4];
    he.textContent = "hero: " + shapeCounts[5];
    teeW.textContent = "teewee: " + shapeCounts[6];
}
function loserCheck() {
    for(j = 0; j < tetrisBoard[0].length; j++) {
        if(tetrisBoard[0][j] === 1) { 
            let lose1 = document.getElementsByClassName("grid");
            reset.classList.add("resetbutton")
            for(i = 0; i < lose1.length; i++) {
                lose1[i].classList.add("losingblockpiece")
            };
            start.innerHTML = "YOU LOSE!";
            gameOn = 0;
        }         
    }
}
function winnerCheck(z) {
    if(linesRem <= 0) {
        for(i = 1; i < 201; i++) {
           let winElies = document.querySelector("#boardplate div:nth-child(" + i + ")");
           winElies.style.backgroundColor = winColors[Math.floor(Math.random() * winColors.length)];
           start.innerHTML = "YOU WIN!";
           reset.classList.add("resetbutton")
        }
        gameOn = 0;
    }
}
const winColors = [
    "rgba(110, 55, 53, 0.959)", "rgba(61, 114, 145, 0.959)", "rgba(145, 109, 61, 0.959)", "rgba(61, 145, 117, 0.959)", "rgba(109, 120, 151, 0.7)", 
]
function countDown() {
    let i = 4;
    let z = setInterval(function() {
        i -= 1;
        start.innerHTML = i;
        if(i == 0) {
            start.innerHTML = "BEGIN!";
            clearInterval(z)
        }
        }, 500)
}
function oneChecker(x) {
    return x == 1;
  }
function lineClear() {
    let counter2 = 1;
    for(i = 0; i < tetrisBoard.length; i++) {
        counter2 = 1;
        let z = tetrisBoard[i].every(oneChecker);
        if(z == true) {
            scoreTotal += 100;
            score.textContent = "score: " + scoreTotal; 
            linesRem -= 1;
            linesRemaining.textContent = "lines remaining: " + linesRem;
            for(j = 0; j < tetrisBoard[i].length; j++) {
                tetrisBoard[i][j] = 0;
                let oneNine = document.getElementById("" + [[i * 10 + counter2]] + "");
                oneNine.classList.remove("blockpiece")
                lineMover(i, counter2)
                counter2 += 1;
                lineMoverState(i, j)
            }
        }
    }
}
function lineMover(i, count) {
    for(i; i > 0; i--) {
        let tenNine = document.getElementById("" + [[[i - 1] * 10 + count]] + "");
        if(tenNine.classList.contains("blockpiece") == true) {
            tenNine.classList.remove("blockpiece")
            tenNine = document.getElementById("" + [[i * 10 + count]] + "");
            tenNine.classList.add("blockpiece")
        }
    }
}
function lineMoverState(i, j) {
    for(i; i > 0; i--) {
        if(tetrisBoard[i][j] == 1) {
            tetrisBoard[i][j] = 0;
            tetrisBoard[i + 1][j] = 1;
        }

    }
}

//functions: shape behaviours
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
    }, 175)   
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
            if(presses == 0) {
                if (tetrisBoard[i + 2][xAxis] === 1 || tetrisBoard[i + 2][xAxis + 1] === 1) {
                    resetStates(z);
                    return;
                }
            } else if(presses == 1) {
                if (tetrisBoard[i + 2][xAxis] === 1 || tetrisBoard[i + 1][xAxis + 1] === 1 || tetrisBoard[i + 1][xAxis + 2] === 1) {
                    resetStates(z);
                    return;
                }
            } else if(presses == 2) {
                if (tetrisBoard[i + 2][xAxis + 1] === 1 || tetrisBoard[i][xAxis] === 1) {
                    resetStates(z);
                    return;
                }
            } else if(presses == 3) {
                if (tetrisBoard[i + 2][xAxis] === 1 || tetrisBoard[i + 2][xAxis + 1] === 1 || tetrisBoard[i + 2][xAxis + 2]  === 1) {
                    resetStates(z);
                    return;
                }
            }
            } else {
                resetStates(z)
                    return;
            }
    }, 175)   
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
            if(presses == 0) {
                if (tetrisBoard[i + 2][xAxis] === 1 || tetrisBoard[i + 2][xAxis + 1] === 1) {
                    resetStates(z);
                    return;
                }
            } else if(presses == 1) {
                if (tetrisBoard[i + 2][xAxis] === 1 || tetrisBoard[i + 2][xAxis + 1] === 1 || tetrisBoard[i + 2][xAxis + 2] === 1) {
                    resetStates(z);
                    return;
                }
            } else if(presses == 2) {
                if (tetrisBoard[i + 2][xAxis] === 1 || tetrisBoard[i][xAxis + 1] === 1) {
                    resetStates(z);
                    return;
                }
            } else if(presses == 3) {
                if (tetrisBoard[i + 1][xAxis] === 1 || tetrisBoard[i + 1][xAxis + 1] === 1 || tetrisBoard[i + 2][xAxis + 2]  === 1) {
                    resetStates(z);
                    return;
                }
            }
        } else {
            resetStates(z)
                return;
        }
    }, 175)   
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
            if(presses == 0) {
                if (tetrisBoard[i][xAxis] === 1 || tetrisBoard[i + 1][xAxis + 1] === 1 || tetrisBoard[i + 1][xAxis + 2]) {
                    resetStates(z);
                    return;
                }
            } else if(presses == 1) {
                if (tetrisBoard[i + 1][xAxis] === 1 || tetrisBoard[i][xAxis + 1] === 1) {
                    resetStates(z);
                    return;
                }
            }           
        } else {
            resetStates(z)
                return;
        }
    }, 175)   
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
            if(presses == 0) {
                if (tetrisBoard[i + 1][xAxis] === 1 || tetrisBoard[i + 1][xAxis + 1] === 1 || tetrisBoard[i][xAxis + 2]) {
                    resetStates(z);
                    return;
                }
            } else if(presses == 1) {
                if (tetrisBoard[i][xAxis] === 1 || tetrisBoard[i + 1][xAxis + 1] === 1) {
                    resetStates(z);
                    return;
                }
            }           
        } else {
            resetStates(z)
                return;
        }
    }, 175)   
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
            if(presses == 0) {
                if (tetrisBoard[i + 3][xAxis] === 1) {
                    resetStates(z);
                    return;
                }
            } else if(presses == 1) {
                if (tetrisBoard[i + 3][xAxis] === 1 || tetrisBoard[i + 3][xAxis + 1] === 1 || tetrisBoard[i + 3][xAxis + 2] === 1 || tetrisBoard[i + 3][xAxis + 3] === 1) {
                    resetStates(z);
                    return;
                }
            }           
        } else {
            resetStates(z)
            return;
        }
    }, 175)   
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
        wideFlipCounter += 1;
        teeWeeDisplay(i)
        if (i + 1 < tetrisBoard.length) {
            if(presses == 0) {
                if (tetrisBoard[i][xAxis] === 1 || tetrisBoard[i + 1][xAxis + 1] === 1 || tetrisBoard[i][xAxis + 2]) {
                    resetStates(z);
                    return;
                }
            } else if (presses == 1) {
                if (tetrisBoard[i][xAxis] === 1 || tetrisBoard[i + 1][xAxis + 1] === 1) {
                    resetStates(z);
                    return;
                }
            } else if (presses == 2) {
                if (tetrisBoard[i + 1][xAxis] === 1 || tetrisBoard[i + 1][xAxis + 1] === 1 || tetrisBoard[i + 1][xAxis + 2] === 1) {
                    resetStates(z);
                    return;
                }
            } else if (presses == 3) {
                if (tetrisBoard[i + 1][xAxis] === 1 || tetrisBoard[i][xAxis + 1] === 1) {
                    resetStates(z);
                    return;
                }
            }
        } else {
            resetStates(z)
            return;
        }
    }, 175)   
}
//Visual functions
function smashBoyDisplay(x) {
    let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis] + ")") 
    let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis + 1] + ")") 
    let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis] + ")") 
    let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis + 1] + ")") 
    let smashBoy = [blockLight, blockLight2, blockLight3, blockLight4]
    smashBoy.forEach(ele => ele.classList.add("blockpiece"))
}
function orangeRickyDisplay(x) {
    let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1 + visualY] * 10 + displayXAxis + visualX] + ")") 
    let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x + visualY2] * 10 + displayXAxis + visualX2] + ")") 
    let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x + 1 + visualY3] * 10 + displayXAxis + visualX3] + ")") 
    let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [[x + 1 + visualY4] * 10 + displayXAxis + 1 + visualX4] + ")") 
    let orangeRicky = [blockLight, blockLight2, blockLight3, blockLight4]
    orangeRicky.forEach(ele => ele.classList.add("blockpiece"))
}
function blueRickyDisplay(x) {
    let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1 + visualY] * 10 + displayXAxis + 1 + visualX] + ")") 
    let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x + visualY2] * 10 + displayXAxis + 1 + visualX2] + ")") 
    let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x + 1 + visualY3] * 10 + displayXAxis + 1 + visualX3] + ")") 
    let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [[x + 1 + visualY4] * 10 + displayXAxis + visualX4] + ")") 
    let orangeRicky = [blockLight, blockLight2, blockLight3, blockLight4]
    orangeRicky.forEach(ele => ele.classList.add("blockpiece"))
}
function clevelandZDisplay(x) {
    let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1 + visualY] * 10 + displayXAxis + visualX] + ")") 
    let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x - 1 + visualY2] * 10 + displayXAxis + 1 + visualX2] + ")") 
    let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x + visualY3] * 10 + displayXAxis + 1 + visualX3] + ")") 
    let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [[x + visualY4] * 10 + displayXAxis + 2 + visualX4] + ")") 
    let smashBoy = [blockLight, blockLight2, blockLight3, blockLight4]
    smashBoy.forEach(ele => ele.classList.add("blockpiece"))
}
function rhodeIslandZDisplay(x) {
    let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x + visualY] * 10 + displayXAxis + visualX] + ")") 
    let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x + visualY2] * 10 + displayXAxis + 1 + visualX2] + ")") 
    let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x - 1 + visualY3] * 10 + displayXAxis + 1 + visualX3] + ")") 
    let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [[x - 1 + visualY4] * 10 + displayXAxis + 2 + visualX4] + ")") 
    let smashBoy = [blockLight, blockLight2, blockLight3, blockLight4]
    smashBoy.forEach(ele => ele.classList.add("blockpiece"))
}
function heroDisplay(x) {
    let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1 + visualY] * 10 + displayXAxis + visualX] + ")") 
    let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x + visualY2] * 10 + displayXAxis + visualX2] + ")") 
    let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x + 1 + visualY3] * 10 + displayXAxis + visualX3] + ")") 
    let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [[x + 2 + visualY4] * 10 + displayXAxis + visualX4] + ")") 
    let orangeRicky = [blockLight, blockLight2, blockLight3, blockLight4]
    orangeRicky.forEach(ele => ele.classList.add("blockpiece"))
}
function teeWeeDisplay(x) {
    let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1 + visualY] * 10 + displayXAxis + visualX] + ")") 
    let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x - 1 + visualY2] * 10 + displayXAxis + 1 + visualX2] + ")") 
    let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x + visualY3] * 10 + displayXAxis + 1 + visualX3] + ")") 
    let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [[x - 1 + visualY4] * 10 + displayXAxis + 2 + visualX4] + ")") 
    let smashBoy = [blockLight, blockLight2, blockLight3, blockLight4]
    smashBoy.forEach(ele => ele.classList.add("blockpiece"))
}

function shapeErase(x) {
    if(currentShape == 1) {
        let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis] + ")") 
        let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x - 1] * 10 + displayXAxis + 1] + ")") 
        let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis] + ")") 
        let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [x * 10 + displayXAxis + 1] + ")")
        let smashBoy = [blockLight, blockLight2, blockLight3, blockLight4]
        smashBoy.forEach(ele => ele.classList.remove("blockpiece"))
    } else if (currentShape == 2) {
        let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1 + visualY] * 10 + displayXAxis + visualX] + ")") 
        let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x + visualY2] * 10 + displayXAxis + visualX2] + ")") 
        let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x + 1 + visualY3] * 10 + displayXAxis + visualX3] + ")") 
        let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [[x + 1 + visualY4] * 10 + displayXAxis + 1 + visualX4] + ")") 
        let orangeRicky = [blockLight, blockLight2, blockLight3, blockLight4]
        orangeRicky.forEach(ele => ele.classList.remove("blockpiece"))
    } else if (currentShape == 3) {
        let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1 + visualY] * 10 + displayXAxis + 1 + visualX] + ")") 
        let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x + visualY2] * 10 + displayXAxis + 1 + visualX2] + ")") 
        let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x + 1 + visualY3] * 10 + displayXAxis + 1 + visualX3] + ")") 
        let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [[x + 1 + visualY4] * 10 + displayXAxis + visualX4] + ")") 
        let orangeRicky = [blockLight, blockLight2, blockLight3, blockLight4]
        orangeRicky.forEach(ele => ele.classList.remove("blockpiece"))
    } else if (currentShape == 4) {
        let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1 + visualY] * 10 + displayXAxis + visualX] + ")") 
        let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x - 1 + visualY2] * 10 + displayXAxis + 1 + visualX2] + ")") 
        let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x + visualY3] * 10 + displayXAxis + 1 + visualX3] + ")") 
        let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [[x + visualY4] * 10 + displayXAxis + 2 + visualX4] + ")") 
        let smashBoy = [blockLight, blockLight2, blockLight3, blockLight4]
        smashBoy.forEach(ele => ele.classList.remove("blockpiece"))
    } else if(currentShape == 5) {
        let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x + visualY] * 10 + displayXAxis + visualX] + ")") 
        let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x + visualY2] * 10 + displayXAxis + 1 + visualX2] + ")") 
        let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x - 1 + visualY3] * 10 + displayXAxis + 1 + visualX3] + ")") 
        let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [[x - 1 + visualY4] * 10 + displayXAxis + 2 + visualX4] + ")") 
        let smashBoy = [blockLight, blockLight2, blockLight3, blockLight4]
        smashBoy.forEach(ele => ele.classList.remove("blockpiece"))
    } else if(currentShape == 6) {
        let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1 + visualY] * 10 + displayXAxis + visualX] + ")") 
        let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x + visualY2] * 10 + displayXAxis + visualX2] + ")") 
        let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x + 1 + visualY3] * 10 + displayXAxis + visualX3] + ")") 
        let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [[x + 2 + visualY4] * 10 + displayXAxis + visualX4] + ")") 
        let orangeRicky = [blockLight, blockLight2, blockLight3, blockLight4]
        orangeRicky.forEach(ele => ele.classList.remove("blockpiece"))
    } else if(currentShape == 7) {
        let blockLight = document.querySelector("#boardplate div:nth-child(" + [[x - 1 + visualY] * 10 + displayXAxis + visualX] + ")") 
    let blockLight2 = document.querySelector("#boardplate div:nth-child(" + [[x - 1 + visualY2] * 10 + displayXAxis + 1 + visualX2] + ")") 
    let blockLight3 = document.querySelector("#boardplate div:nth-child(" + [[x + visualY3] * 10 + displayXAxis + 1 + visualX3] + ")") 
    let blockLight4 = document.querySelector("#boardplate div:nth-child(" + [[x - 1 + visualY4] * 10 + displayXAxis + 2 + visualX4] + ")") 
        let smashBoy = [blockLight, blockLight2, blockLight3, blockLight4]
        smashBoy.forEach(ele => ele.classList.remove("blockpiece"))
    }
}

//eventlisteners: shape flips, xaxis movement
document.addEventListener("keydown", function(evnt) {
    if(evnt.code == "ArrowLeft" || evnt.code == "KeyA") {
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
    } else if (evnt.code == "ArrowRight" || evnt.code == "KeyD") {
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
let presses = 0;
document.addEventListener("keydown", function(evnt) {
    if(evnt.code == "Space" || evnt.code == "ShiftLeft") {
        if(currentShape == 2) {
            if(presses == 0 && xAxis + threeWide < 8 && tetrisBoard[counter + 1][xAxis + 2] == 0) {
                console.log(counter)
                console.log(xAxis)
                shapeErase(counter);
                boardStateEraser(counter)
                visualY = 1;
                visualX = 2;
                visualY2 = 0;
                visualX2 = 0;
                visualY3 = 0;
                visualX3 = 0;
                visualY4 = -1;
                visualX4 = 0;
                threeWide = 1;
                presses += 1;
            } else if(presses == 1 && tetrisBoard[counter + 2][xAxis + 1] == 0) {
                shapeErase(counter);
                boardStateEraser(counter)
                visualY = 0;
                visualX = 1;
                visualY2 = 0;
                visualX2 = 1;
                visualY3 = -2;
                visualX3 = 0;
                visualY4 = 0;
                visualX4 = 0;
                threeWide = 0;
                presses += 1;
            } else if(presses == 2 && xAxis + threeWide < 8 && tetrisBoard[counter][xAxis + 2] == 0 && tetrisBoard[counter + 1][xAxis + 2] == 0 && tetrisBoard[counter + 2][xAxis + 2] == 0) {
                shapeErase(counter);
                boardStateEraser(counter)
                visualY = 2;
                visualX = 0;
                visualY2 = 0;
                visualX2 = 2;
                visualY3 = 0;
                visualX3 = 1;
                visualY4 = 0;
                visualX4 = 1;
                threeWide = 1;
                presses += 1;
            }   else if(presses == 3) {
                shapeErase(counter);
                boardStateEraser(counter)
                visualY = 0;
                visualX = 0;
                visualY2 = 0;
                visualX2 = 0;
                visualY3 = 0;
                visualX3 = 0;
                visualY4 = 0;
                visualX4 = 0;
                threeWide = 0;
                presses = 0;
            }
        } else if(currentShape == 3) {
            if(presses == 0 && xAxis + threeWide < 8 && tetrisBoard[counter][xAxis + 2] == 0 && tetrisBoard[counter + 1][xAxis + 2] == 0 && tetrisBoard[counter + 2][xAxis + 2] == 0) {
                shapeErase(counter); 
                boardStateEraser(counter)
                visualY = 1;
                visualX = -1;
                visualY2 = 1;
                visualX2 = 1;
                visualY3 = 0;
                visualX3 = 0;
                visualY4 = 0;
                visualX4 = 0;
                threeWide = 1;
                presses += 1;
            } else if(presses == 1) {
                shapeErase(counter);
                boardStateEraser(counter)
                visualY = 0;
                visualX = -1;
                visualY2 = 0;
                visualX2 = -1;
                visualY3 = -2;
                visualX3 = 0;
                visualY4 = 0;
                visualX4 = 0;
                threeWide = 0;
                presses += 1;
            } else if(presses == 2 && xAxis + threeWide < 8 && tetrisBoard[counter][xAxis + 2] == 0 && tetrisBoard[counter + 1][xAxis + 2] == 0 && tetrisBoard[counter + 2][xAxis + 2] == 0) {
                shapeErase(counter);
                boardStateEraser(counter)
                visualY = 1;
                visualX = -1;
                visualY2 = 0;
                visualX2 = 0;
                visualY3 = -1;
                visualX3 = 1;
                visualY4 = 0;
                visualX4 = 2;
                threeWide = 1;
                presses += 1;
            }   else if(presses == 3) {
                shapeErase(counter);
                boardStateEraser(counter)
                visualY = 0;
                visualX = 0;
                visualY2 = 0;
                visualX2 = 0;
                visualY3 = 0;
                visualX3 = 0;
                visualY4 = 0;
                visualX4 = 0;
                threeWide = 0;
                presses = 0;
            }
        } else if(currentShape == 4) {
            if(presses == 0) {
                shapeErase(counter);
                boardStateEraser(counter);
                visualY = 1;
                visualX = 0;
                visualY2 = 0;
                visualX2 = 0;
                visualY3 = -1;
                visualX3 = -1;
                visualY4 = -2;
                visualX4 = -1;
                threeWide = 0;
                presses += 1;
            } else if(presses == 1 && xAxis + threeWide < 8 && tetrisBoard[counter + 1][xAxis + 2] == 0) {
                shapeErase(counter);
                boardStateEraser(counter);
                visualY = 0;
                visualX = 0;
                visualY2 = 0;
                visualX2 = 0;
                visualY3 = 0;
                visualX3 = 0;
                visualY4 = 0;
                visualX4 = 0;
                threeWide = 1;
                presses = 0;
            }
        } else if(currentShape == 5) {
            if(presses == 0) {
                shapeErase(counter);
                boardStateEraser(counter);
                visualY = -1;
                visualX = 0;
                visualY2 = 0;
                visualX2 = 0;
                visualY3 = 0;
                visualX3 = 0;
                visualY4 = -1;
                visualX4 = -2;
                threeWide = 0;
                presses += 1;
            } else if(presses == 1 && xAxis + threeWide < 8 && tetrisBoard[counter][xAxis - 1] == 0 && tetrisBoard[counter + 1][xAxis] == 0) {
                shapeErase(counter);
                boardStateEraser(counter);
                visualY = 0;
                visualX = 0;
                visualY2 = 0;
                visualX2 = 0;
                visualY3 = 0;
                visualX3 = 0;
                visualY4 = 0;
                visualX4 = 0;
                threeWide = 1;
                presses = 0;
            }
        } else if(currentShape == 6) {
            if(presses == 0 && xAxis + threeWide + 2 < 8 && tetrisBoard[counter][xAxis + 1] == 0 && tetrisBoard[counter + 1][xAxis + 1] == 0 && tetrisBoard[counter + 2][xAxis + 1] == 0 && tetrisBoard[counter][xAxis + 2] == 0 && tetrisBoard[counter + 1][xAxis + 2] == 0 && tetrisBoard[counter + 2][xAxis + 2] == 0 && tetrisBoard[counter][xAxis + 3] == 0 && tetrisBoard[counter + 1][xAxis + 3] == 0 && tetrisBoard[counter + 2][xAxis + 3] == 0) {
                console.log(tetrisBoard[counter][xAxis + 1])
                shapeErase(counter);
                boardStateEraser(counter);
                visualY = 3;
                visualX = 1;
                visualY2 = 2;
                visualX2 = 2;
                visualY3 = 1;
                visualX3 = 0;
                visualY4 = 0;
                visualX4 = 3;
                threeWide = 2;
                presses += 1;
            } else if(presses == 1) {
                shapeErase(counter);
                boardStateEraser(counter);
                visualY = 0;
                visualX = 0;
                visualY2 = 0;
                visualX2 = 0;
                visualY3 = 0;
                visualX3 = 0;
                visualY4 = 0;
                visualX4 = 0;
                threeWide = -1;
                presses = 0;
            }
        } else if(currentShape == 7) {
            if(presses == 0) {
                shapeErase(counter);
                boardStateEraser(counter)
                visualY = 0;
                visualX = 0;
                visualY2 = 0;
                visualX2 = 0;
                visualY3 = 0;
                visualX3 = 0;
                visualY4 = -1;
                visualX4 = -1;
                threeWide = 0;
                presses += 1;
            } else if(presses == 1 && xAxis + threeWide < 8 && tetrisBoard[counter][xAxis + 2] == 0 && tetrisBoard[counter + 1][xAxis + 2] == 0) {
                shapeErase(counter);
                boardStateEraser(counter)
                visualY = 1;
                visualX = 0;
                visualY2 = 0;
                visualX2 = 0;
                visualY3 = 0;
                visualX3 = 0;
                visualY4 = 1;
                visualX4 = 0;
                threeWide = 1;
                presses += 1;
            } else if(presses == 2) {
                shapeErase(counter);
                boardStateEraser(counter)
                visualY = 1;
                visualX = 0;
                visualY2 = 0;
                visualX2 = -1;
                visualY3 = -2;
                visualX3 = -1;
                visualY4 = 0;
                visualX4 = -1;
                threeWide = 0;
                presses += 1;
            }   else if(presses == 3 && xAxis + threeWide < 8 && tetrisBoard[counter][xAxis + 2] == 0 && tetrisBoard[counter - 1][xAxis + 2] == 0) {
                shapeErase(counter);
                boardStateEraser(counter)
                visualY = 0;
                visualX = 0;
                visualY2 = 0;
                visualX2 = 0;
                visualY3 = 0;
                visualX3 = 0;
                visualY4 = 0;
                visualX4 = 0;
                threeWide = 1;
                presses = 0;
            }
        }
    }
})

 reset.addEventListener("click", function() {
      location.reload()
 });
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
    if(gameOn == 1) {
        shapeFuncArr[Math.floor(Math.random() * shapeFuncArr.length)]();
    }
}
start.addEventListener("click", function(event) {
    if(gameOn ==0) {
        gameOn = 1;
        countDown()
        setInterval(render, 3600)
    }
 })