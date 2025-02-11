!(function () {
    'use strict'
    var e
    function t() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        t = function () {
            return e
        }
        var e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            o = 'function' == typeof Symbol ? Symbol : {},
            a = o.iterator || '@@iterator',
            i = o.asyncIterator || '@@asyncIterator',
            s = o.toStringTag || '@@toStringTag'
        function c(e, t, n) {
            return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t]
        }
        try {
            c({}, '')
        } catch (e) {
            c = function (e, t, n) {
                return (e[t] = n)
            }
        }
        function u(e, t, n, r) {
            var o = t && t.prototype instanceof p ? t : p,
                a = Object.create(o.prototype),
                i = new k(r || [])
            return (
                (a._invoke = (function (e, t, n) {
                    var r = 'suspendedStart'
                    return function (o, a) {
                        if ('executing' === r) throw new Error('Generator is already running')
                        if ('completed' === r) {
                            if ('throw' === o) throw a
                            return M()
                        }
                        for (n.method = o, n.arg = a; ; ) {
                            var i = n.delegate
                            if (i) {
                                var s = b(i, n)
                                if (s) {
                                    if (s === d) continue
                                    return s
                                }
                            }
                            if ('next' === n.method) n.sent = n._sent = n.arg
                            else if ('throw' === n.method) {
                                if ('suspendedStart' === r) throw ((r = 'completed'), n.arg)
                                n.dispatchException(n.arg)
                            } else 'return' === n.method && n.abrupt('return', n.arg)
                            r = 'executing'
                            var c = l(e, t, n)
                            if ('normal' === c.type) {
                                if (((r = n.done ? 'completed' : 'suspendedYield'), c.arg === d)) continue
                                return { value: c.arg, done: n.done }
                            }
                            'throw' === c.type && ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg))
                        }
                    }
                })(e, n, i)),
                a
            )
        }
        function l(e, t, n) {
            try {
                return { type: 'normal', arg: e.call(t, n) }
            } catch (e) {
                return { type: 'throw', arg: e }
            }
        }
        e.wrap = u
        var d = {}
        function p() {}
        function f() {}
        function h() {}
        var g = {}
        c(g, a, function () {
            return this
        })
        var m = Object.getPrototypeOf,
            v = m && m(m(w([])))
        v && v !== n && r.call(v, a) && (g = v)
        var y = (h.prototype = p.prototype = Object.create(g))
        function I(e) {
            ;['next', 'throw', 'return'].forEach(function (t) {
                c(e, t, function (e) {
                    return this._invoke(t, e)
                })
            })
        }
        function C(e, t) {
            function n(o, a, i, s) {
                var c = l(e[o], e, a)
                if ('throw' !== c.type) {
                    var u = c.arg,
                        d = u.value
                    return d && 'object' == typeof d && r.call(d, '__await')
                        ? t.resolve(d.__await).then(
                              function (e) {
                                  n('next', e, i, s)
                              },
                              function (e) {
                                  n('throw', e, i, s)
                              }
                          )
                        : t.resolve(d).then(
                              function (e) {
                                  ;(u.value = e), i(u)
                              },
                              function (e) {
                                  return n('throw', e, i, s)
                              }
                          )
                }
                s(c.arg)
            }
            var o
            this._invoke = function (e, r) {
                function a() {
                    return new t(function (t, o) {
                        n(e, r, t, o)
                    })
                }
                return (o = o ? o.then(a, a) : a())
            }
        }
        function b(e, t) {
            var n = e.iterator[t.method]
            if (void 0 === n) {
                if (((t.delegate = null), 'throw' === t.method)) {
                    if (e.iterator.return && ((t.method = 'return'), (t.arg = void 0), b(e, t), 'throw' === t.method))
                        return d
                    ;(t.method = 'throw'), (t.arg = new TypeError("The iterator does not provide a 'throw' method"))
                }
                return d
            }
            var r = l(n, e.iterator, t.arg)
            if ('throw' === r.type) return (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), d
            var o = r.arg
            return o
                ? o.done
                    ? ((t[e.resultName] = o.value),
                      (t.next = e.nextLoc),
                      'return' !== t.method && ((t.method = 'next'), (t.arg = void 0)),
                      (t.delegate = null),
                      d)
                    : o
                : ((t.method = 'throw'),
                  (t.arg = new TypeError('iterator result is not an object')),
                  (t.delegate = null),
                  d)
        }
        function S(e) {
            var t = { tryLoc: e[0] }
            1 in e && (t.catchLoc = e[1]),
                2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                this.tryEntries.push(t)
        }
        function A(e) {
            var t = e.completion || {}
            ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function k(e) {
            ;(this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(S, this), this.reset(!0)
        }
        function w(e) {
            if (e) {
                var t = e[a]
                if (t) return t.call(e)
                if ('function' == typeof e.next) return e
                if (!isNaN(e.length)) {
                    var n = -1,
                        o = function t() {
                            for (; ++n < e.length; ) if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t
                            return (t.value = void 0), (t.done = !0), t
                        }
                    return (o.next = o)
                }
            }
            return { next: M }
        }
        function M() {
            return { value: void 0, done: !0 }
        }
        return (
            (f.prototype = h),
            c(y, 'constructor', h),
            c(h, 'constructor', f),
            (f.displayName = c(h, s, 'GeneratorFunction')),
            (e.isGeneratorFunction = function (e) {
                var t = 'function' == typeof e && e.constructor
                return !!t && (t === f || 'GeneratorFunction' === (t.displayName || t.name))
            }),
            (e.mark = function (e) {
                return (
                    Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, h)
                        : ((e.__proto__ = h), c(e, s, 'GeneratorFunction')),
                    (e.prototype = Object.create(y)),
                    e
                )
            }),
            (e.awrap = function (e) {
                return { __await: e }
            }),
            I(C.prototype),
            c(C.prototype, i, function () {
                return this
            }),
            (e.AsyncIterator = C),
            (e.async = function (t, n, r, o, a) {
                void 0 === a && (a = Promise)
                var i = new C(u(t, n, r, o), a)
                return e.isGeneratorFunction(n)
                    ? i
                    : i.next().then(function (e) {
                          return e.done ? e.value : i.next()
                      })
            }),
            I(y),
            c(y, s, 'Generator'),
            c(y, a, function () {
                return this
            }),
            c(y, 'toString', function () {
                return '[object Generator]'
            }),
            (e.keys = function (e) {
                var t = []
                for (var n in e) t.push(n)
                return (
                    t.reverse(),
                    function n() {
                        for (; t.length; ) {
                            var r = t.pop()
                            if (r in e) return (n.value = r), (n.done = !1), n
                        }
                        return (n.done = !0), n
                    }
                )
            }),
            (e.values = w),
            (k.prototype = {
                constructor: k,
                reset: function (e) {
                    if (
                        ((this.prev = 0),
                        (this.next = 0),
                        (this.sent = this._sent = void 0),
                        (this.done = !1),
                        (this.delegate = null),
                        (this.method = 'next'),
                        (this.arg = void 0),
                        this.tryEntries.forEach(A),
                        !e)
                    )
                        for (var t in this)
                            't' === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                },
                stop: function () {
                    this.done = !0
                    var e = this.tryEntries[0].completion
                    if ('throw' === e.type) throw e.arg
                    return this.rval
                },
                dispatchException: function (e) {
                    if (this.done) throw e
                    var t = this
                    function n(n, r) {
                        return (
                            (i.type = 'throw'),
                            (i.arg = e),
                            (t.next = n),
                            r && ((t.method = 'next'), (t.arg = void 0)),
                            !!r
                        )
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var a = this.tryEntries[o],
                            i = a.completion
                        if ('root' === a.tryLoc) return n('end')
                        if (a.tryLoc <= this.prev) {
                            var s = r.call(a, 'catchLoc'),
                                c = r.call(a, 'finallyLoc')
                            if (s && c) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            } else if (s) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                            } else {
                                if (!c) throw new Error('try statement without catch or finally')
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n]
                        if (o.tryLoc <= this.prev && r.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                            var a = o
                            break
                        }
                    }
                    a && ('break' === e || 'continue' === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null)
                    var i = a ? a.completion : {}
                    return (
                        (i.type = e),
                        (i.arg = t),
                        a ? ((this.method = 'next'), (this.next = a.finallyLoc), d) : this.complete(i)
                    )
                },
                complete: function (e, t) {
                    if ('throw' === e.type) throw e.arg
                    return (
                        'break' === e.type || 'continue' === e.type
                            ? (this.next = e.arg)
                            : 'return' === e.type
                            ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                            : 'normal' === e.type && t && (this.next = t),
                        d
                    )
                },
                finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t]
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), A(n), d
                    }
                },
                catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t]
                        if (n.tryLoc === e) {
                            var r = n.completion
                            if ('throw' === r.type) {
                                var o = r.arg
                                A(n)
                            }
                            return o
                        }
                    }
                    throw new Error('illegal catch attempt')
                },
                delegateYield: function (e, t, n) {
                    return (
                        (this.delegate = { iterator: w(e), resultName: t, nextLoc: n }),
                        'next' === this.method && (this.arg = void 0),
                        d
                    )
                },
            }),
            e
        )
    }
    function n(e) {
        return (
            (n =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e
                      }
                    : function (e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e
                      }),
            n(e)
        )
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }
    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
        }
    }
    function a(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, 'prototype', { writable: !1 }), e
    }
    function i(e, t) {
        return (
            (function (e) {
                if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
                var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
                if (null == n) return
                var r,
                    o,
                    a = [],
                    i = !0,
                    s = !1
                try {
                    for (n = n.call(e); !(i = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0);
                } catch (e) {
                    ;(s = !0), (o = e)
                } finally {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (s) throw o
                    }
                }
                return a
            })(e, t) ||
            c(e, t) ||
            (function () {
                throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
            })()
        )
    }
    function s(e) {
        return (
            (function (e) {
                if (Array.isArray(e)) return u(e)
            })(e) ||
            (function (e) {
                if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
                    return Array.from(e)
            })(e) ||
            c(e) ||
            (function () {
                throw new TypeError(
                    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
            })()
        )
    }
    function c(e, t) {
        if (e) {
            if ('string' == typeof e) return u(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                    ? Array.from(e)
                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? u(e, t)
                    : void 0
            )
        }
    }
    function u(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
    }
    function l(e, t) {
        var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
        if (!n) {
            if (Array.isArray(e) || (n = c(e)) || (t && e && 'number' == typeof e.length)) {
                n && (e = n)
                var r = 0,
                    o = function () {}
                return {
                    s: o,
                    n: function () {
                        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
                    },
                    e: function (e) {
                        throw e
                    },
                    f: o,
                }
            }
            throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
        }
        var a,
            i = !0,
            s = !1
        return {
            s: function () {
                n = n.call(e)
            },
            n: function () {
                var e = n.next()
                return (i = e.done), e
            },
            e: function (e) {
                ;(s = !0), (a = e)
            },
            f: function () {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            },
        }
    }
    function d(e) {
        var t = null == e ? void 0 : e.host
        return Boolean((null == t ? void 0 : t.shadowRoot) === e)
    }
    function p(e) {
        return '[object ShadowRoot]' === Object.prototype.toString.call(e)
    }
    function f(e) {
        try {
            var t = e.rules || e.cssRules
            return t
                ? ((n = Array.from(t).map(h).join('')).includes(' background-clip: text;') &&
                      !n.includes(' -webkit-background-clip: text;') &&
                      (n = n.replace(
                          ' background-clip: text;',
                          ' -webkit-background-clip: text; background-clip: text;'
                      )),
                  n)
                : null
        } catch (e) {
            return null
        }
        var n
    }
    function h(e) {
        var t
        if (
            (function (e) {
                return 'styleSheet' in e
            })(e)
        )
            try {
                t =
                    f(e.styleSheet) ||
                    (function (e) {
                        var t = e.cssText
                        if (t.split('"').length < 3) return t
                        var n = ['@import', 'url('.concat(JSON.stringify(e.href), ')')]
                        return (
                            '' === e.layerName
                                ? n.push('layer')
                                : e.layerName && n.push('layer('.concat(e.layerName, ')')),
                            e.supportsText && n.push('supports('.concat(e.supportsText, ')')),
                            e.media.length && n.push(e.media.mediaText),
                            n.join(' ') + ';'
                        )
                    })(e)
            } catch (e) {}
        return (function (e) {
            if (e.includes(':')) {
                var t = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm
                return e.replace(t, '$1\\$2')
            }
            return e
        })(t || e.cssText)
    }
    !(function (e) {
        ;(e[(e.Document = 0)] = 'Document'),
            (e[(e.DocumentType = 1)] = 'DocumentType'),
            (e[(e.Element = 2)] = 'Element'),
            (e[(e.Text = 3)] = 'Text'),
            (e[(e.CDATA = 4)] = 'CDATA'),
            (e[(e.Comment = 5)] = 'Comment')
    })(e || (e = {}))
    var g = (function () {
        function e() {
            ;(this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap())
        }
        return (
            (e.prototype.getId = function (e) {
                var t
                if (!e) return -1
                var n = null === (t = this.getMeta(e)) || void 0 === t ? void 0 : t.id
                return null != n ? n : -1
            }),
            (e.prototype.getNode = function (e) {
                return this.idNodeMap.get(e) || null
            }),
            (e.prototype.getIds = function () {
                return Array.from(this.idNodeMap.keys())
            }),
            (e.prototype.getMeta = function (e) {
                return this.nodeMetaMap.get(e) || null
            }),
            (e.prototype.removeNodeFromMap = function (e) {
                var t = this,
                    n = this.getId(e)
                this.idNodeMap.delete(n),
                    e.childNodes &&
                        e.childNodes.forEach(function (e) {
                            return t.removeNodeFromMap(e)
                        })
            }),
            (e.prototype.has = function (e) {
                return this.idNodeMap.has(e)
            }),
            (e.prototype.hasNode = function (e) {
                return this.nodeMetaMap.has(e)
            }),
            (e.prototype.add = function (e, t) {
                var n = t.id
                this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t)
            }),
            (e.prototype.replace = function (e, t) {
                var n = this.getNode(e)
                if (n) {
                    var r = this.nodeMetaMap.get(n)
                    r && this.nodeMetaMap.set(t, r)
                }
                this.idNodeMap.set(e, t)
            }),
            (e.prototype.reset = function () {
                ;(this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap())
            }),
            e
        )
    })()
    function m(e) {
        var t = e.element,
            n = e.maskInputOptions,
            r = e.tagName,
            o = e.type,
            a = e.value,
            i = e.maskInputFn,
            s = a || '',
            c = o && v(o)
        return (n[r.toLowerCase()] || (c && n[c])) && (s = i ? i(s, t) : '*'.repeat(s.length)), s
    }
    function v(e) {
        return e.toLowerCase()
    }
    var y = '__rrweb_original__'
    function I(e) {
        var t = e.type
        return e.hasAttribute('data-rr-is-password') ? 'password' : t ? v(t) : null
    }
    var C,
        b,
        S = 1,
        A = new RegExp('[^a-z0-9-_:]'),
        k = -2
    function w() {
        return S++
    }
    var M = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        N = /^(?:[a-z+]+:)?\/\//i,
        T = /^www\..*/i,
        O = /^(data:)([^,]*),(.*)/i
    function E(e, t) {
        return (e || '').replace(M, function (e, n, r, o, a, i) {
            var s,
                c = r || a || i,
                u = n || o || ''
            if (!c) return e
            if (N.test(c) || T.test(c)) return 'url('.concat(u).concat(c).concat(u, ')')
            if (O.test(c)) return 'url('.concat(u).concat(c).concat(u, ')')
            if ('/' === c[0])
                return 'url('
                    .concat(u)
                    .concat(
                        ((s = t),
                        (s.indexOf('//') > -1 ? s.split('/').slice(0, 3).join('/') : s.split('/')[0]).split('?')[0] + c)
                    )
                    .concat(u, ')')
            var l = t.split('/'),
                d = c.split('/')
            l.pop()
            for (var p = 0, f = d; p < f.length; p++) {
                var h = f[p]
                '.' !== h && ('..' === h ? l.pop() : l.push(h))
            }
            return 'url('.concat(u).concat(l.join('/')).concat(u, ')')
        })
    }
    var R = /^[^ \t\n\r\u000c]+/,
        x = /^[, \t\n\r\u000c]+/
    function L(e, t) {
        if (!t || '' === t.trim()) return t
        var n = e.createElement('a')
        return (n.href = t), n.href
    }
    function F(e) {
        return Boolean('svg' === e.tagName || e.ownerSVGElement)
    }
    function D() {
        var e = document.createElement('a')
        return (e.href = ''), e.href
    }
    function W(e, t, n, r) {
        return r
            ? 'src' === n || ('href' === n && ('use' !== t || '#' !== r[0])) || ('xlink:href' === n && '#' !== r[0])
                ? L(e, r)
                : 'background' !== n || ('table' !== t && 'td' !== t && 'th' !== t)
                ? 'srcset' === n
                    ? (function (e, t) {
                          if ('' === t.trim()) return t
                          var n = 0
                          function r(e) {
                              var r,
                                  o = e.exec(t.substring(n))
                              return o ? ((r = o[0]), (n += r.length), r) : ''
                          }
                          for (var o = []; r(x), !(n >= t.length); ) {
                              var a = r(R)
                              if (',' === a.slice(-1)) (a = L(e, a.substring(0, a.length - 1))), o.push(a)
                              else {
                                  var i = ''
                                  a = L(e, a)
                                  for (var s = !1; ; ) {
                                      var c = t.charAt(n)
                                      if ('' === c) {
                                          o.push((a + i).trim())
                                          break
                                      }
                                      if (s) ')' === c && (s = !1)
                                      else {
                                          if (',' === c) {
                                              ;(n += 1), o.push((a + i).trim())
                                              break
                                          }
                                          '(' === c && (s = !0)
                                      }
                                      ;(i += c), (n += 1)
                                  }
                              }
                          }
                          return o.join(', ')
                      })(e, r)
                    : 'style' === n
                    ? E(r, D())
                    : 'object' === t && 'data' === n
                    ? L(e, r)
                    : r
                : L(e, r)
            : r
    }
    function B(e, t, n) {
        return ('video' === e || 'audio' === e) && 'autoplay' === t
    }
    function G(e, t, n) {
        if (!e) return !1
        if (e.nodeType !== e.ELEMENT_NODE) return !!n && G(e.parentNode, t, n)
        for (var r = e.classList.length; r--; ) {
            var o = e.classList[r]
            if (t.test(o)) return !0
        }
        return !!n && G(e.parentNode, t, n)
    }
    function V(e, t, n) {
        try {
            var r = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
            if (null === r) return !1
            if ('string' == typeof t) {
                if (r.classList.contains(t)) return !0
                if (r.closest('.'.concat(t))) return !0
            } else if (G(r, t, !0)) return !0
            if (n) {
                if (r.matches(n)) return !0
                if (r.closest(n)) return !0
            }
        } catch (e) {}
        return !1
    }
    function Z(t, n) {
        var r = n.doc,
            o = n.mirror,
            a = n.blockClass,
            i = n.blockSelector,
            s = n.maskTextClass,
            c = n.maskTextSelector,
            u = n.inlineStylesheet,
            l = n.maskInputOptions,
            d = void 0 === l ? {} : l,
            p = n.maskTextFn,
            h = n.maskInputFn,
            g = n.dataURLOptions,
            S = void 0 === g ? {} : g,
            k = n.inlineImages,
            w = n.recordCanvas,
            M = n.keepIframeSrcFn,
            N = n.newlyAddedElement,
            T = void 0 !== N && N,
            O = (function (e, t) {
                if (!t.hasNode(e)) return
                var n = t.getId(e)
                return 1 === n ? void 0 : n
            })(r, o)
        switch (t.nodeType) {
            case t.DOCUMENT_NODE:
                return 'CSS1Compat' !== t.compatMode
                    ? { type: e.Document, childNodes: [], compatMode: t.compatMode }
                    : { type: e.Document, childNodes: [] }
            case t.DOCUMENT_TYPE_NODE:
                return { type: e.DocumentType, name: t.name, publicId: t.publicId, systemId: t.systemId, rootId: O }
            case t.ELEMENT_NODE:
                return (function (t, n) {
                    for (
                        var r = n.doc,
                            o = n.blockClass,
                            a = n.blockSelector,
                            i = n.inlineStylesheet,
                            s = n.maskInputOptions,
                            c = void 0 === s ? {} : s,
                            u = n.maskInputFn,
                            l = n.dataURLOptions,
                            d = void 0 === l ? {} : l,
                            p = n.inlineImages,
                            h = n.recordCanvas,
                            g = n.keepIframeSrcFn,
                            S = n.newlyAddedElement,
                            k = void 0 !== S && S,
                            w = n.rootId,
                            M = (function (e, t, n) {
                                try {
                                    if ('string' == typeof t) {
                                        if (e.classList.contains(t)) return !0
                                    } else
                                        for (var r = e.classList.length; r--; ) {
                                            var o = e.classList[r]
                                            if (t.test(o)) return !0
                                        }
                                    if (n) return e.matches(n)
                                } catch (e) {}
                                return !1
                            })(t, o, a),
                            N = (function (e) {
                                if (e instanceof HTMLFormElement) return 'form'
                                var t = v(e.tagName)
                                return A.test(t) ? 'div' : t
                            })(t),
                            T = {},
                            O = t.attributes.length,
                            R = 0;
                        R < O;
                        R++
                    ) {
                        var x = t.attributes[R]
                        B(N, x.name, x.value) || (T[x.name] = W(r, N, v(x.name), x.value))
                    }
                    if ('link' === N && i) {
                        var L = Array.from(r.styleSheets).find(function (e) {
                                return e.href === t.href
                            }),
                            G = null
                        L && (G = f(L)), G && (delete T.rel, delete T.href, (T._cssText = E(G, L.href)))
                    }
                    if ('style' === N && t.sheet && !(t.innerText || t.textContent || '').trim().length) {
                        ;(G = f(t.sheet)) && (T._cssText = E(G, D()))
                    }
                    if ('input' === N || 'textarea' === N || 'select' === N) {
                        var V = t.value,
                            Z = t.checked
                        if (
                            'radio' !== T.type &&
                            'checkbox' !== T.type &&
                            'submit' !== T.type &&
                            'button' !== T.type &&
                            V
                        ) {
                            var U = I(t)
                            T.value = m({
                                element: t,
                                type: U,
                                tagName: N,
                                value: V,
                                maskInputOptions: c,
                                maskInputFn: u,
                            })
                        } else Z && (T.checked = Z)
                    }
                    'option' === N && (t.selected && !c.select ? (T.selected = !0) : delete T.selected)
                    if ('canvas' === N && h)
                        if ('2d' === t.__context)
                            (function (e) {
                                var t = e.getContext('2d')
                                if (!t) return !0
                                for (var n = 0; n < e.width; n += 50)
                                    for (var r = 0; r < e.height; r += 50) {
                                        var o = t.getImageData,
                                            a = y in o ? o[y] : o
                                        if (
                                            new Uint32Array(
                                                a.call(
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
                            })(t) || (T.rr_dataURL = t.toDataURL(d.type, d.quality))
                        else if (!('__context' in t)) {
                            var K = t.toDataURL(d.type, d.quality),
                                Y = document.createElement('canvas')
                            ;(Y.width = t.width),
                                (Y.height = t.height),
                                K !== Y.toDataURL(d.type, d.quality) && (T.rr_dataURL = K)
                        }
                    if ('img' === N && p) {
                        C || ((C = r.createElement('canvas')), (b = C.getContext('2d')))
                        var j = t,
                            _ = j.crossOrigin
                        j.crossOrigin = 'anonymous'
                        var J = function e() {
                            j.removeEventListener('load', e)
                            try {
                                ;(C.width = j.naturalWidth),
                                    (C.height = j.naturalHeight),
                                    b.drawImage(j, 0, 0),
                                    (T.rr_dataURL = C.toDataURL(d.type, d.quality))
                            } catch (e) {
                                console.warn('Cannot inline img src='.concat(j.currentSrc, '! Error: ').concat(e))
                            }
                            _ ? (T.crossOrigin = _) : j.removeAttribute('crossorigin')
                        }
                        j.complete && 0 !== j.naturalWidth ? J() : j.addEventListener('load', J)
                    }
                    ;('audio' !== N && 'video' !== N) ||
                        ((T.rr_mediaState = t.paused ? 'paused' : 'played'), (T.rr_mediaCurrentTime = t.currentTime))
                    k ||
                        (t.scrollLeft && (T.rr_scrollLeft = t.scrollLeft),
                        t.scrollTop && (T.rr_scrollTop = t.scrollTop))
                    if (M) {
                        var z = t.getBoundingClientRect(),
                            P = z.width,
                            Q = z.height
                        T = { class: T.class, rr_width: ''.concat(P, 'px'), rr_height: ''.concat(Q, 'px') }
                    }
                    'iframe' !== N || g(T.src) || (t.contentDocument || (T.rr_src = T.src), delete T.src)
                    return {
                        type: e.Element,
                        tagName: N,
                        attributes: T,
                        childNodes: [],
                        isSVG: F(t) || void 0,
                        needBlock: M,
                        rootId: w,
                    }
                })(t, {
                    doc: r,
                    blockClass: a,
                    blockSelector: i,
                    inlineStylesheet: u,
                    maskInputOptions: d,
                    maskInputFn: h,
                    dataURLOptions: S,
                    inlineImages: k,
                    recordCanvas: w,
                    keepIframeSrcFn: M,
                    newlyAddedElement: T,
                    rootId: O,
                })
            case t.TEXT_NODE:
                return (function (t, n) {
                    var r,
                        o = n.maskTextClass,
                        a = n.maskTextSelector,
                        i = n.maskTextFn,
                        s = n.rootId,
                        c = t.parentNode && t.parentNode.tagName,
                        u = t.textContent,
                        l = 'STYLE' === c || void 0,
                        d = 'SCRIPT' === c || void 0
                    if (l && u) {
                        try {
                            t.nextSibling ||
                                t.previousSibling ||
                                ((null === (r = t.parentNode.sheet) || void 0 === r ? void 0 : r.cssRules) &&
                                    (u = f(t.parentNode.sheet)))
                        } catch (e) {
                            console.warn("Cannot get CSS styles from text's parentNode. Error: ".concat(e), t)
                        }
                        u = E(u, D())
                    }
                    d && (u = 'SCRIPT_PLACEHOLDER')
                    !l && !d && u && V(t, o, a) && (u = i ? i(u) : u.replace(/[\S]/g, '*'))
                    return { type: e.Text, textContent: u || '', isStyle: l, rootId: s }
                })(t, { maskTextClass: s, maskTextSelector: c, maskTextFn: p, rootId: O })
            case t.CDATA_SECTION_NODE:
                return { type: e.CDATA, textContent: '', rootId: O }
            case t.COMMENT_NODE:
                return { type: e.Comment, textContent: t.textContent || '', rootId: O }
            default:
                return !1
        }
    }
    function U(e) {
        return null == e ? '' : e.toLowerCase()
    }
    function K(t, n) {
        var r,
            o = n.doc,
            a = n.mirror,
            i = n.blockClass,
            s = n.blockSelector,
            c = n.maskTextClass,
            u = n.maskTextSelector,
            l = n.skipChild,
            f = void 0 !== l && l,
            h = n.inlineStylesheet,
            g = void 0 === h || h,
            m = n.maskInputOptions,
            v = void 0 === m ? {} : m,
            y = n.maskTextFn,
            I = n.maskInputFn,
            C = n.slimDOMOptions,
            b = n.dataURLOptions,
            S = void 0 === b ? {} : b,
            A = n.inlineImages,
            M = void 0 !== A && A,
            N = n.recordCanvas,
            T = void 0 !== N && N,
            O = n.onSerialize,
            E = n.onIframeLoad,
            R = n.iframeLoadTimeout,
            x = void 0 === R ? 5e3 : R,
            L = n.onStylesheetLoad,
            F = n.stylesheetLoadTimeout,
            D = void 0 === F ? 5e3 : F,
            W = n.keepIframeSrcFn,
            B =
                void 0 === W
                    ? function () {
                          return !1
                      }
                    : W,
            G = n.newlyAddedElement,
            V = void 0 !== G && G,
            Y = n.preserveWhiteSpace,
            j = void 0 === Y || Y,
            _ = Z(t, {
                doc: o,
                mirror: a,
                blockClass: i,
                blockSelector: s,
                maskTextClass: c,
                maskTextSelector: u,
                inlineStylesheet: g,
                maskInputOptions: v,
                maskTextFn: y,
                maskInputFn: I,
                dataURLOptions: S,
                inlineImages: M,
                recordCanvas: T,
                keepIframeSrcFn: B,
                newlyAddedElement: V,
            })
        if (!_) return console.warn(t, 'not serialized'), null
        r = a.hasNode(t)
            ? a.getId(t)
            : !(function (t, n) {
                  if (n.comment && t.type === e.Comment) return !0
                  if (t.type === e.Element) {
                      if (
                          n.script &&
                          ('script' === t.tagName ||
                              ('link' === t.tagName &&
                                  ('preload' === t.attributes.rel || 'modulepreload' === t.attributes.rel) &&
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
                                  (U(t.attributes.name).match(/^msapplication-tile(image|color)$/) ||
                                      'application-name' === U(t.attributes.name) ||
                                      'icon' === U(t.attributes.rel) ||
                                      'apple-touch-icon' === U(t.attributes.rel) ||
                                      'shortcut icon' === U(t.attributes.rel))))
                      )
                          return !0
                      if ('meta' === t.tagName) {
                          if (n.headMetaDescKeywords && U(t.attributes.name).match(/^description|keywords$/)) return !0
                          if (
                              n.headMetaSocial &&
                              (U(t.attributes.property).match(/^(og|twitter|fb):/) ||
                                  U(t.attributes.name).match(/^(og|twitter):/) ||
                                  'pinterest' === U(t.attributes.name))
                          )
                              return !0
                          if (
                              n.headMetaRobots &&
                              ('robots' === U(t.attributes.name) ||
                                  'googlebot' === U(t.attributes.name) ||
                                  'bingbot' === U(t.attributes.name))
                          )
                              return !0
                          if (n.headMetaHttpEquiv && void 0 !== t.attributes['http-equiv']) return !0
                          if (
                              n.headMetaAuthorship &&
                              ('author' === U(t.attributes.name) ||
                                  'generator' === U(t.attributes.name) ||
                                  'framework' === U(t.attributes.name) ||
                                  'publisher' === U(t.attributes.name) ||
                                  'progid' === U(t.attributes.name) ||
                                  U(t.attributes.property).match(/^article:/) ||
                                  U(t.attributes.property).match(/^product:/))
                          )
                              return !0
                          if (
                              n.headMetaVerification &&
                              ('google-site-verification' === U(t.attributes.name) ||
                                  'yandex-verification' === U(t.attributes.name) ||
                                  'csrf-token' === U(t.attributes.name) ||
                                  'p:domain_verify' === U(t.attributes.name) ||
                                  'verify-v1' === U(t.attributes.name) ||
                                  'verification' === U(t.attributes.name) ||
                                  'shopify-checkout-api-token' === U(t.attributes.name))
                          )
                              return !0
                      }
                  }
                  return !1
              })(_, C) &&
              (j || _.type !== e.Text || _.isStyle || _.textContent.replace(/^\s+|\s+$/gm, '').length)
            ? w()
            : k
        var J = Object.assign(_, { id: r })
        if ((a.add(t, J), r === k)) return null
        O && O(t)
        var z = !f
        if (J.type === e.Element) {
            ;(z = z && !J.needBlock), delete J.needBlock
            var P = t.shadowRoot
            P && p(P) && (J.isShadowHost = !0)
        }
        if ((J.type === e.Document || J.type === e.Element) && z) {
            C.headWhitespace && J.type === e.Element && 'head' === J.tagName && (j = !1)
            for (
                var Q = {
                        doc: o,
                        mirror: a,
                        blockClass: i,
                        blockSelector: s,
                        maskTextClass: c,
                        maskTextSelector: u,
                        skipChild: f,
                        inlineStylesheet: g,
                        maskInputOptions: v,
                        maskTextFn: y,
                        maskInputFn: I,
                        slimDOMOptions: C,
                        dataURLOptions: S,
                        inlineImages: M,
                        recordCanvas: T,
                        preserveWhiteSpace: j,
                        onSerialize: O,
                        onIframeLoad: E,
                        iframeLoadTimeout: x,
                        onStylesheetLoad: L,
                        stylesheetLoadTimeout: D,
                        keepIframeSrcFn: B,
                    },
                    H = 0,
                    X = Array.from(t.childNodes);
                H < X.length;
                H++
            ) {
                ;(ee = K(X[H], Q)) && J.childNodes.push(ee)
            }
            if (
                (function (e) {
                    return e.nodeType === e.ELEMENT_NODE
                })(t) &&
                t.shadowRoot
            )
                for (var q = 0, $ = Array.from(t.shadowRoot.childNodes); q < $.length; q++) {
                    var ee
                    ;(ee = K($[q], Q)) && (p(t.shadowRoot) && (ee.isShadow = !0), J.childNodes.push(ee))
                }
        }
        return (
            t.parentNode && d(t.parentNode) && p(t.parentNode) && (J.isShadow = !0),
            J.type === e.Element &&
                'iframe' === J.tagName &&
                (function (e, t, n) {
                    var r = e.contentWindow
                    if (r) {
                        var o,
                            a = !1
                        try {
                            o = r.document.readyState
                        } catch (e) {
                            return
                        }
                        if ('complete' === o) {
                            var i = 'about:blank'
                            if (r.location.href !== i || e.src === i || '' === e.src)
                                return setTimeout(t, 0), e.addEventListener('load', t)
                            e.addEventListener('load', t)
                        } else {
                            var s = setTimeout(function () {
                                a || (t(), (a = !0))
                            }, n)
                            e.addEventListener('load', function () {
                                clearTimeout(s), (a = !0), t()
                            })
                        }
                    }
                })(
                    t,
                    function () {
                        var e = t.contentDocument
                        if (e && E) {
                            var n = K(e, {
                                doc: e,
                                mirror: a,
                                blockClass: i,
                                blockSelector: s,
                                maskTextClass: c,
                                maskTextSelector: u,
                                skipChild: !1,
                                inlineStylesheet: g,
                                maskInputOptions: v,
                                maskTextFn: y,
                                maskInputFn: I,
                                slimDOMOptions: C,
                                dataURLOptions: S,
                                inlineImages: M,
                                recordCanvas: T,
                                preserveWhiteSpace: j,
                                onSerialize: O,
                                onIframeLoad: E,
                                iframeLoadTimeout: x,
                                onStylesheetLoad: L,
                                stylesheetLoadTimeout: D,
                                keepIframeSrcFn: B,
                            })
                            n && E(t, n)
                        }
                    },
                    x
                ),
            J.type === e.Element &&
                'link' === J.tagName &&
                'stylesheet' === J.attributes.rel &&
                (function (e, t, n) {
                    var r,
                        o = !1
                    try {
                        r = e.sheet
                    } catch (e) {
                        return
                    }
                    if (!r) {
                        var a = setTimeout(function () {
                            o || (t(), (o = !0))
                        }, n)
                        e.addEventListener('load', function () {
                            clearTimeout(a), (o = !0), t()
                        })
                    }
                })(
                    t,
                    function () {
                        if (L) {
                            var e = K(t, {
                                doc: o,
                                mirror: a,
                                blockClass: i,
                                blockSelector: s,
                                maskTextClass: c,
                                maskTextSelector: u,
                                skipChild: !1,
                                inlineStylesheet: g,
                                maskInputOptions: v,
                                maskTextFn: y,
                                maskInputFn: I,
                                slimDOMOptions: C,
                                dataURLOptions: S,
                                inlineImages: M,
                                recordCanvas: T,
                                preserveWhiteSpace: j,
                                onSerialize: O,
                                onIframeLoad: E,
                                iframeLoadTimeout: x,
                                onStylesheetLoad: L,
                                stylesheetLoadTimeout: D,
                                keepIframeSrcFn: B,
                            })
                            e && L(t, e)
                        }
                    },
                    D
                ),
            J
        )
    }
    function Y(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document,
            r = { capture: !0, passive: !0 }
        return (
            n.addEventListener(e, t, r),
            function () {
                return n.removeEventListener(e, t, r)
            }
        )
    }
    var j =
            'Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.',
        _ = {
            map: {},
            getId: function () {
                return console.error(j), -1
            },
            getNode: function () {
                return console.error(j), null
            },
            removeNodeFromMap: function () {
                console.error(j)
            },
            has: function () {
                return console.error(j), !1
            },
            reset: function () {
                console.error(j)
            },
        }
    function J(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = null,
            o = 0
        return function () {
            for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s]
            var c = Date.now()
            o || !1 !== n.leading || (o = c)
            var u = t - (c - o),
                l = this
            u <= 0 || u > t
                ? (r && (clearTimeout(r), (r = null)), (o = c), e.apply(l, i))
                : r ||
                  !1 === n.trailing ||
                  (r = setTimeout(function () {
                      ;(o = !1 === n.leading ? 0 : Date.now()), (r = null), e.apply(l, i)
                  }, u))
        }
    }
    function z(e, t, n, r) {
        var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window,
            a = o.Object.getOwnPropertyDescriptor(e, t)
        return (
            o.Object.defineProperty(
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
                                  a && a.set && a.set.call(this, e)
                          },
                      }
            ),
            function () {
                return z(e, t, a || {}, !0)
            }
        )
    }
    function P(e, t, n) {
        try {
            if (!(t in e)) return function () {}
            var r = e[t],
                o = n(r)
            return (
                'function' == typeof o &&
                    ((o.prototype = o.prototype || {}),
                    Object.defineProperties(o, { __rrweb_original__: { enumerable: !1, value: r } })),
                (e[t] = o),
                function () {
                    e[t] = r
                }
            )
        } catch (e) {
            return function () {}
        }
    }
    'undefined' != typeof window &&
        window.Proxy &&
        window.Reflect &&
        (_ = new Proxy(_, {
            get: function (e, t, n) {
                return 'map' === t && console.error(j), Reflect.get(e, t, n)
            },
        }))
    var Q = Date.now
    function H(e) {
        var t,
            n,
            r,
            o,
            a,
            i,
            s = e.document
        return {
            left: s.scrollingElement
                ? s.scrollingElement.scrollLeft
                : void 0 !== e.pageXOffset
                ? e.pageXOffset
                : (null == s ? void 0 : s.documentElement.scrollLeft) ||
                  (null ===
                      (n = null === (t = null == s ? void 0 : s.body) || void 0 === t ? void 0 : t.parentElement) ||
                  void 0 === n
                      ? void 0
                      : n.scrollLeft) ||
                  (null === (r = null == s ? void 0 : s.body) || void 0 === r ? void 0 : r.scrollLeft) ||
                  0,
            top: s.scrollingElement
                ? s.scrollingElement.scrollTop
                : void 0 !== e.pageYOffset
                ? e.pageYOffset
                : (null == s ? void 0 : s.documentElement.scrollTop) ||
                  (null ===
                      (a = null === (o = null == s ? void 0 : s.body) || void 0 === o ? void 0 : o.parentElement) ||
                  void 0 === a
                      ? void 0
                      : a.scrollTop) ||
                  (null === (i = null == s ? void 0 : s.body) || void 0 === i ? void 0 : i.scrollTop) ||
                  0,
        }
    }
    function X() {
        return (
            window.innerHeight ||
            (document.documentElement && document.documentElement.clientHeight) ||
            (document.body && document.body.clientHeight)
        )
    }
    function q() {
        return (
            window.innerWidth ||
            (document.documentElement && document.documentElement.clientWidth) ||
            (document.body && document.body.clientWidth)
        )
    }
    function $(e, t, n, r) {
        if (!e) return !1
        var o = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
        if (!o) return !1
        try {
            if ('string' == typeof t) {
                if (o.classList.contains(t)) return !0
                if (r && null !== o.closest('.' + t)) return !0
            } else if (G(o, t, r)) return !0
        } catch (e) {}
        if (n) {
            if (o.matches(n)) return !0
            if (r && null !== o.closest(n)) return !0
        }
        return !1
    }
    function ee(e, t) {
        return t.getId(e) === k
    }
    function te(e, t) {
        if (d(e)) return !1
        var n = t.getId(e)
        return (
            !t.has(n) ||
            ((!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || te(e.parentNode, t)))
        )
    }
    function ne(e) {
        return Boolean(e.changedTouches)
    }
    function re(e, t) {
        return Boolean('IFRAME' === e.nodeName && t.getMeta(e))
    }
    function oe(e, t) {
        return Boolean(
            'LINK' === e.nodeName &&
                e.nodeType === e.ELEMENT_NODE &&
                e.getAttribute &&
                'stylesheet' === e.getAttribute('rel') &&
                t.getMeta(e)
        )
    }
    function ae(e) {
        return Boolean(null == e ? void 0 : e.shadowRoot)
    }
    ;/[1-9][0-9]{12}/.test(Date.now().toString()) ||
        (Q = function () {
            return new Date().getTime()
        })
    var ie = (function () {
        function e() {
            r(this, e), (this.id = 1), (this.styleIDMap = new WeakMap()), (this.idStyleMap = new Map())
        }
        return (
            a(e, [
                {
                    key: 'getId',
                    value: function (e) {
                        var t
                        return null !== (t = this.styleIDMap.get(e)) && void 0 !== t ? t : -1
                    },
                },
                {
                    key: 'has',
                    value: function (e) {
                        return this.styleIDMap.has(e)
                    },
                },
                {
                    key: 'add',
                    value: function (e, t) {
                        return this.has(e)
                            ? this.getId(e)
                            : ((n = void 0 === t ? this.id++ : t),
                              this.styleIDMap.set(e, n),
                              this.idStyleMap.set(n, e),
                              n)
                        var n
                    },
                },
                {
                    key: 'getStyle',
                    value: function (e) {
                        return this.idStyleMap.get(e) || null
                    },
                },
                {
                    key: 'reset',
                    value: function () {
                        ;(this.styleIDMap = new WeakMap()), (this.idStyleMap = new Map()), (this.id = 1)
                    },
                },
                {
                    key: 'generateId',
                    value: function () {
                        return this.id++
                    },
                },
            ]),
            e
        )
    })()
    function se(e) {
        var t,
            n,
            r = null
        return (
            (null === (n = null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)) || void 0 === n
                ? void 0
                : n.nodeType) === Node.DOCUMENT_FRAGMENT_NODE &&
                e.getRootNode().host &&
                (r = e.getRootNode().host),
            r
        )
    }
    function ce(e) {
        var t = e.ownerDocument
        if (!t) return !1
        var n = (function (e) {
            for (var t, n = e; (t = se(n)); ) n = t
            return n
        })(e)
        return t.contains(n)
    }
    function ue(e) {
        var t = e.ownerDocument
        return !!t && (t.contains(e) || ce(e))
    }
    var le = (function (e) {
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
        })(le || {}),
        de = (function (e) {
            return (
                (e[(e.Mutation = 0)] = 'Mutation'),
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
                (e[(e.AdoptedStyleSheet = 15)] = 'AdoptedStyleSheet'),
                e
            )
        })(de || {}),
        pe = (function (e) {
            return (
                (e[(e.MouseUp = 0)] = 'MouseUp'),
                (e[(e.MouseDown = 1)] = 'MouseDown'),
                (e[(e.Click = 2)] = 'Click'),
                (e[(e.ContextMenu = 3)] = 'ContextMenu'),
                (e[(e.DblClick = 4)] = 'DblClick'),
                (e[(e.Focus = 5)] = 'Focus'),
                (e[(e.Blur = 6)] = 'Blur'),
                (e[(e.TouchStart = 7)] = 'TouchStart'),
                (e[(e.TouchMove_Departed = 8)] = 'TouchMove_Departed'),
                (e[(e.TouchEnd = 9)] = 'TouchEnd'),
                (e[(e.TouchCancel = 10)] = 'TouchCancel'),
                e
            )
        })(pe || {}),
        fe = (function (e) {
            return (e[(e.Mouse = 0)] = 'Mouse'), (e[(e.Pen = 1)] = 'Pen'), (e[(e.Touch = 2)] = 'Touch'), e
        })(fe || {}),
        he = (function (e) {
            return (e[(e['2D'] = 0)] = '2D'), (e[(e.WebGL = 1)] = 'WebGL'), (e[(e.WebGL2 = 2)] = 'WebGL2'), e
        })(he || {})
    function ge(e) {
        return '__ln' in e
    }
    var me,
        ve = (function () {
            function e() {
                r(this, e), (this.length = 0), (this.head = null), (this.tail = null)
            }
            return (
                a(e, [
                    {
                        key: 'get',
                        value: function (e) {
                            if (e >= this.length) throw new Error('Position outside of list range')
                            for (var t = this.head, n = 0; n < e; n++) t = (null == t ? void 0 : t.next) || null
                            return t
                        },
                    },
                    {
                        key: 'addNode',
                        value: function (e) {
                            var t = { value: e, previous: null, next: null }
                            if (((e.__ln = t), e.previousSibling && ge(e.previousSibling))) {
                                var n = e.previousSibling.__ln.next
                                ;(t.next = n),
                                    (t.previous = e.previousSibling.__ln),
                                    (e.previousSibling.__ln.next = t),
                                    n && (n.previous = t)
                            } else if (e.nextSibling && ge(e.nextSibling) && e.nextSibling.__ln.previous) {
                                var r = e.nextSibling.__ln.previous
                                ;(t.previous = r),
                                    (t.next = e.nextSibling.__ln),
                                    (e.nextSibling.__ln.previous = t),
                                    r && (r.next = t)
                            } else this.head && (this.head.previous = t), (t.next = this.head), (this.head = t)
                            null === t.next && (this.tail = t), this.length++
                        },
                    },
                    {
                        key: 'removeNode',
                        value: function (e) {
                            var t = e.__ln
                            this.head &&
                                (t.previous
                                    ? ((t.previous.next = t.next),
                                      t.next ? (t.next.previous = t.previous) : (this.tail = t.previous))
                                    : ((this.head = t.next),
                                      this.head ? (this.head.previous = null) : (this.tail = null)),
                                e.__ln && delete e.__ln,
                                this.length--)
                        },
                    },
                ]),
                e
            )
        })(),
        ye = function (e, t) {
            return ''.concat(e, '@').concat(t)
        },
        Ie = (function () {
            function e() {
                var t = this
                r(this, e),
                    (this.frozen = !1),
                    (this.locked = !1),
                    (this.texts = []),
                    (this.attributes = []),
                    (this.removes = []),
                    (this.mapRemoves = []),
                    (this.movedMap = {}),
                    (this.addedSet = new Set()),
                    (this.movedSet = new Set()),
                    (this.droppedSet = new Set()),
                    (this.processMutations = function (e) {
                        e.forEach(t.processMutation), t.emit()
                    }),
                    (this.emit = function () {
                        if (!t.frozen && !t.locked) {
                            for (
                                var e = [],
                                    n = new Set(),
                                    r = new ve(),
                                    o = function (e) {
                                        for (var n = e, r = k; r === k; )
                                            r = (n = n && n.nextSibling) && t.mirror.getId(n)
                                        return r
                                    },
                                    a = function (a) {
                                        if (a.parentNode && ue(a)) {
                                            var i = d(a.parentNode)
                                                    ? t.mirror.getId(se(a))
                                                    : t.mirror.getId(a.parentNode),
                                                s = o(a)
                                            if (-1 === i || -1 === s) return r.addNode(a)
                                            var c = K(a, {
                                                doc: t.doc,
                                                mirror: t.mirror,
                                                blockClass: t.blockClass,
                                                blockSelector: t.blockSelector,
                                                maskTextClass: t.maskTextClass,
                                                maskTextSelector: t.maskTextSelector,
                                                skipChild: !0,
                                                newlyAddedElement: !0,
                                                inlineStylesheet: t.inlineStylesheet,
                                                maskInputOptions: t.maskInputOptions,
                                                maskTextFn: t.maskTextFn,
                                                maskInputFn: t.maskInputFn,
                                                slimDOMOptions: t.slimDOMOptions,
                                                dataURLOptions: t.dataURLOptions,
                                                recordCanvas: t.recordCanvas,
                                                inlineImages: t.inlineImages,
                                                onSerialize: function (e) {
                                                    re(e, t.mirror) && t.iframeManager.addIframe(e),
                                                        oe(e, t.mirror) && t.stylesheetManager.trackLinkElement(e),
                                                        ae(a) && t.shadowDomManager.addShadowRoot(a.shadowRoot, t.doc)
                                                },
                                                onIframeLoad: function (e, n) {
                                                    t.iframeManager.attachIframe(e, n),
                                                        t.shadowDomManager.observeAttachShadow(e)
                                                },
                                                onStylesheetLoad: function (e, n) {
                                                    t.stylesheetManager.attachLinkElement(e, n)
                                                },
                                            })
                                            c && (e.push({ parentId: i, nextId: s, node: c }), n.add(c.id))
                                        }
                                    };
                                t.mapRemoves.length;

                            )
                                t.mirror.removeNodeFromMap(t.mapRemoves.shift())
                            var i,
                                s = l(t.movedSet)
                            try {
                                for (s.s(); !(i = s.n()).done; ) {
                                    var c = i.value
                                    ;(be(t.removes, c, t.mirror) && !t.movedSet.has(c.parentNode)) || a(c)
                                }
                            } catch (e) {
                                s.e(e)
                            } finally {
                                s.f()
                            }
                            var u,
                                p = l(t.addedSet)
                            try {
                                for (p.s(); !(u = p.n()).done; ) {
                                    var f = u.value
                                    Ae(t.droppedSet, f) || be(t.removes, f, t.mirror)
                                        ? Ae(t.movedSet, f)
                                            ? a(f)
                                            : t.droppedSet.add(f)
                                        : a(f)
                                }
                            } catch (e) {
                                p.e(e)
                            } finally {
                                p.f()
                            }
                            for (var h = null; r.length; ) {
                                var g = null
                                if (h) {
                                    var m = t.mirror.getId(h.value.parentNode),
                                        v = o(h.value)
                                    ;-1 !== m && -1 !== v && (g = h)
                                }
                                if (!g)
                                    for (var y = r.tail; y; ) {
                                        var I = y
                                        if (((y = y.previous), I)) {
                                            var C = t.mirror.getId(I.value.parentNode)
                                            if (-1 === o(I.value)) continue
                                            if (-1 !== C) {
                                                g = I
                                                break
                                            }
                                            var b = I.value
                                            if (b.parentNode && b.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                                var S = b.parentNode.host
                                                if (-1 !== t.mirror.getId(S)) {
                                                    g = I
                                                    break
                                                }
                                            }
                                        }
                                    }
                                if (!g) {
                                    for (; r.head; ) r.removeNode(r.head.value)
                                    break
                                }
                                ;(h = g.previous), r.removeNode(g.value), a(g.value)
                            }
                            var A = {
                                texts: t.texts
                                    .map(function (e) {
                                        return { id: t.mirror.getId(e.node), value: e.value }
                                    })
                                    .filter(function (e) {
                                        return !n.has(e.id)
                                    })
                                    .filter(function (e) {
                                        return t.mirror.has(e.id)
                                    }),
                                attributes: t.attributes
                                    .map(function (e) {
                                        var n = e.attributes
                                        if ('string' == typeof n.style) {
                                            var r = JSON.stringify(e.styleDiff),
                                                o = JSON.stringify(e._unchangedStyles)
                                            r.length < n.style.length &&
                                                (r + o).split('var(').length === n.style.split('var(').length &&
                                                (n.style = e.styleDiff)
                                        }
                                        return { id: t.mirror.getId(e.node), attributes: n }
                                    })
                                    .filter(function (e) {
                                        return !n.has(e.id)
                                    })
                                    .filter(function (e) {
                                        return t.mirror.has(e.id)
                                    }),
                                removes: t.removes,
                                adds: e,
                            }
                            ;(A.texts.length || A.attributes.length || A.removes.length || A.adds.length) &&
                                ((t.texts = []),
                                (t.attributes = []),
                                (t.removes = []),
                                (t.addedSet = new Set()),
                                (t.movedSet = new Set()),
                                (t.droppedSet = new Set()),
                                (t.movedMap = {}),
                                t.mutationCb(A))
                        }
                    }),
                    (this.processMutation = function (e) {
                        if (!ee(e.target, t.mirror)) {
                            var n
                            try {
                                n = document.implementation.createHTMLDocument()
                            } catch (e) {
                                n = t.doc
                            }
                            switch (e.type) {
                                case 'characterData':
                                    var r = e.target.textContent
                                    $(e.target, t.blockClass, t.blockSelector, !1) ||
                                        r === e.oldValue ||
                                        t.texts.push({
                                            value:
                                                V(e.target, t.maskTextClass, t.maskTextSelector) && r
                                                    ? t.maskTextFn
                                                        ? t.maskTextFn(r)
                                                        : r.replace(/[\S]/g, '*')
                                                    : r,
                                            node: e.target,
                                        })
                                    break
                                case 'attributes':
                                    var o = e.target,
                                        a = e.attributeName,
                                        i = e.target.getAttribute(a)
                                    if ('value' === a) {
                                        var s = I(o)
                                        i = m({
                                            element: o,
                                            maskInputOptions: t.maskInputOptions,
                                            tagName: o.tagName,
                                            type: s,
                                            value: i,
                                            maskInputFn: t.maskInputFn,
                                        })
                                    }
                                    if ($(e.target, t.blockClass, t.blockSelector, !1) || i === e.oldValue) return
                                    var c = t.attributes.find(function (t) {
                                        return t.node === e.target
                                    })
                                    if ('IFRAME' === o.tagName && 'src' === a && !t.keepIframeSrcFn(i)) {
                                        if (o.contentDocument) return
                                        a = 'rr_src'
                                    }
                                    if (
                                        (c ||
                                            ((c = {
                                                node: e.target,
                                                attributes: {},
                                                styleDiff: {},
                                                _unchangedStyles: {},
                                            }),
                                            t.attributes.push(c)),
                                        'type' === a &&
                                            'INPUT' === o.tagName &&
                                            'password' === (e.oldValue || '').toLowerCase() &&
                                            o.setAttribute('data-rr-is-password', 'true'),
                                        !B(o.tagName, a) &&
                                            ((c.attributes[a] = W(t.doc, v(o.tagName), v(a), i)), 'style' === a))
                                    ) {
                                        var u = n.createElement('span')
                                        e.oldValue && u.setAttribute('style', e.oldValue)
                                        for (var l = 0, f = Array.from(o.style); l < f.length; l++) {
                                            var h = f[l],
                                                g = o.style.getPropertyValue(h),
                                                y = o.style.getPropertyPriority(h)
                                            g !== u.style.getPropertyValue(h) || y !== u.style.getPropertyPriority(h)
                                                ? (c.styleDiff[h] = '' === y ? g : [g, y])
                                                : (c._unchangedStyles[h] = [g, y])
                                        }
                                        for (var C = 0, b = Array.from(u.style); C < b.length; C++) {
                                            var S = b[C]
                                            '' === o.style.getPropertyValue(S) && (c.styleDiff[S] = !1)
                                        }
                                    }
                                    break
                                case 'childList':
                                    if ($(e.target, t.blockClass, t.blockSelector, !0)) return
                                    e.addedNodes.forEach(function (n) {
                                        return t.genAdds(n, e.target)
                                    }),
                                        e.removedNodes.forEach(function (n) {
                                            var r = t.mirror.getId(n),
                                                o = d(e.target)
                                                    ? t.mirror.getId(e.target.host)
                                                    : t.mirror.getId(e.target)
                                            $(e.target, t.blockClass, t.blockSelector, !1) ||
                                                ee(n, t.mirror) ||
                                                !(function (e, t) {
                                                    return -1 !== t.getId(e)
                                                })(n, t.mirror) ||
                                                (t.addedSet.has(n)
                                                    ? (Ce(t.addedSet, n), t.droppedSet.add(n))
                                                    : (t.addedSet.has(e.target) && -1 === r) ||
                                                      te(e.target, t.mirror) ||
                                                      (t.movedSet.has(n) && t.movedMap[ye(r, o)]
                                                          ? Ce(t.movedSet, n)
                                                          : t.removes.push({
                                                                parentId: o,
                                                                id: r,
                                                                isShadow: !(!d(e.target) || !p(e.target)) || void 0,
                                                            })),
                                                t.mapRemoves.push(n))
                                        })
                            }
                        }
                    }),
                    (this.genAdds = function (e, n) {
                        if (!t.processedNodeManager.inOtherBuffer(e, t) && !t.addedSet.has(e) && !t.movedSet.has(e)) {
                            if (t.mirror.hasNode(e)) {
                                if (ee(e, t.mirror)) return
                                t.movedSet.add(e)
                                var r = null
                                n && t.mirror.hasNode(n) && (r = t.mirror.getId(n)),
                                    r && -1 !== r && (t.movedMap[ye(t.mirror.getId(e), r)] = !0)
                            } else t.addedSet.add(e), t.droppedSet.delete(e)
                            $(e, t.blockClass, t.blockSelector, !1) ||
                                (e.childNodes.forEach(function (e) {
                                    return t.genAdds(e)
                                }),
                                ae(e) &&
                                    e.shadowRoot.childNodes.forEach(function (n) {
                                        t.processedNodeManager.add(n, t), t.genAdds(n, e)
                                    }))
                        }
                    })
            }
            return (
                a(e, [
                    {
                        key: 'init',
                        value: function (e) {
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
                                'keepIframeSrcFn',
                                'recordCanvas',
                                'inlineImages',
                                'slimDOMOptions',
                                'dataURLOptions',
                                'doc',
                                'mirror',
                                'iframeManager',
                                'stylesheetManager',
                                'shadowDomManager',
                                'canvasManager',
                                'processedNodeManager',
                            ].forEach(function (n) {
                                t[n] = e[n]
                            })
                        },
                    },
                    {
                        key: 'freeze',
                        value: function () {
                            ;(this.frozen = !0), this.canvasManager.freeze()
                        },
                    },
                    {
                        key: 'unfreeze',
                        value: function () {
                            ;(this.frozen = !1), this.canvasManager.unfreeze(), this.emit()
                        },
                    },
                    {
                        key: 'isFrozen',
                        value: function () {
                            return this.frozen
                        },
                    },
                    {
                        key: 'lock',
                        value: function () {
                            ;(this.locked = !0), this.canvasManager.lock()
                        },
                    },
                    {
                        key: 'unlock',
                        value: function () {
                            ;(this.locked = !1), this.canvasManager.unlock(), this.emit()
                        },
                    },
                    {
                        key: 'reset',
                        value: function () {
                            this.shadowDomManager.reset(), this.canvasManager.reset()
                        },
                    },
                ]),
                e
            )
        })()
    function Ce(e, t) {
        e.delete(t),
            t.childNodes.forEach(function (t) {
                return Ce(e, t)
            })
    }
    function be(e, t, n) {
        return 0 !== e.length && Se(e, t, n)
    }
    function Se(e, t, n) {
        var r = t.parentNode
        if (!r) return !1
        var o = n.getId(r)
        return (
            !!e.some(function (e) {
                return e.id === o
            }) || Se(e, r, n)
        )
    }
    function Ae(e, t) {
        return 0 !== e.size && ke(e, t)
    }
    function ke(e, t) {
        var n = t.parentNode
        return !!n && (!!e.has(n) || ke(e, n))
    }
    function we(e) {
        me = e
    }
    function Me() {
        me = void 0
    }
    var Ne = function (e) {
            if (!me) return e
            return function () {
                try {
                    return e.apply(void 0, arguments)
                } catch (e) {
                    if (me && !0 === me(e)) return
                    throw e
                }
            }
        },
        Te = []
    function Oe(e) {
        try {
            if ('composedPath' in e) {
                var t = e.composedPath()
                if (t.length) return t[0]
            } else if ('path' in e && e.path.length) return e.path[0]
        } catch (e) {}
        return e && e.target
    }
    function Ee(e, t) {
        var n,
            r,
            o = new Ie()
        Te.push(o), o.init(e)
        var a = window.MutationObserver || window.__rrMutationObserver,
            i =
                null ===
                    (r =
                        null === (n = null === window || void 0 === window ? void 0 : window.Zone) || void 0 === n
                            ? void 0
                            : n.__symbol__) || void 0 === r
                    ? void 0
                    : r.call(n, 'MutationObserver')
        i && window[i] && (a = window[i])
        var s = new a(Ne(o.processMutations.bind(o)))
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
    function Re(e) {
        var t = e.mouseInteractionCb,
            n = e.doc,
            r = e.mirror,
            o = e.blockClass,
            a = e.blockSelector,
            i = e.sampling
        if (!1 === i.mouseInteraction) return function () {}
        var s = !0 === i.mouseInteraction || void 0 === i.mouseInteraction ? {} : i.mouseInteraction,
            c = [],
            u = null
        return (
            Object.keys(pe)
                .filter(function (e) {
                    return Number.isNaN(Number(e)) && !e.endsWith('_Departed') && !1 !== s[e]
                })
                .forEach(function (e) {
                    var i = v(e),
                        s = (function (e) {
                            return function (n) {
                                var i = Oe(n)
                                if (!$(i, o, a, !0)) {
                                    var s = null,
                                        c = e
                                    if ('pointerType' in n) {
                                        switch (n.pointerType) {
                                            case 'mouse':
                                                s = fe.Mouse
                                                break
                                            case 'touch':
                                                s = fe.Touch
                                                break
                                            case 'pen':
                                                s = fe.Pen
                                        }
                                        s === fe.Touch
                                            ? pe[e] === pe.MouseDown
                                                ? (c = 'TouchStart')
                                                : pe[e] === pe.MouseUp && (c = 'TouchEnd')
                                            : fe.Pen
                                    } else ne(n) && (s = fe.Touch)
                                    null !== s
                                        ? ((u = s),
                                          ((c.startsWith('Touch') && s === fe.Touch) ||
                                              (c.startsWith('Mouse') && s === fe.Mouse)) &&
                                              (s = null))
                                        : pe[e] === pe.Click && ((s = u), (u = null))
                                    var l = ne(n) ? n.changedTouches[0] : n
                                    if (l) {
                                        var d = r.getId(i),
                                            p = l.clientX,
                                            f = l.clientY
                                        Ne(t)(
                                            Object.assign(
                                                { type: pe[c], id: d, x: p, y: f },
                                                null !== s && { pointerType: s }
                                            )
                                        )
                                    }
                                }
                            }
                        })(e)
                    if (window.PointerEvent)
                        switch (pe[e]) {
                            case pe.MouseDown:
                            case pe.MouseUp:
                                i = i.replace('mouse', 'pointer')
                                break
                            case pe.TouchStart:
                            case pe.TouchEnd:
                                return
                        }
                    c.push(Y(i, s, n))
                }),
            Ne(function () {
                c.forEach(function (e) {
                    return e()
                })
            })
        )
    }
    function xe(e) {
        var t = e.scrollCb,
            n = e.doc,
            r = e.mirror,
            o = e.blockClass,
            a = e.blockSelector,
            i = e.sampling
        return Y(
            'scroll',
            Ne(
                J(
                    Ne(function (e) {
                        var i = Oe(e)
                        if (i && !$(i, o, a, !0)) {
                            var s = r.getId(i)
                            if (i === n && n.defaultView) {
                                var c = H(n.defaultView)
                                t({ id: s, x: c.left, y: c.top })
                            } else t({ id: s, x: i.scrollLeft, y: i.scrollTop })
                        }
                    }),
                    i.scroll || 100
                )
            ),
            n
        )
    }
    function Le(e, t) {
        var n = Object.assign({}, e)
        return t || delete n.userTriggered, n
    }
    var Fe = ['INPUT', 'TEXTAREA', 'SELECT'],
        De = new WeakMap()
    function We(e) {
        return (function (e, t) {
            if (
                (Ze('CSSGroupingRule') && e.parentRule instanceof CSSGroupingRule) ||
                (Ze('CSSMediaRule') && e.parentRule instanceof CSSMediaRule) ||
                (Ze('CSSSupportsRule') && e.parentRule instanceof CSSSupportsRule) ||
                (Ze('CSSConditionRule') && e.parentRule instanceof CSSConditionRule)
            ) {
                var n = Array.from(e.parentRule.cssRules).indexOf(e)
                t.unshift(n)
            } else if (e.parentStyleSheet) {
                var r = Array.from(e.parentStyleSheet.cssRules).indexOf(e)
                t.unshift(r)
            }
            return t
        })(e, [])
    }
    function Be(e, t, n) {
        var r, o
        return e ? (e.ownerNode ? (r = t.getId(e.ownerNode)) : (o = n.getId(e)), { styleId: o, id: r }) : {}
    }
    function Ge(e, t) {
        var n,
            r,
            o,
            a = e.mirror,
            i = e.stylesheetManager,
            s = null
        s = '#document' === t.nodeName ? a.getId(t) : a.getId(t.host)
        var c =
                '#document' === t.nodeName
                    ? null === (n = t.defaultView) || void 0 === n
                        ? void 0
                        : n.Document
                    : null === (o = null === (r = t.ownerDocument) || void 0 === r ? void 0 : r.defaultView) ||
                      void 0 === o
                    ? void 0
                    : o.ShadowRoot,
            u = Object.getOwnPropertyDescriptor(null == c ? void 0 : c.prototype, 'adoptedStyleSheets')
        return null !== s && -1 !== s && c && u
            ? (Object.defineProperty(t, 'adoptedStyleSheets', {
                  configurable: u.configurable,
                  enumerable: u.enumerable,
                  get: function () {
                      var e
                      return null === (e = u.get) || void 0 === e ? void 0 : e.call(this)
                  },
                  set: function (e) {
                      var t,
                          n = null === (t = u.set) || void 0 === t ? void 0 : t.call(this, e)
                      if (null !== s && -1 !== s)
                          try {
                              i.adoptStyleSheets(e, s)
                          } catch (e) {}
                      return n
                  },
              }),
              Ne(function () {
                  Object.defineProperty(t, 'adoptedStyleSheets', {
                      configurable: u.configurable,
                      enumerable: u.enumerable,
                      get: u.get,
                      set: u.set,
                  })
              }))
            : function () {}
    }
    function Ve(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = e.doc.defaultView
        if (!n) return function () {}
        !(function (e, t) {
            var n = e.mutationCb,
                r = e.mousemoveCb,
                o = e.mouseInteractionCb,
                a = e.scrollCb,
                i = e.viewportResizeCb,
                s = e.inputCb,
                c = e.mediaInteractionCb,
                u = e.styleSheetRuleCb,
                l = e.styleDeclarationCb,
                d = e.canvasMutationCb,
                p = e.fontCb,
                f = e.selectionCb
            ;(e.mutationCb = function () {
                t.mutation && t.mutation.apply(t, arguments), n.apply(void 0, arguments)
            }),
                (e.mousemoveCb = function () {
                    t.mousemove && t.mousemove.apply(t, arguments), r.apply(void 0, arguments)
                }),
                (e.mouseInteractionCb = function () {
                    t.mouseInteraction && t.mouseInteraction.apply(t, arguments), o.apply(void 0, arguments)
                }),
                (e.scrollCb = function () {
                    t.scroll && t.scroll.apply(t, arguments), a.apply(void 0, arguments)
                }),
                (e.viewportResizeCb = function () {
                    t.viewportResize && t.viewportResize.apply(t, arguments), i.apply(void 0, arguments)
                }),
                (e.inputCb = function () {
                    t.input && t.input.apply(t, arguments), s.apply(void 0, arguments)
                }),
                (e.mediaInteractionCb = function () {
                    t.mediaInteaction && t.mediaInteaction.apply(t, arguments), c.apply(void 0, arguments)
                }),
                (e.styleSheetRuleCb = function () {
                    t.styleSheetRule && t.styleSheetRule.apply(t, arguments), u.apply(void 0, arguments)
                }),
                (e.styleDeclarationCb = function () {
                    t.styleDeclaration && t.styleDeclaration.apply(t, arguments), l.apply(void 0, arguments)
                }),
                (e.canvasMutationCb = function () {
                    t.canvasMutation && t.canvasMutation.apply(t, arguments), d.apply(void 0, arguments)
                }),
                (e.fontCb = function () {
                    t.font && t.font.apply(t, arguments), p.apply(void 0, arguments)
                }),
                (e.selectionCb = function () {
                    t.selection && t.selection.apply(t, arguments), f.apply(void 0, arguments)
                })
        })(e, t)
        var r,
            o = Ee(e, e.doc),
            a = (function (e) {
                var t = e.mousemoveCb,
                    n = e.sampling,
                    r = e.doc,
                    o = e.mirror
                if (!1 === n.mousemove) return function () {}
                var a,
                    i = 'number' == typeof n.mousemove ? n.mousemove : 50,
                    s = 'number' == typeof n.mousemoveCallback ? n.mousemoveCallback : 500,
                    c = [],
                    u = J(
                        Ne(function (e) {
                            var n = Date.now() - a
                            t(
                                c.map(function (e) {
                                    return (e.timeOffset -= n), e
                                }),
                                e
                            ),
                                (c = []),
                                (a = null)
                        }),
                        s
                    ),
                    l = Ne(
                        J(
                            Ne(function (e) {
                                var t = Oe(e),
                                    n = ne(e) ? e.changedTouches[0] : e,
                                    r = n.clientX,
                                    i = n.clientY
                                a || (a = Q()),
                                    c.push({ x: r, y: i, id: o.getId(t), timeOffset: Q() - a }),
                                    u(
                                        'undefined' != typeof DragEvent && e instanceof DragEvent
                                            ? de.Drag
                                            : e instanceof MouseEvent
                                            ? de.MouseMove
                                            : de.TouchMove
                                    )
                            }),
                            i,
                            { trailing: !1 }
                        )
                    ),
                    d = [Y('mousemove', l, r), Y('touchmove', l, r), Y('drag', l, r)]
                return Ne(function () {
                    d.forEach(function (e) {
                        return e()
                    })
                })
            })(e),
            c = Re(e),
            u = xe(e),
            d = (function (e, t) {
                var n = e.viewportResizeCb,
                    r = t.win,
                    o = -1,
                    a = -1
                return Y(
                    'resize',
                    Ne(
                        J(
                            Ne(function () {
                                var e = X(),
                                    t = q()
                                ;(o === e && a === t) || (n({ width: Number(t), height: Number(e) }), (o = e), (a = t))
                            }),
                            200
                        )
                    ),
                    r
                )
            })(e, { win: n }),
            p = (function (e) {
                var t = e.inputCb,
                    n = e.doc,
                    r = e.mirror,
                    o = e.blockClass,
                    a = e.blockSelector,
                    i = e.ignoreClass,
                    c = e.ignoreSelector,
                    u = e.maskInputOptions,
                    l = e.maskInputFn,
                    d = e.sampling,
                    p = e.userTriggeredOnInput
                function f(e) {
                    var t = Oe(e),
                        r = e.isTrusted,
                        s = t && t.tagName
                    if (
                        (t && 'OPTION' === s && (t = t.parentElement),
                        t &&
                            s &&
                            !(Fe.indexOf(s) < 0) &&
                            !$(t, o, a, !0) &&
                            !(t.classList.contains(i) || (c && t.matches(c))))
                    ) {
                        var d = t.value,
                            f = !1,
                            g = I(t) || ''
                        'radio' === g || 'checkbox' === g
                            ? (f = t.checked)
                            : (u[s.toLowerCase()] || u[g]) &&
                              (d = m({
                                  element: t,
                                  maskInputOptions: u,
                                  tagName: s,
                                  type: g,
                                  value: d,
                                  maskInputFn: l,
                              })),
                            h(t, Ne(Le)({ text: d, isChecked: f, userTriggered: r }, p))
                        var v = t.name
                        'radio' === g &&
                            v &&
                            f &&
                            n.querySelectorAll('input[type="radio"][name="'.concat(v, '"]')).forEach(function (e) {
                                e !== t && h(e, Ne(Le)({ text: e.value, isChecked: !f, userTriggered: !1 }, p))
                            })
                    }
                }
                function h(e, n) {
                    var o = De.get(e)
                    if (!o || o.text !== n.text || o.isChecked !== n.isChecked) {
                        De.set(e, n)
                        var a = r.getId(e)
                        Ne(t)(Object.assign(Object.assign({}, n), { id: a }))
                    }
                }
                var g = ('last' === d.input ? ['change'] : ['input', 'change']).map(function (e) {
                        return Y(e, Ne(f), n)
                    }),
                    v = n.defaultView
                if (!v)
                    return function () {
                        g.forEach(function (e) {
                            return e()
                        })
                    }
                var y = v.Object.getOwnPropertyDescriptor(v.HTMLInputElement.prototype, 'value'),
                    C = [
                        [v.HTMLInputElement.prototype, 'value'],
                        [v.HTMLInputElement.prototype, 'checked'],
                        [v.HTMLSelectElement.prototype, 'value'],
                        [v.HTMLTextAreaElement.prototype, 'value'],
                        [v.HTMLSelectElement.prototype, 'selectedIndex'],
                        [v.HTMLOptionElement.prototype, 'selected'],
                    ]
                return (
                    y &&
                        y.set &&
                        g.push.apply(
                            g,
                            s(
                                C.map(function (e) {
                                    return z(
                                        e[0],
                                        e[1],
                                        {
                                            set: function () {
                                                Ne(f)({ target: this, isTrusted: !1 })
                                            },
                                        },
                                        !1,
                                        v
                                    )
                                })
                            )
                        ),
                    Ne(function () {
                        g.forEach(function (e) {
                            return e()
                        })
                    })
                )
            })(e),
            f = (function (e) {
                var t = e.mediaInteractionCb,
                    n = e.blockClass,
                    r = e.blockSelector,
                    o = e.mirror,
                    a = e.sampling,
                    i = e.doc,
                    s = Ne(function (e) {
                        return J(
                            Ne(function (a) {
                                var i = Oe(a)
                                if (i && !$(i, n, r, !0)) {
                                    var s = i.currentTime,
                                        c = i.volume,
                                        u = i.muted,
                                        l = i.playbackRate
                                    t({ type: e, id: o.getId(i), currentTime: s, volume: c, muted: u, playbackRate: l })
                                }
                            }),
                            a.media || 500
                        )
                    }),
                    c = [
                        Y('play', s(0), i),
                        Y('pause', s(1), i),
                        Y('seeked', s(2), i),
                        Y('volumechange', s(3), i),
                        Y('ratechange', s(4), i),
                    ]
                return Ne(function () {
                    c.forEach(function (e) {
                        return e()
                    })
                })
            })(e),
            h = (function (e, t) {
                var n = e.styleSheetRuleCb,
                    r = e.mirror,
                    o = e.stylesheetManager,
                    a = t.win
                if (!a.CSSStyleSheet || !a.CSSStyleSheet.prototype) return function () {}
                var c = a.CSSStyleSheet.prototype.insertRule
                a.CSSStyleSheet.prototype.insertRule = new Proxy(c, {
                    apply: Ne(function (e, t, a) {
                        var s = i(a, 2),
                            c = s[0],
                            u = s[1],
                            l = Be(t, r, o.styleMirror),
                            d = l.id,
                            p = l.styleId
                        return (
                            ((d && -1 !== d) || (p && -1 !== p)) &&
                                n({ id: d, styleId: p, adds: [{ rule: c, index: u }] }),
                            e.apply(t, a)
                        )
                    }),
                })
                var u,
                    l,
                    d = a.CSSStyleSheet.prototype.deleteRule
                ;(a.CSSStyleSheet.prototype.deleteRule = new Proxy(d, {
                    apply: Ne(function (e, t, a) {
                        var s = i(a, 1)[0],
                            c = Be(t, r, o.styleMirror),
                            u = c.id,
                            l = c.styleId
                        return (
                            ((u && -1 !== u) || (l && -1 !== l)) && n({ id: u, styleId: l, removes: [{ index: s }] }),
                            e.apply(t, a)
                        )
                    }),
                })),
                    a.CSSStyleSheet.prototype.replace &&
                        ((u = a.CSSStyleSheet.prototype.replace),
                        (a.CSSStyleSheet.prototype.replace = new Proxy(u, {
                            apply: Ne(function (e, t, a) {
                                var s = i(a, 1)[0],
                                    c = Be(t, r, o.styleMirror),
                                    u = c.id,
                                    l = c.styleId
                                return (
                                    ((u && -1 !== u) || (l && -1 !== l)) && n({ id: u, styleId: l, replace: s }),
                                    e.apply(t, a)
                                )
                            }),
                        }))),
                    a.CSSStyleSheet.prototype.replaceSync &&
                        ((l = a.CSSStyleSheet.prototype.replaceSync),
                        (a.CSSStyleSheet.prototype.replaceSync = new Proxy(l, {
                            apply: Ne(function (e, t, a) {
                                var s = i(a, 1)[0],
                                    c = Be(t, r, o.styleMirror),
                                    u = c.id,
                                    l = c.styleId
                                return (
                                    ((u && -1 !== u) || (l && -1 !== l)) && n({ id: u, styleId: l, replaceSync: s }),
                                    e.apply(t, a)
                                )
                            }),
                        })))
                var p = {}
                Ue('CSSGroupingRule')
                    ? (p.CSSGroupingRule = a.CSSGroupingRule)
                    : (Ue('CSSMediaRule') && (p.CSSMediaRule = a.CSSMediaRule),
                      Ue('CSSConditionRule') && (p.CSSConditionRule = a.CSSConditionRule),
                      Ue('CSSSupportsRule') && (p.CSSSupportsRule = a.CSSSupportsRule))
                var f = {}
                return (
                    Object.entries(p).forEach(function (e) {
                        var t = i(e, 2),
                            a = t[0],
                            c = t[1]
                        ;(f[a] = { insertRule: c.prototype.insertRule, deleteRule: c.prototype.deleteRule }),
                            (c.prototype.insertRule = new Proxy(f[a].insertRule, {
                                apply: Ne(function (e, t, a) {
                                    var c = i(a, 2),
                                        u = c[0],
                                        l = c[1],
                                        d = Be(t.parentStyleSheet, r, o.styleMirror),
                                        p = d.id,
                                        f = d.styleId
                                    return (
                                        ((p && -1 !== p) || (f && -1 !== f)) &&
                                            n({
                                                id: p,
                                                styleId: f,
                                                adds: [{ rule: u, index: [].concat(s(We(t)), [l || 0]) }],
                                            }),
                                        e.apply(t, a)
                                    )
                                }),
                            })),
                            (c.prototype.deleteRule = new Proxy(f[a].deleteRule, {
                                apply: Ne(function (e, t, a) {
                                    var c = i(a, 1)[0],
                                        u = Be(t.parentStyleSheet, r, o.styleMirror),
                                        l = u.id,
                                        d = u.styleId
                                    return (
                                        ((l && -1 !== l) || (d && -1 !== d)) &&
                                            n({ id: l, styleId: d, removes: [{ index: [].concat(s(We(t)), [c]) }] }),
                                        e.apply(t, a)
                                    )
                                }),
                            }))
                    }),
                    Ne(function () {
                        ;(a.CSSStyleSheet.prototype.insertRule = c),
                            (a.CSSStyleSheet.prototype.deleteRule = d),
                            u && (a.CSSStyleSheet.prototype.replace = u),
                            l && (a.CSSStyleSheet.prototype.replaceSync = l),
                            Object.entries(p).forEach(function (e) {
                                var t = i(e, 2),
                                    n = t[0],
                                    r = t[1]
                                ;(r.prototype.insertRule = f[n].insertRule), (r.prototype.deleteRule = f[n].deleteRule)
                            })
                    })
                )
            })(e, { win: n }),
            g = Ge(e, e.doc),
            v = (function (e, t) {
                var n = e.styleDeclarationCb,
                    r = e.mirror,
                    o = e.ignoreCSSAttributes,
                    a = e.stylesheetManager,
                    s = t.win,
                    c = s.CSSStyleDeclaration.prototype.setProperty
                s.CSSStyleDeclaration.prototype.setProperty = new Proxy(c, {
                    apply: Ne(function (e, t, s) {
                        var u,
                            l = i(s, 3),
                            d = l[0],
                            p = l[1],
                            f = l[2]
                        if (o.has(d)) return c.apply(t, [d, p, f])
                        var h = Be(
                                null === (u = t.parentRule) || void 0 === u ? void 0 : u.parentStyleSheet,
                                r,
                                a.styleMirror
                            ),
                            g = h.id,
                            m = h.styleId
                        return (
                            ((g && -1 !== g) || (m && -1 !== m)) &&
                                n({
                                    id: g,
                                    styleId: m,
                                    set: { property: d, value: p, priority: f },
                                    index: We(t.parentRule),
                                }),
                            e.apply(t, s)
                        )
                    }),
                })
                var u = s.CSSStyleDeclaration.prototype.removeProperty
                return (
                    (s.CSSStyleDeclaration.prototype.removeProperty = new Proxy(u, {
                        apply: Ne(function (e, t, s) {
                            var c,
                                l = i(s, 1)[0]
                            if (o.has(l)) return u.apply(t, [l])
                            var d = Be(
                                    null === (c = t.parentRule) || void 0 === c ? void 0 : c.parentStyleSheet,
                                    r,
                                    a.styleMirror
                                ),
                                p = d.id,
                                f = d.styleId
                            return (
                                ((p && -1 !== p) || (f && -1 !== f)) &&
                                    n({ id: p, styleId: f, remove: { property: l }, index: We(t.parentRule) }),
                                e.apply(t, s)
                            )
                        }),
                    })),
                    Ne(function () {
                        ;(s.CSSStyleDeclaration.prototype.setProperty = c),
                            (s.CSSStyleDeclaration.prototype.removeProperty = u)
                    })
                )
            })(e, { win: n }),
            y = e.collectFonts
                ? (function (e) {
                      var t = e.fontCb,
                          n = e.doc,
                          r = n.defaultView
                      if (!r) return function () {}
                      var o = [],
                          a = new WeakMap(),
                          i = r.FontFace
                      r.FontFace = function (e, t, n) {
                          var r = new i(e, t, n)
                          return (
                              a.set(r, {
                                  family: e,
                                  buffer: 'string' != typeof t,
                                  descriptors: n,
                                  fontSource: 'string' == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t))),
                              }),
                              r
                          )
                      }
                      var s = P(n.fonts, 'add', function (e) {
                          return function (n) {
                              return (
                                  setTimeout(
                                      Ne(function () {
                                          var e = a.get(n)
                                          e && (t(e), a.delete(n))
                                      }),
                                      0
                                  ),
                                  e.apply(this, [n])
                              )
                          }
                      })
                      return (
                          o.push(function () {
                              r.FontFace = i
                          }),
                          o.push(s),
                          Ne(function () {
                              o.forEach(function (e) {
                                  return e()
                              })
                          })
                      )
                  })(e)
                : function () {},
            C = (function (e) {
                var t = e.doc,
                    n = e.mirror,
                    r = e.blockClass,
                    o = e.blockSelector,
                    a = e.selectionCb,
                    i = !0,
                    s = Ne(function () {
                        var e = t.getSelection()
                        if (!(!e || (i && (null == e ? void 0 : e.isCollapsed)))) {
                            i = e.isCollapsed || !1
                            for (var s = [], c = e.rangeCount || 0, u = 0; u < c; u++) {
                                var l = e.getRangeAt(u),
                                    d = l.startContainer,
                                    p = l.startOffset,
                                    f = l.endContainer,
                                    h = l.endOffset
                                $(d, r, o, !0) ||
                                    $(f, r, o, !0) ||
                                    s.push({ start: n.getId(d), startOffset: p, end: n.getId(f), endOffset: h })
                            }
                            a({ ranges: s })
                        }
                    })
                return s(), Y('selectionchange', s)
            })(e),
            b = [],
            S = l(e.plugins)
        try {
            for (S.s(); !(r = S.n()).done; ) {
                var A = r.value
                b.push(A.observer(A.callback, n, A.options))
            }
        } catch (e) {
            S.e(e)
        } finally {
            S.f()
        }
        return Ne(function () {
            Te.forEach(function (e) {
                return e.reset()
            }),
                o.disconnect(),
                a(),
                c(),
                u(),
                d(),
                p(),
                f(),
                h(),
                g(),
                v(),
                y(),
                C(),
                b.forEach(function (e) {
                    return e()
                })
        })
    }
    function Ze(e) {
        return void 0 !== window[e]
    }
    function Ue(e) {
        return Boolean(
            void 0 !== window[e] &&
                window[e].prototype &&
                'insertRule' in window[e].prototype &&
                'deleteRule' in window[e].prototype
        )
    }
    var Ke = (function () {
            function e(t) {
                r(this, e),
                    (this.generateIdFn = t),
                    (this.iframeIdToRemoteIdMap = new WeakMap()),
                    (this.iframeRemoteIdToIdMap = new WeakMap())
            }
            return (
                a(e, [
                    {
                        key: 'getId',
                        value: function (e, t, n, r) {
                            var o = n || this.getIdToRemoteIdMap(e),
                                a = r || this.getRemoteIdToIdMap(e),
                                i = o.get(t)
                            return i || ((i = this.generateIdFn()), o.set(t, i), a.set(i, t)), i
                        },
                    },
                    {
                        key: 'getIds',
                        value: function (e, t) {
                            var n = this,
                                r = this.getIdToRemoteIdMap(e),
                                o = this.getRemoteIdToIdMap(e)
                            return t.map(function (t) {
                                return n.getId(e, t, r, o)
                            })
                        },
                    },
                    {
                        key: 'getRemoteId',
                        value: function (e, t, n) {
                            var r = n || this.getRemoteIdToIdMap(e)
                            if ('number' != typeof t) return t
                            var o = r.get(t)
                            return o || -1
                        },
                    },
                    {
                        key: 'getRemoteIds',
                        value: function (e, t) {
                            var n = this,
                                r = this.getRemoteIdToIdMap(e)
                            return t.map(function (t) {
                                return n.getRemoteId(e, t, r)
                            })
                        },
                    },
                    {
                        key: 'reset',
                        value: function (e) {
                            if (!e)
                                return (
                                    (this.iframeIdToRemoteIdMap = new WeakMap()),
                                    void (this.iframeRemoteIdToIdMap = new WeakMap())
                                )
                            this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e)
                        },
                    },
                    {
                        key: 'getIdToRemoteIdMap',
                        value: function (e) {
                            var t = this.iframeIdToRemoteIdMap.get(e)
                            return t || ((t = new Map()), this.iframeIdToRemoteIdMap.set(e, t)), t
                        },
                    },
                    {
                        key: 'getRemoteIdToIdMap',
                        value: function (e) {
                            var t = this.iframeRemoteIdToIdMap.get(e)
                            return t || ((t = new Map()), this.iframeRemoteIdToIdMap.set(e, t)), t
                        },
                    },
                ]),
                e
            )
        })(),
        Ye = (function () {
            function t(e) {
                r(this, t),
                    (this.iframes = new WeakMap()),
                    (this.crossOriginIframeMap = new WeakMap()),
                    (this.crossOriginIframeMirror = new Ke(w)),
                    (this.crossOriginIframeRootIdMap = new WeakMap()),
                    (this.mutationCb = e.mutationCb),
                    (this.wrappedEmit = e.wrappedEmit),
                    (this.stylesheetManager = e.stylesheetManager),
                    (this.recordCrossOriginIframes = e.recordCrossOriginIframes),
                    (this.crossOriginIframeStyleMirror = new Ke(
                        this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)
                    )),
                    (this.mirror = e.mirror),
                    this.recordCrossOriginIframes && window.addEventListener('message', this.handleMessage.bind(this))
            }
            return (
                a(t, [
                    {
                        key: 'addIframe',
                        value: function (e) {
                            this.iframes.set(e, !0),
                                e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e)
                        },
                    },
                    {
                        key: 'addLoadListener',
                        value: function (e) {
                            this.loadListener = e
                        },
                    },
                    {
                        key: 'attachIframe',
                        value: function (e, t) {
                            var n
                            this.mutationCb({
                                adds: [{ parentId: this.mirror.getId(e), nextId: null, node: t }],
                                removes: [],
                                texts: [],
                                attributes: [],
                                isAttachIframe: !0,
                            }),
                                null === (n = this.loadListener) || void 0 === n || n.call(this, e),
                                e.contentDocument &&
                                    e.contentDocument.adoptedStyleSheets &&
                                    e.contentDocument.adoptedStyleSheets.length > 0 &&
                                    this.stylesheetManager.adoptStyleSheets(
                                        e.contentDocument.adoptedStyleSheets,
                                        this.mirror.getId(e.contentDocument)
                                    )
                        },
                    },
                    {
                        key: 'handleMessage',
                        value: function (e) {
                            var t = e
                            if ('rrweb' === t.data.type && t.origin === t.data.origin && e.source) {
                                var n = this.crossOriginIframeMap.get(e.source)
                                if (n) {
                                    var r = this.transformCrossOriginEvent(n, t.data.event)
                                    r && this.wrappedEmit(r, t.data.isCheckout)
                                }
                            }
                        },
                    },
                    {
                        key: 'transformCrossOriginEvent',
                        value: function (e, t) {
                            var n,
                                r = this
                            switch (t.type) {
                                case le.FullSnapshot:
                                    this.crossOriginIframeMirror.reset(e),
                                        this.crossOriginIframeStyleMirror.reset(e),
                                        this.replaceIdOnNode(t.data.node, e)
                                    var o = t.data.node.id
                                    return (
                                        this.crossOriginIframeRootIdMap.set(e, o),
                                        this.patchRootIdOnNode(t.data.node, o),
                                        {
                                            timestamp: t.timestamp,
                                            type: le.IncrementalSnapshot,
                                            data: {
                                                source: de.Mutation,
                                                adds: [
                                                    { parentId: this.mirror.getId(e), nextId: null, node: t.data.node },
                                                ],
                                                removes: [],
                                                texts: [],
                                                attributes: [],
                                                isAttachIframe: !0,
                                            },
                                        }
                                    )
                                case le.Meta:
                                case le.Load:
                                case le.DomContentLoaded:
                                    return !1
                                case le.Plugin:
                                    return t
                                case le.Custom:
                                    return (
                                        this.replaceIds(t.data.payload, e, ['id', 'parentId', 'previousId', 'nextId']),
                                        t
                                    )
                                case le.IncrementalSnapshot:
                                    switch (t.data.source) {
                                        case de.Mutation:
                                            return (
                                                t.data.adds.forEach(function (t) {
                                                    r.replaceIds(t, e, ['parentId', 'nextId', 'previousId']),
                                                        r.replaceIdOnNode(t.node, e)
                                                    var n = r.crossOriginIframeRootIdMap.get(e)
                                                    n && r.patchRootIdOnNode(t.node, n)
                                                }),
                                                t.data.removes.forEach(function (t) {
                                                    r.replaceIds(t, e, ['parentId', 'id'])
                                                }),
                                                t.data.attributes.forEach(function (t) {
                                                    r.replaceIds(t, e, ['id'])
                                                }),
                                                t.data.texts.forEach(function (t) {
                                                    r.replaceIds(t, e, ['id'])
                                                }),
                                                t
                                            )
                                        case de.Drag:
                                        case de.TouchMove:
                                        case de.MouseMove:
                                            return (
                                                t.data.positions.forEach(function (t) {
                                                    r.replaceIds(t, e, ['id'])
                                                }),
                                                t
                                            )
                                        case de.ViewportResize:
                                            return !1
                                        case de.MediaInteraction:
                                        case de.MouseInteraction:
                                        case de.Scroll:
                                        case de.CanvasMutation:
                                        case de.Input:
                                            return this.replaceIds(t.data, e, ['id']), t
                                        case de.StyleSheetRule:
                                        case de.StyleDeclaration:
                                            return (
                                                this.replaceIds(t.data, e, ['id']),
                                                this.replaceStyleIds(t.data, e, ['styleId']),
                                                t
                                            )
                                        case de.Font:
                                            return t
                                        case de.Selection:
                                            return (
                                                t.data.ranges.forEach(function (t) {
                                                    r.replaceIds(t, e, ['start', 'end'])
                                                }),
                                                t
                                            )
                                        case de.AdoptedStyleSheet:
                                            return (
                                                this.replaceIds(t.data, e, ['id']),
                                                this.replaceStyleIds(t.data, e, ['styleIds']),
                                                null === (n = t.data.styles) ||
                                                    void 0 === n ||
                                                    n.forEach(function (t) {
                                                        r.replaceStyleIds(t, e, ['styleId'])
                                                    }),
                                                t
                                            )
                                    }
                            }
                        },
                    },
                    {
                        key: 'replace',
                        value: function (e, t, n, r) {
                            var o,
                                a = l(r)
                            try {
                                for (a.s(); !(o = a.n()).done; ) {
                                    var i = o.value
                                    ;(Array.isArray(t[i]) || 'number' == typeof t[i]) &&
                                        (Array.isArray(t[i]) ? (t[i] = e.getIds(n, t[i])) : (t[i] = e.getId(n, t[i])))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                            return t
                        },
                    },
                    {
                        key: 'replaceIds',
                        value: function (e, t, n) {
                            return this.replace(this.crossOriginIframeMirror, e, t, n)
                        },
                    },
                    {
                        key: 'replaceStyleIds',
                        value: function (e, t, n) {
                            return this.replace(this.crossOriginIframeStyleMirror, e, t, n)
                        },
                    },
                    {
                        key: 'replaceIdOnNode',
                        value: function (e, t) {
                            var n = this
                            this.replaceIds(e, t, ['id', 'rootId']),
                                'childNodes' in e &&
                                    e.childNodes.forEach(function (e) {
                                        n.replaceIdOnNode(e, t)
                                    })
                        },
                    },
                    {
                        key: 'patchRootIdOnNode',
                        value: function (t, n) {
                            var r = this
                            t.type === e.Document || t.rootId || (t.rootId = n),
                                'childNodes' in t &&
                                    t.childNodes.forEach(function (e) {
                                        r.patchRootIdOnNode(e, n)
                                    })
                        },
                    },
                ]),
                t
            )
        })(),
        je = (function () {
            function e(t) {
                r(this, e),
                    (this.shadowDoms = new WeakSet()),
                    (this.restoreHandlers = []),
                    (this.mutationCb = t.mutationCb),
                    (this.scrollCb = t.scrollCb),
                    (this.bypassOptions = t.bypassOptions),
                    (this.mirror = t.mirror),
                    this.init()
            }
            return (
                a(e, [
                    {
                        key: 'init',
                        value: function () {
                            this.reset(), this.patchAttachShadow(Element, document)
                        },
                    },
                    {
                        key: 'addShadowRoot',
                        value: function (e, t) {
                            var n = this
                            if (p(e) && !this.shadowDoms.has(e)) {
                                this.shadowDoms.add(e)
                                var r = Ee(
                                    Object.assign(Object.assign({}, this.bypassOptions), {
                                        doc: t,
                                        mutationCb: this.mutationCb,
                                        mirror: this.mirror,
                                        shadowDomManager: this,
                                    }),
                                    e
                                )
                                this.restoreHandlers.push(function () {
                                    return r.disconnect()
                                }),
                                    this.restoreHandlers.push(
                                        xe(
                                            Object.assign(Object.assign({}, this.bypassOptions), {
                                                scrollCb: this.scrollCb,
                                                doc: e,
                                                mirror: this.mirror,
                                            })
                                        )
                                    ),
                                    setTimeout(function () {
                                        e.adoptedStyleSheets &&
                                            e.adoptedStyleSheets.length > 0 &&
                                            n.bypassOptions.stylesheetManager.adoptStyleSheets(
                                                e.adoptedStyleSheets,
                                                n.mirror.getId(e.host)
                                            ),
                                            n.restoreHandlers.push(
                                                Ge(
                                                    {
                                                        mirror: n.mirror,
                                                        stylesheetManager: n.bypassOptions.stylesheetManager,
                                                    },
                                                    e
                                                )
                                            )
                                    }, 0)
                            }
                        },
                    },
                    {
                        key: 'observeAttachShadow',
                        value: function (e) {
                            e.contentWindow &&
                                e.contentDocument &&
                                this.patchAttachShadow(e.contentWindow.Element, e.contentDocument)
                        },
                    },
                    {
                        key: 'patchAttachShadow',
                        value: function (e, t) {
                            var n = this
                            this.restoreHandlers.push(
                                P(e.prototype, 'attachShadow', function (e) {
                                    return function (r) {
                                        var o = e.call(this, r)
                                        return this.shadowRoot && ue(this) && n.addShadowRoot(this.shadowRoot, t), o
                                    }
                                })
                            )
                        },
                    },
                    {
                        key: 'reset',
                        value: function () {
                            this.restoreHandlers.forEach(function (e) {
                                try {
                                    e()
                                } catch (e) {}
                            }),
                                (this.restoreHandlers = []),
                                (this.shadowDoms = new WeakSet())
                        },
                    },
                ]),
                e
            )
        })()
    function _e(e, t, n, r) {
        return new (n || (n = Promise))(function (o, a) {
            function i(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    a(e)
                }
            }
            function s(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    a(e)
                }
            }
            function c(e) {
                var t
                e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                          ? t
                          : new n(function (e) {
                                e(t)
                            })).then(i, s)
            }
            c((r = r.apply(e, t || [])).next())
        })
    }
    for (
        var Je = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            ze = 'undefined' == typeof Uint8Array ? [] : new Uint8Array(256),
            Pe = 0;
        Pe < Je.length;
        Pe++
    )
        ze[Je.charCodeAt(Pe)] = Pe
    var Qe = function (e) {
            var t,
                n = new Uint8Array(e),
                r = n.length,
                o = ''
            for (t = 0; t < r; t += 3)
                (o += Je[n[t] >> 2]),
                    (o += Je[((3 & n[t]) << 4) | (n[t + 1] >> 4)]),
                    (o += Je[((15 & n[t + 1]) << 2) | (n[t + 2] >> 6)]),
                    (o += Je[63 & n[t + 2]])
            return (
                r % 3 == 2
                    ? (o = o.substring(0, o.length - 1) + '=')
                    : r % 3 == 1 && (o = o.substring(0, o.length - 2) + '=='),
                o
            )
        },
        He = new Map()
    var Xe = function (e, t, r) {
        if (e && (et(e, t) || 'object' === n(e))) {
            var o = (function (e, t) {
                    var n = He.get(e)
                    return n || ((n = new Map()), He.set(e, n)), n.has(t) || n.set(t, []), n.get(t)
                })(r, e.constructor.name),
                a = o.indexOf(e)
            return -1 === a && ((a = o.length), o.push(e)), a
        }
    }
    function qe(e, t, r) {
        if (e instanceof Array)
            return e.map(function (e) {
                return qe(e, t, r)
            })
        if (null === e) return e
        if (
            e instanceof Float32Array ||
            e instanceof Float64Array ||
            e instanceof Int32Array ||
            e instanceof Uint32Array ||
            e instanceof Uint8Array ||
            e instanceof Uint16Array ||
            e instanceof Int16Array ||
            e instanceof Int8Array ||
            e instanceof Uint8ClampedArray
        )
            return { rr_type: e.constructor.name, args: [Object.values(e)] }
        if (e instanceof ArrayBuffer) return { rr_type: e.constructor.name, base64: Qe(e) }
        if (e instanceof DataView)
            return { rr_type: e.constructor.name, args: [qe(e.buffer, t, r), e.byteOffset, e.byteLength] }
        if (e instanceof HTMLImageElement) return { rr_type: e.constructor.name, src: e.src }
        if (e instanceof HTMLCanvasElement) {
            return { rr_type: 'HTMLImageElement', src: e.toDataURL() }
        }
        return e instanceof ImageData
            ? { rr_type: e.constructor.name, args: [qe(e.data, t, r), e.width, e.height] }
            : et(e, t) || 'object' === n(e)
            ? { rr_type: e.constructor.name, index: Xe(e, t, r) }
            : e
    }
    var $e = function (e, t, n) {
            return s(e).map(function (e) {
                return qe(e, t, n)
            })
        },
        et = function (e, t) {
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
    function tt(e, t, r, o) {
        var a = []
        try {
            var i = P(e.HTMLCanvasElement.prototype, 'getContext', function (e) {
                return function (a) {
                    for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), c = 1; c < i; c++)
                        s[c - 1] = arguments[c]
                    if (!$(this, t, r, !0)) {
                        var u = (function (e) {
                            return 'experimental-webgl' === e ? 'webgl' : e
                        })(a)
                        if (('__context' in this || (this.__context = u), o && ['webgl', 'webgl2'].includes(u)))
                            if (s[0] && 'object' === n(s[0])) {
                                var l = s[0]
                                l.preserveDrawingBuffer || (l.preserveDrawingBuffer = !0)
                            } else s.splice(0, 1, { preserveDrawingBuffer: !0 })
                    }
                    return e.apply(this, [a].concat(s))
                }
            })
            a.push(i)
        } catch (e) {
            console.error('failed to patch HTMLCanvasElement.prototype.getContext')
        }
        return function () {
            a.forEach(function (e) {
                return e()
            })
        }
    }
    function nt(e, t, n, r, o, a, i) {
        var s,
            c = [],
            u = l(Object.getOwnPropertyNames(e))
        try {
            var d = function () {
                var a = s.value
                if (['isContextLost', 'canvas', 'drawingBufferWidth', 'drawingBufferHeight'].includes(a))
                    return 'continue'
                try {
                    if ('function' != typeof e[a]) return 'continue'
                    var u = P(e, a, function (e) {
                        return function () {
                            for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++) c[u] = arguments[u]
                            var l = e.apply(this, c)
                            if ((Xe(l, i, this), 'tagName' in this.canvas && !$(this.canvas, r, o, !0))) {
                                var d = $e([].concat(c), i, this),
                                    p = { type: t, property: a, args: d }
                                n(this.canvas, p)
                            }
                            return l
                        }
                    })
                    c.push(u)
                } catch (r) {
                    var l = z(e, a, {
                        set: function (e) {
                            n(this.canvas, { type: t, property: a, args: [e], setter: !0 })
                        },
                    })
                    c.push(l)
                }
            }
            for (u.s(); !(s = u.n()).done; ) d()
        } catch (e) {
            u.e(e)
        } finally {
            u.f()
        }
        return c
    }
    function rt(e, t, n) {
        var r = void 0 === t ? null : t,
            o = (function (e, t) {
                var n = atob(e)
                if (t) {
                    for (var r = new Uint8Array(n.length), o = 0, a = n.length; o < a; ++o) r[o] = n.charCodeAt(o)
                    return String.fromCharCode.apply(null, new Uint16Array(r.buffer))
                }
                return n
            })(e, void 0 !== n && n),
            a = o.indexOf('\n', 10) + 1,
            i = o.substring(a) + (r ? '//# sourceMappingURL=' + r : ''),
            s = new Blob([i], { type: 'application/javascript' })
        return URL.createObjectURL(s)
    }
    var ot,
        at,
        it,
        st,
        ct,
        ut,
        lt,
        dt =
            ((ot =
                'Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLg0KDQogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55DQogICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLg0KDQogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgNCiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkNCiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsDQogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NDQogICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1INCiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SDQogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikgew0KICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH0NCiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7DQogICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvclsidGhyb3ciXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfQ0KICAgICAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpOw0KICAgICAgICB9KTsNCiAgICB9CgogICAgLyoKICAgICAqIGJhc2U2NC1hcnJheWJ1ZmZlciAxLjAuMSA8aHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlcj4KICAgICAqIENvcHlyaWdodCAoYykgMjAyMSBOaWtsYXMgdm9uIEhlcnR6ZW4gPGh0dHBzOi8vaGVydHplbi5jb20+CiAgICAgKiBSZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZQogICAgICovCiAgICB2YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7CiAgICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguCiAgICB2YXIgbG9va3VwID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpOwogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykgewogICAgICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7CiAgICB9CiAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24gKGFycmF5YnVmZmVyKSB7CiAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLCBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9ICcnOwogICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gMykgewogICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTsKICAgICAgICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107CiAgICAgICAgfQogICAgICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgJz0nOwogICAgICAgIH0KICAgICAgICBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgJz09JzsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGJhc2U2NDsKICAgIH07CgogICAgY29uc3QgbGFzdEJsb2JNYXAgPSBuZXcgTWFwKCk7DQogICAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gbmV3IE1hcCgpOw0KICAgIGZ1bmN0aW9uIGdldFRyYW5zcGFyZW50QmxvYkZvcih3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucykgew0KICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgew0KICAgICAgICAgICAgY29uc3QgaWQgPSBgJHt3aWR0aH0tJHtoZWlnaHR9YDsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgaWYgKHRyYW5zcGFyZW50QmxvYk1hcC5oYXMoaWQpKQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNwYXJlbnRCbG9iTWFwLmdldChpZCk7DQogICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsNCiAgICAgICAgICAgICAgICBvZmZzY3JlZW4uZ2V0Q29udGV4dCgnMmQnKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0geWllbGQgYmxvYi5hcnJheUJ1ZmZlcigpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7DQogICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTY0Ow0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgZWxzZSB7DQogICAgICAgICAgICAgICAgcmV0dXJuICcnOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9KTsNCiAgICB9DQogICAgY29uc3Qgd29ya2VyID0gc2VsZjsNCiAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsNCiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgYml0bWFwLCB3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucyB9ID0gZS5kYXRhOw0KICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zKTsNCiAgICAgICAgICAgICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IG9mZnNjcmVlbi5nZXRDb250ZXh0KCcyZCcpOw0KICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwKTsNCiAgICAgICAgICAgICAgICBiaXRtYXAuY2xvc2UoKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBibG9iLnR5cGU7DQogICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSB5aWVsZCBibG9iLmFycmF5QnVmZmVyKCk7DQogICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0gZW5jb2RlKGFycmF5QnVmZmVyKTsNCiAgICAgICAgICAgICAgICBpZiAoIWxhc3RCbG9iTWFwLmhhcyhpZCkgJiYgKHlpZWxkIHRyYW5zcGFyZW50QmFzZTY0KSA9PT0gYmFzZTY0KSB7DQogICAgICAgICAgICAgICAgICAgIGxhc3RCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkIH0pOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7DQogICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICAgICAgaWQsDQogICAgICAgICAgICAgICAgICAgIHR5cGUsDQogICAgICAgICAgICAgICAgICAgIGJhc2U2NCwNCiAgICAgICAgICAgICAgICAgICAgd2lkdGgsDQogICAgICAgICAgICAgICAgICAgIGhlaWdodCwNCiAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSk7DQogICAgfTsKCn0pKCk7Cgo='),
            (at = null),
            (it = !1),
            function (e) {
                return (st = st || rt(ot, at, it)), new Worker(st, e)
            }),
        pt = (function () {
            function e(t) {
                var n = this
                r(this, e),
                    (this.pendingCanvasMutations = new Map()),
                    (this.rafStamps = { latestId: 0, invokeId: null }),
                    (this.frozen = !1),
                    (this.locked = !1),
                    (this.processMutation = function (e, t) {
                        ;(!(n.rafStamps.invokeId && n.rafStamps.latestId !== n.rafStamps.invokeId) &&
                            n.rafStamps.invokeId) ||
                            (n.rafStamps.invokeId = n.rafStamps.latestId),
                            n.pendingCanvasMutations.has(e) || n.pendingCanvasMutations.set(e, []),
                            n.pendingCanvasMutations.get(e).push(t)
                    })
                var o = t.sampling,
                    a = void 0 === o ? 'all' : o,
                    i = t.win,
                    s = t.blockClass,
                    c = t.blockSelector,
                    u = t.recordCanvas,
                    l = t.dataURLOptions
                ;(this.mutationCb = t.mutationCb),
                    (this.mirror = t.mirror),
                    u && 'all' === a && this.initCanvasMutationObserver(i, s, c),
                    u && 'number' == typeof a && this.initCanvasFPSObserver(a, i, s, c, { dataURLOptions: l })
            }
            return (
                a(e, [
                    {
                        key: 'reset',
                        value: function () {
                            this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers()
                        },
                    },
                    {
                        key: 'freeze',
                        value: function () {
                            this.frozen = !0
                        },
                    },
                    {
                        key: 'unfreeze',
                        value: function () {
                            this.frozen = !1
                        },
                    },
                    {
                        key: 'lock',
                        value: function () {
                            this.locked = !0
                        },
                    },
                    {
                        key: 'unlock',
                        value: function () {
                            this.locked = !1
                        },
                    },
                    {
                        key: 'initCanvasFPSObserver',
                        value: function (e, n, r, o, a) {
                            var i = this,
                                s = tt(n, r, o, !0),
                                c = new Map(),
                                u = new dt()
                            u.onmessage = function (e) {
                                var t = e.data.id
                                if ((c.set(t, !1), 'base64' in e.data)) {
                                    var n = e.data,
                                        r = n.base64,
                                        o = n.type,
                                        a = n.width,
                                        s = n.height
                                    i.mutationCb({
                                        id: t,
                                        type: he['2D'],
                                        commands: [
                                            { property: 'clearRect', args: [0, 0, a, s] },
                                            {
                                                property: 'drawImage',
                                                args: [
                                                    {
                                                        rr_type: 'ImageBitmap',
                                                        args: [
                                                            {
                                                                rr_type: 'Blob',
                                                                data: [{ rr_type: 'ArrayBuffer', base64: r }],
                                                                type: o,
                                                            },
                                                        ],
                                                    },
                                                    0,
                                                    0,
                                                ],
                                            },
                                        ],
                                    })
                                }
                            }
                            var l,
                                d = 1e3 / e,
                                p = 0
                            ;(l = requestAnimationFrame(function e(s) {
                                var f
                                p && s - p < d
                                    ? (l = requestAnimationFrame(e))
                                    : ((p = s),
                                      ((f = []),
                                      n.document.querySelectorAll('canvas').forEach(function (e) {
                                          $(e, r, o, !0) || f.push(e)
                                      }),
                                      f).forEach(function (e) {
                                          return _e(
                                              i,
                                              void 0,
                                              void 0,
                                              t().mark(function n() {
                                                  var r, o, i, s
                                                  return t().wrap(
                                                      function (t) {
                                                          for (;;)
                                                              switch ((t.prev = t.next)) {
                                                                  case 0:
                                                                      if (((o = this.mirror.getId(e)), !c.get(o))) {
                                                                          t.next = 3
                                                                          break
                                                                      }
                                                                      return t.abrupt('return')
                                                                  case 3:
                                                                      return (
                                                                          c.set(o, !0),
                                                                          ['webgl', 'webgl2'].includes(e.__context) &&
                                                                              ((i = e.getContext(e.__context)),
                                                                              !1 ===
                                                                                  (null ===
                                                                                      (r =
                                                                                          null == i
                                                                                              ? void 0
                                                                                              : i.getContextAttributes()) ||
                                                                                  void 0 === r
                                                                                      ? void 0
                                                                                      : r.preserveDrawingBuffer) &&
                                                                                  i.clear(i.COLOR_BUFFER_BIT)),
                                                                          (t.next = 7),
                                                                          createImageBitmap(e)
                                                                      )
                                                                  case 7:
                                                                      ;(s = t.sent),
                                                                          u.postMessage(
                                                                              {
                                                                                  id: o,
                                                                                  bitmap: s,
                                                                                  width: e.width,
                                                                                  height: e.height,
                                                                                  dataURLOptions: a.dataURLOptions,
                                                                              },
                                                                              [s]
                                                                          )
                                                                  case 9:
                                                                  case 'end':
                                                                      return t.stop()
                                                              }
                                                      },
                                                      n,
                                                      this
                                                  )
                                              })
                                          )
                                      }),
                                      (l = requestAnimationFrame(e)))
                            })),
                                (this.resetObservers = function () {
                                    s(), cancelAnimationFrame(l)
                                })
                        },
                    },
                    {
                        key: 'initCanvasMutationObserver',
                        value: function (e, t, n) {
                            this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher()
                            var r = tt(e, t, n, !1),
                                o = (function (e, t, n, r) {
                                    var o,
                                        a = [],
                                        i = l(Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype))
                                    try {
                                        var s = function () {
                                            var i = o.value
                                            try {
                                                if ('function' != typeof t.CanvasRenderingContext2D.prototype[i])
                                                    return 'continue'
                                                var s = P(t.CanvasRenderingContext2D.prototype, i, function (o) {
                                                    return function () {
                                                        for (
                                                            var a = this, s = arguments.length, c = new Array(s), u = 0;
                                                            u < s;
                                                            u++
                                                        )
                                                            c[u] = arguments[u]
                                                        return (
                                                            $(this.canvas, n, r, !0) ||
                                                                setTimeout(function () {
                                                                    var n = $e([].concat(c), t, a)
                                                                    e(a.canvas, {
                                                                        type: he['2D'],
                                                                        property: i,
                                                                        args: n,
                                                                    })
                                                                }, 0),
                                                            o.apply(this, c)
                                                        )
                                                    }
                                                })
                                                a.push(s)
                                            } catch (n) {
                                                var c = z(t.CanvasRenderingContext2D.prototype, i, {
                                                    set: function (t) {
                                                        e(this.canvas, {
                                                            type: he['2D'],
                                                            property: i,
                                                            args: [t],
                                                            setter: !0,
                                                        })
                                                    },
                                                })
                                                a.push(c)
                                            }
                                        }
                                        for (i.s(); !(o = i.n()).done; ) s()
                                    } catch (e) {
                                        i.e(e)
                                    } finally {
                                        i.f()
                                    }
                                    return function () {
                                        a.forEach(function (e) {
                                            return e()
                                        })
                                    }
                                })(this.processMutation.bind(this), e, t, n),
                                a = (function (e, t, n, r, o) {
                                    var a = []
                                    return (
                                        a.push.apply(
                                            a,
                                            s(nt(t.WebGLRenderingContext.prototype, he.WebGL, e, n, r, 0, t))
                                        ),
                                        void 0 !== t.WebGL2RenderingContext &&
                                            a.push.apply(
                                                a,
                                                s(nt(t.WebGL2RenderingContext.prototype, he.WebGL2, e, n, r, 0, t))
                                            ),
                                        function () {
                                            a.forEach(function (e) {
                                                return e()
                                            })
                                        }
                                    )
                                })(this.processMutation.bind(this), e, t, n, this.mirror)
                            this.resetObservers = function () {
                                r(), o(), a()
                            }
                        },
                    },
                    {
                        key: 'startPendingCanvasMutationFlusher',
                        value: function () {
                            var e = this
                            requestAnimationFrame(function () {
                                return e.flushPendingCanvasMutations()
                            })
                        },
                    },
                    {
                        key: 'startRAFTimestamping',
                        value: function () {
                            var e = this
                            requestAnimationFrame(function t(n) {
                                ;(e.rafStamps.latestId = n), requestAnimationFrame(t)
                            })
                        },
                    },
                    {
                        key: 'flushPendingCanvasMutations',
                        value: function () {
                            var e = this
                            this.pendingCanvasMutations.forEach(function (t, n) {
                                var r = e.mirror.getId(n)
                                e.flushPendingCanvasMutationFor(n, r)
                            }),
                                requestAnimationFrame(function () {
                                    return e.flushPendingCanvasMutations()
                                })
                        },
                    },
                    {
                        key: 'flushPendingCanvasMutationFor',
                        value: function (e, t) {
                            if (!this.frozen && !this.locked) {
                                var n = this.pendingCanvasMutations.get(e)
                                if (n && -1 !== t) {
                                    var r = n.map(function (e) {
                                            var t =
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
  ***************************************************************************** */
                                                (function (e, t) {
                                                    var n = {}
                                                    for (var r in e)
                                                        Object.prototype.hasOwnProperty.call(e, r) &&
                                                            t.indexOf(r) < 0 &&
                                                            (n[r] = e[r])
                                                    if (
                                                        null != e &&
                                                        'function' == typeof Object.getOwnPropertySymbols
                                                    ) {
                                                        var o = 0
                                                        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                                                            t.indexOf(r[o]) < 0 &&
                                                                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                                                                (n[r[o]] = e[r[o]])
                                                    }
                                                    return n
                                                })(e, ['type'])
                                            return t
                                        }),
                                        o = n[0].type
                                    this.mutationCb({ id: t, type: o, commands: r }),
                                        this.pendingCanvasMutations.delete(e)
                                }
                            }
                        },
                    },
                ]),
                e
            )
        })(),
        ft = (function () {
            function e(t) {
                r(this, e),
                    (this.trackedLinkElements = new WeakSet()),
                    (this.styleMirror = new ie()),
                    (this.mutationCb = t.mutationCb),
                    (this.adoptedStyleSheetCb = t.adoptedStyleSheetCb)
            }
            return (
                a(e, [
                    {
                        key: 'attachLinkElement',
                        value: function (e, t) {
                            '_cssText' in t.attributes &&
                                this.mutationCb({
                                    adds: [],
                                    removes: [],
                                    texts: [],
                                    attributes: [{ id: t.id, attributes: t.attributes }],
                                }),
                                this.trackLinkElement(e)
                        },
                    },
                    {
                        key: 'trackLinkElement',
                        value: function (e) {
                            this.trackedLinkElements.has(e) ||
                                (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e))
                        },
                    },
                    {
                        key: 'adoptStyleSheets',
                        value: function (e, t) {
                            if (0 !== e.length) {
                                var n,
                                    r = { id: t, styleIds: [] },
                                    o = [],
                                    a = l(e)
                                try {
                                    for (a.s(); !(n = a.n()).done; ) {
                                        var i = n.value,
                                            s = void 0
                                        if (this.styleMirror.has(i)) s = this.styleMirror.getId(i)
                                        else {
                                            s = this.styleMirror.add(i)
                                            var c = Array.from(i.rules || CSSRule)
                                            o.push({
                                                styleId: s,
                                                rules: c.map(function (e, t) {
                                                    return { rule: h(e), index: t }
                                                }),
                                            })
                                        }
                                        r.styleIds.push(s)
                                    }
                                } catch (e) {
                                    a.e(e)
                                } finally {
                                    a.f()
                                }
                                o.length > 0 && (r.styles = o), this.adoptedStyleSheetCb(r)
                            }
                        },
                    },
                    {
                        key: 'reset',
                        value: function () {
                            this.styleMirror.reset(), (this.trackedLinkElements = new WeakSet())
                        },
                    },
                    { key: 'trackStylesheetInLinkElement', value: function (e) {} },
                ]),
                e
            )
        })(),
        ht = (function () {
            function e() {
                r(this, e), (this.nodeMap = new WeakMap()), (this.loop = !0), this.periodicallyClear()
            }
            return (
                a(e, [
                    {
                        key: 'periodicallyClear',
                        value: function () {
                            var e = this
                            requestAnimationFrame(function () {
                                e.clear(), e.loop && e.periodicallyClear()
                            })
                        },
                    },
                    {
                        key: 'inOtherBuffer',
                        value: function (e, t) {
                            var n = this.nodeMap.get(e)
                            return (
                                n &&
                                Array.from(n).some(function (e) {
                                    return e !== t
                                })
                            )
                        },
                    },
                    {
                        key: 'add',
                        value: function (e, t) {
                            this.nodeMap.set(e, (this.nodeMap.get(e) || new Set()).add(t))
                        },
                    },
                    {
                        key: 'clear',
                        value: function () {
                            this.nodeMap = new WeakMap()
                        },
                    },
                    {
                        key: 'destroy',
                        value: function () {
                            this.loop = !1
                        },
                    },
                ]),
                e
            )
        })()
    function gt(e) {
        return Object.assign(Object.assign({}, e), { timestamp: Q() })
    }
    var mt = !1,
        vt = new g()
    function yt() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.emit,
            n = e.checkoutEveryNms,
            r = e.checkoutEveryNth,
            o = e.blockClass,
            a = void 0 === o ? 'rr-block' : o,
            i = e.blockSelector,
            s = void 0 === i ? null : i,
            c = e.ignoreClass,
            u = void 0 === c ? 'rr-ignore' : c,
            d = e.ignoreSelector,
            p = void 0 === d ? null : d,
            f = e.maskTextClass,
            h = void 0 === f ? 'rr-mask' : f,
            m = e.maskTextSelector,
            v = void 0 === m ? null : m,
            y = e.inlineStylesheet,
            I = void 0 === y || y,
            C = e.maskAllInputs,
            b = e.maskInputOptions,
            S = e.slimDOMOptions,
            A = e.maskInputFn,
            k = e.maskTextFn,
            w = e.hooks,
            M = e.packFn,
            N = e.sampling,
            T = void 0 === N ? {} : N,
            O = e.dataURLOptions,
            E = void 0 === O ? {} : O,
            R = e.mousemoveWait,
            x = e.recordCanvas,
            L = void 0 !== x && x,
            F = e.recordCrossOriginIframes,
            D = void 0 !== F && F,
            W = e.recordAfter,
            B = void 0 === W ? ('DOMContentLoaded' === e.recordAfter ? e.recordAfter : 'load') : W,
            G = e.userTriggeredOnInput,
            V = void 0 !== G && G,
            Z = e.collectFonts,
            U = void 0 !== Z && Z,
            j = e.inlineImages,
            _ = void 0 !== j && j,
            J = e.plugins,
            z = e.keepIframeSrcFn,
            P =
                void 0 === z
                    ? function () {
                          return !1
                      }
                    : z,
            Q = e.ignoreCSSAttributes,
            $ = void 0 === Q ? new Set([]) : Q
        we(e.errorHandler)
        var ee = !D || window.parent === window,
            te = !1
        if (!ee)
            try {
                window.parent.document && (te = !1)
            } catch (e) {
                te = !0
            }
        if (ee && !t) throw new Error('emit function is required')
        void 0 !== R && void 0 === T.mousemove && (T.mousemove = R), vt.reset()
        var ne,
            ie =
                !0 === C
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
            se =
                !0 === S || 'all' === S
                    ? {
                          script: !0,
                          comment: !0,
                          headFavicon: !0,
                          headWhitespace: !0,
                          headMetaSocial: !0,
                          headMetaRobots: !0,
                          headMetaHttpEquiv: !0,
                          headMetaVerification: !0,
                          headMetaAuthorship: 'all' === S,
                          headMetaDescKeywords: 'all' === S,
                      }
                    : S || {}
        !(function () {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window
            'NodeList' in t &&
                !t.NodeList.prototype.forEach &&
                (t.NodeList.prototype.forEach = Array.prototype.forEach),
                'DOMTokenList' in t &&
                    !t.DOMTokenList.prototype.forEach &&
                    (t.DOMTokenList.prototype.forEach = Array.prototype.forEach),
                Node.prototype.contains ||
                    (Node.prototype.contains = function () {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
                        var o = n[0]
                        if (!(0 in n)) throw new TypeError('1 argument is required')
                        do {
                            if (e === o) return !0
                        } while ((o = o && o.parentNode))
                        return !1
                    })
        })()
        var ce = 0,
            ue = function (e) {
                var t,
                    n = l(J || [])
                try {
                    for (n.s(); !(t = n.n()).done; ) {
                        var r = t.value
                        r.eventProcessor && (e = r.eventProcessor(e))
                    }
                } catch (e) {
                    n.e(e)
                } finally {
                    n.f()
                }
                return M && !te && (e = M(e)), e
            }
        ct = function (e, o) {
            var a
            if (
                (!(null === (a = Te[0]) || void 0 === a ? void 0 : a.isFrozen()) ||
                    e.type === le.FullSnapshot ||
                    (e.type === le.IncrementalSnapshot && e.data.source === de.Mutation) ||
                    Te.forEach(function (e) {
                        return e.unfreeze()
                    }),
                ee)
            )
                null == t || t(ue(e), o)
            else if (te) {
                var i = { type: 'rrweb', event: ue(e), origin: window.location.origin, isCheckout: o }
                window.parent.postMessage(i, '*')
            }
            if (e.type === le.FullSnapshot) (ne = e), (ce = 0)
            else if (e.type === le.IncrementalSnapshot) {
                if (e.data.source === de.Mutation && e.data.isAttachIframe) return
                ce++
                var s = r && ce >= r,
                    c = n && e.timestamp - ne.timestamp > n
                ;(s || c) && ut(!0)
            }
        }
        var pe,
            fe = function (e) {
                ct(gt({ type: le.IncrementalSnapshot, data: Object.assign({ source: de.Mutation }, e) }))
            },
            he = function (e) {
                return ct(gt({ type: le.IncrementalSnapshot, data: Object.assign({ source: de.Scroll }, e) }))
            },
            ge = function (e) {
                return ct(gt({ type: le.IncrementalSnapshot, data: Object.assign({ source: de.CanvasMutation }, e) }))
            },
            me = new ft({
                mutationCb: fe,
                adoptedStyleSheetCb: function (e) {
                    return ct(
                        gt({ type: le.IncrementalSnapshot, data: Object.assign({ source: de.AdoptedStyleSheet }, e) })
                    )
                },
            }),
            ve = new Ye({
                mirror: vt,
                mutationCb: fe,
                stylesheetManager: me,
                recordCrossOriginIframes: D,
                wrappedEmit: ct,
            }),
            ye = l(J || [])
        try {
            for (ye.s(); !(pe = ye.n()).done; ) {
                var Ie = pe.value
                Ie.getMirror &&
                    Ie.getMirror({
                        nodeMirror: vt,
                        crossOriginIframeMirror: ve.crossOriginIframeMirror,
                        crossOriginIframeStyleMirror: ve.crossOriginIframeStyleMirror,
                    })
            }
        } catch (e) {
            ye.e(e)
        } finally {
            ye.f()
        }
        var Ce = new ht()
        lt = new pt({
            recordCanvas: L,
            mutationCb: ge,
            win: window,
            blockClass: a,
            blockSelector: s,
            mirror: vt,
            sampling: T.canvas,
            dataURLOptions: E,
        })
        var be = new je({
            mutationCb: fe,
            scrollCb: he,
            bypassOptions: {
                blockClass: a,
                blockSelector: s,
                maskTextClass: h,
                maskTextSelector: v,
                inlineStylesheet: I,
                maskInputOptions: ie,
                dataURLOptions: E,
                maskTextFn: k,
                maskInputFn: A,
                recordCanvas: L,
                inlineImages: _,
                sampling: T,
                slimDOMOptions: se,
                iframeManager: ve,
                stylesheetManager: me,
                canvasManager: lt,
                keepIframeSrcFn: P,
                processedNodeManager: Ce,
            },
            mirror: vt,
        })
        ut = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            ct(gt({ type: le.Meta, data: { href: window.location.href, width: q(), height: X() } }), e),
                me.reset(),
                be.init(),
                Te.forEach(function (e) {
                    return e.lock()
                })
            var t = (function (e, t) {
                var n = t || {},
                    r = n.mirror,
                    o = void 0 === r ? new g() : r,
                    a = n.blockClass,
                    i = void 0 === a ? 'rr-block' : a,
                    s = n.blockSelector,
                    c = void 0 === s ? null : s,
                    u = n.maskTextClass,
                    l = void 0 === u ? 'rr-mask' : u,
                    d = n.maskTextSelector,
                    p = void 0 === d ? null : d,
                    f = n.inlineStylesheet,
                    h = void 0 === f || f,
                    m = n.inlineImages,
                    v = void 0 !== m && m,
                    y = n.recordCanvas,
                    I = void 0 !== y && y,
                    C = n.maskAllInputs,
                    b = void 0 !== C && C,
                    S = n.maskTextFn,
                    A = n.maskInputFn,
                    k = n.slimDOM,
                    w = void 0 !== k && k,
                    M = n.dataURLOptions,
                    N = n.preserveWhiteSpace,
                    T = n.onSerialize,
                    O = n.onIframeLoad,
                    E = n.iframeLoadTimeout,
                    R = n.onStylesheetLoad,
                    x = n.stylesheetLoadTimeout,
                    L = n.keepIframeSrcFn
                return K(e, {
                    doc: e,
                    mirror: o,
                    blockClass: i,
                    blockSelector: c,
                    maskTextClass: l,
                    maskTextSelector: p,
                    skipChild: !1,
                    inlineStylesheet: h,
                    maskInputOptions:
                        !0 === b
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
                            : !1 === b
                            ? { password: !0 }
                            : b,
                    maskTextFn: S,
                    maskInputFn: A,
                    slimDOMOptions:
                        !0 === w || 'all' === w
                            ? {
                                  script: !0,
                                  comment: !0,
                                  headFavicon: !0,
                                  headWhitespace: !0,
                                  headMetaDescKeywords: 'all' === w,
                                  headMetaSocial: !0,
                                  headMetaRobots: !0,
                                  headMetaHttpEquiv: !0,
                                  headMetaAuthorship: !0,
                                  headMetaVerification: !0,
                              }
                            : !1 === w
                            ? {}
                            : w,
                    dataURLOptions: M,
                    inlineImages: v,
                    recordCanvas: I,
                    preserveWhiteSpace: N,
                    onSerialize: T,
                    onIframeLoad: O,
                    iframeLoadTimeout: E,
                    onStylesheetLoad: R,
                    stylesheetLoadTimeout: x,
                    keepIframeSrcFn:
                        void 0 === L
                            ? function () {
                                  return !1
                              }
                            : L,
                    newlyAddedElement: !1,
                })
            })(document, {
                mirror: vt,
                blockClass: a,
                blockSelector: s,
                maskTextClass: h,
                maskTextSelector: v,
                inlineStylesheet: I,
                maskAllInputs: ie,
                maskTextFn: k,
                slimDOM: se,
                dataURLOptions: E,
                recordCanvas: L,
                inlineImages: _,
                onSerialize: function (e) {
                    re(e, vt) && ve.addIframe(e),
                        oe(e, vt) && me.trackLinkElement(e),
                        ae(e) && be.addShadowRoot(e.shadowRoot, document)
                },
                onIframeLoad: function (e, t) {
                    ve.attachIframe(e, t), be.observeAttachShadow(e)
                },
                onStylesheetLoad: function (e, t) {
                    me.attachLinkElement(e, t)
                },
                keepIframeSrcFn: P,
            })
            if (!t) return console.warn('Failed to snapshot the document')
            ct(gt({ type: le.FullSnapshot, data: { node: t, initialOffset: H(window) } }), e),
                Te.forEach(function (e) {
                    return e.unlock()
                }),
                document.adoptedStyleSheets &&
                    document.adoptedStyleSheets.length > 0 &&
                    me.adoptStyleSheets(document.adoptedStyleSheets, vt.getId(document))
        }
        try {
            var Se = [],
                Ae = function (e) {
                    var t
                    return Ne(Ve)(
                        {
                            mutationCb: fe,
                            mousemoveCb: function (e, t) {
                                return ct(gt({ type: le.IncrementalSnapshot, data: { source: t, positions: e } }))
                            },
                            mouseInteractionCb: function (e) {
                                return ct(
                                    gt({
                                        type: le.IncrementalSnapshot,
                                        data: Object.assign({ source: de.MouseInteraction }, e),
                                    })
                                )
                            },
                            scrollCb: he,
                            viewportResizeCb: function (e) {
                                return ct(
                                    gt({
                                        type: le.IncrementalSnapshot,
                                        data: Object.assign({ source: de.ViewportResize }, e),
                                    })
                                )
                            },
                            inputCb: function (e) {
                                return ct(
                                    gt({ type: le.IncrementalSnapshot, data: Object.assign({ source: de.Input }, e) })
                                )
                            },
                            mediaInteractionCb: function (e) {
                                return ct(
                                    gt({
                                        type: le.IncrementalSnapshot,
                                        data: Object.assign({ source: de.MediaInteraction }, e),
                                    })
                                )
                            },
                            styleSheetRuleCb: function (e) {
                                return ct(
                                    gt({
                                        type: le.IncrementalSnapshot,
                                        data: Object.assign({ source: de.StyleSheetRule }, e),
                                    })
                                )
                            },
                            styleDeclarationCb: function (e) {
                                return ct(
                                    gt({
                                        type: le.IncrementalSnapshot,
                                        data: Object.assign({ source: de.StyleDeclaration }, e),
                                    })
                                )
                            },
                            canvasMutationCb: ge,
                            fontCb: function (e) {
                                return ct(
                                    gt({ type: le.IncrementalSnapshot, data: Object.assign({ source: de.Font }, e) })
                                )
                            },
                            selectionCb: function (e) {
                                ct(
                                    gt({
                                        type: le.IncrementalSnapshot,
                                        data: Object.assign({ source: de.Selection }, e),
                                    })
                                )
                            },
                            blockClass: a,
                            ignoreClass: u,
                            ignoreSelector: p,
                            maskTextClass: h,
                            maskTextSelector: v,
                            maskInputOptions: ie,
                            inlineStylesheet: I,
                            sampling: T,
                            recordCanvas: L,
                            inlineImages: _,
                            userTriggeredOnInput: V,
                            collectFonts: U,
                            doc: e,
                            maskInputFn: A,
                            maskTextFn: k,
                            keepIframeSrcFn: P,
                            blockSelector: s,
                            slimDOMOptions: se,
                            dataURLOptions: E,
                            mirror: vt,
                            iframeManager: ve,
                            stylesheetManager: me,
                            shadowDomManager: be,
                            processedNodeManager: Ce,
                            canvasManager: lt,
                            ignoreCSSAttributes: $,
                            plugins:
                                (null ===
                                    (t =
                                        null == J
                                            ? void 0
                                            : J.filter(function (e) {
                                                  return e.observer
                                              })) || void 0 === t
                                    ? void 0
                                    : t.map(function (e) {
                                          return {
                                              observer: e.observer,
                                              options: e.options,
                                              callback: function (t) {
                                                  return ct(
                                                      gt({ type: le.Plugin, data: { plugin: e.name, payload: t } })
                                                  )
                                              },
                                          }
                                      })) || [],
                        },
                        w
                    )
                }
            ve.addLoadListener(function (e) {
                try {
                    Se.push(Ae(e.contentDocument))
                } catch (e) {
                    console.warn(e)
                }
            })
            var ke = function () {
                ut(), Se.push(Ae(document)), (mt = !0)
            }
            return (
                'interactive' === document.readyState || 'complete' === document.readyState
                    ? ke()
                    : (Se.push(
                          Y('DOMContentLoaded', function () {
                              ct(gt({ type: le.DomContentLoaded, data: {} })), 'DOMContentLoaded' === B && ke()
                          })
                      ),
                      Se.push(
                          Y(
                              'load',
                              function () {
                                  ct(gt({ type: le.Load, data: {} })), 'load' === B && ke()
                              },
                              window
                          )
                      )),
                function () {
                    Se.forEach(function (e) {
                        return e()
                    }),
                        Ce.destroy(),
                        (mt = !1),
                        Me()
                }
            )
        } catch (e) {
            console.warn(e)
        }
    }
    ;(yt.addCustomEvent = function (e, t) {
        if (!mt) throw new Error('please add custom event after start recording')
        ct(gt({ type: le.Custom, data: { tag: e, payload: t } }))
    }),
        (yt.freezePage = function () {
            Te.forEach(function (e) {
                return e.freeze()
            })
        }),
        (yt.takeFullSnapshot = function (e) {
            if (!mt) throw new Error('please take full snapshot after start recording')
            ut(e)
        }),
        (yt.mirror = vt)
    var It = (function () {
            function e(t) {
                r(this, e),
                    (this.fileName = t.fileName || ''),
                    (this.functionName = t.functionName || ''),
                    (this.lineNumber = t.lineNumber),
                    (this.columnNumber = t.columnNumber)
            }
            return (
                a(e, [
                    {
                        key: 'toString',
                        value: function () {
                            var e = this.lineNumber || '',
                                t = this.columnNumber || ''
                            return this.functionName
                                ? ''
                                      .concat(this.functionName, ' (')
                                      .concat(this.fileName, ':')
                                      .concat(e, ':')
                                      .concat(t, ')')
                                : ''.concat(this.fileName, ':').concat(e, ':').concat(t)
                        },
                    },
                ]),
                e
            )
        })(),
        Ct = /(^|@)\S+:\d+/,
        bt = /^\s*at .*(\S+:\d+|\(native\))/m,
        St = /^(eval@)?(\[native code])?$/,
        At = {
            parse: function (e) {
                return e
                    ? void 0 !== e.stacktrace || void 0 !== e['opera#sourceloc']
                        ? this.parseOpera(e)
                        : e.stack && e.stack.match(bt)
                        ? this.parseV8OrIE(e)
                        : e.stack
                        ? this.parseFFOrSafari(e)
                        : (console.warn('[console-record-plugin]: Failed to parse error object:', e), [])
                    : []
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
                        return !!e.match(bt)
                    }, this)
                    .map(function (e) {
                        e.indexOf('(eval ') > -1 &&
                            (e = e.replace(/eval code/g, 'eval').replace(/(\(eval at [^()]*)|(\),.*$)/g, ''))
                        var t = e.replace(/^\s+/, '').replace(/\(eval code/g, '('),
                            n = t.match(/ (\((.+):(\d+):(\d+)\)$)/),
                            r = (t = n ? t.replace(n[0], '') : t).split(/\s+/).slice(1),
                            o = this.extractLocation(n ? n[1] : r.pop()),
                            a = r.join(' ') || void 0,
                            i = ['eval', '<anonymous>'].indexOf(o[0]) > -1 ? void 0 : o[0]
                        return new It({ functionName: a, fileName: i, lineNumber: o[1], columnNumber: o[2] })
                    }, this)
            },
            parseFFOrSafari: function (e) {
                return e.stack
                    .split('\n')
                    .filter(function (e) {
                        return !e.match(St)
                    }, this)
                    .map(function (e) {
                        if (
                            (e.indexOf(' > eval') > -1 &&
                                (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ':$1')),
                            -1 === e.indexOf('@') && -1 === e.indexOf(':'))
                        )
                            return new It({ functionName: e })
                        var t = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                            n = e.match(t),
                            r = n && n[1] ? n[1] : void 0,
                            o = this.extractLocation(e.replace(t, ''))
                        return new It({ functionName: r, fileName: o[0], lineNumber: o[1], columnNumber: o[2] })
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
                    var t = /Line (\d+).*script (?:in )?(\S+)/i, n = e.message.split('\n'), r = [], o = 2, a = n.length;
                    o < a;
                    o += 2
                ) {
                    var i = t.exec(n[o])
                    i && r.push(new It({ fileName: i[2], lineNumber: parseFloat(i[1]) }))
                }
                return r
            },
            parseOpera10: function (e) {
                for (
                    var t = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                        n = e.stacktrace.split('\n'),
                        r = [],
                        o = 0,
                        a = n.length;
                    o < a;
                    o += 2
                ) {
                    var i = t.exec(n[o])
                    i && r.push(new It({ functionName: i[3] || void 0, fileName: i[2], lineNumber: parseFloat(i[1]) }))
                }
                return r
            },
            parseOpera11: function (e) {
                return e.stack
                    .split('\n')
                    .filter(function (e) {
                        return !!e.match(Ct) && !e.match(/^Error created at/)
                    }, this)
                    .map(function (e) {
                        var t = e.split('@'),
                            n = this.extractLocation(t.pop()),
                            r =
                                (t.shift() || '')
                                    .replace(/<anonymous function(: (\w+))?>/, '$2')
                                    .replace(/\([^)]*\)/g, '') || void 0
                        return new It({ functionName: r, fileName: n[0], lineNumber: n[1], columnNumber: n[2] })
                    }, this)
            },
        }
    function kt(e) {
        if (!e || !e.outerHTML) return ''
        for (var t = ''; e.parentElement; ) {
            var n = e.localName
            if (!n) break
            n = n.toLowerCase()
            var r = e.parentElement,
                o = []
            if (r.children && r.children.length > 0)
                for (var a = 0; a < r.children.length; a++) {
                    var i = r.children[a]
                    i.localName && i.localName.toLowerCase && i.localName.toLowerCase() === n && o.push(i)
                }
            o.length > 1 && (n += ':eq('.concat(o.indexOf(e), ')')), (t = n + (t ? '>' + t : '')), (e = r)
        }
        return t
    }
    function wt(e) {
        return '[object Object]' === Object.prototype.toString.call(e)
    }
    function Mt(e, t) {
        if (0 === t) return !0
        for (var n = 0, r = Object.keys(e); n < r.length; n++) {
            var o = r[n]
            if (wt(e[o]) && Mt(e[o], t - 1)) return !0
        }
        return !1
    }
    function Nt(e, t) {
        var n = { numOfKeysLimit: 50, depthOfLimit: 4 }
        Object.assign(n, t)
        var r = [],
            o = []
        return JSON.stringify(e, function (e, t) {
            if (r.length > 0) {
                var a = r.indexOf(this)
                ~a ? r.splice(a + 1) : r.push(this),
                    ~a ? o.splice(a, 1 / 0, e) : o.push(e),
                    ~r.indexOf(t) &&
                        (t = r[0] === t ? '[Circular ~]' : '[Circular ~.' + o.slice(0, r.indexOf(t)).join('.') + ']')
            } else r.push(t)
            if (null === t) return t
            if (void 0 === t) return 'undefined'
            if (
                (function (e) {
                    if (wt(e) && Object.keys(e).length > n.numOfKeysLimit) return !0
                    if ('function' == typeof e) return !0
                    if (wt(e) && Mt(e, n.depthOfLimit)) return !0
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
                var i = {}
                for (var s in t) {
                    var c = t[s]
                    Array.isArray(c) ? (i[s] = kt(c.length ? c[0] : null)) : (i[s] = c)
                }
                return i
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
    var Tt = {
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
    function Ot(e, t, n) {
        var r,
            o = n ? Object.assign({}, Tt, n) : Tt,
            a = o.logger
        if (!a) return function () {}
        r = 'string' == typeof a ? t[a] : a
        var i = 0,
            s = !1,
            c = []
        if (o.level.includes('error')) {
            var u = function (t) {
                var n = t.message,
                    r = t.error,
                    a = At.parse(r).map(function (e) {
                        return e.toString()
                    }),
                    i = [Nt(n, o.stringifyOptions)]
                e({ level: 'error', trace: a, payload: i })
            }
            t.addEventListener('error', u),
                c.push(function () {
                    t.removeEventListener('error', u)
                })
            var d = function (t) {
                var n, r
                t.reason instanceof Error
                    ? ((n = t.reason),
                      (r = [Nt('Uncaught (in promise) '.concat(n.name, ': ').concat(n.message), o.stringifyOptions)]))
                    : ((n = new Error()),
                      (r = [Nt('Uncaught (in promise)', o.stringifyOptions), Nt(t.reason, o.stringifyOptions)]))
                var a = At.parse(n).map(function (e) {
                    return e.toString()
                })
                e({ level: 'error', trace: a, payload: r })
            }
            t.addEventListener('unhandledrejection', d),
                c.push(function () {
                    t.removeEventListener('unhandledrejection', d)
                })
        }
        var p,
            f = l(o.level)
        try {
            for (f.s(); !(p = f.n()).done; ) {
                var h = p.value
                c.push(g(r, h))
            }
        } catch (e) {
            f.e(e)
        } finally {
            f.f()
        }
        return function () {
            c.forEach(function (e) {
                return e()
            })
        }
        function g(t, n) {
            var r = this
            return t[n]
                ? P(t, n, function (t) {
                      return function () {
                          for (var a = arguments.length, c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u]
                          if ((t.apply(r, c), !s)) {
                              s = !0
                              try {
                                  var l = At.parse(new Error())
                                          .map(function (e) {
                                              return e.toString()
                                          })
                                          .splice(1),
                                      d = c.map(function (e) {
                                          return Nt(e, o.stringifyOptions)
                                      })
                                  ++i < o.lengthThreshold
                                      ? e({ level: n, trace: l, payload: d })
                                      : i === o.lengthThreshold &&
                                        e({
                                            level: 'warn',
                                            trace: [],
                                            payload: [Nt('The number of log records reached the threshold.')],
                                        })
                              } catch (e) {
                                  t.apply(void 0, ['rrweb logger error:', e].concat(c))
                              } finally {
                                  s = !1
                              }
                          }
                      }
                  })
                : function () {}
        }
    }
    var Et = 'undefined' != typeof window ? window : {}
    ;(Et.rrweb = { record: yt, version: 'v2', rrwebVersion: '2.0.0-alpha.11' }),
        (Et.rrwebConsoleRecord = {
            getRecordConsolePlugin: function (e) {
                return { name: 'rrweb/console@1', observer: Ot, options: e }
            },
        })
})()
//# sourceMappingURL=recorder-v2.js.map
