let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
let odd = [];
let even = [];
//
list_of_numbers.map((number, i) => {
    if (number % 2 === 0){
        even.push(number);
    } else {
        odd.push(number);
    }
})
let mergeTwoList = [...odd, ...even];
console.log(mergeTwoList);