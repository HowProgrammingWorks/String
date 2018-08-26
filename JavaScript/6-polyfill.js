'use strict';

const name = 'Marcus Aurelius';
console.log(name); // Marcus Aurelius

// Polyfill

if (!String.prototype.includes) {
  String.prototype.includes = function(s) {
    return this.indexOf(s) > -1;
  };
}

console.log(name.includes('Mar')); // true

// Bad practice

String.prototype.includesWord = function(s) {
  return (' ' + this + ' ').includes(' ' + s + ' ');
};

console.log(name.includesWord('Mar')); // false
