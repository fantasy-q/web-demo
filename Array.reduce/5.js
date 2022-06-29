// 5) Given an array of arrays, flatten them into a single array

function flatten(arr) {
  return arr.reduce((p, c) => {
    return p.concat(c)
  }, [])
}

var arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];


// Note: Take a look at Array.concat() to help with this one
