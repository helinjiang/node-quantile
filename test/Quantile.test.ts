import 'mocha';
import { expect } from 'chai';

import Quantile from '../src/Quantile';

describe('./Quantile.ts', function () {
  describe('check arr1', function () {
    const arr = [6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49];
    const quantile = new Quantile(arr);

    it('getPosition(0.25) should return 3.5', function () {
      expect(quantile.getPosition(0.25)).to.equal(3.5);
    });

    it('figure(0.25) should return 25.5', function () {
      expect(quantile.figure(0.25)).to.equal(25.5);
    });
  });
});
