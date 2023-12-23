// here reverse number like 763 then last digit is 3 then get by 763 % 10 is 3 then 3*10+6 same as above likewise

function isPallindrome(num) {
  let rev = 0;
  temp = num;
  while (temp !== 0) {
    let ld = temp % 10;
    rev = rev * 10 + ld;
    temp = Math.floor(temp / 10);
  }
  return rev == num;
}
console.log("Time complexity thetha(d) where d is the digits ==>", isPallindrome(767));
