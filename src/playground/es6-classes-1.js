//5/22/23 Working with es6 classes
//Notes:
// subclassesare just inheritence using "extends"

class Person {

    constructor(name = "anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi I am ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}`;
        }

        return greeting;
    }
}



const me = new Student("wagner osborne", 21, 'MIS');
console.log(me.getDescription());

const you = new Traveler("Emma Isbell", 21, "Birmingham");
console.log(you.getGreeting());
