// Array.prototype.map()
// String.prototype.split()
// String.prototype.join()

const input = 'George Raymond Richard Martin';
const result = input.split(' ').map(v => v[0]).join('')
console.log(result);

// 'GRRM'
