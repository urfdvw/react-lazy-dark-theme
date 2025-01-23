import ce, { useState as ft, useEffect as lt } from "react";
function $e(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ke = { exports: {} }, we = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr;
function dt() {
  if (hr)
    return we;
  hr = 1;
  var t = ce, e = Symbol.for("react.element"), o = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(u, s, l) {
    var d, v = {}, E = null, g = null;
    l !== void 0 && (E = "" + l), s.key !== void 0 && (E = "" + s.key), s.ref !== void 0 && (g = s.ref);
    for (d in s)
      n.call(s, d) && !i.hasOwnProperty(d) && (v[d] = s[d]);
    if (u && u.defaultProps)
      for (d in s = u.defaultProps, s)
        v[d] === void 0 && (v[d] = s[d]);
    return { $$typeof: e, type: u, key: E, ref: g, props: v, _owner: a.current };
  }
  return we.Fragment = o, we.jsx = p, we.jsxs = p, we;
}
var xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr;
function pt() {
  return gr || (gr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ce, e = Symbol.for("react.element"), o = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), $ = Symbol.iterator, j = "@@iterator";
    function Y(r) {
      if (r === null || typeof r != "object")
        return null;
      var c = $ && r[$] || r[j];
      return typeof c == "function" ? c : null;
    }
    var N = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function H(r) {
      {
        for (var c = arguments.length, y = new Array(c > 1 ? c - 1 : 0), b = 1; b < c; b++)
          y[b - 1] = arguments[b];
        B("error", r, y);
      }
    }
    function B(r, c, y) {
      {
        var b = N.ReactDebugCurrentFrame, D = b.getStackAddendum();
        D !== "" && (c += "%s", y = y.concat([D]));
        var U = y.map(function(M) {
          return String(M);
        });
        U.unshift("Warning: " + c), Function.prototype.apply.call(console[r], console, U);
      }
    }
    var V = !1, T = !1, ie = !1, _e = !1, Oe = !1, ve;
    ve = Symbol.for("react.module.reference");
    function Pe(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === n || r === i || Oe || r === a || r === l || r === d || _e || r === g || V || T || ie || typeof r == "object" && r !== null && (r.$$typeof === E || r.$$typeof === v || r.$$typeof === p || r.$$typeof === u || r.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === ve || r.getModuleId !== void 0));
    }
    function ye(r, c, y) {
      var b = r.displayName;
      if (b)
        return b;
      var D = c.displayName || c.name || "";
      return D !== "" ? y + "(" + D + ")" : y;
    }
    function me(r) {
      return r.displayName || "Context";
    }
    function K(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && H("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case n:
          return "Fragment";
        case o:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case l:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case u:
            var c = r;
            return me(c) + ".Consumer";
          case p:
            var y = r;
            return me(y._context) + ".Provider";
          case s:
            return ye(r, r.render, "ForwardRef");
          case v:
            var b = r.displayName || null;
            return b !== null ? b : K(r.type) || "Memo";
          case E: {
            var D = r, U = D._payload, M = D._init;
            try {
              return K(M(U));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, ue = 0, re, ae, fe, Te, f, h, A;
    function P() {
    }
    P.__reactDisabledLog = !0;
    function R() {
      {
        if (ue === 0) {
          re = console.log, ae = console.info, fe = console.warn, Te = console.error, f = console.group, h = console.groupCollapsed, A = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: P,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        ue++;
      }
    }
    function I() {
      {
        if (ue--, ue === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Q({}, r, {
              value: re
            }),
            info: Q({}, r, {
              value: ae
            }),
            warn: Q({}, r, {
              value: fe
            }),
            error: Q({}, r, {
              value: Te
            }),
            group: Q({}, r, {
              value: f
            }),
            groupCollapsed: Q({}, r, {
              value: h
            }),
            groupEnd: Q({}, r, {
              value: A
            })
          });
        }
        ue < 0 && H("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _ = N.ReactCurrentDispatcher, O;
    function C(r, c, y) {
      {
        if (O === void 0)
          try {
            throw Error();
          } catch (D) {
            var b = D.stack.trim().match(/\n( *(at )?)/);
            O = b && b[1] || "";
          }
        return `
` + O + r;
      }
    }
    var k = !1, w;
    {
      var J = typeof WeakMap == "function" ? WeakMap : Map;
      w = new J();
    }
    function m(r, c) {
      if (!r || k)
        return "";
      {
        var y = w.get(r);
        if (y !== void 0)
          return y;
      }
      var b;
      k = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var U;
      U = _.current, _.current = null, R();
      try {
        if (c) {
          var M = function() {
            throw Error();
          };
          if (Object.defineProperty(M.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(M, []);
            } catch (Z) {
              b = Z;
            }
            Reflect.construct(r, [], M);
          } else {
            try {
              M.call();
            } catch (Z) {
              b = Z;
            }
            r.call(M.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Z) {
            b = Z;
          }
          r();
        }
      } catch (Z) {
        if (Z && b && typeof Z.stack == "string") {
          for (var x = Z.stack.split(`
`), X = b.stack.split(`
`), z = x.length - 1, G = X.length - 1; z >= 1 && G >= 0 && x[z] !== X[G]; )
            G--;
          for (; z >= 1 && G >= 0; z--, G--)
            if (x[z] !== X[G]) {
              if (z !== 1 || G !== 1)
                do
                  if (z--, G--, G < 0 || x[z] !== X[G]) {
                    var ne = `
` + x[z].replace(" at new ", " at ");
                    return r.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", r.displayName)), typeof r == "function" && w.set(r, ne), ne;
                  }
                while (z >= 1 && G >= 0);
              break;
            }
        }
      } finally {
        k = !1, _.current = U, I(), Error.prepareStackTrace = D;
      }
      var Ee = r ? r.displayName || r.name : "", de = Ee ? C(Ee) : "";
      return typeof r == "function" && w.set(r, de), de;
    }
    function te(r, c, y) {
      return m(r, !1);
    }
    function he(r) {
      var c = r.prototype;
      return !!(c && c.isReactComponent);
    }
    function le(r, c, y) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return m(r, he(r));
      if (typeof r == "string")
        return C(r);
      switch (r) {
        case l:
          return C("Suspense");
        case d:
          return C("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case s:
            return te(r.render);
          case v:
            return le(r.type, c, y);
          case E: {
            var b = r, D = b._payload, U = b._init;
            try {
              return le(U(D), c, y);
            } catch {
            }
          }
        }
      return "";
    }
    var Ae = Object.prototype.hasOwnProperty, ar = {}, ir = N.ReactDebugCurrentFrame;
    function ke(r) {
      if (r) {
        var c = r._owner, y = le(r.type, r._source, c ? c.type : null);
        ir.setExtraStackFrame(y);
      } else
        ir.setExtraStackFrame(null);
    }
    function Ur(r, c, y, b, D) {
      {
        var U = Function.call.bind(Ae);
        for (var M in r)
          if (U(r, M)) {
            var x = void 0;
            try {
              if (typeof r[M] != "function") {
                var X = Error((b || "React class") + ": " + y + " type `" + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[M] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw X.name = "Invariant Violation", X;
              }
              x = r[M](c, M, b, y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (z) {
              x = z;
            }
            x && !(x instanceof Error) && (ke(D), H("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", y, M, typeof x), ke(null)), x instanceof Error && !(x.message in ar) && (ar[x.message] = !0, ke(D), H("Failed %s type: %s", y, x.message), ke(null));
          }
      }
    }
    var qr = Array.isArray;
    function Ne(r) {
      return qr(r);
    }
    function Wr(r) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, y = c && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return y;
      }
    }
    function Br(r) {
      try {
        return ur(r), !1;
      } catch {
        return !0;
      }
    }
    function ur(r) {
      return "" + r;
    }
    function sr(r) {
      if (Br(r))
        return H("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Wr(r)), ur(r);
    }
    var Ce = N.ReactCurrentOwner, Vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, cr, fr, Ye;
    Ye = {};
    function zr(r) {
      if (Ae.call(r, "ref")) {
        var c = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Gr(r) {
      if (Ae.call(r, "key")) {
        var c = Object.getOwnPropertyDescriptor(r, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Jr(r, c) {
      if (typeof r.ref == "string" && Ce.current && c && Ce.current.stateNode !== c) {
        var y = K(Ce.current.type);
        Ye[y] || (H('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(Ce.current.type), r.ref), Ye[y] = !0);
      }
    }
    function Xr(r, c) {
      {
        var y = function() {
          cr || (cr = !0, H("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        y.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: y,
          configurable: !0
        });
      }
    }
    function Kr(r, c) {
      {
        var y = function() {
          fr || (fr = !0, H("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        y.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: y,
          configurable: !0
        });
      }
    }
    var Qr = function(r, c, y, b, D, U, M) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: r,
        key: c,
        ref: y,
        props: M,
        // Record the component responsible for creating this element.
        _owner: U
      };
      return x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(x, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.defineProperty(x, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    };
    function Zr(r, c, y, b, D) {
      {
        var U, M = {}, x = null, X = null;
        y !== void 0 && (sr(y), x = "" + y), Gr(c) && (sr(c.key), x = "" + c.key), zr(c) && (X = c.ref, Jr(c, D));
        for (U in c)
          Ae.call(c, U) && !Vr.hasOwnProperty(U) && (M[U] = c[U]);
        if (r && r.defaultProps) {
          var z = r.defaultProps;
          for (U in z)
            M[U] === void 0 && (M[U] = z[U]);
        }
        if (x || X) {
          var G = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          x && Xr(M, G), X && Kr(M, G);
        }
        return Qr(r, x, X, D, b, Ce.current, M);
      }
    }
    var He = N.ReactCurrentOwner, lr = N.ReactDebugCurrentFrame;
    function ge(r) {
      if (r) {
        var c = r._owner, y = le(r.type, r._source, c ? c.type : null);
        lr.setExtraStackFrame(y);
      } else
        lr.setExtraStackFrame(null);
    }
    var Ue;
    Ue = !1;
    function qe(r) {
      return typeof r == "object" && r !== null && r.$$typeof === e;
    }
    function dr() {
      {
        if (He.current) {
          var r = K(He.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function et(r) {
      {
        if (r !== void 0) {
          var c = r.fileName.replace(/^.*[\\\/]/, ""), y = r.lineNumber;
          return `

Check your code at ` + c + ":" + y + ".";
        }
        return "";
      }
    }
    var pr = {};
    function rt(r) {
      {
        var c = dr();
        if (!c) {
          var y = typeof r == "string" ? r : r.displayName || r.name;
          y && (c = `

Check the top-level render call using <` + y + ">.");
        }
        return c;
      }
    }
    function vr(r, c) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var y = rt(c);
        if (pr[y])
          return;
        pr[y] = !0;
        var b = "";
        r && r._owner && r._owner !== He.current && (b = " It was passed a child from " + K(r._owner.type) + "."), ge(r), H('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, b), ge(null);
      }
    }
    function yr(r, c) {
      {
        if (typeof r != "object")
          return;
        if (Ne(r))
          for (var y = 0; y < r.length; y++) {
            var b = r[y];
            qe(b) && vr(b, c);
          }
        else if (qe(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var D = Y(r);
          if (typeof D == "function" && D !== r.entries)
            for (var U = D.call(r), M; !(M = U.next()).done; )
              qe(M.value) && vr(M.value, c);
        }
      }
    }
    function tt(r) {
      {
        var c = r.type;
        if (c == null || typeof c == "string")
          return;
        var y;
        if (typeof c == "function")
          y = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === v))
          y = c.propTypes;
        else
          return;
        if (y) {
          var b = K(c);
          Ur(y, r.props, "prop", b, r);
        } else if (c.PropTypes !== void 0 && !Ue) {
          Ue = !0;
          var D = K(c);
          H("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && H("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nt(r) {
      {
        for (var c = Object.keys(r.props), y = 0; y < c.length; y++) {
          var b = c[y];
          if (b !== "children" && b !== "key") {
            ge(r), H("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), ge(null);
            break;
          }
        }
        r.ref !== null && (ge(r), H("Invalid attribute `ref` supplied to `React.Fragment`."), ge(null));
      }
    }
    var mr = {};
    function Tr(r, c, y, b, D, U) {
      {
        var M = Pe(r);
        if (!M) {
          var x = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var X = et(D);
          X ? x += X : x += dr();
          var z;
          r === null ? z = "null" : Ne(r) ? z = "array" : r !== void 0 && r.$$typeof === e ? (z = "<" + (K(r.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : z = typeof r, H("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", z, x);
        }
        var G = Zr(r, c, y, D, U);
        if (G == null)
          return G;
        if (M) {
          var ne = c.children;
          if (ne !== void 0)
            if (b)
              if (Ne(ne)) {
                for (var Ee = 0; Ee < ne.length; Ee++)
                  yr(ne[Ee], r);
                Object.freeze && Object.freeze(ne);
              } else
                H("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yr(ne, r);
        }
        if (Ae.call(c, "key")) {
          var de = K(r), Z = Object.keys(c).filter(function(ct) {
            return ct !== "key";
          }), We = Z.length > 0 ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!mr[de + We]) {
            var st = Z.length > 0 ? "{" + Z.join(": ..., ") + ": ...}" : "{}";
            H(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, We, de, st, de), mr[de + We] = !0;
          }
        }
        return r === n ? nt(G) : tt(G), G;
      }
    }
    function ot(r, c, y) {
      return Tr(r, c, y, !0);
    }
    function at(r, c, y) {
      return Tr(r, c, y, !1);
    }
    var it = at, ut = ot;
    xe.Fragment = n, xe.jsx = it, xe.jsxs = ut;
  }()), xe;
}
process.env.NODE_ENV === "production" ? Ke.exports = dt() : Ke.exports = pt();
var Se = Ke.exports, Qe = { exports: {} }, De = { exports: {} }, L = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Er;
function vt() {
  if (Er)
    return L;
  Er = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, o = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, p = t ? Symbol.for("react.provider") : 60109, u = t ? Symbol.for("react.context") : 60110, s = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, v = t ? Symbol.for("react.suspense") : 60113, E = t ? Symbol.for("react.suspense_list") : 60120, g = t ? Symbol.for("react.memo") : 60115, $ = t ? Symbol.for("react.lazy") : 60116, j = t ? Symbol.for("react.block") : 60121, Y = t ? Symbol.for("react.fundamental") : 60117, N = t ? Symbol.for("react.responder") : 60118, H = t ? Symbol.for("react.scope") : 60119;
  function B(T) {
    if (typeof T == "object" && T !== null) {
      var ie = T.$$typeof;
      switch (ie) {
        case e:
          switch (T = T.type, T) {
            case s:
            case l:
            case n:
            case i:
            case a:
            case v:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case u:
                case d:
                case $:
                case g:
                case p:
                  return T;
                default:
                  return ie;
              }
          }
        case o:
          return ie;
      }
    }
  }
  function V(T) {
    return B(T) === l;
  }
  return L.AsyncMode = s, L.ConcurrentMode = l, L.ContextConsumer = u, L.ContextProvider = p, L.Element = e, L.ForwardRef = d, L.Fragment = n, L.Lazy = $, L.Memo = g, L.Portal = o, L.Profiler = i, L.StrictMode = a, L.Suspense = v, L.isAsyncMode = function(T) {
    return V(T) || B(T) === s;
  }, L.isConcurrentMode = V, L.isContextConsumer = function(T) {
    return B(T) === u;
  }, L.isContextProvider = function(T) {
    return B(T) === p;
  }, L.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === e;
  }, L.isForwardRef = function(T) {
    return B(T) === d;
  }, L.isFragment = function(T) {
    return B(T) === n;
  }, L.isLazy = function(T) {
    return B(T) === $;
  }, L.isMemo = function(T) {
    return B(T) === g;
  }, L.isPortal = function(T) {
    return B(T) === o;
  }, L.isProfiler = function(T) {
    return B(T) === i;
  }, L.isStrictMode = function(T) {
    return B(T) === a;
  }, L.isSuspense = function(T) {
    return B(T) === v;
  }, L.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === n || T === l || T === i || T === a || T === v || T === E || typeof T == "object" && T !== null && (T.$$typeof === $ || T.$$typeof === g || T.$$typeof === p || T.$$typeof === u || T.$$typeof === d || T.$$typeof === Y || T.$$typeof === N || T.$$typeof === H || T.$$typeof === j);
  }, L.typeOf = B, L;
}
var F = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var br;
function yt() {
  return br || (br = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, o = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, p = t ? Symbol.for("react.provider") : 60109, u = t ? Symbol.for("react.context") : 60110, s = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, v = t ? Symbol.for("react.suspense") : 60113, E = t ? Symbol.for("react.suspense_list") : 60120, g = t ? Symbol.for("react.memo") : 60115, $ = t ? Symbol.for("react.lazy") : 60116, j = t ? Symbol.for("react.block") : 60121, Y = t ? Symbol.for("react.fundamental") : 60117, N = t ? Symbol.for("react.responder") : 60118, H = t ? Symbol.for("react.scope") : 60119;
    function B(m) {
      return typeof m == "string" || typeof m == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      m === n || m === l || m === i || m === a || m === v || m === E || typeof m == "object" && m !== null && (m.$$typeof === $ || m.$$typeof === g || m.$$typeof === p || m.$$typeof === u || m.$$typeof === d || m.$$typeof === Y || m.$$typeof === N || m.$$typeof === H || m.$$typeof === j);
    }
    function V(m) {
      if (typeof m == "object" && m !== null) {
        var te = m.$$typeof;
        switch (te) {
          case e:
            var he = m.type;
            switch (he) {
              case s:
              case l:
              case n:
              case i:
              case a:
              case v:
                return he;
              default:
                var le = he && he.$$typeof;
                switch (le) {
                  case u:
                  case d:
                  case $:
                  case g:
                  case p:
                    return le;
                  default:
                    return te;
                }
            }
          case o:
            return te;
        }
      }
    }
    var T = s, ie = l, _e = u, Oe = p, ve = e, Pe = d, ye = n, me = $, K = g, Q = o, ue = i, re = a, ae = v, fe = !1;
    function Te(m) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), f(m) || V(m) === s;
    }
    function f(m) {
      return V(m) === l;
    }
    function h(m) {
      return V(m) === u;
    }
    function A(m) {
      return V(m) === p;
    }
    function P(m) {
      return typeof m == "object" && m !== null && m.$$typeof === e;
    }
    function R(m) {
      return V(m) === d;
    }
    function I(m) {
      return V(m) === n;
    }
    function _(m) {
      return V(m) === $;
    }
    function O(m) {
      return V(m) === g;
    }
    function C(m) {
      return V(m) === o;
    }
    function k(m) {
      return V(m) === i;
    }
    function w(m) {
      return V(m) === a;
    }
    function J(m) {
      return V(m) === v;
    }
    F.AsyncMode = T, F.ConcurrentMode = ie, F.ContextConsumer = _e, F.ContextProvider = Oe, F.Element = ve, F.ForwardRef = Pe, F.Fragment = ye, F.Lazy = me, F.Memo = K, F.Portal = Q, F.Profiler = ue, F.StrictMode = re, F.Suspense = ae, F.isAsyncMode = Te, F.isConcurrentMode = f, F.isContextConsumer = h, F.isContextProvider = A, F.isElement = P, F.isForwardRef = R, F.isFragment = I, F.isLazy = _, F.isMemo = O, F.isPortal = C, F.isProfiler = k, F.isStrictMode = w, F.isSuspense = J, F.isValidElementType = B, F.typeOf = V;
  }()), F;
}
var Sr;
function kr() {
  return Sr || (Sr = 1, process.env.NODE_ENV === "production" ? De.exports = vt() : De.exports = yt()), De.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Rr = Object.getOwnPropertySymbols, mt = Object.prototype.hasOwnProperty, Tt = Object.prototype.propertyIsEnumerable;
function ht(t) {
  if (t == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(t);
}
function gt() {
  try {
    if (!Object.assign)
      return !1;
    var t = new String("abc");
    if (t[5] = "de", Object.getOwnPropertyNames(t)[0] === "5")
      return !1;
    for (var e = {}, o = 0; o < 10; o++)
      e["_" + String.fromCharCode(o)] = o;
    var n = Object.getOwnPropertyNames(e).map(function(i) {
      return e[i];
    });
    if (n.join("") !== "0123456789")
      return !1;
    var a = {};
    return "abcdefghijklmnopqrst".split("").forEach(function(i) {
      a[i] = i;
    }), Object.keys(Object.assign({}, a)).join("") === "abcdefghijklmnopqrst";
  } catch {
    return !1;
  }
}
var Dr = gt() ? Object.assign : function(t, e) {
  for (var o, n = ht(t), a, i = 1; i < arguments.length; i++) {
    o = Object(arguments[i]);
    for (var p in o)
      mt.call(o, p) && (n[p] = o[p]);
    if (Rr) {
      a = Rr(o);
      for (var u = 0; u < a.length; u++)
        Tt.call(o, a[u]) && (n[a[u]] = o[a[u]]);
    }
  }
  return n;
};
const Et = /* @__PURE__ */ $e(Dr);
var Be, _r;
function or() {
  if (_r)
    return Be;
  _r = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Be = t, Be;
}
var Ve, Or;
function Lr() {
  return Or || (Or = 1, Ve = Function.call.bind(Object.prototype.hasOwnProperty)), Ve;
}
var ze, Pr;
function bt() {
  if (Pr)
    return ze;
  Pr = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = or(), o = {}, n = Lr();
    t = function(i) {
      var p = "Warning: " + i;
      typeof console < "u" && console.error(p);
      try {
        throw new Error(p);
      } catch {
      }
    };
  }
  function a(i, p, u, s, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (n(i, d)) {
          var v;
          try {
            if (typeof i[d] != "function") {
              var E = Error(
                (s || "React class") + ": " + u + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw E.name = "Invariant Violation", E;
            }
            v = i[d](p, d, s, u, null, e);
          } catch ($) {
            v = $;
          }
          if (v && !(v instanceof Error) && t(
            (s || "React class") + ": type specification of " + u + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof v + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), v instanceof Error && !(v.message in o)) {
            o[v.message] = !0;
            var g = l ? l() : "";
            t(
              "Failed " + u + " type: " + v.message + (g ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, ze = a, ze;
}
var Ge, Ar;
function St() {
  if (Ar)
    return Ge;
  Ar = 1;
  var t = kr(), e = Dr, o = or(), n = Lr(), a = bt(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(u) {
    var s = "Warning: " + u;
    typeof console < "u" && console.error(s);
    try {
      throw new Error(s);
    } catch {
    }
  });
  function p() {
    return null;
  }
  return Ge = function(u, s) {
    var l = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function v(f) {
      var h = f && (l && f[l] || f[d]);
      if (typeof h == "function")
        return h;
    }
    var E = "<<anonymous>>", g = {
      array: N("array"),
      bigint: N("bigint"),
      bool: N("boolean"),
      func: N("function"),
      number: N("number"),
      object: N("object"),
      string: N("string"),
      symbol: N("symbol"),
      any: H(),
      arrayOf: B,
      element: V(),
      elementType: T(),
      instanceOf: ie,
      node: Pe(),
      objectOf: Oe,
      oneOf: _e,
      oneOfType: ve,
      shape: me,
      exact: K
    };
    function $(f, h) {
      return f === h ? f !== 0 || 1 / f === 1 / h : f !== f && h !== h;
    }
    function j(f, h) {
      this.message = f, this.data = h && typeof h == "object" ? h : {}, this.stack = "";
    }
    j.prototype = Error.prototype;
    function Y(f) {
      if (process.env.NODE_ENV !== "production")
        var h = {}, A = 0;
      function P(I, _, O, C, k, w, J) {
        if (C = C || E, w = w || O, J !== o) {
          if (s) {
            var m = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw m.name = "Invariant Violation", m;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var te = C + ":" + O;
            !h[te] && // Avoid spamming the console because they are often not actionable except for lib authors
            A < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + w + "` prop on `" + C + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), h[te] = !0, A++);
          }
        }
        return _[O] == null ? I ? _[O] === null ? new j("The " + k + " `" + w + "` is marked as required " + ("in `" + C + "`, but its value is `null`.")) : new j("The " + k + " `" + w + "` is marked as required in " + ("`" + C + "`, but its value is `undefined`.")) : null : f(_, O, C, k, w);
      }
      var R = P.bind(null, !1);
      return R.isRequired = P.bind(null, !0), R;
    }
    function N(f) {
      function h(A, P, R, I, _, O) {
        var C = A[P], k = re(C);
        if (k !== f) {
          var w = ae(C);
          return new j(
            "Invalid " + I + " `" + _ + "` of type " + ("`" + w + "` supplied to `" + R + "`, expected ") + ("`" + f + "`."),
            { expectedType: f }
          );
        }
        return null;
      }
      return Y(h);
    }
    function H() {
      return Y(p);
    }
    function B(f) {
      function h(A, P, R, I, _) {
        if (typeof f != "function")
          return new j("Property `" + _ + "` of component `" + R + "` has invalid PropType notation inside arrayOf.");
        var O = A[P];
        if (!Array.isArray(O)) {
          var C = re(O);
          return new j("Invalid " + I + " `" + _ + "` of type " + ("`" + C + "` supplied to `" + R + "`, expected an array."));
        }
        for (var k = 0; k < O.length; k++) {
          var w = f(O, k, R, I, _ + "[" + k + "]", o);
          if (w instanceof Error)
            return w;
        }
        return null;
      }
      return Y(h);
    }
    function V() {
      function f(h, A, P, R, I) {
        var _ = h[A];
        if (!u(_)) {
          var O = re(_);
          return new j("Invalid " + R + " `" + I + "` of type " + ("`" + O + "` supplied to `" + P + "`, expected a single ReactElement."));
        }
        return null;
      }
      return Y(f);
    }
    function T() {
      function f(h, A, P, R, I) {
        var _ = h[A];
        if (!t.isValidElementType(_)) {
          var O = re(_);
          return new j("Invalid " + R + " `" + I + "` of type " + ("`" + O + "` supplied to `" + P + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return Y(f);
    }
    function ie(f) {
      function h(A, P, R, I, _) {
        if (!(A[P] instanceof f)) {
          var O = f.name || E, C = Te(A[P]);
          return new j("Invalid " + I + " `" + _ + "` of type " + ("`" + C + "` supplied to `" + R + "`, expected ") + ("instance of `" + O + "`."));
        }
        return null;
      }
      return Y(h);
    }
    function _e(f) {
      if (!Array.isArray(f))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), p;
      function h(A, P, R, I, _) {
        for (var O = A[P], C = 0; C < f.length; C++)
          if ($(O, f[C]))
            return null;
        var k = JSON.stringify(f, function(J, m) {
          var te = ae(m);
          return te === "symbol" ? String(m) : m;
        });
        return new j("Invalid " + I + " `" + _ + "` of value `" + String(O) + "` " + ("supplied to `" + R + "`, expected one of " + k + "."));
      }
      return Y(h);
    }
    function Oe(f) {
      function h(A, P, R, I, _) {
        if (typeof f != "function")
          return new j("Property `" + _ + "` of component `" + R + "` has invalid PropType notation inside objectOf.");
        var O = A[P], C = re(O);
        if (C !== "object")
          return new j("Invalid " + I + " `" + _ + "` of type " + ("`" + C + "` supplied to `" + R + "`, expected an object."));
        for (var k in O)
          if (n(O, k)) {
            var w = f(O, k, R, I, _ + "." + k, o);
            if (w instanceof Error)
              return w;
          }
        return null;
      }
      return Y(h);
    }
    function ve(f) {
      if (!Array.isArray(f))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), p;
      for (var h = 0; h < f.length; h++) {
        var A = f[h];
        if (typeof A != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + fe(A) + " at index " + h + "."
          ), p;
      }
      function P(R, I, _, O, C) {
        for (var k = [], w = 0; w < f.length; w++) {
          var J = f[w], m = J(R, I, _, O, C, o);
          if (m == null)
            return null;
          m.data && n(m.data, "expectedType") && k.push(m.data.expectedType);
        }
        var te = k.length > 0 ? ", expected one of type [" + k.join(", ") + "]" : "";
        return new j("Invalid " + O + " `" + C + "` supplied to " + ("`" + _ + "`" + te + "."));
      }
      return Y(P);
    }
    function Pe() {
      function f(h, A, P, R, I) {
        return Q(h[A]) ? null : new j("Invalid " + R + " `" + I + "` supplied to " + ("`" + P + "`, expected a ReactNode."));
      }
      return Y(f);
    }
    function ye(f, h, A, P, R) {
      return new j(
        (f || "React class") + ": " + h + " type `" + A + "." + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + R + "`."
      );
    }
    function me(f) {
      function h(A, P, R, I, _) {
        var O = A[P], C = re(O);
        if (C !== "object")
          return new j("Invalid " + I + " `" + _ + "` of type `" + C + "` " + ("supplied to `" + R + "`, expected `object`."));
        for (var k in f) {
          var w = f[k];
          if (typeof w != "function")
            return ye(R, I, _, k, ae(w));
          var J = w(O, k, R, I, _ + "." + k, o);
          if (J)
            return J;
        }
        return null;
      }
      return Y(h);
    }
    function K(f) {
      function h(A, P, R, I, _) {
        var O = A[P], C = re(O);
        if (C !== "object")
          return new j("Invalid " + I + " `" + _ + "` of type `" + C + "` " + ("supplied to `" + R + "`, expected `object`."));
        var k = e({}, A[P], f);
        for (var w in k) {
          var J = f[w];
          if (n(f, w) && typeof J != "function")
            return ye(R, I, _, w, ae(J));
          if (!J)
            return new j(
              "Invalid " + I + " `" + _ + "` key `" + w + "` supplied to `" + R + "`.\nBad object: " + JSON.stringify(A[P], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(f), null, "  ")
            );
          var m = J(O, w, R, I, _ + "." + w, o);
          if (m)
            return m;
        }
        return null;
      }
      return Y(h);
    }
    function Q(f) {
      switch (typeof f) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !f;
        case "object":
          if (Array.isArray(f))
            return f.every(Q);
          if (f === null || u(f))
            return !0;
          var h = v(f);
          if (h) {
            var A = h.call(f), P;
            if (h !== f.entries) {
              for (; !(P = A.next()).done; )
                if (!Q(P.value))
                  return !1;
            } else
              for (; !(P = A.next()).done; ) {
                var R = P.value;
                if (R && !Q(R[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ue(f, h) {
      return f === "symbol" ? !0 : h ? h["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && h instanceof Symbol : !1;
    }
    function re(f) {
      var h = typeof f;
      return Array.isArray(f) ? "array" : f instanceof RegExp ? "object" : ue(h, f) ? "symbol" : h;
    }
    function ae(f) {
      if (typeof f > "u" || f === null)
        return "" + f;
      var h = re(f);
      if (h === "object") {
        if (f instanceof Date)
          return "date";
        if (f instanceof RegExp)
          return "regexp";
      }
      return h;
    }
    function fe(f) {
      var h = ae(f);
      switch (h) {
        case "array":
        case "object":
          return "an " + h;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + h;
        default:
          return h;
      }
    }
    function Te(f) {
      return !f.constructor || !f.constructor.name ? E : f.constructor.name;
    }
    return g.checkPropTypes = a, g.resetWarningCache = a.resetWarningCache, g.PropTypes = g, g;
  }, Ge;
}
var Je, Cr;
function Rt() {
  if (Cr)
    return Je;
  Cr = 1;
  var t = or();
  function e() {
  }
  function o() {
  }
  return o.resetWarningCache = e, Je = function() {
    function n(p, u, s, l, d, v) {
      if (v !== t) {
        var E = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw E.name = "Invariant Violation", E;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: o,
      resetWarningCache: e
    };
    return i.PropTypes = i, i;
  }, Je;
}
if (process.env.NODE_ENV !== "production") {
  var _t = kr(), Ot = !0;
  Qe.exports = St()(_t.isElement, Ot);
} else
  Qe.exports = Rt()();
var Pt = Qe.exports;
const q = /* @__PURE__ */ $e(Pt);
function At(t) {
  return t && typeof t == "object" && "default" in t ? t.default : t;
}
var Fr = ce, Ct = At(Fr);
function wr(t, e, o) {
  return e in t ? Object.defineProperty(t, e, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = o, t;
}
function wt(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
}
var xt = !!(typeof window < "u" && window.document && window.document.createElement);
function jt(t, e, o) {
  if (typeof t != "function")
    throw new Error("Expected reducePropsToState to be a function.");
  if (typeof e != "function")
    throw new Error("Expected handleStateChangeOnClient to be a function.");
  if (typeof o < "u" && typeof o != "function")
    throw new Error("Expected mapStateOnServer to either be undefined or a function.");
  function n(a) {
    return a.displayName || a.name || "Component";
  }
  return function(i) {
    if (typeof i != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    var p = [], u;
    function s() {
      u = t(p.map(function(d) {
        return d.props;
      })), l.canUseDOM ? e(u) : o && (u = o(u));
    }
    var l = /* @__PURE__ */ function(d) {
      wt(v, d);
      function v() {
        return d.apply(this, arguments) || this;
      }
      v.peek = function() {
        return u;
      }, v.rewind = function() {
        if (v.canUseDOM)
          throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
        var $ = u;
        return u = void 0, p = [], $;
      };
      var E = v.prototype;
      return E.UNSAFE_componentWillMount = function() {
        p.push(this), s();
      }, E.componentDidUpdate = function() {
        s();
      }, E.componentWillUnmount = function() {
        var $ = p.indexOf(this);
        p.splice($, 1), s();
      }, E.render = function() {
        return Ct.createElement(i, this.props);
      }, v;
    }(Fr.PureComponent);
    return wr(l, "displayName", "SideEffect(" + n(i) + ")"), wr(l, "canUseDOM", xt), l;
  };
}
var It = jt;
const Mt = /* @__PURE__ */ $e(It);
var kt = typeof Element < "u", Dt = typeof Map == "function", Lt = typeof Set == "function", Ft = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Le(t, e) {
  if (t === e)
    return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    if (t.constructor !== e.constructor)
      return !1;
    var o, n, a;
    if (Array.isArray(t)) {
      if (o = t.length, o != e.length)
        return !1;
      for (n = o; n-- !== 0; )
        if (!Le(t[n], e[n]))
          return !1;
      return !0;
    }
    var i;
    if (Dt && t instanceof Map && e instanceof Map) {
      if (t.size !== e.size)
        return !1;
      for (i = t.entries(); !(n = i.next()).done; )
        if (!e.has(n.value[0]))
          return !1;
      for (i = t.entries(); !(n = i.next()).done; )
        if (!Le(n.value[1], e.get(n.value[0])))
          return !1;
      return !0;
    }
    if (Lt && t instanceof Set && e instanceof Set) {
      if (t.size !== e.size)
        return !1;
      for (i = t.entries(); !(n = i.next()).done; )
        if (!e.has(n.value[0]))
          return !1;
      return !0;
    }
    if (Ft && ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
      if (o = t.length, o != e.length)
        return !1;
      for (n = o; n-- !== 0; )
        if (t[n] !== e[n])
          return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === e.source && t.flags === e.flags;
    if (t.valueOf !== Object.prototype.valueOf && typeof t.valueOf == "function" && typeof e.valueOf == "function")
      return t.valueOf() === e.valueOf();
    if (t.toString !== Object.prototype.toString && typeof t.toString == "function" && typeof e.toString == "function")
      return t.toString() === e.toString();
    if (a = Object.keys(t), o = a.length, o !== Object.keys(e).length)
      return !1;
    for (n = o; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, a[n]))
        return !1;
    if (kt && t instanceof Element)
      return !1;
    for (n = o; n-- !== 0; )
      if (!((a[n] === "_owner" || a[n] === "__v" || a[n] === "__o") && t.$$typeof) && !Le(t[a[n]], e[a[n]]))
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
var $t = function(e, o) {
  try {
    return Le(e, o);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const Nt = /* @__PURE__ */ $e($t);
var pe = {
  BODY: "bodyAttributes",
  HTML: "htmlAttributes",
  TITLE: "titleAttributes"
}, S = {
  BASE: "base",
  BODY: "body",
  HEAD: "head",
  HTML: "html",
  LINK: "link",
  META: "meta",
  NOSCRIPT: "noscript",
  SCRIPT: "script",
  STYLE: "style",
  TITLE: "title"
}, xr = Object.keys(S).map(function(t) {
  return S[t];
}), W = {
  CHARSET: "charset",
  CSS_TEXT: "cssText",
  HREF: "href",
  HTTPEQUIV: "http-equiv",
  INNER_HTML: "innerHTML",
  ITEM_PROP: "itemprop",
  NAME: "name",
  PROPERTY: "property",
  REL: "rel",
  SRC: "src",
  TARGET: "target"
}, Fe = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
}, Me = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate"
}, Yt = Object.keys(Fe).reduce(function(t, e) {
  return t[Fe[e]] = e, t;
}, {}), Ht = [S.NOSCRIPT, S.SCRIPT, S.STYLE], oe = "data-react-helmet", Ut = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
  return typeof t;
} : function(t) {
  return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, qt = function(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}, Wt = function() {
  function t(e, o) {
    for (var n = 0; n < o.length; n++) {
      var a = o[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, o, n) {
    return o && t(e.prototype, o), n && t(e, n), e;
  };
}(), ee = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var o = arguments[e];
    for (var n in o)
      Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
  }
  return t;
}, Bt = function(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}, jr = function(t, e) {
  var o = {};
  for (var n in t)
    e.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(t, n) && (o[n] = t[n]);
  return o;
}, Vt = function(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}, Ze = function(e) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return o === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}, zt = function(e) {
  var o = Re(e, S.TITLE), n = Re(e, Me.TITLE_TEMPLATE);
  if (n && o)
    return n.replace(/%s/g, function() {
      return Array.isArray(o) ? o.join("") : o;
    });
  var a = Re(e, Me.DEFAULT_TITLE);
  return o || a || void 0;
}, Gt = function(e) {
  return Re(e, Me.ON_CHANGE_CLIENT_STATE) || function() {
  };
}, Xe = function(e, o) {
  return o.filter(function(n) {
    return typeof n[e] < "u";
  }).map(function(n) {
    return n[e];
  }).reduce(function(n, a) {
    return ee({}, n, a);
  }, {});
}, Jt = function(e, o) {
  return o.filter(function(n) {
    return typeof n[S.BASE] < "u";
  }).map(function(n) {
    return n[S.BASE];
  }).reverse().reduce(function(n, a) {
    if (!n.length)
      for (var i = Object.keys(a), p = 0; p < i.length; p++) {
        var u = i[p], s = u.toLowerCase();
        if (e.indexOf(s) !== -1 && a[s])
          return n.concat(a);
      }
    return n;
  }, []);
}, je = function(e, o, n) {
  var a = {};
  return n.filter(function(i) {
    return Array.isArray(i[e]) ? !0 : (typeof i[e] < "u" && rr("Helmet: " + e + ' should be of type "Array". Instead found type "' + Ut(i[e]) + '"'), !1);
  }).map(function(i) {
    return i[e];
  }).reverse().reduce(function(i, p) {
    var u = {};
    p.filter(function(E) {
      for (var g = void 0, $ = Object.keys(E), j = 0; j < $.length; j++) {
        var Y = $[j], N = Y.toLowerCase();
        o.indexOf(N) !== -1 && !(g === W.REL && E[g].toLowerCase() === "canonical") && !(N === W.REL && E[N].toLowerCase() === "stylesheet") && (g = N), o.indexOf(Y) !== -1 && (Y === W.INNER_HTML || Y === W.CSS_TEXT || Y === W.ITEM_PROP) && (g = Y);
      }
      if (!g || !E[g])
        return !1;
      var H = E[g].toLowerCase();
      return a[g] || (a[g] = {}), u[g] || (u[g] = {}), a[g][H] ? !1 : (u[g][H] = !0, !0);
    }).reverse().forEach(function(E) {
      return i.push(E);
    });
    for (var s = Object.keys(u), l = 0; l < s.length; l++) {
      var d = s[l], v = Et({}, a[d], u[d]);
      a[d] = v;
    }
    return i;
  }, []).reverse();
}, Re = function(e, o) {
  for (var n = e.length - 1; n >= 0; n--) {
    var a = e[n];
    if (a.hasOwnProperty(o))
      return a[o];
  }
  return null;
}, Xt = function(e) {
  return {
    baseTag: Jt([W.HREF, W.TARGET], e),
    bodyAttributes: Xe(pe.BODY, e),
    defer: Re(e, Me.DEFER),
    encode: Re(e, Me.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: Xe(pe.HTML, e),
    linkTags: je(S.LINK, [W.REL, W.HREF], e),
    metaTags: je(S.META, [W.NAME, W.CHARSET, W.HTTPEQUIV, W.PROPERTY, W.ITEM_PROP], e),
    noscriptTags: je(S.NOSCRIPT, [W.INNER_HTML], e),
    onChangeClientState: Gt(e),
    scriptTags: je(S.SCRIPT, [W.SRC, W.INNER_HTML], e),
    styleTags: je(S.STYLE, [W.CSS_TEXT], e),
    title: zt(e),
    titleAttributes: Xe(pe.TITLE, e)
  };
}, er = function() {
  var t = Date.now();
  return function(e) {
    var o = Date.now();
    o - t > 16 ? (t = o, e(o)) : setTimeout(function() {
      er(e);
    }, 0);
  };
}(), Ir = function(e) {
  return clearTimeout(e);
}, Kt = typeof window < "u" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || er : global.requestAnimationFrame || er, Qt = typeof window < "u" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || Ir : global.cancelAnimationFrame || Ir, rr = function(e) {
  return console && typeof console.warn == "function" && console.warn(e);
}, Ie = null, Zt = function(e) {
  Ie && Qt(Ie), e.defer ? Ie = Kt(function() {
    Mr(e, function() {
      Ie = null;
    });
  }) : (Mr(e), Ie = null);
}, Mr = function(e, o) {
  var n = e.baseTag, a = e.bodyAttributes, i = e.htmlAttributes, p = e.linkTags, u = e.metaTags, s = e.noscriptTags, l = e.onChangeClientState, d = e.scriptTags, v = e.styleTags, E = e.title, g = e.titleAttributes;
  tr(S.BODY, a), tr(S.HTML, i), en(E, g);
  var $ = {
    baseTag: be(S.BASE, n),
    linkTags: be(S.LINK, p),
    metaTags: be(S.META, u),
    noscriptTags: be(S.NOSCRIPT, s),
    scriptTags: be(S.SCRIPT, d),
    styleTags: be(S.STYLE, v)
  }, j = {}, Y = {};
  Object.keys($).forEach(function(N) {
    var H = $[N], B = H.newTags, V = H.oldTags;
    B.length && (j[N] = B), V.length && (Y[N] = $[N].oldTags);
  }), o && o(), l(e, j, Y);
}, $r = function(e) {
  return Array.isArray(e) ? e.join("") : e;
}, en = function(e, o) {
  typeof e < "u" && document.title !== e && (document.title = $r(e)), tr(S.TITLE, o);
}, tr = function(e, o) {
  var n = document.getElementsByTagName(e)[0];
  if (n) {
    for (var a = n.getAttribute(oe), i = a ? a.split(",") : [], p = [].concat(i), u = Object.keys(o), s = 0; s < u.length; s++) {
      var l = u[s], d = o[l] || "";
      n.getAttribute(l) !== d && n.setAttribute(l, d), i.indexOf(l) === -1 && i.push(l);
      var v = p.indexOf(l);
      v !== -1 && p.splice(v, 1);
    }
    for (var E = p.length - 1; E >= 0; E--)
      n.removeAttribute(p[E]);
    i.length === p.length ? n.removeAttribute(oe) : n.getAttribute(oe) !== u.join(",") && n.setAttribute(oe, u.join(","));
  }
}, be = function(e, o) {
  var n = document.head || document.querySelector(S.HEAD), a = n.querySelectorAll(e + "[" + oe + "]"), i = Array.prototype.slice.call(a), p = [], u = void 0;
  return o && o.length && o.forEach(function(s) {
    var l = document.createElement(e);
    for (var d in s)
      if (s.hasOwnProperty(d))
        if (d === W.INNER_HTML)
          l.innerHTML = s.innerHTML;
        else if (d === W.CSS_TEXT)
          l.styleSheet ? l.styleSheet.cssText = s.cssText : l.appendChild(document.createTextNode(s.cssText));
        else {
          var v = typeof s[d] > "u" ? "" : s[d];
          l.setAttribute(d, v);
        }
    l.setAttribute(oe, "true"), i.some(function(E, g) {
      return u = g, l.isEqualNode(E);
    }) ? i.splice(u, 1) : p.push(l);
  }), i.forEach(function(s) {
    return s.parentNode.removeChild(s);
  }), p.forEach(function(s) {
    return n.appendChild(s);
  }), {
    oldTags: i,
    newTags: p
  };
}, Nr = function(e) {
  return Object.keys(e).reduce(function(o, n) {
    var a = typeof e[n] < "u" ? n + '="' + e[n] + '"' : "" + n;
    return o ? o + " " + a : a;
  }, "");
}, rn = function(e, o, n, a) {
  var i = Nr(n), p = $r(o);
  return i ? "<" + e + " " + oe + '="true" ' + i + ">" + Ze(p, a) + "</" + e + ">" : "<" + e + " " + oe + '="true">' + Ze(p, a) + "</" + e + ">";
}, tn = function(e, o, n) {
  return o.reduce(function(a, i) {
    var p = Object.keys(i).filter(function(l) {
      return !(l === W.INNER_HTML || l === W.CSS_TEXT);
    }).reduce(function(l, d) {
      var v = typeof i[d] > "u" ? d : d + '="' + Ze(i[d], n) + '"';
      return l ? l + " " + v : v;
    }, ""), u = i.innerHTML || i.cssText || "", s = Ht.indexOf(e) === -1;
    return a + "<" + e + " " + oe + '="true" ' + p + (s ? "/>" : ">" + u + "</" + e + ">");
  }, "");
}, Yr = function(e) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Object.keys(e).reduce(function(n, a) {
    return n[Fe[a] || a] = e[a], n;
  }, o);
}, nn = function(e) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Object.keys(e).reduce(function(n, a) {
    return n[Yt[a] || a] = e[a], n;
  }, o);
}, on = function(e, o, n) {
  var a, i = (a = {
    key: o
  }, a[oe] = !0, a), p = Yr(n, i);
  return [ce.createElement(S.TITLE, p, o)];
}, an = function(e, o) {
  return o.map(function(n, a) {
    var i, p = (i = {
      key: a
    }, i[oe] = !0, i);
    return Object.keys(n).forEach(function(u) {
      var s = Fe[u] || u;
      if (s === W.INNER_HTML || s === W.CSS_TEXT) {
        var l = n.innerHTML || n.cssText;
        p.dangerouslySetInnerHTML = { __html: l };
      } else
        p[s] = n[u];
    }), ce.createElement(e, p);
  });
}, se = function(e, o, n) {
  switch (e) {
    case S.TITLE:
      return {
        toComponent: function() {
          return on(e, o.title, o.titleAttributes);
        },
        toString: function() {
          return rn(e, o.title, o.titleAttributes, n);
        }
      };
    case pe.BODY:
    case pe.HTML:
      return {
        toComponent: function() {
          return Yr(o);
        },
        toString: function() {
          return Nr(o);
        }
      };
    default:
      return {
        toComponent: function() {
          return an(e, o);
        },
        toString: function() {
          return tn(e, o, n);
        }
      };
  }
}, Hr = function(e) {
  var o = e.baseTag, n = e.bodyAttributes, a = e.encode, i = e.htmlAttributes, p = e.linkTags, u = e.metaTags, s = e.noscriptTags, l = e.scriptTags, d = e.styleTags, v = e.title, E = v === void 0 ? "" : v, g = e.titleAttributes;
  return {
    base: se(S.BASE, o, a),
    bodyAttributes: se(pe.BODY, n, a),
    htmlAttributes: se(pe.HTML, i, a),
    link: se(S.LINK, p, a),
    meta: se(S.META, u, a),
    noscript: se(S.NOSCRIPT, s, a),
    script: se(S.SCRIPT, l, a),
    style: se(S.STYLE, d, a),
    title: se(S.TITLE, { title: E, titleAttributes: g }, a)
  };
}, un = function(e) {
  var o, n;
  return n = o = function(a) {
    Bt(i, a);
    function i() {
      return qt(this, i), Vt(this, a.apply(this, arguments));
    }
    return i.prototype.shouldComponentUpdate = function(u) {
      return !Nt(this.props, u);
    }, i.prototype.mapNestedChildrenToProps = function(u, s) {
      if (!s)
        return null;
      switch (u.type) {
        case S.SCRIPT:
        case S.NOSCRIPT:
          return {
            innerHTML: s
          };
        case S.STYLE:
          return {
            cssText: s
          };
      }
      throw new Error("<" + u.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    }, i.prototype.flattenArrayTypeChildren = function(u) {
      var s, l = u.child, d = u.arrayTypeChildren, v = u.newChildProps, E = u.nestedChildren;
      return ee({}, d, (s = {}, s[l.type] = [].concat(d[l.type] || [], [ee({}, v, this.mapNestedChildrenToProps(l, E))]), s));
    }, i.prototype.mapObjectTypeChildren = function(u) {
      var s, l, d = u.child, v = u.newProps, E = u.newChildProps, g = u.nestedChildren;
      switch (d.type) {
        case S.TITLE:
          return ee({}, v, (s = {}, s[d.type] = g, s.titleAttributes = ee({}, E), s));
        case S.BODY:
          return ee({}, v, {
            bodyAttributes: ee({}, E)
          });
        case S.HTML:
          return ee({}, v, {
            htmlAttributes: ee({}, E)
          });
      }
      return ee({}, v, (l = {}, l[d.type] = ee({}, E), l));
    }, i.prototype.mapArrayTypeChildrenToProps = function(u, s) {
      var l = ee({}, s);
      return Object.keys(u).forEach(function(d) {
        var v;
        l = ee({}, l, (v = {}, v[d] = u[d], v));
      }), l;
    }, i.prototype.warnOnInvalidChildren = function(u, s) {
      if (process.env.NODE_ENV !== "production") {
        if (!xr.some(function(l) {
          return u.type === l;
        }))
          return typeof u.type == "function" ? rr("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.") : rr("Only elements types " + xr.join(", ") + " are allowed. Helmet does not support rendering <" + u.type + "> elements. Refer to our API for more information.");
        if (s && typeof s != "string" && (!Array.isArray(s) || s.some(function(l) {
          return typeof l != "string";
        })))
          throw new Error("Helmet expects a string as a child of <" + u.type + ">. Did you forget to wrap your children in braces? ( <" + u.type + ">{``}</" + u.type + "> ) Refer to our API for more information.");
      }
      return !0;
    }, i.prototype.mapChildrenToProps = function(u, s) {
      var l = this, d = {};
      return ce.Children.forEach(u, function(v) {
        if (!(!v || !v.props)) {
          var E = v.props, g = E.children, $ = jr(E, ["children"]), j = nn($);
          switch (l.warnOnInvalidChildren(v, g), v.type) {
            case S.LINK:
            case S.META:
            case S.NOSCRIPT:
            case S.SCRIPT:
            case S.STYLE:
              d = l.flattenArrayTypeChildren({
                child: v,
                arrayTypeChildren: d,
                newChildProps: j,
                nestedChildren: g
              });
              break;
            default:
              s = l.mapObjectTypeChildren({
                child: v,
                newProps: s,
                newChildProps: j,
                nestedChildren: g
              });
              break;
          }
        }
      }), s = this.mapArrayTypeChildrenToProps(d, s), s;
    }, i.prototype.render = function() {
      var u = this.props, s = u.children, l = jr(u, ["children"]), d = ee({}, l);
      return s && (d = this.mapChildrenToProps(s, d)), ce.createElement(e, d);
    }, Wt(i, null, [{
      key: "canUseDOM",
      // Component.peek comes from react-side-effect:
      // For testing, you may use a static peek() method available on the returned component.
      // It lets you get the current state without resetting the mounted instance stack.
      // Don’t use it for anything other than testing.
      /**
       * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
       * @param {Object} bodyAttributes: {"className": "root"}
       * @param {String} defaultTitle: "Default Title"
       * @param {Boolean} defer: true
       * @param {Boolean} encodeSpecialCharacters: true
       * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
       * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
       * @param {Array} meta: [{"name": "description", "content": "Test description"}]
       * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
       * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
       * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
       * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
       * @param {String} title: "Title"
       * @param {Object} titleAttributes: {"itemprop": "name"}
       * @param {String} titleTemplate: "MySite.com - %s"
       */
      set: function(u) {
        e.canUseDOM = u;
      }
    }]), i;
  }(ce.Component), o.propTypes = {
    base: q.object,
    bodyAttributes: q.object,
    children: q.oneOfType([q.arrayOf(q.node), q.node]),
    defaultTitle: q.string,
    defer: q.bool,
    encodeSpecialCharacters: q.bool,
    htmlAttributes: q.object,
    link: q.arrayOf(q.object),
    meta: q.arrayOf(q.object),
    noscript: q.arrayOf(q.object),
    onChangeClientState: q.func,
    script: q.arrayOf(q.object),
    style: q.arrayOf(q.object),
    title: q.string,
    titleAttributes: q.object,
    titleTemplate: q.string
  }, o.defaultProps = {
    defer: !0,
    encodeSpecialCharacters: !0
  }, o.peek = e.peek, o.rewind = function() {
    var a = e.rewind();
    return a || (a = Hr({
      baseTag: [],
      bodyAttributes: {},
      encodeSpecialCharacters: !0,
      htmlAttributes: {},
      linkTags: [],
      metaTags: [],
      noscriptTags: [],
      scriptTags: [],
      styleTags: [],
      title: "",
      titleAttributes: {}
    })), a;
  }, n;
}, sn = function() {
  return null;
}, cn = Mt(Xt, Zt, Hr)(sn), nr = un(cn);
nr.renderStatic = nr.rewind;
function fn() {
  const t = () => window.matchMedia("(prefers-color-scheme: dark)").matches, [e, o] = ft(t()), n = (a) => {
    o(a.matches);
  };
  return lt(() => {
    const a = window.matchMedia("(prefers-color-scheme: dark)");
    return a.addListener(n), () => a.removeListener(n);
  }, []), e;
}
function pn({ dark: t = null, highContrast: e = !1 }) {
  const o = fn();
  var n;
  t === null ? n = o : n = t, localStorage.setItem("isDarkTheme", n);
  const a = e ? 100 : 87;
  return n ? /* @__PURE__ */ Se.jsx(nr, { children: /* @__PURE__ */ Se.jsx("style", { type: "text/css", children: `
                html {
                    background-color: white;
                    -webkit-filter: invert(${a}%) hue-rotate(180deg);
                    -moz-filter: invert(${a}%) hue-rotate(180deg);
                    -o-filter: invert(${a}%) hue-rotate(180deg);
                    -ms-filter: invert(${a}%) hue-rotate(180deg);
                }

                body {
                    background-color: white; 
                }
            ` }) }) : /* @__PURE__ */ Se.jsx(Se.Fragment, {});
}
const ln = {
  WebkitFilter: "invert(100%) hue-rotate(180deg)",
  MozFilter: "invert(100%) hue-rotate(180deg)",
  OFilter: "invert(100%) hue-rotate(180deg)",
  msFilter: "invert(100%) hue-rotate(180deg)"
};
function vn({ children: t }) {
  var e = localStorage.getItem("isDarkTheme");
  return e == null ? e = !1 : e = JSON.parse(e), e ? /* @__PURE__ */ Se.jsx("span", { style: ln, children: t }) : /* @__PURE__ */ Se.jsx("span", { children: t });
}
export {
  vn as NoTheme,
  pn as default
};
