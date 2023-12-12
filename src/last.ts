/**
 * 返回数组的最后一项
 * @param arr 数组
 * @returns any
 */
export function last<T>(arr?: T[]) {
  if (!arr) return undefined;
  if (arr.length === 0) return -1;
  return arr[arr.length - 1];
}
