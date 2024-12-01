// In var it is function and block scope variable global scope and we can create multiple name of var and change the value in var varibale so in re dubbing we get some confusion from var variable..

var a  = 10;
var a  =20;
console.log(a)

//TDZ = TEMPORAL DEAD ZONE....

// let is only block scope varible and and we can not create same name of variables in the code and its gave error in debugging and and we can update the value in the let variable..
let b = 20;
 b = 30;
 {

    let b = 20;
    console.log(b)
 }
console.log(b)


//const in this we can not do anything we can not change any value in the const variable....

const c =20;
console.log(c)


// hoisting is only possible for var variable 

console.log(d)
var d = 20;