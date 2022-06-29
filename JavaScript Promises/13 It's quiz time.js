function job(state) {
  return new Promise(
    function (resolve, reject) {
      if (state) resolve('success')
      else reject('error')
    }
  )
}

let promise = job(true)         // resolve('success')
promise
/* 1 */.then(function (data) {  // data => 'success'
  console.log(1, 'then')
  console.log(data)             // console.log('success')
  return job(true)              // resolve('success')
})
/* 2 */.then(function (data) {  // data => 'success'
  console.log(2, 'then')
  if (data !== 'victory') {     // 'success' !== 'victory'
    throw 'Defeat'              // throw 'Defeat'
  }                             // throw 之后的语句不会执行，值会被 catch 接收
  return job(true)              // 这行不会执行
})
/* 3 */.then(function (data) {  // 不调用
  console.log(3, 'then')
  console.log(data)
})
/* 4 */.catch(function (error) {// error => 'Defeat'
  console.log(4, 'catch')
  console.log(error)            // console.log('Defeat')
  return job(false)             // reject('error')
})
/* 5 */.then(function (data) {  // 不调用
  console.log(5, 'then')
  console.log(data)
  return job(true)
})
/* 6 */.catch(function (error) {// error => 'error'
  console.log(6, 'catch')
  console.log(error)            // console.log('error')
  return 'Error caught'         // resolve('Error caught')
})
/* 7 */.then(function (data) {  // data => 'Error caught'
  console.log(7, 'then')
  console.log(data)             // console.log('Error caught')
  return new Error('test')      // resolve(new Error('test'))
})
/* 8 */.then(function (data) {  // data => Error('test')
  console.log(8, 'then')        // console.log('Success:', 'test')
  console.log('Success:', data.message)
})
/* 9 */.catch(function (data) { // 不调用
  console.log(9, 'catch')
  console.log('Error:', data.message)
})

// console.log('success')
// console.log('Defeat')
// console.log('error')
// console.log('Error caught')
// console.log('Success:', 'test')
