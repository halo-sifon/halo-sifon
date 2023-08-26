/**
 * 防抖函数
 * @param func
 * @param delay
 * @returns
 */

export function debounce(func: Function, delay: number = 300): Function {
  let timer: number | null;

  return function (...args: any[]) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      // @ts-ignore
      func.apply(this, args);
    }, delay);
  };
}
