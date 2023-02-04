var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
var dojoDiv = document.querySelector("#the-dojo");



// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for(var x=0; x<theDojo.length; x++) {
        for(var y=0; y<theDojo[x].length; y++) {
            result += `<button class="tatami" onclick="howMany(${y}, ${x}, this)"></button>`;
        }
    }
    // console.log(result);
    return result;
}

var totalNinjas = null;


function howMany(x, y, element) {
    // Pulls values adjacent to button clicked ;
    const top = y-1;
    const bottom = y+1;
    const left = x-1;
    const right = x+1;

    topLeft =  top < 0 || left < 0 ? 0 : theDojo [top] [left]

    topSide = top < 0  ? 0 : theDojo [top] [x]

    topRight = top < 0 || right >= theDojo.length ? 0 : theDojo [top] [right]

    rightSide =  theDojo [y] [right] || 0

    bottomSide = bottom >= theDojo.length ? 0 : theDojo [bottom] [x]

    bottomLeft =  bottom >= theDojo.length || left < 0 ? 0 : theDojo [bottom] [left]

    leftSide =  theDojo [y]  [left] || 0
    
    bottomRight =  bottom >= theDojo.length || right >= theDojo.length ? 0 : theDojo [bottom] [right]

    // Adds values and returns total
    totalNinjas = topLeft + topSide + topRight + rightSide + bottomLeft + bottomSide + leftSide + bottomRight;
    element.innerText = totalNinjas;

    console.dir({totalNinjas, topSide, topLeft, topRight, rightSide, bottomSide, bottomLeft, leftSide, bottomRight, x, y});
}


    
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
// dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    


