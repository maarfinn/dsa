// Sieve of Eratosthenes
// here we need to print prime no before any number say 10,
// in thia approach we first discrad all the number divide by 2, 3, and 5 like so and remain will prime

// simple implementation of sieve
function seive(n) {
  let isPrime = new Array(n + 1).fill(true);
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = 2 * i; j <= n; j = j + i) {
        // console.log(i, j);
        isPrime[j] = false;
      }
    }
  }
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      console.log(i);
    }
  }
}
seive(12);

// optimized implementation of sieve time complex O( n log log n )
function seive2(n) {
  let isPrime = new Array(n + 1).fill(true);
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      console.log(" optimized", i);
      for (let j = 2 * i; j <= n; j = j + i) {
        isPrime[j] = false;
      }
    }
  }
}
seive2(12);
