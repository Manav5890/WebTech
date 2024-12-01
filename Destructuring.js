// extractring the element from array and elements


// two types of destructuring
// 1. array 2. object destructuring

// we can achieve destructuring by using spread operator and rest parameters [...] operator

// in destructuring rest parameter it is used to pack the elemnents, it is used in the last to wrapping all the elements of an array... [a,b,c, ...d]

// we can not skip the elements in the array we need to pass all the elements in the array operator to access them.

// let arr = [10,20,23,505,621]

// // let [a,b,c, ...d] = [...arr]

// let arr1 = [10,20,[50,[20,50]],456]

// let [a,b,[c,[d,f]]] = [...arr1]

// console.log(d,f)


// object destructuring
// we can not use rest parameter in object destructuring
// use {} for object destructuring
// always use 

// let obj = {
//     ename : "smith", 
//     eid : 125,
//     salary : 50000,
//     deptno : 20,
//     address : "Noida",
//     job : "Manager"
// };

// let{ename, eid, salary, deptno, address, job} = {...obj}

// console.log(ename)


// let arr = [10,20, {skills:{frontend:["Html","css"]}}]

// let [a,b, {skills:{frontend:[c,d]}}]= [...arr]

// console.log(d)

let emp = {
    ename : "smith",
    eid:20,
    skills: {
        softSkills : ["leadership", "managment", "comm.", "critical thinking"],
        TechnicalSkills : {
            progSkills: {
                frontend :["Html", "css"],
                backend : ["java", "python"]
            }
        }
    }
}

let {ename , eid, skills:{softSkills:[a,b,c,d],TechnicalSkills:{progSkills:{frontend:[e,f],backend:[j,k]}}}} = {...emp}
console.log(j)