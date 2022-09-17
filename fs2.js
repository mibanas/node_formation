const fs = require('fs')

fs.readFile('./welcome.txt','utf-8',(err,result) =>{
    if (err){
        console.log("reading file problem..0")
    } else {
        console.log(result)
    }
})