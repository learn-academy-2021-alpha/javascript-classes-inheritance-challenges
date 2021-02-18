// Challenge 1
// Story: As a programmer, I can make a car.

// Create a class called 'Car'
class Car {
    constructor(model, year) {
        // As a programmer, I can give my car a model on initialization.
        // The model for the car class can be "generic car"
        this.model = model;
        // The year for the car class can be "myCar year"
        this.year = year;
        // give all my cars a lights property. Lights start in the off position.
        this.lights = 'off';
        // I can determine the speed of a car. Speed starts at 0 mph.
        this.speed = 0;
    }
    headLights () {
        if (this.lights === 'off') {
            this.lights = 'on'
        } else if(this.lights === 'on') {
            this.lights = 'off'
        }
    }
    // Calling the method wheels will return 4
    wheels() {
        this.myWheels = 4
        return this.myWheels
    }
    // Create method to return current speed
    currentSpeed() {
        return `The current speed is ${this.speed} mph for the ${this.year} ${this.model}`
    }
}

// make a Tesla car.
// class Tesla inherits from class Car
// Create an object called myTesla which is a instance of class Tesla
class Tesla extends Car {
    // The model and year can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
    constructor(model, year) {
        super(model, year); 
    }

    // I can speed my Tesla up by 10 per acceleration.
    speedUp() {
        this.speed = this.speed + 10
        // this.speed += 10
    }

    // I can slow my Tesla down by 7 per braking.
    slowDown() {
        this.speed = this.speed - 7
    }
}

// As a programmer, I can make a Toyota car.
class Toyota extends Car {
    constructor(model, year) {
        super(model, year);
    }
}
// make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
class Volkswagen extends Car {
    constructor(model, year) {
        super(model, year);
    }
}


// Create variable that stores the object 'myCar', which is an instance of the class Car
var myCar = new Car();
var myTesla = new Tesla('Tesla', 2021)
var allensToyota = new Toyota('Prius', 2015)
var guerrerosVolkswagen = new Volkswagen('jetta', 2012)

console.log(myTesla.currentSpeed()); // Expect 0
myTesla.speedUp();
console.log(myTesla.currentSpeed()); // Expect 10
myTesla.slowDown();
console.log(myTesla.currentSpeed()); // Expect 3