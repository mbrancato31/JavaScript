// // Property Descriptors
// let person = { name: 'Mau' };
// // for (let key in person)
// //     console.log(key);
// // console.log(Object.keys(person));
// // let objectBase = Object.getPrototypeOf(person);
// // let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
// // console.log(descriptor);
// Object.defineProperty(person, 'name', {
//     writable: false,
//     enumerable: true,
//     configurable: false
// });
// person.name = 'john';
// delete person.name;
// console.log(Object.keys(person));

// //Prototype vs Instance Members
// function Circle(radius) {
//     // instance members
//     this.radius = radius;
//     this.move = function () {
//         this.draw()
//         console.log('move');
//     }
// }
// // prototype members
// Circle.prototype.draw = function () {
//     // this.move();
//     console.log('draw');
// }
// const c1 = new Circle(1);
// const c2 = new Circle(1);
// Circle.prototype.toString = function () {
//     return 'Circle with radius ' + this.radius;
// }

// //Iterating Instance and Prototype Members
// function Circle(radius) {
//     // instance members
//     this.radius = radius;
//     this.move = function () {
//         this.draw()
//         console.log('move');
//     }
// }
// const c1 = new Circle(1);
// // prototype members
// Circle.prototype.draw = function () {
//     console.log('draw');
// }
// // return instance members
// console.log(Object.keys(c1));
// // returns all members, instance + prototype
// for (let key in c1) console.log(key);

// //Avoid Extending the Built-in Objects
// // avoid--------------------------------
// Array.prototype.suffle = function(){
//     //
// };
// const array = [];
// array.suffle();
// // -------------------------------------
