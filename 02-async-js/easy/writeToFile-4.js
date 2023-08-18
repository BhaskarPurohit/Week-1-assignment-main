const fs = require('fs')

const contentToWrite = "writing content to this file......"

fs.writeFile('sample.txt', contentToWrite, 'utf8', (err)=>{
    if(err){
        console.error("could not write to the file!!!")
        return 
    }
    console.log("written to the file successfully!!!!!")
})