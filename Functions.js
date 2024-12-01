// function printcounting(){
//     for(let i = 1; i<=100; i++){
//         console.log(i)
//     }
// }

// printcounting()

// function printNumber(num){
//     console.log("Printing Number :",  num)
// }
// printNumber(5)


// function getAverage(num1, num2){
//     let avg = (num1+num2)/2
//     console.log("Average of Two number is :",avg)
// }
// getAverage(10,20)

// return type function we have to create the variable to store the return value

// function getSum(a,b,c){
//     let sum = a + b+ c;
//     return sum;   
// }
// let ans = getSum(10,20,30)
// console.log(ans)

// function getMyName(FirstName, LastName){
//     let fullName = FirstName + " " +LastName;
//     return fullName;
    // after return it is unreachable code its not runnable
// }
// let name = getMyName("Manav", "Gandhi")
// console.log(name)

// let squareOfNumber = function(a,b){
//     let solve = a*b;
//     return solve;
// }
// let ans = squareOfNumber(2,2)
// console.log(ans)


// function getExp(x,y){
//     let ans = x**y;
//     return ans;
// }
// console.log(getExp(20,2))

// arrow function

// const getexp = (x,y) =>{
//     let ans = x**y;
//     return ans;
// }

// console.log(getExp(2,10))

function a(c=10,b=20 ){
    console.log(c+b)
}

a(null, undefined)