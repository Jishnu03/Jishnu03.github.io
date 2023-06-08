
var z=(1>2  && 3==3  && 4<56);//only 1 condition tested
console.log(z);//false

var k=(4<56 && 3==3 && 1>2);//3 conditions are tested
console.log(z);//false

var a=12, b=25;
var m=!(a==b);
var n=(a!=b);
console.log(m);//true
console.log(n);//true

//Logical OR
console.log(true || false);//true
console.log(true || true);//true
console.log(false || true);//true
console.log(false || false);//false

//Logical Not
var n=false;
console.log( !(1==1));//false
console.log(!false);//true
console.log(!n);//true