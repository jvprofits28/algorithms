// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number
//what is an even number?
//an even number is a number when divided by two
//has a reaminder of zero
// %
//we will be using integers
//we need to check if the reaminder of the number is equal to zero
// if it does equal to zero, then it is even
// if does not eqal to zero,then is odd
function oddOrEven(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(oddOrEven(1998));
