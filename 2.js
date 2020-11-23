// Even Fibonacci numbers

var first = 1;
var second = 2;

var sum = 0;
var max = 4000000;

while (second < max) {
  console.log(first, second);
  sum += second % 2 === 0 ? second : null;
  const a = second;
  second += first;
  first = a;

  console.log(sum + "\n");
}