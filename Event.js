// let section= document.querySelector("section")
// let count = 0;
// let handle =  ()=>{
//     if(count%2 ==0){
//     section.style.backgroundColor = "red";
//     section.style.borderRadius = "50%";
//     count ++;
//     }else{
//      section.style.backgroundColor = "white";
//     section.style.borderRadius = "0";
//     count ++;
//     }
    
// };

let button = document.querySelector("button")
let section = document.querySelector("section")

button.addEventListener("click", ()=>{
    if(button.innerText=='Login'){
        button.style.color = 'white'
        button.style.backgroundColor = "red"
        button.innerText="Logout"
        section.innerText ="User is Logout"
        console.log("You are logout")
    }else{
        button.style.color = 'white'
        button.style.backgroundColor = "green"
        button.innerText = "Login"
        section.innerText ="User is Login"
        console.log("You are login")
    }
})