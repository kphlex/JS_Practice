
//  had to use solution. Could not get syntax right. 
for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) {
        console.log("FizBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}