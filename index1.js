//named functiion:
const numbers = [4, 10, 15, 6, 25, 8];
function lessThan10(value){
    return value < 10;
}
console.log(numbers.filter(lessThan10));
//anonymous function:
console.log(numbers.filter(function(value){if(value <10){return value}}));
//arrow function:
console.log(numbers.filter((value)=> {if(value <10){return value}}));