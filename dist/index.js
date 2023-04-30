function f(e, t) {
  if (t == null)
    return !1;
  for (; e != null; ) {
    const r = Object.getPrototypeOf(e);
    if (r === t.prototype)
      return !0;
    e = r;
  }
  return !1;
}
export {
  f as checkIfInstanceOf
};
