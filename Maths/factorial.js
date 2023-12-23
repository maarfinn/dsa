// factorial of number

function factorial(num) {
  let res = 1;
  for (let i = 2; i <= num; i++) {
    res = res * i;
  }
  return res;
}
console.log("Time complex theta(n)", factorial(3));

function recursiveFactorial(num) {
  if (num == 0) return 1;
  return num * recursiveFactorial(num - 1);
}
console.log("Time complex theta(n) same", recursiveFactorial(3));
