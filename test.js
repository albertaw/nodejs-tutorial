var n = 8;
var s;
/*
for (var i = 0; i < n; i++){
	if (i%2 === 0) s = " "
	else s = "#"
	for (var j = 1; j < n; j++){

		//if even row 
		if (i%2 === 0){
			//even column
			if (j%2 === 0) s += " "
			//odd column
			else s += "#"
		} 
		//if odd row
		else {
			//even column
			if (j%2 === 0) s += "#"
			//odd column
			else s += " "
		}
	}
	console.log(s+"\n");
}

for (var i = 0; i < n; i++){
	s = "";
	for (var j = 0; j < n; j++){
		//0 + 0 = " " (even)
		//1 + 0 = # (odd)
		//0 + 1 = # (odd)
		//0 + 2 = " " (even)
		//1 + 1 = " " (even)
		//1 + 2 = # (odd)
		if ((i+j)%2 === 0){
			s += " "
		} else {
			s += "#"
		}
	}
	console.log(s+"\n");
}

greet("Harry");
function greet(who) {
  console.log("Hello " + who);
}

console.log("Bye");

function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");

*/

function range (start, end, step) {
	var arr = [];
	if (step === undefined) step = 1
	for (var i = start; i <= end; i += step) {
		arr.push(i);
	}
	return arr;
}

//console.log(range(1,10));
//console.log(range(0,10,2));

var arr1 = [1,2,3,4,5]
var arr2 = [1,2,3,4,5,6]

function reverse(arr) {
	var i = 0;
	var j = arr.length-1;
	while (j > i) {
		var temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
		i++;
		j--;
	}
	return arr;
}

//console.log(reverse(arr1));
//console.log(reverse(arr2));
var arr3 = [3,2,6,1,5,4];
//console.log(arr3.sort(function(a,b){
	//return b - a;
//})); 
function Vector (x, y) {
	this.x = x;
	this.y = y;
	var xx = Math.pow(this.x,2);
	var yy = Math.pow(this.y,2);
	this.length = Math.sqrt(xx + yy);

}

Vector.prototype.plus = function (v) {
	this.x += v.x;
	this.y += v.y
	return {
		x: this.x,
		y: this.y
	}
}

Vector.prototype.minus = function (v) {
	this.x -= v.x;
	this.y -= v.y;
	return {
		x: this.x,
		y: this.y
	}
}

var A = new Vector(2,2);

var B = new Vector(2,2);
console.log(A.getLength());
A.plus(B)
console.log(A.x + " " + A.y);