# How to join promises

Sometimes you have multiple asynchronous tasks to perform and you have to start something when every task is done. When using promises, you can do that with [`Promise.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all). Run the following code to understand the basics of it.

### Promise.all example

```js
function job(delay) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('Resolving', delay);
      resolve('done ' + delay);
    }, delay);
  });
}

var promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);
promise.then(function(data) {
  console.log('All done');
  data.forEach(function(text) {
    console.log(text);
  });
});
```

### Standard Output

```
Resolving 500
Resolving 1000
Resolving 1500
Resolving 2000
All done
done 1000
done 2000
done 500
done 1500
```

As you can see, `Promise.all` returns a promise. The received data is an array containing the data of each given promise. *The promise is resvoled when all given promises are resolved*.

Beware, `Promise.all` has a fail-fast behaviour. If a given promise is rejected, the resulting promise of `Promise.all` will be rejected at this exact moment. It will not wait for the other promises to complete, and the only received data is the error of the rejected request. See the following example for a better understanding.

### Promise.all fail-fast behaviour

```js
let p1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, 'p1');
});
let p2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000, 'p2');
});
let p3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1200, 'p3');
});
let p4 = new Promise(function(resolve, reject) {
  setTimeout(reject, 300, 'p4');
});
let p5 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 800, 'p5');
});

let promise = Promise.all([p1, p2, p3, p4, p5]);

promise.then(function(data) {
  data.forEach(function(data) {
    cconsole.log(data);
  });
}).catch(function(error) {
  console.error('error', error);
});
```

### Standard Error

```
error p4
```

As you can see, `error p4` is displayed. We can't access the result of the other promises. You should only use `Promise.all` when you need for all of your promises to resolve successfully.

What if you want to start multiple asynchronous jobs at once and you want results even if a job is rejected? Just use `catch`. See the following example.

### Promise.all with catch

```js
let p1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, 'p1');
});
let p2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000, 'p2');
});
let p3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1200, 'p3');
});
let p4 = new Promise(function(resolve, reject) {
  setTimeout(reject, 300, 'p4');
});
let p5 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 800, 'p5');
});

let promise = Promise.all([
  p1.catch(function() {}),
  p2.catch(function() {}),
   p3.catch(function() {}), 
   p4.catch(function() {}),
   p5.catch(function() {})
]);

promise.then(function(data) {
  data.forEach(function(data) {
    console.log(data);
  });
}).catch(function(error) {
  console.error('error', error);
});
```

### Standard Output

```
p1
p2
p3
undefined
p5
```

In this example, we don't give the promises directly to `Promise.all`. We give the result of `p.catch` (this is an auto-resolved promise) so `Promise.all` won't stop. In this case, however, you have to test the received data yourself to check for errors.
