// //Creating Your Own Prototypical Inheritance
// function Shape() {

// }
// Shape.prototype.duplicate = function () {
//     console.log('duplicate');
// }
// function Circle(radius) {
//     this.radius = radius;
// }
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.draw = function () {
//     console.log('draw');
// }
// const s = new Shape();
// const c = new Circle(1);

// // Calling the Super Constructor
// function Shape(color) {
//     this.color = color;

// }
// Shape.prototype.duplicate = function () {
//     console.log('duplicate');
// }
// function Circle(radius, color) {
//     // Shape(color);
//     Shape.call(this, color);
//     this.radius = radius;
// }
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.draw = function () {
//     console.log('draw');
// }
// const s = new Shape();
// const c = new Circle(1, 'red');

// // Intermediate Function Inheritance
// function Shape(color) {
//     this.color = color;

// }
// Shape.prototype.duplicate = function () {
//     console.log('duplicate');
// }

// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }

// function Circle(radius, color) {
//     // Shape(color);
//     Shape.call(this, color);
//     this.radius = radius;
// }
// extend(Circle, Shape);
// Circle.prototype.draw = function () {
//     console.log('draw');
// }

// function Square(size) {
//     this.size = size;
// }
// extend(Square, Shape);

// const s = new Shape();
// const c = new Circle(1, 'red');
// const sq = new Square(10);

// // Method Overriding
// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }
// function Shape() { }
// Shape.prototype.duplicate = function () {
//     console.log('duplicate');
// }
// function Circle() { }
// extend(Circle, Shape);
// Circle.prototype.duplicate = function () {
//     console.log('duplicate circle');
// }
// const c = new Circle();

// // polymorphism
// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }
// function Shape() { }
// Shape.prototype.duplicate = function () {
//     console.log('duplicate');
// }
// function Circle() { }
// extend(Circle, Shape);
// Circle.prototype.duplicate = function () {
//     console.log('duplicate circle');
// }
// function Square() { }
// extend(Square, Shape);
// Square.prototype.duplicate = function () {
//     console.log('duplicate square');
// }
// const shapes = [
//     new Circle(),
//     new Square()
// ];
// for (let shape of shapes) shape.duplicate();

// mixins
function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}
const canEat = {
    eat: function () {
        this.hunger--;
        console.log('eating');
    }
};
const canWalk = {
    walk: function () {
        console.log('walking');
    }
};
const canSwim = {
    swim: function () {
        console.log('swim');
    }
};
function Person() { }
// Object.assign(Person.prototype, canEat, canWalk);
mixin(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);
function Goldfish() { }
// Object.assign(Goldfish.prototype, canEat, canSwim);
mixin(Goldfish.prototype, canEat, canSwim);
const fish = new Goldfish();
console.log(fish);