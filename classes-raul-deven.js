// class Coffee {
// 	constructor(type, cream, sugar) {
// 		this.type = type.toLowerCase();
// 		this.cream = cream;
// 		this.sugar = sugar;
// 	}

// 	coffeeProfile() {
// 		return `${this.type}: ${this.creams()}, ${this.sugars()}`;
// 	}

// 	creams() {
// 		if (this.cream > 1) {
// 			return `${this.cream} creams`;
// 		} else {
// 			return `${this.cream} cream`;
// 		}
// 	}

// 	sugars() {
// 		if (this.sugar > 1) {
// 			return `${this.sugar} sugars`;
// 		} else {
// 			return `${this.sugar} sugar`;
// 		}
// 	}
// }

// // Write the code that makes a black coffee.
// // let blackCoffee = new Coffee("black");

// // console.log(blackCoffee);
// // // Write the code that makes a coffee with 1 cream and 2 sugars.
// let creamySweetCoffee = new Coffee("regular","1" , "2");

// // console.log(creamySweetCoffee);
// // Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
// var sweetCoffee = new Coffee("regular" , "0" , "2")

// console.log(sweetCoffee.coffeeProfile());
// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.
class Latte {
	constructor(flavor, milk, shots) {
		this.flavor = flavor.toLowerCase();
		this.milk = milk;
		this.shots = shots;
	}

	latteProfile() {
		return `${this.flavor}: ${this.milk}, ${this.shots()}`;
	}

	shots() {
		if (this.shots > 1) {
			return `${this.shots} shots`;
		} else {
			return `${this.shots} shot`;
		}
	}
}

// Write a method for your Latte class that outputs the latte's profile.

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

var regularLatte = new Latte("regular", "milk", "1");

console.log(regularLatte.latteProfile());

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

// Write the code that creates three unique cylinder objects
