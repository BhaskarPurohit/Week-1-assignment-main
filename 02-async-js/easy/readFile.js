const fs = require('fs')

fs.readFile('3-read-from-file.md','utf-8',(err, data)=>{
    if(err){
        console.error("file nhi mili aur error aagai")
    }
    else{
        console.log(data)
    }

})

let result = 0

for(let i=0; i<10000; i++){
    result = result +i
    
}

console.log(result)