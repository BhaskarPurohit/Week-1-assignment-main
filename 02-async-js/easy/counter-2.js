let count = 0 

setTimeout(printTimeout,1000)

function printTimeout(){
  console.clear()
  console.log(count)
  count ++
  setTimeout(printTimeout, 1000)
}