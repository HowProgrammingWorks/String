'use strict';

const sort = str =>
  [...str.replace(/[^\w]/g, '').toLowerCase()]
    .sort()
    .join``;

const isAnagram = (first, second) => sort(first) === sort(second);


module.exports = { isAnagram };
