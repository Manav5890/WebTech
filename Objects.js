let ComapanyName = "Qspider"

let emp1 = {
    name:"manav",
    age:21,
    salary: 60000,
    empId : 10,
    emailId : "manavgandhi169@gmail.com",
    ComapanyName : [ComapanyName] ,
    work () {
        console.log("behaviour")
    }}

// };
// // emp1.work();
// // console.log(emp1)
// console.log(Object.values(emp1), Object.keys(emp1))
Object.values(emp1).forEach((ele, index)=>{
       console.log(ele)     
})

// let obj2 = new Object()

// obj2.empname = "manav"
// obj2.age = 21
// obj2.salary = 200000

// console.log(obj2)

// in fuction calling in object if we cant use key name then we have to use only named fn only. in object we should not use function 

// In entries method it will return an array for each key value pair 


// let obj = {
//     empName :"manav",
//     empId: 420,
//     Salary: 15000,
//     add: "india",
//     Deptno : 10,
// }

// console.log(Object.entries(obj))

// let op = [
//     ["empname", "kishan"]
//     ["salary", 420]
//     ["empid", 1]
//     ["add", "India"]
// ];

// console.log(Object.fromEntries(op))

// let obj = {
//     empName :"manav",
//     empId: 420,
//     Salary: 15000,
//     add: "india",
//     Deptno : 10,
// }
// let obj2 = {
//     empName :"kunal",
//     empId: 42,
//     Salary: 105000,
// }
// console.log(Object.assign({},obj,obj2))


// target object is only one we can pass multiple sources 

// Object.seal(obj); // now we cannot make any new keys and now we can not delete the keys but we can update
// obj.empName='delete';
// console.log(obj);
// console.log(Object.isSealed(obj))

// IsSealed method use for check the object is sealed or not...
// IsFrozen method the particular object is freeze or not....

// hasOwnProperty the particular property is present in object or not.....

// console.log(obj.hasOwnProperty("empName"))