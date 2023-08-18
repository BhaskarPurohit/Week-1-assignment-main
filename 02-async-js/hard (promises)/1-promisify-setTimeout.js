/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let myPromise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`resolved after ${n} seconds`)
        })
        
    })
    return myPromise
}

wait(5).then((result)=>{
    console.log(result)
})