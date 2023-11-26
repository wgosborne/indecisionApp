//var vs let vs const

//var lets you reassign and redefine
var nameVar = "Wagner";
var nameVar = "Chase";
console.log('nameVar', nameVar);

//let allows you to reassign
let nameLet = "wags";
nameLet = 'Kendall';
console.log('nameLet', nameLet);

//const doent let you reassign or redefine
const nameConst = "wagner";
//nameConst = "reba"; cannot do that
console.log('nameConst', nameConst);

//exploring scope, all of these are function bound
function getPetName() {
    const petName = 'Hal';
    return petName;
}

getPetName();
//console.log(petName);


//Block Scoping, var works everywhere, const and let are block bound
var fullName = "Banana Pancakes";
if(fullName) {
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);