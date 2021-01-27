const Quantile = require('../').default;

const quantile = new Quantile([6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49]);



console.log(quantile.getPosition(1));
console.log(quantile.figure(1));
