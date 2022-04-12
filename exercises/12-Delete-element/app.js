var people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

const deletePerson = name => {
    let peopledeleted = people.filter(e => e !== name);
    return peopledeleted;
}
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
