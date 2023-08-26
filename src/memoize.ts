type Fn = (...params: any) => any;

export function memoize(fn: Fn): Fn {
  const cacheMap: Map<string, any> = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cacheMap.has(key)) {
      return cacheMap.get(key);
    }
    // @ts-ignore
    const res = fn.apply(this, args);
    cacheMap.set(key, res);
    return res;
  };
}
