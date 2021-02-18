// Story: As a programmer, I can make a car.
class Car {
  constructor(model, year) {
    this.isCar = true
    this.model = model
    this.year = year
    this.wheels = 4
    this.lights = false
    this.signals = false
    this.speed = 0
  }

  wheel() {
    return this.wheels
  }

  light() {
    this.lights = true
  }

  logLightsStatus() {
    if(this.lights) {
      return "lights are on"
    } else {
      return "lights are off"
    }
  }
  
  signal() {
    this.signals = true
  }

  logSignalsStatus() {
    if(this.signals) {
      return "Signals are on"
    } else {
      return "Signals are off"
    }
  }

  carInfo() {
    console.log(`The ${this.year} ${this.model} has ${this.wheels} wheels, the ${this.logLightsStatus()} and the ${this.logSignalsStatus()} and the speed is ${this.speed} MPH.`)
  }
}

// Write a variable called myCar which is an instance of the class Car
let myCar = new Car()
console.log(myCar)
console.log(myCar.wheel())

// Story: As a programmer, I can give my car a model on initialization. (done)
// The model for the car class can be "generic car" (done)
// Story: As a programmer, I can give my car a year on initialization.(done)
// The year for the car class can be "myCar year" (done)
// Story: As a programmer, I can tell how many wheels myCar has. (done)
// Calling the method wheels will return 4 (done)
// Story: As a programmer, I can make a Tesla car. (done)
// class Tesla inherits from class Car (done)

class Tesla extends Car {
  constructor(model, year) {
    super(model, year)
  }

  acceleration() {
    this.speed = this.speed + 10
  }

  braking(){
    this.speed = this.speed - 7
  }

  // acceleration() {
  //   this.speed = this.speed + 10
  // }
}

let myTesla = new Tesla('model s', 2020)
console.log(myTesla)
myTesla.light()
myTesla.acceleration()
myTesla.acceleration()
console.log(myTesla)
myTesla.carInfo()

// Create an object called myTesla which is a instance of class Tesla (done)
// Story: As a programmer, I can give my Tesla a model on initialization. (done)
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class(done)
// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class


// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car

class Toyota extends Car {
  constructor(model, year) {
    super(model, year);
  }

  acceleration() {
    this.speed = this.speed + 5
  }

  braking(){
    this.speed = this.speed - 2
  }

  // acceleration() {
  //   this.speed = this.speed + 5
  // }
}
// create an object called myToyota which is a instance of class Toyota

let myToyota = new Toyota('tacoma', 2021)
console.log(myToyota)
myToyota.signal()
myToyota.acceleration()
console.log(myToyota)
myToyota.carInfo()

// Story: As a programmer, I can give my Toyota a model on initialization.(done)
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class (done)
// Story: As a programmer, I can give my Toyota a year on initialization. (done)
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class (done)
// Story: As a programmer, I can make a Volkswagen car.(done)
// class Volkswagen inherits from class Car (done)

class Volkswagen extends Car {
  constructor(model, year) {
    super(model, year);
  }

  acceleration() {
    this.speed = this.speed + 7
  }

  braking(){
    if(this.speed > 5){
      this.speed = this.speed - 5
    } else if(this.speed < 5) {
      this.speed--
    } 
  }

  // acceleration() {
  //   this.speed = this.speed + 7
  // }
}

let myVolkswagen = new Volkswagen("jetta", 2017)
console.log(myVolkswagen)
myVolkswagen.acceleration()
myVolkswagen.acceleration()
myVolkswagen.acceleration()
myVolkswagen.acceleration()
myVolkswagen.braking()
myVolkswagen.braking()
myVolkswagen.braking()
myVolkswagen.braking()
myVolkswagen.braking()
myVolkswagen.braking()
myVolkswagen.braking()
myVolkswagen.braking()
console.log(myVolkswagen)
myVolkswagen.carInfo()

// create an object called myVolkswagen which is a instance of class Volkswagen (done)
// Story: As a programmer, I can give my Volkswagen a model on initialization. (done)
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class (done)
// Story: As a programmer, I can give my Volkswagen a year on initialization. (done)
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class (done)
// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position. (done)

// Story: As a programmer, I can turn the lights in all my cars on and off. (done)

// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position. (done)

// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph. (done)

// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.(done)

// Story: As a programmer, I can slow my Tesla down by 7 per braking.(done)

// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.(done)

// Story: As a programmer, I can slow my Toyota down by 2 per braking.(done)

// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.(done)

// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.(done)

// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.

// The method can be created in the parent class and accessed by all child classes