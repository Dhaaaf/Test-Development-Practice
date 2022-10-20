function myMap(inputArray, callback) {
  // Your code here
  let newArr = [];
  inputArray.forEach(element => {
    newArr.push(callback(element))
  });
  return newArr
}

module.exports = myMap;
