const buffer = new Buffer.from("Desye");
buffer.write("AL");//overwrite into desye

console.log(buffer.toString())
console.log(buffer)
console.log(buffer.toJSON())