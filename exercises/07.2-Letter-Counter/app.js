let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

for(i in par){
    const letra = par[i].toLowerCase();
    if(letra === ' '){
        continue
    } else if(counts[letra] === undefined){
        counts[letra] = 1;
    } else{
        counts[letra] = counts[letra] + 1;
    }

}

console.log(counts);