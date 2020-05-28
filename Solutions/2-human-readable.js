'use strict';
const humanizeFormat = num => {
  if (typeof(num) === 'undefined') return;
  if (num % 100 >= 11 && num % 100 <= 13)
    return num + 'th';

  return num + ({
    1: 'st',
    2: 'nd',
    3: 'rd',
  }[num % 10] || 'th');
};


module.exports = { humanizeFormat };
