const numArray = (n) => [...Array(n).keys()].map(x => ++x);

// console.log(numArray(1000));

const data = (n) => {
  function equation(x) {
    return Math.pow((x - 500), 2);
  }
  const data = [];

  numArray(n).forEach(element => {
    data.push(equation(element));
  });
  return data;
}

var palette = [];
var max_iter = 1024;

function makePalette() {
  function wrap(x) {
    x = ((x + 256) & 0x1ff) - 256;
    if (x < 0) x = -x;
    return x;
  }
  for (i = 0; i <= this.max_iter; i++) {
    palette.push([wrap(7 * i), wrap(5 * i), wrap(11 * i)]);
  }
}
makePalette();


function extract(n) {
  const arr = new Array();
  palette.forEach(array => {
    arr.push(array[n])
  });
  return arr;
}