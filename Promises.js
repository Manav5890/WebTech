let promise1 = new Promise((res,rej)=>{
    setTimeout(res, 1000,"first")
})
let promise2 = new Promise((res,rej)=>{
    setTimeout(res, 2000,"Second")
})
let promise3 = new Promise((res,rej)=>{
    setTimeout(res, 4000,"Third")
})

Promise.all[promise1, promise2, promise3].then((values)=>{
    console.log(values)
})