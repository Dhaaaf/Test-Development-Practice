
function returnsThree() {return 3;}

function reciprocal(n) {
  if (n < 1) {
    throw new TypeError("Number is less than one")
  } if (n >1000000) {
    throw new TypeError("Number is more than one million")
  }
  return 1/n
}

module.exports = {
  returnsThree,
  reciprocal
};
