// Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number

setInterval(function countdown(num) {
  num--;
  if (num <= 1) {
    clearInterval();
  }
}, 1000);
