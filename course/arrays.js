// // adding elements
// const numbers = [3, 4];
// // end
// numbers.push(5, 6);
// // beginning
// numbers.unshift(1, 2);
// // middle
// numbers.splice(2, 0, 'a', 'b')
// console.log(numbers)

// // Finding Elements
// const numbers = [1, 2, 3, 1, 4];
// console.log(numbers.indexOf(1));
// console.log(numbers.lastIndexOf(1));
// console.log(numbers.indexOf(1, 2));
// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' },
// ];
// console.log(
//     courses.findIndex(function (course) {
//         return course.name === 'a';
//     })
// );

// // arrow functions
// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' },
// ];
// console.log(courses.findIndex(course => course.name === 'a'));

// // removing elements
//const numbers = [1, 2, 3, 1, 4];
// // end
// const last = numbers.pop();
// console.log(numbers);
// console.log(last);
// //beginning
// const fist = numbers.shift();
// console.log(fist);
// //middle
// numbers.splice(2, 1);
// console.log(numbers);

// // Emptying an Array
// let numbers = [1, 2, 3, 4];
// let another = numbers;
// // sol 1
// numbers = [];
// // sol 2
// numbers.length = 0;
// // sol 3
// numbers.splice(0, numbers.length);
// // sol 4
// while (numbers.length > 0)
//     numbers.pop();
// console.log(numbers);
// console.log(another);

// // Combining and Slicing Arrays
// const fist = [{ id: 1 }];
// const second = [4, 5, 6];
// fist[0].id = 10;
// const combined = fist.concat(second);
// const slice = combined.slice();
// console.log(combined);
// console.log(slice);

// // The Spread Operator
// const first = [1, 2, 3];
// const second = [4, 5, 6];
// const combined = [...first, 'a', ...second, 'b'];
// const copy = [...combined];
// console.log(copy);

// // Iterating an Array
// const num = [1, 2, 3];
// for (let number of num)
//     console.log(number)
// num.forEach(number => console.log(number));

// // Joining Arrays
// const numbers = [1, 2, 3];
// const joined = numbers.join(',');
// console.log(joined);
// const message = 'this is my fist message';
// const parts = message.split(' ');
// console.log(parts);
// const combined = parts.join('-');
// console.log(combined);

// // sorting arrays
// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);
// const courses = [
//     { id: 1, name: 'Node.js' },
//     { id: 2, name: 'javascript' },
// ];
// courses.sort(function (a, b) {
//     const nameA = a.name.toUpperCase();
//     const nameb = b.name.toUpperCase();
//     if (nameA < nameb) return -1;
//     if (nameA > nameb) return 1;
//     return 0;
// });
// console.log(courses);

// // Testing the Elements of an Array
// const number = [1, -1, 2, 3];
// const allpositive = number.every(function (value) {
//     return value >= 0;
// });
// console.log(allpositive);
// const atLeastOnePositive = number.some(function (value) {
//     return value >= 0;
// });
// console.log(atLeastOnePositive);

// // Filtering an Array
// const numbers = [1, -1, 2, 3];
// const numFiltered = numbers.filter(n => n >= 0);
// console.log(numFiltered);

// // Mapping an Array
// const numbers = [1, -1, 2, 3];
// const numFiltered = numbers.filter(n => n >= 0);
// const items = numFiltered.map(n => '<li>' + n + '</li>');
// const html = '<ul>' + items.join('') + '</ul>';
// console.log(html);
// const numbers = [1, -1, 2, 3];
// const numFiltered = numbers.filter(n => n >= 0);
// const items = numFiltered.map(n => {
//     const obj = { value: n };
//     return obj;
// });
// console.log(items);