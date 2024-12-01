//  A function accepting another function as an argument is known as higher order Function.

function area(a){
    return a * a;
}

function square(b){
    let number = parseInt(prompt("Enter your number"));
    console.log(b(number))
}

square(area)
