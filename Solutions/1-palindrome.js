'use strict';

const isPalindrome = str => {
  str = str.toLowerCase();
  return str === [...str].reverse().join('');
};

module.exports = { isPalindrome };
