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
async function u(t = 1500) {
  return new Promise((e) => {
    setTimeout(() => {
      e(!0);
    }, t);
  });
}
function x(t, e) {
  try {
    const n = localStorage.getItem(t);
    return n ? JSON.parse(n) : e;
  } catch {
    return e;
  }
}
function a(t, e) {
  localStorage.setItem(t, JSON.stringify(e));
}
function f(t, e) {
  try {
    const n = sessionStorage.getItem(t);
    return n ? JSON.parse(n) : e;
  } catch {
    return e;
  }
}
function l(t, e) {
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
function p(t) {
  if (t)
    return t.length === 0 ? -1 : t[t.length - 1];
}
function S() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const n = Math.random() * 16 | 0;
    return (e === "x" ? n : n & 3 | 8).toString(16);
  });
}
function i(t, e) {
  return Array.isArray(t) ? t.map((n) => c(n, e)) : c(t, e);
}
function c(t, e) {
  const n = { ...t };
  for (let r in e)
    n[e[r]] = t[r], delete n[r];
  return t.children && (n.children = t.children.map(
    (r) => i(r, e)
  )), n;
}
export {
  s as checkIfInstanceOf,
  S as generateUniqueId,
  x as getLocalStorage,
  f as getSessionStorage,
  p as last,
  g as memoize,
  i as replaceTreeKeys,
  a as setLocalStorage,
  l as setSessionStorage,
  u as sleep
};
