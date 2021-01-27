# node-quantile

使用 node 来计算分位数

## 用法说明

```js
import Quantile from 'node-quantile';
// const Quantile = require('../').default;

const quantile = new Quantile([6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49]);

console.log(quantile.getPosition(0.25));
console.log(quantile.figure(0.25, 2));
```

## 参考资料

- https://en.wikipedia.org/wiki/Quantile
