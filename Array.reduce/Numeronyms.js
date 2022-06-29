// Array.prototype.map()
// String.prototype.split()
// String.prototype.join()

const createNumeronym = (word) => word[0] + (word.length - 2) + word[word.length - 1];
const input = 'Every developer likes to mix kubernetes and javascript';
const result = input.split(' ').map(v => v.length > 3 ? createNumeronym(v) : v).join(' ')
console.log(result);

//  'E3y d7r l3s to mix k8s and j8t'
