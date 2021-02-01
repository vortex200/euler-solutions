function isPrime(number) {
  for (var a = 2; a < number; a++) {
    if (number % a === 0) {
      return false;
    }
  }
  return true;
}

module.exports = isPrime;
