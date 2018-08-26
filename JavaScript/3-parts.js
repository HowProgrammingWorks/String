'use strict';

const name = 'Marcus Aurelius';
console.log(name); // Marcus Aurelius
console.log('name.indexOf(\'Aur\') = ' + name.indexOf('Aur')); // name.indexOf('Aur') = 7
console.log('name.lastIndexOf(\'u\') = ' + name.lastIndexOf('u')); // name.lastIndexOf('u') = 13
console.log('name.includes(\'Ma\') = ' + name.includes('Ma')); // name.includes('Ma') = true
console.log('name.startsWith(\'re\') = ' + name.startsWith('re')); // name.startsWith('re') = false
console.log('name.endsWith(\'lius\') = ' + name.endsWith('lius')); // name.endsWith('lius') = true
