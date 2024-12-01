// local storage - its is a permamnent storage which hold the data even after session is expired.

//session storage - its is temporary storage which hold the data until terminate the session.

// localStorage.setItem("manav", 255555555)
// console.log(localStorage.getItem("manav"))

// sessionStorage.setItem("manav", 5661456)
// console.log(sessionStorage.getItem("manav"))
// localStorage.clear()
// sessionStorage.clear()



// json - java script object notation in this all the keys and values will be in string format expect numbers.. 
// but in java script only stores the value in string


let emp = {
    empname : 'manav',
    empId : 23,
    salary : 50000,
    mgr: 50
}


console.log(emp)
let emp2= JSON.stringify(emp)
console.log(JSON.parse(emp2))