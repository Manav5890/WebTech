
// firstly it call square which means in square we pass the argument area and firstly sqr execute and take the value form user and after clg execute and b is area as argument and do the operation which is in area and pass the number as output in console.

// GENERATOR FUNCTIONS IT IS USE GENERATE DIFFERENT DIFFERENT VALUES... IN THIS WE DONT USE RETURN KEYWORD INSTEAD OF THIS WE USE YIELD KEYWORD....

// SYNTAX if we use *(astrics) after function keyword it is generator

function* generator(a){
    
    yield a+20;
    yield a+40;
    yield a+60;
    yield a+10;
}

let data = generator(10);
console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);