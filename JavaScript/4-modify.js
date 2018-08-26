'use strict';

const name = 'Marcus Aurelius';
console.log('name.split(\' \') =', name.split(' ')); // name.split(' ') = [ 'Marcus', 'Aurelius' ]
console.log('name.replace(\'r\', \'R\') = ' + name.replace('r', 'R')); // name.replace('r', 'R') = MaRcus Aurelius
console.log('name.replace(/r/g, \'R\') = ' + name.replace(/r/g, 'R')); // name. replace(/r/g , 'R') = MaRcus AuRelius
console.log('\'Ave \'.concat(name, \'!\') = ' + 'Ave '.concat(name, '!')); // 'Ave '.concat(name, '!') = Ave Marcus Aurelius!
