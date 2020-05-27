'use strict';
const getEmojisFromText = textWithEmoji =>
  textWithEmoji.split`, `
    .map(u => parseInt(u.substr(2)))
    .reverse()
    .map(u => String.fromCodePoint(u))
    .join` `;

module.exports = { getEmojisFromText };
