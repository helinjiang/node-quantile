import 'mocha';
import { expect } from 'chai';

import Quantile from '../src/Quantile';

describe('./Quantile.ts', function () {
  describe('check arr1', function () {
    const arr = [6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49];
    const quantile = new Quantile(arr);

    it('getPosition(-1) should return 1', function () {
      expect(quantile.getPosition(-1)).to.equal(1);
    });

    it('getPosition(0) should return 1', function () {
      expect(quantile.getPosition(0)).to.equal(1);
    });

    it('getPosition(0.25) should return 3.5', function () {
      expect(quantile.getPosition(0.25)).to.equal(3.5);
    });

    it('getPosition(0.5) should return 6', function () {
      expect(quantile.getPosition(0.5)).to.equal(6);
    });

    it('getPosition(0.75) should return 8.5', function () {
      expect(quantile.getPosition(0.75)).to.equal(8.5);
    });

    it('getPosition(1) should return 11', function () {
      expect(quantile.getPosition(1)).to.equal(11);
    });

    it('getPosition(1.1) should return 11', function () {
      expect(quantile.getPosition(1.1)).to.equal(11);
    });

    it('figure(0) should return 6', function () {
      expect(quantile.figure(0)).to.equal(6);
    });

    it('figure(0.25) should return 25.5', function () {
      expect(quantile.figure(0.25)).to.equal(25.5);
    });

    it('figure(0.5) should return 40', function () {
      expect(quantile.figure(0.5)).to.equal(40);
    });

    it('figure(0.75) should return 42.5', function () {
      expect(quantile.figure(0.75)).to.equal(42.5);
    });

    it('figure(1) should return 49', function () {
      expect(quantile.figure(1)).to.equal(49);
    });
  });
});
