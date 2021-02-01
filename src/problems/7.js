// 10001st prime

var primeArr = [];

let i = 2;
while (primeArr.length < 10001) {
  if (isPrime(i)) {
    primeArr.push(i);
  }
  i++;
}

console.log(primeArr[10000]);

function isPrime(number) {
  for (var a = 2; a < number; a++) {
    if (number % a === 0) {
      return false;
    }
  }
  return true;
}