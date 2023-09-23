function x(e, t) {
  if (t == null)
    return !1;
  for (; e != null; ) {
    const n = Object.getPrototypeOf(e);
    if (n === t.prototype)
      return !0;
    e = n;
  }
  return !1;
}
async function l(e = 1500) {
  return new Promise((t) => {
    setTimeout(() => {
      t(!0);
    }, e);
  });
}
function f(e, t) {
  try {
    const n = localStorage.getItem(e);
    return n ? JSON.parse(n) : t;
  } catch {
    return t;
  }
}
function g(e, t) {
  localStorage.setItem(e, JSON.stringify(t));
}
function p(e, t) {
  try {
    const n = sessionStorage.getItem(e);
    return n ? JSON.parse(n) : t;
  } catch {
    return t;
  }
}
function S(e, t) {
  sessionStorage.setItem(e, JSON.stringify(t));
}
function m(e) {
  const t = /* @__PURE__ */ new Map();
  return function(...n) {
    const r = JSON.stringify(n);
    if (t.has(r))
      return t.get(r);
    const o = e.apply(this, n);
    return t.set(r, o), o;
  };
}
function y(e) {
  return e.length === 0 ? -1 : e[e.length - 1];
}
function h() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
    const n = Math.random() * 16 | 0;
    return (t === "x" ? n : n & 3 | 8).toString(16);
  });
}
function s(e, t) {
  return Array.isArray(e) ? e.map((n) => c(n, t)) : c(e, t);
}
function c(e, t) {
  const n = { ...e };
  for (let r in t)
    n[t[r]] = e[r], delete n[r];
  return e.children && (n.children = e.children.map(
    (r) => s(r, t)
  )), n;
}
const i = {
  id: "root",
  name: "Root Node",
  children: [
    {
      id: "1",
      name: "2"
    }
  ]
}, a = {
  id: "value",
  name: "label"
}, u = s(i, a);
console.log(u);
export {
  x as checkIfInstanceOf,
  h as generateUniqueId,
  f as getLocalStorage,
  p as getSessionStorage,
  y as last,
  m as memoize,
  s as replaceTreeKeys,
  g as setLocalStorage,
  S as setSessionStorage,
  l as sleep
};
