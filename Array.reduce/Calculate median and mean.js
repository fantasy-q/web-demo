// Array.prototype.reduce()
// Array.prototype.sort()
// Math.abs()

const input = [12, 46, 32, 64];
input.sort((a, b) => a - b);
const result = input.reduce((a, c, i, arr) => {
  const l = arr.length
  a.mean += c / l
  if (!a.median) {
    l % 2 === 0 ?
      a.median = (arr[l / 2 - 1] + arr[l / 2]) / 2 :
      a.median = arr[(l - 1) / 2]
  }
  return a
}, { mean: 0, median: 0 })

console.log(result)

// { mean: 38.5, median: 32 }
