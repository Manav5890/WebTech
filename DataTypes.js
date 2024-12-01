// let age = 18;
// if (age>=18){
//     console.log("You can drive")
//     alert("Survey for Driving")
// }else{
//     console.log("You are noob")
// }

//if elseif statement

// let score = 85;
// if(score>=80){
//     console.log("You are Excellent")
// }else if(age>=50){
//     console.log("You are good")
// }else if(score>=33){
//     console.log("You are pass")
// }else if(score<33){
//     console.log("You are fail")
// }

//nested if else statment

let number = 85;
if(number>0){
    if(number %2==0){
        console.log("Number is even and postive")
    }else{
        console.log("Number is odd and postive")
    }
} else if(number<0){
    console.log("Number is negative")
}else{
    console.log("Number is zero")
}

//if elseif ladder

let marks = 95;
if(marks>=90){
    console.log("You are Topper")
}else if(marks>=75){
    console.log("You are Average")
}else if(marks>=50){
    console.log("Not Good in Study")
}else if(marks>=33){
    console.log("You are pass")
}else{
    console.log("You are fail")
}

//Using of OR operator

let day = "saturday";
if(day == "saturday" || day == "sunday"){
    console.log("Its weekend")
}else{
    console.log("Its Working day")
}

// Using of AND operator

let age = 18;
let hasDrivingLicense = true;
if(age>=18 && hasDrivingLicense){
    console.log("You can drive")
}else{
    console.log("You can drive")
}

//Using of NOT operator

let isRaining =false
if(!isRaining){
    console.log("You dont need an umbrella")
}else{
    console.log("You need Umbrella")
}

//function syntax

// function sum(x,y){
//     let s = x+y;
//     console.log(s)
//     returns;
// }
// result= sum(4,5);

// let 
// function age(){
//     if(age>20){
//         console.log("you are become adult")
//     }else if(age> 35){
//         console.log("You are noob")
//     }else{
//         console.log("You to good")
//     }
// }

// for(let a = 10; a<=20; a++, console.log("yo")){
//     console.log(a)
  
// }
// let i = 10;
// while(i<20, console.log("yo")){
    
// }

console.log(10 << 2);


for(let a =1; a<=4; a++){
    if(a==3){
        continue;
    }else(
        console.log(a)
    )
}

// STRING

let name = `manav
gandhi`;
console.log(name)

// sring by concatination

let op1 = "Hello";
let op2 = "world";

let finalAns = `${op1}${op2}`
console.log(finalAns)

// string convert to uppercase and lowercase

console.log(op1.toLowerCase())
console.log(op2.toUpperCase())

// substring

let str = "Manav"
console.log(str.substring(2,4))

//split the string

let sentencce = "This is javascript split the string"
let words = sentencce.split(' ');
console.log(words)