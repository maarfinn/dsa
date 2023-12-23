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
console.log("Time complex theta(n) same", recursiveFactorial(10));

// now calculate trailing zeros in factorial of number like zeeoes in the factorial
function countZero(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  let res = 0;
  while (fact % 10 == 0) {
    res++;
    fact = fact / 10;
  }
  return res;
}
console.log("Time theta(n)", countZero(10));

function countZero2(n) {
  let res = 0;
  for (i = 5; i <= n; i = i * 5) {
    res += Math.floor(n / i);
  }
  return res
}

// explanation for countZero2 approach
// let at first i = 5, res = 2
console.log("Time theha(log^n) best approach", countZero2(100));
