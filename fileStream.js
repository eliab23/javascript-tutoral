const fs = require("node:fs")

const readablestream = fs.createReadStream("./text1.txt", {
    encoding: "utf-8",
    highWaterMark: 2
})

const writablestream = fs.createWriteStream("./file.txt")

readablestream.on("data", (chunks) =>{
    console.log(chunks);
    writablestream.write(chunks)
})

readablestream.pipe(writablestream)