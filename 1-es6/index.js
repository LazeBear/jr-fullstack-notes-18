// EcmaScript
// Ecma

// ES5 -> 2009
// ES6 -> 2015
// ES7 -> 2016

// BLOCK
// const obj = { name: "xxx" }; // object literal
// for(let i = 0; i < 10; i++) {
// }

// function foo() {
//     console.log(bar);
// }

// const bar = 1;

// foo();

// dot notation

// primitive type
// string, number, boolean, null, undefined, Symbol

// event loop

let i = 0;

console.log(i++);
console.log(++i);

// clousure

// execution context
// global execution context, function execution context, evaluate execution context

// {
//     i: 1,
//     foo: function(){},
// }

// call stack

// FEC
// GEC

// var
// [
//     i: 4
// ]

// let
// [
//     i: 0
// ]
// [
//     i: 1
// ]
// [
//     i: 2
// ]
// [
//     i: 3
// ]

// back tick

// ` <- 1

// concat
// // options = {a:1,b:{name:"",age:14, address:""}}
// function foo(opts){
//     bar({d: 10, c: {...opts.b}})
// }

// // options = {c:{name:"",age:14, address:""},d:10}
// function bar(opts) {

// }

// High order component

// 'this'

// function declaration
function foo() {}

// function expression
const bar = function () {};

// hoisting

// const add1 = (x, y) => {
//     return x + y;
// };

// const add2 = (x, y) => x + y;

// const foz = () => {
//     if (true) {
//         return 1;
//     }
//     return 2;
// }

// const foz1 = (number) => {
//     return MAX_NUMBER > number ? 1 : 2;
// }

// const foz2 = () => true?1:2;
// ternary operator

// const foo = () => {
//   return {
//     a: 1,
//     b: 2,
//   };
// };

// const foo1 = () => ({
//   a: 1,
//   b: 2,
// });

// lexical 词法 - static

const number = 1;
function foo() {
  console.log(number);
}
function bar(fn) {
  const number = 2;
  fn();
}
bar(foo); // 1

// GEC

// [   ]
// []
// []
// [GEC]

// GEC
// {
//  number: 1,
//  foo: f(),
//  bar: f(),
// }

// function foo() {
//   const number = 1;
//   return () => {
//     console.log(number);
//   };
// }
// const number = 100;

// //   foo()()
// const fn = foo();
// fn();

// // Module
// // variant - user type
// // company - 5/ppl
// // student - 1/ppl

// // return {
// //     increment: increment() = undefined,
// //     getCount: getCount() = 0,
// //   };

// // const a = 1;
// // const b = 100;
// // const obj = {
// //   a: a,
// //   b: b,
// // };
// // // =>
// // const obj2 = { a, b };

// (function () {})()


function foo() {
    function bar() {
        return 1;
    }
    return bar;
}

const a = foo();
a() = bar() => 1
// foo()() => 1

// bar -> 0x0001  (reference)
// a = bar
// a -> 0x0001

// a()




[1,2,3,4,5]
splice()
unshift();