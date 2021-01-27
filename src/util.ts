export function getNum(v: string | number, decimals?: number) {
  const vNum = (typeof v === 'string') ? parseFloat(v) : v;

  // 如果无需特别处理保留的小数点位数，则直接返回
  if (typeof decimals !== 'number' || decimals < 0) {
    return vNum;
  }

  return parseFloat(vNum.toFixed(decimals));
}
