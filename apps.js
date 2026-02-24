//  Loadin local module
// require( "../Add_Loca_M.js");
// console.log("Hello viewers");

//  loading exported local module
const mul = require("./Expo_module.js")
const product = mul(12, 3);
const product1 = mul(10, 3);
console.log(product); 
console.log(product1); 