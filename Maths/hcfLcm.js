// finding highest comman factor

function hcf(a, b) {
  let min = Math.min(a, b);
  for (i = 2; i <= min; i++) {
    if (a % i == 0 && b % i == 0) {
      return i;
    }
  }
  return 1;
}
console.log("HCF", hcf(4, 11));

function hcf1(a, b) {
  let min = Math.min(a, b);
  while (min > 1) {
    if (a % min == 0 && b % min == 0) {
      return min;
    }
    min--;
  }
  return min;
}

console.log("HCF1", hcf1(4, 12));

function hcf2(a, b) {
  if (b == 0) return a;
  return hcf2(b, a % b);
}
console.log("HCF best approach", hcf2(4, 11));

// now LCM

function lcm(a, b) {
  let max = Math.max(a, b);
  while (true) {
    if (max % a == 0 && max % b == 0) return max;
    max++;
  }
}
console.log("LCM", lcm(3, 5));

// best approach

function lcm2(a, b) {
  return (a * b) / hcf2(a, b);
}
console.log("LCM best approach", lcm2(3, 5));