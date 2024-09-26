//named function :
const students = [
    { name: 'John', marks: 45 },
    { name: 'Jane', marks: 72 },
    { name: 'Bob', marks: 38 },
    { name: 'Alice', marks: 85 }
  ];
function marks(element,index){
    return students[index].marks > 50;
} 
function names(element,index){
     console.log(filt[index]['name']);
}
filt = students.filter(marks);
filt.forEach(names);
console.log('------------------------------------------------')
//anonymous function:
filt = students.filter(function (marks,index){
    return students[index].marks > 50;
})
filt.forEach(function (names,index){
    console.log(filt[index]['name']);
});
console.log('------------------------------------------------')
//arrow function:
filt = students.filter( (marks,index) =>{
    return students[index].marks > 50;
})
filt.forEach( (names,index) =>{
    console.log(filt[index]['name']);
});

