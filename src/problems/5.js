// Smallest multiple

for (var a = 2520; a < 1000000000; a += 20) {
    if (isDivisible(a)) {
      console.log(a);
      return;
    }
  }
  
  function isDivisible(number) {
    for (var i = 1; i <= 20; i++) {
      if (!Number.isInteger(number / i)) {
        return false;
      }
    }
  
    return true;
  }