// Array.prototype.map()
// Math.min()
// Math.max()
const input = [
  {
    name: 'John',
    age: 13
  },
  {
    name: 'Mark',
    age: 56,
  },
  {
    name: 'Rachel',
    age: 45,
  },
  {
    name: 'Nate',
    age: 67,
  },
  {
    name: 'Jeniffer',
    age: 65,
  }
];

const result = input.map(v => v.age)
const [max, min] = [
  Math.max(...result),
  Math.min(...result)
]
console.log([min, max, max - min])

// [13, 67, 54]
