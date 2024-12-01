// class Human{

// }
// const object1 = new Human();

// function greetme(greet, fullName){
//     console.log("manav", fullName)
//     greet()
// }

// function greet(){
//     console.log("Greeting for the day")
// }
// greetme(greet)

// const arr = [
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     }
// ];
// let first = arr[0]
// let ans = first(5,10)
// console.log(ans)

// console.log(greet)

// var greet = function(){
//     console.log("Hello")
// }

// class Human{
//     age= 15;
//     #wt = 80;



//     walking(){
//         console.log("User is walking")
//     }
//     get fetchWeight(){
//         return this.#wt
//     }
//     set ModifyWeight(val){
//         this.#wt = val
//     }
// }

// function sayName(myName){
//     console.log("My name is:", myName)
// }
// sayName("manav")

// function say(value = {age:15, name:"manav"}){
//     console.log("hello", value)
// }

// say()

// function getAge(){
//     return 19;
// }

// function utility(Name, age = getAge()){
//     console.log("Manav", age)
// }

// utility()

// let curr = new Date()
// console.log(curr)

let src ={
    age:18,
    name : "manav"
}


// let dest = {...src}
// src.age = "90"
// console.log("dest :" ,dest)
// console.log("src :" ,src)

let dest = Object.assign({}, src);
console.log("dest :" ,dest)
console.log("src :" ,src)