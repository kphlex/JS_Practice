// 1. print 1-255
function print1To255() {
    for (var i = 1; i < 256; i++) {
        console.log(i);
    }
}
print1To255();

// 2. print odds 1-255
function printOdds1To255() {
    for (var i = 1; i < 255; i++) {
        if (i % 2 == 1) {
            console.log(i);

        }
    }
}
printOdds1To255(); 

// 3. print ints and sum 0-255
let sum = 0;

function printIntsAndSum0To255() {
    for (var i = 0; i <= 255; i++) {
        sum += i;
        console.log(i, sum);
    } 
}

// printIntsAndSum0To255();

// 4. Iterate and print array

var array = [74, 29, 13, 22, 86, 4, 134];

function printArrayVals() {
    let i = 0;
    while (i < array.length) {
        console.log(array[i]);
        i++;
    }
    
}
printArrayVals();

// 5. Find and Print Max

var arr = [0, 3, 5, -6, 7, 8, 9, -33, 45, -66, 90];
var y = 59;

var array2 = [0, 3, 5, 6, 7, 8, 9];

function printMaxOfArray(arr) {
    max = arr[0];
    for(var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
    }
}
console.log(max);
}
printMaxOfArray(array2);

// 6. Get and Print Average

function printAverageOfArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = arr[i] + arr[i];
        average = sum / arr.length;
}
console.log(average);
}
printAverageOfArray(arr);

// 7. Array with Odds
var array = [];

function returnOddsArray1to255(array) {
    // var array = [];
    for (var i = 0; i <= 255; i++) {
        if (i % 2 == 1) {
            array.push(i);
        
    }
}
console.log(array);
}

returnOddsArray1to255(array);

// 8. Square the values

function squareArrayVals(arr) {
    newArray = [];
    for (var i = 0; i < arr.length; i++) {
        root = arr[i] * arr[i];
        newArray.push(root);
    }
    console.log(newArray);
}
squareArrayVals(arr);

// 9. Greater than Y

function printArrayCountGreaterThanY(arr, y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++;
        }  
    }
        console.log(count);
}
printArrayCountGreaterThanY(arr, y);

// 10. Zero Out Negative Numbers

function zeroOutArrayNegativeVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
console.log(arr);
}
zeroOutArrayNegativeVals(arr); 

// 11. Max, Min, Average

var arr = [13, -3, 5, 1234, -7, 8, 9, -33, -45, 66, -90];


function printMaxMinAverageArrayVals(arr) {
    let max = 0;
    let min = 0;
    let sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];    
        }
    
    var average = sum / arr.length;
    }
    console.log(max, min, average);
}
printMaxMinAverageArrayVals(arr);

// 12. Shift Array Values

function shiftArrayValsLeft(arr) {
    arr.shift();
    arr.push(0);

    console.log(arr);
}
shiftArrayValsLeft(arr);

// 13. Swap String for Array negative values

function swapStringForArrayNegativeVals (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
    }
}
console.log(arr);
}

swapStringForArrayNegativeVals(arr);

// push it