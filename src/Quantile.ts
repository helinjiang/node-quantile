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

    this.orderBy = opts?.orderBy || 'none';
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
   */
  public figure(p: number): number {
    // 获取指定 p 分位的位置，从1开始计数
    const position = this.getPosition(p);

    // position 可能为小数，获取向下取整的值
    const positionFloor = Math.floor(position);

    // 排序一下数组
    const sortedArr = this.arr;

    // R-7: 计算公式
    return sortedArr[positionFloor - 1] + (position - positionFloor) * (sortedArr[positionFloor] - sortedArr[positionFloor - 1]);
  }
}
