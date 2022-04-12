var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let typearr = [];
mix.map((e, i) => typearr.push(typeof mix[i]));
console.log(typearr);