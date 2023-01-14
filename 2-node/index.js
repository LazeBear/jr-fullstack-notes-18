// const moduleA = { exports: {} };

// (function (module) {
//   // module pattern
//   //   const message = 'secret message'; // private variable
console.log(module.exports === exports);

let counter = 0;

function increment() {
  counter++;
}

function getCurrentCount() {
  return counter;
}

module.exports = {
  increment,
  getCurrentCount,
};

// exports.increment = increment;
// exports.getCurrentCount = getCurrentCount;

// })(moduleA);
// // commonjs
// // IIFE
// // message;

// moduleA.exports.increment();
// console.log(moduleA.exports.getCurrentCount());
// moduleA.exports.increment();
// console.log(moduleA.exports.getCurrentCount());
// moduleA.exports.increment();
// console.log(moduleA.exports.getCurrentCount());

// console.log(module);
// console.log(__dirname);
// console.log(__filename);
// require, exports
