var inherits = require('util').inherits;

function A() {};
function B() {};
function C() {};

inherits(B, A);
inherits(C, B);
var b = new B();
var c = new C();

console.log(b instanceof B);	//TRUE
console.log(b instanceof A);	//TRUE
console.log(b instanceof C);	//FALSE
console.log(c instanceof A);	//TRUE

