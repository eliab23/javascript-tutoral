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
// or we can use by simple way pipe used
readablestream.pipe(writablestream)