//named functiion:
const words = ['apple', 'banana', 'grape'];
function Uppercase(string){
    return string.toUpperCase();
}
console.log(words.map(Uppercase));
//anonymous function:
console.log(words.map(function(string){return string.toUpperCase()}));
//arrow function:
console.log(words.map((string)=> {return string.toUpperCase()}));