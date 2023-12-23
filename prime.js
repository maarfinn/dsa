function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}
console.log("Time O(i)", isPrime(13));

function isPrime2(num) {
  if (num === 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}
console.log("Time O(root(n))", isPrime2(13));

// best approach 3 times faster make code as with good approach follow this only
function isPrime3(num) {
  if (num == 1) return false;
  if (num == 2 || num == 3) return true;
  if (num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i == 0 || num % (i + 2) == 0) return false;
  }
  return true;
}
console.log("Time complex best", isPrime3(38));
