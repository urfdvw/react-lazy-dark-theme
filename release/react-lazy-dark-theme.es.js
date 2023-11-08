import ce, { useState as it, useEffect as ut } from "react";
function Fe(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Xe = { exports: {} }, Pe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function st() {
  if (mr)
    return Pe;
  mr = 1;
  var t = ce, e = Symbol.for("react.element"), o = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(u, s, l) {
    var d, v = {}, g = null, E = null;
    l !== void 0 && (g = "" + l), s.key !== void 0 && (g = "" + s.key), s.ref !== void 0 && (E = s.ref);
    for (d in s)
      n.call(s, d) && !i.hasOwnProperty(d) && (v[d] = s[d]);
    if (u && u.defaultProps)
      for (d in s = u.defaultProps, s)
        v[d] === void 0 && (v[d] = s[d]);
    return { $$typeof: e, type: u, key: g, ref: E, props: v, _owner: a.current };
  }
  return Pe.Fragment = o, Pe.jsx = p, Pe.jsxs = p, Pe;
}
var Ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tr;
function ct() {
  return Tr || (Tr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ce, e = Symbol.for("react.element"), o = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), $ = Symbol.iterator, I = "@@iterator";
    function Y(r) {
      if (r === null || typeof r != "object")
        return null;
      var c = $ && r[$] || r[I];
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
        var b = N.ReactDebugCurrentFrame, k = b.getStackAddendum();
        k !== "" && (c += "%s", y = y.concat([k]));
        var U = y.map(function(M) {
          return String(M);
        });
        U.unshift("Warning: " + c), Function.prototype.apply.call(console[r], console, U);
      }
    }
    var V = !1, T = !1, ae = !1, Se = !1, Re = !1, pe;
    pe = Symbol.for("react.module.reference");
    function _e(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === n || r === i || Re || r === a || r === l || r === d || Se || r === E || V || T || ae || typeof r == "object" && r !== null && (r.$$typeof === g || r.$$typeof === v || r.$$typeof === p || r.$$typeof === u || r.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === pe || r.getModuleId !== void 0));
    }
    function ve(r, c, y) {
      var b = r.displayName;
      if (b)
        return b;
      var k = c.displayName || c.name || "";
      return k !== "" ? y + "(" + k + ")" : y;
    }
    function ye(r) {
      return r.displayName || "Context";
    }
    function Z(r) {
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
            return ye(c) + ".Consumer";
          case p:
            var y = r;
            return ye(y._context) + ".Provider";
          case s:
            return ve(r, r.render, "ForwardRef");
          case v:
            var b = r.displayName || null;
            return b !== null ? b : Z(r.type) || "Memo";
          case g: {
            var k = r, U = k._payload, M = k._init;
            try {
              return Z(M(U));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, ie = 0, ee, oe, fe, me, f, h, C;
    function P() {
    }
    P.__reactDisabledLog = !0;
    function R() {
      {
        if (ie === 0) {
          ee = console.log, oe = console.info, fe = console.warn, me = console.error, f = console.group, h = console.groupCollapsed, C = console.groupEnd;
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
        ie++;
      }
    }
    function j() {
      {
        if (ie--, ie === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, r, {
              value: ee
            }),
            info: K({}, r, {
              value: oe
            }),
            warn: K({}, r, {
              value: fe
            }),
            error: K({}, r, {
              value: me
            }),
            group: K({}, r, {
              value: f
            }),
            groupCollapsed: K({}, r, {
              value: h
            }),
            groupEnd: K({}, r, {
              value: C
            })
          });
        }
        ie < 0 && H("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _ = N.ReactCurrentDispatcher, O;
    function A(r, c, y) {
      {
        if (O === void 0)
          try {
            throw Error();
          } catch (k) {
            var b = k.stack.trim().match(/\n( *(at )?)/);
            O = b && b[1] || "";
          }
        return `
` + O + r;
      }
    }
    var L = !1, w;
    {
      var X = typeof WeakMap == "function" ? WeakMap : Map;
      w = new X();
    }
    function m(r, c) {
      if (!r || L)
        return "";
      {
        var y = w.get(r);
        if (y !== void 0)
          return y;
      }
      var b;
      L = !0;
      var k = Error.prepareStackTrace;
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
            } catch (ue) {
              b = ue;
            }
            Reflect.construct(r, [], M);
          } else {
            try {
              M.call();
            } catch (ue) {
              b = ue;
            }
            r.call(M.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ue) {
            b = ue;
          }
          r();
        }
      } catch (ue) {
        if (ue && b && typeof ue.stack == "string") {
          for (var x = ue.stack.split(`
`), J = b.stack.split(`
`), z = x.length - 1, G = J.length - 1; z >= 1 && G >= 0 && x[z] !== J[G]; )
            G--;
          for (; z >= 1 && G >= 0; z--, G--)
            if (x[z] !== J[G]) {
              if (z !== 1 || G !== 1)
                do
                  if (z--, G--, G < 0 || x[z] !== J[G]) {
                    var te = `
` + x[z].replace(" at new ", " at ");
                    return r.displayName && te.includes("<anonymous>") && (te = te.replace("<anonymous>", r.displayName)), typeof r == "function" && w.set(r, te), te;
                  }
                while (z >= 1 && G >= 0);
              break;
            }
        }
      } finally {
        L = !1, _.current = U, j(), Error.prepareStackTrace = k;
      }
      var Ee = r ? r.displayName || r.name : "", yr = Ee ? A(Ee) : "";
      return typeof r == "function" && w.set(r, yr), yr;
    }
    function re(r, c, y) {
      return m(r, !1);
    }
    function Te(r) {
      var c = r.prototype;
      return !!(c && c.isReactComponent);
    }
    function le(r, c, y) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return m(r, Te(r));
      if (typeof r == "string")
        return A(r);
      switch (r) {
        case l:
          return A("Suspense");
        case d:
          return A("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case s:
            return re(r.render);
          case v:
            return le(r.type, c, y);
          case g: {
            var b = r, k = b._payload, U = b._init;
            try {
              return le(U(k), c, y);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = Object.prototype.hasOwnProperty, nr = {}, or = N.ReactDebugCurrentFrame;
    function je(r) {
      if (r) {
        var c = r._owner, y = le(r.type, r._source, c ? c.type : null);
        or.setExtraStackFrame(y);
      } else
        or.setExtraStackFrame(null);
    }
    function Yr(r, c, y, b, k) {
      {
        var U = Function.call.bind(Ie);
        for (var M in r)
          if (U(r, M)) {
            var x = void 0;
            try {
              if (typeof r[M] != "function") {
                var J = Error((b || "React class") + ": " + y + " type `" + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[M] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              x = r[M](c, M, b, y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (z) {
              x = z;
            }
            x && !(x instanceof Error) && (je(k), H("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", y, M, typeof x), je(null)), x instanceof Error && !(x.message in nr) && (nr[x.message] = !0, je(k), H("Failed %s type: %s", y, x.message), je(null));
          }
      }
    }
    var Hr = Array.isArray;
    function $e(r) {
      return Hr(r);
    }
    function Ur(r) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, y = c && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return y;
      }
    }
    function qr(r) {
      try {
        return ar(r), !1;
      } catch {
        return !0;
      }
    }
    function ar(r) {
      return "" + r;
    }
    function ir(r) {
      if (qr(r))
        return H("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ur(r)), ar(r);
    }
    var Oe = N.ReactCurrentOwner, Wr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ur, sr, Ne;
    Ne = {};
    function Br(r) {
      if (Ie.call(r, "ref")) {
        var c = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Vr(r) {
      if (Ie.call(r, "key")) {
        var c = Object.getOwnPropertyDescriptor(r, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function zr(r, c) {
      if (typeof r.ref == "string" && Oe.current && c && Oe.current.stateNode !== c) {
        var y = Z(Oe.current.type);
        Ne[y] || (H('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(Oe.current.type), r.ref), Ne[y] = !0);
      }
    }
    function Gr(r, c) {
      {
        var y = function() {
          ur || (ur = !0, H("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        y.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: y,
          configurable: !0
        });
      }
    }
    function Xr(r, c) {
      {
        var y = function() {
          sr || (sr = !0, H("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        y.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: y,
          configurable: !0
        });
      }
    }
    var Jr = function(r, c, y, b, k, U, M) {
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
        value: k
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    };
    function Kr(r, c, y, b, k) {
      {
        var U, M = {}, x = null, J = null;
        y !== void 0 && (ir(y), x = "" + y), Vr(c) && (ir(c.key), x = "" + c.key), Br(c) && (J = c.ref, zr(c, k));
        for (U in c)
          Ie.call(c, U) && !Wr.hasOwnProperty(U) && (M[U] = c[U]);
        if (r && r.defaultProps) {
          var z = r.defaultProps;
          for (U in z)
            M[U] === void 0 && (M[U] = z[U]);
        }
        if (x || J) {
          var G = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          x && Gr(M, G), J && Xr(M, G);
        }
        return Jr(r, x, J, k, b, Oe.current, M);
      }
    }
    var Ye = N.ReactCurrentOwner, cr = N.ReactDebugCurrentFrame;
    function he(r) {
      if (r) {
        var c = r._owner, y = le(r.type, r._source, c ? c.type : null);
        cr.setExtraStackFrame(y);
      } else
        cr.setExtraStackFrame(null);
    }
    var He;
    He = !1;
    function Ue(r) {
      return typeof r == "object" && r !== null && r.$$typeof === e;
    }
    function fr() {
      {
        if (Ye.current) {
          var r = Z(Ye.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Qr(r) {
      {
        if (r !== void 0) {
          var c = r.fileName.replace(/^.*[\\\/]/, ""), y = r.lineNumber;
          return `

Check your code at ` + c + ":" + y + ".";
        }
        return "";
      }
    }
    var lr = {};
    function Zr(r) {
      {
        var c = fr();
        if (!c) {
          var y = typeof r == "string" ? r : r.displayName || r.name;
          y && (c = `

Check the top-level render call using <` + y + ">.");
        }
        return c;
      }
    }
    function dr(r, c) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var y = Zr(c);
        if (lr[y])
          return;
        lr[y] = !0;
        var b = "";
        r && r._owner && r._owner !== Ye.current && (b = " It was passed a child from " + Z(r._owner.type) + "."), he(r), H('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, b), he(null);
      }
    }
    function pr(r, c) {
      {
        if (typeof r != "object")
          return;
        if ($e(r))
          for (var y = 0; y < r.length; y++) {
            var b = r[y];
            Ue(b) && dr(b, c);
          }
        else if (Ue(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var k = Y(r);
          if (typeof k == "function" && k !== r.entries)
            for (var U = k.call(r), M; !(M = U.next()).done; )
              Ue(M.value) && dr(M.value, c);
        }
      }
    }
    function et(r) {
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
          var b = Z(c);
          Yr(y, r.props, "prop", b, r);
        } else if (c.PropTypes !== void 0 && !He) {
          He = !0;
          var k = Z(c);
          H("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && H("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rt(r) {
      {
        for (var c = Object.keys(r.props), y = 0; y < c.length; y++) {
          var b = c[y];
          if (b !== "children" && b !== "key") {
            he(r), H("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), he(null);
            break;
          }
        }
        r.ref !== null && (he(r), H("Invalid attribute `ref` supplied to `React.Fragment`."), he(null));
      }
    }
    function vr(r, c, y, b, k, U) {
      {
        var M = _e(r);
        if (!M) {
          var x = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = Qr(k);
          J ? x += J : x += fr();
          var z;
          r === null ? z = "null" : $e(r) ? z = "array" : r !== void 0 && r.$$typeof === e ? (z = "<" + (Z(r.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : z = typeof r, H("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", z, x);
        }
        var G = Kr(r, c, y, k, U);
        if (G == null)
          return G;
        if (M) {
          var te = c.children;
          if (te !== void 0)
            if (b)
              if ($e(te)) {
                for (var Ee = 0; Ee < te.length; Ee++)
                  pr(te[Ee], r);
                Object.freeze && Object.freeze(te);
              } else
                H("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pr(te, r);
        }
        return r === n ? rt(G) : et(G), G;
      }
    }
    function tt(r, c, y) {
      return vr(r, c, y, !0);
    }
    function nt(r, c, y) {
      return vr(r, c, y, !1);
    }
    var ot = nt, at = tt;
    Ce.Fragment = n, Ce.jsx = ot, Ce.jsxs = at;
  }()), Ce;
}
process.env.NODE_ENV === "production" ? Xe.exports = st() : Xe.exports = ct();
var Me = Xe.exports, Je = { exports: {} }, Le = { exports: {} }, D = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr;
function ft() {
  if (hr)
    return D;
  hr = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, o = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, p = t ? Symbol.for("react.provider") : 60109, u = t ? Symbol.for("react.context") : 60110, s = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, v = t ? Symbol.for("react.suspense") : 60113, g = t ? Symbol.for("react.suspense_list") : 60120, E = t ? Symbol.for("react.memo") : 60115, $ = t ? Symbol.for("react.lazy") : 60116, I = t ? Symbol.for("react.block") : 60121, Y = t ? Symbol.for("react.fundamental") : 60117, N = t ? Symbol.for("react.responder") : 60118, H = t ? Symbol.for("react.scope") : 60119;
  function B(T) {
    if (typeof T == "object" && T !== null) {
      var ae = T.$$typeof;
      switch (ae) {
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
                case E:
                case p:
                  return T;
                default:
                  return ae;
              }
          }
        case o:
          return ae;
      }
    }
  }
  function V(T) {
    return B(T) === l;
  }
  return D.AsyncMode = s, D.ConcurrentMode = l, D.ContextConsumer = u, D.ContextProvider = p, D.Element = e, D.ForwardRef = d, D.Fragment = n, D.Lazy = $, D.Memo = E, D.Portal = o, D.Profiler = i, D.StrictMode = a, D.Suspense = v, D.isAsyncMode = function(T) {
    return V(T) || B(T) === s;
  }, D.isConcurrentMode = V, D.isContextConsumer = function(T) {
    return B(T) === u;
  }, D.isContextProvider = function(T) {
    return B(T) === p;
  }, D.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === e;
  }, D.isForwardRef = function(T) {
    return B(T) === d;
  }, D.isFragment = function(T) {
    return B(T) === n;
  }, D.isLazy = function(T) {
    return B(T) === $;
  }, D.isMemo = function(T) {
    return B(T) === E;
  }, D.isPortal = function(T) {
    return B(T) === o;
  }, D.isProfiler = function(T) {
    return B(T) === i;
  }, D.isStrictMode = function(T) {
    return B(T) === a;
  }, D.isSuspense = function(T) {
    return B(T) === v;
  }, D.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === n || T === l || T === i || T === a || T === v || T === g || typeof T == "object" && T !== null && (T.$$typeof === $ || T.$$typeof === E || T.$$typeof === p || T.$$typeof === u || T.$$typeof === d || T.$$typeof === Y || T.$$typeof === N || T.$$typeof === H || T.$$typeof === I);
  }, D.typeOf = B, D;
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
var Er;
function lt() {
  return Er || (Er = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, o = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, p = t ? Symbol.for("react.provider") : 60109, u = t ? Symbol.for("react.context") : 60110, s = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, v = t ? Symbol.for("react.suspense") : 60113, g = t ? Symbol.for("react.suspense_list") : 60120, E = t ? Symbol.for("react.memo") : 60115, $ = t ? Symbol.for("react.lazy") : 60116, I = t ? Symbol.for("react.block") : 60121, Y = t ? Symbol.for("react.fundamental") : 60117, N = t ? Symbol.for("react.responder") : 60118, H = t ? Symbol.for("react.scope") : 60119;
    function B(m) {
      return typeof m == "string" || typeof m == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      m === n || m === l || m === i || m === a || m === v || m === g || typeof m == "object" && m !== null && (m.$$typeof === $ || m.$$typeof === E || m.$$typeof === p || m.$$typeof === u || m.$$typeof === d || m.$$typeof === Y || m.$$typeof === N || m.$$typeof === H || m.$$typeof === I);
    }
    function V(m) {
      if (typeof m == "object" && m !== null) {
        var re = m.$$typeof;
        switch (re) {
          case e:
            var Te = m.type;
            switch (Te) {
              case s:
              case l:
              case n:
              case i:
              case a:
              case v:
                return Te;
              default:
                var le = Te && Te.$$typeof;
                switch (le) {
                  case u:
                  case d:
                  case $:
                  case E:
                  case p:
                    return le;
                  default:
                    return re;
                }
            }
          case o:
            return re;
        }
      }
    }
    var T = s, ae = l, Se = u, Re = p, pe = e, _e = d, ve = n, ye = $, Z = E, K = o, ie = i, ee = a, oe = v, fe = !1;
    function me(m) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), f(m) || V(m) === s;
    }
    function f(m) {
      return V(m) === l;
    }
    function h(m) {
      return V(m) === u;
    }
    function C(m) {
      return V(m) === p;
    }
    function P(m) {
      return typeof m == "object" && m !== null && m.$$typeof === e;
    }
    function R(m) {
      return V(m) === d;
    }
    function j(m) {
      return V(m) === n;
    }
    function _(m) {
      return V(m) === $;
    }
    function O(m) {
      return V(m) === E;
    }
    function A(m) {
      return V(m) === o;
    }
    function L(m) {
      return V(m) === i;
    }
    function w(m) {
      return V(m) === a;
    }
    function X(m) {
      return V(m) === v;
    }
    F.AsyncMode = T, F.ConcurrentMode = ae, F.ContextConsumer = Se, F.ContextProvider = Re, F.Element = pe, F.ForwardRef = _e, F.Fragment = ve, F.Lazy = ye, F.Memo = Z, F.Portal = K, F.Profiler = ie, F.StrictMode = ee, F.Suspense = oe, F.isAsyncMode = me, F.isConcurrentMode = f, F.isContextConsumer = h, F.isContextProvider = C, F.isElement = P, F.isForwardRef = R, F.isFragment = j, F.isLazy = _, F.isMemo = O, F.isPortal = A, F.isProfiler = L, F.isStrictMode = w, F.isSuspense = X, F.isValidElementType = B, F.typeOf = V;
  }()), F;
}
var gr;
function jr() {
  return gr || (gr = 1, process.env.NODE_ENV === "production" ? Le.exports = ft() : Le.exports = lt()), Le.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var br = Object.getOwnPropertySymbols, dt = Object.prototype.hasOwnProperty, pt = Object.prototype.propertyIsEnumerable;
function vt(t) {
  if (t == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(t);
}
function yt() {
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
var Mr = yt() ? Object.assign : function(t, e) {
  for (var o, n = vt(t), a, i = 1; i < arguments.length; i++) {
    o = Object(arguments[i]);
    for (var p in o)
      dt.call(o, p) && (n[p] = o[p]);
    if (br) {
      a = br(o);
      for (var u = 0; u < a.length; u++)
        pt.call(o, a[u]) && (n[a[u]] = o[a[u]]);
    }
  }
  return n;
};
const mt = /* @__PURE__ */ Fe(Mr);
var qe, Sr;
function tr() {
  if (Sr)
    return qe;
  Sr = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return qe = t, qe;
}
var We, Rr;
function Lr() {
  return Rr || (Rr = 1, We = Function.call.bind(Object.prototype.hasOwnProperty)), We;
}
var Be, _r;
function Tt() {
  if (_r)
    return Be;
  _r = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = tr(), o = {}, n = Lr();
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
              var g = Error(
                (s || "React class") + ": " + u + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            v = i[d](p, d, s, u, null, e);
          } catch ($) {
            v = $;
          }
          if (v && !(v instanceof Error) && t(
            (s || "React class") + ": type specification of " + u + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof v + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), v instanceof Error && !(v.message in o)) {
            o[v.message] = !0;
            var E = l ? l() : "";
            t(
              "Failed " + u + " type: " + v.message + (E ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, Be = a, Be;
}
var Ve, Or;
function ht() {
  if (Or)
    return Ve;
  Or = 1;
  var t = jr(), e = Mr, o = tr(), n = Lr(), a = Tt(), i = function() {
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
  return Ve = function(u, s) {
    var l = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function v(f) {
      var h = f && (l && f[l] || f[d]);
      if (typeof h == "function")
        return h;
    }
    var g = "<<anonymous>>", E = {
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
      instanceOf: ae,
      node: _e(),
      objectOf: Re,
      oneOf: Se,
      oneOfType: pe,
      shape: ye,
      exact: Z
    };
    function $(f, h) {
      return f === h ? f !== 0 || 1 / f === 1 / h : f !== f && h !== h;
    }
    function I(f, h) {
      this.message = f, this.data = h && typeof h == "object" ? h : {}, this.stack = "";
    }
    I.prototype = Error.prototype;
    function Y(f) {
      if (process.env.NODE_ENV !== "production")
        var h = {}, C = 0;
      function P(j, _, O, A, L, w, X) {
        if (A = A || g, w = w || O, X !== o) {
          if (s) {
            var m = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw m.name = "Invariant Violation", m;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var re = A + ":" + O;
            !h[re] && // Avoid spamming the console because they are often not actionable except for lib authors
            C < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + w + "` prop on `" + A + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), h[re] = !0, C++);
          }
        }
        return _[O] == null ? j ? _[O] === null ? new I("The " + L + " `" + w + "` is marked as required " + ("in `" + A + "`, but its value is `null`.")) : new I("The " + L + " `" + w + "` is marked as required in " + ("`" + A + "`, but its value is `undefined`.")) : null : f(_, O, A, L, w);
      }
      var R = P.bind(null, !1);
      return R.isRequired = P.bind(null, !0), R;
    }
    function N(f) {
      function h(C, P, R, j, _, O) {
        var A = C[P], L = ee(A);
        if (L !== f) {
          var w = oe(A);
          return new I(
            "Invalid " + j + " `" + _ + "` of type " + ("`" + w + "` supplied to `" + R + "`, expected ") + ("`" + f + "`."),
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
      function h(C, P, R, j, _) {
        if (typeof f != "function")
          return new I("Property `" + _ + "` of component `" + R + "` has invalid PropType notation inside arrayOf.");
        var O = C[P];
        if (!Array.isArray(O)) {
          var A = ee(O);
          return new I("Invalid " + j + " `" + _ + "` of type " + ("`" + A + "` supplied to `" + R + "`, expected an array."));
        }
        for (var L = 0; L < O.length; L++) {
          var w = f(O, L, R, j, _ + "[" + L + "]", o);
          if (w instanceof Error)
            return w;
        }
        return null;
      }
      return Y(h);
    }
    function V() {
      function f(h, C, P, R, j) {
        var _ = h[C];
        if (!u(_)) {
          var O = ee(_);
          return new I("Invalid " + R + " `" + j + "` of type " + ("`" + O + "` supplied to `" + P + "`, expected a single ReactElement."));
        }
        return null;
      }
      return Y(f);
    }
    function T() {
      function f(h, C, P, R, j) {
        var _ = h[C];
        if (!t.isValidElementType(_)) {
          var O = ee(_);
          return new I("Invalid " + R + " `" + j + "` of type " + ("`" + O + "` supplied to `" + P + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return Y(f);
    }
    function ae(f) {
      function h(C, P, R, j, _) {
        if (!(C[P] instanceof f)) {
          var O = f.name || g, A = me(C[P]);
          return new I("Invalid " + j + " `" + _ + "` of type " + ("`" + A + "` supplied to `" + R + "`, expected ") + ("instance of `" + O + "`."));
        }
        return null;
      }
      return Y(h);
    }
    function Se(f) {
      if (!Array.isArray(f))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), p;
      function h(C, P, R, j, _) {
        for (var O = C[P], A = 0; A < f.length; A++)
          if ($(O, f[A]))
            return null;
        var L = JSON.stringify(f, function(X, m) {
          var re = oe(m);
          return re === "symbol" ? String(m) : m;
        });
        return new I("Invalid " + j + " `" + _ + "` of value `" + String(O) + "` " + ("supplied to `" + R + "`, expected one of " + L + "."));
      }
      return Y(h);
    }
    function Re(f) {
      function h(C, P, R, j, _) {
        if (typeof f != "function")
          return new I("Property `" + _ + "` of component `" + R + "` has invalid PropType notation inside objectOf.");
        var O = C[P], A = ee(O);
        if (A !== "object")
          return new I("Invalid " + j + " `" + _ + "` of type " + ("`" + A + "` supplied to `" + R + "`, expected an object."));
        for (var L in O)
          if (n(O, L)) {
            var w = f(O, L, R, j, _ + "." + L, o);
            if (w instanceof Error)
              return w;
          }
        return null;
      }
      return Y(h);
    }
    function pe(f) {
      if (!Array.isArray(f))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), p;
      for (var h = 0; h < f.length; h++) {
        var C = f[h];
        if (typeof C != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + fe(C) + " at index " + h + "."
          ), p;
      }
      function P(R, j, _, O, A) {
        for (var L = [], w = 0; w < f.length; w++) {
          var X = f[w], m = X(R, j, _, O, A, o);
          if (m == null)
            return null;
          m.data && n(m.data, "expectedType") && L.push(m.data.expectedType);
        }
        var re = L.length > 0 ? ", expected one of type [" + L.join(", ") + "]" : "";
        return new I("Invalid " + O + " `" + A + "` supplied to " + ("`" + _ + "`" + re + "."));
      }
      return Y(P);
    }
    function _e() {
      function f(h, C, P, R, j) {
        return K(h[C]) ? null : new I("Invalid " + R + " `" + j + "` supplied to " + ("`" + P + "`, expected a ReactNode."));
      }
      return Y(f);
    }
    function ve(f, h, C, P, R) {
      return new I(
        (f || "React class") + ": " + h + " type `" + C + "." + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + R + "`."
      );
    }
    function ye(f) {
      function h(C, P, R, j, _) {
        var O = C[P], A = ee(O);
        if (A !== "object")
          return new I("Invalid " + j + " `" + _ + "` of type `" + A + "` " + ("supplied to `" + R + "`, expected `object`."));
        for (var L in f) {
          var w = f[L];
          if (typeof w != "function")
            return ve(R, j, _, L, oe(w));
          var X = w(O, L, R, j, _ + "." + L, o);
          if (X)
            return X;
        }
        return null;
      }
      return Y(h);
    }
    function Z(f) {
      function h(C, P, R, j, _) {
        var O = C[P], A = ee(O);
        if (A !== "object")
          return new I("Invalid " + j + " `" + _ + "` of type `" + A + "` " + ("supplied to `" + R + "`, expected `object`."));
        var L = e({}, C[P], f);
        for (var w in L) {
          var X = f[w];
          if (n(f, w) && typeof X != "function")
            return ve(R, j, _, w, oe(X));
          if (!X)
            return new I(
              "Invalid " + j + " `" + _ + "` key `" + w + "` supplied to `" + R + "`.\nBad object: " + JSON.stringify(C[P], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(f), null, "  ")
            );
          var m = X(O, w, R, j, _ + "." + w, o);
          if (m)
            return m;
        }
        return null;
      }
      return Y(h);
    }
    function K(f) {
      switch (typeof f) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !f;
        case "object":
          if (Array.isArray(f))
            return f.every(K);
          if (f === null || u(f))
            return !0;
          var h = v(f);
          if (h) {
            var C = h.call(f), P;
            if (h !== f.entries) {
              for (; !(P = C.next()).done; )
                if (!K(P.value))
                  return !1;
            } else
              for (; !(P = C.next()).done; ) {
                var R = P.value;
                if (R && !K(R[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ie(f, h) {
      return f === "symbol" ? !0 : h ? h["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && h instanceof Symbol : !1;
    }
    function ee(f) {
      var h = typeof f;
      return Array.isArray(f) ? "array" : f instanceof RegExp ? "object" : ie(h, f) ? "symbol" : h;
    }
    function oe(f) {
      if (typeof f > "u" || f === null)
        return "" + f;
      var h = ee(f);
      if (h === "object") {
        if (f instanceof Date)
          return "date";
        if (f instanceof RegExp)
          return "regexp";
      }
      return h;
    }
    function fe(f) {
      var h = oe(f);
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
    function me(f) {
      return !f.constructor || !f.constructor.name ? g : f.constructor.name;
    }
    return E.checkPropTypes = a, E.resetWarningCache = a.resetWarningCache, E.PropTypes = E, E;
  }, Ve;
}
var ze, Pr;
function Et() {
  if (Pr)
    return ze;
  Pr = 1;
  var t = tr();
  function e() {
  }
  function o() {
  }
  return o.resetWarningCache = e, ze = function() {
    function n(p, u, s, l, d, v) {
      if (v !== t) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
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
  }, ze;
}
if (process.env.NODE_ENV !== "production") {
  var gt = jr(), bt = !0;
  Je.exports = ht()(gt.isElement, bt);
} else
  Je.exports = Et()();
var St = Je.exports;
const q = /* @__PURE__ */ Fe(St);
function Rt(t) {
  return t && typeof t == "object" && "default" in t ? t.default : t;
}
var kr = ce, _t = Rt(kr);
function Cr(t, e, o) {
  return e in t ? Object.defineProperty(t, e, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = o, t;
}
function Ot(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
}
var Pt = !!(typeof window < "u" && window.document && window.document.createElement);
function Ct(t, e, o) {
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
      Ot(v, d);
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
      var g = v.prototype;
      return g.UNSAFE_componentWillMount = function() {
        p.push(this), s();
      }, g.componentDidUpdate = function() {
        s();
      }, g.componentWillUnmount = function() {
        var $ = p.indexOf(this);
        p.splice($, 1), s();
      }, g.render = function() {
        return _t.createElement(i, this.props);
      }, v;
    }(kr.PureComponent);
    return Cr(l, "displayName", "SideEffect(" + n(i) + ")"), Cr(l, "canUseDOM", Pt), l;
  };
}
var At = Ct;
const wt = /* @__PURE__ */ Fe(At);
var xt = typeof Element < "u", It = typeof Map == "function", jt = typeof Set == "function", Mt = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function ke(t, e) {
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
        if (!ke(t[n], e[n]))
          return !1;
      return !0;
    }
    var i;
    if (It && t instanceof Map && e instanceof Map) {
      if (t.size !== e.size)
        return !1;
      for (i = t.entries(); !(n = i.next()).done; )
        if (!e.has(n.value[0]))
          return !1;
      for (i = t.entries(); !(n = i.next()).done; )
        if (!ke(n.value[1], e.get(n.value[0])))
          return !1;
      return !0;
    }
    if (jt && t instanceof Set && e instanceof Set) {
      if (t.size !== e.size)
        return !1;
      for (i = t.entries(); !(n = i.next()).done; )
        if (!e.has(n.value[0]))
          return !1;
      return !0;
    }
    if (Mt && ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
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
    if (xt && t instanceof Element)
      return !1;
    for (n = o; n-- !== 0; )
      if (!((a[n] === "_owner" || a[n] === "__v" || a[n] === "__o") && t.$$typeof) && !ke(t[a[n]], e[a[n]]))
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
var Lt = function(e, o) {
  try {
    return ke(e, o);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const kt = /* @__PURE__ */ Fe(Lt);
var de = {
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
}, Ar = Object.keys(S).map(function(t) {
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
}, De = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
}, xe = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate"
}, Dt = Object.keys(De).reduce(function(t, e) {
  return t[De[e]] = e, t;
}, {}), Ft = [S.NOSCRIPT, S.SCRIPT, S.STYLE], ne = "data-react-helmet", $t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
  return typeof t;
} : function(t) {
  return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, Nt = function(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}, Yt = function() {
  function t(e, o) {
    for (var n = 0; n < o.length; n++) {
      var a = o[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, o, n) {
    return o && t(e.prototype, o), n && t(e, n), e;
  };
}(), Q = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var o = arguments[e];
    for (var n in o)
      Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
  }
  return t;
}, Ht = function(t, e) {
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
}, wr = function(t, e) {
  var o = {};
  for (var n in t)
    e.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(t, n) && (o[n] = t[n]);
  return o;
}, Ut = function(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}, Ke = function(e) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return o === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}, qt = function(e) {
  var o = be(e, S.TITLE), n = be(e, xe.TITLE_TEMPLATE);
  if (n && o)
    return n.replace(/%s/g, function() {
      return Array.isArray(o) ? o.join("") : o;
    });
  var a = be(e, xe.DEFAULT_TITLE);
  return o || a || void 0;
}, Wt = function(e) {
  return be(e, xe.ON_CHANGE_CLIENT_STATE) || function() {
  };
}, Ge = function(e, o) {
  return o.filter(function(n) {
    return typeof n[e] < "u";
  }).map(function(n) {
    return n[e];
  }).reduce(function(n, a) {
    return Q({}, n, a);
  }, {});
}, Bt = function(e, o) {
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
}, Ae = function(e, o, n) {
  var a = {};
  return n.filter(function(i) {
    return Array.isArray(i[e]) ? !0 : (typeof i[e] < "u" && Ze("Helmet: " + e + ' should be of type "Array". Instead found type "' + $t(i[e]) + '"'), !1);
  }).map(function(i) {
    return i[e];
  }).reverse().reduce(function(i, p) {
    var u = {};
    p.filter(function(g) {
      for (var E = void 0, $ = Object.keys(g), I = 0; I < $.length; I++) {
        var Y = $[I], N = Y.toLowerCase();
        o.indexOf(N) !== -1 && !(E === W.REL && g[E].toLowerCase() === "canonical") && !(N === W.REL && g[N].toLowerCase() === "stylesheet") && (E = N), o.indexOf(Y) !== -1 && (Y === W.INNER_HTML || Y === W.CSS_TEXT || Y === W.ITEM_PROP) && (E = Y);
      }
      if (!E || !g[E])
        return !1;
      var H = g[E].toLowerCase();
      return a[E] || (a[E] = {}), u[E] || (u[E] = {}), a[E][H] ? !1 : (u[E][H] = !0, !0);
    }).reverse().forEach(function(g) {
      return i.push(g);
    });
    for (var s = Object.keys(u), l = 0; l < s.length; l++) {
      var d = s[l], v = mt({}, a[d], u[d]);
      a[d] = v;
    }
    return i;
  }, []).reverse();
}, be = function(e, o) {
  for (var n = e.length - 1; n >= 0; n--) {
    var a = e[n];
    if (a.hasOwnProperty(o))
      return a[o];
  }
  return null;
}, Vt = function(e) {
  return {
    baseTag: Bt([W.HREF, W.TARGET], e),
    bodyAttributes: Ge(de.BODY, e),
    defer: be(e, xe.DEFER),
    encode: be(e, xe.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: Ge(de.HTML, e),
    linkTags: Ae(S.LINK, [W.REL, W.HREF], e),
    metaTags: Ae(S.META, [W.NAME, W.CHARSET, W.HTTPEQUIV, W.PROPERTY, W.ITEM_PROP], e),
    noscriptTags: Ae(S.NOSCRIPT, [W.INNER_HTML], e),
    onChangeClientState: Wt(e),
    scriptTags: Ae(S.SCRIPT, [W.SRC, W.INNER_HTML], e),
    styleTags: Ae(S.STYLE, [W.CSS_TEXT], e),
    title: qt(e),
    titleAttributes: Ge(de.TITLE, e)
  };
}, Qe = function() {
  var t = Date.now();
  return function(e) {
    var o = Date.now();
    o - t > 16 ? (t = o, e(o)) : setTimeout(function() {
      Qe(e);
    }, 0);
  };
}(), xr = function(e) {
  return clearTimeout(e);
}, zt = typeof window < "u" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || Qe : global.requestAnimationFrame || Qe, Gt = typeof window < "u" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || xr : global.cancelAnimationFrame || xr, Ze = function(e) {
  return console && typeof console.warn == "function" && console.warn(e);
}, we = null, Xt = function(e) {
  we && Gt(we), e.defer ? we = zt(function() {
    Ir(e, function() {
      we = null;
    });
  }) : (Ir(e), we = null);
}, Ir = function(e, o) {
  var n = e.baseTag, a = e.bodyAttributes, i = e.htmlAttributes, p = e.linkTags, u = e.metaTags, s = e.noscriptTags, l = e.onChangeClientState, d = e.scriptTags, v = e.styleTags, g = e.title, E = e.titleAttributes;
  er(S.BODY, a), er(S.HTML, i), Jt(g, E);
  var $ = {
    baseTag: ge(S.BASE, n),
    linkTags: ge(S.LINK, p),
    metaTags: ge(S.META, u),
    noscriptTags: ge(S.NOSCRIPT, s),
    scriptTags: ge(S.SCRIPT, d),
    styleTags: ge(S.STYLE, v)
  }, I = {}, Y = {};
  Object.keys($).forEach(function(N) {
    var H = $[N], B = H.newTags, V = H.oldTags;
    B.length && (I[N] = B), V.length && (Y[N] = $[N].oldTags);
  }), o && o(), l(e, I, Y);
}, Dr = function(e) {
  return Array.isArray(e) ? e.join("") : e;
}, Jt = function(e, o) {
  typeof e < "u" && document.title !== e && (document.title = Dr(e)), er(S.TITLE, o);
}, er = function(e, o) {
  var n = document.getElementsByTagName(e)[0];
  if (n) {
    for (var a = n.getAttribute(ne), i = a ? a.split(",") : [], p = [].concat(i), u = Object.keys(o), s = 0; s < u.length; s++) {
      var l = u[s], d = o[l] || "";
      n.getAttribute(l) !== d && n.setAttribute(l, d), i.indexOf(l) === -1 && i.push(l);
      var v = p.indexOf(l);
      v !== -1 && p.splice(v, 1);
    }
    for (var g = p.length - 1; g >= 0; g--)
      n.removeAttribute(p[g]);
    i.length === p.length ? n.removeAttribute(ne) : n.getAttribute(ne) !== u.join(",") && n.setAttribute(ne, u.join(","));
  }
}, ge = function(e, o) {
  var n = document.head || document.querySelector(S.HEAD), a = n.querySelectorAll(e + "[" + ne + "]"), i = Array.prototype.slice.call(a), p = [], u = void 0;
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
    l.setAttribute(ne, "true"), i.some(function(g, E) {
      return u = E, l.isEqualNode(g);
    }) ? i.splice(u, 1) : p.push(l);
  }), i.forEach(function(s) {
    return s.parentNode.removeChild(s);
  }), p.forEach(function(s) {
    return n.appendChild(s);
  }), {
    oldTags: i,
    newTags: p
  };
}, Fr = function(e) {
  return Object.keys(e).reduce(function(o, n) {
    var a = typeof e[n] < "u" ? n + '="' + e[n] + '"' : "" + n;
    return o ? o + " " + a : a;
  }, "");
}, Kt = function(e, o, n, a) {
  var i = Fr(n), p = Dr(o);
  return i ? "<" + e + " " + ne + '="true" ' + i + ">" + Ke(p, a) + "</" + e + ">" : "<" + e + " " + ne + '="true">' + Ke(p, a) + "</" + e + ">";
}, Qt = function(e, o, n) {
  return o.reduce(function(a, i) {
    var p = Object.keys(i).filter(function(l) {
      return !(l === W.INNER_HTML || l === W.CSS_TEXT);
    }).reduce(function(l, d) {
      var v = typeof i[d] > "u" ? d : d + '="' + Ke(i[d], n) + '"';
      return l ? l + " " + v : v;
    }, ""), u = i.innerHTML || i.cssText || "", s = Ft.indexOf(e) === -1;
    return a + "<" + e + " " + ne + '="true" ' + p + (s ? "/>" : ">" + u + "</" + e + ">");
  }, "");
}, $r = function(e) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Object.keys(e).reduce(function(n, a) {
    return n[De[a] || a] = e[a], n;
  }, o);
}, Zt = function(e) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Object.keys(e).reduce(function(n, a) {
    return n[Dt[a] || a] = e[a], n;
  }, o);
}, en = function(e, o, n) {
  var a, i = (a = {
    key: o
  }, a[ne] = !0, a), p = $r(n, i);
  return [ce.createElement(S.TITLE, p, o)];
}, rn = function(e, o) {
  return o.map(function(n, a) {
    var i, p = (i = {
      key: a
    }, i[ne] = !0, i);
    return Object.keys(n).forEach(function(u) {
      var s = De[u] || u;
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
          return en(e, o.title, o.titleAttributes);
        },
        toString: function() {
          return Kt(e, o.title, o.titleAttributes, n);
        }
      };
    case de.BODY:
    case de.HTML:
      return {
        toComponent: function() {
          return $r(o);
        },
        toString: function() {
          return Fr(o);
        }
      };
    default:
      return {
        toComponent: function() {
          return rn(e, o);
        },
        toString: function() {
          return Qt(e, o, n);
        }
      };
  }
}, Nr = function(e) {
  var o = e.baseTag, n = e.bodyAttributes, a = e.encode, i = e.htmlAttributes, p = e.linkTags, u = e.metaTags, s = e.noscriptTags, l = e.scriptTags, d = e.styleTags, v = e.title, g = v === void 0 ? "" : v, E = e.titleAttributes;
  return {
    base: se(S.BASE, o, a),
    bodyAttributes: se(de.BODY, n, a),
    htmlAttributes: se(de.HTML, i, a),
    link: se(S.LINK, p, a),
    meta: se(S.META, u, a),
    noscript: se(S.NOSCRIPT, s, a),
    script: se(S.SCRIPT, l, a),
    style: se(S.STYLE, d, a),
    title: se(S.TITLE, { title: g, titleAttributes: E }, a)
  };
}, tn = function(e) {
  var o, n;
  return n = o = function(a) {
    Ht(i, a);
    function i() {
      return Nt(this, i), Ut(this, a.apply(this, arguments));
    }
    return i.prototype.shouldComponentUpdate = function(u) {
      return !kt(this.props, u);
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
      var s, l = u.child, d = u.arrayTypeChildren, v = u.newChildProps, g = u.nestedChildren;
      return Q({}, d, (s = {}, s[l.type] = [].concat(d[l.type] || [], [Q({}, v, this.mapNestedChildrenToProps(l, g))]), s));
    }, i.prototype.mapObjectTypeChildren = function(u) {
      var s, l, d = u.child, v = u.newProps, g = u.newChildProps, E = u.nestedChildren;
      switch (d.type) {
        case S.TITLE:
          return Q({}, v, (s = {}, s[d.type] = E, s.titleAttributes = Q({}, g), s));
        case S.BODY:
          return Q({}, v, {
            bodyAttributes: Q({}, g)
          });
        case S.HTML:
          return Q({}, v, {
            htmlAttributes: Q({}, g)
          });
      }
      return Q({}, v, (l = {}, l[d.type] = Q({}, g), l));
    }, i.prototype.mapArrayTypeChildrenToProps = function(u, s) {
      var l = Q({}, s);
      return Object.keys(u).forEach(function(d) {
        var v;
        l = Q({}, l, (v = {}, v[d] = u[d], v));
      }), l;
    }, i.prototype.warnOnInvalidChildren = function(u, s) {
      if (process.env.NODE_ENV !== "production") {
        if (!Ar.some(function(l) {
          return u.type === l;
        }))
          return typeof u.type == "function" ? Ze("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.") : Ze("Only elements types " + Ar.join(", ") + " are allowed. Helmet does not support rendering <" + u.type + "> elements. Refer to our API for more information.");
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
          var g = v.props, E = g.children, $ = wr(g, ["children"]), I = Zt($);
          switch (l.warnOnInvalidChildren(v, E), v.type) {
            case S.LINK:
            case S.META:
            case S.NOSCRIPT:
            case S.SCRIPT:
            case S.STYLE:
              d = l.flattenArrayTypeChildren({
                child: v,
                arrayTypeChildren: d,
                newChildProps: I,
                nestedChildren: E
              });
              break;
            default:
              s = l.mapObjectTypeChildren({
                child: v,
                newProps: s,
                newChildProps: I,
                nestedChildren: E
              });
              break;
          }
        }
      }), s = this.mapArrayTypeChildrenToProps(d, s), s;
    }, i.prototype.render = function() {
      var u = this.props, s = u.children, l = wr(u, ["children"]), d = Q({}, l);
      return s && (d = this.mapChildrenToProps(s, d)), ce.createElement(e, d);
    }, Yt(i, null, [{
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
    return a || (a = Nr({
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
}, nn = function() {
  return null;
}, on = wt(Vt, Xt, Nr)(nn), rr = tn(on);
rr.renderStatic = rr.rewind;
function sn({ dark: t = null }) {
  var e;
  return t === null ? e = an() : e = t, e ? /* @__PURE__ */ Me.jsx(rr, { children: /* @__PURE__ */ Me.jsx("style", { type: "text/css", children: `
                html {
                    background-color: white;
                    -webkit-filter: invert(87%) hue-rotate(180deg);
                    -moz-filter: invert(87%) hue-rotate(180deg);
                    -o-filter: invert(87%) hue-rotate(180deg);
                    -ms-filter: invert(87%) hue-rotate(180deg);
                }

                body {
                    background-color: white; 
                }
            ` }) }) : /* @__PURE__ */ Me.jsx(Me.Fragment, {});
}
function an() {
  const t = () => window.matchMedia("(prefers-color-scheme: dark)").matches, [e, o] = it(t()), n = (a) => {
    o(a.matches);
  };
  return ut(() => {
    const a = window.matchMedia("(prefers-color-scheme: dark)");
    return a.addListener(n), () => a.removeListener(n);
  }, []), e;
}
export {
  sn as default
};
