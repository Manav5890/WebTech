let emp1 = {
    ename : 'Manav',
    age : 21,
    salary : 52000
}
let emp2 = {
    ename : 'Manav',
    age : 21,
    salary : 52000
}
let emp3 = {
    ename : 'Manav',
    age : 21,
    salary : 52000
}
let emp4 = {
    ename : 'Manav',
    age : 21,
    salary : 52000
}
let emp5 = {
    ename : 'Manav',
    age : 21,
    salary : 52000
}

// THIS KEYWORD IN FUNCTIONS BY DEFAULT IT WILL TARGET TO WINDOW OBJECT       
// FOR EVERY FUNCTION NEW OBJECT IS CREATED 

// class printdata{
//     constructor(){
//         this.a = 10;
//     }
// }

// function printdata(a,v,c){
//    console.log(this.ename)
//    console.log(this.age)
//    console.log(this.salary)
//    console.log(a,v,c)
// }
// printdata.call(emp1);
// printdata.call(emp2);
// printdata.call(emp3);
// we can declare the variable without any datatype and access the variable by the help of this keyword...

// connecting any function to the object is know as binding.

// there are three methods
//1. call          2. apply      3. bind

// this keyword target to window object.



// 2. apply method

// printdata.apply(emp1,[20,50,60])

// 3. Bind method

// console.log(printdata.bind(emp1,10,20,30) ) // bound function its is a connected function

// printdata.bind(emp1,10,20,30)()

let ans = (a,v,c)=>{
    console.log(this.emp1)
    console.log(this.ename)
    console.log(this.age)
    console.log(a,v,c)
}

ans.call(emp1,20,20,20)

//we cant bind arrow function it gives undefined and it is possible for parameters.