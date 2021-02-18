// Challenges
// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
//
// class Car{
//   constructor(){
//     this.hasWheels = true;
//     this.hasEngine = true;
//     this.model = model
//   }
// }
// let myCar = new Car
// console.log(myCar);

// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"

// class Car{
//   constructor(model){
//     this.hasWheels = true;
//     this.hasEngine = true;
//     this.model = model
//   }
// }
// let myCar = new Car("generic car")
//
// console.log(myCar);

// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"

// class Car{
//   constructor(model, year){
//     this.model = model
//     this.year = year
//   }
//   wheels (){
//       this.wheels = 4
//   }
// }
// let myCar = new Car("Rav4", 2021)
// myCar.wheels()
// console.log(myCar)


// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4

// class Car{
//     constructor(model, year){
//       this.model = model
//       this.year = year
//     }
//     wheels (){
//         this.wheels = 4
//     }
//   }
//   let myCar = new Car("Rav4", 2021)
//   myCar.wheels()
//   console.log(myCar)

// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
//
// class Tesla extends Car{
//     constructor (model,year) {
//         super(model,year);
//         //this.tesla = tesla
//     }
// }
//
// let myTesla = new Tesla("X", 2021)
// console.log(myTesla)


// Create an object called myTesla which is a instance of class Tesla


// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// class Car{
//     constructor(model, year){
//       this.model = model
//       this.year = year
//     }
//     wheels (){
//         this.wheels = 4
//     }
//   }
//   let myCar = new Car("Rav4", 2021)
//   myCar.wheels()
//   console.log(myCar)
//
// class Tesla extends Car{
//     constructor (model,year) {
//         super(model,year);
//         //this.tesla = tesla
//     }
// }
// let myTesla = new Tesla("X", 2021)
// console.log(myTesla)


// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class


// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota

// class Car{
//     constructor(model, year){
//       this.model = model
//       this.year = year
//     }
//     wheels (){
//         this.wheels = 4
//     }
//   }
//   // let myCar = new Car("Rav4", 2021)
//   // myCar.wheels()
//   // console.log(myCar)
//
// class Tesla extends Car{
//     constructor (model,year) {
//         super(model,year);
//     }
// }
// class Toyota extends Car{
//   constructor(model, year){
//     super(model, year);
//   }
// }
// let myTesla = new Tesla("X", 2021)
// var myToyota = new Toyota("Tacoma", 2021)
// console.log(myToyota)


// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class



// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

class Car{
    constructor(model, year){
      this.model = model
      this.year = year
      this.lights = "off"
      this.signal = "off"
      this.speed = 0
      // this.acceleration = 0
    }
    wheels (){
      this.wheels = 4;
    }
    lightsOn(){
      this.lights = "on";
    }
    lightsOff(){
      this.lights = "off";
  }
    signalOn(){
      this.signal = "on"
    }
    signalOff(){
      this.signal = "off"
    }
    acceleration(fast){
      this.speed = 1 * fast
    }
    braking(slow){
      this.speed = 
    }
  }

class Tesla extends Car{
    constructor (model,year) {
        super(model,year);
    }
    teslaAccel(fast){
      this.speed = 10 * fast
    }
}
class Toyota extends Car{
  constructor(model, year){
    super(model, year);
  }
}
class Volkswagen extends Car{
  constructor(model, year){
    super(model, year);
  }
}
var myVolkswagen = new Volkswagen("Jetta", 2021)
var myTesla = new Tesla("X", 2021)
var myToyota = new Toyota("Tacoma", 2021)
// console.log(myVolkswagen)
// myVolkswagen.lightsOn()
// console.log(myVolkswagen)

// myVolkswagen.lightsOff()
// console.log(myVolkswagen)
// myVolkswagen.signalOn()
// console.log(myVolkswagen)
// myVolkswagen.signalOff()
// console.log(myVolkswagen)
myTesla.teslaAccel(10)
console.log(myTesla)
myTesla.braking(7)
console.log(myTesla)


// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.
//
// Story: As a programmer, I can turn the lights in all my cars on and off.
//
// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.
//



// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.
//
// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.
//
// Story: As a programmer, I can slow my Tesla down by 7 per braking.
//
// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.
//
// Story: As a programmer, I can slow my Toyota down by 2 per braking.
//
// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.
//
// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.
//
// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.
//
// The method can be created in the parent class and accessed by all child classes
