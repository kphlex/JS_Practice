// 1. Print odd 1-20

for (var i = 1; i < 21; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}


// 2. Decreasing multiples of 3

for (var i = 100; i > 1; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
} 


// 3. Print Sequence 

for (var i = 4; i > -4; i-= 1.5) {
        console.log(i);
}



//  4.Sigma
var sum = 0;
for (var i = 1; i <= 100; i++) {
    var sum = sum += i;
    console.log(sum);
}

//  5. Factorial

var product = 1;

for (var i = 1; i <= 12; i++) {
    var product = product * i;
    console.log(product);
}



