function decrement(n) {
  if (n == 0) return;
  console.log(n);
  decrement(n - 1);
}

decrement(5);