function printDivisors(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      console.log(i);
    }
  }
}
console.log("Time theta(n)", printDivisors(10));

// best approach but print in unsorted order
function printDivisorsBest(n) {
  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      console.log(i);
      if (i !== n / i) {
        console.log(n / i);
      }
    }
  }
}
console.log("Time theta(root n)", printDivisorsBest(10));

// best approach sorted as well
function printDivisorsBestSorted(n) {
  let i;
  for (i = 1; i * i < n; i++) {
    if (n % i == 0) {
      console.log(i);
    }
  }
  for (; i >= 1; i--) {
    if (n % i == 0) {
      console.log(n / i);
    }
  }
}
console.log("Time theta(root n) sorted ==>", printDivisorsBestSorted(10));
