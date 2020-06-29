// // Function Declarations vs Expressions
// // declaration
// function walk() {
//     console.log('walk');
// }
// // expression
// let run = function () { console.log('run'); };
// let move = run;
// walk();
// run();
// move();

// hoisting

// // declaration
// walk();
// function walk() {
//     console.log('walk');
// }
// // expression
// // run(); -> cant be done
// let run = function () { console.log('run'); };
// let move = run;

// // arguments
// function sum() {
//     let total = 0;
//     for (let value of arguments)
//         total += value;
//     return total;
// }
// console.log(sum(1, 2));
// console.log(sum(1));
// console.log(sum(1, 2, 3, 4, 5));

// // The Rest Operator
// function sum(discount, ...prices) {
//     const total = prices.reduce((a, b) => a + b);
//     return total * (1 - discount);
// }
// console.log(sum(0.1, 20, 30));

// // Default Parameters
// function interest(principal, rate = 3.5, years = 5) {
//     // rate = rate || 3.5;
//     // years = years || 5;
//     return principal * rate / 100 * years;
// }
// console.log(interest(10000))

// // Getters and Setters
// const person = {
//     fist: 'Mau',
//     last: 'Bran',
//     get fullName() {
//         return `${person.fist} ${person.last}`;
//     },
//     set fullName(value) {
//         value = value.split(' ');
//         this.fist = value[0];
//         this.last = value[1];
//     }
// };
// console.log(person);
// person.fullName = 'Maurizio Brancato';
// console.log(person);

// // Try and Catch
// const person = {
//     fist: 'Mau',
//     last: 'Bran',
//     get fullName() {
//         return `${person.fist} ${person.last}`;
//     },
//     set fullName(value) {
//         if (typeof value !== 'string')
//             throw new Error('Value is not a string.');
//         value = value.split(' ');
//         if (value.length !== 2)
//             throw new Error('enter first and last name.');
//         this.fist = value[0];
//         this.last = value[1];
//     }
// };
// console.log(person);
// try {
//     person.fullName = '';
// } catch (e) {
//     alert(e);
// }
// console.log(person);
