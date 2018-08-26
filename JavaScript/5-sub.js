'use strict';

const name = 'Marcus Aurelius';

console.log('name = ' + name); // name = MArcus Aurelius
console.log('');

console.log('name.substr(2) = ' + name.substr(2)); // name.substr(2) = rcus Aurelius
console.log('name.substr(2, 4) = ' + name.substr(2, 4)); // name.substr(2, 4) = rcus
console.log('name.substr(-3) = ' + name.substr(-3)); // name.substr(-3) = ius
console.log('name.substr(-3, 2) = ' + name.substr(-3, 2)); // name.substr(-3, 2) = iu
console.log('');

console.log('name.substring(2) = ' + name.substring(2)); // name.substring(2) = rcus Aurelius
console.log('name.substring(2, 4) = ' + name.substring(2, 4)); //name.substring(2, 4) = rc
