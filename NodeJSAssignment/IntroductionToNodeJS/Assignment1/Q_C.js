const Math = require("./Math");

let a = 5, b = 10;

console.log( Math.WelcomeText );
console.log( " Performing basic mathematics operations for the numbers 5 and 10".bold.green );
console.log(" Addition : ".green, Math.Addition(a,b));
console.log(" Subtraction : ".grey, Math.Subtraction(a,b));
console.log(" Multiplication : ".blue, Math.Multiplication(a,b));
console.log(" Division : ".red, Math.Division(a,b));

