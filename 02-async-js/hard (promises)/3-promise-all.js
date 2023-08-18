/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

const startTime = performance.now()

function waitOneSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("resolved after 1 seconds")

        },1000)
    })

}

waitOneSecond().then((result)=>{
    console.log(result)
})

function waitTwoSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("resolved after 2 seconds")
        },2000)
    })

}

waitTwoSecond().then((result)=>{
  console.log(result)

}
)


function waitThreeSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("resolved after 3 seconds")
        },3000)
    })

}

waitThreeSecond().then((result)=>{
    console.log(result)
})


function calculateTime(startTime) {
    console.log(startTime - Date.now())

}