// Challenge 1
// Story: As a programmer, I can make a car.

// Create a class called 'Car'
class Car {
    constructor() {
        // As a programmer, I can give my car a model on initialization.
        // The model for the car class can be "generic car"
        this.model = 'generic car';
        // The year for the car class can be "myCar year"
        this.year = 'myCar year'
    }
    // Calling the method wheels will return 4
    wheels() {
        this.myWheels = 4
        return this.myWheels
    }

}
    // make a Tesla car.
// class Tesla inherits from class Car
// Create an object called myTesla which is a instance of class Tesla
class Tesla extends Car {
    constructor() {
        super(); 
    }
}

// Create variable that stores the object 'myCar', which is an instance of the class Car
var myCar = new Car();
var myTesla = new Tesla()
console.log(myCar.wheels());
console.log(myTesla)