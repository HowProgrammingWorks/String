'use strict';

//.trimLeft()
//.toLowerCase()
//.toUpperCase()
//.fromCharCode(80)

const words = (s) => s.split(' ');
const first = (s) => s.substring(0, 1);

const partial = (fn, x) => (...args) => fn(x, ...args);

console.log(first('ABC'));
