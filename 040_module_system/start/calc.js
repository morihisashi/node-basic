function plus(a, b) {
    return a + b;
}
function minus(a, b){
    return a - b;
}
console.log(exports === module.exports);
exports.plus = plus;
// module.exports = {
//     plus: plus,
//     minus: minus
// };