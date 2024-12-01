 // CALLING CHILD FUNCTION IN PARENT FUNCTION
 
//  function parent(){
//     let a = 10
//     let b = 20

//     function child(){
//         let c = 30;
//         console.log(a,b,c)
//     }
//     child()
// }
// parent()

// 2. FUNCTIONAL CURRYING or javascript currying -- in this we have to returns the child into the functions and parent called with parathensis..



function parent(){
    let a = 10
    let b = 20

    function child(){
        let c = 30;
        console.log(c)

        function gchild(){
            let d= 10;
            console.log(a,b,c,d)
        }
        return gchild;
    }
    return child;
}
parent()()()