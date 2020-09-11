// class Animal {
//   constructor(name){
//     this.name = name;
//   }
//
//   run() {
//     console.log(`${this.name} is running`);
//   }
//
//   walk = () => {
//     console.log(`${this.name} is walking`);
//   } // to escape this keywork from function scope keyword (Benefit of Arrow Function)
// }
//
// class Dog extends Animal {
//     //
// }
//
// let dog = new Dog('Bobby');
// dog.walk();

//Node
const math = require('./math');
// const { add, PI } = require('./math');

console.log(math.add(1,2));
