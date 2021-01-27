import 'mocha';
import { expect } from 'chai';

import Quantile from '../src/Quantile';

const arr1 = [6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49];

describe('./Quantile.ts', function () {
  describe(`check arr1: ${arr1.join(',')}`, function () {
    const quantile = new Quantile(arr1);

    const tests = [{
      p: -1,
      position: 1,
      figure: 6
    }, {
      p: 0,
      position: 1,
      figure: 6
    }, {
      p: 0.25,
      position: 3.5,
      figure: 25.5
    }, {
      p: 0.5,
      position: 6,
      figure: 40
    }, {
      p: 0.75,
      position: 8.5,
      figure: 42.5
    }, {
      p: 1,
      position: 11,
      figure: 49
    }, {
      p: 1.1,
      position: 11,
      figure: 49
    }];

    tests.forEach((item) => {
      it(`getPosition(${item.p}) should return ${item.position}`, function () {
        expect(quantile.getPosition(item.p)).to.equal(item.position);
      });

      it(`figure(${item.p}) should return ${item.figure}`, function () {
        expect(quantile.figure(item.p)).to.equal(item.figure);
      });
    });
  });
});
