'use strict';
const toWeirdCase = string => string.split` `
  .map(w => [...w]
    .map((l, i) => ((i % 2 == 0) ? l.toUpperCase() : l.toLowerCase())).join``)
  .join` `;

module.exports = { toWeirdCase };
