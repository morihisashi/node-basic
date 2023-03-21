// const { plus } = require('./calc');
import minus, * as calc from './calc.mjs';
console.log(calc);

// const result = plus(1, 2);
// console.log(result);

const result1 = calc.default(1, 2);
console.log(result1);
