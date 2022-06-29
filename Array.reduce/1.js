// 1) Turn an array of numbers into a total of all the numbers

function total(arr) {
  return arr.reduce((a, c) => {
    return a + c
  })
}

console.log(total([1, 2, 3])); // 6

