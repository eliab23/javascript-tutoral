const fs = require("node:fs")
//Read a file 

// const tex = fs.readFile("./text.text", "utf-8",  (error, data) =>{
//     if(error){
//         console.log(error);
    
//     }else {
//         console.log(data);
//     }
// })
// console.log(tex);

// creating new file

// fs.writeFile("./text1.txt", "Subscribe",  (error) =>{
//     if(error){
//         console.log(error);
    
//     }else {
//         console.log("file created");
//     }
// })

// updating a file
// fs.appendFile()
// fs.writeFile()
fs.unlink("./text3.txt", (error) =>{
    if(error){
        console.log(error);
    
    }else {
        console.log("file deleting");
    }
})
