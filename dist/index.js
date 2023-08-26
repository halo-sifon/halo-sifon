function s(t, e) {
  if (e == null)
    return !1;
  for (; t != null; ) {
    const n = Object.getPrototypeOf(t);
    if (n === e.prototype)
      return !0;
    t = n;
  }
  return !1;
}
async function c(t = 1500) {
  return new Promise((e) => {
    setTimeout(() => {
      e(!0);
    }, t);
  });
}
function i(t, e) {
  try {
    const n = localStorage.getItem(t);
    return n ? JSON.parse(n) : e;
  } catch {
    return e;
  }
}
function u(t, e) {
  localStorage.setItem(t, JSON.stringify(e));
}
function a(t, e) {
  try {
    const n = sessionStorage.getItem(t);
    return n ? JSON.parse(n) : e;
  } catch {
    return e;
  }
}
function f(t, e) {
  sessionStorage.setItem(t, JSON.stringify(e));
}
function g(t) {
  const e = /* @__PURE__ */ new Map();
  return function(...n) {
    const r = JSON.stringify(n);
    if (e.has(r))
      return e.get(r);
    const o = t.apply(this, n);
    return e.set(r, o), o;
  };
}
function l(t) {
  return t.length === 0 ? -1 : t[t.length - 1];
}
export {
  s as checkIfInstanceOf,
  i as getLocalStorage,
  a as getSessionStorage,
  l as last,
  g as memoize,
  u as setLocalStorage,
  f as setSessionStorage,
  c as sleep
};
