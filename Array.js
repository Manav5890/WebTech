// creation of array

// let arr = [1,2,23,58,15];
// arr.push('Manav')
// arr.push(52)
// arr.push(20)
// arr.push(22)
// arr.push(62)
// // console.log(arr.slice(1,3))
// arr.splice(1,2,'kunal')
// console.log(arr)



// array constructor

// let brr = new Array('manav', 1 , true)
// console.log(brr)

// console.log(typeof(arr))
// console.log(typeof(brr))

// map the function of an array

// let arr = [1,2,6,5]

// arr.map((number)=> {
//     console.log(number+1)
// })

// let ansArray = arr.map((number) => {
//     return number*number 
// })

// console.log(ansArray)

// filter function for array

// let arr = [20,10,3,13,20,85,2,1]

// let ans = arr.filter((number)=>{
//     return number%2 == 0;
    // if(number%2==0){
    //     return true;
    // }else{
    //     return false;
    // }
// })
// console.log(ans)

// array using filter condition

// let arr = [1,2,'Manav', 'kunal', null];

// let ans= arr.filter((value) =>{
//     if(typeof(value)== 'string'){
//         return true;
//     }else{
//         return false;
//     }
// })

// console.log(ans)

// array using reduce condition

// let arr1 = [20,10,30]

// let ans1 = arr1.reduce((acc, curr) =>{
//     return acc+ curr;
// }, 0)

// console.log(ans)

// SORTING OF AN ARRAY

// let arr = [1,10,15,9,5]
// arr.sort((a,b)=> b-a)

// console.log(arr)


// find the array using find

// let arr1 = [4,9,6,18 , 'manav']

// let ans = arr1.find(arr1 => arr1>10);
// console.log(ans)



// let arr1 = [20,10,30]

// let ans1 = arr1.reduce((acc, curr) =>{
//     return acc+ curr;
// }, )
// console.log(ans1
    
//  )

// for each loop in array

// let arr = [10,20,30];
// arr.forEach((value, index)=>{
//     console.log("Number:", value ,  "index:", index);
// })

// for(let index =0; index<4; index++){
//     console.log(arr[index])
// }

// for each arr in function

// let arr = [10,20,30,40,50]

// function getSum(arr){
//     let sum=0;
//     arr.forEach((value)=>{
//         sum = sum +value;
//     })
//     return sum;
// }

// let totalSum = getSum(arr)
// console.log(totalSum)

// reduce right we have to start the execution from right then we have to use reduceright

// let arr = [10,20,3,5,50,8];

// let reduceData = arr.reduceRight((acc, curr)=>{
//     return acc*curr;

// },1)
// console.log(reduceData)

let arr = [2,15,51,21,5];
let reverse = arr.reduce((acc, curr)=>{
    return (curr , acc)
}, [])                                                                                                                                                                                                                  

console.log(reverse)