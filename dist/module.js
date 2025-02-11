'use strict'
function e(e, t) {
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
function t(t) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {}
        n % 2
            ? e(Object(r), !0).forEach(function (e) {
                  s(t, e, r[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : e(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
              })
    }
    return t
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
function i(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n]
        ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
    }
}
function o(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), Object.defineProperty(e, 'prototype', { writable: !1 }), e
}
function s(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    )
}
function a(e, t) {
    if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function')
    ;(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && c(e, t)
}
function u(e) {
    return (
        (u = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
              }),
        u(e)
    )
}
function c(e, t) {
    return (
        (c = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                  return (e.__proto__ = t), e
              }),
        c(e, t)
    )
}
function l(e, t) {
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
function d(e, t) {
    if (t && ('object' == typeof t || 'function' == typeof t)) return t
    if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
    return (function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
    })(e)
}
function f(e) {
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
            r = u(e)
        if (t) {
            var i = u(this).constructor
            n = Reflect.construct(r, arguments, i)
        } else n = r.apply(this, arguments)
        return d(this, n)
    }
}
function p(e, t) {
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
                s = !0,
                a = !1
            try {
                for (n = n.call(e); !(s = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); s = !0);
            } catch (e) {
                ;(a = !0), (i = e)
            } finally {
                try {
                    s || null == n.return || n.return()
                } finally {
                    if (a) throw i
                }
            }
            return o
        })(e, t) ||
        g(e, t) ||
        (function () {
            throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
        })()
    )
}
function h(e) {
    return (
        (function (e) {
            if (Array.isArray(e)) return _(e)
        })(e) ||
        (function (e) {
            if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
                return Array.from(e)
        })(e) ||
        g(e) ||
        (function () {
            throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
        })()
    )
}
function g(e, t) {
    if (e) {
        if ('string' == typeof e) return _(e, t)
        var n = Object.prototype.toString.call(e).slice(8, -1)
        return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
                ? Array.from(e)
                : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? _(e, t)
                : void 0
        )
    }
}
function _(e, t) {
    ;(null == t || t > e.length) && (t = e.length)
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
    return r
}
function v(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
    if (!n) {
        if (Array.isArray(e) || (n = g(e)) || (t && e && 'number' == typeof e.length)) {
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
        s = !0,
        a = !1
    return {
        s: function () {
            n = n.call(e)
        },
        n: function () {
            var e = n.next()
            return (s = e.done), e
        },
        e: function (e) {
            ;(a = !0), (o = e)
        },
        f: function () {
            try {
                s || null == n.return || n.return()
            } finally {
                if (a) throw o
            }
        },
    }
}
Object.defineProperty(exports, '__esModule', { value: !0 })
var m = { DEBUG: !1, LIB_VERSION: '1.82.3' },
    y = Array.prototype,
    b = Object.prototype,
    w = b.toString,
    k = b.hasOwnProperty,
    S = 'undefined' != typeof window ? window : {},
    x = S.navigator || { userAgent: '' },
    E = S.document || {},
    P = x.userAgent,
    F = ['localhost', '127.0.0.1'],
    O = y.forEach,
    I = y.indexOf,
    $ = Array.isArray,
    R = {},
    T = {
        log: function () {
            if (m.DEBUG && !q(window.console) && window.console) {
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
                    M(n, function (t) {
                        e(t)
                    })
                }
            }
        },
        error: function () {
            if (m.DEBUG && !q(window.console) && window.console) {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                var r = ['PostHog error:'].concat(t),
                    i =
                        '__rrweb_original__' in window.console.error
                            ? window.console.error.__rrweb_original__
                            : window.console.error
                try {
                    i.apply(window.console, r)
                } catch (e) {
                    M(r, function (e) {
                        i(e)
                    })
                }
            }
        },
        critical: function () {
            if (!q(window.console) && window.console) {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                var r = ['PostHog error:'].concat(t),
                    i =
                        '__rrweb_original__' in window.console.error
                            ? window.console.error.__rrweb_original__
                            : window.console.error
                try {
                    i.apply(window.console, r)
                } catch (e) {
                    M(r, function (e) {
                        i(e)
                    })
                }
            }
        },
        unintializedWarning: function (e) {
            m.DEBUG &&
                !q(window.console) &&
                window.console &&
                T.error('[PostHog] You must initialize PostHog before calling '.concat(e))
        },
    },
    C = function (e) {
        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
    }
function M(e, t, n) {
    if (Array.isArray(e))
        if (O && e.forEach === O) e.forEach(t, n)
        else if ('length' in e && e.length === +e.length)
            for (var r = 0, i = e.length; r < i; r++) if (r in e && t.call(n, e[r], r) === R) return
}
function A(e, t, n) {
    if (null != e) {
        if (Array.isArray(e)) return M(e, t, n)
        for (var r in e) if (k.call(e, r) && t.call(n, e[r], r) === R) return
    }
}
var D = function (e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]
        return (
            M(n, function (t) {
                for (var n in t) void 0 !== t[n] && (e[n] = t[n])
            }),
            e
        )
    },
    j =
        $ ||
        function (e) {
            return '[object Array]' === w.call(e)
        },
    N = function (e) {
        try {
            return /^\s*\bfunction\b/.test(e)
        } catch (e) {
            return !1
        }
    }
function H(e, t) {
    return -1 !== e.indexOf(t)
}
var L = function (e) {
        return e === Object(e) && !j(e)
    },
    B = function (e) {
        if (L(e)) {
            for (var t in e) if (k.call(e, t)) return !1
            return !0
        }
        return !1
    },
    q = function (e) {
        return void 0 === e
    },
    U = function (e) {
        return '[object String]' == w.call(e)
    },
    V = function (e) {
        return '[object Number]' == w.call(e)
    },
    G = function (e, t) {
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
    z = function () {
        return (
            (Date.now =
                Date.now ||
                function () {
                    return +new Date()
                }),
            Date.now()
        )
    },
    W = function (e) {
        return function () {
            try {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
                return e.apply(this, n)
            } catch (e) {
                T.critical('Implementation error. Please turn on debug and contact support@posthog.com.'), T.critical(e)
            }
        }
    },
    Y = function (e) {
        var t = {}
        return (
            A(e, function (e, n) {
                U(e) && e.length > 0 && (t[n] = e)
            }),
            t
        )
    }
var Q = ['$performance_raw']
function J(e, t) {
    return (
        (n = e),
        (r = function (e, n) {
            return n && Q.indexOf(n) > -1 ? e : 'string' == typeof e && null !== t ? e.slice(0, t) : e
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
                  j(t)
                      ? ((o = []),
                        M(t, function (t) {
                            o.push(e(t))
                        }))
                      : ((o = {}),
                        A(t, function (t, n) {
                            i.has(t) || (o[n] = e(t, n))
                        })),
                  o)
            var o
        })(n)
    )
    var n, r, i
}
function X(e) {
    var t,
        n,
        r,
        i,
        o,
        s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
        a = 0,
        u = 0,
        c = '',
        l = []
    if (!e) return e
    e = K(e)
    do {
        ;(t = ((o = (e.charCodeAt(a++) << 16) | (e.charCodeAt(a++) << 8) | e.charCodeAt(a++)) >> 18) & 63),
            (n = (o >> 12) & 63),
            (r = (o >> 6) & 63),
            (i = 63 & o),
            (l[u++] = s.charAt(t) + s.charAt(n) + s.charAt(r) + s.charAt(i))
    } while (a < e.length)
    switch (((c = l.join('')), e.length % 3)) {
        case 1:
            c = c.slice(0, -2) + '=='
            break
        case 2:
            c = c.slice(0, -1) + '='
    }
    return c
}
var K = function (e) {
        var t,
            n,
            r,
            i,
            o = ''
        for (t = n = 0, r = (e = (e + '').replace(/\r\n/g, '\n').replace(/\r/g, '\n')).length, i = 0; i < r; i++) {
            var s = e.charCodeAt(i),
                a = null
            s < 128
                ? n++
                : (a =
                      s > 127 && s < 2048
                          ? String.fromCharCode((s >> 6) | 192, (63 & s) | 128)
                          : String.fromCharCode((s >> 12) | 224, ((s >> 6) & 63) | 128, (63 & s) | 128)),
                null !== a && (n > t && (o += e.substring(t, n)), (o += a), (t = n = i + 1))
        }
        return n > t && (o += e.substring(t, e.length)), o
    },
    Z = [
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
    ee = function (e, t) {
        return Z.concat(t).some(function (t) {
            return e.includes ? e.includes(t) : -1 !== e.indexOf(t)
        })
    },
    te = function (e, t) {
        var n = t.replace(/[[]/, '\\[').replace(/[\]]/, '\\]'),
            r = new RegExp('[\\?&]' + n + '=([^&#]*)').exec(e)
        if (null === r || (r && 'string' != typeof r[1] && r[1].length)) return ''
        var i = r[1]
        try {
            i = decodeURIComponent(i)
        } catch (e) {
            T.error('Skipping decoding for malformed query param: ' + i)
        }
        return i.replace(/\+/g, ' ')
    },
    ne = function (e, t) {
        var n = e.match(new RegExp(t + '=([^&]*)'))
        return n ? n[1] : null
    },
    re = (function () {
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
                        var s = 'on' + n,
                            a = t[s]
                        t[s] = (function (t, n, r) {
                            return function (i) {
                                if ((i = i || e(window.event))) {
                                    var o,
                                        s = !0
                                    N(r) && (o = r(i))
                                    var a = n.call(t, i)
                                    return (!1 !== o && !1 !== a) || (s = !1), s
                                }
                            }
                        })(t, r, a)
                    }
                else T.error('No valid element provided to register_event')
            }
        )
    })()
function ie(e, t) {
    var n = function () {
        var n = E.createElement('script')
        ;(n.type = 'text/javascript'),
            (n.src = e),
            (n.onload = function (e) {
                return t(void 0, e)
            }),
            (n.onerror = function (e) {
                return t(e)
            })
        var r,
            i = E.querySelectorAll('body > script')
        i.length > 0 ? null === (r = i[0].parentNode) || void 0 === r || r.insertBefore(n, i[0]) : E.body.appendChild(n)
    }
    E.body ? n() : E.addEventListener('DOMContentLoaded', n)
}
var oe = {
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
            A(t, function (e) {
                var t = te(E.URL, e)
                t.length && (n[e] = t)
            }),
            n
        )
    },
    searchEngine: function () {
        var e = E.referrer
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
        var e = oe.searchEngine(),
            t = 'yahoo' != e ? 'q' : 'p',
            n = {}
        if (null !== e) {
            n.$search_engine = e
            var r = te(E.referrer, t)
            r.length && (n.ph_keyword = r)
        }
        return n
    },
    browser: function (e, t, n) {
        return (
            (t = t || ''),
            n || H(e, ' OPR/')
                ? H(e, 'Mini')
                    ? 'Opera Mini'
                    : 'Opera'
                : /(BlackBerry|PlayBook|BB10)/i.test(e)
                ? 'BlackBerry'
                : H(e, 'IEMobile') || H(e, 'WPDesktop')
                ? 'Internet Explorer Mobile'
                : H(e, 'SamsungBrowser/')
                ? 'Samsung Internet'
                : H(e, 'Edge') || H(e, 'Edg/')
                ? 'Microsoft Edge'
                : H(e, 'FBIOS')
                ? 'Facebook Mobile'
                : H(e, 'Chrome')
                ? 'Chrome'
                : H(e, 'CriOS')
                ? 'Chrome iOS'
                : H(e, 'UCWEB') || H(e, 'UCBrowser')
                ? 'UC Browser'
                : H(e, 'FxiOS')
                ? 'Firefox iOS'
                : H(t, 'Apple')
                ? H(e, 'Mobile')
                    ? 'Mobile Safari'
                    : 'Safari'
                : H(e, 'Android')
                ? 'Android Mobile'
                : H(e, 'Konqueror')
                ? 'Konqueror'
                : H(e, 'Firefox')
                ? 'Firefox'
                : H(e, 'MSIE') || H(e, 'Trident/')
                ? 'Internet Explorer'
                : H(e, 'Gecko')
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
        }[oe.browser(e, t, n)]
        if (void 0 === r) return null
        var i = e.match(r)
        return i ? parseFloat(i[i.length - 2]) : null
    },
    browserLanguage: function () {
        return x.language || x.userLanguage
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
        return E.referrer || '$direct'
    },
    referringDomain: function () {
        if (!E.referrer) return '$direct'
        var e = E.createElement('a')
        return (e.href = E.referrer), e.host
    },
    properties: function () {
        var e = oe.os(P),
            t = e.os_name,
            n = e.os_version
        return D(
            Y({
                $os: t,
                $os_version: n,
                $browser: oe.browser(P, x.vendor, S.opera),
                $device: oe.device(P),
                $device_type: oe.deviceType(P),
            }),
            {
                $current_url: null == S ? void 0 : S.location.href,
                $host: null == S ? void 0 : S.location.host,
                $pathname: null == S ? void 0 : S.location.pathname,
                $browser_version: oe.browserVersion(P, x.vendor, S.opera),
                $browser_language: oe.browserLanguage(),
                $screen_height: null == S ? void 0 : S.screen.height,
                $screen_width: null == S ? void 0 : S.screen.width,
                $viewport_height: null == S ? void 0 : S.innerHeight,
                $viewport_width: null == S ? void 0 : S.innerWidth,
                $lib: 'web',
                $lib_version: m.LIB_VERSION,
                $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                $time: z() / 1e3,
            }
        )
    },
    people_properties: function () {
        var e = oe.os(P),
            t = e.os_name,
            n = e.os_version
        return D(Y({ $os: t, $os_version: n, $browser: oe.browser(P, x.vendor, S.opera) }), {
            $browser_version: oe.browserVersion(P, x.vendor, S.opera),
        })
    },
}
function se(e) {
    switch (n(e.className)) {
        case 'string':
            return e.className
        case 'object':
            return ('baseVal' in e.className ? e.className.baseVal : null) || e.getAttribute('class') || ''
        default:
            return ''
    }
}
function ae(e) {
    var t = ''
    return (
        pe(e) &&
            !he(e) &&
            e.childNodes &&
            e.childNodes.length &&
            A(e.childNodes, function (e) {
                le(e) &&
                    e.textContent &&
                    (t += C(e.textContent)
                        .split(/(\s+)/)
                        .filter(ge)
                        .join('')
                        .replace(/[\r\n]/g, ' ')
                        .replace(/[ ]+/g, ' ')
                        .substring(0, 255))
            }),
        C(t)
    )
}
function ue(e) {
    return !!e && 1 === e.nodeType
}
function ce(e, t) {
    return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase()
}
function le(e) {
    return !!e && 3 === e.nodeType
}
function de(e) {
    return !!e && 11 === e.nodeType
}
var fe = ['a', 'button', 'form', 'input', 'select', 'textarea', 'label']
function pe(e) {
    for (var t = e; t.parentNode && !ce(t, 'body'); t = t.parentNode) {
        var n = se(t).split(' ')
        if (H(n, 'ph-sensitive') || H(n, 'ph-no-capture')) return !1
    }
    if (H(se(e).split(' '), 'ph-include')) return !0
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
function he(e) {
    return !!(
        (ce(e, 'input') && !['button', 'checkbox', 'submit', 'reset'].includes(e.type)) ||
        ce(e, 'select') ||
        ce(e, 'textarea') ||
        'true' === e.getAttribute('contenteditable')
    )
}
function ge(e) {
    if (null === e || q(e)) return !1
    if ('string' == typeof e) {
        e = C(e)
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
function _e(e) {
    var t = ae(e)
    return ge((t = ''.concat(t, ' ').concat(ve(e)).trim())) ? t : ''
}
function ve(e) {
    var t = ''
    return (
        e &&
            e.childNodes &&
            e.childNodes.length &&
            A(e.childNodes, function (e) {
                var n
                if (e && 'span' === (null === (n = e.tagName) || void 0 === n ? void 0 : n.toLowerCase()))
                    try {
                        var r = ae(e)
                        ;(t = ''.concat(t, ' ').concat(r).trim()),
                            e.childNodes && e.childNodes.length && (t = ''.concat(t, ' ').concat(ve(e)).trim())
                    } catch (e) {
                        console.error(e)
                    }
            }),
        t
    )
}
var me = (function () {
        function e(t) {
            r(this, e), (this.clicks = []), (this.enabled = t)
        }
        return (
            o(e, [
                {
                    key: 'isRageClick',
                    value: function (e, t, n) {
                        if (!this.enabled) return !1
                        var r = this.clicks[this.clicks.length - 1]
                        if (r && Math.abs(e - r.x) + Math.abs(t - r.y) < 30 && n - r.timestamp < 1e3) {
                            if ((this.clicks.push({ x: e, y: t, timestamp: n }), 3 === this.clicks.length)) return !0
                        } else this.clicks = [{ x: e, y: t, timestamp: n }]
                        return !1
                    },
                },
            ]),
            e
        )
    })(),
    ye = '$people_distinct_id',
    be = '__alias',
    we = '__timers',
    ke = '$autocapture_disabled_server_side',
    Se = '$session_recording_enabled_server_side',
    xe = '$console_log_recording_enabled_server_side',
    Ee = '$session_recording_recorder_version_server_side',
    Pe = '$sesid',
    Fe = '$enabled_feature_flags',
    Oe = '$early_access_features',
    Ie = '$stored_person_properties',
    $e = '$stored_group_properties',
    Re = '$surveys',
    Te = '$flag_call_reported',
    Ce = '$user_state',
    Me = '$posthog_quota_limited',
    Ae = [ye, be, '__cmpns', we, Se, Pe, Fe, Ce, Me, Oe, $e, Ie, Re, Te]
function De(e, t) {
    return t.length > e ? t.slice(0, e) + '...' : t
}
var je = {
    _initializedTokens: [],
    _isDisabledServerSide: null,
    _isAutocaptureEnabled: !1,
    _setIsAutocaptureEnabled: function (e) {
        var t,
            n =
                null === this._isDisabledServerSide
                    ? !(null === (t = e.persistence) || void 0 === t || !t.props[ke])
                    : this._isDisabledServerSide,
            r = !!e.config.autocapture
        this._isAutocaptureEnabled = r && !n
    },
    _previousElementSibling: function (e) {
        if (e.previousElementSibling) return e.previousElementSibling
        var t = e
        do {
            t = t.previousSibling
        } while (t && !ue(t))
        return t
    },
    _getAugmentPropertiesFromElement: function (e) {
        if (!pe(e)) return {}
        var t = {}
        return (
            A(e.attributes, function (e) {
                if (0 === e.name.indexOf('data-ph-capture-attribute')) {
                    var n = e.name.replace('data-ph-capture-attribute-', ''),
                        r = e.value
                    n && r && ge(r) && (t[n] = r)
                }
            }),
            t
        )
    },
    _getPropertiesFromElement: function (e, t, n) {
        var r,
            i = e.tagName.toLowerCase(),
            o = { tag_name: i }
        fe.indexOf(i) > -1 &&
            !n &&
            ('a' === i.toLowerCase() || 'button' === i.toLowerCase()
                ? (o.$el_text = De(1024, _e(e)))
                : (o.$el_text = De(1024, ae(e))))
        var s = se(e)
        s.length > 0 &&
            (o.classes = s.split(' ').filter(function (e) {
                return '' !== e
            }))
        var a = null === (r = this.config) || void 0 === r ? void 0 : r.element_attribute_ignorelist
        A(e.attributes, function (n) {
            var r
            ;(he(e) && -1 === ['name', 'id', 'class'].indexOf(n.name)) ||
                (null != a && a.includes(n.name)) ||
                (!t &&
                    ge(n.value) &&
                    ('string' != typeof (r = n.name) ||
                        ('_ngcontent' !== r.substring(0, 10) && '_nghost' !== r.substring(0, 7))) &&
                    (o['attr__' + n.name] = De(1024, n.value)))
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
            A(document.querySelectorAll(e.css_selector), function (e) {
                var n
                ;['input', 'select'].indexOf(e.tagName.toLowerCase()) > -1
                    ? (n = e.value)
                    : e.textContent && (n = e.textContent),
                    ge(n) && t.push(n)
            }),
            t.join(', ')
        )
    },
    _getCustomProperties: function (e) {
        var t = this,
            n = {}
        return (
            A(this._customProperties, function (r) {
                A(r.event_selectors, function (i) {
                    A(document.querySelectorAll(i), function (i) {
                        H(e, i) && pe(i) && (n[r.name] = t._extractCustomPropertyValue(r))
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
        ;(le(o) && (o = o.parentNode || null), '$autocapture' === i && 'click' === e.type && e instanceof MouseEvent) &&
            null !== (n = this.rageclicks) &&
            void 0 !== n &&
            n.isRageClick(e.clientX, e.clientY, new Date().getTime()) &&
            this._captureEvent(e, t, '$rageclick')
        if (
            o &&
            (function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0
                if (!e || ce(e, 'html') || !ue(e)) return !1
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
                    var s = n.element_allowlist
                    if (
                        s &&
                        !s.some(function (t) {
                            return e.tagName.toLowerCase() === t
                        })
                    )
                        return !1
                }
                if (null != n && n.css_selector_allowlist) {
                    var a = n.css_selector_allowlist
                    if (
                        a &&
                        !a.some(function (t) {
                            return e.matches(t)
                        })
                    )
                        return !1
                }
                for (var u = !1, c = [e], l = !0, d = e; d.parentNode && !ce(d, 'body'); )
                    if (de(d.parentNode)) c.push(d.parentNode.host), (d = d.parentNode.host)
                    else {
                        if (!(l = d.parentNode || !1)) break
                        if (fe.indexOf(l.tagName.toLowerCase()) > -1) u = !0
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
                            : 'click' === t.type && (fe.indexOf(h) > -1 || 'true' === e.getAttribute('contenteditable'))
                }
            })(o, e, this.config)
        ) {
            for (var s, a, u = [o], c = o; c.parentNode && !ce(c, 'body'); )
                de(c.parentNode)
                    ? (u.push(c.parentNode.host), (c = c.parentNode.host))
                    : (u.push(c.parentNode), (c = c.parentNode))
            var l,
                d = [],
                f = {},
                p = !1
            if (
                (A(u, function (e) {
                    var n = pe(e)
                    'a' === e.tagName.toLowerCase() && ((l = e.getAttribute('href')), (l = n && ge(l) && l)),
                        H(se(e).split(' '), 'ph-no-capture') && (p = !0),
                        d.push(
                            r._getPropertiesFromElement(e, t.config.mask_all_element_attributes, t.config.mask_all_text)
                        )
                    var i = r._getAugmentPropertiesFromElement(e)
                    D(f, i)
                }),
                t.config.mask_all_text ||
                    ('a' === o.tagName.toLowerCase() || 'button' === o.tagName.toLowerCase()
                        ? (d[0].$el_text = _e(o))
                        : (d[0].$el_text = ae(o))),
                l && (d[0].attr__href = l),
                p)
            )
                return !1
            var h = D(
                this._getDefaultProperties(e.type),
                { $elements: d },
                null !== (s = d[0]) && void 0 !== s && s.$el_text
                    ? { $el_text: null === (a = d[0]) || void 0 === a ? void 0 : a.$el_text }
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
        re(document, 'submit', n, !1, !0), re(document, 'change', n, !1, !0), re(document, 'click', n, !1, !0)
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
            (this.rageclicks = new me(e.config.rageclick))
    },
    afterDecideResponse: function (e, t) {
        var n = t.config.token
        this._initializedTokens.indexOf(n) > -1
            ? T.log('autocapture already initialized for token "' + n + '"')
            : (t.persistence && t.persistence.register(s({}, ke, !!e.autocapture_opt_out)),
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
        ;(t = q(t) ? 10 : t), (n = q(n) ? 10 : n)
        for (var r = 0, i = 0; i < e.length; i++) r += e.charCodeAt(i)
        return r % t < n
    },
    isBrowserSupported: function () {
        return N(document.querySelectorAll)
    },
}
!(function (e) {
    for (var t in e) 'function' == typeof e[t] && (e[t] = e[t].bind(e))
})(je),
    (function (e) {
        for (var t in e) 'function' == typeof e[t] && (e[t] = W(e[t]))
    })(je)
var Ne = '$active_feature_flags',
    He = '$override_feature_flags',
    Le = '$feature_flag_payloads',
    Be = function (e) {
        var t,
            n = {},
            r = v(
                (function (e) {
                    for (var t = Object.keys(e), n = t.length, r = new Array(n); n--; ) r[n] = [t[n], e[t[n]]]
                    return r
                })(e || {})
            )
        try {
            for (r.s(); !(t = r.n()).done; ) {
                var i = p(t.value, 2),
                    o = i[0],
                    s = i[1]
                s && (n[o] = s)
            }
        } catch (e) {
            r.e(e)
        } finally {
            r.f()
        }
        return n
    },
    qe = (function () {
        function e(t) {
            r(this, e),
                (this.instance = t),
                (this._override_warning = !1),
                (this.featureFlagEventHandlers = []),
                (this.reloadFeatureFlagsQueued = !1),
                (this.reloadFeatureFlagsInAction = !1)
        }
        return (
            o(e, [
                {
                    key: 'getFlags',
                    value: function () {
                        return Object.keys(this.getFlagVariants())
                    },
                },
                {
                    key: 'getFlagVariants',
                    value: function () {
                        var e = this.instance.get_property(Fe),
                            t = this.instance.get_property(He)
                        if (!t) return e || {}
                        for (var n = D({}, e), r = Object.keys(t), i = 0; i < r.length; i++)
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
                        return this.instance.get_property(Le) || {}
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
                            n = this.instance.get_property(Ie),
                            r = this.instance.get_property($e),
                            i = X(
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
                                o = this.instance.get_property(Te) || {}
                            if (t.send_event || !('send_event' in t))
                                if (!(e in o) || !o[e].includes(i))
                                    Array.isArray(o[e]) ? o[e].push(i) : (o[e] = [i]),
                                        null === (n = this.instance.persistence) ||
                                            void 0 === n ||
                                            n.register(s({}, Te, o)),
                                        this.instance.capture('$feature_flag_called', {
                                            $feature_flag: e,
                                            $feature_flag_response: r,
                                        })
                            return r
                        }
                        console.warn('getFeatureFlag for key "' + e + '" failed. Feature flags didn\'t load in time.')
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
                        console.warn('isFeatureEnabled for key "' + e + '" failed. Feature flags didn\'t load in time.')
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
                            var n = this.getFlagVariants(),
                                r = this.getFlagPayloads()
                            !(function (e, n) {
                                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                    o = e.featureFlags,
                                    a = e.featureFlagPayloads
                                if (o)
                                    if (Array.isArray(o)) {
                                        var u,
                                            c = {}
                                        if (o) for (var l = 0; l < o.length; l++) c[o[l]] = !0
                                        n && n.register((s((u = {}), Ne, o), s(u, Fe, c), u))
                                    } else {
                                        var d,
                                            f = o,
                                            p = a
                                        e.errorsWhileComputingFlags && ((f = t(t({}, r), f)), (p = t(t({}, i), p))),
                                            n &&
                                                n.register(
                                                    (s((d = {}), Ne, Object.keys(Be(f))),
                                                    s(d, Fe, f || {}),
                                                    s(d, Le, p || {}),
                                                    d)
                                                )
                                    }
                            })(e, this.instance.persistence, n, r),
                                this._fireFeatureFlagsCallbacks()
                        }
                    },
                },
                {
                    key: 'override',
                    value: function (e) {
                        if (!this.instance.__loaded || !this.instance.persistence)
                            return T.unintializedWarning('posthog.feature_flags.override')
                        if (((this._override_warning = !1), !1 === e)) this.instance.persistence.unregister(He)
                        else if (Array.isArray(e)) {
                            for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = !0
                            this.instance.persistence.register(s({}, He, t))
                        } else this.instance.persistence.register(s({}, He, e))
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
                    value: function (e, n) {
                        var r,
                            i,
                            o = s({}, '$feature_enrollment/'.concat(e), n)
                        this.instance.capture('$feature_enrollment_update', {
                            $feature_flag: e,
                            $feature_enrollment: n,
                            $set: o,
                        }),
                            this.setPersonPropertiesForFlags(o, !1)
                        var a = t(t({}, this.getFlagVariants()), {}, s({}, e, n))
                        null === (r = this.instance.persistence) ||
                            void 0 === r ||
                            r.register((s((i = {}), Ne, Object.keys(Be(a))), s(i, Fe, a), i)),
                            this._fireFeatureFlagsCallbacks()
                    },
                },
                {
                    key: 'getEarlyAccessFeatures',
                    value: function (e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = this.instance.get_property(Oe)
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
                                    null === (r = t.instance.persistence) || void 0 === r || r.register(s({}, Oe, i)),
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
                        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            r = this.instance.get_property(Ie) || {}
                        this.instance.register(s({}, Ie, t(t({}, r), e))), n && this.instance.reloadFeatureFlags()
                    },
                },
                {
                    key: 'resetPersonPropertiesForFlags',
                    value: function () {
                        this.instance.unregister(Ie)
                    },
                },
                {
                    key: 'setGroupPropertiesForFlags',
                    value: function (e) {
                        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            r = this.instance.get_property($e) || {}
                        0 !== Object.keys(r).length &&
                            Object.keys(r).forEach(function (n) {
                                ;(r[n] = t(t({}, r[n]), e[n])), delete e[n]
                            }),
                            this.instance.register(s({}, $e, t(t({}, r), e))),
                            n && this.instance.reloadFeatureFlags()
                    },
                },
                {
                    key: 'resetGroupPropertiesForFlags',
                    value: function (e) {
                        if (e) {
                            var n = this.instance.get_property($e) || {}
                            this.instance.register(s({}, $e, t(t({}, n), {}, s({}, e, {}))))
                        } else this.instance.unregister($e)
                    },
                },
            ]),
            e
        )
    })(),
    Ue = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
    Ve = {
        is_supported: function () {
            return !0
        },
        error: function (e) {
            T.error('cookieStore error: ' + e)
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
                t = JSON.parse(Ve.get(e)) || {}
            } catch (e) {}
            return t
        },
        set: function (e, t, n, r, i) {
            try {
                var o = '',
                    s = '',
                    a = ''
                if (r) {
                    var u = document.location.hostname.match(Ue),
                        c = u ? u[0] : ''
                    o = c ? '; domain=.' + c : ''
                }
                if (n) {
                    var l = new Date()
                    l.setTime(l.getTime() + 24 * n * 60 * 60 * 1e3), (s = '; expires=' + l.toUTCString())
                }
                i && (a = '; secure')
                var d = e + '=' + encodeURIComponent(JSON.stringify(t)) + s + '; SameSite=Lax; path=/' + o + a
                return (document.cookie = d), d
            } catch (e) {
                return
            }
        },
        remove: function (e, t) {
            try {
                Ve.set(e, '', -1, t)
            } catch (e) {
                return
            }
        },
    },
    Ge = null,
    ze = {
        is_supported: function () {
            if (null !== Ge) return Ge
            var e = !0
            if ('undefined' != typeof window)
                try {
                    var t = '__mplssupport__'
                    ze.set(t, 'xyz'), '"xyz"' !== ze.get(t) && (e = !1), ze.remove(t)
                } catch (t) {
                    e = !1
                }
            else e = !1
            return e || T.error('localStorage unsupported; falling back to cookie store'), (Ge = e), e
        },
        error: function (e) {
            T.error('localStorage error: ' + e)
        },
        get: function (e) {
            try {
                return window.localStorage.getItem(e)
            } catch (e) {
                ze.error(e)
            }
            return null
        },
        parse: function (e) {
            try {
                return JSON.parse(ze.get(e)) || {}
            } catch (e) {}
            return null
        },
        set: function (e, t) {
            try {
                window.localStorage.setItem(e, JSON.stringify(t))
            } catch (e) {
                ze.error(e)
            }
        },
        remove: function (e) {
            try {
                window.localStorage.removeItem(e)
            } catch (e) {
                ze.error(e)
            }
        },
    },
    We = ['distinct_id', Pe],
    Ye = t(
        t({}, ze),
        {},
        {
            parse: function (e) {
                try {
                    var t = {}
                    try {
                        t = Ve.parse(e) || {}
                    } catch (e) {}
                    var n = D(t, JSON.parse(ze.get(e) || '{}'))
                    return ze.set(e, n), n
                } catch (e) {}
                return null
            },
            set: function (e, t, n, r, i) {
                try {
                    ze.set(e, t)
                    var o = {}
                    We.forEach(function (e) {
                        t[e] && (o[e] = t[e])
                    }),
                        Object.keys(o).length && Ve.set(e, o, n, r, i)
                } catch (e) {
                    ze.error(e)
                }
            },
            remove: function (e, t) {
                try {
                    window.localStorage.removeItem(e), Ve.remove(e, t)
                } catch (e) {
                    ze.error(e)
                }
            },
        }
    ),
    Qe = {},
    Je = {
        is_supported: function () {
            return !0
        },
        error: function (e) {
            T.error('memoryStorage error: ' + e)
        },
        get: function (e) {
            return Qe[e] || null
        },
        parse: function (e) {
            return Qe[e] || null
        },
        set: function (e, t) {
            Qe[e] = t
        },
        remove: function (e) {
            delete Qe[e]
        },
    },
    Xe = null,
    Ke = {
        is_supported: function () {
            if (null !== Xe) return Xe
            if (((Xe = !0), 'undefined' != typeof window))
                try {
                    var e = '__support__'
                    Ke.set(e, 'xyz'), '"xyz"' !== Ke.get(e) && (Xe = !1), Ke.remove(e)
                } catch (e) {
                    Xe = !1
                }
            else Xe = !1
            return Xe
        },
        error: function (e) {
            m.DEBUG && T.error('sessionStorage error: ', e)
        },
        get: function (e) {
            try {
                return window.sessionStorage.getItem(e)
            } catch (e) {
                Ke.error(e)
            }
            return null
        },
        parse: function (e) {
            try {
                return JSON.parse(Ke.get(e)) || null
            } catch (e) {}
            return null
        },
        set: function (e, t) {
            try {
                window.sessionStorage.setItem(e, JSON.stringify(t))
            } catch (e) {
                Ke.error(e)
            }
        },
        remove: function (e) {
            try {
                window.sessionStorage.removeItem(e)
            } catch (e) {
                Ke.error(e)
            }
        },
    },
    Ze = ['cookie', 'localstorage', 'localstorage+cookie', 'sessionstorage', 'memory'],
    et = (function () {
        function e(t) {
            r(this, e)
            var n = ''
            t.token && (n = t.token.replace(/\+/g, 'PL').replace(/\//g, 'SL').replace(/=/g, 'EQ')),
                (this.props = {}),
                (this.campaign_params_saved = !1),
                (this.custom_campaign_params = t.custom_campaign_params || []),
                t.persistence_name ? (this.name = 'ph_' + t.persistence_name) : (this.name = 'ph_' + n + '_posthog'),
                -1 === Ze.indexOf(t.persistence.toLowerCase()) &&
                    (T.critical('Unknown persistence type ' + t.persistence + '; falling back to cookie'),
                    (t.persistence = 'cookie'))
            var i = t.persistence.toLowerCase()
            'localstorage' === i && ze.is_supported()
                ? (this.storage = ze)
                : 'localstorage+cookie' === i && Ye.is_supported()
                ? (this.storage = Ye)
                : 'sessionstorage' === i && Ke.is_supported()
                ? (this.storage = Ke)
                : (this.storage = 'memory' === i ? Je : Ve),
                (this.user_state = 'anonymous'),
                this.load(),
                this.update_config(t),
                this.save()
        }
        return (
            o(e, [
                {
                    key: 'properties',
                    value: function () {
                        var e = {}
                        return (
                            A(this.props, function (t, r) {
                                if (r === Fe && 'object' === n(t))
                                    for (var i = Object.keys(t), o = 0; o < i.length; o++)
                                        e['$feature/'.concat(i[o])] = t[i[o]]
                                else
                                    (a = r),
                                        (u = !1),
                                        (null === (s = Ae)
                                            ? u
                                            : I && s.indexOf === I
                                            ? -1 != s.indexOf(a)
                                            : (A(s, function (e) {
                                                  if (u || (u = e === a)) return R
                                              }),
                                              u)) || (e[r] = t)
                                var s, a, u
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
                            e && (this.props = D({}, e))
                        }
                    },
                },
                {
                    key: 'save',
                    value: function () {
                        this.disabled ||
                            this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure)
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
                        if (L(e)) {
                            void 0 === t && (t = 'None'), (this.expire_days = void 0 === n ? this.default_expiry : n)
                            var i = !1
                            if (
                                (A(e, function (e, n) {
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
                        if (L(e)) {
                            this.expire_days = void 0 === t ? this.default_expiry : t
                            var r = !1
                            if (
                                (A(e, function (t, i) {
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
                            (this.register(oe.campaignParams(this.custom_campaign_params)),
                            (this.campaign_params_saved = !0))
                    },
                },
                {
                    key: 'update_search_keyword',
                    value: function () {
                        this.register(oe.searchInfo())
                    },
                },
                {
                    key: 'update_referrer_info',
                    value: function () {
                        this.register({
                            $referrer: this.props.$referrer || oe.referrer(),
                            $referring_domain: this.props.$referring_domain || oe.referringDomain(),
                        })
                    },
                },
                {
                    key: 'get_referrer_info',
                    value: function () {
                        return Y({ $referrer: this.props.$referrer, $referring_domain: this.props.$referring_domain })
                    },
                },
                {
                    key: 'safe_merge',
                    value: function (e) {
                        return (
                            A(this.props, function (t, n) {
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
                        var n = this.props[we] || {}
                        ;(n[e] = t), (this.props[we] = n), this.save()
                    },
                },
                {
                    key: 'remove_event_timer',
                    value: function (e) {
                        var t = (this.props[we] || {})[e]
                        return q(t) || (delete this.props[we][e], this.save()), t
                    },
                },
                {
                    key: 'get_user_state',
                    value: function () {
                        return this.props[Ce] || 'anonymous'
                    },
                },
                {
                    key: 'set_user_state',
                    value: function (e) {
                        ;(this.props[Ce] = e), this.save()
                    },
                },
                {
                    key: 'get_quota_limits',
                    value: function () {
                        return this.props[Me] || {}
                    },
                },
                {
                    key: 'set_quota_limits',
                    value: function (e) {
                        ;(this.props[Me] = e), this.save()
                    },
                },
            ]),
            e
        )
    })(),
    tt =
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOCAwSDE2TDAgMTZWOEw4IDBaIiBmaWxsPSIjMkQyRDJEIi8+CjxwYXRoIGQ9Ik0xNiA4VjE2SDhMMTYgOFoiIGZpbGw9IiMyRDJEMkQiLz4KPC9zdmc+Cg==',
    nt = 2,
    rt = 4,
    it = 3,
    ot = 6,
    st = 0,
    at = 5e6
var ut = 'rrweb/console@1'
var ct,
    lt = o(function e(t) {
        var n,
            i,
            o = this,
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        r(this, e),
            s(this, 'bucketSize', 100),
            s(this, 'refillRate', 10),
            s(this, 'mutationBuckets', {}),
            s(this, 'loggedTracker', {}),
            s(this, 'refillBuckets', function () {
                Object.keys(o.mutationBuckets).forEach(function (e) {
                    ;(o.mutationBuckets[e] = o.mutationBuckets[e] + o.refillRate),
                        o.mutationBuckets[e] >= o.bucketSize && delete o.mutationBuckets[e]
                })
            }),
            s(this, 'getNodeOrRelevantParent', function (e) {
                var t = o.rrweb.mirror.getNode(e)
                if ('svg' !== (null == t ? void 0 : t.nodeName) && t instanceof Element) {
                    var n = t.closest('svg')
                    if (n) return [o.rrweb.mirror.getId(n), n]
                }
                return [e, t]
            }),
            s(this, 'numberOfChanges', function (e) {
                var t, n, r, i, o, s, a, u
                return (
                    (null !== (t = null === (n = e.removes) || void 0 === n ? void 0 : n.length) && void 0 !== t
                        ? t
                        : 0) +
                    (null !== (r = null === (i = e.attributes) || void 0 === i ? void 0 : i.length) && void 0 !== r
                        ? r
                        : 0) +
                    (null !== (o = null === (s = e.texts) || void 0 === s ? void 0 : s.length) && void 0 !== o
                        ? o
                        : 0) +
                    (null !== (a = null === (u = e.adds) || void 0 === u ? void 0 : u.length) && void 0 !== a ? a : 0)
                )
            }),
            s(this, 'throttleMutations', function (e) {
                if (e.type !== it || e.data.source !== st) return e
                var t = e.data,
                    n = o.numberOfChanges(t)
                t.attributes &&
                    (t.attributes = t.attributes.filter(function (e) {
                        var t,
                            n,
                            r,
                            i = p(o.getNodeOrRelevantParent(e.id), 2),
                            s = i[0],
                            a = i[1]
                        if (0 === o.mutationBuckets[s]) return !1
                        ;((o.mutationBuckets[s] =
                            null !== (t = o.mutationBuckets[s]) && void 0 !== t ? t : o.bucketSize),
                        (o.mutationBuckets[s] = Math.max(o.mutationBuckets[s] - 1, 0)),
                        0 === o.mutationBuckets[s]) &&
                            (o.loggedTracker[s] ||
                                ((o.loggedTracker[s] = !0),
                                null === (n = (r = o.options).onBlockedNode) || void 0 === n || n.call(r, s, a)))
                        return e
                    }))
                var r = o.numberOfChanges(t)
                return 0 !== r || n === r ? e : void 0
            }),
            (this.rrweb = t),
            (this.options = a),
            (this.refillRate = null !== (n = this.options.refillRate) && void 0 !== n ? n : this.refillRate),
            (this.bucketSize = null !== (i = this.options.bucketSize) && void 0 !== i ? i : this.bucketSize),
            setInterval(function () {
                o.refillBuckets()
            }, 1e3)
    }),
    dt = (function (e) {
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
    })(dt || {}),
    ft = '/s/'
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
})(ct || (ct = {}))
var pt = [
        ct.MouseMove,
        ct.MouseInteraction,
        ct.Scroll,
        ct.ViewportResize,
        ct.Input,
        ct.TouchMove,
        ct.MediaInteraction,
        ct.Drag,
    ],
    ht = (function () {
        function e(t) {
            var n = this
            r(this, e),
                s(this, 'lastActivityTimestamp', Date.now()),
                s(this, 'isIdle', !1),
                (this.instance = t),
                (this.captureStarted = !1),
                (this.snapshots = []),
                (this.savedSnapshots = []),
                (this.emit = !1),
                (this.endpoint = ft),
                (this.stopRrweb = void 0),
                (this.windowId = null),
                (this.sessionId = null),
                (this.receivedDecide = !1),
                window.addEventListener('beforeunload', function () {
                    n._flushBuffer()
                })
        }
        return (
            o(e, [
                {
                    key: 'getSessionManager',
                    value: function () {
                        if (this.instance.sessionManager) return this.instance.sessionManager
                        T.error('Session recording started without valid sessionManager')
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
                        var e = !!this.instance.get_property(Se),
                            t = !this.instance.config.disable_session_recording
                        return e && t
                    },
                },
                {
                    key: 'isConsoleLogCaptureEnabled',
                    value: function () {
                        var e = !!this.instance.get_property(xe),
                            t = this.instance.config.enable_recording_console_log
                        return null != t ? t : e
                    },
                },
                {
                    key: 'getRecordingVersion',
                    value: function () {
                        var e,
                            t = this.instance.get_property(Ee)
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
                                (s((o = {}), Se, !!e.sessionRecording),
                                s(
                                    o,
                                    xe,
                                    null === (r = e.sessionRecording) || void 0 === r
                                        ? void 0
                                        : r.consoleLogRecordingEnabled
                                ),
                                s(
                                    o,
                                    Ee,
                                    null === (i = e.sessionRecording) || void 0 === i ? void 0 : i.recorderVersion
                                ),
                                o)
                            )
                        null !== (t = e.sessionRecording) &&
                            void 0 !== t &&
                            t.endpoint &&
                            (this.endpoint = null === (a = e.sessionRecording) || void 0 === a ? void 0 : a.endpoint)
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
                                timestamp: z(),
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
                                ? ie(
                                      this.instance.config.api_host + '/static/'.concat(n, '?v=').concat(m.LIB_VERSION),
                                      function (t) {
                                          if (t) return T.error('Could not load '.concat(n), t)
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
                            e.type === it &&
                            -1 !== pt.indexOf(null === (t = e.data) || void 0 === t ? void 0 : t.source)
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
                                ;-1 !== [nt, rt].indexOf(e.type) ||
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
                            return T.error('Error taking full snapshot.', e), !1
                        }
                    },
                },
                {
                    key: '_onScriptLoaded',
                    value: function () {
                        var e,
                            n = this,
                            r = {
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
                            var i = this.instance.config.session_recording, o = 0, s = Object.entries(i || {});
                            o < s.length;
                            o++
                        ) {
                            var a = p(s[o], 2),
                                u = a[0],
                                c = a[1]
                            u in r && (r[u] = c)
                        }
                        this.rrwebRecord
                            ? ((this.mutationRateLimiter =
                                  null !== (e = this.mutationRateLimiter) && void 0 !== e
                                      ? e
                                      : new lt(this.rrwebRecord, {
                                            onBlockedNode: function (e, t) {
                                                var r = "Too many mutations on node '".concat(
                                                    e,
                                                    "'. Rate limiting. This could be due to SVG animations or something similar"
                                                )
                                                T.log(r, { node: t }), n.log('[PostHog Recorder] ' + r, 'warn')
                                            },
                                        })),
                              (this.stopRrweb = this.rrwebRecord(
                                  t(
                                      {
                                          emit: function (e) {
                                              n.onRRwebEmit(e)
                                          },
                                          plugins:
                                              window.rrwebConsoleRecord && this.isConsoleLogCaptureEnabled()
                                                  ? [window.rrwebConsoleRecord.getRecordConsolePlugin()]
                                                  : [],
                                      },
                                      r
                                  )
                              )),
                              this.instance._addCaptureHook(function (e) {
                                  try {
                                      if ('$pageview' === e) {
                                          var t,
                                              r = n._maskUrl(window.location.href)
                                          if (!r) return
                                          null === (t = n.rrwebRecord) ||
                                              void 0 === t ||
                                              t.addCustomEvent('$pageview', { href: r })
                                      }
                                  } catch (e) {
                                      T.error('Could not add $pageview to rrweb session', e)
                                  }
                              }),
                              (this.lastActivityTimestamp = Date.now()),
                              (this.isIdle = !1))
                            : T.error(
                                  'onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.'
                              )
                    },
                },
                {
                    key: 'onRRwebEmit',
                    value: function (e) {
                        if (e && 'object' === n(e)) {
                            if (e.type === dt.Meta) {
                                var t = this._maskUrl(e.data.href)
                                if (!t) return
                                e.data.href = t
                            }
                            var r = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e) : e
                            if (r) {
                                var i = (function (e) {
                                        var t = JSON.stringify(e)
                                        if (t.length > at) {
                                            var n,
                                                r = v(t.matchAll(/data:([\w/\-.]+);(\w+),([^)"]*)/gim))
                                            try {
                                                for (r.s(); !(n = r.n()).done; ) {
                                                    var i = n.value
                                                    t =
                                                        'image/' === i[1].toLocaleLowerCase().slice(0, 6)
                                                            ? t.replace(i[0], tt)
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
                                                'object' === n(t) &&
                                                t.type === ot &&
                                                'object' === n(t.data) &&
                                                t.data.plugin === ut
                                            ) {
                                                t.data.payload.payload.length > 10 &&
                                                    ((t.data.payload.payload = t.data.payload.payload.slice(0, 10)),
                                                    t.data.payload.payload.push('...[truncated]'))
                                                for (var r = [], i = 0; i < t.data.payload.payload.length; i++)
                                                    t.data.payload.payload[i] && t.data.payload.payload[i].length > 2e3
                                                        ? r.push(
                                                              t.data.payload.payload[i].slice(0, 2e3) + '...[truncated]'
                                                          )
                                                        : r.push(t.data.payload.payload[i])
                                                return (t.data.payload.payload = r), e
                                            }
                                            return e
                                        })(r)
                                    ),
                                    o = i.event,
                                    s = i.size
                                if ((this._updateWindowAndSessionIds(o), !this.isIdle)) {
                                    var a = {
                                        $snapshot_bytes: s,
                                        $snapshot_data: o,
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
                            _metrics: { rrweb_full_snapshot: e.$snapshot_data.type === nt },
                        })
                    },
                },
            ]),
            e
        )
    })(),
    gt = {
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
    _t = ['first-input', 'navigation', 'paint', 'resource'],
    vt = ['/s/', '/e/'],
    mt = (function () {
        function e(t) {
            r(this, e), s(this, '_forceAllowLocalhost', !1), (this.instance = t)
        }
        return (
            o(e, [
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
                                if (!F.includes(location.hostname) || this._forceAllowLocalhost)
                                    try {
                                        this.observer = new PerformanceObserver(function (e) {
                                            e.getEntries().forEach(function (e) {
                                                n._capturePerformanceEvent(e)
                                            })
                                        })
                                        var r = PerformanceObserver.supportedEntryTypes.filter(function (e) {
                                            return _t.includes(e)
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
                                else T.log('PostHog Peformance observer not started because we are on localhost.')
                            else
                                T.log(
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
                        ;(this.remoteEnabled = e.capturePerformance || !1), this.isEnabled() && this.startObserving()
                    },
                },
                {
                    key: '_capturePerformanceEvent',
                    value: function (e) {
                        if (0 === e.name.indexOf(this.instance.config.api_host)) {
                            var t = e.name.replace(this.instance.config.api_host, '')
                            if (
                                vt.find(function (e) {
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
                            for (var u in ((o[gt.timeOrigin] = a), (o[gt.timestamp] = Math.floor(a + e.startTime)), gt))
                                void 0 !== i[u] && (o[gt[u]] = i[u])
                            if ((this.capturePerformanceEvent(o), yt(e))) {
                                var c,
                                    l = v(e.serverTiming || [])
                                try {
                                    for (l.s(); !(c = l.n()).done; ) {
                                        var d,
                                            f = c.value
                                        this.capturePerformanceEvent(
                                            (s((d = {}), gt.timeOrigin, a),
                                            s(d, gt.timestamp, Math.floor(a + e.startTime)),
                                            s(d, gt.name, f.name),
                                            s(d, gt.duration, f.duration),
                                            s(d, gt.entryType, 'serverTiming'),
                                            d)
                                        )
                                    }
                                } catch (e) {
                                    l.e(e)
                                } finally {
                                    l.f()
                                }
                            }
                        }
                    },
                },
                {
                    key: 'capturePerformanceEvent',
                    value: function (e) {
                        var t,
                            n = e[gt.timestamp]
                        null === (t = this.instance.sessionRecording) ||
                            void 0 === t ||
                            t.onRRwebEmit({ type: 6, data: { plugin: 'posthog/network@1', payload: e }, timestamp: n })
                    },
                },
            ]),
            e
        )
    })(),
    yt = function (e) {
        return 'navigation' === e.entryType || 'resource' === e.entryType
    },
    bt = (function () {
        function e(t) {
            r(this, e),
                (this.instance = t),
                (this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags())
        }
        return (
            o(e, [
                {
                    key: 'call',
                    value: function () {
                        var e = this,
                            t = X(
                                JSON.stringify({
                                    token: this.instance.config.token,
                                    distinct_id: this.instance.get_distinct_id(),
                                    groups: this.instance.getGroups(),
                                    person_properties: this.instance.get_property(Ie),
                                    group_properties: this.instance.get_property($e),
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
                                je.afterDecideResponse(e, this.instance),
                                null === (n = this.instance.webPerformance) || void 0 === n || n.afterDecideResponse(e),
                                null === (r = this.instance.exceptionAutocapture) ||
                                    void 0 === r ||
                                    r.afterDecideResponse(e),
                                this.instance.config.advanced_disable_feature_flags_on_first_load ||
                                    this.instance.featureFlags.receivedFeatureFlags(e),
                                (this.instance.compression = {}),
                                e.supportedCompression && !this.instance.config.disable_compression)
                            ) {
                                var s,
                                    a = {},
                                    u = v(e.supportedCompression)
                                try {
                                    for (u.s(); !(s = u.n()).done; ) {
                                        a[s.value] = !0
                                    }
                                } catch (e) {
                                    u.e(e)
                                } finally {
                                    u.f()
                                }
                                this.instance.compression = a
                            }
                            var c = null === (i = window) || void 0 === i ? void 0 : i.extendPostHogWithSurveys
                            if (
                                (e.surveys &&
                                    !c &&
                                    ie(this.instance.config.api_host + '/static/surveys.js', function (e) {
                                        if (e) return console.error('Could not load surveys script', e)
                                        window.extendPostHogWithSurveys(o.instance)
                                    }),
                                e.siteApps)
                            )
                                if (this.instance.config.opt_in_site_apps) {
                                    var l,
                                        d = this.instance.config.api_host,
                                        f = v(e.siteApps)
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
                                                ie(r, function (e) {
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
    wt = ['https://app.posthog.com', 'https://eu.posthog.com'],
    kt = ['source'],
    St = (function () {
        function e(t) {
            r(this, e), (this.instance = t)
        }
        return (
            o(e, [
                {
                    key: 'afterDecideResponse',
                    value: function (e) {
                        var n =
                            e.toolbarParams ||
                            e.editorParams ||
                            (e.toolbarVersion ? { toolbarVersion: e.toolbarVersion } : {})
                        e.isAuthenticated &&
                            n.toolbarVersion &&
                            0 === n.toolbarVersion.indexOf('toolbar') &&
                            this.loadToolbar(t({}, n))
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
                                    window.localStorage.setItem('test', 'test'), window.localStorage.removeItem('test')
                                } catch (e) {
                                    return !1
                                }
                                t = window.localStorage
                            }
                            var r,
                                i = ne(e.hash, '__posthog') || ne(e.hash, 'state'),
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
                        var n = this
                        if (window._postHogToolbarLoaded) return !1
                        window._postHogToolbarLoaded = !0
                        var r = this.instance.config.api_host,
                            i = 3e5,
                            o = Math.floor(Date.now() / i) * i,
                            s = ''
                                .concat(r)
                                .concat(r.endsWith('/') ? '' : '/', 'static/toolbar.js?t=')
                                .concat(o),
                            a =
                                !wt.includes(this.instance.config.api_host) &&
                                this.instance.config.advanced_disable_toolbar_metrics,
                            u = t(
                                t({ token: this.instance.config.token }, e),
                                {},
                                { apiURL: r },
                                a ? { instrument: !1 } : {}
                            )
                        u.source
                        var c = l(u, kt)
                        return (
                            window.localStorage.setItem('_postHogToolbarParams', JSON.stringify(c)),
                            ie(s, function (e) {
                                e
                                    ? T.error('Failed to load toolbar', e)
                                    : (window.ph_load_toolbar || window.ph_load_editor)(u, n.instance)
                            }),
                            re(window, 'turbolinks:load', function () {
                                ;(window._postHogToolbarLoaded = !1), n.loadToolbar(u)
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
    xt = '__ph_opt_in_out_'
function Et(e, t) {
    Ct(!0, e, t)
}
function Pt(e, t) {
    Ct(!1, e, t)
}
function Ft(e, t) {
    return '1' === Tt(e, t)
}
function Ot(e, t) {
    return (
        !!(function (e) {
            if (e && e.respectDnt) {
                var t = (e && e.window) || S,
                    n = t.navigator || {},
                    r = !1
                return (
                    A([n.doNotTrack, n.msDoNotTrack, t.doNotTrack], function (e) {
                        H([!0, 1, '1', 'yes'], e) && (r = !0)
                    }),
                    r
                )
            }
            return !1
        })(t) || '0' === Tt(e, t)
    )
}
function It(e, t) {
    $t((t = t || {})).remove(Rt(e, t), !!t.crossSubdomainCookie)
}
function $t(e) {
    return 'localStorage' === (e = e || {}).persistenceType ? ze : 'localStorage+cookie' === e.persistenceType ? Ye : Ve
}
function Rt(e, t) {
    return ((t = t || {}).persistencePrefix || xt) + e
}
function Tt(e, t) {
    return $t(t).get(Rt(e, t))
}
function Ct(e, t, n) {
    U(t) && t.length
        ? ($t((n = n || {})).set(
              Rt(t, n),
              e ? 1 : 0,
              V(n.cookieExpiration) ? n.cookieExpiration : null,
              n.crossSubdomainCookie,
              n.secureCookie
          ),
          n.capture &&
              e &&
              n.capture(n.captureEventName || '$opt_in', n.captureProperties || {}, { send_instantly: !0 }))
        : console.error('gdpr.' + (e ? 'optIn' : 'optOut') + ' called with an invalid token')
}
var Mt = (function () {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3
            r(this, e),
                (this.isPolling = !0),
                (this._event_queue = []),
                (this._empty_queue_count = 0),
                (this._poller = void 0),
                (this._pollInterval = t)
        }
        return (
            o(e, [
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
    At = (function (e) {
        a(i, Mt)
        var n = f(i)
        function i(e) {
            var t,
                o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3
            return r(this, i), ((t = n.call(this, o)).handlePollRequest = e), t
        }
        return (
            o(i, [
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
                                                s = r.options
                                            A(o, function (t, n) {
                                                ;(o[n].offset = Math.abs(o[n].timestamp - e.getTime())),
                                                    delete o[n].timestamp
                                            }),
                                                e.handlePollRequest(i, o, s)
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
                        var n = this._event_queue.length > 0 ? this.formatQueue() : {}
                        this._event_queue.length = 0
                        var r = Object.values(n)
                        ;[]
                            .concat(
                                h(
                                    r.filter(function (e) {
                                        return 0 === e.url.indexOf('/e')
                                    })
                                ),
                                h(
                                    r.filter(function (e) {
                                        return 0 !== e.url.indexOf('/e')
                                    })
                                )
                            )
                            .map(function (n) {
                                var r = n.url,
                                    i = n.data,
                                    o = n.options
                                e.handlePollRequest(r, i, t(t({}, o), {}, { transport: 'sendBeacon' }))
                            })
                    },
                },
                {
                    key: 'formatQueue',
                    value: function () {
                        var e = {}
                        return (
                            A(this._event_queue, function (t) {
                                var n = t.url,
                                    r = t.data,
                                    i = t.options,
                                    o = (i ? i._batchKey : null) || n
                                void 0 === e[o] && (e[o] = { data: [], url: n, options: i }),
                                    i &&
                                        e[o].options &&
                                        e[o].options._metrics &&
                                        !e[o].options._metrics.rrweb_full_snapshot &&
                                        (e[o].options._metrics.rrweb_full_snapshot = i._metrics.rrweb_full_snapshot),
                                    e[o].data.push(r)
                            }),
                            e
                        )
                    },
                },
            ]),
            i
        )
    })(),
    Dt = Uint8Array,
    jt = Uint16Array,
    Nt = Uint32Array,
    Ht = new Dt([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
    Lt = new Dt([
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0,
    ]),
    Bt = new Dt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
    qt = function (e, t) {
        for (var n = new jt(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1]
        var i = new Nt(n[30])
        for (r = 1; r < 30; ++r) for (var o = n[r]; o < n[r + 1]; ++o) i[o] = ((o - n[r]) << 5) | r
        return [n, i]
    },
    Ut = qt(Ht, 2),
    Vt = Ut[0],
    Gt = Ut[1]
;(Vt[28] = 258), (Gt[258] = 28)
for (var zt = qt(Lt, 0)[1], Wt = new jt(32768), Yt = 0; Yt < 32768; ++Yt) {
    var Qt = ((43690 & Yt) >>> 1) | ((21845 & Yt) << 1)
    ;(Qt = ((61680 & (Qt = ((52428 & Qt) >>> 2) | ((13107 & Qt) << 2))) >>> 4) | ((3855 & Qt) << 4)),
        (Wt[Yt] = (((65280 & Qt) >>> 8) | ((255 & Qt) << 8)) >>> 1)
}
var Jt = function (e, t, n) {
        for (var r = e.length, i = 0, o = new jt(t); i < r; ++i) ++o[e[i] - 1]
        var s,
            a = new jt(t)
        for (i = 0; i < t; ++i) a[i] = (a[i - 1] + o[i - 1]) << 1
        if (n) {
            s = new jt(1 << t)
            var u = 15 - t
            for (i = 0; i < r; ++i)
                if (e[i])
                    for (
                        var c = (i << 4) | e[i], l = t - e[i], d = a[e[i] - 1]++ << l, f = d | ((1 << l) - 1);
                        d <= f;
                        ++d
                    )
                        s[Wt[d] >>> u] = c
        } else for (s = new jt(r), i = 0; i < r; ++i) s[i] = Wt[a[e[i] - 1]++] >>> (15 - e[i])
        return s
    },
    Xt = new Dt(288)
for (Yt = 0; Yt < 144; ++Yt) Xt[Yt] = 8
for (Yt = 144; Yt < 256; ++Yt) Xt[Yt] = 9
for (Yt = 256; Yt < 280; ++Yt) Xt[Yt] = 7
for (Yt = 280; Yt < 288; ++Yt) Xt[Yt] = 8
var Kt = new Dt(32)
for (Yt = 0; Yt < 32; ++Yt) Kt[Yt] = 5
var Zt,
    en = Jt(Xt, 9, 0),
    tn = Jt(Kt, 5, 0),
    nn = function (e) {
        return ((e / 8) >> 0) + (7 & e && 1)
    },
    rn = function (e, t, n) {
        ;(null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length)
        var r = new (e instanceof jt ? jt : e instanceof Nt ? Nt : Dt)(n - t)
        return r.set(e.subarray(t, n)), r
    },
    on = function (e, t, n) {
        n <<= 7 & t
        var r = (t / 8) >> 0
        ;(e[r] |= n), (e[r + 1] |= n >>> 8)
    },
    sn = function (e, t, n) {
        n <<= 7 & t
        var r = (t / 8) >> 0
        ;(e[r] |= n), (e[r + 1] |= n >>> 8), (e[r + 2] |= n >>> 16)
    },
    an = function (e, t) {
        for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({ s: r, f: e[r] })
        var i = n.length,
            o = n.slice()
        if (!i) return [new Dt(0), 0]
        if (1 == i) {
            var s = new Dt(n[0].s + 1)
            return (s[n[0].s] = 1), [s, 1]
        }
        n.sort(function (e, t) {
            return e.f - t.f
        }),
            n.push({ s: -1, f: 25001 })
        var a = n[0],
            u = n[1],
            c = 0,
            l = 1,
            d = 2
        for (n[0] = { s: -1, f: a.f + u.f, l: a, r: u }; l != i - 1; )
            (a = n[n[c].f < n[d].f ? c++ : d++]),
                (u = n[c != l && n[c].f < n[d].f ? c++ : d++]),
                (n[l++] = { s: -1, f: a.f + u.f, l: a, r: u })
        var f = o[0].s
        for (r = 1; r < i; ++r) o[r].s > f && (f = o[r].s)
        var p = new jt(f + 1),
            h = un(n[l - 1], p, 0)
        if (h > t) {
            r = 0
            var g = 0,
                _ = h - t,
                v = 1 << _
            for (
                o.sort(function (e, t) {
                    return p[t.s] - p[e.s] || e.f - t.f
                });
                r < i;
                ++r
            ) {
                var m = o[r].s
                if (!(p[m] > t)) break
                ;(g += v - (1 << (h - p[m]))), (p[m] = t)
            }
            for (g >>>= _; g > 0; ) {
                var y = o[r].s
                p[y] < t ? (g -= 1 << (t - p[y]++ - 1)) : ++r
            }
            for (; r >= 0 && g; --r) {
                var b = o[r].s
                p[b] == t && (--p[b], ++g)
            }
            h = t
        }
        return [new Dt(p), h]
    },
    un = function e(t, n, r) {
        return -1 == t.s ? Math.max(e(t.l, n, r + 1), e(t.r, n, r + 1)) : (n[t.s] = r)
    },
    cn = function (e) {
        for (var t = e.length; t && !e[--t]; );
        for (
            var n = new jt(++t),
                r = 0,
                i = e[0],
                o = 1,
                s = function (e) {
                    n[r++] = e
                },
                a = 1;
            a <= t;
            ++a
        )
            if (e[a] == i && a != t) ++o
            else {
                if (!i && o > 2) {
                    for (; o > 138; o -= 138) s(32754)
                    o > 2 && (s(o > 10 ? ((o - 11) << 5) | 28690 : ((o - 3) << 5) | 12305), (o = 0))
                } else if (o > 3) {
                    for (s(i), --o; o > 6; o -= 6) s(8304)
                    o > 2 && (s(((o - 3) << 5) | 8208), (o = 0))
                }
                for (; o--; ) s(i)
                ;(o = 1), (i = e[a])
            }
        return [n.subarray(0, r), t]
    },
    ln = function (e, t) {
        for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r]
        return n
    },
    dn = function (e, t, n) {
        var r = n.length,
            i = nn(t + 2)
        ;(e[i] = 255 & r), (e[i + 1] = r >>> 8), (e[i + 2] = 255 ^ e[i]), (e[i + 3] = 255 ^ e[i + 1])
        for (var o = 0; o < r; ++o) e[i + o + 4] = n[o]
        return 8 * (i + 4 + r)
    },
    fn = function (e, t, n, r, i, o, s, a, u, c, l) {
        on(t, l++, n), ++i[256]
        for (
            var d = an(i, 15),
                f = d[0],
                p = d[1],
                h = an(o, 15),
                g = h[0],
                _ = h[1],
                v = cn(f),
                m = v[0],
                y = v[1],
                b = cn(g),
                w = b[0],
                k = b[1],
                S = new jt(19),
                x = 0;
            x < m.length;
            ++x
        )
            S[31 & m[x]]++
        for (x = 0; x < w.length; ++x) S[31 & w[x]]++
        for (var E = an(S, 7), P = E[0], F = E[1], O = 19; O > 4 && !P[Bt[O - 1]]; --O);
        var I,
            $,
            R,
            T,
            C = (c + 5) << 3,
            M = ln(i, Xt) + ln(o, Kt) + s,
            A = ln(i, f) + ln(o, g) + s + 14 + 3 * O + ln(S, P) + (2 * S[16] + 3 * S[17] + 7 * S[18])
        if (C <= M && C <= A) return dn(t, l, e.subarray(u, u + c))
        if ((on(t, l, 1 + (A < M)), (l += 2), A < M)) {
            ;(I = Jt(f, p, 0)), ($ = f), (R = Jt(g, _, 0)), (T = g)
            var D = Jt(P, F, 0)
            on(t, l, y - 257), on(t, l + 5, k - 1), on(t, l + 10, O - 4), (l += 14)
            for (x = 0; x < O; ++x) on(t, l + 3 * x, P[Bt[x]])
            l += 3 * O
            for (var j = [m, w], N = 0; N < 2; ++N) {
                var H = j[N]
                for (x = 0; x < H.length; ++x) {
                    var L = 31 & H[x]
                    on(t, l, D[L]), (l += P[L]), L > 15 && (on(t, l, (H[x] >>> 5) & 127), (l += H[x] >>> 12))
                }
            }
        } else (I = en), ($ = Xt), (R = tn), (T = Kt)
        for (x = 0; x < a; ++x)
            if (r[x] > 255) {
                L = (r[x] >>> 18) & 31
                sn(t, l, I[L + 257]), (l += $[L + 257]), L > 7 && (on(t, l, (r[x] >>> 23) & 31), (l += Ht[L]))
                var B = 31 & r[x]
                sn(t, l, R[B]), (l += T[B]), B > 3 && (sn(t, l, (r[x] >>> 5) & 8191), (l += Lt[B]))
            } else sn(t, l, I[r[x]]), (l += $[r[x]])
        return sn(t, l, I[256]), l + $[256]
    },
    pn = new Nt([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
    hn = new Dt(0),
    gn = (function () {
        for (var e = new Nt(256), t = 0; t < 256; ++t) {
            for (var n = t, r = 9; --r; ) n = (1 & n && 3988292384) ^ (n >>> 1)
            e[t] = n
        }
        return e
    })(),
    _n = function () {
        var e = 4294967295
        return {
            p: function (t) {
                for (var n = e, r = 0; r < t.length; ++r) n = gn[(255 & n) ^ t[r]] ^ (n >>> 8)
                e = n
            },
            d: function () {
                return 4294967295 ^ e
            },
        }
    },
    vn = function (e, t, n, r, i) {
        return (function (e, t, n, r, i, o) {
            var s = e.length,
                a = new Dt(r + s + 5 * (1 + Math.floor(s / 7e3)) + i),
                u = a.subarray(r, a.length - i),
                c = 0
            if (!t || s < 8)
                for (var l = 0; l <= s; l += 65535) {
                    var d = l + 65535
                    d < s ? (c = dn(u, c, e.subarray(l, d))) : ((u[l] = o), (c = dn(u, c, e.subarray(l, s))))
                }
            else {
                for (
                    var f = pn[t - 1],
                        p = f >>> 13,
                        h = 8191 & f,
                        g = (1 << n) - 1,
                        _ = new jt(32768),
                        v = new jt(g + 1),
                        m = Math.ceil(n / 3),
                        y = 2 * m,
                        b = function (t) {
                            return (e[t] ^ (e[t + 1] << m) ^ (e[t + 2] << y)) & g
                        },
                        w = new Nt(25e3),
                        k = new jt(288),
                        S = new jt(32),
                        x = 0,
                        E = 0,
                        P = ((l = 0), 0),
                        F = 0,
                        O = 0;
                    l < s;
                    ++l
                ) {
                    var I = b(l),
                        $ = 32767 & l,
                        R = v[I]
                    if (((_[$] = R), (v[I] = $), F <= l)) {
                        var T = s - l
                        if ((x > 7e3 || P > 24576) && T > 423) {
                            ;(c = fn(e, u, 0, w, k, S, E, P, O, l - O, c)), (P = x = E = 0), (O = l)
                            for (var C = 0; C < 286; ++C) k[C] = 0
                            for (C = 0; C < 30; ++C) S[C] = 0
                        }
                        var M = 2,
                            A = 0,
                            D = h,
                            j = ($ - R) & 32767
                        if (T > 2 && I == b(l - j))
                            for (
                                var N = Math.min(p, T) - 1, H = Math.min(32767, l), L = Math.min(258, T);
                                j <= H && --D && $ != R;

                            ) {
                                if (e[l + M] == e[l + M - j]) {
                                    for (var B = 0; B < L && e[l + B] == e[l + B - j]; ++B);
                                    if (B > M) {
                                        if (((M = B), (A = j), B > N)) break
                                        var q = Math.min(j, B - 2),
                                            U = 0
                                        for (C = 0; C < q; ++C) {
                                            var V = (l - j + C + 32768) & 32767,
                                                G = (V - _[V] + 32768) & 32767
                                            G > U && ((U = G), (R = V))
                                        }
                                    }
                                }
                                j += (($ = R) - (R = _[$]) + 32768) & 32767
                            }
                        if (A) {
                            w[P++] = 268435456 | (Gt[M] << 18) | zt[A]
                            var z = 31 & Gt[M],
                                W = 31 & zt[A]
                            ;(E += Ht[z] + Lt[W]), ++k[257 + z], ++S[W], (F = l + M), ++x
                        } else (w[P++] = e[l]), ++k[e[l]]
                    }
                }
                ;(c = fn(e, u, o, w, k, S, E, P, O, l - O, c)), o || (c = dn(u, c, hn))
            }
            return rn(a, 0, r + nn(c) + i)
        })(
            e,
            null == t.level ? 6 : t.level,
            null == t.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + t.mem,
            n,
            r,
            !i
        )
    },
    mn = function (e, t, n) {
        for (; n; ++t) (e[t] = n), (n >>>= 8)
    },
    yn = function (e, t) {
        var n = t.filename
        if (
            ((e[0] = 31),
            (e[1] = 139),
            (e[2] = 8),
            (e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0),
            (e[9] = 3),
            0 != t.mtime && mn(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)),
            n)
        ) {
            e[3] = 8
            for (var r = 0; r <= n.length; ++r) e[r + 10] = n.charCodeAt(r)
        }
    },
    bn = function (e) {
        return 10 + ((e.filename && e.filename.length + 1) || 0)
    }
function wn(e, t) {
    void 0 === t && (t = {})
    var n = _n(),
        r = e.length
    n.p(e)
    var i = vn(e, t, bn(t), 8),
        o = i.length
    return yn(i, t), mn(i, o - 8, n.d()), mn(i, o - 4, r), i
}
function kn(e, t) {
    var n = e.length
    if (!t && 'undefined' != typeof TextEncoder) return new TextEncoder().encode(e)
    for (
        var r = new Dt(e.length + (e.length >>> 1)),
            i = 0,
            o = function (e) {
                r[i++] = e
            },
            s = 0;
        s < n;
        ++s
    ) {
        if (i + 5 > r.length) {
            var a = new Dt(i + 8 + ((n - s) << 1))
            a.set(r), (r = a)
        }
        var u = e.charCodeAt(s)
        u < 128 || t
            ? o(u)
            : u < 2048
            ? (o(192 | (u >>> 6)), o(128 | (63 & u)))
            : u > 55295 && u < 57344
            ? (o(240 | ((u = (65536 + (1047552 & u)) | (1023 & e.charCodeAt(++s))) >>> 18)),
              o(128 | ((u >>> 12) & 63)),
              o(128 | ((u >>> 6) & 63)),
              o(128 | (63 & u)))
            : (o(224 | (u >>> 12)), o(128 | ((u >>> 6) & 63)), o(128 | (63 & u)))
    }
    return rn(r, 0, i)
}
;(exports.Compression = void 0),
    ((Zt = exports.Compression || (exports.Compression = {})).GZipJS = 'gzip-js'),
    (Zt.Base64 = 'base64')
var Sn = function (e, t, n) {
        var r = t || {}
        ;(r.ip = n.ip ? 1 : 0), (r._ = new Date().getTime().toString()), (r.ver = m.LIB_VERSION)
        var i = e.split('?')
        if (i.length > 1) {
            var o,
                s = v(i[1].split('&'))
            try {
                for (s.s(); !(o = s.n()).done; ) {
                    var a = o.value.split('=')[0]
                    r[a] && delete r[a]
                }
            } catch (e) {
                s.e(e)
            } finally {
                s.f()
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
                    A(e, function (e, r) {
                        ;(t = encodeURIComponent(e.toString())),
                            (n = encodeURIComponent(r)),
                            (i[i.length] = n + '=' + t)
                    }),
                    i.join(r)
                )
            })(r)
        )
    },
    xn = function e(t, n) {
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
    En = function (e) {
        var t = e.url,
            n = e.data,
            r = e.headers,
            i = e.options,
            o = e.callback,
            s = e.retriesPerformedSoFar,
            a = e.retryQueue,
            u = e.onXHRError,
            c = e.timeout,
            l = void 0 === c ? 6e4 : c,
            d = e.onResponse,
            f = new XMLHttpRequest()
        f.open(i.method || 'GET', t, !0)
        var p = xn(n, i)
        A(r, function (e, t) {
            f.setRequestHeader(t, e)
        }),
            'POST' !== i.method || i.blob || f.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
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
                                return void T.error(e)
                            }
                            o(e)
                        }
                    } else
                        'function' == typeof u && u(f),
                            (f.status < 400 || f.status > 500) &&
                                a.enqueue({
                                    url: t,
                                    data: n,
                                    options: i,
                                    headers: r,
                                    retriesPerformedSoFar: (s || 0) + 1,
                                    callback: o,
                                }),
                            null == o || o({ status: 0 })
            }),
            f.send(p)
    },
    Pn = 18e5
var Fn = (function (e) {
    a(i, Mt)
    var n = f(i)
    function i(e, t) {
        var o
        return (
            r(this, i),
            ((o = n.call(this)).isPolling = !1),
            (o.queue = []),
            (o.areWeOnline = !0),
            (o.onXHRError = e),
            (o.rateLimiter = t),
            'undefined' != typeof window &&
                'onLine' in window.navigator &&
                ((o.areWeOnline = window.navigator.onLine),
                window.addEventListener('online', function () {
                    o._handleWeAreNowOnline()
                }),
                window.addEventListener('offline', function () {
                    o.areWeOnline = !1
                })),
            o
        )
    }
    return (
        o(i, [
            {
                key: 'enqueue',
                value: function (e) {
                    var t = e.retriesPerformedSoFar || 0
                    if (!(t >= 10)) {
                        var n = (function (e) {
                                var t = 3e3 * Math.pow(2, e),
                                    n = t / 2,
                                    r = Math.min(Pn, t),
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
                            r = v(t)
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
                        n = v(this.queue)
                    try {
                        for (n.s(); !(e = n.n()).done; ) {
                            var r = e.value.requestData,
                                i = r.url,
                                o = r.data,
                                s = r.options
                            if (this.rateLimiter.isRateLimited(s._batchKey))
                                m.DEBUG && console.warn('[PostHog RetryQueue] is quota limited. Dropping request.')
                            else
                                try {
                                    window.navigator.sendBeacon(i, xn(o, t(t({}, s), {}, { sendBeacon: !0 })))
                                } catch (e) {
                                    m.DEBUG && console.error(e)
                                }
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
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
                        s = e.retriesPerformedSoFar
                    this.rateLimiter.isRateLimited(r._batchKey) ||
                        En({
                            url: t,
                            data: n || {},
                            options: r || {},
                            headers: i || {},
                            retriesPerformedSoFar: s || 0,
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
        i
    )
})()
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
var On = '0123456789abcdef',
    In = (function () {
        function e(t) {
            if ((r(this, e), (this.bytes = t), 16 !== t.length)) throw new TypeError('not 128-bit length')
        }
        return (
            o(
                e,
                [
                    {
                        key: 'toString',
                        value: function () {
                            for (var e = '', t = 0; t < this.bytes.length; t++)
                                (e = e + On.charAt(this.bytes[t] >>> 4) + On.charAt(15 & this.bytes[t])),
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
    $n = (function () {
        function e() {
            r(this, e), s(this, 'timestamp', 0), s(this, 'counter', 0), s(this, 'random', new Cn())
        }
        return (
            o(e, [
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
                        return In.fromFieldsV7(
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
    Rn = function (e) {
        if ('undefined' != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG)
            throw new Error('no cryptographically strong RNG available')
        for (var t = 0; t < e.length; t++)
            e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random())
        return e
    }
'undefined' != typeof crypto &&
    crypto.getRandomValues &&
    (Rn = function (e) {
        return crypto.getRandomValues(e)
    })
var Tn,
    Cn = (function () {
        function e() {
            r(this, e), s(this, 'buffer', new Uint32Array(8)), s(this, 'cursor', 1 / 0)
        }
        return (
            o(e, [
                {
                    key: 'nextUint32',
                    value: function () {
                        return (
                            this.cursor >= this.buffer.length && (Rn(this.buffer), (this.cursor = 0)),
                            this.buffer[this.cursor++]
                        )
                    },
                },
            ]),
            e
        )
    })(),
    Mn = function () {
        return An().toString()
    },
    An = function () {
        return (Tn || (Tn = new $n())).generate()
    },
    Dn = 1800,
    jn = 60,
    Nn = 864e5,
    Hn = (function () {
        function e(t, n) {
            r(this, e),
                s(this, '_sessionIdChangedHandlers', []),
                (this.config = t),
                (this.persistence = n),
                (this._windowId = void 0),
                (this._sessionId = void 0),
                (this._sessionStartTimestamp = null),
                (this._sessionActivityTimestamp = null)
            var i = t.persistence_name || t.token,
                o = t.session_idle_timeout_seconds || Dn
            if (
                ('number' != typeof o
                    ? (console.warn(
                          '[PostHog] session_idle_timeout_seconds must be a number. Defaulting to 30 minutes.'
                      ),
                      (o = Dn))
                    : o > Dn
                    ? console.warn(
                          '[PostHog] session_idle_timeout_seconds cannot be  greater than 30 minutes. Using 30 minutes instead.'
                      )
                    : o < jn &&
                      console.warn(
                          '[PostHog] session_idle_timeout_seconds cannot be less than 60 seconds. Using 60 seconds instead.'
                      ),
                (this._sessionTimeoutMs = 1e3 * Math.min(Math.max(o, jn), Dn)),
                (this._window_id_storage_key = 'ph_' + i + '_window_id'),
                (this._primary_window_exists_storage_key = 'ph_' + i + '_primary_window_exists'),
                this._canUseSessionStorage())
            ) {
                var a = Ke.parse(this._window_id_storage_key),
                    u = Ke.parse(this._primary_window_exists_storage_key)
                a && !u ? (this._windowId = a) : Ke.remove(this._window_id_storage_key),
                    Ke.set(this._primary_window_exists_storage_key, !0)
            }
            this._listenToReloadWindow()
        }
        return (
            o(e, [
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
                        return 'memory' !== this.config.persistence && !this.persistence.disabled && Ke.is_supported()
                    },
                },
                {
                    key: '_setWindowId',
                    value: function (e) {
                        e !== this._windowId &&
                            ((this._windowId = e),
                            this._canUseSessionStorage() && Ke.set(this._window_id_storage_key, e))
                    },
                },
                {
                    key: '_getWindowId',
                    value: function () {
                        return this._windowId
                            ? this._windowId
                            : this._canUseSessionStorage()
                            ? Ke.parse(this._window_id_storage_key)
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
                            this.persistence.register(s({}, Pe, [t, e, n])))
                    },
                },
                {
                    key: '_getSessionId',
                    value: function () {
                        if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp)
                            return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp]
                        var e = this.persistence.props[Pe]
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
                            e._canUseSessionStorage() && Ke.remove(e._primary_window_exists_storage_key)
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
                            n = p(this._getSessionId(), 3),
                            r = n[0],
                            i = n[1],
                            o = n[2],
                            s = this._getWindowId(),
                            a = o && o > 0 && Math.abs(t - o) > Nn,
                            u = !1
                        !i || (!e && Math.abs(t - r) > this._sessionTimeoutMs) || a
                            ? ((i = Mn()), (s = Mn()), (o = t), (u = !0))
                            : s || ((s = Mn()), (u = !0))
                        var c = 0 === r || !e || a ? t : r,
                            l = 0 === o ? new Date().getTime() : o
                        return (
                            this._setWindowId(s),
                            this._setSessionId(i, c, l),
                            u &&
                                this._sessionIdChangedHandlers.forEach(function (e) {
                                    return e(i, s)
                                }),
                            { sessionId: i, windowId: s, sessionStartTimestamp: l }
                        )
                    },
                },
            ]),
            e
        )
    })(),
    Ln = o(function e(t, n, i, o) {
        r(this, e),
            (this.name = 'posthog-js'),
            (this.setupOnce = function (e) {
                e(function (e) {
                    var r, s, a, u, c
                    if ('error' !== e.level || !t.__loaded) return e
                    e.tags || (e.tags = {})
                    var l = t.config.ui_host || t.config.api_host
                    ;(e.tags['PostHog Person URL'] = l + '/person/' + t.get_distinct_id()),
                        t.sessionRecordingStarted() &&
                            (e.tags['PostHog Recording URL'] = t.get_session_replay_url({ withTimestamp: !0 }))
                    var d = (null === (r = e.exception) || void 0 === r ? void 0 : r.values) || [],
                        f = {
                            $exception_message: null === (s = d[0]) || void 0 === s ? void 0 : s.value,
                            $exception_type: null === (a = d[0]) || void 0 === a ? void 0 : a.type,
                            $exception_personURL: l + '/person/' + t.get_distinct_id(),
                            $sentry_event_id: e.event_id,
                            $sentry_exception: e.exception,
                            $sentry_exception_message: null === (u = d[0]) || void 0 === u ? void 0 : u.value,
                            $sentry_exception_type: null === (c = d[0]) || void 0 === c ? void 0 : c.type,
                            $sentry_tags: e.tags,
                        }
                    return (
                        n &&
                            i &&
                            (f.$sentry_url =
                                (o || 'https://sentry.io/organizations/') +
                                n +
                                '/issues/?project=' +
                                i +
                                '&query=' +
                                e.event_id),
                        t.capture('$exception', f),
                        e
                    )
                })
            })
    }),
    Bn = function (e) {
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
    qn = (function () {
        function e() {
            var t = this
            r(this, e),
                s(this, '_hasSeenPageView', !1),
                s(this, '_updateScrollData', function () {
                    var e, n, r, i
                    t._pageViewData || (t._pageViewData = t._createPageViewData())
                    var o = t._pageViewData,
                        s = t._scrollY(),
                        a = t._scrollHeight(),
                        u = t._contentY(),
                        c = t._contentHeight()
                    ;(o.lastScrollY = s),
                        (o.maxScrollY = Math.max(s, null !== (e = o.maxScrollY) && void 0 !== e ? e : 0)),
                        (o.maxScrollHeight = Math.max(a, null !== (n = o.maxScrollHeight) && void 0 !== n ? n : 0)),
                        (o.lastContentY = u),
                        (o.maxContentY = Math.max(u, null !== (r = o.maxContentY) && void 0 !== r ? r : 0)),
                        (o.maxContentHeight = Math.max(c, null !== (i = o.maxContentHeight) && void 0 !== i ? i : 0))
                })
        }
        return (
            o(e, [
                {
                    key: '_createPageViewData',
                    value: function () {
                        return { pathname: S.location.pathname }
                    },
                },
                {
                    key: 'doPageView',
                    value: function () {
                        var e, n
                        return (
                            this._hasSeenPageView
                                ? ((n = this._pageViewData), (this._pageViewData = this._createPageViewData()))
                                : ((this._hasSeenPageView = !0),
                                  (n = void 0),
                                  this._pageViewData || (this._pageViewData = this._createPageViewData())),
                            setTimeout(this._updateScrollData, 0),
                            t(
                                { $prev_pageview_pathname: null === (e = n) || void 0 === e ? void 0 : e.pathname },
                                this._calculatePrevPageScrollProperties(n)
                            )
                        )
                    },
                },
                {
                    key: 'doPageLeave',
                    value: function () {
                        var e = this._pageViewData
                        return t(
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
                            s = e.maxContentY
                        return (
                            (t = Math.ceil(t)),
                            (n = Math.ceil(n)),
                            (r = Math.ceil(r)),
                            (i = Math.ceil(i)),
                            (o = Math.ceil(o)),
                            (s = Math.ceil(s)),
                            {
                                $prev_pageview_last_scroll: n,
                                $prev_pageview_last_scroll_percentage: t <= 1 ? 1 : Un(n / t, 0, 1),
                                $prev_pageview_max_scroll: r,
                                $prev_pageview_max_scroll_percentage: t <= 1 ? 1 : Un(r / t, 0, 1),
                                $prev_pageview_last_content: o,
                                $prev_pageview_last_content_percentage: i <= 1 ? 1 : Un(o / i, 0, 1),
                                $prev_pageview_max_content: s,
                                $prev_pageview_max_content_percentage: i <= 1 ? 1 : Un(s / i, 0, 1),
                            }
                        )
                    },
                },
                {
                    key: 'startMeasuringScrollPosition',
                    value: function () {
                        S.addEventListener('scroll', this._updateScrollData),
                            S.addEventListener('scrollend', this._updateScrollData),
                            S.addEventListener('resize', this._updateScrollData)
                    },
                },
                {
                    key: 'stopMeasuringScrollPosition',
                    value: function () {
                        S.removeEventListener('scroll', this._updateScrollData),
                            S.removeEventListener('scrollend', this._updateScrollData),
                            S.removeEventListener('resize', this._updateScrollData)
                    },
                },
                {
                    key: '_scrollHeight',
                    value: function () {
                        return Math.max(
                            0,
                            S.document.documentElement.scrollHeight - S.document.documentElement.clientHeight
                        )
                    },
                },
                {
                    key: '_scrollY',
                    value: function () {
                        return S.scrollY || S.pageYOffset || S.document.documentElement.scrollTop || 0
                    },
                },
                {
                    key: '_contentHeight',
                    value: function () {
                        return S.document.documentElement.scrollHeight || 0
                    },
                },
                {
                    key: '_contentY',
                    value: function () {
                        var e = S.document.documentElement.clientHeight || 0
                        return this._scrollY() + e
                    },
                },
            ]),
            e
        )
    })()
function Un(e, t, n) {
    return Math.max(t, Math.min(e, n))
}
function Vn(e) {
    return 'undefined' != typeof Event && Gn(e, Event)
}
function Gn(e, t) {
    try {
        return e instanceof t
    } catch (e) {
        return !1
    }
}
function zn(e) {
    return null === e || ('object' !== n(e) && 'function' != typeof e)
}
function Wn(e, t) {
    return Object.prototype.toString.call(e) === '[object '.concat(t, ']')
}
function Yn(e) {
    return Wn(e, 'DOMError')
}
var Qn = /\(error: (.*)\)/,
    Jn = 50,
    Xn = '?'
function Kn(e, t, n, r) {
    var i = { filename: e, function: t, in_app: !0 }
    return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i
}
var Zn =
        /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    er = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    tr =
        /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    nr = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    rr = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i
var ir = function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]
        var i = n
            .sort(function (e, t) {
                return e[0] - t[0]
            })
            .map(function (e) {
                return e[1]
            })
        return function (e) {
            for (
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    r = [],
                    o = e.split('\n'),
                    s = n;
                s < o.length;
                s++
            ) {
                var a = o[s]
                if (!(a.length > 1024)) {
                    var u = Qn.test(a) ? a.replace(Qn, '$1') : a
                    if (!u.match(/\S*Error: /)) {
                        var c,
                            l = v(i)
                        try {
                            for (l.s(); !(c = l.n()).done; ) {
                                var d = (0, c.value)(u)
                                if (d) {
                                    r.push(d)
                                    break
                                }
                            }
                        } catch (e) {
                            l.e(e)
                        } finally {
                            l.f()
                        }
                        if (r.length >= Jn) break
                    }
                }
            }
            return (function (e) {
                if (!e.length) return []
                var n = e.slice(0, Jn)
                return (
                    n.reverse(),
                    n.map(function (e) {
                        return t(
                            t({}, e),
                            {},
                            { filename: e.filename || n[n.length - 1].filename, function: e.function || '?' }
                        )
                    })
                )
            })(r)
        }
    }.apply(void 0, [
        [
            30,
            function (e) {
                var t = Zn.exec(e)
                if (t) {
                    if (t[2] && 0 === t[2].indexOf('eval')) {
                        var n = er.exec(t[2])
                        n && ((t[2] = n[1]), (t[3] = n[2]), (t[4] = n[3]))
                    }
                    var r = p(or(t[1] || Xn, t[2]), 2),
                        i = r[0]
                    return Kn(r[1], i, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0)
                }
            },
        ],
        [
            50,
            function (e) {
                var t = tr.exec(e)
                if (t) {
                    if (t[3] && t[3].indexOf(' > eval') > -1) {
                        var n = nr.exec(t[3])
                        n && ((t[1] = t[1] || 'eval'), (t[3] = n[1]), (t[4] = n[2]), (t[5] = ''))
                    }
                    var r = t[3],
                        i = t[1] || Xn,
                        o = p(or(i, r), 2)
                    return (i = o[0]), Kn((r = o[1]), i, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
                }
            },
        ],
        [
            40,
            function (e) {
                var t = rr.exec(e)
                return t ? Kn(t[2], t[1] || Xn, +t[3], t[4] ? +t[4] : void 0) : void 0
            },
        ],
    ]),
    or = function (e, t) {
        var n = -1 !== e.indexOf('safari-extension'),
            r = -1 !== e.indexOf('safari-web-extension')
        return n || r
            ? [
                  -1 !== e.indexOf('@') ? e.split('@')[0] : Xn,
                  n ? 'safari-extension:'.concat(t) : 'safari-web-extension:'.concat(t),
              ]
            : [e, t]
    },
    sr = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
    ar = /Minified React error #\d+;/i
function ur(e) {
    var t = e.stacktrace || e.stack || '',
        n = (function (e) {
            if (e) {
                if ('number' == typeof e.framesToPop) return e.framesToPop
                if (ar.test(e.message)) return 1
            }
            return 0
        })(e)
    try {
        return ir(t, n)
    } catch (e) {}
    return []
}
function cr(e) {
    var t = ur(e)
    return { $exception_type: e.name, $exception_message: e.message, $exception_stack_trace_raw: JSON.stringify(t) }
}
function lr(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
        n = Object.keys(e)
    if ((n.sort(), !n.length)) return '[object has no keys]'
    for (var r = n.length; r > 0; r--) {
        var i = n.slice(0, r).join(', ')
        if (!(i.length > t)) return r === n.length || i.length <= t ? i : ''.concat(i.slice(0, t), '...')
    }
    return ''
}
function dr(e) {
    var n = p(e, 5),
        r = n[0],
        i = n[1],
        o = n[2],
        s = n[3],
        a = n[4],
        u = {}
    if (void 0 === a && 'string' == typeof r) {
        var c = 'Error',
            l = r,
            d = r.match(sr)
        d && ((c = d[1]), (l = d[2])), (u = { $exception_type: c, $exception_message: l })
    }
    var f = a || r
    if (
        Yn(f) ||
        (function (e) {
            return Wn(e, 'DOMException')
        })(f)
    ) {
        var h = f
        if (
            (function (e) {
                return 'stack' in e
            })(f)
        )
            u = cr(f)
        else {
            var g = h.name || (Yn(h) ? 'DOMError' : 'DOMException'),
                _ = h.message ? ''.concat(g, ': ').concat(h.message) : g
            ;(u = (function (e) {
                return { $exception_type: 'Error', $exception_message: e }
            })(_)),
                (u.$exception_type = Yn(h) ? 'DOMError' : 'DOMException'),
                (u.$exception_message = u.$exception_message || _)
        }
        'code' in h && (u.$exception_DOMException_code = ''.concat(h.code))
    } else if (
        (function (e) {
            return Wn(e, 'ErrorEvent')
        })(f) &&
        f.error
    )
        u = cr(f.error)
    else if (
        (function (e) {
            switch (Object.prototype.toString.call(e)) {
                case '[object Error]':
                case '[object Exception]':
                case '[object DOMException]':
                    return !0
                default:
                    return Gn(e, Error)
            }
        })(f)
    )
        u = cr(f)
    else if (
        (function (e) {
            return Wn(e, 'Object')
        })(f) ||
        Vn(f)
    ) {
        ;(u = (function (e) {
            return {
                $exception_type: Vn(e) ? e.constructor.name : 'Error',
                $exception_message: 'Non-Error '.concat('exception', ' captured with keys: ', lr(e)),
            }
        })(f)),
            (u.$exception_is_synthetic = !0)
    } else
        (u.$exception_type = u.$exception_type || 'Error'),
            (u.$exception_message = u.$exception_message || f),
            (u.$exception_is_synthetic = !0)
    return t(
        t(
            t(
                t({}, u),
                {},
                {
                    $exception_type: u.$exception_type || 'UnknownErrorType',
                    $exception_message: u.$exception_message || '',
                },
                i ? { $exception_source: i } : {}
            ),
            o ? { $exception_lineno: o } : {}
        ),
        s ? { $exception_colno: s } : {}
    )
}
var fr,
    pr,
    hr,
    gr = (function () {
        function e(t) {
            r(this, e),
                s(this, 'originalOnErrorHandler', void 0),
                s(this, 'originalOnUnhandledRejectionHandler', void 0),
                s(this, 'errorsToIgnore', []),
                (this.instance = t)
        }
        return (
            o(e, [
                {
                    key: 'debugLog',
                    value: function () {
                        if (this.instance.config.debug) {
                            for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
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
                            (null === (e = S.onerror) || void 0 === e || !e.__POSTHOG_INSTRUMENTED__)
                        )
                            try {
                                ;(this.originalOnErrorHandler = S.onerror),
                                    (S.onerror = function () {
                                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                                            t[n] = arguments[n]
                                        return (
                                            this.captureException(t),
                                            !!this.originalOnErrorHandler && this.originalOnErrorHandler.apply(this, t)
                                        )
                                    }.bind(this)),
                                    (S.onerror.__POSTHOG_INSTRUMENTED__ = !0),
                                    (this.originalOnUnhandledRejectionHandler = S.onunhandledrejection),
                                    (S.onunhandledrejection = function () {
                                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                                            n[r] = arguments[r]
                                        var i = (function (e) {
                                            var n = p(e, 1)[0],
                                                r = n
                                            try {
                                                'reason' in n
                                                    ? (r = n.reason)
                                                    : 'detail' in n && 'reason' in n.detail && (r = n.detail.reason)
                                            } catch (e) {}
                                            var i = {}
                                            return (
                                                ((i = zn(r)
                                                    ? {
                                                          $exception_message:
                                                              'Non-Error promise rejection captured with value: '.concat(
                                                                  String(r)
                                                              ),
                                                      }
                                                    : dr([r])).$exception_handled = !1),
                                                t(
                                                    t({}, i),
                                                    {},
                                                    {
                                                        $exception_type: (i.$exception_type = 'UnhandledRejection'),
                                                        $exception_message: (i.$exception_message =
                                                            i.$exception_message || n.reason || String(r)),
                                                    }
                                                )
                                            )
                                        })(n)
                                        return (
                                            this.sendExceptionEvent(i),
                                            !this.originalOnUnhandledRejectionHandler ||
                                                this.originalOnUnhandledRejectionHandler.apply(S, n)
                                        )
                                    }.bind(this)),
                                    (S.onunhandledrejection.__POSTHOG_INSTRUMENTED__ = !0)
                            } catch (e) {
                                console.error('PostHog failed to start exception autocapture', e), this.stopCapturing()
                            }
                    },
                },
                {
                    key: 'stopCapturing',
                    value: function () {
                        var e, t
                        void 0 !== this.originalOnErrorHandler &&
                            ((S.onerror = this.originalOnErrorHandler), (this.originalOnErrorHandler = null)),
                            null === (e = S.onerror) || void 0 === e || delete e.__POSTHOG_INSTRUMENTED__,
                            void 0 !== this.originalOnUnhandledRejectionHandler &&
                                ((S.onunhandledrejection = this.originalOnUnhandledRejectionHandler),
                                (this.originalOnUnhandledRejectionHandler = null)),
                            null === (t = S.onunhandledrejection) || void 0 === t || delete t.__POSTHOG_INSTRUMENTED__
                    },
                },
                {
                    key: 'isCapturing',
                    value: function () {
                        var e
                        return !(null === (e = S.onerror) || void 0 === e || !e.__POSTHOG_INSTRUMENTED__)
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
                            !zn(t) && 'errors_to_ignore' in t && Array.isArray(t.errors_to_ignore))
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
                    value: function (e, n) {
                        var r = dr(e)
                        if (
                            this.errorsToIgnore.some(function (e) {
                                return e.test(r.$exception_message || '')
                            })
                        )
                            this.debugLog('Ignoring exception based on remote config', r)
                        else {
                            var i = t(t({}, n), r),
                                o = this.instance.config.ui_host || this.instance.config.api_host
                            ;(r.$exception_personURL = o + '/person/' + this.instance.get_distinct_id()),
                                this.sendExceptionEvent(i)
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
    _r = {
        icontains: function (e) {
            return window.location.href.toLowerCase().indexOf(e.toLowerCase()) > -1
        },
        regex: function (e) {
            return G(window.location.href, e)
        },
        exact: function (e) {
            return window.location.href === e
        },
    },
    vr = (function () {
        function e(t) {
            r(this, e), (this.instance = t)
        }
        return (
            o(e, [
                {
                    key: 'getSurveys',
                    value: function (e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = this.instance.get_property(Re)
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
                                    null === (r = t.instance.persistence) || void 0 === r || r.register(s({}, Re, i)),
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
                                            _r[
                                                null !==
                                                    (n =
                                                        null === (r = e.conditions) || void 0 === r
                                                            ? void 0
                                                            : r.urlMatchType) && void 0 !== n
                                                    ? n
                                                    : 'icontains'
                                            ](e.conditions.url),
                                        s =
                                            null === (i = e.conditions) ||
                                            void 0 === i ||
                                            !i.selector ||
                                            document.querySelector(e.conditions.selector)
                                    return o && s
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
    mr = 6e4,
    yr = (function () {
        function e() {
            var t = this
            r(this, e),
                s(this, 'limits', {}),
                s(this, 'checkForLimiting', function (e) {
                    try {
                        ;(JSON.parse(e.responseText).quota_limited || []).forEach(function (e) {
                            T.log('[PostHog RateLimiter] '.concat(e || 'events', ' is quota limited.')),
                                (t.limits[e] = new Date().getTime() + mr)
                        })
                    } catch (e) {
                        return void T.error(e)
                    }
                })
        }
        return (
            o(e, [
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
})(fr || (fr = {}))
var br = function () {},
    wr = {},
    kr = 'posthog',
    Sr = S.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest(),
    xr = !Sr && -1 === P.indexOf('MSIE') && -1 === P.indexOf('Mozilla'),
    Er = function () {
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
                (null == E || null === (e = E.location) || void 0 === e || null === (t = e.hostname) || void 0 === t
                    ? void 0
                    : t.indexOf('herokuapp.com')),
            persistence: 'cookie',
            persistence_name: '',
            cookie_name: '',
            loaded: br,
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
            secure_cookie: 'https:' === (null == S || null === (n = S.location) || void 0 === n ? void 0 : n.protocol),
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
            _onCapture: br,
            capture_performance: void 0,
            name: 'posthog',
            callback_fn: 'posthog._jsc',
            bootstrap: {},
            disable_compression: !1,
            session_idle_timeout_seconds: 1800,
            send_nms_recording: !0,
        }
    },
    Pr = function (e, t, n, r) {
        var i,
            o = n !== kr && hr ? (n ? hr[n] : void 0) : hr,
            s = { initComplete: !1, syncCode: !1 },
            a = function (e) {
                return function (t) {
                    s[e] || ((s[e] = !0), s.initComplete && s.syncCode && (null == r || r(t)))
                }
            }
        if (o && pr === fr.INIT_MODULE) i = o
        else {
            if (o && !j(o)) return void console.error('You have already initialized ' + n)
            i = new Fr()
        }
        if (
            (i._init(e, t, n, a('initComplete')),
            i.toolbar.maybeLoadToolbar(),
            (i.sessionRecording = new ht(i)),
            i.sessionRecording.startRecordingIfEnabled(),
            (i.webPerformance = new mt(i)),
            i.webPerformance.startObservingIfEnabled(),
            i.config.__preview_measure_pageview_stats && i.pageViewManager.startMeasuringScrollPosition(),
            (i.exceptionAutocapture = new gr(i)),
            (i.__autocapture = i.config.autocapture),
            je._setIsAutocaptureEnabled(i),
            je._isAutocaptureEnabled)
        ) {
            i.__autocapture = i.config.autocapture
            je.enabledForProject(i.config.token, 100, 100)
                ? je.isBrowserSupported()
                    ? je.init(i)
                    : ((i.__autocapture = !1),
                      T.log('Disabling Automatic Event Collection because this browser is not supported'))
                : ((i.__autocapture = !1), T.log('Not in active bucket: disabling Automatic Event Collection.'))
        }
        return (
            (m.DEBUG = m.DEBUG || i.config.debug),
            void 0 !== o && j(o) && (i._execute_array.call(i.people, o.people), i._execute_array(o)),
            a('syncCode')(i),
            i
        )
    },
    Fr = (function () {
        function e() {
            var t = this
            r(this, e),
                (this.config = Er()),
                (this.compression = {}),
                (this.decideEndpointWasHit = !1),
                (this.SentryIntegration = Ln),
                (this.segmentIntegration = function () {
                    return Bn(t)
                }),
                (this.__captureHooks = []),
                (this.__request_queue = []),
                (this.__loaded = !1),
                (this.__loaded_recorder_version = void 0),
                (this.__autocapture = void 0),
                (this._jsc = function () {}),
                (this.featureFlags = new qe(this)),
                (this.toolbar = new St(this)),
                (this.pageViewManager = new qn()),
                (this.surveys = new vr(this)),
                (this.rateLimiter = new yr()),
                (this.people = {
                    set: function (e, n, r) {
                        var i = 'string' == typeof e ? s({}, e, n) : e
                        t.setPersonProperties(i), null == r || r({})
                    },
                    set_once: function (e, n, r) {
                        var i = 'string' == typeof e ? s({}, e, n) : e
                        t.setPersonProperties(void 0, i), null == r || r({})
                    },
                })
        }
        return (
            o(e, [
                {
                    key: 'init',
                    value: function (e, t, n) {
                        if (q(n)) console.error('You must name your new library: init(token, config, name)')
                        else {
                            if (n !== kr) {
                                var r = Pr(e, t, n, function (e) {
                                    ;(hr[n] = e), e._loaded()
                                })
                                return (hr[n] = r), r
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
                        var n,
                            r,
                            i = this,
                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            s = arguments.length > 2 ? arguments[2] : void 0,
                            a = arguments.length > 3 ? arguments[3] : void 0
                        ;(this.__loaded = !0), (this.config = {}), (this._triggered_notifs = [])
                        var u,
                            c = { segmentRegister: !1, syncCode: !1 },
                            l = function (e) {
                                return function () {
                                    c[e] || ((c[e] = !0), c.segmentRegister && c.syncCode && (null == a || a(i)))
                                }
                            }
                        ;(this.set_config(
                            D({}, Er(), o, { name: s, token: e, callback_fn: (s === kr ? s : kr + '.' + s) + '._jsc' })
                        ),
                        (this._jsc = function () {}),
                        (null != S && null !== (n = S.rrweb) && void 0 !== n && n.record) ||
                            (null != S && S.rrwebRecord)) &&
                            (this.__loaded_recorder_version =
                                null == S || null === (u = S.rrweb) || void 0 === u ? void 0 : u.version)
                        if (
                            ((this.persistence = new et(this.config)),
                            (this._requestQueue = new At(this._handle_queued_event.bind(this))),
                            (this._retryQueue = new Fn(this.config.on_xhr_error, this.rateLimiter)),
                            (this.__captureHooks = []),
                            (this.__request_queue = []),
                            (this.sessionManager = new Hn(this.config, this.persistence)),
                            (this.sessionPersistence =
                                'sessionStorage' === this.config.persistence
                                    ? this.persistence
                                    : new et(t(t({}, this.config), {}, { persistence: 'sessionStorage' }))),
                            this._gdpr_init(),
                            o.segment
                                ? ((this.config.get_device_id = function () {
                                      return o.segment.user().anonymousId()
                                  }),
                                  o.segment.user().id() &&
                                      (this.register({ distinct_id: o.segment.user().id() }),
                                      this.persistence.set_user_state('identified')),
                                  o.segment.register(this.segmentIntegration()).then(l('segmentRegister')))
                                : l('segmentRegister')(),
                            void 0 !== (null === (r = o.bootstrap) || void 0 === r ? void 0 : r.distinctID))
                        ) {
                            var d,
                                f,
                                p = this.config.get_device_id(Mn()),
                                h =
                                    null !== (d = o.bootstrap) && void 0 !== d && d.isIdentifiedID
                                        ? p
                                        : o.bootstrap.distinctID
                            this.persistence.set_user_state(
                                null !== (f = o.bootstrap) && void 0 !== f && f.isIdentifiedID
                                    ? 'identified'
                                    : 'anonymous'
                            ),
                                this.register({ distinct_id: o.bootstrap.distinctID, $device_id: h })
                        }
                        if (this._hasBootstrappedFeatureFlags()) {
                            var g,
                                _,
                                v = Object.keys(
                                    (null === (g = o.bootstrap) || void 0 === g ? void 0 : g.featureFlags) || {}
                                )
                                    .filter(function (e) {
                                        var t, n
                                        return !(
                                            null === (t = o.bootstrap) ||
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
                                                (null === (n = o.bootstrap) ||
                                                void 0 === n ||
                                                null === (r = n.featureFlags) ||
                                                void 0 === r
                                                    ? void 0
                                                    : r[t]) || !1),
                                            e
                                        )
                                    }, {}),
                                m = Object.keys(
                                    (null === (_ = o.bootstrap) || void 0 === _ ? void 0 : _.featureFlagPayloads) || {}
                                )
                                    .filter(function (e) {
                                        return v[e]
                                    })
                                    .reduce(function (e, t) {
                                        var n, r, i, s
                                        null !== (n = o.bootstrap) &&
                                            void 0 !== n &&
                                            null !== (r = n.featureFlagPayloads) &&
                                            void 0 !== r &&
                                            r[t] &&
                                            (e[t] =
                                                null === (i = o.bootstrap) ||
                                                void 0 === i ||
                                                null === (s = i.featureFlagPayloads) ||
                                                void 0 === s
                                                    ? void 0
                                                    : s[t])
                                        return e
                                    }, {})
                            this.featureFlags.receivedFeatureFlags({ featureFlags: v, featureFlagPayloads: m })
                        }
                        if (!this.get_distinct_id()) {
                            var y = this.config.get_device_id(Mn())
                            this.register_once({ distinct_id: y, $device_id: y }, ''),
                                this.persistence.set_user_state('anonymous')
                        }
                        S.addEventListener &&
                            S.addEventListener(
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
                                this.capture('$pageview', { title: E.title }, { send_instantly: !0 }),
                            e || (new bt(this).call(), this.featureFlags.resetRequestQueue())
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
                            M(this.__request_queue, function (t) {
                                e._send_request.apply(e, h(t))
                            }),
                            (this.__request_queue = []),
                            this._start_queue_if_opted_in()
                    },
                },
                {
                    key: '_prepare_callback',
                    value: function (e, t) {
                        if (q(e)) return null
                        if (Sr)
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
                        this.__compress_and_send_json_request(e, r, n || wr, br)
                    },
                },
                {
                    key: '__compress_and_send_json_request',
                    value: function (e, n, r, i) {
                        var o = (function (e, n, r) {
                                return e === exports.Compression.GZipJS
                                    ? [
                                          wn(kn(n), { mtime: 0 }),
                                          t(
                                              t({}, r),
                                              {},
                                              { blob: !0, urlQueryArgs: { compression: exports.Compression.GZipJS } }
                                          ),
                                      ]
                                    : [{ data: X(n) }, r]
                            })(
                                this.compression[exports.Compression.GZipJS]
                                    ? exports.Compression.GZipJS
                                    : exports.Compression.Base64,
                                n,
                                r
                            ),
                            s = p(o, 2),
                            a = s[0],
                            u = s[1]
                        this._send_request(e, a, u, i)
                    },
                },
                {
                    key: '_send_request',
                    value: function (e, n, r, i) {
                        if (this.__loaded && this._retryQueue && !this.rateLimiter.isRateLimited(r._batchKey))
                            if (xr) this.__request_queue.push([e, n, r, i])
                            else {
                                var o = {
                                    method: this.config.api_method,
                                    transport: this.config.api_transport,
                                    verbose: this.config.verbose,
                                }
                                ;(r = D(o, r || {})), Sr || (r.method = 'GET')
                                var s = 'sendBeacon' in S.navigator && 'sendBeacon' === r.transport
                                if (((e = Sn(e, r.urlQueryArgs || {}, { ip: this.config.ip })), s))
                                    try {
                                        S.navigator.sendBeacon(e, xn(n, t(t({}, r), {}, { sendBeacon: !0 })))
                                    } catch (e) {}
                                else if (Sr)
                                    try {
                                        En({
                                            url: e,
                                            data: n,
                                            headers: this.config.xhr_headers,
                                            options: r,
                                            callback: i,
                                            retriesPerformedSoFar: 0,
                                            retryQueue: this._retryQueue,
                                            onXHRError: this.config.on_xhr_error,
                                            onResponse: this.rateLimiter.checkForLimiting,
                                        })
                                    } catch (e) {
                                        console.error(e)
                                    }
                                else {
                                    var a,
                                        u = E.createElement('script')
                                    ;(u.type = 'text/javascript'), (u.async = !0), (u.defer = !0), (u.src = e)
                                    var c = E.getElementsByTagName('script')[0]
                                    null === (a = c.parentNode) || void 0 === a || a.insertBefore(u, c)
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
                        M(e, function (e) {
                            e &&
                                ((t = e[0]),
                                j(t)
                                    ? o.push(e)
                                    : 'function' == typeof e
                                    ? e.call(n)
                                    : j(e) && 'alias' === t
                                    ? r.push(e)
                                    : j(e) && -1 !== t.indexOf('capture') && 'function' == typeof n[t]
                                    ? o.push(e)
                                    : i.push(e))
                        })
                        var s = function (e, t) {
                            M(
                                e,
                                function (e) {
                                    if (j(e[0])) {
                                        var n = t
                                        A(e, function (e) {
                                            n = n[e[0]].apply(n, e.slice(1))
                                        })
                                    } else this[e[0]].apply(this, e.slice(1))
                                },
                                t
                            )
                        }
                        s(r, this), s(i, this), s(o, this)
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
                    value: function (e, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wr
                        if (!this.__loaded || !this.sessionPersistence || !this._requestQueue)
                            return T.unintializedWarning('posthog.capture')
                        if (
                            !(function (e, t) {
                                var n = !1
                                try {
                                    var r = e.config.token,
                                        i = e.config.respect_dnt,
                                        o = e.config.opt_out_capturing_persistence_type,
                                        s = e.config.opt_out_capturing_cookie_prefix || void 0,
                                        a = e.config.window
                                    r &&
                                        (n = Ot(r, {
                                            respectDnt: i,
                                            persistenceType: o,
                                            persistencePrefix: s,
                                            window: a,
                                        }))
                                } catch (e) {
                                    t || console.error('Unexpected error when checking capturing opt-out status: ' + e)
                                }
                                return n
                            })(this, !1)
                        ) {
                            var i = (r = r || wr).transport
                            if ((i && (r.transport = i), q(e) || 'string' != typeof e))
                                console.error('No event name provided to posthog.capture')
                            else if (!ee(P, this.config.custom_blocked_useragents)) {
                                this.sessionPersistence.update_search_keyword(),
                                    this.config.store_google && this.sessionPersistence.update_campaign_params(),
                                    this.config.save_referrer && this.sessionPersistence.update_referrer_info()
                                var o = {
                                    uuid: Mn(),
                                    event: e,
                                    properties: this._calculate_event_properties(e, n || {}),
                                }
                                '$identify' === e && ((o.$set = r.$set), (o.$set_once = r.$set_once)),
                                    ((o = J(
                                        o,
                                        r._noTruncate ? null : this.config.properties_string_max_length
                                    )).timestamp = r.timestamp || new Date())
                                var s = t(t({}, o.properties.$set), o.$set)
                                B(s) || this.setPersonPropertiesForFlags(s),
                                    this.config.debug && T.log('PostHog.js send', o)
                                var a = JSON.stringify(o),
                                    u = this.config.api_host + (r.endpoint || '/e/'),
                                    c = r !== wr
                                return (
                                    !this.config.request_batching || (c && !r._batchKey) || r.send_instantly
                                        ? this.__compress_and_send_json_request(u, a, r)
                                        : this._requestQueue.enqueue(u, o, r),
                                    this._invokeCaptureHooks(e, o),
                                    o
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
                            A(this.__captureHooks, function (t) {
                                return t(e)
                            })
                    },
                },
                {
                    key: '_calculate_event_properties',
                    value: function (e, n) {
                        if (!this.persistence || !this.sessionPersistence) return n
                        var r = this.persistence.remove_event_timer(e),
                            i = t({}, n)
                        if (((i.token = this.config.token), '$snapshot' === e)) {
                            var o = t(t({}, this.persistence.properties()), this.sessionPersistence.properties())
                            return (i.distinct_id = o.distinct_id), i
                        }
                        var s = oe.properties()
                        if (this.sessionManager) {
                            var a = this.sessionManager.checkAndGetSessionAndWindowId(),
                                u = a.sessionId,
                                c = a.windowId
                            ;(i.$session_id = u), (i.$window_id = c)
                        }
                        if (this.config.__preview_measure_pageview_stats) {
                            var l = {}
                            '$pageview' === e
                                ? (l = this.pageViewManager.doPageView())
                                : '$pageleave' === e && (l = this.pageViewManager.doPageLeave()),
                                (i = D(i, l))
                        }
                        if (('$pageview' === e && (i.title = E.title), '$performance_event' === e)) {
                            var d = this.persistence.properties()
                            return (i.distinct_id = d.distinct_id), (i.$current_url = s.$current_url), i
                        }
                        if (void 0 !== r) {
                            var f = new Date().getTime() - r
                            i.$duration = parseFloat((f / 1e3).toFixed(3))
                        }
                        i = D(
                            {},
                            oe.properties(),
                            this.persistence.properties(),
                            this.sessionPersistence.properties(),
                            i
                        )
                        var p = this.config.property_blacklist
                        j(p)
                            ? A(p, function (e) {
                                  delete i[e]
                              })
                            : console.error('Invalid value for property_blacklist config: ' + p)
                        var h = this.config.sanitize_properties
                        return h && (i = h(i, e)), i
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
                        this.register(s({}, e, t))
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
                        if (!this.__loaded || !this.persistence) return T.unintializedWarning('posthog.identify')
                        if (e) {
                            var r = this.get_distinct_id()
                            if ((this.register({ $user_id: e }), !this.get_property('$device_id'))) {
                                var i = r
                                this.register_once({ $had_persisted_distinct_id: !0, $device_id: i }, '')
                            }
                            e !== r &&
                                e !== this.get_property(be) &&
                                (this.unregister(be), this.register({ distinct_id: e }))
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
                                e !== r && (this.reloadFeatureFlags(), this.unregister(Te))
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
                    value: function (e, n, r) {
                        if (e && n) {
                            var i = this.getGroups()
                            i[e] !== n && this.resetGroupPropertiesForFlags(e),
                                this.register({ $groups: t(t({}, i), {}, s({}, e, n)) }),
                                r &&
                                    (this.capture('$groupidentify', { $group_type: e, $group_key: n, $group_set: r }),
                                    this.setGroupPropertiesForFlags(s({}, e, r))),
                                i[e] === n || r || this.reloadFeatureFlags()
                        } else console.error('posthog.group requires a group type and group key')
                    },
                },
                {
                    key: 'resetGroups',
                    value: function () {
                        this.register({ $groups: {} }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
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
                        if (!this.__loaded) return T.unintializedWarning('posthog.reset')
                        var o = this.get_property('$device_id')
                        null === (t = this.persistence) || void 0 === t || t.clear(),
                            null === (n = this.sessionPersistence) || void 0 === n || n.clear(),
                            null === (r = this.persistence) || void 0 === r || r.set_user_state('anonymous'),
                            null === (i = this.sessionManager) || void 0 === i || i.resetSessionId()
                        var s = this.config.get_device_id(Mn())
                        this.register_once({ distinct_id: s, $device_id: e ? s : o }, '')
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
                            var s,
                                a = null !== (s = e.timestampLookBack) && void 0 !== s ? s : 10
                            if (!i) return o
                            var u = Math.max(Math.floor((new Date().getTime() - i) / 1e3) - a, 0)
                            o += '?t='.concat(u)
                        }
                        return o
                    },
                },
                {
                    key: 'alias',
                    value: function (e, t) {
                        return e === this.get_property(ye)
                            ? (T.critical('Attempting to create alias for existing People user - aborting.'), -2)
                            : (q(t) && (t = this.get_distinct_id()),
                              e !== t
                                  ? (this._register_single(be, e),
                                    this.capture('$create_alias', { alias: e, distinct_id: t }))
                                  : (console.error('alias matches current distinct_id - skipping api call.'),
                                    this.identify(e),
                                    -1))
                    },
                },
                {
                    key: 'set_config',
                    value: function (e) {
                        var n,
                            r,
                            i = t({}, this.config)
                        L(e) &&
                            (D(this.config, e),
                            this.config.persistence_name || (this.config.persistence_name = this.config.cookie_name),
                            this.config.disable_persistence ||
                                (this.config.disable_persistence = this.config.disable_cookie),
                            null === (n = this.persistence) || void 0 === n || n.update_config(this.config),
                            null === (r = this.sessionPersistence) || void 0 === r || r.update_config(this.config),
                            ze.is_supported() && 'true' === ze.get('ph_debug') && (this.config.debug = !0),
                            this.config.debug && (m.DEBUG = !0),
                            this.sessionRecording &&
                                void 0 !== e.disable_session_recording &&
                                i.disable_session_recording !== e.disable_session_recording &&
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
                            t = null !== (e = this.config.name) && void 0 !== e ? e : kr
                        return t !== kr && (t = kr + '.' + t), t
                    },
                },
                {
                    key: '_gdpr_init',
                    value: function () {
                        'localStorage' === this.config.opt_out_capturing_persistence_type &&
                            ze.is_supported() &&
                            (!this.has_opted_in_capturing() &&
                                this.has_opted_in_capturing({ persistence_type: 'cookie' }) &&
                                this.opt_in_capturing({ enable_persistence: !1 }),
                            !this.has_opted_out_capturing() &&
                                this.has_opted_out_capturing({ persistence_type: 'cookie' }) &&
                                this.opt_out_capturing({ clear_persistence: !1 }),
                            this.clear_opt_in_out_capturing({ persistence_type: 'cookie', enable_persistence: !1 })),
                            this.has_opted_out_capturing()
                                ? this._gdpr_update_persistence({ clear_persistence: !0 })
                                : this.has_opted_in_capturing() ||
                                  (!this.config.opt_out_capturing_by_default && !Ve.get('ph_optout')) ||
                                  (Ve.remove('ph_optout'),
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
                            (t = D(
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
                            ze.is_supported() ||
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
                        ;(e = D({ enable_persistence: !0 }, e || {})),
                            this._gdpr_call_func(Et, e),
                            this._gdpr_update_persistence(e)
                    },
                },
                {
                    key: 'opt_out_capturing',
                    value: function (e) {
                        var t = D({ clear_persistence: !0 }, e || {})
                        this._gdpr_call_func(Pt, t), this._gdpr_update_persistence(t)
                    },
                },
                {
                    key: 'has_opted_in_capturing',
                    value: function (e) {
                        return this._gdpr_call_func(Ft, e)
                    },
                },
                {
                    key: 'has_opted_out_capturing',
                    value: function (e) {
                        return this._gdpr_call_func(Ot, e)
                    },
                },
                {
                    key: 'clear_opt_in_out_capturing',
                    value: function (e) {
                        var t = D({ enable_persistence: !0 }, null != e ? e : {})
                        this._gdpr_call_func(It, t), this._gdpr_update_persistence(t)
                    },
                },
                {
                    key: 'debug',
                    value: function (e) {
                        !1 === e
                            ? (S.console.log("You've disabled debug mode."),
                              localStorage && localStorage.removeItem('ph_debug'),
                              this.set_config({ debug: !1 }))
                            : (S.console.log(
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
    for (var n = 0; n < t.length; n++) e.prototype[t[n]] = W(e.prototype[t[n]])
})(Fr, ['identify'])
var Or = {},
    Ir = function () {
        hr.init = function (e, t, n) {
            if (n)
                return (
                    hr[n] ||
                        (hr[n] = Or[n] =
                            Pr(e || '', t || {}, n, function (e) {
                                ;(hr[n] = Or[n] = e), e._loaded()
                            })),
                    hr[n]
                )
            var r = hr
            return (
                Or[kr]
                    ? (r = Or[kr])
                    : e &&
                      ((r = Pr(e, t || {}, kr, function (e) {
                          ;(Or[kr] = e), e._loaded()
                      })),
                      (Or[kr] = r)),
                (hr = r),
                pr === fr.INIT_SNIPPET && (S[kr] = hr),
                A(Or, function (e, t) {
                    t !== kr && (hr[t] = e)
                }),
                r
            )
        }
    },
    $r = function () {
        function e() {
            e.done ||
                ((e.done = !0),
                (xr = !1),
                A(Or, function (e) {
                    e._dom_loaded()
                }))
        }
        E.addEventListener && ('complete' === E.readyState ? e() : E.addEventListener('DOMContentLoaded', e, !1)),
            re(S, 'load', e, !0)
    }
var Rr = ((pr = fr.INIT_MODULE), (hr = new Fr()), Ir(), hr.init(), $r(), hr)
;(exports.PostHog = Fr), (exports.default = Rr), (exports.posthog = Rr)
//# sourceMappingURL=module.js.map
