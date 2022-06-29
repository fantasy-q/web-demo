# Your first code with promises

How can the Promise class help us? First off, everyone uses it because it is now the standard way to deal with asynchronous code... so we have to use it. Following the standard is always the best thing to do. Now that we know that, here is a simple example of how to use a promise.

### First promise example

```js
var promise = new Promise(
  function (resolve, reject) {
    setTimeout(function () {
      resolve('hello world');
    }, 2000);
  });
promise.then(function (data) {
  console.log(data);
});
```

### Standard Output

```
hello world
```

As you shown above, you can use the `resolve` function to fullfil the promise. The `then` function binds a callback to the promise and you can use the data given to the `resolve` function.

You can bind multiples callbacks:

### Multiple callbacks

```js
var promise = new Promise(
  function (resolve, reject) {
    setTimeout(function () {
      resolve('hello world');
    }, 2000);
  });
promise.then(function (data) {
  console.log(data + ' 1');
});
promise.then(function (data) {
  console.log(data + ' 2');
});
promise.then(function (data) {
  console.log(data + ' 3');
});
```

### Standard Output

```
hello world 1
hello world 2
hello world 3
```

The `reject` function is used to trigger an error. When you use `then`, you can give 2 functions. The first function is used when the promise exits successfully. The second function is used when the promise encounters an error.

### When an error happens

```js
var promise = new Promise(
  function (resolve, reject) {
    setTimeout(function () {
      reject('We are all going to die');
    }, 2000);
  });
promise.then(
  function success(data) {
    console.log(data);
  }, function error(data) {
    console.error(data);
  });
```

### Standard Error

```
We are all going to die
```

You can still bind multiple `then` methods:

### When an error happens with multiple callbacks

```js
var promise = new Promise(
  function (resolve, reject) {
    setTimeout(function () {
      reject('We are all going to die');
    }, 2000);
  });
promise.then(function success(data) {
  console.log(data + ' 1');
}, function error(data) {
  console.error(data + ' 1');
});
promise.then(function success(data) {
  console.log(data + ' 2');
}, function error(data) {
  console.error(data + ' 2');
});
promise.then(function success(data) {
  console.log(data + ' 3');
}, function error(data) {
  console.error(data + ' 3');
});
```

### Standard Error

```
We are all going to die
```

You can call `resolve` and `reject` multiple times, but this is useless. Once a promise is finished, it can't restart.

### Calling resolve multiple times

```js
var promise = new Promise(
  function (resolve, reject) {
    setTimeout(function () {
      resolve('hello world 1');
      resolve('hello world 2');
      resolve('hello world 3');
      resolve('hello world 4');
    }, 1000);
  });
promise.then(function success(data) {
  console.log(data);
});
```

### Standard Output

```
hello world 1
```
