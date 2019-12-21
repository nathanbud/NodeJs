var _ = require('underscore');
var lion = require('calcbasic');

let num = [34, 56, 2, 5, 67];

let sum = lion.modulo(23, 4);
console.log("SUM:", sum);

var result = _.contains(num, 67);
console.log(result);