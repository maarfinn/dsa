// introduction steps for recursion

// in this example the function stops at line 7 until child function complete task, so cosole will be 3 2 1 1 2 3 
function recursion(n) {
  if (n == 0) return;
  console.log(n);
  recursion(n - 1);
  console.log(n);
}
recursion(3)