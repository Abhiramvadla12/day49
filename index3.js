//named functiion:
const numbers = [4, 10, 15, 6, 25, 8];
function lessThan10(value){
    return value < 10;
}
function squares(element){
    return element*element;
}
let resultOfFilter = numbers.filter(lessThan10);
let resultOfMap = resultOfFilter.map(squares);
console.log(resultOfMap);
//anonymous function:
resultOfFilter = numbers.filter(function(value){ return value < 10;
});
resultOfMap = resultOfFilter.map(function(element){ return element*element});
console.log(resultOfMap)
//arrow function:
resultOfFilter = numbers.filter((value)=> { return value < 10;
});
resultOfMap = resultOfFilter.map((element) => { return element*element});
console.log(resultOfMap);