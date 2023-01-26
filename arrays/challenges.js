// 1. Always Hungry

function alwaysHungry(arr) {
    for (var i = 0 ; i < arr.length ; i++) {
        if (arr[i] == "food") {
            console.log("Yummyy");
        } 
    }   if (arr.some(isNaN)) {
            console.log("Im Hungry");
    }

}


alwaysHungry([3.14, "food", "pie", true, "food"]);

alwaysHungry([4,1,5,7,2]);


// 2. High Pass filter

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0 ; i < arr.length ; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
    }
}
    return filteredArr;

}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

// 3. Better than Average

function betterThanAverage(arr) {
    var sum = 0;
    for (var i = 0 ; i < arr.length ; i++) {
        sum += arr[i];
    }
    var count = 0;
    count = sum % arr.length;

    return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);   

// 4. Array reverse

// W3 Schools
function reverse(arr) {
    arr.reverse();
    return arr;
} 
//         OR

function reverse(arr) {
    var newArray = [];
    for (var i = arr.length -1 ; i > -1; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

// 5. Fibonacci Array

function fibonacciArray(n) {
    var fibArr = [0, 1];
    while (fibArr.length !== n) {
        sum = fibArr[fibArr.length - 1] + fibArr[fibArr.length -2];
        fibArr.push(sum);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result);