// Challenges


// Coffee Maker
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
// Write the code that makes a black coffee.
// let blackCoffee = new Coffee("black",0,0)
// console.log(blackCoffee);
//
// Write the code that makes a coffee with 1 cream and 2 sugars.
// let coffeeOne = new Coffee("blonde",1,2)
// console.log(coffeeOne);
//
// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
// let darkCoffee = new Coffee("dark",0,2)
// console.log(darkCoffee.coffeeProfile())
//
// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.
// class Latte {
//   constructor(flavor, milkType, shots) {
//     //     key  :  value
//     this.flavor = flavor;
//     this.milkType = milkType;
//     this.shots = shots;
//   }
//
//   latteProfile(){
//     return (`${this.flavor}: ${this.milkType}, ${this.shots}`)
//   }
// }

//
// Write a method for your Latte class that outputs the latte's profile.
//
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
// let regLatte = new Latte('regular', 'cow', 1)
// console.log(regLatte.latteProfile())
//
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
// let hazelnutLatte = new Latte('hazelnut', 'almond', 2)
// console.log(hazelnutLatte.latteProfile())
//
// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

class CylinderVow {
  //take in radius and height -- 2 arguements
  constructor(radius, height){
    this.radius = radius * radius
    this.height = height
  }
  //method needs to multiply pie radius and height
  //output needs to have four decimal places
  volume() {
    return (this.radius * this.height * Math.PI).toFixed(4)
  }
}
// Write the code that creates three unique cylinder objects

let cylinderOne = new CylinderVow(5,10)
let cylinderTwo = new CylinderVow(123, 27)
let cylinderThree = new CylinderVow(20, 21)
console.log(cylinderOne.volume());
console.log(cylinderTwo.volume());
console.log(cylinderThree.volume());
