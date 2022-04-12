let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
let answer = [];
theBools.map(e => {
    if(e === 0){
        answer.push('woko');
    } else if(e === 1){
        answer.push('wiki');
    }
})
console.log(answer);