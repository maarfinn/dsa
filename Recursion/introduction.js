// introduction steps for recursion

// in this example the function stops at line 7 until child function complete task, so cosole will be 3 2 1 1 2 3
function recursion(n) {
  if (n == 0) return;
  console.log(n);
  recursion(n - 1);
  console.log(n);
}
recursion(3);

// // this prints 1 2 1 3 1 2 1
function recursion2(n) {
  if (n == 0) return;
  recursion2(n - 1);
  console.log(n);
  recursion2(n - 1);
}
recursion2(3);

// here what it does is recursion3(16) is sum of 1 + recursion3(8), 1 + recursion3(4), 1 + recursion3(2), 1 + recursion3(1) as recursion3(1) return 0
// so output is 4 it simply calculate log_2(n)
function recursion3(n) {
  if (n == 1) return 0;
  return 1 + recursion3(Math.floor(n / 2));
}
console.log(recursion3(16));

// this function simply return the binary representation eg 1 0 1 for 5
function recursion4(n) {
  if (n == 0) return;
  recursion4(Math.floor(n / 2));
  console.log(n % 2);
}
recursion4(5);

// key points 

// Decimal Number: 25

// Step 1:
// 25 ÷ 2 = 12 (Quotient) Remainder: 1

// Step 2:
// 12 ÷ 2 = 6 (Quotient) Remainder: 0

// Step 3:
// 6 ÷ 2 = 3 (Quotient) Remainder: 0

// Step 4:
// 3 ÷ 2 = 1 (Quotient) Remainder: 1

// Step 5:
// 1 ÷ 2 = 0 (Quotient) Remainder: 1

// The remainders in reverse order: 11001

// Binary Representation of 25 = 11001

// Binary Number: 11001

// Positional Values:
// 1 * 2^4 = 1 * 16 = 16
// 1 * 2^3 = 1 * 8 = 8
// 0 * 2^2 = 0 * 4 = 0
// 0 * 2^1 = 0 * 2 = 0
// 1 * 2^0 = 1 * 1 = 1

// Decimal Equivalent:
// 16 + 8 + 0 + 0 + 1 = 25

// Decimal Equivalent of 11001 = 25