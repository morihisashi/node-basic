const fs = require('fs');

console.log(__filename);

fs.writeFileSync(__dirname + '/test.txt', 'hello, node,js');
//console.log('hello, node.js');
