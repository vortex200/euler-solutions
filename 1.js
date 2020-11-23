// Multiples of 3 and 5

var sum = 0;

for (var i = 1; i < 1000; i++) {
  sum += Number.isInteger(i / 3) ? i : Number.isInteger(i / 5) ? i : null;

  console.log(sum);
}