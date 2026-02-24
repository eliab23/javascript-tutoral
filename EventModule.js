const EventEmitter = require("node:events")  //class

const emitter = new EventEmitter(); //object

// event listner

emitter.on("greet", function(name){
    console.log(`Hello, ${name}`)
})

// Emmitting the greet event with a parameter
emitter.emit("greet", "AL")
