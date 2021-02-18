// Challenges


// Coffee Maker
class Coffee {
  constructor(type, cream, sugar){
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile(){
    return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
  }

  creams(){
    if (this.cream > 1){
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars(){
    if (this.sugar > 1){
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}
// Write the code that makes a black coffee.

let blackCoffee = new Coffee("black","no","no")
console.log(blackCoffee)

// Write the code that makes a coffee with 1 cream and 2 sugars.

let latte = new Coffee("latte",1,2)
console.log(latte)

// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.

let latte2 = new Coffee("black","no",2)
console.log(latte2.coffeeProfile())



// Latte Maker

// Write a Latte class that receives a flavor, a milk type and a number of shots.

class Latte {
    constructor(flavor, milk, shots){
        this.flavor = flavor
        this.milk = milk
        this.shots = shots
    }
    latteProfile(){
        return(`${this.flavor}: ${this.milk}, ${this.shots}`)
    }
}

// Write a method for your Latte class that outputs the latte's profile.



// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

let regularLatte = new Latte("regular", "none", 1)

console.log(regularLatte.latteProfile())



// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

let hazelnutLatte = new Latte("hazelnut", "almond", 2)

console.log(hazelnutLatte.latteProfile())


// Volume of a Cylinder

// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

class Cylinder {
    constructor(pie, radius, height){
        this.pie = pie  
        this.radius = radius
        this.height = height 
    }
    calculate(){
        return (this.pie * (this.radius ** 2) * this.height).toFixed(4)

    }
}

// Write the code that creates three unique cylinder objects

let cylinder1 = new Cylinder(3.1415, 2, 50)
let cylinder2 = new Cylinder(3.1415, 7, 12)
let cylinder3 = new Cylinder(3.1415, 4, 23)

console.log(cylinder1.calculate())

console.log(cylinder2.calculate())

console.log(cylinder3.calculate())
