// // 1. Coffee Maker
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
//  let blackCoffee = new Coffee("black", 0, 0)

//  console.log(blackCoffee)

// // Write the code that makes a coffee with 1 cream and 2 sugars.

// let latteCoffee = new Coffee("1 cream 2 sugars", 1, 2)

//  console.log(latteCoffee)

// // Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.

// let twoSugars = new Coffee("2 sugars", 0, 2 )
// console.log(twoSugars)

// console.log(twoSugars.coffeeProfile())

// // 2. Latte Maker
// // Write a Latte class that receives a flavor, a milk type and a number of shots.

// class Latte {
//   constructor(flavor, milkType, shots){
//     this.flavor = flavor
//     this.milkType = milkType
//     this.shots = shots
//   }
//   latteProfile(){
//     return `This ${this.flavor} latte has ${this.milkType} milk and ${this.shots} shot(s).`
//   }
// }

// // Write a method for your Latte class that outputs the latte's profile.

// // Write the code that makes a regular, single shot latte. Then, log the latte's profile.

// let regularLatte = new Latte("regular","oat",1);
// console.log(regularLatte.latteProfile());

// // Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

// let hazulnutLatte = new Latte("hazulnut","almond",2)
// console.log(hazulnutLatte.latteProfile());

// 3. Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

// constants = pie and 2

// class Cylinder {
//   constructor (radius, height){
//     this.radius = radius
//     this.height = height
//   }
//   theVolume () {
//     return (this.radius * this.height * 2 * Math.PI).toFixed(4)
//   }
// }

// // Write the code that creates three unique cylinder objects

// let findCyl1 = new Cylinder( 4,6 )
// console.log(findCyl1.theVolume())

// let findCyl2 = new Cylinder( 8,5 )
// console.log(findCyl2.theVolume())

// let findCyl3 = new Cylinder( 2.5498204,3.173949 )
// console.log(findCyl3.theVolume())