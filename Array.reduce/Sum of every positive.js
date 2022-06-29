// Array.prototype.filter()
// Array.prototype.reduce()

const input = [1, -4, 12, 0, -3, 29, -150];
const result = input.filter(p => p > 0).reduce((a, c) => a + c)
console.log(result);

// 42
