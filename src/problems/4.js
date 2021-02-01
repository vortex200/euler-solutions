// Largest palindrome product

let palindromes = [];

for (var a = 999; a > 100; a--) {
  for (var b = 999; b > 100; b--) {
    if (isPalindrome(a * b)) {
      palindromes.push(a * b);
    }
  }
}

palindromes.sort(compare);

function compare(a, b) {
  return b - a;
}

console.log(palindromes[0]);

function isPalindrome(number) {
  const digitArr = number.toString().split("");
  let result = true;
  for (var i = 0; i < digitArr.length; i++) {
    if (digitArr[i] !== digitArr[digitArr.length - 1 - i]) {
      result = false;
    }
  }

  return result;
}