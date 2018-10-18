'use strict';

const tag = (string, ...values) => {
  console.dir({ string, values });
};

// Usage

const greeting = 'Hello';
const person = { name: 'Marcus Aurelius' };

const text = tag`${greeting} ${person.name}!`;
console.dir({ text });
