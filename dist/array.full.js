!(function () {
    'use strict'
    var e,
        t = function () {
            return (
                (t =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in (t = arguments[n]))
                                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                        return e
                    }),
                t.apply(this, arguments)
            )
        }
    /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */ function n(e) {
        var t = 'function' == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0
        if (n) return n.call(e)
        if (e && 'number' == typeof e.length)
            return {
                next: function () {
                    return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
                },
            }
        throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
    }
    function r(e, t) {
        var n = 'function' == typeof Symbol && e[Symbol.iterator]
        if (!n) return e
        var r,
            i,
            o = n.call(e),
            a = []
        try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; ) a.push(r.value)
        } catch (e) {
            i = { error: e }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    }
    function i(e, t, n) {
        if (n || 2 === arguments.length)
            for (var r, i = 0, o = t.length; i < o; i++)
                (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]))
        return e.concat(r || Array.prototype.slice.call(t))
    }
    function o(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
                (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, r)
        }
        return n
    }
    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
                ? o(Object(n), !0).forEach(function (t) {
                      d(e, t, n[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : o(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                  })
        }
        return e
    }
    function s(e) {
        return (
            (s =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e
                      }
                    : function (e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e
                      }),
            s(e)
        )
    }
    function u(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }
    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
        }
    }
    function l(e, t, n) {
        return t && c(e.prototype, t), n && c(e, n), Object.defineProperty(e, 'prototype', { writable: !1 }), e
    }
    function d(e, t, n) {
        return (
            t in e
                ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                : (e[t] = n),
            e
        )
    }
    function f(e, t) {
        if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
        ;(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && h(e, t)
    }
    function p(e) {
        return (
            (p = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e)
                  }),
            p(e)
        )
    }
    function h(e, t) {
        return (
            (h = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                      return (e.__proto__ = t), e
                  }),
            h(e, t)
        )
    }
    function v(e, t) {
        if (null == e) return {}
        var n,
            r,
            i = (function (e, t) {
                if (null == e) return {}
                var n,
                    r,
                    i = {},
                    o = Object.keys(e)
                for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n])
                return i
            })(e, t)
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            for (r = 0; r < o.length; r++)
                (n = o[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]))
        }
        return i
    }
    function g(e, t) {
        if (t && ('object' == typeof t || 'function' == typeof t)) return t
        if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
        return (function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
        })(e)
    }
    function m(e) {
        var t = (function () {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
            if (Reflect.construct.sham) return !1
            if ('function' == typeof Proxy) return !0
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        })()
        return function () {
            var n,
                r = p(e)
            if (t) {
                var i = p(this).constructor
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments)
            return g(this, n)
        }
    }
    function _(e, t) {
        return (
            (function (e) {
                if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
                var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
                if (null == n) return
                var r,
                    i,
                    o = [],
                    a = !0,
                    s = !1
                try {
                    for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0);
                } catch (e) {
                    ;(s = !0), (i = e)
                } finally {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (s) throw i
                    }
                }
                return o
            })(e, t) ||
            b(e, t) ||
            (function () {
                throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
            })()
        )
    }
    function y(e) {
        return (
            (function (e) {
                if (Array.isArray(e)) return w(e)
            })(e) ||
            (function (e) {
                if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
                    return Array.from(e)
            })(e) ||
            b(e) ||
            (function () {
                throw new TypeError(
                    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
            })()
        )
    }
    function b(e, t) {
        if (e) {
            if ('string' == typeof e) return w(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                    ? Array.from(e)
                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? w(e, t)
                    : void 0
            )
        }
    }
    function w(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
    }
    function k(e, t) {
        var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
        if (!n) {
            if (Array.isArray(e) || (n = b(e)) || (t && e && 'number' == typeof e.length)) {
                n && (e = n)
                var r = 0,
                    i = function () {}
                return {
                    s: i,
                    n: function () {
                        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
                    },
                    e: function (e) {
                        throw e
                    },
                    f: i,
                }
            }
            throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
        }
        var o,
            a = !0,
            s = !1
        return {
            s: function () {
                n = n.call(e)
            },
            n: function () {
                var e = n.next()
                return (a = e.done), e
            },
            e: function (e) {
                ;(s = !0), (o = e)
            },
            f: function () {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (s) throw o
                }
            },
        }
    }
    function S(e) {
        var t,
            n = null === (t = e) || void 0 === t ? void 0 : t.host
        return Boolean(n && n.shadowRoot && n.shadowRoot === e)
    }
    function x(e) {
        var t = e.maskInputOptions,
            n = e.tagName,
            r = e.type,
            i = e.value,
            o = e.maskInputFn,
            a = i || ''
        return (t[n.toLowerCase()] || t[r]) && (a = o ? o(a) : '*'.repeat(a.length)), a
    }
    !(function (e) {
        ;(e[(e.Document = 0)] = 'Document'),
            (e[(e.DocumentType = 1)] = 'DocumentType'),
            (e[(e.Element = 2)] = 'Element'),
            (e[(e.Text = 3)] = 'Text'),
            (e[(e.CDATA = 4)] = 'CDATA'),
            (e[(e.Comment = 5)] = 'Comment')
    })(e || (e = {}))
    var E = '__rrweb_original__'
    var C,
        I,
        O = 1,
        T = new RegExp('[^a-z0-9-_:]'),
        F = -2
    function M(e) {
        try {
            var t = e.rules || e.cssRules
            return t ? Array.from(t).map(P).join('') : null
        } catch (e) {
            return null
        }
    }
    function P(e) {
        var t = e.cssText
        if (
            (function (e) {
                return 'styleSheet' in e
            })(e)
        )
            try {
                t = M(e.styleSheet) || t
            } catch (e) {}
        return t
    }
    var R = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        N = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
        D = /^(data:)([^,]*),(.*)/i
    function L(e, t) {
        return (e || '').replace(R, function (e, n, r, i, o, a) {
            var s,
                u = r || o || a,
                c = n || i || ''
            if (!u) return e
            if (!N.test(u)) return 'url(' + c + u + c + ')'
            if (D.test(u)) return 'url(' + c + u + c + ')'
            if ('/' === u[0])
                return (
                    'url(' +
                    c +
                    (((s = t).indexOf('//') > -1 ? s.split('/').slice(0, 3).join('/') : s.split('/')[0]).split('?')[0] +
                        u) +
                    c +
                    ')'
                )
            var l = t.split('/'),
                d = u.split('/')
            l.pop()
            for (var f = 0, p = d; f < p.length; f++) {
                var h = p[f]
                '.' !== h && ('..' === h ? l.pop() : l.push(h))
            }
            return 'url(' + c + l.join('/') + c + ')'
        })
    }
    var A,
        $,
        j,
        H,
        B,
        q,
        U = /^[^ \t\n\r\u000c]+/,
        z = /^[, \t\n\r\u000c]+/
    function W(e, t) {
        if (!t || '' === t.trim()) return t
        var n = e.createElement('a')
        return (n.href = t), n.href
    }
    function V() {
        var e = document.createElement('a')
        return (e.href = ''), e.href
    }
    function G(e, t, n, r) {
        return 'src' === n || ('href' === n && r) || ('xlink:href' === n && r && '#' !== r[0])
            ? W(e, r)
            : 'background' !== n || !r || ('table' !== t && 'td' !== t && 'th' !== t)
            ? 'srcset' === n && r
                ? (function (e, t) {
                      if ('' === t.trim()) return t
                      var n = 0
                      function r(e) {
                          var r,
                              i = e.exec(t.substring(n))
                          return i ? ((r = i[0]), (n += r.length), r) : ''
                      }
                      for (var i = []; r(z), !(n >= t.length); ) {
                          var o = r(U)
                          if (',' === o.slice(-1)) (o = W(e, o.substring(0, o.length - 1))), i.push(o)
                          else {
                              var a = ''
                              o = W(e, o)
                              for (var s = !1; ; ) {
                                  var u = t.charAt(n)
                                  if ('' === u) {
                                      i.push((o + a).trim())
                                      break
                                  }
                                  if (s) ')' === u && (s = !1)
                                  else {
                                      if (',' === u) {
                                          ;(n += 1), i.push((o + a).trim())
                                          break
                                      }
                                      '(' === u && (s = !0)
                                  }
                                  ;(a += u), (n += 1)
                              }
                          }
                      }
                      return i.join(', ')
                  })(e, r)
                : 'style' === n && r
                ? L(r, V())
                : 'object' === t && 'data' === n && r
                ? W(e, r)
                : r
            : W(e, r)
    }
    function Y(e, t, n) {
        if (!e) return !1
        if (e.nodeType === e.ELEMENT_NODE) {
            if ('string' == typeof t) {
                if (e.classList.contains(t)) return !0
            } else
                for (var r = 0; r < e.classList.length; r++) {
                    var i = e.classList[r]
                    if (t.test(i)) return !0
                }
            return !(!n || !e.matches(n)) || Y(e.parentNode, t, n)
        }
        return e.nodeType, e.TEXT_NODE, Y(e.parentNode, t, n)
    }
    function J(t, n) {
        var r,
            i,
            o,
            a,
            s = n.doc,
            u = n.blockClass,
            c = n.blockSelector,
            l = n.maskTextClass,
            d = n.maskTextSelector,
            f = n.inlineStylesheet,
            p = n.maskInputOptions,
            h = void 0 === p ? {} : p,
            v = n.maskTextFn,
            g = n.maskInputFn,
            m = n.dataURLOptions,
            _ = void 0 === m ? {} : m,
            y = n.inlineImages,
            b = n.recordCanvas,
            w = n.keepIframeSrcFn
        if (s.__sn) {
            var k = s.__sn.id
            i = 1 === k ? void 0 : k
        }
        switch (t.nodeType) {
            case t.DOCUMENT_NODE:
                return 'CSS1Compat' !== t.compatMode
                    ? { type: e.Document, childNodes: [], compatMode: t.compatMode, rootId: i }
                    : { type: e.Document, childNodes: [], rootId: i }
            case t.DOCUMENT_TYPE_NODE:
                return { type: e.DocumentType, name: t.name, publicId: t.publicId, systemId: t.systemId, rootId: i }
            case t.ELEMENT_NODE:
                for (
                    var S = (function (e, t, n) {
                            if ('string' == typeof t) {
                                if (e.classList.contains(t)) return !0
                            } else
                                for (var r = 0; r < e.classList.length; r++) {
                                    var i = e.classList[r]
                                    if (t.test(i)) return !0
                                }
                            return !!n && e.matches(n)
                        })(t, u, c),
                        O = (function (e) {
                            if (e instanceof HTMLFormElement) return 'form'
                            var t = e.tagName.toLowerCase().trim()
                            return T.test(t) ? 'div' : t
                        })(t),
                        F = {},
                        P = 0,
                        R = Array.from(t.attributes);
                    P < R.length;
                    P++
                ) {
                    var N = R[P],
                        D = N.name,
                        A = N.value
                    F[D] = G(s, O, D, A)
                }
                if ('link' === O && f) {
                    var $ = Array.from(s.styleSheets).find(function (e) {
                            return e.href === t.href
                        }),
                        j = null
                    $ && (j = M($)), j && (delete F.rel, delete F.href, (F._cssText = L(j, $.href)))
                }
                if ('style' === O && t.sheet && !(t.innerText || t.textContent || '').trim().length)
                    (j = M(t.sheet)) && (F._cssText = L(j, V()))
                if ('input' === O || 'textarea' === O || 'select' === O) {
                    A = t.value
                    'radio' !== F.type && 'checkbox' !== F.type && 'submit' !== F.type && 'button' !== F.type && A
                        ? (F.value = x({ type: F.type, tagName: O, value: A, maskInputOptions: h, maskInputFn: g }))
                        : t.checked && (F.checked = t.checked)
                }
                if (
                    ('option' === O && (t.selected && !h.select ? (F.selected = !0) : delete F.selected),
                    'canvas' === O && b)
                )
                    if ('2d' === t.__context)
                        (function (e) {
                            var t = e.getContext('2d')
                            if (!t) return !0
                            for (var n = 0; n < e.width; n += 50)
                                for (var r = 0; r < e.height; r += 50) {
                                    var i = t.getImageData,
                                        o = E in i ? i[E] : i
                                    if (
                                        new Uint32Array(
                                            o.call(
                                                t,
                                                n,
                                                r,
                                                Math.min(50, e.width - n),
                                                Math.min(50, e.height - r)
                                            ).data.buffer
                                        ).some(function (e) {
                                            return 0 !== e
                                        })
                                    )
                                        return !1
                                }
                            return !0
                        })(t) || (F.rr_dataURL = t.toDataURL(_.type, _.quality))
                    else if (!('__context' in t)) {
                        var H = t.toDataURL(_.type, _.quality),
                            B = document.createElement('canvas')
                        ;(B.width = t.width),
                            (B.height = t.height),
                            H !== B.toDataURL(_.type, _.quality) && (F.rr_dataURL = H)
                    }
                if ('img' === O && y) {
                    C || ((C = s.createElement('canvas')), (I = C.getContext('2d')))
                    var q = t,
                        U = q.crossOrigin
                    q.crossOrigin = 'anonymous'
                    var z = function () {
                        try {
                            ;(C.width = q.naturalWidth),
                                (C.height = q.naturalHeight),
                                I.drawImage(q, 0, 0),
                                (F.rr_dataURL = C.toDataURL(_.type, _.quality))
                        } catch (e) {
                            console.warn('Cannot inline img src=' + q.currentSrc + '! Error: ' + e)
                        }
                        U ? (F.crossOrigin = U) : delete F.crossOrigin
                    }
                    q.complete && 0 !== q.naturalWidth ? z() : (q.onload = z)
                }
                if (
                    (('audio' !== O && 'video' !== O) ||
                        ((F.rr_mediaState = t.paused ? 'paused' : 'played'), (F.rr_mediaCurrentTime = t.currentTime)),
                    t.scrollLeft && (F.rr_scrollLeft = t.scrollLeft),
                    t.scrollTop && (F.rr_scrollTop = t.scrollTop),
                    S)
                ) {
                    var W = t.getBoundingClientRect(),
                        J = W.width,
                        Q = W.height
                    F = { class: F.class, rr_width: J + 'px', rr_height: Q + 'px' }
                }
                return (
                    'iframe' !== O || w(F.src) || (t.contentDocument || (F.rr_src = F.src), delete F.src),
                    {
                        type: e.Element,
                        tagName: O,
                        attributes: F,
                        childNodes: [],
                        isSVG: ((a = t), Boolean('svg' === a.tagName || a.ownerSVGElement) || void 0),
                        needBlock: S,
                        rootId: i,
                    }
                )
            case t.TEXT_NODE:
                var X = t.parentNode && t.parentNode.tagName,
                    K = t.textContent,
                    Z = 'STYLE' === X || void 0,
                    ee = 'SCRIPT' === X || void 0
                if (Z && K) {
                    try {
                        t.nextSibling ||
                            t.previousSibling ||
                            ((null === (r = t.parentNode.sheet) || void 0 === r ? void 0 : r.cssRules) &&
                                (K = (o = t.parentNode.sheet).cssRules
                                    ? Array.from(o.cssRules)
                                          .map(function (e) {
                                              return e.cssText || ''
                                          })
                                          .join('')
                                    : ''))
                    } catch (e) {
                        console.warn("Cannot get CSS styles from text's parentNode. Error: " + e, t)
                    }
                    K = L(K, V())
                }
                return (
                    ee && (K = 'SCRIPT_PLACEHOLDER'),
                    !Z && !ee && Y(t, l, d) && K && (K = v ? v(K) : K.replace(/[\S]/g, '*')),
                    { type: e.Text, textContent: K || '', isStyle: Z, rootId: i }
                )
            case t.CDATA_SECTION_NODE:
                return { type: e.CDATA, textContent: '', rootId: i }
            case t.COMMENT_NODE:
                return { type: e.Comment, textContent: t.textContent || '', rootId: i }
            default:
                return !1
        }
    }
    function Q(e) {
        return void 0 === e ? '' : e.toLowerCase()
    }
    function X(t, n) {
        var r,
            i = n.doc,
            o = n.map,
            a = n.blockClass,
            s = n.blockSelector,
            u = n.maskTextClass,
            c = n.maskTextSelector,
            l = n.skipChild,
            d = void 0 !== l && l,
            f = n.inlineStylesheet,
            p = void 0 === f || f,
            h = n.maskInputOptions,
            v = void 0 === h ? {} : h,
            g = n.maskTextFn,
            m = n.maskInputFn,
            _ = n.slimDOMOptions,
            y = n.dataURLOptions,
            b = void 0 === y ? {} : y,
            w = n.inlineImages,
            k = void 0 !== w && w,
            x = n.recordCanvas,
            E = void 0 !== x && x,
            C = n.onSerialize,
            I = n.onIframeLoad,
            T = n.iframeLoadTimeout,
            M = void 0 === T ? 5e3 : T,
            P = n.keepIframeSrcFn,
            R =
                void 0 === P
                    ? function () {
                          return !1
                      }
                    : P,
            N = n.preserveWhiteSpace,
            D = void 0 === N || N,
            L = J(t, {
                doc: i,
                blockClass: a,
                blockSelector: s,
                maskTextClass: u,
                maskTextSelector: c,
                inlineStylesheet: p,
                maskInputOptions: v,
                maskTextFn: g,
                maskInputFn: m,
                dataURLOptions: b,
                inlineImages: k,
                recordCanvas: E,
                keepIframeSrcFn: R,
            })
        if (!L) return console.warn(t, 'not serialized'), null
        r =
            '__sn' in t
                ? t.__sn.id
                : !(function (t, n) {
                      if (n.comment && t.type === e.Comment) return !0
                      if (t.type === e.Element) {
                          if (
                              n.script &&
                              ('script' === t.tagName ||
                                  ('link' === t.tagName &&
                                      'preload' === t.attributes.rel &&
                                      'script' === t.attributes.as) ||
                                  ('link' === t.tagName &&
                                      'prefetch' === t.attributes.rel &&
                                      'string' == typeof t.attributes.href &&
                                      t.attributes.href.endsWith('.js')))
                          )
                              return !0
                          if (
                              n.headFavicon &&
                              (('link' === t.tagName && 'shortcut icon' === t.attributes.rel) ||
                                  ('meta' === t.tagName &&
                                      (Q(t.attributes.name).match(/^msapplication-tile(image|color)$/) ||
                                          'application-name' === Q(t.attributes.name) ||
                                          'icon' === Q(t.attributes.rel) ||
                                          'apple-touch-icon' === Q(t.attributes.rel) ||
                                          'shortcut icon' === Q(t.attributes.rel))))
                          )
                              return !0
                          if ('meta' === t.tagName) {
                              if (n.headMetaDescKeywords && Q(t.attributes.name).match(/^description|keywords$/))
                                  return !0
                              if (
                                  n.headMetaSocial &&
                                  (Q(t.attributes.property).match(/^(og|twitter|fb):/) ||
                                      Q(t.attributes.name).match(/^(og|twitter):/) ||
                                      'pinterest' === Q(t.attributes.name))
                              )
                                  return !0
                              if (
                                  n.headMetaRobots &&
                                  ('robots' === Q(t.attributes.name) ||
                                      'googlebot' === Q(t.attributes.name) ||
                                      'bingbot' === Q(t.attributes.name))
                              )
                                  return !0
                              if (n.headMetaHttpEquiv && void 0 !== t.attributes['http-equiv']) return !0
                              if (
                                  n.headMetaAuthorship &&
                                  ('author' === Q(t.attributes.name) ||
                                      'generator' === Q(t.attributes.name) ||
                                      'framework' === Q(t.attributes.name) ||
                                      'publisher' === Q(t.attributes.name) ||
                                      'progid' === Q(t.attributes.name) ||
                                      Q(t.attributes.property).match(/^article:/) ||
                                      Q(t.attributes.property).match(/^product:/))
                              )
                                  return !0
                              if (
                                  n.headMetaVerification &&
                                  ('google-site-verification' === Q(t.attributes.name) ||
                                      'yandex-verification' === Q(t.attributes.name) ||
                                      'csrf-token' === Q(t.attributes.name) ||
                                      'p:domain_verify' === Q(t.attributes.name) ||
                                      'verify-v1' === Q(t.attributes.name) ||
                                      'verification' === Q(t.attributes.name) ||
                                      'shopify-checkout-api-token' === Q(t.attributes.name))
                              )
                                  return !0
                          }
                      }
                      return !1
                  })(L, _) &&
                  (D || L.type !== e.Text || L.isStyle || L.textContent.replace(/^\s+|\s+$/gm, '').length)
                ? O++
                : F
        var A = Object.assign(L, { id: r })
        if (((t.__sn = A), r === F)) return null
        ;(o[r] = t), C && C(t)
        var $ = !d
        if (
            (A.type === e.Element &&
                (($ = $ && !A.needBlock), delete A.needBlock, t.shadowRoot && (A.isShadowHost = !0)),
            (A.type === e.Document || A.type === e.Element) && $)
        ) {
            _.headWhitespace && L.type === e.Element && 'head' === L.tagName && (D = !1)
            for (
                var j = {
                        doc: i,
                        map: o,
                        blockClass: a,
                        blockSelector: s,
                        maskTextClass: u,
                        maskTextSelector: c,
                        skipChild: d,
                        inlineStylesheet: p,
                        maskInputOptions: v,
                        maskTextFn: g,
                        maskInputFn: m,
                        slimDOMOptions: _,
                        dataURLOptions: b,
                        inlineImages: k,
                        recordCanvas: E,
                        preserveWhiteSpace: D,
                        onSerialize: C,
                        onIframeLoad: I,
                        iframeLoadTimeout: M,
                        keepIframeSrcFn: R,
                    },
                    H = 0,
                    B = Array.from(t.childNodes);
                H < B.length;
                H++
            ) {
                ;(z = X(B[H], j)) && A.childNodes.push(z)
            }
            if (
                (function (e) {
                    return e.nodeType === e.ELEMENT_NODE
                })(t) &&
                t.shadowRoot
            )
                for (var q = 0, U = Array.from(t.shadowRoot.childNodes); q < U.length; q++) {
                    var z
                    ;(z = X(U[q], j)) && ((z.isShadow = !0), A.childNodes.push(z))
                }
        }
        return (
            t.parentNode && S(t.parentNode) && (A.isShadow = !0),
            A.type === e.Element &&
                'iframe' === A.tagName &&
                (function (e, t, n) {
                    var r = e.contentWindow
                    if (r) {
                        var i,
                            o = !1
                        try {
                            i = r.document.readyState
                        } catch (e) {
                            return
                        }
                        if ('complete' === i) {
                            var a = 'about:blank'
                            r.location.href === a && e.src !== a && '' !== e.src
                                ? e.addEventListener('load', t)
                                : setTimeout(t, 0)
                        } else {
                            var s = setTimeout(function () {
                                o || (t(), (o = !0))
                            }, n)
                            e.addEventListener('load', function () {
                                clearTimeout(s), (o = !0), t()
                            })
                        }
                    }
                })(
                    t,
                    function () {
                        var e = t.contentDocument
                        if (e && I) {
                            var n = X(e, {
                                doc: e,
                                map: o,
                                blockClass: a,
                                blockSelector: s,
                                maskTextClass: u,
                                maskTextSelector: c,
                                skipChild: !1,
                                inlineStylesheet: p,
                                maskInputOptions: v,
                                maskTextFn: g,
                                maskInputFn: m,
                                slimDOMOptions: _,
                                dataURLOptions: b,
                                inlineImages: k,
                                recordCanvas: E,
                                preserveWhiteSpace: D,
                                onSerialize: C,
                                onIframeLoad: I,
                                iframeLoadTimeout: M,
                                keepIframeSrcFn: R,
                            })
                            n && I(t, n)
                        }
                    },
                    M
                ),
            A
        )
    }
    function K(e, t, n) {
        void 0 === n && (n = document)
        var r = { capture: !0, passive: !0 }
        return (
            n.addEventListener(e, t, r),
            function () {
                return n.removeEventListener(e, t, r)
            }
        )
    }
    !(function (e) {
        ;(e[(e.DomContentLoaded = 0)] = 'DomContentLoaded'),
            (e[(e.Load = 1)] = 'Load'),
            (e[(e.FullSnapshot = 2)] = 'FullSnapshot'),
            (e[(e.IncrementalSnapshot = 3)] = 'IncrementalSnapshot'),
            (e[(e.Meta = 4)] = 'Meta'),
            (e[(e.Custom = 5)] = 'Custom'),
            (e[(e.Plugin = 6)] = 'Plugin')
    })(A || (A = {})),
        (function (e) {
            ;(e[(e.Mutation = 0)] = 'Mutation'),
                (e[(e.MouseMove = 1)] = 'MouseMove'),
                (e[(e.MouseInteraction = 2)] = 'MouseInteraction'),
                (e[(e.Scroll = 3)] = 'Scroll'),
                (e[(e.ViewportResize = 4)] = 'ViewportResize'),
                (e[(e.Input = 5)] = 'Input'),
                (e[(e.TouchMove = 6)] = 'TouchMove'),
                (e[(e.MediaInteraction = 7)] = 'MediaInteraction'),
                (e[(e.StyleSheetRule = 8)] = 'StyleSheetRule'),
                (e[(e.CanvasMutation = 9)] = 'CanvasMutation'),
                (e[(e.Font = 10)] = 'Font'),
                (e[(e.Log = 11)] = 'Log'),
                (e[(e.Drag = 12)] = 'Drag'),
                (e[(e.StyleDeclaration = 13)] = 'StyleDeclaration')
        })($ || ($ = {})),
        (function (e) {
            ;(e[(e.MouseUp = 0)] = 'MouseUp'),
                (e[(e.MouseDown = 1)] = 'MouseDown'),
                (e[(e.Click = 2)] = 'Click'),
                (e[(e.ContextMenu = 3)] = 'ContextMenu'),
                (e[(e.DblClick = 4)] = 'DblClick'),
                (e[(e.Focus = 5)] = 'Focus'),
                (e[(e.Blur = 6)] = 'Blur'),
                (e[(e.TouchStart = 7)] = 'TouchStart'),
                (e[(e.TouchMove_Departed = 8)] = 'TouchMove_Departed'),
                (e[(e.TouchEnd = 9)] = 'TouchEnd'),
                (e[(e.TouchCancel = 10)] = 'TouchCancel')
        })(j || (j = {})),
        (function (e) {
            ;(e[(e['2D'] = 0)] = '2D'), (e[(e.WebGL = 1)] = 'WebGL'), (e[(e.WebGL2 = 2)] = 'WebGL2')
        })(H || (H = {})),
        (function (e) {
            ;(e[(e.Play = 0)] = 'Play'),
                (e[(e.Pause = 1)] = 'Pause'),
                (e[(e.Seeked = 2)] = 'Seeked'),
                (e[(e.VolumeChange = 3)] = 'VolumeChange')
        })(B || (B = {})),
        (function (e) {
            ;(e.Start = 'start'),
                (e.Pause = 'pause'),
                (e.Resume = 'resume'),
                (e.Resize = 'resize'),
                (e.Finish = 'finish'),
                (e.FullsnapshotRebuilded = 'fullsnapshot-rebuilded'),
                (e.LoadStylesheetStart = 'load-stylesheet-start'),
                (e.LoadStylesheetEnd = 'load-stylesheet-end'),
                (e.SkipStart = 'skip-start'),
                (e.SkipEnd = 'skip-end'),
                (e.MouseInteraction = 'mouse-interaction'),
                (e.EventCast = 'event-cast'),
                (e.CustomEvent = 'custom-event'),
                (e.Flush = 'flush'),
                (e.StateChange = 'state-change'),
                (e.PlayBack = 'play-back')
        })(q || (q = {}))
    var Z =
            'Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.',
        ee = {
            map: {},
            getId: function () {
                return console.error(Z), -1
            },
            getNode: function () {
                return console.error(Z), null
            },
            removeNodeFromMap: function () {
                console.error(Z)
            },
            has: function () {
                return console.error(Z), !1
            },
            reset: function () {
                console.error(Z)
            },
        }
    function te(e, t, n) {
        void 0 === n && (n = {})
        var r = null,
            i = 0
        return function (o) {
            var a = Date.now()
            i || !1 !== n.leading || (i = a)
            var s = t - (a - i),
                u = this,
                c = arguments
            s <= 0 || s > t
                ? (r && (clearTimeout(r), (r = null)), (i = a), e.apply(u, c))
                : r ||
                  !1 === n.trailing ||
                  (r = setTimeout(function () {
                      ;(i = !1 === n.leading ? 0 : Date.now()), (r = null), e.apply(u, c)
                  }, s))
        }
    }
    function ne(e, t, n, r, i) {
        void 0 === i && (i = window)
        var o = i.Object.getOwnPropertyDescriptor(e, t)
        return (
            i.Object.defineProperty(
                e,
                t,
                r
                    ? n
                    : {
                          set: function (e) {
                              var t = this
                              setTimeout(function () {
                                  n.set.call(t, e)
                              }, 0),
                                  o && o.set && o.set.call(this, e)
                          },
                      }
            ),
            function () {
                return ne(e, t, o || {}, !0)
            }
        )
    }
    function re(e, t, n) {
        try {
            if (!(t in e)) return function () {}
            var r = e[t],
                i = n(r)
            return (
                'function' == typeof i &&
                    ((i.prototype = i.prototype || {}),
                    Object.defineProperties(i, { __rrweb_original__: { enumerable: !1, value: r } })),
                (e[t] = i),
                function () {
                    e[t] = r
                }
            )
        } catch (e) {
            return function () {}
        }
    }
    function ie() {
        return (
            window.innerHeight ||
            (document.documentElement && document.documentElement.clientHeight) ||
            (document.body && document.body.clientHeight)
        )
    }
    function oe() {
        return (
            window.innerWidth ||
            (document.documentElement && document.documentElement.clientWidth) ||
            (document.body && document.body.clientWidth)
        )
    }
    function ae(e, t) {
        if (!e) return !1
        if (e.nodeType === e.ELEMENT_NODE) {
            var n = !1
            if ('string' == typeof t) {
                if (void 0 !== e.closest) return null !== e.closest('.' + t)
                n = e.classList.contains(t)
            } else
                e.classList.forEach(function (e) {
                    t.test(e) && (n = !0)
                })
            return n || ae(e.parentNode, t)
        }
        return e.nodeType, e.TEXT_NODE, ae(e.parentNode, t)
    }
    function se(e) {
        return '__sn' in e && e.__sn.id === F
    }
    function ue(e, t) {
        if (S(e)) return !1
        var n = t.getId(e)
        return (
            !t.has(n) ||
            ((!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || ue(e.parentNode, t)))
        )
    }
    function ce(e) {
        return Boolean(e.changedTouches)
    }
    function le(t) {
        return '__sn' in t && t.__sn.type === e.Element && 'iframe' === t.__sn.tagName
    }
    function de(e) {
        return Boolean(null == e ? void 0 : e.shadowRoot)
    }
    function fe(e) {
        return '__ln' in e
    }
    'undefined' != typeof window &&
        window.Proxy &&
        window.Reflect &&
        (ee = new Proxy(ee, {
            get: function (e, t, n) {
                return 'map' === t && console.error(Z), Reflect.get(e, t, n)
            },
        }))
    var pe = (function () {
            function e() {
                ;(this.length = 0), (this.head = null)
            }
            return (
                (e.prototype.get = function (e) {
                    if (e >= this.length) throw new Error('Position outside of list range')
                    for (var t = this.head, n = 0; n < e; n++) t = (null == t ? void 0 : t.next) || null
                    return t
                }),
                (e.prototype.addNode = function (e) {
                    var t = { value: e, previous: null, next: null }
                    if (((e.__ln = t), e.previousSibling && fe(e.previousSibling))) {
                        var n = e.previousSibling.__ln.next
                        ;(t.next = n),
                            (t.previous = e.previousSibling.__ln),
                            (e.previousSibling.__ln.next = t),
                            n && (n.previous = t)
                    } else if (e.nextSibling && fe(e.nextSibling) && e.nextSibling.__ln.previous) {
                        n = e.nextSibling.__ln.previous
                        ;(t.previous = n),
                            (t.next = e.nextSibling.__ln),
                            (e.nextSibling.__ln.previous = t),
                            n && (n.next = t)
                    } else this.head && (this.head.previous = t), (t.next = this.head), (this.head = t)
                    this.length++
                }),
                (e.prototype.removeNode = function (e) {
                    var t = e.__ln
                    this.head &&
                        (t.previous
                            ? ((t.previous.next = t.next), t.next && (t.next.previous = t.previous))
                            : ((this.head = t.next), this.head && (this.head.previous = null)),
                        e.__ln && delete e.__ln,
                        this.length--)
                }),
                e
            )
        })(),
        he = function (e, t) {
            return ''.concat(e, '@').concat(t)
        }
    function ve(e) {
        return '__sn' in e
    }
    var ge = (function () {
        function e() {
            var e = this
            ;(this.frozen = !1),
                (this.locked = !1),
                (this.texts = []),
                (this.attributes = []),
                (this.removes = []),
                (this.mapRemoves = []),
                (this.movedMap = {}),
                (this.addedSet = new Set()),
                (this.movedSet = new Set()),
                (this.droppedSet = new Set()),
                (this.processMutations = function (t) {
                    t.forEach(e.processMutation), e.emit()
                }),
                (this.emit = function () {
                    var t, r, i, o
                    if (!e.frozen && !e.locked) {
                        for (
                            var a = [],
                                s = new pe(),
                                u = function (t) {
                                    for (var n = t, r = F; r === F; ) r = (n = n && n.nextSibling) && e.mirror.getId(n)
                                    return r
                                },
                                c = function (t) {
                                    for (
                                        var n,
                                            r,
                                            i,
                                            o,
                                            c,
                                            l = t.getRootNode
                                                ? null === (n = t.getRootNode()) || void 0 === n
                                                    ? void 0
                                                    : n.host
                                                : null,
                                            d = l;
                                        null ===
                                            (i =
                                                null === (r = null == d ? void 0 : d.getRootNode) || void 0 === r
                                                    ? void 0
                                                    : r.call(d)) || void 0 === i
                                            ? void 0
                                            : i.host;

                                    )
                                        d =
                                            (null ===
                                                (c =
                                                    null === (o = null == d ? void 0 : d.getRootNode) || void 0 === o
                                                        ? void 0
                                                        : o.call(d)) || void 0 === c
                                                ? void 0
                                                : c.host) || null
                                    var f = !(e.doc.contains(t) || (null !== d && e.doc.contains(d)))
                                    if (t.parentNode && !f) {
                                        var p = S(t.parentNode) ? e.mirror.getId(l) : e.mirror.getId(t.parentNode),
                                            h = u(t)
                                        if (-1 === p || -1 === h) return s.addNode(t)
                                        var v = X(t, {
                                            doc: e.doc,
                                            map: e.mirror.map,
                                            blockClass: e.blockClass,
                                            blockSelector: e.blockSelector,
                                            maskTextClass: e.maskTextClass,
                                            maskTextSelector: e.maskTextSelector,
                                            skipChild: !0,
                                            inlineStylesheet: e.inlineStylesheet,
                                            maskInputOptions: e.maskInputOptions,
                                            maskTextFn: e.maskTextFn,
                                            maskInputFn: e.maskInputFn,
                                            slimDOMOptions: e.slimDOMOptions,
                                            recordCanvas: e.recordCanvas,
                                            inlineImages: e.inlineImages,
                                            onSerialize: function (n) {
                                                le(n) && e.iframeManager.addIframe(n),
                                                    de(t) && e.shadowDomManager.addShadowRoot(t.shadowRoot, document)
                                            },
                                            onIframeLoad: function (t, n) {
                                                e.iframeManager.attachIframe(t, n),
                                                    e.shadowDomManager.observeAttachShadow(t)
                                            },
                                        })
                                        v && a.push({ parentId: p, nextId: h, node: v })
                                    }
                                };
                            e.mapRemoves.length;

                        )
                            e.mirror.removeNodeFromMap(e.mapRemoves.shift())
                        try {
                            for (var l = n(e.movedSet), d = l.next(); !d.done; d = l.next()) {
                                var f = d.value
                                ;(_e(e.removes, f, e.mirror) && !e.movedSet.has(f.parentNode)) || c(f)
                            }
                        } catch (e) {
                            t = { error: e }
                        } finally {
                            try {
                                d && !d.done && (r = l.return) && r.call(l)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        try {
                            for (var p = n(e.addedSet), h = p.next(); !h.done; h = p.next()) {
                                f = h.value
                                ye(e.droppedSet, f) || _e(e.removes, f, e.mirror)
                                    ? ye(e.movedSet, f)
                                        ? c(f)
                                        : e.droppedSet.add(f)
                                    : c(f)
                            }
                        } catch (e) {
                            i = { error: e }
                        } finally {
                            try {
                                h && !h.done && (o = p.return) && o.call(p)
                            } finally {
                                if (i) throw i.error
                            }
                        }
                        for (var v = null; s.length; ) {
                            var g = null
                            if (v) {
                                var m = e.mirror.getId(v.value.parentNode),
                                    _ = u(v.value)
                                ;-1 !== m && -1 !== _ && (g = v)
                            }
                            if (!g)
                                for (var y = s.length - 1; y >= 0; y--) {
                                    var b = s.get(y)
                                    if (b) {
                                        ;(m = e.mirror.getId(b.value.parentNode)), (_ = u(b.value))
                                        if (-1 !== m && -1 !== _) {
                                            g = b
                                            break
                                        }
                                    }
                                }
                            if (!g) {
                                for (; s.head; ) s.removeNode(s.head.value)
                                break
                            }
                            ;(v = g.previous), s.removeNode(g.value), c(g.value)
                        }
                        var w = {
                            texts: e.texts
                                .map(function (t) {
                                    return { id: e.mirror.getId(t.node), value: t.value }
                                })
                                .filter(function (t) {
                                    return e.mirror.has(t.id)
                                }),
                            attributes: e.attributes
                                .map(function (t) {
                                    return { id: e.mirror.getId(t.node), attributes: t.attributes }
                                })
                                .filter(function (t) {
                                    return e.mirror.has(t.id)
                                }),
                            removes: e.removes,
                            adds: a,
                        }
                        ;(w.texts.length || w.attributes.length || w.removes.length || w.adds.length) &&
                            ((e.texts = []),
                            (e.attributes = []),
                            (e.removes = []),
                            (e.addedSet = new Set()),
                            (e.movedSet = new Set()),
                            (e.droppedSet = new Set()),
                            (e.movedMap = {}),
                            e.mutationCb(w))
                    }
                }),
                (this.processMutation = function (t) {
                    var r, i, o, a
                    if (!se(t.target))
                        switch (t.type) {
                            case 'characterData':
                                var s = t.target.textContent
                                ae(t.target, e.blockClass) ||
                                    s === t.oldValue ||
                                    e.texts.push({
                                        value:
                                            Y(t.target, e.maskTextClass, e.maskTextSelector) && s
                                                ? e.maskTextFn
                                                    ? e.maskTextFn(s)
                                                    : s.replace(/[\S]/g, '*')
                                                : s,
                                        node: t.target,
                                    })
                                break
                            case 'attributes':
                                var u = t.target
                                s = t.target.getAttribute(t.attributeName)
                                if (
                                    ('value' === t.attributeName &&
                                        (s = x({
                                            maskInputOptions: e.maskInputOptions,
                                            tagName: t.target.tagName,
                                            type: t.target.getAttribute('type'),
                                            value: s,
                                            maskInputFn: e.maskInputFn,
                                        })),
                                    ae(t.target, e.blockClass) || s === t.oldValue)
                                )
                                    return
                                var c = e.attributes.find(function (e) {
                                    return e.node === t.target
                                })
                                if (
                                    (c || ((c = { node: t.target, attributes: {} }), e.attributes.push(c)),
                                    'style' === t.attributeName)
                                ) {
                                    var l = e.doc.createElement('span')
                                    t.oldValue && l.setAttribute('style', t.oldValue),
                                        (void 0 !== c.attributes.style && null !== c.attributes.style) ||
                                            (c.attributes.style = {})
                                    var d = c.attributes.style
                                    try {
                                        for (var f = n(Array.from(u.style)), p = f.next(); !p.done; p = f.next()) {
                                            var h = p.value,
                                                v = u.style.getPropertyValue(h),
                                                g = u.style.getPropertyPriority(h)
                                            ;(v === l.style.getPropertyValue(h) &&
                                                g === l.style.getPropertyPriority(h)) ||
                                                (d[h] = '' === g ? v : [v, g])
                                        }
                                    } catch (e) {
                                        r = { error: e }
                                    } finally {
                                        try {
                                            p && !p.done && (i = f.return) && i.call(f)
                                        } finally {
                                            if (r) throw r.error
                                        }
                                    }
                                    try {
                                        for (var m = n(Array.from(l.style)), _ = m.next(); !_.done; _ = m.next()) {
                                            h = _.value
                                            '' === u.style.getPropertyValue(h) && (d[h] = !1)
                                        }
                                    } catch (e) {
                                        o = { error: e }
                                    } finally {
                                        try {
                                            _ && !_.done && (a = m.return) && a.call(m)
                                        } finally {
                                            if (o) throw o.error
                                        }
                                    }
                                } else c.attributes[t.attributeName] = G(e.doc, t.target.tagName, t.attributeName, s)
                                break
                            case 'childList':
                                t.addedNodes.forEach(function (n) {
                                    return e.genAdds(n, t.target)
                                }),
                                    t.removedNodes.forEach(function (n) {
                                        var r = e.mirror.getId(n),
                                            i = S(t.target) ? e.mirror.getId(t.target.host) : e.mirror.getId(t.target)
                                        ae(t.target, e.blockClass) ||
                                            se(n) ||
                                            (e.addedSet.has(n)
                                                ? (me(e.addedSet, n), e.droppedSet.add(n))
                                                : (e.addedSet.has(t.target) && -1 === r) ||
                                                  ue(t.target, e.mirror) ||
                                                  (e.movedSet.has(n) && e.movedMap[he(r, i)]
                                                      ? me(e.movedSet, n)
                                                      : e.removes.push({
                                                            parentId: i,
                                                            id: r,
                                                            isShadow: !!S(t.target) || void 0,
                                                        })),
                                            e.mapRemoves.push(n))
                                    })
                        }
                }),
                (this.genAdds = function (t, n) {
                    if (!n || !ae(n, e.blockClass)) {
                        if (ve(t)) {
                            if (se(t)) return
                            e.movedSet.add(t)
                            var r = null
                            n && ve(n) && (r = n.__sn.id), r && (e.movedMap[he(t.__sn.id, r)] = !0)
                        } else e.addedSet.add(t), e.droppedSet.delete(t)
                        ae(t, e.blockClass) ||
                            t.childNodes.forEach(function (t) {
                                return e.genAdds(t)
                            })
                    }
                })
        }
        return (
            (e.prototype.init = function (e) {
                var t = this
                ;[
                    'mutationCb',
                    'blockClass',
                    'blockSelector',
                    'maskTextClass',
                    'maskTextSelector',
                    'inlineStylesheet',
                    'maskInputOptions',
                    'maskTextFn',
                    'maskInputFn',
                    'recordCanvas',
                    'inlineImages',
                    'slimDOMOptions',
                    'doc',
                    'mirror',
                    'iframeManager',
                    'shadowDomManager',
                    'canvasManager',
                ].forEach(function (n) {
                    t[n] = e[n]
                })
            }),
            (e.prototype.freeze = function () {
                ;(this.frozen = !0), this.canvasManager.freeze()
            }),
            (e.prototype.unfreeze = function () {
                ;(this.frozen = !1), this.canvasManager.unfreeze(), this.emit()
            }),
            (e.prototype.isFrozen = function () {
                return this.frozen
            }),
            (e.prototype.lock = function () {
                ;(this.locked = !0), this.canvasManager.lock()
            }),
            (e.prototype.unlock = function () {
                ;(this.locked = !1), this.canvasManager.unlock(), this.emit()
            }),
            (e.prototype.reset = function () {
                this.shadowDomManager.reset(), this.canvasManager.reset()
            }),
            e
        )
    })()
    function me(e, t) {
        e.delete(t),
            t.childNodes.forEach(function (t) {
                return me(e, t)
            })
    }
    function _e(e, t, n) {
        var r = t.parentNode
        if (!r) return !1
        var i = n.getId(r)
        return (
            !!e.some(function (e) {
                return e.id === i
            }) || _e(e, r, n)
        )
    }
    function ye(e, t) {
        var n = t.parentNode
        return !!n && (!!e.has(n) || ye(e, n))
    }
    var be = ge,
        we = [],
        ke = 'undefined' != typeof CSSGroupingRule,
        Se = 'undefined' != typeof CSSMediaRule,
        xe = 'undefined' != typeof CSSSupportsRule,
        Ee = 'undefined' != typeof CSSConditionRule
    function Ce(e) {
        try {
            if ('composedPath' in e) {
                var t = e.composedPath()
                if (t.length) return t[0]
            } else if ('path' in e && e.path.length) return e.path[0]
            return e.target
        } catch (t) {
            return e.target
        }
    }
    function Ie(e, t) {
        var n,
            r,
            i = new be()
        we.push(i), i.init(e)
        var o = window.MutationObserver || window.__rrMutationObserver,
            a =
                null ===
                    (r =
                        null === (n = null === window || void 0 === window ? void 0 : window.Zone) || void 0 === n
                            ? void 0
                            : n.__symbol__) || void 0 === r
                    ? void 0
                    : r.call(n, 'MutationObserver')
        a && window[a] && (o = window[a])
        var s = new o(i.processMutations.bind(i))
        return (
            s.observe(t, {
                attributes: !0,
                attributeOldValue: !0,
                characterData: !0,
                characterDataOldValue: !0,
                childList: !0,
                subtree: !0,
            }),
            s
        )
    }
    function Oe(e) {
        var t = e.mouseInteractionCb,
            n = e.doc,
            r = e.mirror,
            i = e.blockClass,
            o = e.sampling
        if (!1 === o.mouseInteraction) return function () {}
        var a = !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction,
            s = []
        return (
            Object.keys(j)
                .filter(function (e) {
                    return Number.isNaN(Number(e)) && !e.endsWith('_Departed') && !1 !== a[e]
                })
                .forEach(function (e) {
                    var o = e.toLowerCase(),
                        a = (function (e) {
                            return function (n) {
                                var o = Ce(n)
                                if (!ae(o, i)) {
                                    var a = ce(n) ? n.changedTouches[0] : n
                                    if (a) {
                                        var s = r.getId(o),
                                            u = a.clientX,
                                            c = a.clientY
                                        t({ type: j[e], id: s, x: u, y: c })
                                    }
                                }
                            }
                        })(e)
                    s.push(K(o, a, n))
                }),
            function () {
                s.forEach(function (e) {
                    return e()
                })
            }
        )
    }
    function Te(e) {
        var t = e.scrollCb,
            n = e.doc,
            r = e.mirror,
            i = e.blockClass
        return K(
            'scroll',
            te(function (e) {
                var o = Ce(e)
                if (o && !ae(o, i)) {
                    var a = r.getId(o)
                    if (o === n) {
                        var s = n.scrollingElement || n.documentElement
                        t({ id: a, x: s.scrollLeft, y: s.scrollTop })
                    } else t({ id: a, x: o.scrollLeft, y: o.scrollTop })
                }
            }, e.sampling.scroll || 100),
            n
        )
    }
    function Fe(e, n) {
        var r = t({}, e)
        return n || delete r.userTriggered, r
    }
    var Me = ['INPUT', 'TEXTAREA', 'SELECT'],
        Pe = new WeakMap()
    function Re(e) {
        return (function (e, t) {
            if (
                (ke && e.parentRule instanceof CSSGroupingRule) ||
                (Se && e.parentRule instanceof CSSMediaRule) ||
                (xe && e.parentRule instanceof CSSSupportsRule) ||
                (Ee && e.parentRule instanceof CSSConditionRule)
            ) {
                var n = Array.from(e.parentRule.cssRules).indexOf(e)
                t.unshift(n)
            } else {
                n = Array.from(e.parentStyleSheet.cssRules).indexOf(e)
                t.unshift(n)
            }
            return t
        })(e, [])
    }
    function Ne(e, o) {
        var a, s
        void 0 === o && (o = {})
        var u = e.doc.defaultView
        if (!u) return function () {}
        !(function (e, t) {
            var n = e.mutationCb,
                o = e.mousemoveCb,
                a = e.mouseInteractionCb,
                s = e.scrollCb,
                u = e.viewportResizeCb,
                c = e.inputCb,
                l = e.mediaInteractionCb,
                d = e.styleSheetRuleCb,
                f = e.styleDeclarationCb,
                p = e.canvasMutationCb,
                h = e.fontCb
            ;(e.mutationCb = function () {
                for (var e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o]
                t.mutation && t.mutation.apply(t, i([], r(e), !1)), n.apply(void 0, i([], r(e), !1))
            }),
                (e.mousemoveCb = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
                    t.mousemove && t.mousemove.apply(t, i([], r(e), !1)), o.apply(void 0, i([], r(e), !1))
                }),
                (e.mouseInteractionCb = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
                    t.mouseInteraction && t.mouseInteraction.apply(t, i([], r(e), !1)), a.apply(void 0, i([], r(e), !1))
                }),
                (e.scrollCb = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
                    t.scroll && t.scroll.apply(t, i([], r(e), !1)), s.apply(void 0, i([], r(e), !1))
                }),
                (e.viewportResizeCb = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
                    t.viewportResize && t.viewportResize.apply(t, i([], r(e), !1)), u.apply(void 0, i([], r(e), !1))
                }),
                (e.inputCb = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
                    t.input && t.input.apply(t, i([], r(e), !1)), c.apply(void 0, i([], r(e), !1))
                }),
                (e.mediaInteractionCb = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
                    t.mediaInteaction && t.mediaInteaction.apply(t, i([], r(e), !1)), l.apply(void 0, i([], r(e), !1))
                }),
                (e.styleSheetRuleCb = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
                    t.styleSheetRule && t.styleSheetRule.apply(t, i([], r(e), !1)), d.apply(void 0, i([], r(e), !1))
                }),
                (e.styleDeclarationCb = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
                    t.styleDeclaration && t.styleDeclaration.apply(t, i([], r(e), !1)), f.apply(void 0, i([], r(e), !1))
                }),
                (e.canvasMutationCb = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
                    t.canvasMutation && t.canvasMutation.apply(t, i([], r(e), !1)), p.apply(void 0, i([], r(e), !1))
                }),
                (e.fontCb = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
                    t.font && t.font.apply(t, i([], r(e), !1)), h.apply(void 0, i([], r(e), !1))
                })
        })(e, o)
        var c = Ie(e, e.doc),
            l = (function (e) {
                var t = e.mousemoveCb,
                    n = e.sampling,
                    r = e.doc,
                    i = e.mirror
                if (!1 === n.mousemove) return function () {}
                var o,
                    a = 'number' == typeof n.mousemove ? n.mousemove : 50,
                    s = 'number' == typeof n.mousemoveCallback ? n.mousemoveCallback : 500,
                    u = [],
                    c = te(function (e) {
                        var n = Date.now() - o
                        t(
                            u.map(function (e) {
                                return (e.timeOffset -= n), e
                            }),
                            e
                        ),
                            (u = []),
                            (o = null)
                    }, s),
                    l = te(
                        function (e) {
                            var t = Ce(e),
                                n = ce(e) ? e.changedTouches[0] : e,
                                r = n.clientX,
                                a = n.clientY
                            o || (o = Date.now()),
                                u.push({ x: r, y: a, id: i.getId(t), timeOffset: Date.now() - o }),
                                c(
                                    'undefined' != typeof DragEvent && e instanceof DragEvent
                                        ? $.Drag
                                        : e instanceof MouseEvent
                                        ? $.MouseMove
                                        : $.TouchMove
                                )
                        },
                        a,
                        { trailing: !1 }
                    ),
                    d = [K('mousemove', l, r), K('touchmove', l, r), K('drag', l, r)]
                return function () {
                    d.forEach(function (e) {
                        return e()
                    })
                }
            })(e),
            d = Oe(e),
            f = Te(e),
            p = (function (e) {
                var t = e.viewportResizeCb,
                    n = -1,
                    r = -1
                return K(
                    'resize',
                    te(function () {
                        var e = ie(),
                            i = oe()
                        ;(n === e && r === i) || (t({ width: Number(i), height: Number(e) }), (n = e), (r = i))
                    }, 200),
                    window
                )
            })(e),
            h = (function (e) {
                var n = e.inputCb,
                    o = e.doc,
                    a = e.mirror,
                    s = e.blockClass,
                    u = e.ignoreClass,
                    c = e.maskInputOptions,
                    l = e.maskInputFn,
                    d = e.sampling,
                    f = e.userTriggeredOnInput
                function p(e) {
                    var t = Ce(e),
                        n = e.isTrusted
                    if (
                        (t && 'OPTION' === t.tagName && (t = t.parentElement),
                        t && t.tagName && !(Me.indexOf(t.tagName) < 0) && !ae(t, s))
                    ) {
                        var r = t.type
                        if (!t.classList.contains(u)) {
                            var i = t.value,
                                a = !1
                            'radio' === r || 'checkbox' === r
                                ? (a = t.checked)
                                : (c[t.tagName.toLowerCase()] || c[r]) &&
                                  (i = x({
                                      maskInputOptions: c,
                                      tagName: t.tagName,
                                      type: r,
                                      value: i,
                                      maskInputFn: l,
                                  })),
                                h(t, Fe({ text: i, isChecked: a, userTriggered: n }, f))
                            var d = t.name
                            'radio' === r &&
                                d &&
                                a &&
                                o.querySelectorAll('input[type="radio"][name="'.concat(d, '"]')).forEach(function (e) {
                                    e !== t && h(e, Fe({ text: e.value, isChecked: !a, userTriggered: !1 }, f))
                                })
                        }
                    }
                }
                function h(e, r) {
                    var i = Pe.get(e)
                    if (!i || i.text !== r.text || i.isChecked !== r.isChecked) {
                        Pe.set(e, r)
                        var o = a.getId(e)
                        n(t(t({}, r), { id: o }))
                    }
                }
                var v = ('last' === d.input ? ['change'] : ['input', 'change']).map(function (e) {
                        return K(e, p, o)
                    }),
                    g = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value'),
                    m = [
                        [HTMLInputElement.prototype, 'value'],
                        [HTMLInputElement.prototype, 'checked'],
                        [HTMLSelectElement.prototype, 'value'],
                        [HTMLTextAreaElement.prototype, 'value'],
                        [HTMLSelectElement.prototype, 'selectedIndex'],
                        [HTMLOptionElement.prototype, 'selected'],
                    ]
                return (
                    g &&
                        g.set &&
                        v.push.apply(
                            v,
                            i(
                                [],
                                r(
                                    m.map(function (e) {
                                        return ne(e[0], e[1], {
                                            set: function () {
                                                p({ target: this })
                                            },
                                        })
                                    })
                                ),
                                !1
                            )
                        ),
                    function () {
                        v.forEach(function (e) {
                            return e()
                        })
                    }
                )
            })(e),
            v = (function (e) {
                var t = e.mediaInteractionCb,
                    n = e.blockClass,
                    r = e.mirror,
                    i = e.sampling,
                    o = function (e) {
                        return te(function (i) {
                            var o = Ce(i)
                            if (o && !ae(o, n)) {
                                var a = o,
                                    s = a.currentTime,
                                    u = a.volume,
                                    c = a.muted
                                t({ type: e, id: r.getId(o), currentTime: s, volume: u, muted: c })
                            }
                        }, i.media || 500)
                    },
                    a = [K('play', o(0)), K('pause', o(1)), K('seeked', o(2)), K('volumechange', o(3))]
                return function () {
                    a.forEach(function (e) {
                        return e()
                    })
                }
            })(e),
            g = (function (e, t) {
                var n = e.styleSheetRuleCb,
                    o = e.mirror,
                    a = t.win,
                    s = a.CSSStyleSheet.prototype.insertRule
                a.CSSStyleSheet.prototype.insertRule = function (e, t) {
                    var r = o.getId(this.ownerNode)
                    return -1 !== r && n({ id: r, adds: [{ rule: e, index: t }] }), s.apply(this, arguments)
                }
                var u = a.CSSStyleSheet.prototype.deleteRule
                a.CSSStyleSheet.prototype.deleteRule = function (e) {
                    var t = o.getId(this.ownerNode)
                    return -1 !== t && n({ id: t, removes: [{ index: e }] }), u.apply(this, arguments)
                }
                var c = {}
                ke
                    ? (c.CSSGroupingRule = a.CSSGroupingRule)
                    : (Se && (c.CSSMediaRule = a.CSSMediaRule),
                      Ee && (c.CSSConditionRule = a.CSSConditionRule),
                      xe && (c.CSSSupportsRule = a.CSSSupportsRule))
                var l = {}
                return (
                    Object.entries(c).forEach(function (e) {
                        var t = r(e, 2),
                            a = t[0],
                            s = t[1]
                        ;(l[a] = { insertRule: s.prototype.insertRule, deleteRule: s.prototype.deleteRule }),
                            (s.prototype.insertRule = function (e, t) {
                                var s = o.getId(this.parentStyleSheet.ownerNode)
                                return (
                                    -1 !== s &&
                                        n({
                                            id: s,
                                            adds: [{ rule: e, index: i(i([], r(Re(this)), !1), [t || 0], !1) }],
                                        }),
                                    l[a].insertRule.apply(this, arguments)
                                )
                            }),
                            (s.prototype.deleteRule = function (e) {
                                var t = o.getId(this.parentStyleSheet.ownerNode)
                                return (
                                    -1 !== t && n({ id: t, removes: [{ index: i(i([], r(Re(this)), !1), [e], !1) }] }),
                                    l[a].deleteRule.apply(this, arguments)
                                )
                            })
                    }),
                    function () {
                        ;(a.CSSStyleSheet.prototype.insertRule = s),
                            (a.CSSStyleSheet.prototype.deleteRule = u),
                            Object.entries(c).forEach(function (e) {
                                var t = r(e, 2),
                                    n = t[0],
                                    i = t[1]
                                ;(i.prototype.insertRule = l[n].insertRule), (i.prototype.deleteRule = l[n].deleteRule)
                            })
                    }
                )
            })(e, { win: u }),
            m = (function (e, t) {
                var n = e.styleDeclarationCb,
                    r = e.mirror,
                    i = t.win,
                    o = i.CSSStyleDeclaration.prototype.setProperty
                i.CSSStyleDeclaration.prototype.setProperty = function (e, t, i) {
                    var a,
                        s,
                        u = r.getId(
                            null ===
                                (s = null === (a = this.parentRule) || void 0 === a ? void 0 : a.parentStyleSheet) ||
                                void 0 === s
                                ? void 0
                                : s.ownerNode
                        )
                    return (
                        -1 !== u &&
                            n({ id: u, set: { property: e, value: t, priority: i }, index: Re(this.parentRule) }),
                        o.apply(this, arguments)
                    )
                }
                var a = i.CSSStyleDeclaration.prototype.removeProperty
                return (
                    (i.CSSStyleDeclaration.prototype.removeProperty = function (e) {
                        var t,
                            i,
                            o = r.getId(
                                null ===
                                    (i =
                                        null === (t = this.parentRule) || void 0 === t ? void 0 : t.parentStyleSheet) ||
                                    void 0 === i
                                    ? void 0
                                    : i.ownerNode
                            )
                        return (
                            -1 !== o && n({ id: o, remove: { property: e }, index: Re(this.parentRule) }),
                            a.apply(this, arguments)
                        )
                    }),
                    function () {
                        ;(i.CSSStyleDeclaration.prototype.setProperty = o),
                            (i.CSSStyleDeclaration.prototype.removeProperty = a)
                    }
                )
            })(e, { win: u }),
            _ = e.collectFonts
                ? (function (e) {
                      var t = e.fontCb,
                          n = e.doc,
                          r = n.defaultView
                      if (!r) return function () {}
                      var i = [],
                          o = new WeakMap(),
                          a = r.FontFace
                      r.FontFace = function (e, t, n) {
                          var r = new a(e, t, n)
                          return (
                              o.set(r, {
                                  family: e,
                                  buffer: 'string' != typeof t,
                                  descriptors: n,
                                  fontSource: 'string' == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t))),
                              }),
                              r
                          )
                      }
                      var s = re(n.fonts, 'add', function (e) {
                          return function (n) {
                              return (
                                  setTimeout(function () {
                                      var e = o.get(n)
                                      e && (t(e), o.delete(n))
                                  }, 0),
                                  e.apply(this, [n])
                              )
                          }
                      })
                      return (
                          i.push(function () {
                              r.FontFace = a
                          }),
                          i.push(s),
                          function () {
                              i.forEach(function (e) {
                                  return e()
                              })
                          }
                      )
                  })(e)
                : function () {},
            y = []
        try {
            for (var b = n(e.plugins), w = b.next(); !w.done; w = b.next()) {
                var k = w.value
                y.push(k.observer(k.callback, u, k.options))
            }
        } catch (e) {
            a = { error: e }
        } finally {
            try {
                w && !w.done && (s = b.return) && s.call(b)
            } finally {
                if (a) throw a.error
            }
        }
        return function () {
            we.forEach(function (e) {
                return e.reset()
            }),
                c.disconnect(),
                l(),
                d(),
                f(),
                p(),
                h(),
                v(),
                g(),
                m(),
                _(),
                y.forEach(function (e) {
                    return e()
                })
        }
    }
    var De = (function () {
            function e(e) {
                ;(this.iframes = new WeakMap()), (this.mutationCb = e.mutationCb)
            }
            return (
                (e.prototype.addIframe = function (e) {
                    this.iframes.set(e, !0)
                }),
                (e.prototype.addLoadListener = function (e) {
                    this.loadListener = e
                }),
                (e.prototype.attachIframe = function (e, t) {
                    var n
                    this.mutationCb({
                        adds: [{ parentId: e.__sn.id, nextId: null, node: t }],
                        removes: [],
                        texts: [],
                        attributes: [],
                        isAttachIframe: !0,
                    }),
                        null === (n = this.loadListener) || void 0 === n || n.call(this, e)
                }),
                e
            )
        })(),
        Le = (function () {
            function e(e) {
                ;(this.restorePatches = []),
                    (this.mutationCb = e.mutationCb),
                    (this.scrollCb = e.scrollCb),
                    (this.bypassOptions = e.bypassOptions),
                    (this.mirror = e.mirror)
                var t = this
                this.restorePatches.push(
                    re(HTMLElement.prototype, 'attachShadow', function (e) {
                        return function () {
                            var n = e.apply(this, arguments)
                            return this.shadowRoot && t.addShadowRoot(this.shadowRoot, this.ownerDocument), n
                        }
                    })
                )
            }
            return (
                (e.prototype.addShadowRoot = function (e, n) {
                    Ie(
                        t(t({}, this.bypassOptions), {
                            doc: n,
                            mutationCb: this.mutationCb,
                            mirror: this.mirror,
                            shadowDomManager: this,
                        }),
                        e
                    ),
                        Te(t(t({}, this.bypassOptions), { scrollCb: this.scrollCb, doc: e, mirror: this.mirror }))
                }),
                (e.prototype.observeAttachShadow = function (e) {
                    if (e.contentWindow) {
                        var t = this
                        this.restorePatches.push(
                            re(e.contentWindow.HTMLElement.prototype, 'attachShadow', function (n) {
                                return function () {
                                    var r = n.apply(this, arguments)
                                    return this.shadowRoot && t.addShadowRoot(this.shadowRoot, e.contentDocument), r
                                }
                            })
                        )
                    }
                }),
                (e.prototype.reset = function () {
                    this.restorePatches.forEach(function (e) {
                        return e()
                    })
                }),
                e
            )
        })()
    for (
        var Ae = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            $e = 'undefined' == typeof Uint8Array ? [] : new Uint8Array(256),
            je = 0;
        je < Ae.length;
        je++
    )
        $e[Ae.charCodeAt(je)] = je
    var He = function (e) {
            var t,
                n = new Uint8Array(e),
                r = n.length,
                i = ''
            for (t = 0; t < r; t += 3)
                (i += Ae[n[t] >> 2]),
                    (i += Ae[((3 & n[t]) << 4) | (n[t + 1] >> 4)]),
                    (i += Ae[((15 & n[t + 1]) << 2) | (n[t + 2] >> 6)]),
                    (i += Ae[63 & n[t + 2]])
            return (
                r % 3 == 2
                    ? (i = i.substring(0, i.length - 1) + '=')
                    : r % 3 == 1 && (i = i.substring(0, i.length - 2) + '=='),
                i
            )
        },
        Be = new Map()
    var qe = function (e, t, n) {
        if (e && (We(e, t) || 'object' === s(e))) {
            var r = (function (e, t) {
                    var n = Be.get(e)
                    return n || ((n = new Map()), Be.set(e, n)), n.has(t) || n.set(t, []), n.get(t)
                })(n, e.constructor.name),
                i = r.indexOf(e)
            return -1 === i && ((i = r.length), r.push(e)), i
        }
    }
    function Ue(e, t, n) {
        return e instanceof Array
            ? e.map(function (e) {
                  return Ue(e, t, n)
              })
            : null === e
            ? e
            : e instanceof Float32Array ||
              e instanceof Float64Array ||
              e instanceof Int32Array ||
              e instanceof Uint32Array ||
              e instanceof Uint8Array ||
              e instanceof Uint16Array ||
              e instanceof Int16Array ||
              e instanceof Int8Array ||
              e instanceof Uint8ClampedArray
            ? { rr_type: e.constructor.name, args: [Object.values(e)] }
            : e instanceof ArrayBuffer
            ? { rr_type: e.constructor.name, base64: He(e) }
            : e instanceof DataView
            ? { rr_type: e.constructor.name, args: [Ue(e.buffer, t, n), e.byteOffset, e.byteLength] }
            : e instanceof HTMLImageElement
            ? { rr_type: e.constructor.name, src: e.src }
            : e instanceof ImageData
            ? { rr_type: e.constructor.name, args: [Ue(e.data, t, n), e.width, e.height] }
            : We(e, t) || 'object' === s(e)
            ? { rr_type: e.constructor.name, index: qe(e, t, n) }
            : e
    }
    var ze = function (e, t, n) {
            return i([], r(e), !1).map(function (e) {
                return Ue(e, t, n)
            })
        },
        We = function (e, t) {
            var n = [
                'WebGLActiveInfo',
                'WebGLBuffer',
                'WebGLFramebuffer',
                'WebGLProgram',
                'WebGLRenderbuffer',
                'WebGLShader',
                'WebGLShaderPrecisionFormat',
                'WebGLTexture',
                'WebGLUniformLocation',
                'WebGLVertexArrayObject',
                'WebGLVertexArrayObjectOES',
            ].filter(function (e) {
                return 'function' == typeof t[e]
            })
            return Boolean(
                n.find(function (n) {
                    return e instanceof t[n]
                })
            )
        }
    function Ve(e, t, o, a, s, u) {
        var c,
            l,
            d = [],
            f = Object.getOwnPropertyNames(e),
            p = function (n) {
                try {
                    if ('function' != typeof e[n]) return 'continue'
                    var c = re(e, n, function (c) {
                        return function () {
                            for (var l = [], d = 0; d < arguments.length; d++) l[d] = arguments[d]
                            var f = c.apply(this, l)
                            if ((qe(f, u, e), !ae(this.canvas, a))) {
                                s.getId(this.canvas)
                                var p = ze(i([], r(l), !1), u, e),
                                    h = { type: t, property: n, args: p }
                                o(this.canvas, h)
                            }
                            return f
                        }
                    })
                    d.push(c)
                } catch (r) {
                    var l = ne(e, n, {
                        set: function (e) {
                            o(this.canvas, { type: t, property: n, args: [e], setter: !0 })
                        },
                    })
                    d.push(l)
                }
            }
        try {
            for (var h = n(f), v = h.next(); !v.done; v = h.next()) {
                p(v.value)
            }
        } catch (e) {
            c = { error: e }
        } finally {
            try {
                v && !v.done && (l = h.return) && l.call(h)
            } finally {
                if (c) throw c.error
            }
        }
        return d
    }
    var Ge,
        Ye,
        Je = (function () {
            function e(e) {
                ;(this.pendingCanvasMutations = new Map()),
                    (this.rafStamps = { latestId: 0, invokeId: null }),
                    (this.frozen = !1),
                    (this.locked = !1),
                    (this.processMutation = function (e, t) {
                        ;(!(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) &&
                            this.rafStamps.invokeId) ||
                            (this.rafStamps.invokeId = this.rafStamps.latestId),
                            this.pendingCanvasMutations.has(e) || this.pendingCanvasMutations.set(e, []),
                            this.pendingCanvasMutations.get(e).push(t)
                    }),
                    (this.mutationCb = e.mutationCb),
                    (this.mirror = e.mirror),
                    !0 === e.recordCanvas && this.initCanvasMutationObserver(e.win, e.blockClass)
            }
            return (
                (e.prototype.reset = function () {
                    this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers()
                }),
                (e.prototype.freeze = function () {
                    this.frozen = !0
                }),
                (e.prototype.unfreeze = function () {
                    this.frozen = !1
                }),
                (e.prototype.lock = function () {
                    this.locked = !0
                }),
                (e.prototype.unlock = function () {
                    this.locked = !1
                }),
                (e.prototype.initCanvasMutationObserver = function (e, t) {
                    this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher()
                    var o = (function (e, t) {
                            var n = []
                            try {
                                var o = re(e.HTMLCanvasElement.prototype, 'getContext', function (e) {
                                    return function (n) {
                                        for (var o = [], a = 1; a < arguments.length; a++) o[a - 1] = arguments[a]
                                        return (
                                            ae(this, t) || '__context' in this || (this.__context = n),
                                            e.apply(this, i([n], r(o), !1))
                                        )
                                    }
                                })
                                n.push(o)
                            } catch (e) {
                                console.error('failed to patch HTMLCanvasElement.prototype.getContext')
                            }
                            return function () {
                                n.forEach(function (e) {
                                    return e()
                                })
                            }
                        })(e, t),
                        a = (function (e, t, o, a) {
                            var s,
                                u,
                                c = [],
                                l = Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype),
                                d = function (n) {
                                    try {
                                        if ('function' != typeof t.CanvasRenderingContext2D.prototype[n])
                                            return 'continue'
                                        var a = re(t.CanvasRenderingContext2D.prototype, n, function (t) {
                                            return function () {
                                                for (var a = this, s = [], u = 0; u < arguments.length; u++)
                                                    s[u] = arguments[u]
                                                return (
                                                    ae(this.canvas, o) ||
                                                        setTimeout(function () {
                                                            var t = i([], r(s), !1)
                                                            if (
                                                                'drawImage' === n &&
                                                                t[0] &&
                                                                t[0] instanceof HTMLCanvasElement
                                                            ) {
                                                                var o = t[0],
                                                                    u = o.getContext('2d'),
                                                                    c =
                                                                        null == u
                                                                            ? void 0
                                                                            : u.getImageData(0, 0, o.width, o.height),
                                                                    l = null == c ? void 0 : c.data
                                                                t[0] = JSON.stringify(l)
                                                            }
                                                            e(a.canvas, { type: H['2D'], property: n, args: t })
                                                        }, 0),
                                                    t.apply(this, s)
                                                )
                                            }
                                        })
                                        c.push(a)
                                    } catch (r) {
                                        var s = ne(t.CanvasRenderingContext2D.prototype, n, {
                                            set: function (t) {
                                                e(this.canvas, { type: H['2D'], property: n, args: [t], setter: !0 })
                                            },
                                        })
                                        c.push(s)
                                    }
                                }
                            try {
                                for (var f = n(l), p = f.next(); !p.done; p = f.next()) d(p.value)
                            } catch (e) {
                                s = { error: e }
                            } finally {
                                try {
                                    p && !p.done && (u = f.return) && u.call(f)
                                } finally {
                                    if (s) throw s.error
                                }
                            }
                            return function () {
                                c.forEach(function (e) {
                                    return e()
                                })
                            }
                        })(this.processMutation.bind(this), e, t, this.mirror),
                        s = (function (e, t, n, o) {
                            var a = []
                            return (
                                a.push.apply(
                                    a,
                                    i([], r(Ve(t.WebGLRenderingContext.prototype, H.WebGL, e, n, o, t)), !1)
                                ),
                                void 0 !== t.WebGL2RenderingContext &&
                                    a.push.apply(
                                        a,
                                        i([], r(Ve(t.WebGL2RenderingContext.prototype, H.WebGL2, e, n, o, t)), !1)
                                    ),
                                function () {
                                    a.forEach(function (e) {
                                        return e()
                                    })
                                }
                            )
                        })(this.processMutation.bind(this), e, t, this.mirror)
                    this.resetObservers = function () {
                        o(), a(), s()
                    }
                }),
                (e.prototype.startPendingCanvasMutationFlusher = function () {
                    var e = this
                    requestAnimationFrame(function () {
                        return e.flushPendingCanvasMutations()
                    })
                }),
                (e.prototype.startRAFTimestamping = function () {
                    var e = this
                    requestAnimationFrame(function t(n) {
                        ;(e.rafStamps.latestId = n), requestAnimationFrame(t)
                    })
                }),
                (e.prototype.flushPendingCanvasMutations = function () {
                    var e = this
                    this.pendingCanvasMutations.forEach(function (t, n) {
                        var r = e.mirror.getId(n)
                        e.flushPendingCanvasMutationFor(n, r)
                    }),
                        requestAnimationFrame(function () {
                            return e.flushPendingCanvasMutations()
                        })
                }),
                (e.prototype.flushPendingCanvasMutationFor = function (e, t) {
                    if (!this.frozen && !this.locked) {
                        var n = this.pendingCanvasMutations.get(e)
                        if (n && -1 !== t) {
                            var r = n.map(function (e) {
                                    e.type
                                    var t = (function (e, t) {
                                        var n = {}
                                        for (var r in e)
                                            Object.prototype.hasOwnProperty.call(e, r) &&
                                                t.indexOf(r) < 0 &&
                                                (n[r] = e[r])
                                        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                                            var i = 0
                                            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                                                t.indexOf(r[i]) < 0 &&
                                                    Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                                                    (n[r[i]] = e[r[i]])
                                        }
                                        return n
                                    })(e, ['type'])
                                    return t
                                }),
                                i = n[0].type
                            this.mutationCb({ id: t, type: i, commands: r }), this.pendingCanvasMutations.delete(e)
                        }
                    }
                }),
                e
            )
        })()
    function Qe(e) {
        return t(t({}, e), { timestamp: Date.now() })
    }
    var Xe = {
        map: {},
        getId: function (e) {
            return e && e.__sn ? e.__sn.id : -1
        },
        getNode: function (e) {
            return this.map[e] || null
        },
        removeNodeFromMap: function (e) {
            var t = this,
                n = e.__sn && e.__sn.id
            delete this.map[n],
                e.childNodes &&
                    e.childNodes.forEach(function (e) {
                        return t.removeNodeFromMap(e)
                    })
        },
        has: function (e) {
            return this.map.hasOwnProperty(e)
        },
        reset: function () {
            this.map = {}
        },
    }
    function Ke(e) {
        void 0 === e && (e = {})
        var i = e.emit,
            o = e.checkoutEveryNms,
            a = e.checkoutEveryNth,
            s = e.blockClass,
            u = void 0 === s ? 'rr-block' : s,
            c = e.blockSelector,
            l = void 0 === c ? null : c,
            d = e.ignoreClass,
            f = void 0 === d ? 'rr-ignore' : d,
            p = e.maskTextClass,
            h = void 0 === p ? 'rr-mask' : p,
            v = e.maskTextSelector,
            g = void 0 === v ? null : v,
            m = e.inlineStylesheet,
            _ = void 0 === m || m,
            y = e.maskAllInputs,
            b = e.maskInputOptions,
            w = e.slimDOMOptions,
            k = e.maskInputFn,
            S = e.maskTextFn,
            x = e.hooks,
            E = e.packFn,
            C = e.sampling,
            I = void 0 === C ? {} : C,
            O = e.mousemoveWait,
            T = e.recordCanvas,
            F = void 0 !== T && T,
            M = e.userTriggeredOnInput,
            P = void 0 !== M && M,
            R = e.collectFonts,
            N = void 0 !== R && R,
            D = e.inlineImages,
            L = void 0 !== D && D,
            j = e.plugins,
            H = e.keepIframeSrcFn,
            B =
                void 0 === H
                    ? function () {
                          return !1
                      }
                    : H
        if (!i) throw new Error('emit function is required')
        void 0 !== O && void 0 === I.mousemove && (I.mousemove = O)
        var q,
            U =
                !0 === y
                    ? {
                          color: !0,
                          date: !0,
                          'datetime-local': !0,
                          email: !0,
                          month: !0,
                          number: !0,
                          range: !0,
                          search: !0,
                          tel: !0,
                          text: !0,
                          time: !0,
                          url: !0,
                          week: !0,
                          textarea: !0,
                          select: !0,
                          password: !0,
                      }
                    : void 0 !== b
                    ? b
                    : { password: !0 },
            z =
                !0 === w || 'all' === w
                    ? {
                          script: !0,
                          comment: !0,
                          headFavicon: !0,
                          headWhitespace: !0,
                          headMetaSocial: !0,
                          headMetaRobots: !0,
                          headMetaHttpEquiv: !0,
                          headMetaVerification: !0,
                          headMetaAuthorship: 'all' === w,
                          headMetaDescKeywords: 'all' === w,
                      }
                    : w || {}
        !(function (e) {
            void 0 === e && (e = window),
                'NodeList' in e &&
                    !e.NodeList.prototype.forEach &&
                    (e.NodeList.prototype.forEach = Array.prototype.forEach),
                'DOMTokenList' in e &&
                    !e.DOMTokenList.prototype.forEach &&
                    (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
                Node.prototype.contains ||
                    (Node.prototype.contains = function (e) {
                        if (!(0 in arguments)) throw new TypeError('1 argument is required')
                        do {
                            if (this === e) return !0
                        } while ((e = e && e.parentNode))
                        return !1
                    })
        })()
        var W = 0
        Ge = function (e, t) {
            var r
            if (
                (!(null === (r = we[0]) || void 0 === r ? void 0 : r.isFrozen()) ||
                    e.type === A.FullSnapshot ||
                    (e.type === A.IncrementalSnapshot && e.data.source === $.Mutation) ||
                    we.forEach(function (e) {
                        return e.unfreeze()
                    }),
                i(
                    (function (e) {
                        var t, r
                        try {
                            for (var i = n(j || []), o = i.next(); !o.done; o = i.next()) {
                                var a = o.value
                                a.eventProcessor && (e = a.eventProcessor(e))
                            }
                        } catch (e) {
                            t = { error: e }
                        } finally {
                            try {
                                o && !o.done && (r = i.return) && r.call(i)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return E && (e = E(e)), e
                    })(e),
                    t
                ),
                e.type === A.FullSnapshot)
            )
                (q = e), (W = 0)
            else if (e.type === A.IncrementalSnapshot) {
                if (e.data.source === $.Mutation && e.data.isAttachIframe) return
                W++
                var s = a && W >= a,
                    u = o && e.timestamp - q.timestamp > o
                ;(s || u) && Ye(!0)
            }
        }
        var V = function (e) {
                Ge(Qe({ type: A.IncrementalSnapshot, data: t({ source: $.Mutation }, e) }))
            },
            G = function (e) {
                return Ge(Qe({ type: A.IncrementalSnapshot, data: t({ source: $.Scroll }, e) }))
            },
            Y = function (e) {
                return Ge(Qe({ type: A.IncrementalSnapshot, data: t({ source: $.CanvasMutation }, e) }))
            },
            J = new De({ mutationCb: V }),
            Q = new Je({ recordCanvas: F, mutationCb: Y, win: window, blockClass: u, mirror: Xe }),
            Z = new Le({
                mutationCb: V,
                scrollCb: G,
                bypassOptions: {
                    blockClass: u,
                    blockSelector: l,
                    maskTextClass: h,
                    maskTextSelector: g,
                    inlineStylesheet: _,
                    maskInputOptions: U,
                    maskTextFn: S,
                    maskInputFn: k,
                    recordCanvas: F,
                    inlineImages: L,
                    sampling: I,
                    slimDOMOptions: z,
                    iframeManager: J,
                    canvasManager: Q,
                },
                mirror: Xe,
            })
        Ye = function (e) {
            var t, n, i, o
            void 0 === e && (e = !1),
                Ge(Qe({ type: A.Meta, data: { href: window.location.href, width: oe(), height: ie() } }), e),
                we.forEach(function (e) {
                    return e.lock()
                })
            var a = r(
                    (function (e, t) {
                        var n = t || {},
                            r = n.blockClass,
                            i = void 0 === r ? 'rr-block' : r,
                            o = n.blockSelector,
                            a = void 0 === o ? null : o,
                            s = n.maskTextClass,
                            u = void 0 === s ? 'rr-mask' : s,
                            c = n.maskTextSelector,
                            l = void 0 === c ? null : c,
                            d = n.inlineStylesheet,
                            f = void 0 === d || d,
                            p = n.inlineImages,
                            h = void 0 !== p && p,
                            v = n.recordCanvas,
                            g = void 0 !== v && v,
                            m = n.maskAllInputs,
                            _ = void 0 !== m && m,
                            y = n.maskTextFn,
                            b = n.maskInputFn,
                            w = n.slimDOM,
                            k = void 0 !== w && w,
                            S = n.dataURLOptions,
                            x = n.preserveWhiteSpace,
                            E = n.onSerialize,
                            C = n.onIframeLoad,
                            I = n.iframeLoadTimeout,
                            O = n.keepIframeSrcFn,
                            T = {}
                        return [
                            X(e, {
                                doc: e,
                                map: T,
                                blockClass: i,
                                blockSelector: a,
                                maskTextClass: u,
                                maskTextSelector: l,
                                skipChild: !1,
                                inlineStylesheet: f,
                                maskInputOptions:
                                    !0 === _
                                        ? {
                                              color: !0,
                                              date: !0,
                                              'datetime-local': !0,
                                              email: !0,
                                              month: !0,
                                              number: !0,
                                              range: !0,
                                              search: !0,
                                              tel: !0,
                                              text: !0,
                                              time: !0,
                                              url: !0,
                                              week: !0,
                                              textarea: !0,
                                              select: !0,
                                              password: !0,
                                          }
                                        : !1 === _
                                        ? { password: !0 }
                                        : _,
                                maskTextFn: y,
                                maskInputFn: b,
                                slimDOMOptions:
                                    !0 === k || 'all' === k
                                        ? {
                                              script: !0,
                                              comment: !0,
                                              headFavicon: !0,
                                              headWhitespace: !0,
                                              headMetaDescKeywords: 'all' === k,
                                              headMetaSocial: !0,
                                              headMetaRobots: !0,
                                              headMetaHttpEquiv: !0,
                                              headMetaAuthorship: !0,
                                              headMetaVerification: !0,
                                          }
                                        : !1 === k
                                        ? {}
                                        : k,
                                dataURLOptions: S,
                                inlineImages: h,
                                recordCanvas: g,
                                preserveWhiteSpace: x,
                                onSerialize: E,
                                onIframeLoad: C,
                                iframeLoadTimeout: I,
                                keepIframeSrcFn:
                                    void 0 === O
                                        ? function () {
                                              return !1
                                          }
                                        : O,
                            }),
                            T,
                        ]
                    })(document, {
                        blockClass: u,
                        blockSelector: l,
                        maskTextClass: h,
                        maskTextSelector: g,
                        inlineStylesheet: _,
                        maskAllInputs: U,
                        maskTextFn: S,
                        slimDOM: z,
                        recordCanvas: F,
                        inlineImages: L,
                        onSerialize: function (e) {
                            le(e) && J.addIframe(e), de(e) && Z.addShadowRoot(e.shadowRoot, document)
                        },
                        onIframeLoad: function (e, t) {
                            J.attachIframe(e, t), Z.observeAttachShadow(e)
                        },
                        keepIframeSrcFn: B,
                    }),
                    2
                ),
                s = a[0],
                c = a[1]
            if (!s) return console.warn('Failed to snapshot the document')
            ;(Xe.map = c),
                Ge(
                    Qe({
                        type: A.FullSnapshot,
                        data: {
                            node: s,
                            initialOffset: {
                                left:
                                    void 0 !== window.pageXOffset
                                        ? window.pageXOffset
                                        : (null === document || void 0 === document
                                              ? void 0
                                              : document.documentElement.scrollLeft) ||
                                          (null ===
                                              (n =
                                                  null ===
                                                      (t =
                                                          null === document || void 0 === document
                                                              ? void 0
                                                              : document.body) || void 0 === t
                                                      ? void 0
                                                      : t.parentElement) || void 0 === n
                                              ? void 0
                                              : n.scrollLeft) ||
                                          (null === document || void 0 === document
                                              ? void 0
                                              : document.body.scrollLeft) ||
                                          0,
                                top:
                                    void 0 !== window.pageYOffset
                                        ? window.pageYOffset
                                        : (null === document || void 0 === document
                                              ? void 0
                                              : document.documentElement.scrollTop) ||
                                          (null ===
                                              (o =
                                                  null ===
                                                      (i =
                                                          null === document || void 0 === document
                                                              ? void 0
                                                              : document.body) || void 0 === i
                                                      ? void 0
                                                      : i.parentElement) || void 0 === o
                                              ? void 0
                                              : o.scrollTop) ||
                                          (null === document || void 0 === document
                                              ? void 0
                                              : document.body.scrollTop) ||
                                          0,
                            },
                        },
                    })
                ),
                we.forEach(function (e) {
                    return e.unlock()
                })
        }
        try {
            var ee = []
            ee.push(
                K('DOMContentLoaded', function () {
                    Ge(Qe({ type: A.DomContentLoaded, data: {} }))
                })
            )
            var te = function (e) {
                var n
                return Ne(
                    {
                        mutationCb: V,
                        mousemoveCb: function (e, t) {
                            return Ge(Qe({ type: A.IncrementalSnapshot, data: { source: t, positions: e } }))
                        },
                        mouseInteractionCb: function (e) {
                            return Ge(Qe({ type: A.IncrementalSnapshot, data: t({ source: $.MouseInteraction }, e) }))
                        },
                        scrollCb: G,
                        viewportResizeCb: function (e) {
                            return Ge(Qe({ type: A.IncrementalSnapshot, data: t({ source: $.ViewportResize }, e) }))
                        },
                        inputCb: function (e) {
                            return Ge(Qe({ type: A.IncrementalSnapshot, data: t({ source: $.Input }, e) }))
                        },
                        mediaInteractionCb: function (e) {
                            return Ge(Qe({ type: A.IncrementalSnapshot, data: t({ source: $.MediaInteraction }, e) }))
                        },
                        styleSheetRuleCb: function (e) {
                            return Ge(Qe({ type: A.IncrementalSnapshot, data: t({ source: $.StyleSheetRule }, e) }))
                        },
                        styleDeclarationCb: function (e) {
                            return Ge(Qe({ type: A.IncrementalSnapshot, data: t({ source: $.StyleDeclaration }, e) }))
                        },
                        canvasMutationCb: Y,
                        fontCb: function (e) {
                            return Ge(Qe({ type: A.IncrementalSnapshot, data: t({ source: $.Font }, e) }))
                        },
                        blockClass: u,
                        ignoreClass: f,
                        maskTextClass: h,
                        maskTextSelector: g,
                        maskInputOptions: U,
                        inlineStylesheet: _,
                        sampling: I,
                        recordCanvas: F,
                        inlineImages: L,
                        userTriggeredOnInput: P,
                        collectFonts: N,
                        doc: e,
                        maskInputFn: k,
                        maskTextFn: S,
                        blockSelector: l,
                        slimDOMOptions: z,
                        mirror: Xe,
                        iframeManager: J,
                        shadowDomManager: Z,
                        canvasManager: Q,
                        plugins:
                            (null ===
                                (n =
                                    null == j
                                        ? void 0
                                        : j.filter(function (e) {
                                              return e.observer
                                          })) || void 0 === n
                                ? void 0
                                : n.map(function (e) {
                                      return {
                                          observer: e.observer,
                                          options: e.options,
                                          callback: function (t) {
                                              return Ge(Qe({ type: A.Plugin, data: { plugin: e.name, payload: t } }))
                                          },
                                      }
                                  })) || [],
                    },
                    x
                )
            }
            J.addLoadListener(function (e) {
                ee.push(te(e.contentDocument))
            })
            var ne = function () {
                Ye(), ee.push(te(document))
            }
            return (
                'interactive' === document.readyState || 'complete' === document.readyState
                    ? ne()
                    : ee.push(
                          K(
                              'load',
                              function () {
                                  Ge(Qe({ type: A.Load, data: {} })), ne()
                              },
                              window
                          )
                      ),
                function () {
                    ee.forEach(function (e) {
                        return e()
                    })
                }
            )
        } catch (e) {
            console.warn(e)
        }
    }
    ;(Ke.addCustomEvent = function (e, t) {
        if (!Ge) throw new Error('please add custom event after start recording')
        Ge(Qe({ type: A.Custom, data: { tag: e, payload: t } }))
    }),
        (Ke.freezePage = function () {
            we.forEach(function (e) {
                return e.freeze()
            })
        }),
        (Ke.takeFullSnapshot = function (e) {
            if (!Ye) throw new Error('please take full snapshot after start recording')
            Ye(e)
        }),
        (Ke.mirror = Xe)
    var Ze = (function () {
            function e(e) {
                ;(this.fileName = e.fileName || ''),
                    (this.functionName = e.functionName || ''),
                    (this.lineNumber = e.lineNumber),
                    (this.columnNumber = e.columnNumber)
            }
            return (
                (e.prototype.toString = function () {
                    var e = this.lineNumber || '',
                        t = this.columnNumber || ''
                    return this.functionName
                        ? this.functionName + ' (' + this.fileName + ':' + e + ':' + t + ')'
                        : this.fileName + ':' + e + ':' + t
                }),
                e
            )
        })(),
        et = /(^|@)\S+:\d+/,
        tt = /^\s*at .*(\S+:\d+|\(native\))/m,
        nt = /^(eval@)?(\[native code])?$/,
        rt = {
            parse: function (e) {
                if (!e) return []
                if (void 0 !== e.stacktrace || void 0 !== e['opera#sourceloc']) return this.parseOpera(e)
                if (e.stack && e.stack.match(tt)) return this.parseV8OrIE(e)
                if (e.stack) return this.parseFFOrSafari(e)
                throw new Error('Cannot parse given Error object')
            },
            extractLocation: function (e) {
                if (-1 === e.indexOf(':')) return [e]
                var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ''))
                if (!t) throw new Error('Cannot parse given url: '.concat(e))
                return [t[1], t[2] || void 0, t[3] || void 0]
            },
            parseV8OrIE: function (e) {
                return e.stack
                    .split('\n')
                    .filter(function (e) {
                        return !!e.match(tt)
                    }, this)
                    .map(function (e) {
                        e.indexOf('(eval ') > -1 &&
                            (e = e.replace(/eval code/g, 'eval').replace(/(\(eval at [^()]*)|(\),.*$)/g, ''))
                        var t = e.replace(/^\s+/, '').replace(/\(eval code/g, '('),
                            n = t.match(/ (\((.+):(\d+):(\d+)\)$)/),
                            r = (t = n ? t.replace(n[0], '') : t).split(/\s+/).slice(1),
                            i = this.extractLocation(n ? n[1] : r.pop()),
                            o = r.join(' ') || void 0,
                            a = ['eval', '<anonymous>'].indexOf(i[0]) > -1 ? void 0 : i[0]
                        return new Ze({ functionName: o, fileName: a, lineNumber: i[1], columnNumber: i[2] })
                    }, this)
            },
            parseFFOrSafari: function (e) {
                return e.stack
                    .split('\n')
                    .filter(function (e) {
                        return !e.match(nt)
                    }, this)
                    .map(function (e) {
                        if (
                            (e.indexOf(' > eval') > -1 &&
                                (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ':$1')),
                            -1 === e.indexOf('@') && -1 === e.indexOf(':'))
                        )
                            return new Ze({ functionName: e })
                        var t = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                            n = e.match(t),
                            r = n && n[1] ? n[1] : void 0,
                            i = this.extractLocation(e.replace(t, ''))
                        return new Ze({ functionName: r, fileName: i[0], lineNumber: i[1], columnNumber: i[2] })
                    }, this)
            },
            parseOpera: function (e) {
                return !e.stacktrace ||
                    (e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length)
                    ? this.parseOpera9(e)
                    : e.stack
                    ? this.parseOpera11(e)
                    : this.parseOpera10(e)
            },
            parseOpera9: function (e) {
                for (
                    var t = /Line (\d+).*script (?:in )?(\S+)/i, n = e.message.split('\n'), r = [], i = 2, o = n.length;
                    i < o;
                    i += 2
                ) {
                    var a = t.exec(n[i])
                    a && r.push(new Ze({ fileName: a[2], lineNumber: parseFloat(a[1]) }))
                }
                return r
            },
            parseOpera10: function (e) {
                for (
                    var t = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                        n = e.stacktrace.split('\n'),
                        r = [],
                        i = 0,
                        o = n.length;
                    i < o;
                    i += 2
                ) {
                    var a = t.exec(n[i])
                    a && r.push(new Ze({ functionName: a[3] || void 0, fileName: a[2], lineNumber: parseFloat(a[1]) }))
                }
                return r
            },
            parseOpera11: function (e) {
                return e.stack
                    .split('\n')
                    .filter(function (e) {
                        return !!e.match(et) && !e.match(/^Error created at/)
                    }, this)
                    .map(function (e) {
                        var t = e.split('@'),
                            n = this.extractLocation(t.pop()),
                            r =
                                (t.shift() || '')
                                    .replace(/<anonymous function(: (\w+))?>/, '$2')
                                    .replace(/\([^)]*\)/g, '') || void 0
                        return new Ze({ functionName: r, fileName: n[0], lineNumber: n[1], columnNumber: n[2] })
                    }, this)
            },
        }
    function it(e) {
        if (!e || !e.outerHTML) return ''
        for (var t = ''; e.parentElement; ) {
            var n = e.localName
            if (!n) break
            n = n.toLowerCase()
            var r = e.parentElement,
                i = []
            if (r.children && r.children.length > 0)
                for (var o = 0; o < r.children.length; o++) {
                    var a = r.children[o]
                    a.localName && a.localName.toLowerCase && a.localName.toLowerCase() === n && i.push(a)
                }
            i.length > 1 && (n += ':eq(' + i.indexOf(e) + ')'), (t = n + (t ? '>' + t : '')), (e = r)
        }
        return t
    }
    function ot(e) {
        return '[object Object]' === Object.prototype.toString.call(e)
    }
    function at(e, t) {
        var r, i
        if (0 === t) return !0
        var o = Object.keys(e)
        try {
            for (var a = n(o), s = a.next(); !s.done; s = a.next()) {
                var u = s.value
                if (ot(e[u]) && at(e[u], t - 1)) return !0
            }
        } catch (e) {
            r = { error: e }
        } finally {
            try {
                s && !s.done && (i = a.return) && i.call(a)
            } finally {
                if (r) throw r.error
            }
        }
        return !1
    }
    function st(e, t) {
        var n = { numOfKeysLimit: 50, depthOfLimit: 4 }
        Object.assign(n, t)
        var r = [],
            i = []
        return JSON.stringify(e, function (e, t) {
            if (r.length > 0) {
                var o = r.indexOf(this)
                ~o ? r.splice(o + 1) : r.push(this),
                    ~o ? i.splice(o, 1 / 0, e) : i.push(e),
                    ~r.indexOf(t) &&
                        (t = r[0] === t ? '[Circular ~]' : '[Circular ~.' + i.slice(0, r.indexOf(t)).join('.') + ']')
            } else r.push(t)
            if (null == t) return t
            if (
                (function (e) {
                    if (ot(e) && Object.keys(e).length > n.numOfKeysLimit) return !0
                    if ('function' == typeof e) return !0
                    if (ot(e) && at(e, n.depthOfLimit)) return !0
                    return !1
                })(t)
            )
                return (function (e) {
                    var t = e.toString()
                    n.stringLengthLimit &&
                        t.length > n.stringLengthLimit &&
                        (t = ''.concat(t.slice(0, n.stringLengthLimit), '...'))
                    return t
                })(t)
            if (t instanceof Event) {
                var a = {}
                for (var s in t) {
                    var u = t[s]
                    Array.isArray(u) ? (a[s] = it(u.length ? u[0] : null)) : (a[s] = u)
                }
                return a
            }
            return t instanceof Node
                ? t instanceof HTMLElement
                    ? t
                        ? t.outerHTML
                        : ''
                    : t.nodeName
                : t instanceof Error
                ? t.stack
                    ? t.stack + '\nEnd of stack for Error object'
                    : t.name + ': ' + t.message
                : t
        })
    }
    var ut = {
        level: [
            'assert',
            'clear',
            'count',
            'countReset',
            'debug',
            'dir',
            'dirxml',
            'error',
            'group',
            'groupCollapsed',
            'groupEnd',
            'info',
            'log',
            'table',
            'time',
            'timeEnd',
            'timeLog',
            'trace',
            'warn',
        ],
        lengthThreshold: 1e3,
        logger: 'console',
    }
    function ct(e, t, o) {
        var a,
            s,
            u,
            c = o.logger
        if (!c) return function () {}
        u = 'string' == typeof c ? t[c] : c
        var l = 0,
            d = []
        if (o.level.includes('error') && window) {
            var f = function (t) {
                var n = t.message,
                    r = t.error,
                    i = rt.parse(r).map(function (e) {
                        return e.toString()
                    }),
                    a = [st(n, o.stringifyOptions)]
                e({ level: 'error', trace: i, payload: a })
            }
            window.addEventListener('error', f),
                d.push(function () {
                    window && window.removeEventListener('error', f)
                })
        }
        try {
            for (var p = n(o.level), h = p.next(); !h.done; h = p.next()) {
                var v = h.value
                d.push(g(u, v))
            }
        } catch (e) {
            a = { error: e }
        } finally {
            try {
                h && !h.done && (s = p.return) && s.call(p)
            } finally {
                if (a) throw a.error
            }
        }
        return function () {
            d.forEach(function (e) {
                return e()
            })
        }
        function g(t, n) {
            var a = this
            return t[n]
                ? re(t, n, function (t) {
                      return function () {
                          for (var s = [], u = 0; u < arguments.length; u++) s[u] = arguments[u]
                          t.apply(a, s)
                          try {
                              var c = rt
                                      .parse(new Error())
                                      .map(function (e) {
                                          return e.toString()
                                      })
                                      .splice(1),
                                  d = s.map(function (e) {
                                      return st(e, o.stringifyOptions)
                                  })
                              ++l < o.lengthThreshold
                                  ? e({ level: n, trace: c, payload: d })
                                  : l === o.lengthThreshold &&
                                    e({
                                        level: 'warn',
                                        trace: [],
                                        payload: [st('The number of log records reached the threshold.')],
                                    })
                          } catch (e) {
                              t.apply(void 0, i(['rrweb logger error:', e], r(s), !1))
                          }
                      }
                  })
                : function () {}
        }
    }
    var lt = 'undefined' != typeof window ? window : {}
    ;(lt.rrweb = { record: Ke, version: 'v1', rrwebVersion: '1.1.3' }),
        (lt.rrwebConsoleRecord = {
            getRecordConsolePlugin: function (e) {
                return { name: 'rrweb/console@1', observer: ct, options: e ? Object.assign({}, ut, e) : ut }
            },
        })
    var dt = { DEBUG: !1, LIB_VERSION: '1.82.3' },
        ft = Array.prototype,
        pt = Object.prototype,
        ht = pt.toString,
        vt = pt.hasOwnProperty,
        gt = 'undefined' != typeof window ? window : {},
        mt = gt.navigator || { userAgent: '' },
        _t = gt.document || {},
        yt = mt.userAgent,
        bt = ['localhost', '127.0.0.1'],
        wt = ft.forEach,
        kt = ft.indexOf,
        St = Array.isArray,
        xt = {},
        Et = {
            log: function () {
                if (dt.DEBUG && !Dt(window.console) && window.console) {
                    for (
                        var e =
                                ('__rrweb_original__' in window.console.log)
                                    ? window.console.log.__rrweb_original__
                                    : window.console.log,
                            t = arguments.length,
                            n = new Array(t),
                            r = 0;
                        r < t;
                        r++
                    )
                        n[r] = arguments[r]
                    try {
                        e.apply(window.console, n)
                    } catch (t) {
                        It(n, function (t) {
                            e(t)
                        })
                    }
                }
            },
            error: function () {
                if (dt.DEBUG && !Dt(window.console) && window.console) {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                    var r = ['PostHog error:'].concat(t),
                        i =
                            '__rrweb_original__' in window.console.error
                                ? window.console.error.__rrweb_original__
                                : window.console.error
                    try {
                        i.apply(window.console, r)
                    } catch (e) {
                        It(r, function (e) {
                            i(e)
                        })
                    }
                }
            },
            critical: function () {
                if (!Dt(window.console) && window.console) {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                    var r = ['PostHog error:'].concat(t),
                        i =
                            '__rrweb_original__' in window.console.error
                                ? window.console.error.__rrweb_original__
                                : window.console.error
                    try {
                        i.apply(window.console, r)
                    } catch (e) {
                        It(r, function (e) {
                            i(e)
                        })
                    }
                }
            },
            unintializedWarning: function (e) {
                dt.DEBUG &&
                    !Dt(window.console) &&
                    window.console &&
                    Et.error('[PostHog] You must initialize PostHog before calling '.concat(e))
            },
        },
        Ct = function (e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
        }
    function It(e, t, n) {
        if (Array.isArray(e))
            if (wt && e.forEach === wt) e.forEach(t, n)
            else if ('length' in e && e.length === +e.length)
                for (var r = 0, i = e.length; r < i; r++) if (r in e && t.call(n, e[r], r) === xt) return
    }
    function Ot(e, t, n) {
        if (null != e) {
            if (Array.isArray(e)) return It(e, t, n)
            for (var r in e) if (vt.call(e, r) && t.call(n, e[r], r) === xt) return
        }
    }
    var Tt = function (e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]
            return (
                It(n, function (t) {
                    for (var n in t) void 0 !== t[n] && (e[n] = t[n])
                }),
                e
            )
        },
        Ft =
            St ||
            function (e) {
                return '[object Array]' === ht.call(e)
            },
        Mt = function (e) {
            try {
                return /^\s*\bfunction\b/.test(e)
            } catch (e) {
                return !1
            }
        }
    function Pt(e, t) {
        return -1 !== e.indexOf(t)
    }
    var Rt = function (e) {
            return e === Object(e) && !Ft(e)
        },
        Nt = function (e) {
            if (Rt(e)) {
                for (var t in e) if (vt.call(e, t)) return !1
                return !0
            }
            return !1
        },
        Dt = function (e) {
            return void 0 === e
        },
        Lt = function (e) {
            return '[object String]' == ht.call(e)
        },
        At = function (e) {
            return '[object Number]' == ht.call(e)
        },
        $t = function (e, t) {
            return (
                !!(function (e) {
                    try {
                        new RegExp(e)
                    } catch (e) {
                        return !1
                    }
                    return !0
                })(t) && new RegExp(t).test(e)
            )
        },
        jt = function () {
            return (
                (Date.now =
                    Date.now ||
                    function () {
                        return +new Date()
                    }),
                Date.now()
            )
        },
        Ht = function (e) {
            return function () {
                try {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
                    return e.apply(this, n)
                } catch (e) {
                    Et.critical('Implementation error. Please turn on debug and contact support@posthog.com.'),
                        Et.critical(e)
                }
            }
        },
        Bt = function (e) {
            var t = {}
            return (
                Ot(e, function (e, n) {
                    Lt(e) && e.length > 0 && (t[n] = e)
                }),
                t
            )
        }
    var qt = ['$performance_raw']
    function Ut(e, t) {
        return (
            (n = e),
            (r = function (e, n) {
                return n && qt.indexOf(n) > -1 ? e : 'string' == typeof e && null !== t ? e.slice(0, t) : e
            }),
            (i = new Set()),
            (function e(t, n) {
                return t !== Object(t)
                    ? r
                        ? r(t, n)
                        : t
                    : i.has(t)
                    ? void 0
                    : (i.add(t),
                      Ft(t)
                          ? ((o = []),
                            It(t, function (t) {
                                o.push(e(t))
                            }))
                          : ((o = {}),
                            Ot(t, function (t, n) {
                                i.has(t) || (o[n] = e(t, n))
                            })),
                      o)
                var o
            })(n)
        )
        var n, r, i
    }
    function zt(e) {
        var t,
            n,
            r,
            i,
            o,
            a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            s = 0,
            u = 0,
            c = '',
            l = []
        if (!e) return e
        e = Wt(e)
        do {
            ;(t = ((o = (e.charCodeAt(s++) << 16) | (e.charCodeAt(s++) << 8) | e.charCodeAt(s++)) >> 18) & 63),
                (n = (o >> 12) & 63),
                (r = (o >> 6) & 63),
                (i = 63 & o),
                (l[u++] = a.charAt(t) + a.charAt(n) + a.charAt(r) + a.charAt(i))
        } while (s < e.length)
        switch (((c = l.join('')), e.length % 3)) {
            case 1:
                c = c.slice(0, -2) + '=='
                break
            case 2:
                c = c.slice(0, -1) + '='
        }
        return c
    }
    var Wt = function (e) {
            var t,
                n,
                r,
                i,
                o = ''
            for (t = n = 0, r = (e = (e + '').replace(/\r\n/g, '\n').replace(/\r/g, '\n')).length, i = 0; i < r; i++) {
                var a = e.charCodeAt(i),
                    s = null
                a < 128
                    ? n++
                    : (s =
                          a > 127 && a < 2048
                              ? String.fromCharCode((a >> 6) | 192, (63 & a) | 128)
                              : String.fromCharCode((a >> 12) | 224, ((a >> 6) & 63) | 128, (63 & a) | 128)),
                    null !== s && (n > t && (o += e.substring(t, n)), (o += s), (t = n = i + 1))
            }
            return n > t && (o += e.substring(t, e.length)), o
        },
        Vt = [
            'ahrefsbot',
            'applebot',
            'baiduspider',
            'bingbot',
            'bingpreview',
            'bot.htm',
            'bot.php',
            'crawler',
            'duckduckbot',
            'facebookexternal',
            'facebookcatalog',
            'gptbot',
            'hubspot',
            'linkedinbot',
            'mj12bot',
            'petalbot',
            'pinterest',
            'prerender',
            'rogerbot',
            'screaming frog',
            'semrushbot',
            'sitebulb',
            'twitterbot',
            'yahoo! slurp',
            'yandexbot',
            'adsbot-google',
            'apis-google',
            'duplexweb-google',
            'feedfetcher-google',
            'google favicon',
            'google web preview',
            'google-read-aloud',
            'googlebot',
            'googleweblight',
            'mediapartners-google',
            'storebot-google',
        ],
        Gt = function (e, t) {
            return Vt.concat(t).some(function (t) {
                return e.includes ? e.includes(t) : -1 !== e.indexOf(t)
            })
        },
        Yt = function (e, t) {
            var n = t.replace(/[[]/, '\\[').replace(/[\]]/, '\\]'),
                r = new RegExp('[\\?&]' + n + '=([^&#]*)').exec(e)
            if (null === r || (r && 'string' != typeof r[1] && r[1].length)) return ''
            var i = r[1]
            try {
                i = decodeURIComponent(i)
            } catch (e) {
                Et.error('Skipping decoding for malformed query param: ' + i)
            }
            return i.replace(/\+/g, ' ')
        },
        Jt = function (e, t) {
            var n = e.match(new RegExp(t + '=([^&]*)'))
            return n ? n[1] : null
        },
        Qt = (function () {
            function e(t) {
                return t && ((t.preventDefault = e.preventDefault), (t.stopPropagation = e.stopPropagation)), t
            }
            return (
                (e.preventDefault = function () {
                    this.returnValue = !1
                }),
                (e.stopPropagation = function () {
                    this.cancelBubble = !0
                }),
                function (t, n, r, i, o) {
                    if (t)
                        if (t.addEventListener && !i) t.addEventListener(n, r, !!o)
                        else {
                            var a = 'on' + n,
                                s = t[a]
                            t[a] = (function (t, n, r) {
                                return function (i) {
                                    if ((i = i || e(window.event))) {
                                        var o,
                                            a = !0
                                        Mt(r) && (o = r(i))
                                        var s = n.call(t, i)
                                        return (!1 !== o && !1 !== s) || (a = !1), a
                                    }
                                }
                            })(t, r, s)
                        }
                    else Et.error('No valid element provided to register_event')
                }
            )
        })()
    function Xt(e, t) {
        var n = function () {
            var n = _t.createElement('script')
            ;(n.type = 'text/javascript'),
                (n.src = e),
                (n.onload = function (e) {
                    return t(void 0, e)
                }),
                (n.onerror = function (e) {
                    return t(e)
                })
            var r,
                i = _t.querySelectorAll('body > script')
            i.length > 0
                ? null === (r = i[0].parentNode) || void 0 === r || r.insertBefore(n, i[0])
                : _t.body.appendChild(n)
        }
        _t.body ? n() : _t.addEventListener('DOMContentLoaded', n)
    }
    var Kt = {
        campaignParams: function (e) {
            var t = [
                    'utm_source',
                    'utm_medium',
                    'utm_campaign',
                    'utm_content',
                    'utm_term',
                    'gclid',
                    'fbclid',
                    'msclkid',
                ].concat(e || []),
                n = {}
            return (
                Ot(t, function (e) {
                    var t = Yt(_t.URL, e)
                    t.length && (n[e] = t)
                }),
                n
            )
        },
        searchEngine: function () {
            var e = _t.referrer
            return e
                ? 0 === e.search('https?://(.*)google.([^/?]*)')
                    ? 'google'
                    : 0 === e.search('https?://(.*)bing.com')
                    ? 'bing'
                    : 0 === e.search('https?://(.*)yahoo.com')
                    ? 'yahoo'
                    : 0 === e.search('https?://(.*)duckduckgo.com')
                    ? 'duckduckgo'
                    : null
                : null
        },
        searchInfo: function () {
            var e = Kt.searchEngine(),
                t = 'yahoo' != e ? 'q' : 'p',
                n = {}
            if (null !== e) {
                n.$search_engine = e
                var r = Yt(_t.referrer, t)
                r.length && (n.ph_keyword = r)
            }
            return n
        },
        browser: function (e, t, n) {
            return (
                (t = t || ''),
                n || Pt(e, ' OPR/')
                    ? Pt(e, 'Mini')
                        ? 'Opera Mini'
                        : 'Opera'
                    : /(BlackBerry|PlayBook|BB10)/i.test(e)
                    ? 'BlackBerry'
                    : Pt(e, 'IEMobile') || Pt(e, 'WPDesktop')
                    ? 'Internet Explorer Mobile'
                    : Pt(e, 'SamsungBrowser/')
                    ? 'Samsung Internet'
                    : Pt(e, 'Edge') || Pt(e, 'Edg/')
                    ? 'Microsoft Edge'
                    : Pt(e, 'FBIOS')
                    ? 'Facebook Mobile'
                    : Pt(e, 'Chrome')
                    ? 'Chrome'
                    : Pt(e, 'CriOS')
                    ? 'Chrome iOS'
                    : Pt(e, 'UCWEB') || Pt(e, 'UCBrowser')
                    ? 'UC Browser'
                    : Pt(e, 'FxiOS')
                    ? 'Firefox iOS'
                    : Pt(t, 'Apple')
                    ? Pt(e, 'Mobile')
                        ? 'Mobile Safari'
                        : 'Safari'
                    : Pt(e, 'Android')
                    ? 'Android Mobile'
                    : Pt(e, 'Konqueror')
                    ? 'Konqueror'
                    : Pt(e, 'Firefox')
                    ? 'Firefox'
                    : Pt(e, 'MSIE') || Pt(e, 'Trident/')
                    ? 'Internet Explorer'
                    : Pt(e, 'Gecko')
                    ? 'Mozilla'
                    : ''
            )
        },
        browserVersion: function (e, t, n) {
            var r = {
                'Internet Explorer Mobile': /rv:(\d+(\.\d+)?)/,
                'Microsoft Edge': /Edge?\/(\d+(\.\d+)?)/,
                Chrome: /Chrome\/(\d+(\.\d+)?)/,
                'Chrome iOS': /CriOS\/(\d+(\.\d+)?)/,
                'UC Browser': /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
                Safari: /Version\/(\d+(\.\d+)?)/,
                'Mobile Safari': /Version\/(\d+(\.\d+)?)/,
                Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
                Firefox: /Firefox\/(\d+(\.\d+)?)/,
                'Firefox iOS': /FxiOS\/(\d+(\.\d+)?)/,
                Konqueror: /Konqueror:(\d+(\.\d+)?)/,
                BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
                'Android Mobile': /android\s(\d+(\.\d+)?)/,
                'Samsung Internet': /SamsungBrowser\/(\d+(\.\d+)?)/,
                'Internet Explorer': /(rv:|MSIE )(\d+(\.\d+)?)/,
                Mozilla: /rv:(\d+(\.\d+)?)/,
            }[Kt.browser(e, t, n)]
            if (void 0 === r) return null
            var i = e.match(r)
            return i ? parseFloat(i[i.length - 2]) : null
        },
        browserLanguage: function () {
            return mt.language || mt.userLanguage
        },
        os: function (e) {
            if (/Windows/i.test(e)) {
                if (/Phone/.test(e) || /WPDesktop/.test(e)) return { os_name: 'Windows Phone', os_version: '' }
                var t = /Windows NT ([0-9.]+)/i.exec(e)
                return t && t[1] ? { os_name: 'Windows', os_version: t[1] } : { os_name: 'Windows', os_version: '' }
            }
            if (/(iPhone|iPad|iPod)/.test(e)) {
                var n = /OS (\d+)_(\d+)_?(\d+)?/i.exec(e)
                return n && n[1]
                    ? { os_name: 'iOS', os_version: [n[1], n[2], n[3] || '0'].join('.') }
                    : { os_name: 'iOS', os_version: '' }
            }
            if (/Android/.test(e)) {
                var r = /Android (\d+)\.(\d+)\.?(\d+)?/i.exec(e)
                return r && r[1]
                    ? { os_name: 'Android', os_version: [r[1], r[2], r[3] || '0'].join('.') }
                    : { os_name: 'Android', os_version: '' }
            }
            if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return { os_name: 'BlackBerry', os_version: '' }
            if (/Mac/i.test(e)) {
                var i = /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i.exec(e)
                return i && i[1]
                    ? { os_name: 'Mac OS X', os_version: [i[1], i[2], i[3] || '0'].join('.') }
                    : { os_name: 'Mac OS X', os_version: '' }
            }
            return /Linux/.test(e)
                ? { os_name: 'Linux', os_version: '' }
                : /CrOS/.test(e)
                ? { os_name: 'Chrome OS', os_version: '' }
                : { os_name: '', os_version: '' }
        },
        device: function (e) {
            return /Windows Phone/i.test(e) || /WPDesktop/.test(e)
                ? 'Windows Phone'
                : /iPad/.test(e)
                ? 'iPad'
                : /iPod/.test(e)
                ? 'iPod Touch'
                : /iPhone/.test(e)
                ? 'iPhone'
                : /(BlackBerry|PlayBook|BB10)/i.test(e)
                ? 'BlackBerry'
                : /Android/.test(e) && !/Mobile/.test(e)
                ? 'Android Tablet'
                : /Android/.test(e)
                ? 'Android'
                : ''
        },
        deviceType: function (e) {
            var t = this.device(e)
            return 'iPad' === t || 'Android Tablet' === t ? 'Tablet' : t ? 'Mobile' : 'Desktop'
        },
        referrer: function () {
            return _t.referrer || '$direct'
        },
        referringDomain: function () {
            if (!_t.referrer) return '$direct'
            var e = _t.createElement('a')
            return (e.href = _t.referrer), e.host
        },
        properties: function () {
            var e = Kt.os(yt),
                t = e.os_name,
                n = e.os_version
            return Tt(
                Bt({
                    $os: t,
                    $os_version: n,
                    $browser: Kt.browser(yt, mt.vendor, gt.opera),
                    $device: Kt.device(yt),
                    $device_type: Kt.deviceType(yt),
                }),
                {
                    $current_url: null == gt ? void 0 : gt.location.href,
                    $host: null == gt ? void 0 : gt.location.host,
                    $pathname: null == gt ? void 0 : gt.location.pathname,
                    $browser_version: Kt.browserVersion(yt, mt.vendor, gt.opera),
                    $browser_language: Kt.browserLanguage(),
                    $screen_height: null == gt ? void 0 : gt.screen.height,
                    $screen_width: null == gt ? void 0 : gt.screen.width,
                    $viewport_height: null == gt ? void 0 : gt.innerHeight,
                    $viewport_width: null == gt ? void 0 : gt.innerWidth,
                    $lib: 'web',
                    $lib_version: dt.LIB_VERSION,
                    $insert_id:
                        Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                    $time: jt() / 1e3,
                }
            )
        },
        people_properties: function () {
            var e = Kt.os(yt),
                t = e.os_name,
                n = e.os_version
            return Tt(Bt({ $os: t, $os_version: n, $browser: Kt.browser(yt, mt.vendor, gt.opera) }), {
                $browser_version: Kt.browserVersion(yt, mt.vendor, gt.opera),
            })
        },
    }
    function Zt(e) {
        switch (s(e.className)) {
            case 'string':
                return e.className
            case 'object':
                return ('baseVal' in e.className ? e.className.baseVal : null) || e.getAttribute('class') || ''
            default:
                return ''
        }
    }
    function en(e) {
        var t = ''
        return (
            sn(e) &&
                !un(e) &&
                e.childNodes &&
                e.childNodes.length &&
                Ot(e.childNodes, function (e) {
                    rn(e) &&
                        e.textContent &&
                        (t += Ct(e.textContent)
                            .split(/(\s+)/)
                            .filter(cn)
                            .join('')
                            .replace(/[\r\n]/g, ' ')
                            .replace(/[ ]+/g, ' ')
                            .substring(0, 255))
                }),
            Ct(t)
        )
    }
    function tn(e) {
        return !!e && 1 === e.nodeType
    }
    function nn(e, t) {
        return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase()
    }
    function rn(e) {
        return !!e && 3 === e.nodeType
    }
    function on(e) {
        return !!e && 11 === e.nodeType
    }
    var an = ['a', 'button', 'form', 'input', 'select', 'textarea', 'label']
    function sn(e) {
        for (var t = e; t.parentNode && !nn(t, 'body'); t = t.parentNode) {
            var n = Zt(t).split(' ')
            if (Pt(n, 'ph-sensitive') || Pt(n, 'ph-no-capture')) return !1
        }
        if (Pt(Zt(e).split(' '), 'ph-include')) return !0
        var r = e.type || ''
        if ('string' == typeof r)
            switch (r.toLowerCase()) {
                case 'hidden':
                case 'password':
                    return !1
            }
        var i = e.name || e.id || ''
        if ('string' == typeof i) {
            if (
                /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(
                    i.replace(/[^a-zA-Z0-9]/g, '')
                )
            )
                return !1
        }
        return !0
    }
    function un(e) {
        return !!(
            (nn(e, 'input') && !['button', 'checkbox', 'submit', 'reset'].includes(e.type)) ||
            nn(e, 'select') ||
            nn(e, 'textarea') ||
            'true' === e.getAttribute('contenteditable')
        )
    }
    function cn(e) {
        if (null === e || Dt(e)) return !1
        if ('string' == typeof e) {
            e = Ct(e)
            if (
                /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test(
                    (e || '').replace(/[- ]/g, '')
                )
            )
                return !1
            if (/(^\d{3}-?\d{2}-?\d{4}$)/.test(e)) return !1
        }
        return !0
    }
    function ln(e) {
        var t = en(e)
        return cn((t = ''.concat(t, ' ').concat(dn(e)).trim())) ? t : ''
    }
    function dn(e) {
        var t = ''
        return (
            e &&
                e.childNodes &&
                e.childNodes.length &&
                Ot(e.childNodes, function (e) {
                    var n
                    if (e && 'span' === (null === (n = e.tagName) || void 0 === n ? void 0 : n.toLowerCase()))
                        try {
                            var r = en(e)
                            ;(t = ''.concat(t, ' ').concat(r).trim()),
                                e.childNodes && e.childNodes.length && (t = ''.concat(t, ' ').concat(dn(e)).trim())
                        } catch (e) {
                            console.error(e)
                        }
                }),
            t
        )
    }
    var fn = (function () {
            function e(t) {
                u(this, e), (this.clicks = []), (this.enabled = t)
            }
            return (
                l(e, [
                    {
                        key: 'isRageClick',
                        value: function (e, t, n) {
                            if (!this.enabled) return !1
                            var r = this.clicks[this.clicks.length - 1]
                            if (r && Math.abs(e - r.x) + Math.abs(t - r.y) < 30 && n - r.timestamp < 1e3) {
                                if ((this.clicks.push({ x: e, y: t, timestamp: n }), 3 === this.clicks.length))
                                    return !0
                            } else this.clicks = [{ x: e, y: t, timestamp: n }]
                            return !1
                        },
                    },
                ]),
                e
            )
        })(),
        pn = '$people_distinct_id',
        hn = '__alias',
        vn = '__timers',
        gn = '$autocapture_disabled_server_side',
        mn = '$session_recording_enabled_server_side',
        _n = '$console_log_recording_enabled_server_side',
        yn = '$session_recording_recorder_version_server_side',
        bn = '$sesid',
        wn = '$enabled_feature_flags',
        kn = '$early_access_features',
        Sn = '$stored_person_properties',
        xn = '$stored_group_properties',
        En = '$surveys',
        Cn = '$flag_call_reported',
        In = '$user_state',
        On = '$posthog_quota_limited',
        Tn = [pn, hn, '__cmpns', vn, mn, bn, wn, In, On, kn, xn, Sn, En, Cn]
    function Fn(e, t) {
        return t.length > e ? t.slice(0, e) + '...' : t
    }
    var Mn = {
        _initializedTokens: [],
        _isDisabledServerSide: null,
        _isAutocaptureEnabled: !1,
        _setIsAutocaptureEnabled: function (e) {
            var t,
                n =
                    null === this._isDisabledServerSide
                        ? !(null === (t = e.persistence) || void 0 === t || !t.props[gn])
                        : this._isDisabledServerSide,
                r = !!e.config.autocapture
            this._isAutocaptureEnabled = r && !n
        },
        _previousElementSibling: function (e) {
            if (e.previousElementSibling) return e.previousElementSibling
            var t = e
            do {
                t = t.previousSibling
            } while (t && !tn(t))
            return t
        },
        _getAugmentPropertiesFromElement: function (e) {
            if (!sn(e)) return {}
            var t = {}
            return (
                Ot(e.attributes, function (e) {
                    if (0 === e.name.indexOf('data-ph-capture-attribute')) {
                        var n = e.name.replace('data-ph-capture-attribute-', ''),
                            r = e.value
                        n && r && cn(r) && (t[n] = r)
                    }
                }),
                t
            )
        },
        _getPropertiesFromElement: function (e, t, n) {
            var r,
                i = e.tagName.toLowerCase(),
                o = { tag_name: i }
            an.indexOf(i) > -1 &&
                !n &&
                ('a' === i.toLowerCase() || 'button' === i.toLowerCase()
                    ? (o.$el_text = Fn(1024, ln(e)))
                    : (o.$el_text = Fn(1024, en(e))))
            var a = Zt(e)
            a.length > 0 &&
                (o.classes = a.split(' ').filter(function (e) {
                    return '' !== e
                }))
            var s = null === (r = this.config) || void 0 === r ? void 0 : r.element_attribute_ignorelist
            Ot(e.attributes, function (n) {
                var r
                ;(un(e) && -1 === ['name', 'id', 'class'].indexOf(n.name)) ||
                    (null != s && s.includes(n.name)) ||
                    (!t &&
                        cn(n.value) &&
                        ('string' != typeof (r = n.name) ||
                            ('_ngcontent' !== r.substring(0, 10) && '_nghost' !== r.substring(0, 7))) &&
                        (o['attr__' + n.name] = Fn(1024, n.value)))
            })
            for (var u = 1, c = 1, l = e; (l = this._previousElementSibling(l)); ) u++, l.tagName === e.tagName && c++
            return (o.nth_child = u), (o.nth_of_type = c), o
        },
        _getDefaultProperties: function (e) {
            return { $event_type: e, $ce_version: 1 }
        },
        _extractCustomPropertyValue: function (e) {
            var t = []
            return (
                Ot(document.querySelectorAll(e.css_selector), function (e) {
                    var n
                    ;['input', 'select'].indexOf(e.tagName.toLowerCase()) > -1
                        ? (n = e.value)
                        : e.textContent && (n = e.textContent),
                        cn(n) && t.push(n)
                }),
                t.join(', ')
            )
        },
        _getCustomProperties: function (e) {
            var t = this,
                n = {}
            return (
                Ot(this._customProperties, function (r) {
                    Ot(r.event_selectors, function (i) {
                        Ot(document.querySelectorAll(i), function (i) {
                            Pt(e, i) && sn(i) && (n[r.name] = t._extractCustomPropertyValue(r))
                        })
                    })
                }),
                n
            )
        },
        _getEventTarget: function (e) {
            return void 0 === e.target
                ? e.srcElement || null
                : null !== (t = e.target) && void 0 !== t && t.shadowRoot
                ? e.composedPath()[0] || null
                : e.target || null
            var t
        },
        _captureEvent: function (e, t) {
            var n,
                r = this,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '$autocapture',
                o = this._getEventTarget(e)
            ;(rn(o) && (o = o.parentNode || null),
            '$autocapture' === i && 'click' === e.type && e instanceof MouseEvent) &&
                null !== (n = this.rageclicks) &&
                void 0 !== n &&
                n.isRageClick(e.clientX, e.clientY, new Date().getTime()) &&
                this._captureEvent(e, t, '$rageclick')
            if (
                o &&
                (function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0
                    if (!e || nn(e, 'html') || !tn(e)) return !1
                    if (null != n && n.url_allowlist) {
                        var r = window.location.href,
                            i = n.url_allowlist
                        if (
                            i &&
                            !i.some(function (e) {
                                return r.match(e)
                            })
                        )
                            return !1
                    }
                    if (null != n && n.dom_event_allowlist) {
                        var o = n.dom_event_allowlist
                        if (
                            o &&
                            !o.some(function (e) {
                                return t.type === e
                            })
                        )
                            return !1
                    }
                    if (null != n && n.element_allowlist) {
                        var a = n.element_allowlist
                        if (
                            a &&
                            !a.some(function (t) {
                                return e.tagName.toLowerCase() === t
                            })
                        )
                            return !1
                    }
                    if (null != n && n.css_selector_allowlist) {
                        var s = n.css_selector_allowlist
                        if (
                            s &&
                            !s.some(function (t) {
                                return e.matches(t)
                            })
                        )
                            return !1
                    }
                    for (var u = !1, c = [e], l = !0, d = e; d.parentNode && !nn(d, 'body'); )
                        if (on(d.parentNode)) c.push(d.parentNode.host), (d = d.parentNode.host)
                        else {
                            if (!(l = d.parentNode || !1)) break
                            if (an.indexOf(l.tagName.toLowerCase()) > -1) u = !0
                            else {
                                var f = window.getComputedStyle(l)
                                f && 'pointer' === f.getPropertyValue('cursor') && (u = !0)
                            }
                            c.push(l), (d = l)
                        }
                    var p = window.getComputedStyle(e)
                    if (p && 'pointer' === p.getPropertyValue('cursor') && 'click' === t.type) return !0
                    var h = e.tagName.toLowerCase()
                    switch (h) {
                        case 'html':
                            return !1
                        case 'form':
                            return 'submit' === t.type
                        case 'input':
                        case 'select':
                        case 'textarea':
                            return 'change' === t.type || 'click' === t.type
                        default:
                            return u
                                ? 'click' === t.type
                                : 'click' === t.type &&
                                      (an.indexOf(h) > -1 || 'true' === e.getAttribute('contenteditable'))
                    }
                })(o, e, this.config)
            ) {
                for (var a, s, u = [o], c = o; c.parentNode && !nn(c, 'body'); )
                    on(c.parentNode)
                        ? (u.push(c.parentNode.host), (c = c.parentNode.host))
                        : (u.push(c.parentNode), (c = c.parentNode))
                var l,
                    d = [],
                    f = {},
                    p = !1
                if (
                    (Ot(u, function (e) {
                        var n = sn(e)
                        'a' === e.tagName.toLowerCase() && ((l = e.getAttribute('href')), (l = n && cn(l) && l)),
                            Pt(Zt(e).split(' '), 'ph-no-capture') && (p = !0),
                            d.push(
                                r._getPropertiesFromElement(
                                    e,
                                    t.config.mask_all_element_attributes,
                                    t.config.mask_all_text
                                )
                            )
                        var i = r._getAugmentPropertiesFromElement(e)
                        Tt(f, i)
                    }),
                    t.config.mask_all_text ||
                        ('a' === o.tagName.toLowerCase() || 'button' === o.tagName.toLowerCase()
                            ? (d[0].$el_text = ln(o))
                            : (d[0].$el_text = en(o))),
                    l && (d[0].attr__href = l),
                    p)
                )
                    return !1
                var h = Tt(
                    this._getDefaultProperties(e.type),
                    { $elements: d },
                    null !== (a = d[0]) && void 0 !== a && a.$el_text
                        ? { $el_text: null === (s = d[0]) || void 0 === s ? void 0 : s.$el_text }
                        : {},
                    this._getCustomProperties(u),
                    f
                )
                return t.capture(i, h), !0
            }
        },
        _navigate: function (e) {
            window.location.href = e
        },
        _addDomEventHandlers: function (e) {
            var t = this,
                n = function (n) {
                    ;(n = n || window.event), t._captureEvent(n, e)
                }
            Qt(document, 'submit', n, !1, !0), Qt(document, 'change', n, !1, !0), Qt(document, 'click', n, !1, !0)
        },
        _customProperties: [],
        rageclicks: null,
        config: void 0,
        init: function (e) {
            var t
            'boolean' != typeof e.__autocapture && (this.config = e.__autocapture),
                null !== (t = this.config) &&
                    void 0 !== t &&
                    t.url_allowlist &&
                    (this.config.url_allowlist = this.config.url_allowlist.map(function (e) {
                        return new RegExp(e)
                    })),
                (this.rageclicks = new fn(e.config.rageclick))
        },
        afterDecideResponse: function (e, t) {
            var n = t.config.token
            this._initializedTokens.indexOf(n) > -1
                ? Et.log('autocapture already initialized for token "' + n + '"')
                : (t.persistence && t.persistence.register(d({}, gn, !!e.autocapture_opt_out)),
                  (this._isDisabledServerSide = !!e.autocapture_opt_out),
                  this._setIsAutocaptureEnabled(t),
                  this._initializedTokens.push(n),
                  e && e.config && e.config.enable_collect_everything && this._isAutocaptureEnabled
                      ? (e.custom_properties && (this._customProperties = e.custom_properties),
                        this._addDomEventHandlers(t))
                      : (t.__autocapture = !1))
        },
        enabledForProject: function (e, t, n) {
            if (!e) return !0
            ;(t = Dt(t) ? 10 : t), (n = Dt(n) ? 10 : n)
            for (var r = 0, i = 0; i < e.length; i++) r += e.charCodeAt(i)
            return r % t < n
        },
        isBrowserSupported: function () {
            return Mt(document.querySelectorAll)
        },
    }
    !(function (e) {
        for (var t in e) 'function' == typeof e[t] && (e[t] = e[t].bind(e))
    })(Mn),
        (function (e) {
            for (var t in e) 'function' == typeof e[t] && (e[t] = Ht(e[t]))
        })(Mn)
    var Pn = '$active_feature_flags',
        Rn = '$override_feature_flags',
        Nn = '$feature_flag_payloads',
        Dn = function (e) {
            var t,
                n = {},
                r = k(
                    (function (e) {
                        for (var t = Object.keys(e), n = t.length, r = new Array(n); n--; ) r[n] = [t[n], e[t[n]]]
                        return r
                    })(e || {})
                )
            try {
                for (r.s(); !(t = r.n()).done; ) {
                    var i = _(t.value, 2),
                        o = i[0],
                        a = i[1]
                    a && (n[o] = a)
                }
            } catch (e) {
                r.e(e)
            } finally {
                r.f()
            }
            return n
        },
        Ln = (function () {
            function e(t) {
                u(this, e),
                    (this.instance = t),
                    (this._override_warning = !1),
                    (this.featureFlagEventHandlers = []),
                    (this.reloadFeatureFlagsQueued = !1),
                    (this.reloadFeatureFlagsInAction = !1)
            }
            return (
                l(e, [
                    {
                        key: 'getFlags',
                        value: function () {
                            return Object.keys(this.getFlagVariants())
                        },
                    },
                    {
                        key: 'getFlagVariants',
                        value: function () {
                            var e = this.instance.get_property(wn),
                                t = this.instance.get_property(Rn)
                            if (!t) return e || {}
                            for (var n = Tt({}, e), r = Object.keys(t), i = 0; i < r.length; i++)
                                !1 === t[r[i]] ? delete n[r[i]] : (n[r[i]] = t[r[i]])
                            return (
                                this._override_warning ||
                                    (console.warn('[PostHog] Overriding feature flags!', {
                                        enabledFlags: e,
                                        overriddenFlags: t,
                                        finalFlags: n,
                                    }),
                                    (this._override_warning = !0)),
                                n
                            )
                        },
                    },
                    {
                        key: 'getFlagPayloads',
                        value: function () {
                            return this.instance.get_property(Nn) || {}
                        },
                    },
                    {
                        key: 'reloadFeatureFlags',
                        value: function () {
                            this.reloadFeatureFlagsQueued ||
                                ((this.reloadFeatureFlagsQueued = !0), this._startReloadTimer())
                        },
                    },
                    {
                        key: 'setAnonymousDistinctId',
                        value: function (e) {
                            this.$anon_distinct_id = e
                        },
                    },
                    {
                        key: 'setReloadingPaused',
                        value: function (e) {
                            this.reloadFeatureFlagsInAction = e
                        },
                    },
                    {
                        key: 'resetRequestQueue',
                        value: function () {
                            this.reloadFeatureFlagsQueued = !1
                        },
                    },
                    {
                        key: '_startReloadTimer',
                        value: function () {
                            var e = this
                            this.reloadFeatureFlagsQueued &&
                                !this.reloadFeatureFlagsInAction &&
                                setTimeout(function () {
                                    !e.reloadFeatureFlagsInAction &&
                                        e.reloadFeatureFlagsQueued &&
                                        ((e.reloadFeatureFlagsQueued = !1), e._reloadFeatureFlagsRequest())
                                }, 5)
                        },
                    },
                    {
                        key: '_reloadFeatureFlagsRequest',
                        value: function () {
                            var e = this
                            this.setReloadingPaused(!0)
                            var t = this.instance.config.token,
                                n = this.instance.get_property(Sn),
                                r = this.instance.get_property(xn),
                                i = zt(
                                    JSON.stringify({
                                        token: t,
                                        distinct_id: this.instance.get_distinct_id(),
                                        groups: this.instance.getGroups(),
                                        $anon_distinct_id: this.$anon_distinct_id,
                                        person_properties: n,
                                        group_properties: r,
                                        disable_flags: this.instance.config.advanced_disable_feature_flags || void 0,
                                    })
                                )
                            this.instance._send_request(
                                this.instance.config.api_host + '/decide/?v=3',
                                { data: i },
                                { method: 'POST' },
                                this.instance._prepare_callback(function (t) {
                                    ;(e.$anon_distinct_id = void 0),
                                        e.receivedFeatureFlags(t),
                                        e.setReloadingPaused(!1),
                                        e._startReloadTimer()
                                })
                            )
                        },
                    },
                    {
                        key: 'getFeatureFlag',
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                            if (this.instance.decideEndpointWasHit || (this.getFlags() && this.getFlags().length > 0)) {
                                var n,
                                    r = this.getFlagVariants()[e],
                                    i = ''.concat(r),
                                    o = this.instance.get_property(Cn) || {}
                                if (t.send_event || !('send_event' in t))
                                    if (!(e in o) || !o[e].includes(i))
                                        Array.isArray(o[e]) ? o[e].push(i) : (o[e] = [i]),
                                            null === (n = this.instance.persistence) ||
                                                void 0 === n ||
                                                n.register(d({}, Cn, o)),
                                            this.instance.capture('$feature_flag_called', {
                                                $feature_flag: e,
                                                $feature_flag_response: r,
                                            })
                                return r
                            }
                            console.warn(
                                'getFeatureFlag for key "' + e + '" failed. Feature flags didn\'t load in time.'
                            )
                        },
                    },
                    {
                        key: 'getFeatureFlagPayload',
                        value: function (e) {
                            return this.getFlagPayloads()[e]
                        },
                    },
                    {
                        key: 'isFeatureEnabled',
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                            if (this.instance.decideEndpointWasHit || (this.getFlags() && this.getFlags().length > 0))
                                return !!this.getFeatureFlag(e, t)
                            console.warn(
                                'isFeatureEnabled for key "' + e + '" failed. Feature flags didn\'t load in time.'
                            )
                        },
                    },
                    {
                        key: 'addFeatureFlagsHandler',
                        value: function (e) {
                            this.featureFlagEventHandlers.push(e)
                        },
                    },
                    {
                        key: 'removeFeatureFlagsHandler',
                        value: function (e) {
                            this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(function (t) {
                                return t !== e
                            })
                        },
                    },
                    {
                        key: 'receivedFeatureFlags',
                        value: function (e) {
                            if (this.instance.persistence) {
                                this.instance.decideEndpointWasHit = !0
                                var t = this.getFlagVariants(),
                                    n = this.getFlagPayloads()
                                !(function (e, t) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                        i = e.featureFlags,
                                        o = e.featureFlagPayloads
                                    if (i)
                                        if (Array.isArray(i)) {
                                            var s,
                                                u = {}
                                            if (i) for (var c = 0; c < i.length; c++) u[i[c]] = !0
                                            t && t.register((d((s = {}), Pn, i), d(s, wn, u), s))
                                        } else {
                                            var l,
                                                f = i,
                                                p = o
                                            e.errorsWhileComputingFlags && ((f = a(a({}, n), f)), (p = a(a({}, r), p))),
                                                t &&
                                                    t.register(
                                                        (d((l = {}), Pn, Object.keys(Dn(f))),
                                                        d(l, wn, f || {}),
                                                        d(l, Nn, p || {}),
                                                        l)
                                                    )
                                        }
                                })(e, this.instance.persistence, t, n),
                                    this._fireFeatureFlagsCallbacks()
                            }
                        },
                    },
                    {
                        key: 'override',
                        value: function (e) {
                            if (!this.instance.__loaded || !this.instance.persistence)
                                return Et.unintializedWarning('posthog.feature_flags.override')
                            if (((this._override_warning = !1), !1 === e)) this.instance.persistence.unregister(Rn)
                            else if (Array.isArray(e)) {
                                for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = !0
                                this.instance.persistence.register(d({}, Rn, t))
                            } else this.instance.persistence.register(d({}, Rn, e))
                        },
                    },
                    {
                        key: 'onFeatureFlags',
                        value: function (e) {
                            var t = this
                            if ((this.addFeatureFlagsHandler(e), this.instance.decideEndpointWasHit)) {
                                var n = this._prepareFeatureFlagsForCallbacks(),
                                    r = n.flags,
                                    i = n.flagVariants
                                e(r, i)
                            }
                            return function () {
                                return t.removeFeatureFlagsHandler(e)
                            }
                        },
                    },
                    {
                        key: 'updateEarlyAccessFeatureEnrollment',
                        value: function (e, t) {
                            var n,
                                r,
                                i = d({}, '$feature_enrollment/'.concat(e), t)
                            this.instance.capture('$feature_enrollment_update', {
                                $feature_flag: e,
                                $feature_enrollment: t,
                                $set: i,
                            }),
                                this.setPersonPropertiesForFlags(i, !1)
                            var o = a(a({}, this.getFlagVariants()), {}, d({}, e, t))
                            null === (n = this.instance.persistence) ||
                                void 0 === n ||
                                n.register((d((r = {}), Pn, Object.keys(Dn(o))), d(r, wn, o), r)),
                                this._fireFeatureFlagsCallbacks()
                        },
                    },
                    {
                        key: 'getEarlyAccessFeatures',
                        value: function (e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                r = this.instance.get_property(kn)
                            if (r && !n) return e(r)
                            this.instance._send_request(
                                ''
                                    .concat(this.instance.config.api_host, '/api/early_access_features/?token=')
                                    .concat(this.instance.config.token),
                                {},
                                { method: 'GET' },
                                function (n) {
                                    var r,
                                        i = n.earlyAccessFeatures
                                    return (
                                        null === (r = t.instance.persistence) ||
                                            void 0 === r ||
                                            r.register(d({}, kn, i)),
                                        e(i)
                                    )
                                }
                            )
                        },
                    },
                    {
                        key: '_prepareFeatureFlagsForCallbacks',
                        value: function () {
                            var e = this.getFlags(),
                                t = this.getFlagVariants()
                            return {
                                flags: e.filter(function (e) {
                                    return t[e]
                                }),
                                flagVariants: Object.keys(t)
                                    .filter(function (e) {
                                        return t[e]
                                    })
                                    .reduce(function (e, n) {
                                        return (e[n] = t[n]), e
                                    }, {}),
                            }
                        },
                    },
                    {
                        key: '_fireFeatureFlagsCallbacks',
                        value: function () {
                            var e = this._prepareFeatureFlagsForCallbacks(),
                                t = e.flags,
                                n = e.flagVariants
                            this.featureFlagEventHandlers.forEach(function (e) {
                                return e(t, n)
                            })
                        },
                    },
                    {
                        key: 'setPersonPropertiesForFlags',
                        value: function (e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                n = this.instance.get_property(Sn) || {}
                            this.instance.register(d({}, Sn, a(a({}, n), e))), t && this.instance.reloadFeatureFlags()
                        },
                    },
                    {
                        key: 'resetPersonPropertiesForFlags',
                        value: function () {
                            this.instance.unregister(Sn)
                        },
                    },
                    {
                        key: 'setGroupPropertiesForFlags',
                        value: function (e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                n = this.instance.get_property(xn) || {}
                            0 !== Object.keys(n).length &&
                                Object.keys(n).forEach(function (t) {
                                    ;(n[t] = a(a({}, n[t]), e[t])), delete e[t]
                                }),
                                this.instance.register(d({}, xn, a(a({}, n), e))),
                                t && this.instance.reloadFeatureFlags()
                        },
                    },
                    {
                        key: 'resetGroupPropertiesForFlags',
                        value: function (e) {
                            if (e) {
                                var t = this.instance.get_property(xn) || {}
                                this.instance.register(d({}, xn, a(a({}, t), {}, d({}, e, {}))))
                            } else this.instance.unregister(xn)
                        },
                    },
                ]),
                e
            )
        })(),
        An = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
        $n = {
            is_supported: function () {
                return !0
            },
            error: function (e) {
                Et.error('cookieStore error: ' + e)
            },
            get: function (e) {
                try {
                    for (
                        var t = e + '=',
                            n = document.cookie.split(';').filter(function (e) {
                                return e.length
                            }),
                            r = 0;
                        r < n.length;
                        r++
                    ) {
                        for (var i = n[r]; ' ' == i.charAt(0); ) i = i.substring(1, i.length)
                        if (0 === i.indexOf(t)) return decodeURIComponent(i.substring(t.length, i.length))
                    }
                } catch (e) {}
                return null
            },
            parse: function (e) {
                var t
                try {
                    t = JSON.parse($n.get(e)) || {}
                } catch (e) {}
                return t
            },
            set: function (e, t, n, r, i) {
                try {
                    var o = '',
                        a = '',
                        s = ''
                    if (r) {
                        var u = document.location.hostname.match(An),
                            c = u ? u[0] : ''
                        o = c ? '; domain=.' + c : ''
                    }
                    if (n) {
                        var l = new Date()
                        l.setTime(l.getTime() + 24 * n * 60 * 60 * 1e3), (a = '; expires=' + l.toUTCString())
                    }
                    i && (s = '; secure')
                    var d = e + '=' + encodeURIComponent(JSON.stringify(t)) + a + '; SameSite=Lax; path=/' + o + s
                    return (document.cookie = d), d
                } catch (e) {
                    return
                }
            },
            remove: function (e, t) {
                try {
                    $n.set(e, '', -1, t)
                } catch (e) {
                    return
                }
            },
        },
        jn = null,
        Hn = {
            is_supported: function () {
                if (null !== jn) return jn
                var e = !0
                if ('undefined' != typeof window)
                    try {
                        var t = '__mplssupport__'
                        Hn.set(t, 'xyz'), '"xyz"' !== Hn.get(t) && (e = !1), Hn.remove(t)
                    } catch (t) {
                        e = !1
                    }
                else e = !1
                return e || Et.error('localStorage unsupported; falling back to cookie store'), (jn = e), e
            },
            error: function (e) {
                Et.error('localStorage error: ' + e)
            },
            get: function (e) {
                try {
                    return window.localStorage.getItem(e)
                } catch (e) {
                    Hn.error(e)
                }
                return null
            },
            parse: function (e) {
                try {
                    return JSON.parse(Hn.get(e)) || {}
                } catch (e) {}
                return null
            },
            set: function (e, t) {
                try {
                    window.localStorage.setItem(e, JSON.stringify(t))
                } catch (e) {
                    Hn.error(e)
                }
            },
            remove: function (e) {
                try {
                    window.localStorage.removeItem(e)
                } catch (e) {
                    Hn.error(e)
                }
            },
        },
        Bn = ['distinct_id', bn],
        qn = a(
            a({}, Hn),
            {},
            {
                parse: function (e) {
                    try {
                        var t = {}
                        try {
                            t = $n.parse(e) || {}
                        } catch (e) {}
                        var n = Tt(t, JSON.parse(Hn.get(e) || '{}'))
                        return Hn.set(e, n), n
                    } catch (e) {}
                    return null
                },
                set: function (e, t, n, r, i) {
                    try {
                        Hn.set(e, t)
                        var o = {}
                        Bn.forEach(function (e) {
                            t[e] && (o[e] = t[e])
                        }),
                            Object.keys(o).length && $n.set(e, o, n, r, i)
                    } catch (e) {
                        Hn.error(e)
                    }
                },
                remove: function (e, t) {
                    try {
                        window.localStorage.removeItem(e), $n.remove(e, t)
                    } catch (e) {
                        Hn.error(e)
                    }
                },
            }
        ),
        Un = {},
        zn = {
            is_supported: function () {
                return !0
            },
            error: function (e) {
                Et.error('memoryStorage error: ' + e)
            },
            get: function (e) {
                return Un[e] || null
            },
            parse: function (e) {
                return Un[e] || null
            },
            set: function (e, t) {
                Un[e] = t
            },
            remove: function (e) {
                delete Un[e]
            },
        },
        Wn = null,
        Vn = {
            is_supported: function () {
                if (null !== Wn) return Wn
                if (((Wn = !0), 'undefined' != typeof window))
                    try {
                        var e = '__support__'
                        Vn.set(e, 'xyz'), '"xyz"' !== Vn.get(e) && (Wn = !1), Vn.remove(e)
                    } catch (e) {
                        Wn = !1
                    }
                else Wn = !1
                return Wn
            },
            error: function (e) {
                dt.DEBUG && Et.error('sessionStorage error: ', e)
            },
            get: function (e) {
                try {
                    return window.sessionStorage.getItem(e)
                } catch (e) {
                    Vn.error(e)
                }
                return null
            },
            parse: function (e) {
                try {
                    return JSON.parse(Vn.get(e)) || null
                } catch (e) {}
                return null
            },
            set: function (e, t) {
                try {
                    window.sessionStorage.setItem(e, JSON.stringify(t))
                } catch (e) {
                    Vn.error(e)
                }
            },
            remove: function (e) {
                try {
                    window.sessionStorage.removeItem(e)
                } catch (e) {
                    Vn.error(e)
                }
            },
        },
        Gn = ['cookie', 'localstorage', 'localstorage+cookie', 'sessionstorage', 'memory'],
        Yn = (function () {
            function e(t) {
                u(this, e)
                var n = ''
                t.token && (n = t.token.replace(/\+/g, 'PL').replace(/\//g, 'SL').replace(/=/g, 'EQ')),
                    (this.props = {}),
                    (this.campaign_params_saved = !1),
                    (this.custom_campaign_params = t.custom_campaign_params || []),
                    t.persistence_name
                        ? (this.name = 'ph_' + t.persistence_name)
                        : (this.name = 'ph_' + n + '_posthog'),
                    -1 === Gn.indexOf(t.persistence.toLowerCase()) &&
                        (Et.critical('Unknown persistence type ' + t.persistence + '; falling back to cookie'),
                        (t.persistence = 'cookie'))
                var r = t.persistence.toLowerCase()
                'localstorage' === r && Hn.is_supported()
                    ? (this.storage = Hn)
                    : 'localstorage+cookie' === r && qn.is_supported()
                    ? (this.storage = qn)
                    : 'sessionstorage' === r && Vn.is_supported()
                    ? (this.storage = Vn)
                    : (this.storage = 'memory' === r ? zn : $n),
                    (this.user_state = 'anonymous'),
                    this.load(),
                    this.update_config(t),
                    this.save()
            }
            return (
                l(e, [
                    {
                        key: 'properties',
                        value: function () {
                            var e = {}
                            return (
                                Ot(this.props, function (t, n) {
                                    if (n === wn && 'object' === s(t))
                                        for (var r = Object.keys(t), i = 0; i < r.length; i++)
                                            e['$feature/'.concat(r[i])] = t[r[i]]
                                    else
                                        (a = n),
                                            (u = !1),
                                            (null === (o = Tn)
                                                ? u
                                                : kt && o.indexOf === kt
                                                ? -1 != o.indexOf(a)
                                                : (Ot(o, function (e) {
                                                      if (u || (u = e === a)) return xt
                                                  }),
                                                  u)) || (e[n] = t)
                                    var o, a, u
                                }),
                                e
                            )
                        },
                    },
                    {
                        key: 'load',
                        value: function () {
                            if (!this.disabled) {
                                var e = this.storage.parse(this.name)
                                e && (this.props = Tt({}, e))
                            }
                        },
                    },
                    {
                        key: 'save',
                        value: function () {
                            this.disabled ||
                                this.storage.set(
                                    this.name,
                                    this.props,
                                    this.expire_days,
                                    this.cross_subdomain,
                                    this.secure
                                )
                        },
                    },
                    {
                        key: 'remove',
                        value: function () {
                            this.storage.remove(this.name, !1), this.storage.remove(this.name, !0)
                        },
                    },
                    {
                        key: 'clear',
                        value: function () {
                            this.remove(), (this.props = {})
                        },
                    },
                    {
                        key: 'register_once',
                        value: function (e, t, n) {
                            var r = this
                            if (Rt(e)) {
                                void 0 === t && (t = 'None'),
                                    (this.expire_days = void 0 === n ? this.default_expiry : n)
                                var i = !1
                                if (
                                    (Ot(e, function (e, n) {
                                        ;(r.props.hasOwnProperty(n) && r.props[n] !== t) || ((r.props[n] = e), (i = !0))
                                    }),
                                    i)
                                )
                                    return this.save(), !0
                            }
                            return !1
                        },
                    },
                    {
                        key: 'register',
                        value: function (e, t) {
                            var n = this
                            if (Rt(e)) {
                                this.expire_days = void 0 === t ? this.default_expiry : t
                                var r = !1
                                if (
                                    (Ot(e, function (t, i) {
                                        e.hasOwnProperty(i) && n.props[i] !== t && ((n.props[i] = t), (r = !0))
                                    }),
                                    r)
                                )
                                    return this.save(), !0
                            }
                            return !1
                        },
                    },
                    {
                        key: 'unregister',
                        value: function (e) {
                            e in this.props && (delete this.props[e], this.save())
                        },
                    },
                    {
                        key: 'update_campaign_params',
                        value: function () {
                            this.campaign_params_saved ||
                                (this.register(Kt.campaignParams(this.custom_campaign_params)),
                                (this.campaign_params_saved = !0))
                        },
                    },
                    {
                        key: 'update_search_keyword',
                        value: function () {
                            this.register(Kt.searchInfo())
                        },
                    },
                    {
                        key: 'update_referrer_info',
                        value: function () {
                            this.register({
                                $referrer: this.props.$referrer || Kt.referrer(),
                                $referring_domain: this.props.$referring_domain || Kt.referringDomain(),
                            })
                        },
                    },
                    {
                        key: 'get_referrer_info',
                        value: function () {
                            return Bt({
                                $referrer: this.props.$referrer,
                                $referring_domain: this.props.$referring_domain,
                            })
                        },
                    },
                    {
                        key: 'safe_merge',
                        value: function (e) {
                            return (
                                Ot(this.props, function (t, n) {
                                    n in e || (e[n] = t)
                                }),
                                e
                            )
                        },
                    },
                    {
                        key: 'update_config',
                        value: function (e) {
                            ;(this.default_expiry = this.expire_days = e.cookie_expiration),
                                this.set_disabled(e.disable_persistence),
                                this.set_cross_subdomain(e.cross_subdomain_cookie),
                                this.set_secure(e.secure_cookie)
                        },
                    },
                    {
                        key: 'set_disabled',
                        value: function (e) {
                            ;(this.disabled = e), this.disabled ? this.remove() : this.save()
                        },
                    },
                    {
                        key: 'set_cross_subdomain',
                        value: function (e) {
                            e !== this.cross_subdomain && ((this.cross_subdomain = e), this.remove(), this.save())
                        },
                    },
                    {
                        key: 'get_cross_subdomain',
                        value: function () {
                            return !!this.cross_subdomain
                        },
                    },
                    {
                        key: 'set_secure',
                        value: function (e) {
                            e !== this.secure && ((this.secure = e), this.remove(), this.save())
                        },
                    },
                    {
                        key: 'set_event_timer',
                        value: function (e, t) {
                            var n = this.props[vn] || {}
                            ;(n[e] = t), (this.props[vn] = n), this.save()
                        },
                    },
                    {
                        key: 'remove_event_timer',
                        value: function (e) {
                            var t = (this.props[vn] || {})[e]
                            return Dt(t) || (delete this.props[vn][e], this.save()), t
                        },
                    },
                    {
                        key: 'get_user_state',
                        value: function () {
                            return this.props[In] || 'anonymous'
                        },
                    },
                    {
                        key: 'set_user_state',
                        value: function (e) {
                            ;(this.props[In] = e), this.save()
                        },
                    },
                    {
                        key: 'get_quota_limits',
                        value: function () {
                            return this.props[On] || {}
                        },
                    },
                    {
                        key: 'set_quota_limits',
                        value: function (e) {
                            ;(this.props[On] = e), this.save()
                        },
                    },
                ]),
                e
            )
        })(),
        Jn =
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOCAwSDE2TDAgMTZWOEw4IDBaIiBmaWxsPSIjMkQyRDJEIi8+CjxwYXRoIGQ9Ik0xNiA4VjE2SDhMMTYgOFoiIGZpbGw9IiMyRDJEMkQiLz4KPC9zdmc+Cg==',
        Qn = 2,
        Xn = 4,
        Kn = 3,
        Zn = 6,
        er = 0,
        tr = 5e6
    var nr = 'rrweb/console@1'
    var rr,
        ir = l(function e(t) {
            var n,
                r,
                i = this,
                o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            u(this, e),
                d(this, 'bucketSize', 100),
                d(this, 'refillRate', 10),
                d(this, 'mutationBuckets', {}),
                d(this, 'loggedTracker', {}),
                d(this, 'refillBuckets', function () {
                    Object.keys(i.mutationBuckets).forEach(function (e) {
                        ;(i.mutationBuckets[e] = i.mutationBuckets[e] + i.refillRate),
                            i.mutationBuckets[e] >= i.bucketSize && delete i.mutationBuckets[e]
                    })
                }),
                d(this, 'getNodeOrRelevantParent', function (e) {
                    var t = i.rrweb.mirror.getNode(e)
                    if ('svg' !== (null == t ? void 0 : t.nodeName) && t instanceof Element) {
                        var n = t.closest('svg')
                        if (n) return [i.rrweb.mirror.getId(n), n]
                    }
                    return [e, t]
                }),
                d(this, 'numberOfChanges', function (e) {
                    var t, n, r, i, o, a, s, u
                    return (
                        (null !== (t = null === (n = e.removes) || void 0 === n ? void 0 : n.length) && void 0 !== t
                            ? t
                            : 0) +
                        (null !== (r = null === (i = e.attributes) || void 0 === i ? void 0 : i.length) && void 0 !== r
                            ? r
                            : 0) +
                        (null !== (o = null === (a = e.texts) || void 0 === a ? void 0 : a.length) && void 0 !== o
                            ? o
                            : 0) +
                        (null !== (s = null === (u = e.adds) || void 0 === u ? void 0 : u.length) && void 0 !== s
                            ? s
                            : 0)
                    )
                }),
                d(this, 'throttleMutations', function (e) {
                    if (e.type !== Kn || e.data.source !== er) return e
                    var t = e.data,
                        n = i.numberOfChanges(t)
                    t.attributes &&
                        (t.attributes = t.attributes.filter(function (e) {
                            var t,
                                n,
                                r,
                                o = _(i.getNodeOrRelevantParent(e.id), 2),
                                a = o[0],
                                s = o[1]
                            if (0 === i.mutationBuckets[a]) return !1
                            ;((i.mutationBuckets[a] =
                                null !== (t = i.mutationBuckets[a]) && void 0 !== t ? t : i.bucketSize),
                            (i.mutationBuckets[a] = Math.max(i.mutationBuckets[a] - 1, 0)),
                            0 === i.mutationBuckets[a]) &&
                                (i.loggedTracker[a] ||
                                    ((i.loggedTracker[a] = !0),
                                    null === (n = (r = i.options).onBlockedNode) || void 0 === n || n.call(r, a, s)))
                            return e
                        }))
                    var r = i.numberOfChanges(t)
                    return 0 !== r || n === r ? e : void 0
                }),
                (this.rrweb = t),
                (this.options = o),
                (this.refillRate = null !== (n = this.options.refillRate) && void 0 !== n ? n : this.refillRate),
                (this.bucketSize = null !== (r = this.options.bucketSize) && void 0 !== r ? r : this.bucketSize),
                setInterval(function () {
                    i.refillBuckets()
                }, 1e3)
        }),
        or = (function (e) {
            return (
                (e[(e.DomContentLoaded = 0)] = 'DomContentLoaded'),
                (e[(e.Load = 1)] = 'Load'),
                (e[(e.FullSnapshot = 2)] = 'FullSnapshot'),
                (e[(e.IncrementalSnapshot = 3)] = 'IncrementalSnapshot'),
                (e[(e.Meta = 4)] = 'Meta'),
                (e[(e.Custom = 5)] = 'Custom'),
                (e[(e.Plugin = 6)] = 'Plugin'),
                e
            )
        })(or || {}),
        ar = '/s/'
    !(function (e) {
        ;(e[(e.Mutation = 0)] = 'Mutation'),
            (e[(e.MouseMove = 1)] = 'MouseMove'),
            (e[(e.MouseInteraction = 2)] = 'MouseInteraction'),
            (e[(e.Scroll = 3)] = 'Scroll'),
            (e[(e.ViewportResize = 4)] = 'ViewportResize'),
            (e[(e.Input = 5)] = 'Input'),
            (e[(e.TouchMove = 6)] = 'TouchMove'),
            (e[(e.MediaInteraction = 7)] = 'MediaInteraction'),
            (e[(e.StyleSheetRule = 8)] = 'StyleSheetRule'),
            (e[(e.CanvasMutation = 9)] = 'CanvasMutation'),
            (e[(e.Font = 10)] = 'Font'),
            (e[(e.Log = 11)] = 'Log'),
            (e[(e.Drag = 12)] = 'Drag'),
            (e[(e.StyleDeclaration = 13)] = 'StyleDeclaration'),
            (e[(e.Selection = 14)] = 'Selection'),
            (e[(e.AdoptedStyleSheet = 15)] = 'AdoptedStyleSheet')
    })(rr || (rr = {}))
    var sr = [
            rr.MouseMove,
            rr.MouseInteraction,
            rr.Scroll,
            rr.ViewportResize,
            rr.Input,
            rr.TouchMove,
            rr.MediaInteraction,
            rr.Drag,
        ],
        ur = (function () {
            function e(t) {
                var n = this
                u(this, e),
                    d(this, 'lastActivityTimestamp', Date.now()),
                    d(this, 'isIdle', !1),
                    (this.instance = t),
                    (this.captureStarted = !1),
                    (this.snapshots = []),
                    (this.savedSnapshots = []),
                    (this.emit = !1),
                    (this.endpoint = ar),
                    (this.stopRrweb = void 0),
                    (this.windowId = null),
                    (this.sessionId = null),
                    (this.receivedDecide = !1),
                    window.addEventListener('beforeunload', function () {
                        n._flushBuffer()
                    })
            }
            return (
                l(e, [
                    {
                        key: 'getSessionManager',
                        value: function () {
                            if (this.instance.sessionManager) return this.instance.sessionManager
                            Et.error('Session recording started without valid sessionManager')
                        },
                    },
                    {
                        key: 'startRecordingIfEnabled',
                        value: function () {
                            this.isRecordingEnabled()
                                ? this.startCaptureAndTrySendingQueuedSnapshots()
                                : this.stopRecording()
                        },
                    },
                    {
                        key: 'started',
                        value: function () {
                            return this.captureStarted
                        },
                    },
                    {
                        key: 'stopRecording',
                        value: function () {
                            this.captureStarted &&
                                this.stopRrweb &&
                                (this.stopRrweb(), (this.stopRrweb = void 0), (this.captureStarted = !1))
                        },
                    },
                    {
                        key: 'isRecordingEnabled',
                        value: function () {
                            var e = !!this.instance.get_property(mn),
                                t = !this.instance.config.disable_session_recording
                            return e && t
                        },
                    },
                    {
                        key: 'isConsoleLogCaptureEnabled',
                        value: function () {
                            var e = !!this.instance.get_property(_n),
                                t = this.instance.config.enable_recording_console_log
                            return null != t ? t : e
                        },
                    },
                    {
                        key: 'getRecordingVersion',
                        value: function () {
                            var e,
                                t = this.instance.get_property(yn)
                            return (
                                (null === (e = this.instance.config.session_recording) || void 0 === e
                                    ? void 0
                                    : e.recorderVersion) ||
                                t ||
                                'v1'
                            )
                        },
                    },
                    {
                        key: 'afterDecideResponse',
                        value: function (e) {
                            var t, n, r, i, o, a
                            ;((this.receivedDecide = !0), this.instance.persistence) &&
                                this.instance.persistence.register(
                                    (d((o = {}), mn, !!e.sessionRecording),
                                    d(
                                        o,
                                        _n,
                                        null === (r = e.sessionRecording) || void 0 === r
                                            ? void 0
                                            : r.consoleLogRecordingEnabled
                                    ),
                                    d(
                                        o,
                                        yn,
                                        null === (i = e.sessionRecording) || void 0 === i ? void 0 : i.recorderVersion
                                    ),
                                    o)
                                )
                            null !== (t = e.sessionRecording) &&
                                void 0 !== t &&
                                t.endpoint &&
                                (this.endpoint =
                                    null === (a = e.sessionRecording) || void 0 === a ? void 0 : a.endpoint)
                            null !== (n = e.sessionRecording) &&
                                void 0 !== n &&
                                n.recorderVersion &&
                                (this.recorderVersion = e.sessionRecording.recorderVersion),
                                this.startRecordingIfEnabled()
                        },
                    },
                    {
                        key: 'log',
                        value: function (e) {
                            var t,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'log'
                            null === (t = this.instance.sessionRecording) ||
                                void 0 === t ||
                                t.onRRwebEmit({
                                    type: 6,
                                    data: {
                                        plugin: 'rrweb/console@1',
                                        payload: { level: n, trace: [], payload: [JSON.stringify(e)] },
                                    },
                                    timestamp: jt(),
                                })
                        },
                    },
                    {
                        key: 'startCaptureAndTrySendingQueuedSnapshots',
                        value: function () {
                            var e = this
                            this.receivedDecide &&
                                ((this.emit = !0),
                                this.snapshots.forEach(function (t) {
                                    return e._captureSnapshotBuffered(t)
                                })),
                                this._startCapture()
                        },
                    },
                    {
                        key: '_startCapture',
                        value: function () {
                            var e = this,
                                t = this.getSessionManager()
                            if (
                                t &&
                                void 0 !== Object.assign &&
                                !this.captureStarted &&
                                !this.instance.config.disable_session_recording
                            ) {
                                ;(this.captureStarted = !0), t.checkAndGetSessionAndWindowId()
                                var n = 'v2' === this.getRecordingVersion() ? 'recorder-v2.js' : 'recorder.js'
                                this.instance.__loaded_recorder_version !== this.getRecordingVersion()
                                    ? Xt(
                                          this.instance.config.api_host +
                                              '/static/'.concat(n, '?v=').concat(dt.LIB_VERSION),
                                          function (t) {
                                              if (t) return Et.error('Could not load '.concat(n), t)
                                              e._onScriptLoaded()
                                          }
                                      )
                                    : this._onScriptLoaded()
                            }
                        },
                    },
                    {
                        key: '_isInteractiveEvent',
                        value: function (e) {
                            var t
                            return (
                                e.type === Kn &&
                                -1 !== sr.indexOf(null === (t = e.data) || void 0 === t ? void 0 : t.source)
                            )
                        },
                    },
                    {
                        key: '_updateWindowAndSessionIds',
                        value: function (e) {
                            var t = this.getSessionManager()
                            if (t) {
                                var n = this._isInteractiveEvent(e)
                                if (
                                    (n ||
                                        this.isIdle ||
                                        (e.timestamp - this.lastActivityTimestamp > 3e5 && (this.isIdle = !0)),
                                    n &&
                                        ((this.lastActivityTimestamp = e.timestamp),
                                        this.isIdle && ((this.isIdle = !1), this._tryTakeFullSnapshot())),
                                    !this.isIdle)
                                ) {
                                    var r = t.checkAndGetSessionAndWindowId(!n, e.timestamp),
                                        i = r.windowId,
                                        o = r.sessionId
                                    ;-1 !== [Qn, Xn].indexOf(e.type) ||
                                        (this.windowId === i && this.sessionId === o) ||
                                        this._tryTakeFullSnapshot(),
                                        (this.windowId = i),
                                        (this.sessionId = o)
                                }
                            }
                        },
                    },
                    {
                        key: '_tryTakeFullSnapshot',
                        value: function () {
                            if (!this.captureStarted) return !1
                            try {
                                var e
                                return null === (e = this.rrwebRecord) || void 0 === e || e.takeFullSnapshot(), !0
                            } catch (e) {
                                return Et.error('Error taking full snapshot.', e), !1
                            }
                        },
                    },
                    {
                        key: '_onScriptLoaded',
                        value: function () {
                            var e,
                                t = this,
                                n = {
                                    blockClass: 'ph-no-capture',
                                    blockSelector: void 0,
                                    ignoreClass: 'ph-ignore-input',
                                    maskTextClass: 'ph-mask',
                                    maskTextSelector: void 0,
                                    maskTextFn: void 0,
                                    maskAllInputs: !0,
                                    maskInputOptions: {},
                                    maskInputFn: void 0,
                                    slimDOMOptions: {},
                                    collectFonts: !1,
                                    inlineStylesheet: !0,
                                    recordCrossOriginIframes: !1,
                                }
                            this.rrwebRecord = window.rrweb ? window.rrweb.record : window.rrwebRecord
                            for (
                                var r = this.instance.config.session_recording, i = 0, o = Object.entries(r || {});
                                i < o.length;
                                i++
                            ) {
                                var s = _(o[i], 2),
                                    u = s[0],
                                    c = s[1]
                                u in n && (n[u] = c)
                            }
                            this.rrwebRecord
                                ? ((this.mutationRateLimiter =
                                      null !== (e = this.mutationRateLimiter) && void 0 !== e
                                          ? e
                                          : new ir(this.rrwebRecord, {
                                                onBlockedNode: function (e, n) {
                                                    var r = "Too many mutations on node '".concat(
                                                        e,
                                                        "'. Rate limiting. This could be due to SVG animations or something similar"
                                                    )
                                                    Et.log(r, { node: n }), t.log('[PostHog Recorder] ' + r, 'warn')
                                                },
                                            })),
                                  (this.stopRrweb = this.rrwebRecord(
                                      a(
                                          {
                                              emit: function (e) {
                                                  t.onRRwebEmit(e)
                                              },
                                              plugins:
                                                  window.rrwebConsoleRecord && this.isConsoleLogCaptureEnabled()
                                                      ? [window.rrwebConsoleRecord.getRecordConsolePlugin()]
                                                      : [],
                                          },
                                          n
                                      )
                                  )),
                                  this.instance._addCaptureHook(function (e) {
                                      try {
                                          if ('$pageview' === e) {
                                              var n,
                                                  r = t._maskUrl(window.location.href)
                                              if (!r) return
                                              null === (n = t.rrwebRecord) ||
                                                  void 0 === n ||
                                                  n.addCustomEvent('$pageview', { href: r })
                                          }
                                      } catch (e) {
                                          Et.error('Could not add $pageview to rrweb session', e)
                                      }
                                  }),
                                  (this.lastActivityTimestamp = Date.now()),
                                  (this.isIdle = !1))
                                : Et.error(
                                      'onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.'
                                  )
                        },
                    },
                    {
                        key: 'onRRwebEmit',
                        value: function (e) {
                            if (e && 'object' === s(e)) {
                                if (e.type === or.Meta) {
                                    var t = this._maskUrl(e.data.href)
                                    if (!t) return
                                    e.data.href = t
                                }
                                var n = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e) : e
                                if (n) {
                                    var r = (function (e) {
                                            var t = JSON.stringify(e)
                                            if (t.length > tr) {
                                                var n,
                                                    r = k(t.matchAll(/data:([\w/\-.]+);(\w+),([^)"]*)/gim))
                                                try {
                                                    for (r.s(); !(n = r.n()).done; ) {
                                                        var i = n.value
                                                        t =
                                                            'image/' === i[1].toLocaleLowerCase().slice(0, 6)
                                                                ? t.replace(i[0], Jn)
                                                                : t.replace(i[0], '')
                                                    }
                                                } catch (e) {
                                                    r.e(e)
                                                } finally {
                                                    r.f()
                                                }
                                            }
                                            return { event: JSON.parse(t), size: t.length }
                                        })(
                                            (function (e) {
                                                var t = e
                                                if (
                                                    t &&
                                                    'object' === s(t) &&
                                                    t.type === Zn &&
                                                    'object' === s(t.data) &&
                                                    t.data.plugin === nr
                                                ) {
                                                    t.data.payload.payload.length > 10 &&
                                                        ((t.data.payload.payload = t.data.payload.payload.slice(0, 10)),
                                                        t.data.payload.payload.push('...[truncated]'))
                                                    for (var n = [], r = 0; r < t.data.payload.payload.length; r++)
                                                        t.data.payload.payload[r] &&
                                                        t.data.payload.payload[r].length > 2e3
                                                            ? n.push(
                                                                  t.data.payload.payload[r].slice(0, 2e3) +
                                                                      '...[truncated]'
                                                              )
                                                            : n.push(t.data.payload.payload[r])
                                                    return (t.data.payload.payload = n), e
                                                }
                                                return e
                                            })(n)
                                        ),
                                        i = r.event,
                                        o = r.size
                                    if ((this._updateWindowAndSessionIds(i), !this.isIdle)) {
                                        var a = {
                                            $snapshot_bytes: o,
                                            $snapshot_data: i,
                                            $session_id: this.sessionId,
                                            $window_id: this.windowId,
                                        }
                                        this.emit ? this._captureSnapshotBuffered(a) : this.snapshots.push(a)
                                    }
                                }
                            }
                        },
                    },
                    {
                        key: '_maskUrl',
                        value: function (e) {
                            var t = this.instance.config.session_recording
                            if (t.maskNetworkRequestFn) {
                                var n,
                                    r = { url: e }
                                return null === (n = r = t.maskNetworkRequestFn(r)) || void 0 === n ? void 0 : n.url
                            }
                            return e
                        },
                    },
                    {
                        key: '_flushBuffer',
                        value: function () {
                            var e = this
                            return (
                                this.flushBufferTimer &&
                                    (clearTimeout(this.flushBufferTimer), (this.flushBufferTimer = void 0)),
                                this.buffer &&
                                    0 !== this.buffer.data.length &&
                                    this.savedSnapshots.push({
                                        $snapshot_bytes: this.buffer.size,
                                        $snapshot_data: this.buffer.data,
                                        $session_id: this.buffer.sessionId,
                                        $window_id: this.buffer.windowId,
                                    }),
                                this.buffer &&
                                    0 !== this.buffer.data.length &&
                                    this.instance.config.send_nms_recording &&
                                    this.savedSnapshots.forEach(function (t) {
                                        e._captureSnapshot(t)
                                    }),
                                (this.buffer = void 0),
                                { size: 0, data: [], sessionId: this.sessionId, windowId: this.windowId }
                            )
                        },
                    },
                    {
                        key: '_captureSnapshotBuffered',
                        value: function (e) {
                            var t,
                                n = this,
                                r = 2 + ((null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) || 0)
                            ;(!this.buffer ||
                                this.buffer.size + e.$snapshot_bytes + r > 943718.4 ||
                                this.buffer.sessionId !== this.sessionId) &&
                                (this.buffer = this._flushBuffer()),
                                (this.buffer.size += e.$snapshot_bytes),
                                this.buffer.data.push(e.$snapshot_data),
                                this.flushBufferTimer ||
                                    (this.flushBufferTimer = setTimeout(function () {
                                        n._flushBuffer()
                                    }, 2e3))
                        },
                    },
                    {
                        key: '_captureSnapshot',
                        value: function (e) {
                            this.instance.capture('$snapshot', e, {
                                transport: 'XHR',
                                method: 'POST',
                                endpoint: this.endpoint,
                                _noTruncate: !0,
                                _batchKey: 'recordings',
                                _metrics: { rrweb_full_snapshot: e.$snapshot_data.type === Qn },
                            })
                        },
                    },
                ]),
                e
            )
        })(),
        cr = {
            entryType: 0,
            timeOrigin: 1,
            name: 2,
            startTime: 3,
            redirectStart: 4,
            redirectEnd: 5,
            workerStart: 6,
            fetchStart: 7,
            domainLookupStart: 8,
            domainLookupEnd: 9,
            connectStart: 10,
            secureConnectionStart: 11,
            connectEnd: 12,
            requestStart: 13,
            responseStart: 14,
            responseEnd: 15,
            decodedBodySize: 16,
            encodedBodySize: 17,
            initiatorType: 18,
            nextHopProtocol: 19,
            renderBlockingStatus: 20,
            responseStatus: 21,
            transferSize: 22,
            element: 23,
            renderTime: 24,
            loadTime: 25,
            size: 26,
            id: 27,
            url: 28,
            domComplete: 29,
            domContentLoadedEvent: 30,
            domInteractive: 31,
            loadEventEnd: 32,
            loadEventStart: 33,
            redirectCount: 34,
            navigationType: 35,
            unloadEventEnd: 36,
            unloadEventStart: 37,
            duration: 39,
            timestamp: 40,
        },
        lr = ['first-input', 'navigation', 'paint', 'resource'],
        dr = ['/s/', '/e/'],
        fr = (function () {
            function e(t) {
                u(this, e), d(this, '_forceAllowLocalhost', !1), (this.instance = t)
            }
            return (
                l(e, [
                    {
                        key: 'startObservingIfEnabled',
                        value: function () {
                            this.isEnabled() ? this.startObserving() : this.stopObserving()
                        },
                    },
                    {
                        key: 'startObserving',
                        value: function () {
                            var e,
                                t,
                                n = this
                            if (!this.observer)
                                if (
                                    void 0 !==
                                    (null === (e = window) ||
                                    void 0 === e ||
                                    null === (t = e.PerformanceObserver) ||
                                    void 0 === t
                                        ? void 0
                                        : t.supportedEntryTypes)
                                )
                                    if (!bt.includes(location.hostname) || this._forceAllowLocalhost)
                                        try {
                                            this.observer = new PerformanceObserver(function (e) {
                                                e.getEntries().forEach(function (e) {
                                                    n._capturePerformanceEvent(e)
                                                })
                                            })
                                            var r = PerformanceObserver.supportedEntryTypes.filter(function (e) {
                                                return lr.includes(e)
                                            })
                                            r.forEach(function (e) {
                                                var t
                                                null === (t = n.observer) ||
                                                    void 0 === t ||
                                                    t.observe({ type: e, buffered: !0 })
                                            })
                                        } catch (e) {
                                            console.error('PostHog failed to start performance observer', e),
                                                this.stopObserving()
                                        }
                                    else Et.log('PostHog Peformance observer not started because we are on localhost.')
                                else
                                    Et.log(
                                        'PostHog Performance observer not started because PerformanceObserver is not supported by this browser.'
                                    )
                        },
                    },
                    {
                        key: 'stopObserving',
                        value: function () {
                            this.observer && (this.observer.disconnect(), (this.observer = void 0))
                        },
                    },
                    {
                        key: 'isObserving',
                        value: function () {
                            return !!this.observer
                        },
                    },
                    {
                        key: 'isEnabled',
                        value: function () {
                            var e, t
                            return (
                                null !==
                                    (e =
                                        null !== (t = this.instance.config.capture_performance) && void 0 !== t
                                            ? t
                                            : this.remoteEnabled) &&
                                void 0 !== e &&
                                e
                            )
                        },
                    },
                    {
                        key: 'afterDecideResponse',
                        value: function (e) {
                            ;(this.remoteEnabled = e.capturePerformance || !1),
                                this.isEnabled() && this.startObserving()
                        },
                    },
                    {
                        key: '_capturePerformanceEvent',
                        value: function (e) {
                            if (0 === e.name.indexOf(this.instance.config.api_host)) {
                                var t = e.name.replace(this.instance.config.api_host, '')
                                if (
                                    dr.find(function (e) {
                                        return 0 === t.indexOf(e)
                                    })
                                )
                                    return
                            }
                            var n = { url: e.name },
                                r = this.instance.config.session_recording
                            if ((r.maskNetworkRequestFn && (n = r.maskNetworkRequestFn(n)), n)) {
                                var i = e.toJSON()
                                i.name = n.url
                                var o = {},
                                    a = Math.floor(Date.now() - performance.now())
                                for (var s in ((o[cr.timeOrigin] = a),
                                (o[cr.timestamp] = Math.floor(a + e.startTime)),
                                cr))
                                    void 0 !== i[s] && (o[cr[s]] = i[s])
                                if ((this.capturePerformanceEvent(o), pr(e))) {
                                    var u,
                                        c = k(e.serverTiming || [])
                                    try {
                                        for (c.s(); !(u = c.n()).done; ) {
                                            var l,
                                                f = u.value
                                            this.capturePerformanceEvent(
                                                (d((l = {}), cr.timeOrigin, a),
                                                d(l, cr.timestamp, Math.floor(a + e.startTime)),
                                                d(l, cr.name, f.name),
                                                d(l, cr.duration, f.duration),
                                                d(l, cr.entryType, 'serverTiming'),
                                                l)
                                            )
                                        }
                                    } catch (e) {
                                        c.e(e)
                                    } finally {
                                        c.f()
                                    }
                                }
                            }
                        },
                    },
                    {
                        key: 'capturePerformanceEvent',
                        value: function (e) {
                            var t,
                                n = e[cr.timestamp]
                            null === (t = this.instance.sessionRecording) ||
                                void 0 === t ||
                                t.onRRwebEmit({
                                    type: 6,
                                    data: { plugin: 'posthog/network@1', payload: e },
                                    timestamp: n,
                                })
                        },
                    },
                ]),
                e
            )
        })(),
        pr = function (e) {
            return 'navigation' === e.entryType || 'resource' === e.entryType
        },
        hr = (function () {
            function e(t) {
                u(this, e),
                    (this.instance = t),
                    (this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags())
            }
            return (
                l(e, [
                    {
                        key: 'call',
                        value: function () {
                            var e = this,
                                t = zt(
                                    JSON.stringify({
                                        token: this.instance.config.token,
                                        distinct_id: this.instance.get_distinct_id(),
                                        groups: this.instance.getGroups(),
                                        person_properties: this.instance.get_property(Sn),
                                        group_properties: this.instance.get_property(xn),
                                        disable_flags:
                                            this.instance.config.advanced_disable_feature_flags ||
                                            this.instance.config.advanced_disable_feature_flags_on_first_load ||
                                            void 0,
                                    })
                                )
                            this.instance._send_request(
                                ''.concat(this.instance.config.api_host, '/decide/?v=3'),
                                { data: t, verbose: !0 },
                                { method: 'POST' },
                                function (t) {
                                    return e.parseDecideResponse(t)
                                }
                            )
                        },
                    },
                    {
                        key: 'parseDecideResponse',
                        value: function (e) {
                            var t,
                                n,
                                r,
                                i,
                                o = this
                            if (
                                (this.instance.featureFlags.setReloadingPaused(!1),
                                this.instance.featureFlags._startReloadTimer(),
                                0 !== (null == e ? void 0 : e.status))
                            ) {
                                if (!document || !document.body)
                                    return (
                                        console.log('document not ready yet, trying again in 500 milliseconds...'),
                                        void setTimeout(function () {
                                            o.parseDecideResponse(e)
                                        }, 500)
                                    )
                                if (
                                    (this.instance.toolbar.afterDecideResponse(e),
                                    null === (t = this.instance.sessionRecording) ||
                                        void 0 === t ||
                                        t.afterDecideResponse(e),
                                    Mn.afterDecideResponse(e, this.instance),
                                    null === (n = this.instance.webPerformance) ||
                                        void 0 === n ||
                                        n.afterDecideResponse(e),
                                    null === (r = this.instance.exceptionAutocapture) ||
                                        void 0 === r ||
                                        r.afterDecideResponse(e),
                                    this.instance.config.advanced_disable_feature_flags_on_first_load ||
                                        this.instance.featureFlags.receivedFeatureFlags(e),
                                    (this.instance.compression = {}),
                                    e.supportedCompression && !this.instance.config.disable_compression)
                                ) {
                                    var a,
                                        s = {},
                                        u = k(e.supportedCompression)
                                    try {
                                        for (u.s(); !(a = u.n()).done; ) {
                                            s[a.value] = !0
                                        }
                                    } catch (e) {
                                        u.e(e)
                                    } finally {
                                        u.f()
                                    }
                                    this.instance.compression = s
                                }
                                var c = null === (i = window) || void 0 === i ? void 0 : i.extendPostHogWithSurveys
                                if (
                                    (e.surveys &&
                                        !c &&
                                        Xt(this.instance.config.api_host + '/static/surveys.js', function (e) {
                                            if (e) return console.error('Could not load surveys script', e)
                                            window.extendPostHogWithSurveys(o.instance)
                                        }),
                                    e.siteApps)
                                )
                                    if (this.instance.config.opt_in_site_apps) {
                                        var l,
                                            d = this.instance.config.api_host,
                                            f = k(e.siteApps)
                                        try {
                                            var p = function () {
                                                var e = l.value,
                                                    t = e.id,
                                                    n = e.url,
                                                    r = [
                                                        d,
                                                        '/' === d[d.length - 1] && '/' === n[0] ? n.substring(1) : n,
                                                    ].join('')
                                                ;(window['__$$ph_site_app_'.concat(t)] = o.instance),
                                                    Xt(r, function (e) {
                                                        e &&
                                                            console.error(
                                                                'Error while initializing PostHog app with config id '.concat(
                                                                    t
                                                                ),
                                                                e
                                                            )
                                                    })
                                            }
                                            for (f.s(); !(l = f.n()).done; ) p()
                                        } catch (e) {
                                            f.e(e)
                                        } finally {
                                            f.f()
                                        }
                                    } else
                                        e.siteApps.length > 0 &&
                                            console.error(
                                                'PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.'
                                            )
                            } else console.error('Failed to fetch feature flags from PostHog.')
                        },
                    },
                ]),
                e
            )
        })(),
        vr = ['https://app.posthog.com', 'https://eu.posthog.com'],
        gr = ['source'],
        mr = (function () {
            function e(t) {
                u(this, e), (this.instance = t)
            }
            return (
                l(e, [
                    {
                        key: 'afterDecideResponse',
                        value: function (e) {
                            var t =
                                e.toolbarParams ||
                                e.editorParams ||
                                (e.toolbarVersion ? { toolbarVersion: e.toolbarVersion } : {})
                            e.isAuthenticated &&
                                t.toolbarVersion &&
                                0 === t.toolbarVersion.indexOf('toolbar') &&
                                this.loadToolbar(a({}, t))
                        },
                    },
                    {
                        key: 'maybeLoadToolbar',
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.history
                            try {
                                if (!t) {
                                    try {
                                        window.localStorage.setItem('test', 'test'),
                                            window.localStorage.removeItem('test')
                                    } catch (e) {
                                        return !1
                                    }
                                    t = window.localStorage
                                }
                                var r,
                                    i = Jt(e.hash, '__posthog') || Jt(e.hash, 'state'),
                                    o = i ? JSON.parse(decodeURIComponent(i)) : null
                                return (
                                    o && 'ph_authorize' === o.action
                                        ? (((r = o).source = 'url'),
                                          r &&
                                              Object.keys(r).length > 0 &&
                                              (o.desiredHash
                                                  ? (e.hash = o.desiredHash)
                                                  : n
                                                  ? n.replaceState('', document.title, e.pathname + e.search)
                                                  : (e.hash = '')))
                                        : (((r = JSON.parse(t.getItem('_postHogToolbarParams') || '{}')).source =
                                              'localstorage'),
                                          delete r.userIntent),
                                    !(!r.token || this.instance.config.token !== r.token) && (this.loadToolbar(r), !0)
                                )
                            } catch (e) {
                                return !1
                            }
                        },
                    },
                    {
                        key: 'loadToolbar',
                        value: function (e) {
                            var t = this
                            if (window._postHogToolbarLoaded) return !1
                            window._postHogToolbarLoaded = !0
                            var n = this.instance.config.api_host,
                                r = 3e5,
                                i = Math.floor(Date.now() / r) * r,
                                o = ''
                                    .concat(n)
                                    .concat(n.endsWith('/') ? '' : '/', 'static/toolbar.js?t=')
                                    .concat(i),
                                s =
                                    !vr.includes(this.instance.config.api_host) &&
                                    this.instance.config.advanced_disable_toolbar_metrics,
                                u = a(
                                    a({ token: this.instance.config.token }, e),
                                    {},
                                    { apiURL: n },
                                    s ? { instrument: !1 } : {}
                                )
                            u.source
                            var c = v(u, gr)
                            return (
                                window.localStorage.setItem('_postHogToolbarParams', JSON.stringify(c)),
                                Xt(o, function (e) {
                                    e
                                        ? Et.error('Failed to load toolbar', e)
                                        : (window.ph_load_toolbar || window.ph_load_editor)(u, t.instance)
                                }),
                                Qt(window, 'turbolinks:load', function () {
                                    ;(window._postHogToolbarLoaded = !1), t.loadToolbar(u)
                                }),
                                !0
                            )
                        },
                    },
                    {
                        key: '_loadEditor',
                        value: function (e) {
                            return this.loadToolbar(e)
                        },
                    },
                    {
                        key: 'maybeLoadEditor',
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.history
                            return this.maybeLoadToolbar(e, t, n)
                        },
                    },
                ]),
                e
            )
        })(),
        _r = '__ph_opt_in_out_'
    function yr(e, t) {
        Ir(!0, e, t)
    }
    function br(e, t) {
        Ir(!1, e, t)
    }
    function wr(e, t) {
        return '1' === Cr(e, t)
    }
    function kr(e, t) {
        return (
            !!(function (e) {
                if (e && e.respectDnt) {
                    var t = (e && e.window) || gt,
                        n = t.navigator || {},
                        r = !1
                    return (
                        Ot([n.doNotTrack, n.msDoNotTrack, t.doNotTrack], function (e) {
                            Pt([!0, 1, '1', 'yes'], e) && (r = !0)
                        }),
                        r
                    )
                }
                return !1
            })(t) || '0' === Cr(e, t)
        )
    }
    function Sr(e, t) {
        xr((t = t || {})).remove(Er(e, t), !!t.crossSubdomainCookie)
    }
    function xr(e) {
        return 'localStorage' === (e = e || {}).persistenceType
            ? Hn
            : 'localStorage+cookie' === e.persistenceType
            ? qn
            : $n
    }
    function Er(e, t) {
        return ((t = t || {}).persistencePrefix || _r) + e
    }
    function Cr(e, t) {
        return xr(t).get(Er(e, t))
    }
    function Ir(e, t, n) {
        Lt(t) && t.length
            ? (xr((n = n || {})).set(
                  Er(t, n),
                  e ? 1 : 0,
                  At(n.cookieExpiration) ? n.cookieExpiration : null,
                  n.crossSubdomainCookie,
                  n.secureCookie
              ),
              n.capture &&
                  e &&
                  n.capture(n.captureEventName || '$opt_in', n.captureProperties || {}, { send_instantly: !0 }))
            : console.error('gdpr.' + (e ? 'optIn' : 'optOut') + ' called with an invalid token')
    }
    var Or = (function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3
                u(this, e),
                    (this.isPolling = !0),
                    (this._event_queue = []),
                    (this._empty_queue_count = 0),
                    (this._poller = void 0),
                    (this._pollInterval = t)
            }
            return (
                l(e, [
                    {
                        key: 'setPollInterval',
                        value: function (e) {
                            ;(this._pollInterval = e), this.isPolling && this.poll()
                        },
                    },
                    { key: 'poll', value: function () {} },
                    { key: 'unload', value: function () {} },
                    {
                        key: 'getTime',
                        value: function () {
                            return new Date().getTime()
                        },
                    },
                ]),
                e
            )
        })(),
        Tr = (function (e) {
            f(n, e)
            var t = m(n)
            function n(e) {
                var r,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3
                return u(this, n), ((r = t.call(this, i)).handlePollRequest = e), r
            }
            return (
                l(n, [
                    {
                        key: 'enqueue',
                        value: function (e, t, n) {
                            this._event_queue.push({ url: e, data: t, options: n }),
                                this.isPolling || ((this.isPolling = !0), this.poll())
                        },
                    },
                    {
                        key: 'poll',
                        value: function () {
                            var e = this
                            clearTimeout(this._poller),
                                (this._poller = setTimeout(function () {
                                    if (e._event_queue.length > 0) {
                                        var t = e.formatQueue(),
                                            n = function (n) {
                                                var r = t[n],
                                                    i = r.url,
                                                    o = r.data,
                                                    a = r.options
                                                Ot(o, function (t, n) {
                                                    ;(o[n].offset = Math.abs(o[n].timestamp - e.getTime())),
                                                        delete o[n].timestamp
                                                }),
                                                    e.handlePollRequest(i, o, a)
                                            }
                                        for (var r in t) n(r)
                                        ;(e._event_queue.length = 0), (e._empty_queue_count = 0)
                                    } else e._empty_queue_count++
                                    e._empty_queue_count > 4 && ((e.isPolling = !1), (e._empty_queue_count = 0)),
                                        e.isPolling && e.poll()
                                }, this._pollInterval))
                        },
                    },
                    {
                        key: 'unload',
                        value: function () {
                            var e = this
                            clearTimeout(this._poller)
                            var t = this._event_queue.length > 0 ? this.formatQueue() : {}
                            this._event_queue.length = 0
                            var n = Object.values(t)
                            ;[]
                                .concat(
                                    y(
                                        n.filter(function (e) {
                                            return 0 === e.url.indexOf('/e')
                                        })
                                    ),
                                    y(
                                        n.filter(function (e) {
                                            return 0 !== e.url.indexOf('/e')
                                        })
                                    )
                                )
                                .map(function (t) {
                                    var n = t.url,
                                        r = t.data,
                                        i = t.options
                                    e.handlePollRequest(n, r, a(a({}, i), {}, { transport: 'sendBeacon' }))
                                })
                        },
                    },
                    {
                        key: 'formatQueue',
                        value: function () {
                            var e = {}
                            return (
                                Ot(this._event_queue, function (t) {
                                    var n = t.url,
                                        r = t.data,
                                        i = t.options,
                                        o = (i ? i._batchKey : null) || n
                                    void 0 === e[o] && (e[o] = { data: [], url: n, options: i }),
                                        i &&
                                            e[o].options &&
                                            e[o].options._metrics &&
                                            !e[o].options._metrics.rrweb_full_snapshot &&
                                            (e[o].options._metrics.rrweb_full_snapshot =
                                                i._metrics.rrweb_full_snapshot),
                                        e[o].data.push(r)
                                }),
                                e
                            )
                        },
                    },
                ]),
                n
            )
        })(Or),
        Fr = Uint8Array,
        Mr = Uint16Array,
        Pr = Uint32Array,
        Rr = new Fr([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        Nr = new Fr([
            0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0,
        ]),
        Dr = new Fr([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        Lr = function (e, t) {
            for (var n = new Mr(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1]
            var i = new Pr(n[30])
            for (r = 1; r < 30; ++r) for (var o = n[r]; o < n[r + 1]; ++o) i[o] = ((o - n[r]) << 5) | r
            return [n, i]
        },
        Ar = Lr(Rr, 2),
        $r = Ar[0],
        jr = Ar[1]
    ;($r[28] = 258), (jr[258] = 28)
    for (var Hr = Lr(Nr, 0)[1], Br = new Mr(32768), qr = 0; qr < 32768; ++qr) {
        var Ur = ((43690 & qr) >>> 1) | ((21845 & qr) << 1)
        ;(Ur = ((61680 & (Ur = ((52428 & Ur) >>> 2) | ((13107 & Ur) << 2))) >>> 4) | ((3855 & Ur) << 4)),
            (Br[qr] = (((65280 & Ur) >>> 8) | ((255 & Ur) << 8)) >>> 1)
    }
    var zr = function (e, t, n) {
            for (var r = e.length, i = 0, o = new Mr(t); i < r; ++i) ++o[e[i] - 1]
            var a,
                s = new Mr(t)
            for (i = 0; i < t; ++i) s[i] = (s[i - 1] + o[i - 1]) << 1
            if (n) {
                a = new Mr(1 << t)
                var u = 15 - t
                for (i = 0; i < r; ++i)
                    if (e[i])
                        for (
                            var c = (i << 4) | e[i], l = t - e[i], d = s[e[i] - 1]++ << l, f = d | ((1 << l) - 1);
                            d <= f;
                            ++d
                        )
                            a[Br[d] >>> u] = c
            } else for (a = new Mr(r), i = 0; i < r; ++i) a[i] = Br[s[e[i] - 1]++] >>> (15 - e[i])
            return a
        },
        Wr = new Fr(288)
    for (qr = 0; qr < 144; ++qr) Wr[qr] = 8
    for (qr = 144; qr < 256; ++qr) Wr[qr] = 9
    for (qr = 256; qr < 280; ++qr) Wr[qr] = 7
    for (qr = 280; qr < 288; ++qr) Wr[qr] = 8
    var Vr = new Fr(32)
    for (qr = 0; qr < 32; ++qr) Vr[qr] = 5
    var Gr,
        Yr = zr(Wr, 9, 0),
        Jr = zr(Vr, 5, 0),
        Qr = function (e) {
            return ((e / 8) >> 0) + (7 & e && 1)
        },
        Xr = function (e, t, n) {
            ;(null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length)
            var r = new (e instanceof Mr ? Mr : e instanceof Pr ? Pr : Fr)(n - t)
            return r.set(e.subarray(t, n)), r
        },
        Kr = function (e, t, n) {
            n <<= 7 & t
            var r = (t / 8) >> 0
            ;(e[r] |= n), (e[r + 1] |= n >>> 8)
        },
        Zr = function (e, t, n) {
            n <<= 7 & t
            var r = (t / 8) >> 0
            ;(e[r] |= n), (e[r + 1] |= n >>> 8), (e[r + 2] |= n >>> 16)
        },
        ei = function (e, t) {
            for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({ s: r, f: e[r] })
            var i = n.length,
                o = n.slice()
            if (!i) return [new Fr(0), 0]
            if (1 == i) {
                var a = new Fr(n[0].s + 1)
                return (a[n[0].s] = 1), [a, 1]
            }
            n.sort(function (e, t) {
                return e.f - t.f
            }),
                n.push({ s: -1, f: 25001 })
            var s = n[0],
                u = n[1],
                c = 0,
                l = 1,
                d = 2
            for (n[0] = { s: -1, f: s.f + u.f, l: s, r: u }; l != i - 1; )
                (s = n[n[c].f < n[d].f ? c++ : d++]),
                    (u = n[c != l && n[c].f < n[d].f ? c++ : d++]),
                    (n[l++] = { s: -1, f: s.f + u.f, l: s, r: u })
            var f = o[0].s
            for (r = 1; r < i; ++r) o[r].s > f && (f = o[r].s)
            var p = new Mr(f + 1),
                h = ti(n[l - 1], p, 0)
            if (h > t) {
                r = 0
                var v = 0,
                    g = h - t,
                    m = 1 << g
                for (
                    o.sort(function (e, t) {
                        return p[t.s] - p[e.s] || e.f - t.f
                    });
                    r < i;
                    ++r
                ) {
                    var _ = o[r].s
                    if (!(p[_] > t)) break
                    ;(v += m - (1 << (h - p[_]))), (p[_] = t)
                }
                for (v >>>= g; v > 0; ) {
                    var y = o[r].s
                    p[y] < t ? (v -= 1 << (t - p[y]++ - 1)) : ++r
                }
                for (; r >= 0 && v; --r) {
                    var b = o[r].s
                    p[b] == t && (--p[b], ++v)
                }
                h = t
            }
            return [new Fr(p), h]
        },
        ti = function e(t, n, r) {
            return -1 == t.s ? Math.max(e(t.l, n, r + 1), e(t.r, n, r + 1)) : (n[t.s] = r)
        },
        ni = function (e) {
            for (var t = e.length; t && !e[--t]; );
            for (
                var n = new Mr(++t),
                    r = 0,
                    i = e[0],
                    o = 1,
                    a = function (e) {
                        n[r++] = e
                    },
                    s = 1;
                s <= t;
                ++s
            )
                if (e[s] == i && s != t) ++o
                else {
                    if (!i && o > 2) {
                        for (; o > 138; o -= 138) a(32754)
                        o > 2 && (a(o > 10 ? ((o - 11) << 5) | 28690 : ((o - 3) << 5) | 12305), (o = 0))
                    } else if (o > 3) {
                        for (a(i), --o; o > 6; o -= 6) a(8304)
                        o > 2 && (a(((o - 3) << 5) | 8208), (o = 0))
                    }
                    for (; o--; ) a(i)
                    ;(o = 1), (i = e[s])
                }
            return [n.subarray(0, r), t]
        },
        ri = function (e, t) {
            for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r]
            return n
        },
        ii = function (e, t, n) {
            var r = n.length,
                i = Qr(t + 2)
            ;(e[i] = 255 & r), (e[i + 1] = r >>> 8), (e[i + 2] = 255 ^ e[i]), (e[i + 3] = 255 ^ e[i + 1])
            for (var o = 0; o < r; ++o) e[i + o + 4] = n[o]
            return 8 * (i + 4 + r)
        },
        oi = function (e, t, n, r, i, o, a, s, u, c, l) {
            Kr(t, l++, n), ++i[256]
            for (
                var d = ei(i, 15),
                    f = d[0],
                    p = d[1],
                    h = ei(o, 15),
                    v = h[0],
                    g = h[1],
                    m = ni(f),
                    _ = m[0],
                    y = m[1],
                    b = ni(v),
                    w = b[0],
                    k = b[1],
                    S = new Mr(19),
                    x = 0;
                x < _.length;
                ++x
            )
                S[31 & _[x]]++
            for (x = 0; x < w.length; ++x) S[31 & w[x]]++
            for (var E = ei(S, 7), C = E[0], I = E[1], O = 19; O > 4 && !C[Dr[O - 1]]; --O);
            var T,
                F,
                M,
                P,
                R = (c + 5) << 3,
                N = ri(i, Wr) + ri(o, Vr) + a,
                D = ri(i, f) + ri(o, v) + a + 14 + 3 * O + ri(S, C) + (2 * S[16] + 3 * S[17] + 7 * S[18])
            if (R <= N && R <= D) return ii(t, l, e.subarray(u, u + c))
            if ((Kr(t, l, 1 + (D < N)), (l += 2), D < N)) {
                ;(T = zr(f, p, 0)), (F = f), (M = zr(v, g, 0)), (P = v)
                var L = zr(C, I, 0)
                Kr(t, l, y - 257), Kr(t, l + 5, k - 1), Kr(t, l + 10, O - 4), (l += 14)
                for (x = 0; x < O; ++x) Kr(t, l + 3 * x, C[Dr[x]])
                l += 3 * O
                for (var A = [_, w], $ = 0; $ < 2; ++$) {
                    var j = A[$]
                    for (x = 0; x < j.length; ++x) {
                        var H = 31 & j[x]
                        Kr(t, l, L[H]), (l += C[H]), H > 15 && (Kr(t, l, (j[x] >>> 5) & 127), (l += j[x] >>> 12))
                    }
                }
            } else (T = Yr), (F = Wr), (M = Jr), (P = Vr)
            for (x = 0; x < s; ++x)
                if (r[x] > 255) {
                    H = (r[x] >>> 18) & 31
                    Zr(t, l, T[H + 257]), (l += F[H + 257]), H > 7 && (Kr(t, l, (r[x] >>> 23) & 31), (l += Rr[H]))
                    var B = 31 & r[x]
                    Zr(t, l, M[B]), (l += P[B]), B > 3 && (Zr(t, l, (r[x] >>> 5) & 8191), (l += Nr[B]))
                } else Zr(t, l, T[r[x]]), (l += F[r[x]])
            return Zr(t, l, T[256]), l + F[256]
        },
        ai = new Pr([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
        si = new Fr(0),
        ui = (function () {
            for (var e = new Pr(256), t = 0; t < 256; ++t) {
                for (var n = t, r = 9; --r; ) n = (1 & n && 3988292384) ^ (n >>> 1)
                e[t] = n
            }
            return e
        })(),
        ci = function () {
            var e = 4294967295
            return {
                p: function (t) {
                    for (var n = e, r = 0; r < t.length; ++r) n = ui[(255 & n) ^ t[r]] ^ (n >>> 8)
                    e = n
                },
                d: function () {
                    return 4294967295 ^ e
                },
            }
        },
        li = function (e, t, n, r, i) {
            return (function (e, t, n, r, i, o) {
                var a = e.length,
                    s = new Fr(r + a + 5 * (1 + Math.floor(a / 7e3)) + i),
                    u = s.subarray(r, s.length - i),
                    c = 0
                if (!t || a < 8)
                    for (var l = 0; l <= a; l += 65535) {
                        var d = l + 65535
                        d < a ? (c = ii(u, c, e.subarray(l, d))) : ((u[l] = o), (c = ii(u, c, e.subarray(l, a))))
                    }
                else {
                    for (
                        var f = ai[t - 1],
                            p = f >>> 13,
                            h = 8191 & f,
                            v = (1 << n) - 1,
                            g = new Mr(32768),
                            m = new Mr(v + 1),
                            _ = Math.ceil(n / 3),
                            y = 2 * _,
                            b = function (t) {
                                return (e[t] ^ (e[t + 1] << _) ^ (e[t + 2] << y)) & v
                            },
                            w = new Pr(25e3),
                            k = new Mr(288),
                            S = new Mr(32),
                            x = 0,
                            E = 0,
                            C = ((l = 0), 0),
                            I = 0,
                            O = 0;
                        l < a;
                        ++l
                    ) {
                        var T = b(l),
                            F = 32767 & l,
                            M = m[T]
                        if (((g[F] = M), (m[T] = F), I <= l)) {
                            var P = a - l
                            if ((x > 7e3 || C > 24576) && P > 423) {
                                ;(c = oi(e, u, 0, w, k, S, E, C, O, l - O, c)), (C = x = E = 0), (O = l)
                                for (var R = 0; R < 286; ++R) k[R] = 0
                                for (R = 0; R < 30; ++R) S[R] = 0
                            }
                            var N = 2,
                                D = 0,
                                L = h,
                                A = (F - M) & 32767
                            if (P > 2 && T == b(l - A))
                                for (
                                    var $ = Math.min(p, P) - 1, j = Math.min(32767, l), H = Math.min(258, P);
                                    A <= j && --L && F != M;

                                ) {
                                    if (e[l + N] == e[l + N - A]) {
                                        for (var B = 0; B < H && e[l + B] == e[l + B - A]; ++B);
                                        if (B > N) {
                                            if (((N = B), (D = A), B > $)) break
                                            var q = Math.min(A, B - 2),
                                                U = 0
                                            for (R = 0; R < q; ++R) {
                                                var z = (l - A + R + 32768) & 32767,
                                                    W = (z - g[z] + 32768) & 32767
                                                W > U && ((U = W), (M = z))
                                            }
                                        }
                                    }
                                    A += ((F = M) - (M = g[F]) + 32768) & 32767
                                }
                            if (D) {
                                w[C++] = 268435456 | (jr[N] << 18) | Hr[D]
                                var V = 31 & jr[N],
                                    G = 31 & Hr[D]
                                ;(E += Rr[V] + Nr[G]), ++k[257 + V], ++S[G], (I = l + N), ++x
                            } else (w[C++] = e[l]), ++k[e[l]]
                        }
                    }
                    ;(c = oi(e, u, o, w, k, S, E, C, O, l - O, c)), o || (c = ii(u, c, si))
                }
                return Xr(s, 0, r + Qr(c) + i)
            })(
                e,
                null == t.level ? 6 : t.level,
                null == t.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + t.mem,
                n,
                r,
                !i
            )
        },
        di = function (e, t, n) {
            for (; n; ++t) (e[t] = n), (n >>>= 8)
        },
        fi = function (e, t) {
            var n = t.filename
            if (
                ((e[0] = 31),
                (e[1] = 139),
                (e[2] = 8),
                (e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0),
                (e[9] = 3),
                0 != t.mtime && di(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)),
                n)
            ) {
                e[3] = 8
                for (var r = 0; r <= n.length; ++r) e[r + 10] = n.charCodeAt(r)
            }
        },
        pi = function (e) {
            return 10 + ((e.filename && e.filename.length + 1) || 0)
        }
    function hi(e, t) {
        void 0 === t && (t = {})
        var n = ci(),
            r = e.length
        n.p(e)
        var i = li(e, t, pi(t), 8),
            o = i.length
        return fi(i, t), di(i, o - 8, n.d()), di(i, o - 4, r), i
    }
    function vi(e, t) {
        var n = e.length
        if (!t && 'undefined' != typeof TextEncoder) return new TextEncoder().encode(e)
        for (
            var r = new Fr(e.length + (e.length >>> 1)),
                i = 0,
                o = function (e) {
                    r[i++] = e
                },
                a = 0;
            a < n;
            ++a
        ) {
            if (i + 5 > r.length) {
                var s = new Fr(i + 8 + ((n - a) << 1))
                s.set(r), (r = s)
            }
            var u = e.charCodeAt(a)
            u < 128 || t
                ? o(u)
                : u < 2048
                ? (o(192 | (u >>> 6)), o(128 | (63 & u)))
                : u > 55295 && u < 57344
                ? (o(240 | ((u = (65536 + (1047552 & u)) | (1023 & e.charCodeAt(++a))) >>> 18)),
                  o(128 | ((u >>> 12) & 63)),
                  o(128 | ((u >>> 6) & 63)),
                  o(128 | (63 & u)))
                : (o(224 | (u >>> 12)), o(128 | ((u >>> 6) & 63)), o(128 | (63 & u)))
        }
        return Xr(r, 0, i)
    }
    !(function (e) {
        ;(e.GZipJS = 'gzip-js'), (e.Base64 = 'base64')
    })(Gr || (Gr = {}))
    var gi = function (e, t, n) {
            var r = t || {}
            ;(r.ip = n.ip ? 1 : 0), (r._ = new Date().getTime().toString()), (r.ver = dt.LIB_VERSION)
            var i = e.split('?')
            if (i.length > 1) {
                var o,
                    a = k(i[1].split('&'))
                try {
                    for (a.s(); !(o = a.n()).done; ) {
                        var s = o.value.split('=')[0]
                        r[s] && delete r[s]
                    }
                } catch (e) {
                    a.e(e)
                } finally {
                    a.f()
                }
            }
            var u = e.indexOf('?') > -1 ? '&' : '?'
            return (
                e +
                u +
                (function (e) {
                    var t,
                        n,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '&',
                        i = []
                    return (
                        Ot(e, function (e, r) {
                            ;(t = encodeURIComponent(e.toString())),
                                (n = encodeURIComponent(r)),
                                (i[i.length] = n + '=' + t)
                        }),
                        i.join(r)
                    )
                })(r)
            )
        },
        mi = function e(t, n) {
            if (n.blob && t.buffer) return new Blob([t.buffer], { type: 'text/plain' })
            if (n.sendBeacon || n.blob) {
                var r = e(t, { method: 'POST' })
                return new Blob([r], { type: 'application/x-www-form-urlencoded' })
            }
            if ('POST' !== n.method) return null
            var i, o
            return (
                (i =
                    Array.isArray(t) || ((o = t), '[object Uint8Array]' === Object.prototype.toString.call(o))
                        ? 'data=' + encodeURIComponent(t)
                        : 'data=' + encodeURIComponent(t.data)),
                'compression' in t && t.compression && (i += '&compression=' + t.compression),
                i
            )
        },
        _i = function (e) {
            var t = e.url,
                n = e.data,
                r = e.headers,
                i = e.options,
                o = e.callback,
                a = e.retriesPerformedSoFar,
                s = e.retryQueue,
                u = e.onXHRError,
                c = e.timeout,
                l = void 0 === c ? 6e4 : c,
                d = e.onResponse,
                f = new XMLHttpRequest()
            f.open(i.method || 'GET', t, !0)
            var p = mi(n, i)
            Ot(r, function (e, t) {
                f.setRequestHeader(t, e)
            }),
                'POST' !== i.method ||
                    i.blob ||
                    f.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
                (f.timeout = l),
                (f.withCredentials = !0),
                (f.onreadystatechange = function () {
                    if (4 === f.readyState)
                        if ((null == d || d(f), 200 === f.status)) {
                            if (o) {
                                var e
                                try {
                                    e = JSON.parse(f.responseText)
                                } catch (e) {
                                    return void Et.error(e)
                                }
                                o(e)
                            }
                        } else
                            'function' == typeof u && u(f),
                                (f.status < 400 || f.status > 500) &&
                                    s.enqueue({
                                        url: t,
                                        data: n,
                                        options: i,
                                        headers: r,
                                        retriesPerformedSoFar: (a || 0) + 1,
                                        callback: o,
                                    }),
                                null == o || o({ status: 0 })
                }),
                f.send(p)
        },
        yi = 18e5
    var bi = (function (e) {
        f(n, e)
        var t = m(n)
        function n(e, r) {
            var i
            return (
                u(this, n),
                ((i = t.call(this)).isPolling = !1),
                (i.queue = []),
                (i.areWeOnline = !0),
                (i.onXHRError = e),
                (i.rateLimiter = r),
                'undefined' != typeof window &&
                    'onLine' in window.navigator &&
                    ((i.areWeOnline = window.navigator.onLine),
                    window.addEventListener('online', function () {
                        i._handleWeAreNowOnline()
                    }),
                    window.addEventListener('offline', function () {
                        i.areWeOnline = !1
                    })),
                i
            )
        }
        return (
            l(n, [
                {
                    key: 'enqueue',
                    value: function (e) {
                        var t = e.retriesPerformedSoFar || 0
                        if (!(t >= 10)) {
                            var n = (function (e) {
                                    var t = 3e3 * Math.pow(2, e),
                                        n = t / 2,
                                        r = Math.min(yi, t),
                                        i = (Math.random() - 0.5) * (r - n)
                                    return Math.ceil(r + i)
                                })(t),
                                r = new Date(Date.now() + n)
                            this.queue.push({ retryAt: r, requestData: e }),
                                console.warn('Enqueued failed request for retry in '.concat(n)),
                                this.isPolling || ((this.isPolling = !0), this.poll())
                        }
                    },
                },
                {
                    key: 'poll',
                    value: function () {
                        var e = this
                        this._poller && clearTimeout(this._poller),
                            (this._poller = setTimeout(function () {
                                e.areWeOnline && e.queue.length > 0 && e.flush(), e.poll()
                            }, this._pollInterval))
                    },
                },
                {
                    key: 'flush',
                    value: function () {
                        var e = new Date(Date.now()),
                            t = this.queue.filter(function (t) {
                                return t.retryAt < e
                            })
                        if (t.length > 0) {
                            this.queue = this.queue.filter(function (t) {
                                return t.retryAt >= e
                            })
                            var n,
                                r = k(t)
                            try {
                                for (r.s(); !(n = r.n()).done; ) {
                                    var i = n.value.requestData
                                    this._executeXhrRequest(i)
                                }
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                        }
                    },
                },
                {
                    key: 'unload',
                    value: function () {
                        this._poller && (clearTimeout(this._poller), (this._poller = void 0))
                        var e,
                            t = k(this.queue)
                        try {
                            for (t.s(); !(e = t.n()).done; ) {
                                var n = e.value.requestData,
                                    r = n.url,
                                    i = n.data,
                                    o = n.options
                                if (this.rateLimiter.isRateLimited(o._batchKey))
                                    dt.DEBUG && console.warn('[PostHog RetryQueue] is quota limited. Dropping request.')
                                else
                                    try {
                                        window.navigator.sendBeacon(r, mi(i, a(a({}, o), {}, { sendBeacon: !0 })))
                                    } catch (e) {
                                        dt.DEBUG && console.error(e)
                                    }
                            }
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                        this.queue = []
                    },
                },
                {
                    key: '_executeXhrRequest',
                    value: function (e) {
                        var t = e.url,
                            n = e.data,
                            r = e.options,
                            i = e.headers,
                            o = e.callback,
                            a = e.retriesPerformedSoFar
                        this.rateLimiter.isRateLimited(r._batchKey) ||
                            _i({
                                url: t,
                                data: n || {},
                                options: r || {},
                                headers: i || {},
                                retriesPerformedSoFar: a || 0,
                                callback: o,
                                retryQueue: this,
                                onXHRError: this.onXHRError,
                                onResponse: this.rateLimiter.checkForLimiting,
                            })
                    },
                },
                {
                    key: '_handleWeAreNowOnline',
                    value: function () {
                        ;(this.areWeOnline = !0), this.flush()
                    },
                },
            ]),
            n
        )
    })(Or)
    /**
     * uuidv7: An experimental implementation of the proposed UUID Version 7
     *
     * @license Apache-2.0
     * @copyright 2021-2023 LiosK
     * @packageDocumentation
     *
     * from https://github.com/LiosK/uuidv7/blob/e501462ea3d23241de13192ceae726956f9b3b7d/src/index.ts
     */ Math.trunc ||
        (Math.trunc = function (e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e)
        }),
        Number.isInteger ||
            (Number.isInteger = function (e) {
                return 'number' == typeof e && isFinite(e) && Math.floor(e) === e
            })
    var wi = '0123456789abcdef',
        ki = (function () {
            function e(t) {
                if ((u(this, e), (this.bytes = t), 16 !== t.length)) throw new TypeError('not 128-bit length')
            }
            return (
                l(
                    e,
                    [
                        {
                            key: 'toString',
                            value: function () {
                                for (var e = '', t = 0; t < this.bytes.length; t++)
                                    (e = e + wi.charAt(this.bytes[t] >>> 4) + wi.charAt(15 & this.bytes[t])),
                                        (3 !== t && 5 !== t && 7 !== t && 9 !== t) || (e += '-')
                                if (36 !== e.length) throw new Error('Invalid UUIDv7 was generated')
                                return e
                            },
                        },
                        {
                            key: 'clone',
                            value: function () {
                                return new e(this.bytes.slice(0))
                            },
                        },
                        {
                            key: 'equals',
                            value: function (e) {
                                return 0 === this.compareTo(e)
                            },
                        },
                        {
                            key: 'compareTo',
                            value: function (e) {
                                for (var t = 0; t < 16; t++) {
                                    var n = this.bytes[t] - e.bytes[t]
                                    if (0 !== n) return Math.sign(n)
                                }
                                return 0
                            },
                        },
                    ],
                    [
                        {
                            key: 'fromFieldsV7',
                            value: function (t, n, r, i) {
                                if (
                                    !Number.isInteger(t) ||
                                    !Number.isInteger(n) ||
                                    !Number.isInteger(r) ||
                                    !Number.isInteger(i) ||
                                    t < 0 ||
                                    n < 0 ||
                                    r < 0 ||
                                    i < 0 ||
                                    t > 0xffffffffffff ||
                                    n > 4095 ||
                                    r > 1073741823 ||
                                    i > 4294967295
                                )
                                    throw new RangeError('invalid field value')
                                var o = new Uint8Array(16)
                                return (
                                    (o[0] = t / Math.pow(2, 40)),
                                    (o[1] = t / Math.pow(2, 32)),
                                    (o[2] = t / Math.pow(2, 24)),
                                    (o[3] = t / Math.pow(2, 16)),
                                    (o[4] = t / Math.pow(2, 8)),
                                    (o[5] = t),
                                    (o[6] = 112 | (n >>> 8)),
                                    (o[7] = n),
                                    (o[8] = 128 | (r >>> 24)),
                                    (o[9] = r >>> 16),
                                    (o[10] = r >>> 8),
                                    (o[11] = r),
                                    (o[12] = i >>> 24),
                                    (o[13] = i >>> 16),
                                    (o[14] = i >>> 8),
                                    (o[15] = i),
                                    new e(o)
                                )
                            },
                        },
                    ]
                ),
                e
            )
        })(),
        Si = (function () {
            function e() {
                u(this, e), d(this, 'timestamp', 0), d(this, 'counter', 0), d(this, 'random', new Ci())
            }
            return (
                l(e, [
                    {
                        key: 'generate',
                        value: function () {
                            var e = this.generateOrAbort()
                            if (void 0 !== e) return e
                            this.timestamp = 0
                            var t = this.generateOrAbort()
                            if (void 0 === t) throw new Error('Could not generate UUID after timestamp reset')
                            return t
                        },
                    },
                    {
                        key: 'generateOrAbort',
                        value: function () {
                            var e = Date.now()
                            if (e > this.timestamp) (this.timestamp = e), this.resetCounter()
                            else {
                                if (!(e + 1e4 > this.timestamp)) return
                                this.counter++, this.counter > 4398046511103 && (this.timestamp++, this.resetCounter())
                            }
                            return ki.fromFieldsV7(
                                this.timestamp,
                                Math.trunc(this.counter / Math.pow(2, 30)),
                                this.counter & (Math.pow(2, 30) - 1),
                                this.random.nextUint32()
                            )
                        },
                    },
                    {
                        key: 'resetCounter',
                        value: function () {
                            this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32())
                        },
                    },
                ]),
                e
            )
        })(),
        xi = function (e) {
            if ('undefined' != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG)
                throw new Error('no cryptographically strong RNG available')
            for (var t = 0; t < e.length; t++)
                e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random())
            return e
        }
    'undefined' != typeof crypto &&
        crypto.getRandomValues &&
        (xi = function (e) {
            return crypto.getRandomValues(e)
        })
    var Ei,
        Ci = (function () {
            function e() {
                u(this, e), d(this, 'buffer', new Uint32Array(8)), d(this, 'cursor', 1 / 0)
            }
            return (
                l(e, [
                    {
                        key: 'nextUint32',
                        value: function () {
                            return (
                                this.cursor >= this.buffer.length && (xi(this.buffer), (this.cursor = 0)),
                                this.buffer[this.cursor++]
                            )
                        },
                    },
                ]),
                e
            )
        })(),
        Ii = function () {
            return Oi().toString()
        },
        Oi = function () {
            return (Ei || (Ei = new Si())).generate()
        },
        Ti = 1800,
        Fi = 60,
        Mi = 864e5,
        Pi = (function () {
            function e(t, n) {
                u(this, e),
                    d(this, '_sessionIdChangedHandlers', []),
                    (this.config = t),
                    (this.persistence = n),
                    (this._windowId = void 0),
                    (this._sessionId = void 0),
                    (this._sessionStartTimestamp = null),
                    (this._sessionActivityTimestamp = null)
                var r = t.persistence_name || t.token,
                    i = t.session_idle_timeout_seconds || Ti
                if (
                    ('number' != typeof i
                        ? (console.warn(
                              '[PostHog] session_idle_timeout_seconds must be a number. Defaulting to 30 minutes.'
                          ),
                          (i = Ti))
                        : i > Ti
                        ? console.warn(
                              '[PostHog] session_idle_timeout_seconds cannot be  greater than 30 minutes. Using 30 minutes instead.'
                          )
                        : i < Fi &&
                          console.warn(
                              '[PostHog] session_idle_timeout_seconds cannot be less than 60 seconds. Using 60 seconds instead.'
                          ),
                    (this._sessionTimeoutMs = 1e3 * Math.min(Math.max(i, Fi), Ti)),
                    (this._window_id_storage_key = 'ph_' + r + '_window_id'),
                    (this._primary_window_exists_storage_key = 'ph_' + r + '_primary_window_exists'),
                    this._canUseSessionStorage())
                ) {
                    var o = Vn.parse(this._window_id_storage_key),
                        a = Vn.parse(this._primary_window_exists_storage_key)
                    o && !a ? (this._windowId = o) : Vn.remove(this._window_id_storage_key),
                        Vn.set(this._primary_window_exists_storage_key, !0)
                }
                this._listenToReloadWindow()
            }
            return (
                l(e, [
                    {
                        key: 'onSessionId',
                        value: function (e) {
                            var t = this
                            return (
                                void 0 === this._sessionIdChangedHandlers && (this._sessionIdChangedHandlers = []),
                                this._sessionIdChangedHandlers.push(e),
                                this._sessionId && e(this._sessionId, this._windowId),
                                function () {
                                    t._sessionIdChangedHandlers = t._sessionIdChangedHandlers.filter(function (t) {
                                        return t !== e
                                    })
                                }
                            )
                        },
                    },
                    {
                        key: '_canUseSessionStorage',
                        value: function () {
                            return (
                                'memory' !== this.config.persistence && !this.persistence.disabled && Vn.is_supported()
                            )
                        },
                    },
                    {
                        key: '_setWindowId',
                        value: function (e) {
                            e !== this._windowId &&
                                ((this._windowId = e),
                                this._canUseSessionStorage() && Vn.set(this._window_id_storage_key, e))
                        },
                    },
                    {
                        key: '_getWindowId',
                        value: function () {
                            return this._windowId
                                ? this._windowId
                                : this._canUseSessionStorage()
                                ? Vn.parse(this._window_id_storage_key)
                                : null
                        },
                    },
                    {
                        key: '_setSessionId',
                        value: function (e, t, n) {
                            ;(e === this._sessionId &&
                                t === this._sessionActivityTimestamp &&
                                n === this._sessionStartTimestamp) ||
                                ((this._sessionStartTimestamp = n),
                                (this._sessionActivityTimestamp = t),
                                (this._sessionId = e),
                                this.persistence.register(d({}, bn, [t, e, n])))
                        },
                    },
                    {
                        key: '_getSessionId',
                        value: function () {
                            if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp)
                                return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp]
                            var e = this.persistence.props[bn]
                            return Array.isArray(e) && 2 === e.length && e.push(e[0]), e || [0, null, 0]
                        },
                    },
                    {
                        key: 'resetSessionId',
                        value: function () {
                            this._setSessionId(null, null, null)
                        },
                    },
                    {
                        key: '_listenToReloadWindow',
                        value: function () {
                            var e = this
                            window.addEventListener('beforeunload', function () {
                                e._canUseSessionStorage() && Vn.remove(e._primary_window_exists_storage_key)
                            })
                        },
                    },
                    {
                        key: 'checkAndGetSessionAndWindowId',
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t =
                                    (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) ||
                                    new Date().getTime(),
                                n = _(this._getSessionId(), 3),
                                r = n[0],
                                i = n[1],
                                o = n[2],
                                a = this._getWindowId(),
                                s = o && o > 0 && Math.abs(t - o) > Mi,
                                u = !1
                            !i || (!e && Math.abs(t - r) > this._sessionTimeoutMs) || s
                                ? ((i = Ii()), (a = Ii()), (o = t), (u = !0))
                                : a || ((a = Ii()), (u = !0))
                            var c = 0 === r || !e || s ? t : r,
                                l = 0 === o ? new Date().getTime() : o
                            return (
                                this._setWindowId(a),
                                this._setSessionId(i, c, l),
                                u &&
                                    this._sessionIdChangedHandlers.forEach(function (e) {
                                        return e(i, a)
                                    }),
                                { sessionId: i, windowId: a, sessionStartTimestamp: l }
                            )
                        },
                    },
                ]),
                e
            )
        })(),
        Ri = l(function e(t, n, r, i) {
            u(this, e),
                (this.name = 'posthog-js'),
                (this.setupOnce = function (e) {
                    e(function (e) {
                        var o, a, s, u, c
                        if ('error' !== e.level || !t.__loaded) return e
                        e.tags || (e.tags = {})
                        var l = t.config.ui_host || t.config.api_host
                        ;(e.tags['PostHog Person URL'] = l + '/person/' + t.get_distinct_id()),
                            t.sessionRecordingStarted() &&
                                (e.tags['PostHog Recording URL'] = t.get_session_replay_url({ withTimestamp: !0 }))
                        var d = (null === (o = e.exception) || void 0 === o ? void 0 : o.values) || [],
                            f = {
                                $exception_message: null === (a = d[0]) || void 0 === a ? void 0 : a.value,
                                $exception_type: null === (s = d[0]) || void 0 === s ? void 0 : s.type,
                                $exception_personURL: l + '/person/' + t.get_distinct_id(),
                                $sentry_event_id: e.event_id,
                                $sentry_exception: e.exception,
                                $sentry_exception_message: null === (u = d[0]) || void 0 === u ? void 0 : u.value,
                                $sentry_exception_type: null === (c = d[0]) || void 0 === c ? void 0 : c.type,
                                $sentry_tags: e.tags,
                            }
                        return (
                            n &&
                                r &&
                                (f.$sentry_url =
                                    (i || 'https://sentry.io/organizations/') +
                                    n +
                                    '/issues/?project=' +
                                    r +
                                    '&query=' +
                                    e.event_id),
                            t.capture('$exception', f),
                            e
                        )
                    })
                })
        }),
        Ni = function (e) {
            ;(Promise && Promise.resolve) ||
                console.warn('This browser does not have Promise support, and can not use the segment integration')
            var t = function (t, n) {
                t.event.userId || t.event.anonymousId === e.get_distinct_id() || e.reset(),
                    t.event.userId &&
                        t.event.userId !== e.get_distinct_id() &&
                        (e.register({ distinct_id: t.event.userId }), e.reloadFeatureFlags())
                var r = e._calculate_event_properties(n, t.event.properties)
                return (t.event.properties = Object.assign({}, r, t.event.properties)), t
            }
            return {
                name: 'PostHog JS',
                type: 'enrichment',
                version: '1.0.0',
                isLoaded: function () {
                    return !0
                },
                load: function () {
                    return Promise.resolve()
                },
                track: function (e) {
                    return t(e, e.event.event)
                },
                page: function (e) {
                    return t(e, '$pageview')
                },
                identify: function (e) {
                    return t(e, '$identify')
                },
                screen: function (e) {
                    return t(e, '$screen')
                },
            }
        },
        Di = (function () {
            function e() {
                var t = this
                u(this, e),
                    d(this, '_hasSeenPageView', !1),
                    d(this, '_updateScrollData', function () {
                        var e, n, r, i
                        t._pageViewData || (t._pageViewData = t._createPageViewData())
                        var o = t._pageViewData,
                            a = t._scrollY(),
                            s = t._scrollHeight(),
                            u = t._contentY(),
                            c = t._contentHeight()
                        ;(o.lastScrollY = a),
                            (o.maxScrollY = Math.max(a, null !== (e = o.maxScrollY) && void 0 !== e ? e : 0)),
                            (o.maxScrollHeight = Math.max(s, null !== (n = o.maxScrollHeight) && void 0 !== n ? n : 0)),
                            (o.lastContentY = u),
                            (o.maxContentY = Math.max(u, null !== (r = o.maxContentY) && void 0 !== r ? r : 0)),
                            (o.maxContentHeight = Math.max(
                                c,
                                null !== (i = o.maxContentHeight) && void 0 !== i ? i : 0
                            ))
                    })
            }
            return (
                l(e, [
                    {
                        key: '_createPageViewData',
                        value: function () {
                            return { pathname: gt.location.pathname }
                        },
                    },
                    {
                        key: 'doPageView',
                        value: function () {
                            var e, t
                            return (
                                this._hasSeenPageView
                                    ? ((t = this._pageViewData), (this._pageViewData = this._createPageViewData()))
                                    : ((this._hasSeenPageView = !0),
                                      (t = void 0),
                                      this._pageViewData || (this._pageViewData = this._createPageViewData())),
                                setTimeout(this._updateScrollData, 0),
                                a(
                                    { $prev_pageview_pathname: null === (e = t) || void 0 === e ? void 0 : e.pathname },
                                    this._calculatePrevPageScrollProperties(t)
                                )
                            )
                        },
                    },
                    {
                        key: 'doPageLeave',
                        value: function () {
                            var e = this._pageViewData
                            return a(
                                { $prev_pageview_pathname: null == e ? void 0 : e.pathname },
                                this._calculatePrevPageScrollProperties(e)
                            )
                        },
                    },
                    {
                        key: '_calculatePrevPageScrollProperties',
                        value: function (e) {
                            if (
                                !e ||
                                null == e.maxScrollHeight ||
                                null == e.lastScrollY ||
                                null == e.maxScrollY ||
                                null == e.maxContentHeight ||
                                null == e.lastContentY ||
                                null == e.maxContentY
                            )
                                return {}
                            var t = e.maxScrollHeight,
                                n = e.lastScrollY,
                                r = e.maxScrollY,
                                i = e.maxContentHeight,
                                o = e.lastContentY,
                                a = e.maxContentY
                            return (
                                (t = Math.ceil(t)),
                                (n = Math.ceil(n)),
                                (r = Math.ceil(r)),
                                (i = Math.ceil(i)),
                                (o = Math.ceil(o)),
                                (a = Math.ceil(a)),
                                {
                                    $prev_pageview_last_scroll: n,
                                    $prev_pageview_last_scroll_percentage: t <= 1 ? 1 : Li(n / t, 0, 1),
                                    $prev_pageview_max_scroll: r,
                                    $prev_pageview_max_scroll_percentage: t <= 1 ? 1 : Li(r / t, 0, 1),
                                    $prev_pageview_last_content: o,
                                    $prev_pageview_last_content_percentage: i <= 1 ? 1 : Li(o / i, 0, 1),
                                    $prev_pageview_max_content: a,
                                    $prev_pageview_max_content_percentage: i <= 1 ? 1 : Li(a / i, 0, 1),
                                }
                            )
                        },
                    },
                    {
                        key: 'startMeasuringScrollPosition',
                        value: function () {
                            gt.addEventListener('scroll', this._updateScrollData),
                                gt.addEventListener('scrollend', this._updateScrollData),
                                gt.addEventListener('resize', this._updateScrollData)
                        },
                    },
                    {
                        key: 'stopMeasuringScrollPosition',
                        value: function () {
                            gt.removeEventListener('scroll', this._updateScrollData),
                                gt.removeEventListener('scrollend', this._updateScrollData),
                                gt.removeEventListener('resize', this._updateScrollData)
                        },
                    },
                    {
                        key: '_scrollHeight',
                        value: function () {
                            return Math.max(
                                0,
                                gt.document.documentElement.scrollHeight - gt.document.documentElement.clientHeight
                            )
                        },
                    },
                    {
                        key: '_scrollY',
                        value: function () {
                            return gt.scrollY || gt.pageYOffset || gt.document.documentElement.scrollTop || 0
                        },
                    },
                    {
                        key: '_contentHeight',
                        value: function () {
                            return gt.document.documentElement.scrollHeight || 0
                        },
                    },
                    {
                        key: '_contentY',
                        value: function () {
                            var e = gt.document.documentElement.clientHeight || 0
                            return this._scrollY() + e
                        },
                    },
                ]),
                e
            )
        })()
    function Li(e, t, n) {
        return Math.max(t, Math.min(e, n))
    }
    function Ai(e) {
        return 'undefined' != typeof Event && $i(e, Event)
    }
    function $i(e, t) {
        try {
            return e instanceof t
        } catch (e) {
            return !1
        }
    }
    function ji(e) {
        return null === e || ('object' !== s(e) && 'function' != typeof e)
    }
    function Hi(e, t) {
        return Object.prototype.toString.call(e) === '[object '.concat(t, ']')
    }
    function Bi(e) {
        return Hi(e, 'DOMError')
    }
    var qi = /\(error: (.*)\)/,
        Ui = 50,
        zi = '?'
    function Wi(e, t, n, r) {
        var i = { filename: e, function: t, in_app: !0 }
        return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i
    }
    var Vi =
            /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        Gi = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        Yi =
            /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        Ji = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        Qi = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i
    var Xi = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
            var r = t
                .sort(function (e, t) {
                    return e[0] - t[0]
                })
                .map(function (e) {
                    return e[1]
                })
            return function (e) {
                for (
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = [],
                        i = e.split('\n'),
                        o = t;
                    o < i.length;
                    o++
                ) {
                    var s = i[o]
                    if (!(s.length > 1024)) {
                        var u = qi.test(s) ? s.replace(qi, '$1') : s
                        if (!u.match(/\S*Error: /)) {
                            var c,
                                l = k(r)
                            try {
                                for (l.s(); !(c = l.n()).done; ) {
                                    var d = (0, c.value)(u)
                                    if (d) {
                                        n.push(d)
                                        break
                                    }
                                }
                            } catch (e) {
                                l.e(e)
                            } finally {
                                l.f()
                            }
                            if (n.length >= Ui) break
                        }
                    }
                }
                return (function (e) {
                    if (!e.length) return []
                    var t = e.slice(0, Ui)
                    return (
                        t.reverse(),
                        t.map(function (e) {
                            return a(
                                a({}, e),
                                {},
                                { filename: e.filename || t[t.length - 1].filename, function: e.function || '?' }
                            )
                        })
                    )
                })(n)
            }
        }.apply(void 0, [
            [
                30,
                function (e) {
                    var t = Vi.exec(e)
                    if (t) {
                        if (t[2] && 0 === t[2].indexOf('eval')) {
                            var n = Gi.exec(t[2])
                            n && ((t[2] = n[1]), (t[3] = n[2]), (t[4] = n[3]))
                        }
                        var r = _(Ki(t[1] || zi, t[2]), 2),
                            i = r[0]
                        return Wi(r[1], i, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0)
                    }
                },
            ],
            [
                50,
                function (e) {
                    var t = Yi.exec(e)
                    if (t) {
                        if (t[3] && t[3].indexOf(' > eval') > -1) {
                            var n = Ji.exec(t[3])
                            n && ((t[1] = t[1] || 'eval'), (t[3] = n[1]), (t[4] = n[2]), (t[5] = ''))
                        }
                        var r = t[3],
                            i = t[1] || zi,
                            o = _(Ki(i, r), 2)
                        return (i = o[0]), Wi((r = o[1]), i, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
                    }
                },
            ],
            [
                40,
                function (e) {
                    var t = Qi.exec(e)
                    return t ? Wi(t[2], t[1] || zi, +t[3], t[4] ? +t[4] : void 0) : void 0
                },
            ],
        ]),
        Ki = function (e, t) {
            var n = -1 !== e.indexOf('safari-extension'),
                r = -1 !== e.indexOf('safari-web-extension')
            return n || r
                ? [
                      -1 !== e.indexOf('@') ? e.split('@')[0] : zi,
                      n ? 'safari-extension:'.concat(t) : 'safari-web-extension:'.concat(t),
                  ]
                : [e, t]
        },
        Zi = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
        eo = /Minified React error #\d+;/i
    function to(e) {
        var t = e.stacktrace || e.stack || '',
            n = (function (e) {
                if (e) {
                    if ('number' == typeof e.framesToPop) return e.framesToPop
                    if (eo.test(e.message)) return 1
                }
                return 0
            })(e)
        try {
            return Xi(t, n)
        } catch (e) {}
        return []
    }
    function no(e) {
        var t = to(e)
        return { $exception_type: e.name, $exception_message: e.message, $exception_stack_trace_raw: JSON.stringify(t) }
    }
    function ro(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
            n = Object.keys(e)
        if ((n.sort(), !n.length)) return '[object has no keys]'
        for (var r = n.length; r > 0; r--) {
            var i = n.slice(0, r).join(', ')
            if (!(i.length > t)) return r === n.length || i.length <= t ? i : ''.concat(i.slice(0, t), '...')
        }
        return ''
    }
    function io(e) {
        var t = _(e, 5),
            n = t[0],
            r = t[1],
            i = t[2],
            o = t[3],
            s = t[4],
            u = {}
        if (void 0 === s && 'string' == typeof n) {
            var c = 'Error',
                l = n,
                d = n.match(Zi)
            d && ((c = d[1]), (l = d[2])), (u = { $exception_type: c, $exception_message: l })
        }
        var f = s || n
        if (
            Bi(f) ||
            (function (e) {
                return Hi(e, 'DOMException')
            })(f)
        ) {
            var p = f
            if (
                (function (e) {
                    return 'stack' in e
                })(f)
            )
                u = no(f)
            else {
                var h = p.name || (Bi(p) ? 'DOMError' : 'DOMException'),
                    v = p.message ? ''.concat(h, ': ').concat(p.message) : h
                ;(u = (function (e) {
                    return { $exception_type: 'Error', $exception_message: e }
                })(v)),
                    (u.$exception_type = Bi(p) ? 'DOMError' : 'DOMException'),
                    (u.$exception_message = u.$exception_message || v)
            }
            'code' in p && (u.$exception_DOMException_code = ''.concat(p.code))
        } else if (
            (function (e) {
                return Hi(e, 'ErrorEvent')
            })(f) &&
            f.error
        )
            u = no(f.error)
        else if (
            (function (e) {
                switch (Object.prototype.toString.call(e)) {
                    case '[object Error]':
                    case '[object Exception]':
                    case '[object DOMException]':
                        return !0
                    default:
                        return $i(e, Error)
                }
            })(f)
        )
            u = no(f)
        else if (
            (function (e) {
                return Hi(e, 'Object')
            })(f) ||
            Ai(f)
        ) {
            ;(u = (function (e) {
                return {
                    $exception_type: Ai(e) ? e.constructor.name : 'Error',
                    $exception_message: 'Non-Error '.concat('exception', ' captured with keys: ', ro(e)),
                }
            })(f)),
                (u.$exception_is_synthetic = !0)
        } else
            (u.$exception_type = u.$exception_type || 'Error'),
                (u.$exception_message = u.$exception_message || f),
                (u.$exception_is_synthetic = !0)
        return a(
            a(
                a(
                    a({}, u),
                    {},
                    {
                        $exception_type: u.$exception_type || 'UnknownErrorType',
                        $exception_message: u.$exception_message || '',
                    },
                    r ? { $exception_source: r } : {}
                ),
                i ? { $exception_lineno: i } : {}
            ),
            o ? { $exception_colno: o } : {}
        )
    }
    var oo,
        ao,
        so,
        uo = (function () {
            function e(t) {
                u(this, e),
                    d(this, 'originalOnErrorHandler', void 0),
                    d(this, 'originalOnUnhandledRejectionHandler', void 0),
                    d(this, 'errorsToIgnore', []),
                    (this.instance = t)
            }
            return (
                l(e, [
                    {
                        key: 'debugLog',
                        value: function () {
                            if (this.instance.config.debug) {
                                for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                                    n[r] = arguments[r]
                                ;(e = console).log.apply(e, ['PostHog.js [PostHog.ExceptionObserver]'].concat(n))
                            }
                        },
                    },
                    {
                        key: 'startCapturing',
                        value: function () {
                            var e
                            if (
                                this.isEnabled() &&
                                (null === (e = gt.onerror) || void 0 === e || !e.__POSTHOG_INSTRUMENTED__)
                            )
                                try {
                                    ;(this.originalOnErrorHandler = gt.onerror),
                                        (gt.onerror = function () {
                                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                                                t[n] = arguments[n]
                                            return (
                                                this.captureException(t),
                                                !!this.originalOnErrorHandler &&
                                                    this.originalOnErrorHandler.apply(this, t)
                                            )
                                        }.bind(this)),
                                        (gt.onerror.__POSTHOG_INSTRUMENTED__ = !0),
                                        (this.originalOnUnhandledRejectionHandler = gt.onunhandledrejection),
                                        (gt.onunhandledrejection = function () {
                                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                                                t[n] = arguments[n]
                                            var r = (function (e) {
                                                var t = _(e, 1)[0],
                                                    n = t
                                                try {
                                                    'reason' in t
                                                        ? (n = t.reason)
                                                        : 'detail' in t && 'reason' in t.detail && (n = t.detail.reason)
                                                } catch (e) {}
                                                var r = {}
                                                return (
                                                    ((r = ji(n)
                                                        ? {
                                                              $exception_message:
                                                                  'Non-Error promise rejection captured with value: '.concat(
                                                                      String(n)
                                                                  ),
                                                          }
                                                        : io([n])).$exception_handled = !1),
                                                    a(
                                                        a({}, r),
                                                        {},
                                                        {
                                                            $exception_type: (r.$exception_type = 'UnhandledRejection'),
                                                            $exception_message: (r.$exception_message =
                                                                r.$exception_message || t.reason || String(n)),
                                                        }
                                                    )
                                                )
                                            })(t)
                                            return (
                                                this.sendExceptionEvent(r),
                                                !this.originalOnUnhandledRejectionHandler ||
                                                    this.originalOnUnhandledRejectionHandler.apply(gt, t)
                                            )
                                        }.bind(this)),
                                        (gt.onunhandledrejection.__POSTHOG_INSTRUMENTED__ = !0)
                                } catch (e) {
                                    console.error('PostHog failed to start exception autocapture', e),
                                        this.stopCapturing()
                                }
                        },
                    },
                    {
                        key: 'stopCapturing',
                        value: function () {
                            var e, t
                            void 0 !== this.originalOnErrorHandler &&
                                ((gt.onerror = this.originalOnErrorHandler), (this.originalOnErrorHandler = null)),
                                null === (e = gt.onerror) || void 0 === e || delete e.__POSTHOG_INSTRUMENTED__,
                                void 0 !== this.originalOnUnhandledRejectionHandler &&
                                    ((gt.onunhandledrejection = this.originalOnUnhandledRejectionHandler),
                                    (this.originalOnUnhandledRejectionHandler = null)),
                                null === (t = gt.onunhandledrejection) ||
                                    void 0 === t ||
                                    delete t.__POSTHOG_INSTRUMENTED__
                        },
                    },
                    {
                        key: 'isCapturing',
                        value: function () {
                            var e
                            return !(null === (e = gt.onerror) || void 0 === e || !e.__POSTHOG_INSTRUMENTED__)
                        },
                    },
                    {
                        key: 'isEnabled',
                        value: function () {
                            var e
                            return null !== (e = this.remoteEnabled) && void 0 !== e && e
                        },
                    },
                    {
                        key: 'afterDecideResponse',
                        value: function (e) {
                            var t = e.autocaptureExceptions
                            if (
                                ((this.remoteEnabled = !!t || !1),
                                !ji(t) && 'errors_to_ignore' in t && Array.isArray(t.errors_to_ignore))
                            ) {
                                var n = t.errors_to_ignore
                                this.errorsToIgnore = n.map(function (e) {
                                    return new RegExp(e)
                                })
                            }
                            this.isEnabled()
                                ? (this.startCapturing(),
                                  this.debugLog('Remote config for exception autocapture is enabled, starting', t))
                                : this.debugLog('Remote config for exception autocapture is disabled, not starting', t)
                        },
                    },
                    {
                        key: 'captureException',
                        value: function (e, t) {
                            var n = io(e)
                            if (
                                this.errorsToIgnore.some(function (e) {
                                    return e.test(n.$exception_message || '')
                                })
                            )
                                this.debugLog('Ignoring exception based on remote config', n)
                            else {
                                var r = a(a({}, t), n),
                                    i = this.instance.config.ui_host || this.instance.config.api_host
                                ;(n.$exception_personURL = i + '/person/' + this.instance.get_distinct_id()),
                                    this.sendExceptionEvent(r)
                            }
                        },
                    },
                    {
                        key: 'sendExceptionEvent',
                        value: function (e) {
                            this.instance.capture('$exception', e, {
                                transport: 'XHR',
                                method: 'POST',
                                endpoint: '/e/',
                                _noTruncate: !0,
                                _batchKey: 'exceptionEvent',
                            })
                        },
                    },
                ]),
                e
            )
        })(),
        co = {
            icontains: function (e) {
                return window.location.href.toLowerCase().indexOf(e.toLowerCase()) > -1
            },
            regex: function (e) {
                return $t(window.location.href, e)
            },
            exact: function (e) {
                return window.location.href === e
            },
        },
        lo = (function () {
            function e(t) {
                u(this, e), (this.instance = t)
            }
            return (
                l(e, [
                    {
                        key: 'getSurveys',
                        value: function (e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                r = this.instance.get_property(En)
                            if (r && !n) return e(r)
                            this.instance._send_request(
                                ''
                                    .concat(this.instance.config.api_host, '/api/surveys/?token=')
                                    .concat(this.instance.config.token),
                                {},
                                { method: 'GET' },
                                function (n) {
                                    var r,
                                        i = n.surveys || []
                                    return (
                                        null === (r = t.instance.persistence) ||
                                            void 0 === r ||
                                            r.register(d({}, En, i)),
                                        e(i)
                                    )
                                }
                            )
                        },
                    },
                    {
                        key: 'getActiveMatchingSurveys',
                        value: function (e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                            this.getSurveys(function (n) {
                                var r = n
                                    .filter(function (e) {
                                        return !(!e.start_date || e.end_date)
                                    })
                                    .filter(function (e) {
                                        var t, n, r, i
                                        if (!e.conditions) return !0
                                        var o =
                                                null === (t = e.conditions) ||
                                                void 0 === t ||
                                                !t.url ||
                                                co[
                                                    null !==
                                                        (n =
                                                            null === (r = e.conditions) || void 0 === r
                                                                ? void 0
                                                                : r.urlMatchType) && void 0 !== n
                                                        ? n
                                                        : 'icontains'
                                                ](e.conditions.url),
                                            a =
                                                null === (i = e.conditions) ||
                                                void 0 === i ||
                                                !i.selector ||
                                                document.querySelector(e.conditions.selector)
                                        return o && a
                                    })
                                    .filter(function (e) {
                                        if (!e.linked_flag_key && !e.targeting_flag_key) return !0
                                        var n =
                                                !e.linked_flag_key ||
                                                t.instance.featureFlags.isFeatureEnabled(e.linked_flag_key),
                                            r =
                                                !e.targeting_flag_key ||
                                                t.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key)
                                        return n && r
                                    })
                                return e(r)
                            }, n)
                        },
                    },
                ]),
                e
            )
        })(),
        fo = 6e4,
        po = (function () {
            function e() {
                var t = this
                u(this, e),
                    d(this, 'limits', {}),
                    d(this, 'checkForLimiting', function (e) {
                        try {
                            ;(JSON.parse(e.responseText).quota_limited || []).forEach(function (e) {
                                Et.log('[PostHog RateLimiter] '.concat(e || 'events', ' is quota limited.')),
                                    (t.limits[e] = new Date().getTime() + fo)
                            })
                        } catch (e) {
                            return void Et.error(e)
                        }
                    })
            }
            return (
                l(e, [
                    {
                        key: 'isRateLimited',
                        value: function (e) {
                            var t = this.limits[e || 'events'] || !1
                            return !1 !== t && new Date().getTime() < t
                        },
                    },
                ]),
                e
            )
        })()
    !(function (e) {
        ;(e[(e.INIT_MODULE = 0)] = 'INIT_MODULE'), (e[(e.INIT_SNIPPET = 1)] = 'INIT_SNIPPET')
    })(oo || (oo = {}))
    var ho = function () {},
        vo = {},
        go = 'posthog',
        mo = gt.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest(),
        _o = !mo && -1 === yt.indexOf('MSIE') && -1 === yt.indexOf('Mozilla'),
        yo = function () {
            var e, t, n
            return {
                api_host: 'https://app.posthog.com',
                api_method: 'POST',
                api_transport: 'XHR',
                ui_host: null,
                token: '',
                autocapture: !0,
                rageclick: !0,
                cross_subdomain_cookie:
                    -1 ===
                    (null == _t ||
                    null === (e = _t.location) ||
                    void 0 === e ||
                    null === (t = e.hostname) ||
                    void 0 === t
                        ? void 0
                        : t.indexOf('herokuapp.com')),
                persistence: 'cookie',
                persistence_name: '',
                cookie_name: '',
                loaded: ho,
                store_google: !0,
                custom_campaign_params: [],
                custom_blocked_useragents: [],
                save_referrer: !0,
                capture_pageview: !0,
                capture_pageleave: !0,
                debug: !1,
                verbose: !1,
                cookie_expiration: 365,
                upgrade: !1,
                disable_session_recording: !1,
                disable_persistence: !1,
                disable_cookie: !1,
                enable_recording_console_log: void 0,
                secure_cookie:
                    'https:' === (null == gt || null === (n = gt.location) || void 0 === n ? void 0 : n.protocol),
                ip: !0,
                opt_out_capturing_by_default: !1,
                opt_out_persistence_by_default: !1,
                opt_out_capturing_persistence_type: 'localStorage',
                opt_out_capturing_cookie_prefix: null,
                opt_in_site_apps: !1,
                property_blacklist: [],
                respect_dnt: !1,
                sanitize_properties: null,
                xhr_headers: {},
                inapp_protocol: '//',
                inapp_link_new_window: !1,
                request_batching: !0,
                properties_string_max_length: 65535,
                session_recording: {},
                mask_all_element_attributes: !1,
                mask_all_text: !1,
                advanced_disable_decide: !1,
                advanced_disable_feature_flags: !1,
                advanced_disable_feature_flags_on_first_load: !1,
                advanced_disable_toolbar_metrics: !1,
                on_xhr_error: function (e) {
                    var t = 'Bad HTTP status: ' + e.status + ' ' + e.statusText
                    console.error(t)
                },
                get_device_id: function (e) {
                    return e
                },
                _onCapture: ho,
                capture_performance: void 0,
                name: 'posthog',
                callback_fn: 'posthog._jsc',
                bootstrap: {},
                disable_compression: !1,
                session_idle_timeout_seconds: 1800,
                send_nms_recording: !0,
            }
        },
        bo = function (e, t, n, r) {
            var i,
                o = n !== go && so ? (n ? so[n] : void 0) : so,
                a = { initComplete: !1, syncCode: !1 },
                s = function (e) {
                    return function (t) {
                        a[e] || ((a[e] = !0), a.initComplete && a.syncCode && (null == r || r(t)))
                    }
                }
            if (o && ao === oo.INIT_MODULE) i = o
            else {
                if (o && !Ft(o)) return void console.error('You have already initialized ' + n)
                i = new wo()
            }
            if (
                (i._init(e, t, n, s('initComplete')),
                i.toolbar.maybeLoadToolbar(),
                (i.sessionRecording = new ur(i)),
                i.sessionRecording.startRecordingIfEnabled(),
                (i.webPerformance = new fr(i)),
                i.webPerformance.startObservingIfEnabled(),
                i.config.__preview_measure_pageview_stats && i.pageViewManager.startMeasuringScrollPosition(),
                (i.exceptionAutocapture = new uo(i)),
                (i.__autocapture = i.config.autocapture),
                Mn._setIsAutocaptureEnabled(i),
                Mn._isAutocaptureEnabled)
            ) {
                i.__autocapture = i.config.autocapture
                Mn.enabledForProject(i.config.token, 100, 100)
                    ? Mn.isBrowserSupported()
                        ? Mn.init(i)
                        : ((i.__autocapture = !1),
                          Et.log('Disabling Automatic Event Collection because this browser is not supported'))
                    : ((i.__autocapture = !1), Et.log('Not in active bucket: disabling Automatic Event Collection.'))
            }
            return (
                (dt.DEBUG = dt.DEBUG || i.config.debug),
                void 0 !== o && Ft(o) && (i._execute_array.call(i.people, o.people), i._execute_array(o)),
                s('syncCode')(i),
                i
            )
        },
        wo = (function () {
            function e() {
                var t = this
                u(this, e),
                    (this.config = yo()),
                    (this.compression = {}),
                    (this.decideEndpointWasHit = !1),
                    (this.SentryIntegration = Ri),
                    (this.segmentIntegration = function () {
                        return Ni(t)
                    }),
                    (this.__captureHooks = []),
                    (this.__request_queue = []),
                    (this.__loaded = !1),
                    (this.__loaded_recorder_version = void 0),
                    (this.__autocapture = void 0),
                    (this._jsc = function () {}),
                    (this.featureFlags = new Ln(this)),
                    (this.toolbar = new mr(this)),
                    (this.pageViewManager = new Di()),
                    (this.surveys = new lo(this)),
                    (this.rateLimiter = new po()),
                    (this.people = {
                        set: function (e, n, r) {
                            var i = 'string' == typeof e ? d({}, e, n) : e
                            t.setPersonProperties(i), null == r || r({})
                        },
                        set_once: function (e, n, r) {
                            var i = 'string' == typeof e ? d({}, e, n) : e
                            t.setPersonProperties(void 0, i), null == r || r({})
                        },
                    })
            }
            return (
                l(e, [
                    {
                        key: 'init',
                        value: function (e, t, n) {
                            if (Dt(n)) console.error('You must name your new library: init(token, config, name)')
                            else {
                                if (n !== go) {
                                    var r = bo(e, t, n, function (e) {
                                        ;(so[n] = e), e._loaded()
                                    })
                                    return (so[n] = r), r
                                }
                                console.error(
                                    'You must initialize the main posthog object right after you include the PostHog js snippet'
                                )
                            }
                        },
                    },
                    {
                        key: '_init',
                        value: function (e) {
                            var t,
                                n,
                                r = this,
                                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                o = arguments.length > 2 ? arguments[2] : void 0,
                                s = arguments.length > 3 ? arguments[3] : void 0
                            ;(this.__loaded = !0), (this.config = {}), (this._triggered_notifs = [])
                            var u,
                                c = { segmentRegister: !1, syncCode: !1 },
                                l = function (e) {
                                    return function () {
                                        c[e] || ((c[e] = !0), c.segmentRegister && c.syncCode && (null == s || s(r)))
                                    }
                                }
                            ;(this.set_config(
                                Tt({}, yo(), i, {
                                    name: o,
                                    token: e,
                                    callback_fn: (o === go ? o : go + '.' + o) + '._jsc',
                                })
                            ),
                            (this._jsc = function () {}),
                            (null != gt && null !== (t = gt.rrweb) && void 0 !== t && t.record) ||
                                (null != gt && gt.rrwebRecord)) &&
                                (this.__loaded_recorder_version =
                                    null == gt || null === (u = gt.rrweb) || void 0 === u ? void 0 : u.version)
                            if (
                                ((this.persistence = new Yn(this.config)),
                                (this._requestQueue = new Tr(this._handle_queued_event.bind(this))),
                                (this._retryQueue = new bi(this.config.on_xhr_error, this.rateLimiter)),
                                (this.__captureHooks = []),
                                (this.__request_queue = []),
                                (this.sessionManager = new Pi(this.config, this.persistence)),
                                (this.sessionPersistence =
                                    'sessionStorage' === this.config.persistence
                                        ? this.persistence
                                        : new Yn(a(a({}, this.config), {}, { persistence: 'sessionStorage' }))),
                                this._gdpr_init(),
                                i.segment
                                    ? ((this.config.get_device_id = function () {
                                          return i.segment.user().anonymousId()
                                      }),
                                      i.segment.user().id() &&
                                          (this.register({ distinct_id: i.segment.user().id() }),
                                          this.persistence.set_user_state('identified')),
                                      i.segment.register(this.segmentIntegration()).then(l('segmentRegister')))
                                    : l('segmentRegister')(),
                                void 0 !== (null === (n = i.bootstrap) || void 0 === n ? void 0 : n.distinctID))
                            ) {
                                var d,
                                    f,
                                    p = this.config.get_device_id(Ii()),
                                    h =
                                        null !== (d = i.bootstrap) && void 0 !== d && d.isIdentifiedID
                                            ? p
                                            : i.bootstrap.distinctID
                                this.persistence.set_user_state(
                                    null !== (f = i.bootstrap) && void 0 !== f && f.isIdentifiedID
                                        ? 'identified'
                                        : 'anonymous'
                                ),
                                    this.register({ distinct_id: i.bootstrap.distinctID, $device_id: h })
                            }
                            if (this._hasBootstrappedFeatureFlags()) {
                                var v,
                                    g,
                                    m = Object.keys(
                                        (null === (v = i.bootstrap) || void 0 === v ? void 0 : v.featureFlags) || {}
                                    )
                                        .filter(function (e) {
                                            var t, n
                                            return !(
                                                null === (t = i.bootstrap) ||
                                                void 0 === t ||
                                                null === (n = t.featureFlags) ||
                                                void 0 === n ||
                                                !n[e]
                                            )
                                        })
                                        .reduce(function (e, t) {
                                            var n, r
                                            return (
                                                (e[t] =
                                                    (null === (n = i.bootstrap) ||
                                                    void 0 === n ||
                                                    null === (r = n.featureFlags) ||
                                                    void 0 === r
                                                        ? void 0
                                                        : r[t]) || !1),
                                                e
                                            )
                                        }, {}),
                                    _ = Object.keys(
                                        (null === (g = i.bootstrap) || void 0 === g ? void 0 : g.featureFlagPayloads) ||
                                            {}
                                    )
                                        .filter(function (e) {
                                            return m[e]
                                        })
                                        .reduce(function (e, t) {
                                            var n, r, o, a
                                            null !== (n = i.bootstrap) &&
                                                void 0 !== n &&
                                                null !== (r = n.featureFlagPayloads) &&
                                                void 0 !== r &&
                                                r[t] &&
                                                (e[t] =
                                                    null === (o = i.bootstrap) ||
                                                    void 0 === o ||
                                                    null === (a = o.featureFlagPayloads) ||
                                                    void 0 === a
                                                        ? void 0
                                                        : a[t])
                                            return e
                                        }, {})
                                this.featureFlags.receivedFeatureFlags({ featureFlags: m, featureFlagPayloads: _ })
                            }
                            if (!this.get_distinct_id()) {
                                var y = this.config.get_device_id(Ii())
                                this.register_once({ distinct_id: y, $device_id: y }, ''),
                                    this.persistence.set_user_state('anonymous')
                            }
                            gt.addEventListener &&
                                gt.addEventListener(
                                    'onpagehide' in self ? 'pagehide' : 'unload',
                                    this._handle_unload.bind(this)
                                ),
                                l('syncCode')()
                        },
                    },
                    {
                        key: '_loaded',
                        value: function () {
                            var e = this.config.advanced_disable_decide
                            e || this.featureFlags.setReloadingPaused(!0)
                            try {
                                this.config.loaded(this)
                            } catch (e) {
                                console.error('`loaded` function failed', e)
                            }
                            this._start_queue_if_opted_in(),
                                this.config.capture_pageview &&
                                    this.capture('$pageview', { title: _t.title }, { send_instantly: !0 }),
                                e || (new hr(this).call(), this.featureFlags.resetRequestQueue())
                        },
                    },
                    {
                        key: '_start_queue_if_opted_in',
                        value: function () {
                            var e
                            this.has_opted_out_capturing() ||
                                (this.config.request_batching &&
                                    (null === (e = this._requestQueue) || void 0 === e || e.poll()))
                        },
                    },
                    {
                        key: '_dom_loaded',
                        value: function () {
                            var e = this
                            this.has_opted_out_capturing() ||
                                It(this.__request_queue, function (t) {
                                    e._send_request.apply(e, y(t))
                                }),
                                (this.__request_queue = []),
                                this._start_queue_if_opted_in()
                        },
                    },
                    {
                        key: '_prepare_callback',
                        value: function (e, t) {
                            if (Dt(e)) return null
                            if (mo)
                                return function (n) {
                                    e(n, t)
                                }
                            var n = this._jsc,
                                r = '' + Math.floor(1e8 * Math.random()),
                                i = this.config.callback_fn + '[' + r + ']'
                            return (
                                (n[r] = function (i) {
                                    delete n[r], e(i, t)
                                }),
                                i
                            )
                        },
                    },
                    {
                        key: '_handle_unload',
                        value: function () {
                            var e, t
                            this.config.request_batching
                                ? (this.config.capture_pageview &&
                                      this.config.capture_pageleave &&
                                      this.capture('$pageleave'),
                                  null === (e = this._requestQueue) || void 0 === e || e.unload(),
                                  null === (t = this._retryQueue) || void 0 === t || t.unload())
                                : this.config.capture_pageview &&
                                  this.config.capture_pageleave &&
                                  this.capture('$pageleave', null, { transport: 'sendBeacon' })
                        },
                    },
                    {
                        key: '_handle_queued_event',
                        value: function (e, t, n) {
                            var r = JSON.stringify(t)
                            this.__compress_and_send_json_request(e, r, n || vo, ho)
                        },
                    },
                    {
                        key: '__compress_and_send_json_request',
                        value: function (e, t, n, r) {
                            var i = (function (e, t, n) {
                                    return e === Gr.GZipJS
                                        ? [
                                              hi(vi(t), { mtime: 0 }),
                                              a(a({}, n), {}, { blob: !0, urlQueryArgs: { compression: Gr.GZipJS } }),
                                          ]
                                        : [{ data: zt(t) }, n]
                                })(this.compression[Gr.GZipJS] ? Gr.GZipJS : Gr.Base64, t, n),
                                o = _(i, 2),
                                s = o[0],
                                u = o[1]
                            this._send_request(e, s, u, r)
                        },
                    },
                    {
                        key: '_send_request',
                        value: function (e, t, n, r) {
                            if (this.__loaded && this._retryQueue && !this.rateLimiter.isRateLimited(n._batchKey))
                                if (_o) this.__request_queue.push([e, t, n, r])
                                else {
                                    var i = {
                                        method: this.config.api_method,
                                        transport: this.config.api_transport,
                                        verbose: this.config.verbose,
                                    }
                                    ;(n = Tt(i, n || {})), mo || (n.method = 'GET')
                                    var o = 'sendBeacon' in gt.navigator && 'sendBeacon' === n.transport
                                    if (((e = gi(e, n.urlQueryArgs || {}, { ip: this.config.ip })), o))
                                        try {
                                            gt.navigator.sendBeacon(e, mi(t, a(a({}, n), {}, { sendBeacon: !0 })))
                                        } catch (e) {}
                                    else if (mo)
                                        try {
                                            _i({
                                                url: e,
                                                data: t,
                                                headers: this.config.xhr_headers,
                                                options: n,
                                                callback: r,
                                                retriesPerformedSoFar: 0,
                                                retryQueue: this._retryQueue,
                                                onXHRError: this.config.on_xhr_error,
                                                onResponse: this.rateLimiter.checkForLimiting,
                                            })
                                        } catch (e) {
                                            console.error(e)
                                        }
                                    else {
                                        var s,
                                            u = _t.createElement('script')
                                        ;(u.type = 'text/javascript'), (u.async = !0), (u.defer = !0), (u.src = e)
                                        var c = _t.getElementsByTagName('script')[0]
                                        null === (s = c.parentNode) || void 0 === s || s.insertBefore(u, c)
                                    }
                                }
                        },
                    },
                    {
                        key: '_execute_array',
                        value: function (e) {
                            var t,
                                n = this,
                                r = [],
                                i = [],
                                o = []
                            It(e, function (e) {
                                e &&
                                    ((t = e[0]),
                                    Ft(t)
                                        ? o.push(e)
                                        : 'function' == typeof e
                                        ? e.call(n)
                                        : Ft(e) && 'alias' === t
                                        ? r.push(e)
                                        : Ft(e) && -1 !== t.indexOf('capture') && 'function' == typeof n[t]
                                        ? o.push(e)
                                        : i.push(e))
                            })
                            var a = function (e, t) {
                                It(
                                    e,
                                    function (e) {
                                        if (Ft(e[0])) {
                                            var n = t
                                            Ot(e, function (e) {
                                                n = n[e[0]].apply(n, e.slice(1))
                                            })
                                        } else this[e[0]].apply(this, e.slice(1))
                                    },
                                    t
                                )
                            }
                            a(r, this), a(i, this), a(o, this)
                        },
                    },
                    {
                        key: '_hasBootstrappedFeatureFlags',
                        value: function () {
                            var e, t
                            return (
                                ((null === (e = this.config.bootstrap) || void 0 === e ? void 0 : e.featureFlags) &&
                                    Object.keys(
                                        null === (t = this.config.bootstrap) || void 0 === t ? void 0 : t.featureFlags
                                    ).length > 0) ||
                                !1
                            )
                        },
                    },
                    {
                        key: 'push',
                        value: function (e) {
                            this._execute_array([e])
                        },
                    },
                    {
                        key: 'captureException',
                        value: function (e, t) {
                            var n
                            null === (n = this.exceptionAutocapture) ||
                                void 0 === n ||
                                n.captureException([e.name, void 0, void 0, void 0, e], t)
                        },
                    },
                    {
                        key: 'capture',
                        value: function (e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vo
                            if (!this.__loaded || !this.sessionPersistence || !this._requestQueue)
                                return Et.unintializedWarning('posthog.capture')
                            if (
                                !(function (e, t) {
                                    var n = !1
                                    try {
                                        var r = e.config.token,
                                            i = e.config.respect_dnt,
                                            o = e.config.opt_out_capturing_persistence_type,
                                            a = e.config.opt_out_capturing_cookie_prefix || void 0,
                                            s = e.config.window
                                        r &&
                                            (n = kr(r, {
                                                respectDnt: i,
                                                persistenceType: o,
                                                persistencePrefix: a,
                                                window: s,
                                            }))
                                    } catch (e) {
                                        t ||
                                            console.error(
                                                'Unexpected error when checking capturing opt-out status: ' + e
                                            )
                                    }
                                    return n
                                })(this, !1)
                            ) {
                                var r = (n = n || vo).transport
                                if ((r && (n.transport = r), Dt(e) || 'string' != typeof e))
                                    console.error('No event name provided to posthog.capture')
                                else if (!Gt(yt, this.config.custom_blocked_useragents)) {
                                    this.sessionPersistence.update_search_keyword(),
                                        this.config.store_google && this.sessionPersistence.update_campaign_params(),
                                        this.config.save_referrer && this.sessionPersistence.update_referrer_info()
                                    var i = {
                                        uuid: Ii(),
                                        event: e,
                                        properties: this._calculate_event_properties(e, t || {}),
                                    }
                                    '$identify' === e && ((i.$set = n.$set), (i.$set_once = n.$set_once)),
                                        ((i = Ut(
                                            i,
                                            n._noTruncate ? null : this.config.properties_string_max_length
                                        )).timestamp = n.timestamp || new Date())
                                    var o = a(a({}, i.properties.$set), i.$set)
                                    Nt(o) || this.setPersonPropertiesForFlags(o),
                                        this.config.debug && Et.log('PostHog.js send', i)
                                    var s = JSON.stringify(i),
                                        u = this.config.api_host + (n.endpoint || '/e/'),
                                        c = n !== vo
                                    return (
                                        !this.config.request_batching || (c && !n._batchKey) || n.send_instantly
                                            ? this.__compress_and_send_json_request(u, s, n)
                                            : this._requestQueue.enqueue(u, i, n),
                                        this._invokeCaptureHooks(e, i),
                                        i
                                    )
                                }
                            }
                        },
                    },
                    {
                        key: '_addCaptureHook',
                        value: function (e) {
                            this.__captureHooks.push(e)
                        },
                    },
                    {
                        key: '_invokeCaptureHooks',
                        value: function (e, t) {
                            this.config._onCapture(e, t),
                                Ot(this.__captureHooks, function (t) {
                                    return t(e)
                                })
                        },
                    },
                    {
                        key: '_calculate_event_properties',
                        value: function (e, t) {
                            if (!this.persistence || !this.sessionPersistence) return t
                            var n = this.persistence.remove_event_timer(e),
                                r = a({}, t)
                            if (((r.token = this.config.token), '$snapshot' === e)) {
                                var i = a(a({}, this.persistence.properties()), this.sessionPersistence.properties())
                                return (r.distinct_id = i.distinct_id), r
                            }
                            var o = Kt.properties()
                            if (this.sessionManager) {
                                var s = this.sessionManager.checkAndGetSessionAndWindowId(),
                                    u = s.sessionId,
                                    c = s.windowId
                                ;(r.$session_id = u), (r.$window_id = c)
                            }
                            if (this.config.__preview_measure_pageview_stats) {
                                var l = {}
                                '$pageview' === e
                                    ? (l = this.pageViewManager.doPageView())
                                    : '$pageleave' === e && (l = this.pageViewManager.doPageLeave()),
                                    (r = Tt(r, l))
                            }
                            if (('$pageview' === e && (r.title = _t.title), '$performance_event' === e)) {
                                var d = this.persistence.properties()
                                return (r.distinct_id = d.distinct_id), (r.$current_url = o.$current_url), r
                            }
                            if (void 0 !== n) {
                                var f = new Date().getTime() - n
                                r.$duration = parseFloat((f / 1e3).toFixed(3))
                            }
                            r = Tt(
                                {},
                                Kt.properties(),
                                this.persistence.properties(),
                                this.sessionPersistence.properties(),
                                r
                            )
                            var p = this.config.property_blacklist
                            Ft(p)
                                ? Ot(p, function (e) {
                                      delete r[e]
                                  })
                                : console.error('Invalid value for property_blacklist config: ' + p)
                            var h = this.config.sanitize_properties
                            return h && (r = h(r, e)), r
                        },
                    },
                    {
                        key: 'register',
                        value: function (e, t) {
                            var n
                            null === (n = this.persistence) || void 0 === n || n.register(e, t)
                        },
                    },
                    {
                        key: 'register_once',
                        value: function (e, t, n) {
                            var r
                            null === (r = this.persistence) || void 0 === r || r.register_once(e, t, n)
                        },
                    },
                    {
                        key: 'register_for_session',
                        value: function (e) {
                            var t
                            null === (t = this.sessionPersistence) || void 0 === t || t.register(e)
                        },
                    },
                    {
                        key: 'unregister',
                        value: function (e) {
                            var t
                            null === (t = this.persistence) || void 0 === t || t.unregister(e)
                        },
                    },
                    {
                        key: 'unregister_for_session',
                        value: function (e) {
                            var t
                            null === (t = this.sessionPersistence) || void 0 === t || t.unregister(e)
                        },
                    },
                    {
                        key: '_register_single',
                        value: function (e, t) {
                            this.register(d({}, e, t))
                        },
                    },
                    {
                        key: 'getFeatureFlag',
                        value: function (e, t) {
                            return this.featureFlags.getFeatureFlag(e, t)
                        },
                    },
                    {
                        key: 'getFeatureFlagPayload',
                        value: function (e) {
                            var t = this.featureFlags.getFeatureFlagPayload(e)
                            try {
                                return JSON.parse(t)
                            } catch (e) {
                                return t
                            }
                        },
                    },
                    {
                        key: 'isFeatureEnabled',
                        value: function (e, t) {
                            return this.featureFlags.isFeatureEnabled(e, t)
                        },
                    },
                    {
                        key: 'reloadFeatureFlags',
                        value: function () {
                            this.featureFlags.reloadFeatureFlags()
                        },
                    },
                    {
                        key: 'updateEarlyAccessFeatureEnrollment',
                        value: function (e, t) {
                            this.featureFlags.updateEarlyAccessFeatureEnrollment(e, t)
                        },
                    },
                    {
                        key: 'getEarlyAccessFeatures',
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                            return this.featureFlags.getEarlyAccessFeatures(e, t)
                        },
                    },
                    {
                        key: 'onFeatureFlags',
                        value: function (e) {
                            return this.featureFlags.onFeatureFlags(e)
                        },
                    },
                    {
                        key: 'onSessionId',
                        value: function (e) {
                            var t, n
                            return null !==
                                (t = null === (n = this.sessionManager) || void 0 === n ? void 0 : n.onSessionId(e)) &&
                                void 0 !== t
                                ? t
                                : function () {}
                        },
                    },
                    {
                        key: 'getSurveys',
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                            this.surveys.getSurveys(e, t)
                        },
                    },
                    {
                        key: 'getActiveMatchingSurveys',
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                            this.surveys.getActiveMatchingSurveys(e, t)
                        },
                    },
                    {
                        key: 'identify',
                        value: function (e, t, n) {
                            if (!this.__loaded || !this.persistence) return Et.unintializedWarning('posthog.identify')
                            if (e) {
                                var r = this.get_distinct_id()
                                if ((this.register({ $user_id: e }), !this.get_property('$device_id'))) {
                                    var i = r
                                    this.register_once({ $had_persisted_distinct_id: !0, $device_id: i }, '')
                                }
                                e !== r &&
                                    e !== this.get_property(hn) &&
                                    (this.unregister(hn), this.register({ distinct_id: e }))
                                var o = 'anonymous' === this.persistence.get_user_state()
                                e !== r && o
                                    ? (this.persistence.set_user_state('identified'),
                                      this.setPersonPropertiesForFlags(t || {}, !1),
                                      this.capture(
                                          '$identify',
                                          { distinct_id: e, $anon_distinct_id: r },
                                          { $set: t || {}, $set_once: n || {} }
                                      ),
                                      this.featureFlags.setAnonymousDistinctId(r))
                                    : (t || n) && this.setPersonProperties(t, n),
                                    e !== r && (this.reloadFeatureFlags(), this.unregister(Cn))
                            } else console.error('Unique user id has not been set in posthog.identify')
                        },
                    },
                    {
                        key: 'setPersonProperties',
                        value: function (e, t) {
                            ;(e || t) &&
                                (this.setPersonPropertiesForFlags(e || {}),
                                this.capture('$set', { $set: e || {}, $set_once: t || {} }))
                        },
                    },
                    {
                        key: 'group',
                        value: function (e, t, n) {
                            if (e && t) {
                                var r = this.getGroups()
                                r[e] !== t && this.resetGroupPropertiesForFlags(e),
                                    this.register({ $groups: a(a({}, r), {}, d({}, e, t)) }),
                                    n &&
                                        (this.capture('$groupidentify', {
                                            $group_type: e,
                                            $group_key: t,
                                            $group_set: n,
                                        }),
                                        this.setGroupPropertiesForFlags(d({}, e, n))),
                                    r[e] === t || n || this.reloadFeatureFlags()
                            } else console.error('posthog.group requires a group type and group key')
                        },
                    },
                    {
                        key: 'resetGroups',
                        value: function () {
                            this.register({ $groups: {} }),
                                this.resetGroupPropertiesForFlags(),
                                this.reloadFeatureFlags()
                        },
                    },
                    {
                        key: 'setPersonPropertiesForFlags',
                        value: function (e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                            this.featureFlags.setPersonPropertiesForFlags(e, t)
                        },
                    },
                    {
                        key: 'resetPersonPropertiesForFlags',
                        value: function () {
                            this.featureFlags.resetPersonPropertiesForFlags()
                        },
                    },
                    {
                        key: 'setGroupPropertiesForFlags',
                        value: function (e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                            this.featureFlags.setGroupPropertiesForFlags(e, t)
                        },
                    },
                    {
                        key: 'resetGroupPropertiesForFlags',
                        value: function (e) {
                            this.featureFlags.resetGroupPropertiesForFlags(e)
                        },
                    },
                    {
                        key: 'reset',
                        value: function (e) {
                            var t, n, r, i
                            if (!this.__loaded) return Et.unintializedWarning('posthog.reset')
                            var o = this.get_property('$device_id')
                            null === (t = this.persistence) || void 0 === t || t.clear(),
                                null === (n = this.sessionPersistence) || void 0 === n || n.clear(),
                                null === (r = this.persistence) || void 0 === r || r.set_user_state('anonymous'),
                                null === (i = this.sessionManager) || void 0 === i || i.resetSessionId()
                            var a = this.config.get_device_id(Ii())
                            this.register_once({ distinct_id: a, $device_id: e ? a : o }, '')
                        },
                    },
                    {
                        key: 'get_distinct_id',
                        value: function () {
                            return this.get_property('distinct_id')
                        },
                    },
                    {
                        key: 'getGroups',
                        value: function () {
                            return this.get_property('$groups') || {}
                        },
                    },
                    {
                        key: 'get_session_id',
                        value: function () {
                            var e, t
                            return null !==
                                (e =
                                    null === (t = this.sessionManager) || void 0 === t
                                        ? void 0
                                        : t.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== e
                                ? e
                                : ''
                        },
                    },
                    {
                        key: 'get_session_replay_url',
                        value: function (e) {
                            if (!this.sessionManager) return ''
                            var t = this.config.ui_host || this.config.api_host,
                                n = this.sessionManager.checkAndGetSessionAndWindowId(!0),
                                r = n.sessionId,
                                i = n.sessionStartTimestamp,
                                o = t + '/replay/' + r
                            if (null != e && e.withTimestamp && i) {
                                var a,
                                    s = null !== (a = e.timestampLookBack) && void 0 !== a ? a : 10
                                if (!i) return o
                                var u = Math.max(Math.floor((new Date().getTime() - i) / 1e3) - s, 0)
                                o += '?t='.concat(u)
                            }
                            return o
                        },
                    },
                    {
                        key: 'alias',
                        value: function (e, t) {
                            return e === this.get_property(pn)
                                ? (Et.critical('Attempting to create alias for existing People user - aborting.'), -2)
                                : (Dt(t) && (t = this.get_distinct_id()),
                                  e !== t
                                      ? (this._register_single(hn, e),
                                        this.capture('$create_alias', { alias: e, distinct_id: t }))
                                      : (console.error('alias matches current distinct_id - skipping api call.'),
                                        this.identify(e),
                                        -1))
                        },
                    },
                    {
                        key: 'set_config',
                        value: function (e) {
                            var t,
                                n,
                                r = a({}, this.config)
                            Rt(e) &&
                                (Tt(this.config, e),
                                this.config.persistence_name ||
                                    (this.config.persistence_name = this.config.cookie_name),
                                this.config.disable_persistence ||
                                    (this.config.disable_persistence = this.config.disable_cookie),
                                null === (t = this.persistence) || void 0 === t || t.update_config(this.config),
                                null === (n = this.sessionPersistence) || void 0 === n || n.update_config(this.config),
                                Hn.is_supported() && 'true' === Hn.get('ph_debug') && (this.config.debug = !0),
                                this.config.debug && (dt.DEBUG = !0),
                                this.sessionRecording &&
                                    void 0 !== e.disable_session_recording &&
                                    r.disable_session_recording !== e.disable_session_recording &&
                                    (e.disable_session_recording
                                        ? this.sessionRecording.stopRecording()
                                        : this.sessionRecording.startRecordingIfEnabled()))
                        },
                    },
                    {
                        key: 'startSessionRecording',
                        value: function () {
                            this.set_config({ disable_session_recording: !1 })
                        },
                    },
                    {
                        key: 'stopSessionRecording',
                        value: function () {
                            this.set_config({ disable_session_recording: !0 })
                        },
                    },
                    {
                        key: 'sessionRecordingStarted',
                        value: function () {
                            var e
                            return !(null === (e = this.sessionRecording) || void 0 === e || !e.started())
                        },
                    },
                    {
                        key: 'sendNmsRecording',
                        value: function () {
                            this.set_config({ send_nms_recording: !0 })
                        },
                    },
                    {
                        key: 'loadToolbar',
                        value: function (e) {
                            return this.toolbar.loadToolbar(e)
                        },
                    },
                    {
                        key: 'get_property',
                        value: function (e) {
                            var t
                            return null === (t = this.persistence) || void 0 === t ? void 0 : t.props[e]
                        },
                    },
                    {
                        key: 'getSessionProperty',
                        value: function (e) {
                            var t
                            return null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.props[e]
                        },
                    },
                    {
                        key: 'toString',
                        value: function () {
                            var e,
                                t = null !== (e = this.config.name) && void 0 !== e ? e : go
                            return t !== go && (t = go + '.' + t), t
                        },
                    },
                    {
                        key: '_gdpr_init',
                        value: function () {
                            'localStorage' === this.config.opt_out_capturing_persistence_type &&
                                Hn.is_supported() &&
                                (!this.has_opted_in_capturing() &&
                                    this.has_opted_in_capturing({ persistence_type: 'cookie' }) &&
                                    this.opt_in_capturing({ enable_persistence: !1 }),
                                !this.has_opted_out_capturing() &&
                                    this.has_opted_out_capturing({ persistence_type: 'cookie' }) &&
                                    this.opt_out_capturing({ clear_persistence: !1 }),
                                this.clear_opt_in_out_capturing({
                                    persistence_type: 'cookie',
                                    enable_persistence: !1,
                                })),
                                this.has_opted_out_capturing()
                                    ? this._gdpr_update_persistence({ clear_persistence: !0 })
                                    : this.has_opted_in_capturing() ||
                                      (!this.config.opt_out_capturing_by_default && !$n.get('ph_optout')) ||
                                      ($n.remove('ph_optout'),
                                      this.opt_out_capturing({
                                          clear_persistence: this.config.opt_out_persistence_by_default,
                                      }))
                        },
                    },
                    {
                        key: '_gdpr_update_persistence',
                        value: function (e) {
                            var t, n, r, i, o
                            if (e && e.clear_persistence) r = !0
                            else {
                                if (!e || !e.enable_persistence) return
                                r = !1
                            }
                            this.config.disable_persistence ||
                                (null === (t = this.persistence) || void 0 === t ? void 0 : t.disabled) === r ||
                                null === (i = this.persistence) ||
                                void 0 === i ||
                                i.set_disabled(r)
                            this.config.disable_persistence ||
                                (null === (n = this.sessionPersistence) || void 0 === n ? void 0 : n.disabled) === r ||
                                null === (o = this.sessionPersistence) ||
                                void 0 === o ||
                                o.set_disabled(r)
                        },
                    },
                    {
                        key: '_gdpr_call_func',
                        value: function (e, t) {
                            return (
                                (t = Tt(
                                    {
                                        capture: this.capture.bind(this),
                                        persistence_type: this.config.opt_out_capturing_persistence_type,
                                        cookie_prefix: this.config.opt_out_capturing_cookie_prefix,
                                        cookie_expiration: this.config.cookie_expiration,
                                        cross_subdomain_cookie: this.config.cross_subdomain_cookie,
                                        secure_cookie: this.config.secure_cookie,
                                    },
                                    t || {}
                                )),
                                Hn.is_supported() ||
                                    'localStorage' !== t.persistence_type ||
                                    (t.persistence_type = 'cookie'),
                                e(this.config.token, {
                                    capture: t.capture,
                                    captureEventName: t.capture_event_name,
                                    captureProperties: t.capture_properties,
                                    persistenceType: t.persistence_type,
                                    persistencePrefix: t.cookie_prefix,
                                    cookieExpiration: t.cookie_expiration,
                                    crossSubdomainCookie: t.cross_subdomain_cookie,
                                    secureCookie: t.secure_cookie,
                                })
                            )
                        },
                    },
                    {
                        key: 'opt_in_capturing',
                        value: function (e) {
                            ;(e = Tt({ enable_persistence: !0 }, e || {})),
                                this._gdpr_call_func(yr, e),
                                this._gdpr_update_persistence(e)
                        },
                    },
                    {
                        key: 'opt_out_capturing',
                        value: function (e) {
                            var t = Tt({ clear_persistence: !0 }, e || {})
                            this._gdpr_call_func(br, t), this._gdpr_update_persistence(t)
                        },
                    },
                    {
                        key: 'has_opted_in_capturing',
                        value: function (e) {
                            return this._gdpr_call_func(wr, e)
                        },
                    },
                    {
                        key: 'has_opted_out_capturing',
                        value: function (e) {
                            return this._gdpr_call_func(kr, e)
                        },
                    },
                    {
                        key: 'clear_opt_in_out_capturing',
                        value: function (e) {
                            var t = Tt({ enable_persistence: !0 }, null != e ? e : {})
                            this._gdpr_call_func(Sr, t), this._gdpr_update_persistence(t)
                        },
                    },
                    {
                        key: 'debug',
                        value: function (e) {
                            !1 === e
                                ? (gt.console.log("You've disabled debug mode."),
                                  localStorage && localStorage.removeItem('ph_debug'),
                                  this.set_config({ debug: !1 }))
                                : (gt.console.log(
                                      "You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."
                                  ),
                                  localStorage && localStorage.setItem('ph_debug', 'true'),
                                  this.set_config({ debug: !0 }))
                        },
                    },
                ]),
                e
            )
        })()
    !(function (e, t) {
        for (var n = 0; n < t.length; n++) e.prototype[t[n]] = Ht(e.prototype[t[n]])
    })(wo, ['identify'])
    var ko = {},
        So = function () {
            so.init = function (e, t, n) {
                if (n)
                    return (
                        so[n] ||
                            (so[n] = ko[n] =
                                bo(e || '', t || {}, n, function (e) {
                                    ;(so[n] = ko[n] = e), e._loaded()
                                })),
                        so[n]
                    )
                var r = so
                return (
                    ko[go]
                        ? (r = ko[go])
                        : e &&
                          ((r = bo(e, t || {}, go, function (e) {
                              ;(ko[go] = e), e._loaded()
                          })),
                          (ko[go] = r)),
                    (so = r),
                    ao === oo.INIT_SNIPPET && (gt[go] = so),
                    Ot(ko, function (e, t) {
                        t !== go && (so[t] = e)
                    }),
                    r
                )
            }
        },
        xo = function () {
            function e() {
                e.done ||
                    ((e.done = !0),
                    (_o = !1),
                    Ot(ko, function (e) {
                        e._dom_loaded()
                    }))
            }
            _t.addEventListener &&
                ('complete' === _t.readyState ? e() : _t.addEventListener('DOMContentLoaded', e, !1)),
                Qt(gt, 'load', e, !0)
        }
    ;(ao = oo.INIT_SNIPPET),
        Dt(gt.posthog) && (gt.posthog = []),
        (so = gt.posthog).__loaded || (so.config && so.persistence)
            ? console.error('PostHog library has already been downloaded at least once.')
            : (Ot(so._i, function (e) {
                  e && Ft(e) && (ko[e[2]] = bo.apply(void 0, y(e)))
              }),
              So(),
              so.init(),
              Ot(ko, function (e) {
                  e._loaded()
              }),
              xo())
})()
//# sourceMappingURL=array.full.js.map
