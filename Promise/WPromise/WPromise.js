export default class WPromise {

  static pending = "pending"
  static fulfilled = "fullfulled"
  static rejected = "rejected"

  constructor (executor) {
    this.status = WPromise.pending // 初始化状态为pending
    this.value = undefined; // 存储 this._resolve 即操作成功 返回的值
    this.reason = undefined; // 存储 this._reject 即操作失败 返回的值

    // 存储then中传入的参数
    // 至于为什么是数组呢？因为同一个Promise的then方法可以调用多次
    this.callbacks = [];

    // 这里绑定this是为了防止执行时this的指向改变，this的指向问题，这里不过多赘述
    executor(this._resolve.bind(this), this._reject.bind(this))
  }

  // onFulfilled 是成功时执行的函数
  // onRejected 是失败时执行的函数
  then(onFulfilled, onRejected) {
    // 这里可以理解为在注册事件
    // 也就是将需要执行的回调函数存储起来
    this.callbacks.push({
      onFulfilled,
      onRejected
    })
  }

  _resolve(value) {
    console.log('_________________resolve:', value);
    this.value = value
    this.status = WPromise.fulfilled
    // 通知事件执行
    this.callbacks.forEach((callback) => this._handler(callback))
  }

  _reject(reason) {
    console.log('_____________________reject:', reason);
    this.reason = reason
    this.status = WPromise.rejected
    // 通知事件执行
    this.callbacks.forEach((callback) => this._handler(callback))
  }

  _handler(callback) {
    console.log('______________________handler:', callback);
    const { onFulfilled, onRejected } = callback

    if (this.status === WPromise.fulfilled && onFulfilled) {
      // 传入存储的值
      onFulfilled(this.value);
    }

    if (this.status === WPromise.rejected && onRejected) {
      // 传入存储的错误信息
      onRejected(this.reason);
    }
  }
}

