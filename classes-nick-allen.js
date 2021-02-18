// // Coffee Maker
// class Coffee {
//   constructor(type, cream, sugar){
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }

//   coffeeProfile(){
//     return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
//   }

//   creams(){
//     if (this.cream > 1){
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }

//   sugars(){
//     if (this.sugar > 1){
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }
// // Write the code that makes a black coffee.
// var blackCoffee = new Coffee("black coffee", 0, 0)
// console.log(blackCoffee)

// // Write the code that makes a coffee with 1 cream and 2 sugars.
// var sweetCoffee = new Coffee("sweet coffee", 1, 2)
// console.log(sweetCoffee)

// // Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.

// var sugarCoffee = new Coffee("sugar coffee", 0, 2)
// console.log(sugarCoffee.coffeeProfile())

// // Latte Maker
// // Write a Latte class that receives a flavor, a milk type and a number of shots.
// class Latte{
//     constructor(flavor, milk, shot) {
//         this.flavor = flavor
//         this.milk = milk
//         this.shot = shot
//     }
//     latteProfile(){
//         return(`${this.flavor}: ${this.milks()}, ${this.shots()}`)
//       }
//       milks(){
//           return `${this.milk} milk`
//       }
    
//       shots(){
//         if (this.shot > 1){
//           return `${this.shot} shots`
//         } else {
//           return `${this.shot} shots`
//         }
//     }
// }


// // Write a method for your Latte class that outputs the latte's profile.

// // Write the code that makes a regular, single shot latte. Then, log the latte's profile.

// var regularLatte = new Latte("regualr flavor", 0, 1)
// console.log(regularLatte.latteProfile())

// // Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

// var hazelnutLatte = new Latte("hazelnut latte", "almond", 2)
// console.log(hazelnutLatte.latteProfile())


// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr^2h (r is the radius and h is the height of the cylinder)

// Create a 'Cylinder' class
class Cylinder {
  // Need a constructor that takes in 2 arguments
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  // Need a method to calculate the volume
  // Volume = pi * radius^2 * height
  volume() {
    let value = Math.PI * Math.pow(this.radius, 2) * this.height;
    return value.toFixed(4);
  }
}

// Write the code that creates three unique cylinder objects
var cyl1 = new Cylinder(2, 4);
console.log(cyl1.volume())

var cyl2 = new Cylinder(4, 5);
console.log(cyl2.volume())

var cyl3 = new Cylinder(10, 1);
console.log(cyl3.volume())