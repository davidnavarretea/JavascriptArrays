

var myNumbers = [23,234,345,4356234,243,43,56,2];

const myFunction = n => n * 3;
let newArray = myNumbers.map(e => myFunction(e));


console.log(newArray);