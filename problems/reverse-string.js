module.exports = function reverseString(string) {
  // Your code here
  if(typeof string !== "string"){
    throw new TypeError("Not a string!")
  }
  return string.split("").reverse().join("")
};
