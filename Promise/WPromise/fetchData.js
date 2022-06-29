import WPromise from './WPromise.js'

/*
  Failed to load module script: 
  Expected a JavaScript module script but the server responded with a MIME type of "text/html". 
  Strict MIME type checking is enforced for module scripts per HTML spec.

  https://stackoverflow.com/questions/56632496/failed-to-load-module-script
*/
console.log('WPromise Imported')

function fetchData(success) {
  return new WPromise(
    function (resolve, reject) {
      setTimeout(() => {
        if (success) {
          resolve("willem")
        } else {
          reject("error")
        }
      }, 1000);
    }
  )
}


fetchData(true).then(
  data => console.log(data)
)

fetchData(false).then(
  null,
  (reason) => console.log(reason) // after 1000ms: error 
)
