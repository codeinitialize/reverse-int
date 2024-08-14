module.exports = function reverse (n) {
  let nToStr = n.toString();

  let reversedStr = nToStr.split('').reverse().join('');

  let reversedNum = parseInt(reversedStr, 10);

  return reversedNum;
}
