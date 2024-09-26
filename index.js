//named function:
const numbers = [1, 2, 3, 4, 5];
arr = [],arr1 = [],arr2 =[];
function double(element){
      arr.push(element*2);
}
numbers.forEach(double);
console.log(arr);
//anonymous function:
numbers.forEach(function(element){
    arr1.push(element*2);
} );
console.log(arr1);
//arrow function:
numbers.forEach((element) => { return arr2.push(element*2)});
console.log(arr2);
