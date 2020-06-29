// // ES6 Classes
// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//         this.move = function () { }
//     }
//     draw() {
//         console.log('draw');
//     }
// }
// const c = new Circle(1);

// // Hoisting
// // sayHello();
// // sayGoodbye();;
// // function declaration
// function sayHello() { }
// // function expression
// const sayGoodbye = function () { };
// // class declaration
// class Circle{} // this is not hoisted
// // class expression
// const Square = class {}

// // static methods
// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }
//     // instance method
//     draw() { }
//     // static method
//     static parse(str) {
//         const radius = JSON.parse(str).radius;
//         return new Circle(radius);
//     }
// }
// const circle = Circle.parse('{"radius": 1}');
// console.log(circle);

// //The This Keyword
// 'use strict';
// const Circle = function () {
//     this.draw = function () { console.log(this); }
// };
// const c = new Circle();
// c.draw();
// const draw = c.draw;
// console.log(draw);
// draw();

// //Private Members Using Symbols
// const _radius = Symbol();
// const _draw = Symbol();
// class Circle {
//     constructor(radius) {
//         // this.radius = radius;
//         this[_radius] = radius;
//     }
//     [_draw]() { }
// }
// const c = new Circle(1);

// // Private Members Using WeakMaps
// const _radius = new WeakMap();
// const _move = new WeakMap();
// class Circle {
//     constructor(radius) {
//         _radius.set(this, radius);
//         _move.set(this, () => {
//             console.log('move', this);
//         });
//     }
//     draw() {
//         // console.log(_radius.get(this));
//         _move.get(this)();
//     }
// }
// const c = new Circle(1);

// // inheritance
// class Shape {
//     constructor(color) {
//         this.color = color;
//     }
//     move() {
//         console.log('move');
//     }
// }
// class Circle extends Shape {
//     constructor(color, radius) {
//         super(color);
//         this.radius = radius
//     }
//     draw() { console.log('draw'); }
// }
// const c = new Circle('red', 1);
