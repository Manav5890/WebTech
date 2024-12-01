// function changeText(){
//     let fpara = document.querySelector("#fpara")
//     fpara.textContent = "Hello Manav"
// }

// let fpara = document.querySelector("#fpara")
// fpara.addEventListener('click', changeText)

// let anchorElement = document.getElementById("fanchor")

// anchorElement.addEventListener('click', function(event){
//     event.preventDefault();
//     anchorElement.textContent = "click kar bhai"
// })

// function alertPara(event){
//     if(event.target.nodeName === 'P'){
//         alert("You have clicked on para " + event.target.textContent)
//     }
    
// }


// let myDiv = document.getElementById("wrapper")

// document.addEventListener('click', alertPara)

//code 1
// const t1 = performance.now()
// for(let i = 1; i<=100; i++){
//     let para = document.createElement('p')
//     para.textContent = "this is para" + i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now()

// console.log("total time taken by code 1" + (t2-t1))


// code2
// let myDiv = document.createElement('div')
// const t1 = performance.now()
// for(let i = 1; i<=100; i++){
//     let para = document.createElement('p')
//     para.textContent = "this is para" + i;
//     myDiv.appendChild(para)
// }
// document.body.appendChild(myDiv)
// const t2 = performance.now()

// console.log("total time taken by code 1" + (t2-t1))

// code 3 by document fragment

// let fragment = document.createDocumentFragment()

// for(let i = 1; i<=100; i++){
//     let para = document.createElement('p')
//     para.textContent = 'this is para' + i
//     fragment.appendChild(para)
// }

console.log("hi")

setTimeout(function timeout(){
    console.log("hi my name is manav")
}, 5000)

console.log("end")