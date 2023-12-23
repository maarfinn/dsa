// here we remove last digit and count the number of time delete until 0

function countLength(num) {
  let temp = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    temp++;
  }
  return temp;
}
console.log("Time Theta(d)", countLength(10000));