// Largest prime factor

function isPrime(number) {
  for (var a = 2; a < number; a++) {
    if (number % a === 0) {
      return false;
    }
  }
  return true;
}

const primeArray = [];

for (var i = 2; i < 10000; i++) {
  if (isPrime(i)) {
    primeArray.push(i);
  }
}

let remainder = 600851475143;

while (remainder > 1) {
  for (var b = 0; b < primeArray.length; b++) {
    const divided = remainder / primeArray[b];
    if (Number.isInteger(divided)) {
      console.log("Number divides by " + primeArray[b]);
      remainder = divided;
      console.log("Remainder " + remainder + "\n");
      break;
    }
  }
}
