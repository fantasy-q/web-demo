# What is asynchronous in JavaScript

In JavaScript, asynchronous execution comes in multiple forms. The simplest example is shown below:

### Asynchronous code using setTimeout

```js
setTimeout(function() {
   console.log('I am an asynchronous message');
}, 1000);

console.log('I am a synchronous message');
```

### Standard Output

```
I am a synchronous message
I am an asynchronous message
```

You can try to modify the displayed messages or the time provided to the `setTimeout` function. Even with a `0` millisecond delay, the asynchronous message will be displayed after the synchronous message. This is because any function given to the `setTimeout` function will be executed asynchronously, when the main thread is not busy anymore. You can try this code as an example:

### Asynchronous code is always executed after the main thread

```js
setTimeout(function() {
    console.log('I am an asynchronous message');
}); // You can omit the 0

console.log('Test 1');

for (let i = 0; i < 10000; ++i) {
  doSomeStuff();
}

console.log('Test 2');

// The 'I am an asynchronous message' will be displayed when the main thread reach here

function doSomeStuff() {
  return 1 + 1;
}
```

### Standard Output

```
Test 1
Test 2
I am an asynchronous message
```

What can we learn from this? Simply, never trust the delay given to the `setTimeout` function. You can only specify a minimum delay. Even if you set a `0` delay, your code could be executed much later.

[MDN documentation of `setTimeout`](https://developer.mozilla.org/docs/Web/API/WindowTimers/setTimeout)

Try this example of asynchronous code in JavaScript using `setInterval`:

### Asynchronous code using setInterval

```js
let counter = 0;

let timer = setInterval(function() {
    console.log('I am an asynchronous message');
    counter += 1;
    if (counter >= 5) clearInterval(timer);
}, 1000);

console.log('I am a synchronous message');
```

### Standard Output

```
I am a synchronous message
I am an asynchronous message
I am an asynchronous message
I am an asynchronous message
I am an asynchronous message
I am an asynchronous message
```

`setInterval` has the same behavior as `setTimeout` but the code is executed multiple times. You have to call `clearInterval` to kill the timer.

[MDN documentation of `setInterval`](https://developer.mozilla.org/docs/Web/API/WindowTimers/setInterval)

`setTimeout` and `setInterval` are the only native functions of the JavaScript to execute code asynchronously. However, if you are familiar with JavaScript, you have probably dealt with asynchronous execution in various forms. It can happen in multiple situations (non-exhaustive list):

- Performing an HTTP request
- Any I/O operation when you are in a NodeJS environment
- Dealing with a WebSocket (client or server side)

The following code snippet is asynchronously reading a file with NodeJS:

### Read a file in NodeJS

```js
let fs = require('fs');

fs.readFile('test.txt', 'utf8', function(error, data) {
    if (error) {throw error;}
    console.log("Asynchronous message. Content of test.txt:", data);
});

console.log('Synchronous message');
```

### Standard Output

```
Synchronous message
Asynchronous message. Content of test.txt: Hello world !
```