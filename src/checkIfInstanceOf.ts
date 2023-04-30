/**
 * 检查是否是类的实例对象
 * @param obj 给定一个对象
 * @param classFunction 类或超类的实例
 * @returns boolean
 */
export function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (classFunction == null) return false;
  while (obj != null) {
    const proto = Object.getPrototypeOf(obj);
    if (proto === classFunction.prototype) return true;
    obj = proto;
  }
  return false;
}
