// 'use strict';
// // console.log(this);

// function greet(val) {
//   this.name = val;
//   console.log(`Hi I am ${this.name}`);
// }
// const a = {
//   name: 'Ali',
// };
// const b = {
//   name: 'haider',
// };

// const x=greet.bind(b, ['HaIder']);
// x()
console.log(global);
//this keyword point to the empty object in nodejs in strict and non strict also
//in window it point to window object

//simple funtiont it will point to the obj that invoke it 
//in fuction when no one invoke in nodejs it point to global on non strict and in strict it will undefined
//arrow fuction it take it from lexical envirnment