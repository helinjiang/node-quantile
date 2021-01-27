import { getNum } from './util';

/**
 * 类型，参考 https://en.wikipedia.org/wiki/Quantile
 */
export type IType = 'R-1' | 'R-2' | 'R-3' | 'R-4' | 'R-5' | 'R-6' | 'R-7' | 'R-8' | 'R-9';

/**
 * 排序方式，none 不要排序， desc 降序， asc 升序
 */
export type IOrderBy = 'none' | 'desc' | 'asc'

export interface IQuantileOpts {
  type?: IType;
  orderBy?: IOrderBy;
}

export default class Quantile {
  public arr: number[];
  public type: IType;
  public orderBy: IOrderBy;

  public constructor(arr: number[], opts?: IQuantileOpts) {
    this.arr = arr;

    // 暂时先只支持一种
    this.type = 'R-7';

    // 默认进行升序排序
    this.orderBy = opts?.orderBy || 'asc';
  }

  /**
   * 获取指定 p 分位的位置，从1开始计数
   * @param p
   */
  public getPosition(p: number): number {
    if (p <= 0) {
      return 1;
    }

    if (p >= 1) {
      return this.arr.length;
    }

    // R-7: 计算公式 (N − 1)p + 1
    return (this.arr.length - 1) * p + 1;
  }

  /**
   * 计算出 p 分位的值
   * @param p
   * @param decimals
   */
  public figure(p: number, decimals?: number): number {
    // 获取指定 p 分位的位置，从1开始计数
    const position = this.getPosition(p);

    // position 可能为小数，获取向下取整的值
    const positionFloor = Math.floor(position);

    // 排序一下数组
    const sortedArr = this.getSortedArr();

    // 如果是最后一个元素，则直接返回
    if (positionFloor >= sortedArr.length) {
      return getNum(sortedArr[positionFloor - 1], decimals);
    }

    // R-7: 计算公式
    const xh = sortedArr[positionFloor - 1];
    const xh1 = sortedArr[positionFloor];
    return getNum(xh + ((position - positionFloor) * (xh1 - xh)), decimals);
  }

  public getSortedArr(): number[] {
    // 升序
    if (this.orderBy === 'asc') {
      return this.arr.sort((a, b) => {
        return a - b;
      });
    }

    // 降序
    if (this.orderBy === 'desc') {
      return this.arr.sort((a, b) => {
        return b - a;
      });
    }

    // 不处理
    return this.arr;
  }
}
