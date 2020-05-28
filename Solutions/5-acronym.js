'use strict';

const convertToAcronim = words =>
  words.replace(/[ \-_]/ig, ' ')
    .split` `
    .map(w => w[0].toUpperCase())
    .join``;


module.exports = { convertToAcronim };
