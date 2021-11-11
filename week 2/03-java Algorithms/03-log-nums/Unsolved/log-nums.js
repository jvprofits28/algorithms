// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

function logNums(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i);
    if (num < i) {
      return;
    }
  }
}
logNums(6);
