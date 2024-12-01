let citis = ["pune","mumbai","ahemdabad","gurgaon","delhi","mohali","chandigarh","chennai","ganganagar"];
let colors = ["greenyellow","pink","purple","green","yellow","aqua", "green","blue","red"];

let List  = document.getElementById("citis")

citis.forEach((city,i) => {
    let li = document.createElement('li');
    li.innerText = city; 
    li.style.color = colors[i]
    List.appendChild(li);

});


// citis.map(city => {
//     let li = document.createElement('li');
//     li.innerText = city; 
//     citylist.appendChild(li);
// });


// citis.filter(city => {
//     let li = document.createElement('li');
//     if(li!==li){
//         li.innerText = city; 
//         citylist.appendChild(li);
//     }else{
//         console.log("hurrah")
//     }
  
// });

// let a=null

// function d(c=20,b=30){
//     console.log(c+b)
// }

// d(null, undefined);

// let a = ["pune","mumbai","ahemdabad","gurgaon","delhi","mohali","chandigarh","chennai","ganganagar"];
// let d = document.querySelector("#citis")

// for(c=0; c<a.length; c++){
//    let k = document.createElement('li')
//    k.innerText= a[c]
//    d.append(k)



    
    
// }