// // basics
// let circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function () {
//         console.log('draw');
//     }
// };
// circle.draw(); // method

// // factory functions
// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     };
// }
// const circle1 = createCircle(1);
// console.log(circle1);
// const circle2 = createCircle(2);
// console.log(circle2);

// // constructor function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// }
// const circle = new Circle(1);
// console.log(circle);

// // Dynamic Nature of Objects
// const circle = {
//     radius: 1
// };
// circle.color = 'y';
// circle.draw = function () { }
// delete circle.color;
// console.log(circle);

// // Enumerating Properties of an Object
// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };
// for (let key in circle)
//     console.log(key, circle[key]);

// for (let key of Object.keys(circle)) {
//     console.log(key, circle[key]);
// }
// for (let entry of Object.entries(circle)) {
//     console.log(entry);
// }
// if ('radius' in circle) console.log('yes');

// // cloning an object
// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };
// // const another = {};
// // for (let key in circle)
// //     another[key] = circle[key];
// // const another = Object.assign({}, circle);
// const another = { ...circle }
// console.log(another);

// // math
// Math.random();
// Math.max()

// // strings
// const message = 'hi';
// const another = new String('hi');

// // template literals
// const name = 'Mau';
// const another =
//     `this is my  ${name}
// 'first' message`;

// // date
// const now = new Date();
// const date1 = new Date('May 11 2018 09:00');
// const date2 = new Date(2018, 4, 11, 9);
// now.setFullYear(2017);

// // abstraction
// function Circle(radius) {

//     this.radius = radius;
//     let defaultLocation = { x: 0, y: 0 };
//     let computeOptimumLocation = function () {
//         console.log('x,y');
//     }
//     this.draw = function () {
//         computeOptimumLocation();
//     };
// }
// const circle = new Circle(10);
// console.log(circle.draw());