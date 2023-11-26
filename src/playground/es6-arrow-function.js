const square = function (x) {
    return x * x;
};

//no way to define a name arrow function, you must set it equal to a const
const squareArrow = (x) => {
    return x * x;
};

//if its an arrow function and only returns 1 expression
const squarrow = (x) => x*x;

console.log(squarrow(6));


const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

const gfn = (fullName) => fullName.split(' ')[0];

console.log(gfn('Marcos Smith'));


//using es5 we can access arguments using the arguments keyword
const add = function (a,b) {
    return a+b;
}

console.log(add(55,1,100));

//this keyword, no longer bound in es6, so when you want to bind to this use "function"
const user = {
    name : 'Wagner',
    cities: ['Chicago', 'Tuscaloosa'],
    printPlacesLived() {
        // console.log(this.name);
        // console.log(this.cities);

        //map allows the item to be transformed
        return this.cities.map((city) =>  this.name + ' has lived in ' + city); //returns it as a changed array

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        })
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
    
};

console.log(multiplier.multiply());