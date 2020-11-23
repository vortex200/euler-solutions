// Sum square difference

var squareSum = 0;
var sumSquare = 0;

for (var i = 1; i <= 100; i++) {
  squareSum += i * i;
  sumSquare += i;
}

sumSquare *= sumSquare;

console.log(sumSquare - squareSum);