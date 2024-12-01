// // find the fatcrial of given number


// let num = parseInt(prompt("Enter a non-negative integer:"));

// let fac = ()=>{
//     let res = 1;
//     for(let index=1; index<=num; index++){
//         res *=index;
        
//     }
//     console.log(res)
// }
// fac() 

// check the input is palindrome or not


// let input = parseInt(prompt("Enter a number"));

// let pal= ()=>{
//     let reversenum= 0;
//     if(input !=0){
//         let digit =input%10;
//         reversenum = reversenum *10 + digit;
//         input = input/10;
//         console.log("its is palidro")
//     }else if(num== reversenum){
//         console.log("its is a palidrome number")
//     }else{
//         console.log("it is not a palidrome number")
//     }
// }

// pal()

var string = prompt("Enter a String");
var len = string.length

for(var i=0; i<len/2; i++){
    if(string[i] != string[len- 1 - i]){
        console.log("it is not plaidrome")
    }else{
        console.log("It is palidrome")
    }

}



