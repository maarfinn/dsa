// in this we need to find the power of the given x and y like x^y

function power(x, y) {
  let res = 1;
  for (let i = 0; i < y; i++) {
    res = res * x;
  }
  return res;
}

console.log("Power Time O(log (n))", power(2, 5));

// // recursive way to solve this solution
function power2(x, y) {
  // Base case 1: If the exponent (y) is 0, any number raised to the power of 0 is 1.
  if (y === 0) return 1;

  // Base case 2: If the exponent (y) is 1, return the base (x) itself.
  // if (y === 1) return x;

  // For exponents greater than 1, continue recursively calculating the power.
  let temp = power2(x, Math.floor(y / 2)); // Recursively compute half the exponent

  // If the exponent is even (y is divisible by 2 without remainder)
  if (y % 2 === 0) {
    return temp * temp; // Return the square of the result of the recursive call
  } else {
    // If the exponent is odd
    return x * temp * temp; // Return the square of the result multiplied by the base
  }
}
console.log("Power Recursive", power2(2, 5));
