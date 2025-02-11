!(function () {
    'use strict'
    var e,
        t = function () {
            return (
                (t =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in (t = arguments[n]))
                                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
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
            o,
            a = n.call(e),
            i = []
        try {
            for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; ) i.push(r.value)
        } catch (e) {
            o = { error: e }
        } finally {
            try {
                r && !r.done && (n = a.return) && n.call(a)
            } finally {
                if (o) throw o.error
            }
        }
        return i
    }
    function o(e, t, n) {
        if (n || 2 === arguments.length)
            for (var r, o = 0, a = t.length; o < a; o++)
                (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
        return e.concat(r || Array.prototype.slice.call(t))
    }
    function a(e) {
        return (
            (a =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e
                      }
                    : function (e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e
                      }),
            a(e)
        )
    }
    function i(e) {
        var t,
            n = null === (t = e) || void 0 === t ? void 0 : t.host
        return Boolean(n && n.shadowRoot && n.shadowRoot === e)
    }
    function s(e) {
        var t = e.maskInputOptions,
            n = e.tagName,
            r = e.type,
            o = e.value,
            a = e.maskInputFn,
            i = o || ''
        return (t[n.toLowerCase()] || t[r]) && (i = a ? a(i) : '*'.repeat(i.length)), i
    }
    !(function (e) {
        ;(e[(e.Document = 0)] = 'Document'),
            (e[(e.DocumentType = 1)] = 'DocumentType'),
            (e[(e.Element = 2)] = 'Element'),
            (e[(e.Text = 3)] = 'Text'),
            (e[(e.CDATA = 4)] = 'CDATA'),
            (e[(e.Comment = 5)] = 'Comment')
    })(e || (e = {}))
    var u = '__rrweb_original__'
    var l,
        c,
        d = 1,
        p = new RegExp('[^a-z0-9-_:]'),
        f = -2
    function m(e) {
        try {
            var t = e.rules || e.cssRules
            return t ? Array.from(t).map(h).join('') : null
        } catch (e) {
            return null
        }
    }
    function h(e) {
        var t = e.cssText
        if (
            (function (e) {
                return 'styleSheet' in e
            })(e)
        )
            try {
                t = m(e.styleSheet) || t
            } catch (e) {}
        return t
    }
    var v = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        y = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
        g = /^(data:)([^,]*),(.*)/i
    function b(e, t) {
        return (e || '').replace(v, function (e, n, r, o, a, i) {
            var s,
                u = r || a || i,
                l = n || o || ''
            if (!u) return e
            if (!y.test(u)) return 'url(' + l + u + l + ')'
            if (g.test(u)) return 'url(' + l + u + l + ')'
            if ('/' === u[0])
                return (
                    'url(' +
                    l +
                    (((s = t).indexOf('//') > -1 ? s.split('/').slice(0, 3).join('/') : s.split('/')[0]).split('?')[0] +
                        u) +
                    l +
                    ')'
                )
            var c = t.split('/'),
                d = u.split('/')
            c.pop()
            for (var p = 0, f = d; p < f.length; p++) {
                var m = f[p]
                '.' !== m && ('..' === m ? c.pop() : c.push(m))
            }
            return 'url(' + l + c.join('/') + l + ')'
        })
    }
    var S,
        C,
        w,
        k,
        I,
        x,
        O = /^[^ \t\n\r\u000c]+/,
        M = /^[, \t\n\r\u000c]+/
    function T(e, t) {
        if (!t || '' === t.trim()) return t
        var n = e.createElement('a')
        return (n.href = t), n.href
    }
    function N() {
        var e = document.createElement('a')
        return (e.href = ''), e.href
    }
    function E(e, t, n, r) {
        return 'src' === n || ('href' === n && r) || ('xlink:href' === n && r && '#' !== r[0])
            ? T(e, r)
            : 'background' !== n || !r || ('table' !== t && 'td' !== t && 'th' !== t)
            ? 'srcset' === n && r
                ? (function (e, t) {
                      if ('' === t.trim()) return t
                      var n = 0
                      function r(e) {
                          var r,
                              o = e.exec(t.substring(n))
                          return o ? ((r = o[0]), (n += r.length), r) : ''
                      }
                      for (var o = []; r(M), !(n >= t.length); ) {
                          var a = r(O)
                          if (',' === a.slice(-1)) (a = T(e, a.substring(0, a.length - 1))), o.push(a)
                          else {
                              var i = ''
                              a = T(e, a)
                              for (var s = !1; ; ) {
                                  var u = t.charAt(n)
                                  if ('' === u) {
                                      o.push((a + i).trim())
                                      break
                                  }
                                  if (s) ')' === u && (s = !1)
                                  else {
                                      if (',' === u) {
                                          ;(n += 1), o.push((a + i).trim())
                                          break
                                      }
                                      '(' === u && (s = !0)
                                  }
                                  ;(i += u), (n += 1)
                              }
                          }
                      }
                      return o.join(', ')
                  })(e, r)
                : 'style' === n && r
                ? b(r, N())
                : 'object' === t && 'data' === n && r
                ? T(e, r)
                : r
            : T(e, r)
    }
    function L(e, t, n) {
        if (!e) return !1
        if (e.nodeType === e.ELEMENT_NODE) {
            if ('string' == typeof t) {
                if (e.classList.contains(t)) return !0
            } else
                for (var r = 0; r < e.classList.length; r++) {
                    var o = e.classList[r]
                    if (t.test(o)) return !0
                }
            return !(!n || !e.matches(n)) || L(e.parentNode, t, n)
        }
        return e.nodeType, e.TEXT_NODE, L(e.parentNode, t, n)
    }
    function R(t, n) {
        var r,
            o,
            a,
            i,
            d = n.doc,
            f = n.blockClass,
            h = n.blockSelector,
            v = n.maskTextClass,
            y = n.maskTextSelector,
            g = n.inlineStylesheet,
            S = n.maskInputOptions,
            C = void 0 === S ? {} : S,
            w = n.maskTextFn,
            k = n.maskInputFn,
            I = n.dataURLOptions,
            x = void 0 === I ? {} : I,
            O = n.inlineImages,
            M = n.recordCanvas,
            T = n.keepIframeSrcFn
        if (d.__sn) {
            var R = d.__sn.id
            o = 1 === R ? void 0 : R
        }
        switch (t.nodeType) {
            case t.DOCUMENT_NODE:
                return 'CSS1Compat' !== t.compatMode
                    ? { type: e.Document, childNodes: [], compatMode: t.compatMode, rootId: o }
                    : { type: e.Document, childNodes: [], rootId: o }
            case t.DOCUMENT_TYPE_NODE:
                return { type: e.DocumentType, name: t.name, publicId: t.publicId, systemId: t.systemId, rootId: o }
            case t.ELEMENT_NODE:
                for (
                    var _ = (function (e, t, n) {
                            if ('string' == typeof t) {
                                if (e.classList.contains(t)) return !0
                            } else
                                for (var r = 0; r < e.classList.length; r++) {
                                    var o = e.classList[r]
                                    if (t.test(o)) return !0
                                }
                            return !!n && e.matches(n)
                        })(t, f, h),
                        D = (function (e) {
                            if (e instanceof HTMLFormElement) return 'form'
                            var t = e.tagName.toLowerCase().trim()
                            return p.test(t) ? 'div' : t
                        })(t),
                        F = {},
                        A = 0,
                        P = Array.from(t.attributes);
                    A < P.length;
                    A++
                ) {
                    var z = P[A],
                        W = z.name,
                        j = z.value
                    F[W] = E(d, D, W, j)
                }
                if ('link' === D && g) {
                    var U = Array.from(d.styleSheets).find(function (e) {
                            return e.href === t.href
                        }),
                        V = null
                    U && (V = m(U)), V && (delete F.rel, delete F.href, (F._cssText = b(V, U.href)))
                }
                if ('style' === D && t.sheet && !(t.innerText || t.textContent || '').trim().length)
                    (V = m(t.sheet)) && (F._cssText = b(V, N()))
                if ('input' === D || 'textarea' === D || 'select' === D) {
                    j = t.value
                    'radio' !== F.type && 'checkbox' !== F.type && 'submit' !== F.type && 'button' !== F.type && j
                        ? (F.value = s({ type: F.type, tagName: D, value: j, maskInputOptions: C, maskInputFn: k }))
                        : t.checked && (F.checked = t.checked)
                }
                if (
                    ('option' === D && (t.selected && !C.select ? (F.selected = !0) : delete F.selected),
                    'canvas' === D && M)
                )
                    if ('2d' === t.__context)
                        (function (e) {
                            var t = e.getContext('2d')
                            if (!t) return !0
                            for (var n = 0; n < e.width; n += 50)
                                for (var r = 0; r < e.height; r += 50) {
                                    var o = t.getImageData,
                                        a = u in o ? o[u] : o
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
                        })(t) || (F.rr_dataURL = t.toDataURL(x.type, x.quality))
                    else if (!('__context' in t)) {
                        var G = t.toDataURL(x.type, x.quality),
                            H = document.createElement('canvas')
                        ;(H.width = t.width),
                            (H.height = t.height),
                            G !== H.toDataURL(x.type, x.quality) && (F.rr_dataURL = G)
                    }
                if ('img' === D && O) {
                    l || ((l = d.createElement('canvas')), (c = l.getContext('2d')))
                    var q = t,
                        B = q.crossOrigin
                    q.crossOrigin = 'anonymous'
                    var $ = function () {
                        try {
                            ;(l.width = q.naturalWidth),
                                (l.height = q.naturalHeight),
                                c.drawImage(q, 0, 0),
                                (F.rr_dataURL = l.toDataURL(x.type, x.quality))
                        } catch (e) {
                            console.warn('Cannot inline img src=' + q.currentSrc + '! Error: ' + e)
                        }
                        B ? (F.crossOrigin = B) : delete F.crossOrigin
                    }
                    q.complete && 0 !== q.naturalWidth ? $() : (q.onload = $)
                }
                if (
                    (('audio' !== D && 'video' !== D) ||
                        ((F.rr_mediaState = t.paused ? 'paused' : 'played'), (F.rr_mediaCurrentTime = t.currentTime)),
                    t.scrollLeft && (F.rr_scrollLeft = t.scrollLeft),
                    t.scrollTop && (F.rr_scrollTop = t.scrollTop),
                    _)
                ) {
                    var X = t.getBoundingClientRect(),
                        Y = X.width,
                        K = X.height
                    F = { class: F.class, rr_width: Y + 'px', rr_height: K + 'px' }
                }
                return (
                    'iframe' !== D || T(F.src) || (t.contentDocument || (F.rr_src = F.src), delete F.src),
                    {
                        type: e.Element,
                        tagName: D,
                        attributes: F,
                        childNodes: [],
                        isSVG: ((i = t), Boolean('svg' === i.tagName || i.ownerSVGElement) || void 0),
                        needBlock: _,
                        rootId: o,
                    }
                )
            case t.TEXT_NODE:
                var J = t.parentNode && t.parentNode.tagName,
                    Z = t.textContent,
                    Q = 'STYLE' === J || void 0,
                    ee = 'SCRIPT' === J || void 0
                if (Q && Z) {
                    try {
                        t.nextSibling ||
                            t.previousSibling ||
                            ((null === (r = t.parentNode.sheet) || void 0 === r ? void 0 : r.cssRules) &&
                                (Z = (a = t.parentNode.sheet).cssRules
                                    ? Array.from(a.cssRules)
                                          .map(function (e) {
                                              return e.cssText || ''
                                          })
                                          .join('')
                                    : ''))
                    } catch (e) {
                        console.warn("Cannot get CSS styles from text's parentNode. Error: " + e, t)
                    }
                    Z = b(Z, N())
                }
                return (
                    ee && (Z = 'SCRIPT_PLACEHOLDER'),
                    !Q && !ee && L(t, v, y) && Z && (Z = w ? w(Z) : Z.replace(/[\S]/g, '*')),
                    { type: e.Text, textContent: Z || '', isStyle: Q, rootId: o }
                )
            case t.CDATA_SECTION_NODE:
                return { type: e.CDATA, textContent: '', rootId: o }
            case t.COMMENT_NODE:
                return { type: e.Comment, textContent: t.textContent || '', rootId: o }
            default:
                return !1
        }
    }
    function _(e) {
        return void 0 === e ? '' : e.toLowerCase()
    }
    function D(t, n) {
        var r,
            o = n.doc,
            a = n.map,
            s = n.blockClass,
            u = n.blockSelector,
            l = n.maskTextClass,
            c = n.maskTextSelector,
            p = n.skipChild,
            m = void 0 !== p && p,
            h = n.inlineStylesheet,
            v = void 0 === h || h,
            y = n.maskInputOptions,
            g = void 0 === y ? {} : y,
            b = n.maskTextFn,
            S = n.maskInputFn,
            C = n.slimDOMOptions,
            w = n.dataURLOptions,
            k = void 0 === w ? {} : w,
            I = n.inlineImages,
            x = void 0 !== I && I,
            O = n.recordCanvas,
            M = void 0 !== O && O,
            T = n.onSerialize,
            N = n.onIframeLoad,
            E = n.iframeLoadTimeout,
            L = void 0 === E ? 5e3 : E,
            F = n.keepIframeSrcFn,
            A =
                void 0 === F
                    ? function () {
                          return !1
                      }
                    : F,
            P = n.preserveWhiteSpace,
            z = void 0 === P || P,
            W = R(t, {
                doc: o,
                blockClass: s,
                blockSelector: u,
                maskTextClass: l,
                maskTextSelector: c,
                inlineStylesheet: v,
                maskInputOptions: g,
                maskTextFn: b,
                maskInputFn: S,
                dataURLOptions: k,
                inlineImages: x,
                recordCanvas: M,
                keepIframeSrcFn: A,
            })
        if (!W) return console.warn(t, 'not serialized'), null
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
                                      (_(t.attributes.name).match(/^msapplication-tile(image|color)$/) ||
                                          'application-name' === _(t.attributes.name) ||
                                          'icon' === _(t.attributes.rel) ||
                                          'apple-touch-icon' === _(t.attributes.rel) ||
                                          'shortcut icon' === _(t.attributes.rel))))
                          )
                              return !0
                          if ('meta' === t.tagName) {
                              if (n.headMetaDescKeywords && _(t.attributes.name).match(/^description|keywords$/))
                                  return !0
                              if (
                                  n.headMetaSocial &&
                                  (_(t.attributes.property).match(/^(og|twitter|fb):/) ||
                                      _(t.attributes.name).match(/^(og|twitter):/) ||
                                      'pinterest' === _(t.attributes.name))
                              )
                                  return !0
                              if (
                                  n.headMetaRobots &&
                                  ('robots' === _(t.attributes.name) ||
                                      'googlebot' === _(t.attributes.name) ||
                                      'bingbot' === _(t.attributes.name))
                              )
                                  return !0
                              if (n.headMetaHttpEquiv && void 0 !== t.attributes['http-equiv']) return !0
                              if (
                                  n.headMetaAuthorship &&
                                  ('author' === _(t.attributes.name) ||
                                      'generator' === _(t.attributes.name) ||
                                      'framework' === _(t.attributes.name) ||
                                      'publisher' === _(t.attributes.name) ||
                                      'progid' === _(t.attributes.name) ||
                                      _(t.attributes.property).match(/^article:/) ||
                                      _(t.attributes.property).match(/^product:/))
                              )
                                  return !0
                              if (
                                  n.headMetaVerification &&
                                  ('google-site-verification' === _(t.attributes.name) ||
                                      'yandex-verification' === _(t.attributes.name) ||
                                      'csrf-token' === _(t.attributes.name) ||
                                      'p:domain_verify' === _(t.attributes.name) ||
                                      'verify-v1' === _(t.attributes.name) ||
                                      'verification' === _(t.attributes.name) ||
                                      'shopify-checkout-api-token' === _(t.attributes.name))
                              )
                                  return !0
                          }
                      }
                      return !1
                  })(W, C) &&
                  (z || W.type !== e.Text || W.isStyle || W.textContent.replace(/^\s+|\s+$/gm, '').length)
                ? d++
                : f
        var j = Object.assign(W, { id: r })
        if (((t.__sn = j), r === f)) return null
        ;(a[r] = t), T && T(t)
        var U = !m
        if (
            (j.type === e.Element &&
                ((U = U && !j.needBlock), delete j.needBlock, t.shadowRoot && (j.isShadowHost = !0)),
            (j.type === e.Document || j.type === e.Element) && U)
        ) {
            C.headWhitespace && W.type === e.Element && 'head' === W.tagName && (z = !1)
            for (
                var V = {
                        doc: o,
                        map: a,
                        blockClass: s,
                        blockSelector: u,
                        maskTextClass: l,
                        maskTextSelector: c,
                        skipChild: m,
                        inlineStylesheet: v,
                        maskInputOptions: g,
                        maskTextFn: b,
                        maskInputFn: S,
                        slimDOMOptions: C,
                        dataURLOptions: k,
                        inlineImages: x,
                        recordCanvas: M,
                        preserveWhiteSpace: z,
                        onSerialize: T,
                        onIframeLoad: N,
                        iframeLoadTimeout: L,
                        keepIframeSrcFn: A,
                    },
                    G = 0,
                    H = Array.from(t.childNodes);
                G < H.length;
                G++
            ) {
                ;($ = D(H[G], V)) && j.childNodes.push($)
            }
            if (
                (function (e) {
                    return e.nodeType === e.ELEMENT_NODE
                })(t) &&
                t.shadowRoot
            )
                for (var q = 0, B = Array.from(t.shadowRoot.childNodes); q < B.length; q++) {
                    var $
                    ;($ = D(B[q], V)) && (($.isShadow = !0), j.childNodes.push($))
                }
        }
        return (
            t.parentNode && i(t.parentNode) && (j.isShadow = !0),
            j.type === e.Element &&
                'iframe' === j.tagName &&
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
                            r.location.href === i && e.src !== i && '' !== e.src
                                ? e.addEventListener('load', t)
                                : setTimeout(t, 0)
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
                        if (e && N) {
                            var n = D(e, {
                                doc: e,
                                map: a,
                                blockClass: s,
                                blockSelector: u,
                                maskTextClass: l,
                                maskTextSelector: c,
                                skipChild: !1,
                                inlineStylesheet: v,
                                maskInputOptions: g,
                                maskTextFn: b,
                                maskInputFn: S,
                                slimDOMOptions: C,
                                dataURLOptions: k,
                                inlineImages: x,
                                recordCanvas: M,
                                preserveWhiteSpace: z,
                                onSerialize: T,
                                onIframeLoad: N,
                                iframeLoadTimeout: L,
                                keepIframeSrcFn: A,
                            })
                            n && N(t, n)
                        }
                    },
                    L
                ),
            j
        )
    }
    function F(e, t, n) {
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
    })(S || (S = {})),
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
        })(C || (C = {})),
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
        })(w || (w = {})),
        (function (e) {
            ;(e[(e['2D'] = 0)] = '2D'), (e[(e.WebGL = 1)] = 'WebGL'), (e[(e.WebGL2 = 2)] = 'WebGL2')
        })(k || (k = {})),
        (function (e) {
            ;(e[(e.Play = 0)] = 'Play'),
                (e[(e.Pause = 1)] = 'Pause'),
                (e[(e.Seeked = 2)] = 'Seeked'),
                (e[(e.VolumeChange = 3)] = 'VolumeChange')
        })(I || (I = {})),
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
        })(x || (x = {}))
    var A =
            'Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.',
        P = {
            map: {},
            getId: function () {
                return console.error(A), -1
            },
            getNode: function () {
                return console.error(A), null
            },
            removeNodeFromMap: function () {
                console.error(A)
            },
            has: function () {
                return console.error(A), !1
            },
            reset: function () {
                console.error(A)
            },
        }
    function z(e, t, n) {
        void 0 === n && (n = {})
        var r = null,
            o = 0
        return function (a) {
            var i = Date.now()
            o || !1 !== n.leading || (o = i)
            var s = t - (i - o),
                u = this,
                l = arguments
            s <= 0 || s > t
                ? (r && (clearTimeout(r), (r = null)), (o = i), e.apply(u, l))
                : r ||
                  !1 === n.trailing ||
                  (r = setTimeout(function () {
                      ;(o = !1 === n.leading ? 0 : Date.now()), (r = null), e.apply(u, l)
                  }, s))
        }
    }
    function W(e, t, n, r, o) {
        void 0 === o && (o = window)
        var a = o.Object.getOwnPropertyDescriptor(e, t)
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
                return W(e, t, a || {}, !0)
            }
        )
    }
    function j(e, t, n) {
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
    function U() {
        return (
            window.innerHeight ||
            (document.documentElement && document.documentElement.clientHeight) ||
            (document.body && document.body.clientHeight)
        )
    }
    function V() {
        return (
            window.innerWidth ||
            (document.documentElement && document.documentElement.clientWidth) ||
            (document.body && document.body.clientWidth)
        )
    }
    function G(e, t) {
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
            return n || G(e.parentNode, t)
        }
        return e.nodeType, e.TEXT_NODE, G(e.parentNode, t)
    }
    function H(e) {
        return '__sn' in e && e.__sn.id === f
    }
    function q(e, t) {
        if (i(e)) return !1
        var n = t.getId(e)
        return (
            !t.has(n) ||
            ((!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || q(e.parentNode, t)))
        )
    }
    function B(e) {
        return Boolean(e.changedTouches)
    }
    function $(t) {
        return '__sn' in t && t.__sn.type === e.Element && 'iframe' === t.__sn.tagName
    }
    function X(e) {
        return Boolean(null == e ? void 0 : e.shadowRoot)
    }
    function Y(e) {
        return '__ln' in e
    }
    'undefined' != typeof window &&
        window.Proxy &&
        window.Reflect &&
        (P = new Proxy(P, {
            get: function (e, t, n) {
                return 'map' === t && console.error(A), Reflect.get(e, t, n)
            },
        }))
    var K = (function () {
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
                    if (((e.__ln = t), e.previousSibling && Y(e.previousSibling))) {
                        var n = e.previousSibling.__ln.next
                        ;(t.next = n),
                            (t.previous = e.previousSibling.__ln),
                            (e.previousSibling.__ln.next = t),
                            n && (n.previous = t)
                    } else if (e.nextSibling && Y(e.nextSibling) && e.nextSibling.__ln.previous) {
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
        J = function (e, t) {
            return ''.concat(e, '@').concat(t)
        }
    function Z(e) {
        return '__sn' in e
    }
    function Q(e, t) {
        e.delete(t),
            t.childNodes.forEach(function (t) {
                return Q(e, t)
            })
    }
    function ee(e, t, n) {
        var r = t.parentNode
        if (!r) return !1
        var o = n.getId(r)
        return (
            !!e.some(function (e) {
                return e.id === o
            }) || ee(e, r, n)
        )
    }
    function te(e, t) {
        var n = t.parentNode
        return !!n && (!!e.has(n) || te(e, n))
    }
    var ne = (function () {
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
                        var t, r, o, a
                        if (!e.frozen && !e.locked) {
                            for (
                                var s = [],
                                    u = new K(),
                                    l = function (t) {
                                        for (var n = t, r = f; r === f; )
                                            r = (n = n && n.nextSibling) && e.mirror.getId(n)
                                        return r
                                    },
                                    c = function (t) {
                                        for (
                                            var n,
                                                r,
                                                o,
                                                a,
                                                c,
                                                d = t.getRootNode
                                                    ? null === (n = t.getRootNode()) || void 0 === n
                                                        ? void 0
                                                        : n.host
                                                    : null,
                                                p = d;
                                            null ===
                                                (o =
                                                    null === (r = null == p ? void 0 : p.getRootNode) || void 0 === r
                                                        ? void 0
                                                        : r.call(p)) || void 0 === o
                                                ? void 0
                                                : o.host;

                                        )
                                            p =
                                                (null ===
                                                    (c =
                                                        null === (a = null == p ? void 0 : p.getRootNode) ||
                                                        void 0 === a
                                                            ? void 0
                                                            : a.call(p)) || void 0 === c
                                                    ? void 0
                                                    : c.host) || null
                                        var f = !(e.doc.contains(t) || (null !== p && e.doc.contains(p)))
                                        if (t.parentNode && !f) {
                                            var m = i(t.parentNode) ? e.mirror.getId(d) : e.mirror.getId(t.parentNode),
                                                h = l(t)
                                            if (-1 === m || -1 === h) return u.addNode(t)
                                            var v = D(t, {
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
                                                    $(n) && e.iframeManager.addIframe(n),
                                                        X(t) && e.shadowDomManager.addShadowRoot(t.shadowRoot, document)
                                                },
                                                onIframeLoad: function (t, n) {
                                                    e.iframeManager.attachIframe(t, n),
                                                        e.shadowDomManager.observeAttachShadow(t)
                                                },
                                            })
                                            v && s.push({ parentId: m, nextId: h, node: v })
                                        }
                                    };
                                e.mapRemoves.length;

                            )
                                e.mirror.removeNodeFromMap(e.mapRemoves.shift())
                            try {
                                for (var d = n(e.movedSet), p = d.next(); !p.done; p = d.next()) {
                                    var m = p.value
                                    ;(ee(e.removes, m, e.mirror) && !e.movedSet.has(m.parentNode)) || c(m)
                                }
                            } catch (e) {
                                t = { error: e }
                            } finally {
                                try {
                                    p && !p.done && (r = d.return) && r.call(d)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            try {
                                for (var h = n(e.addedSet), v = h.next(); !v.done; v = h.next()) {
                                    m = v.value
                                    te(e.droppedSet, m) || ee(e.removes, m, e.mirror)
                                        ? te(e.movedSet, m)
                                            ? c(m)
                                            : e.droppedSet.add(m)
                                        : c(m)
                                }
                            } catch (e) {
                                o = { error: e }
                            } finally {
                                try {
                                    v && !v.done && (a = h.return) && a.call(h)
                                } finally {
                                    if (o) throw o.error
                                }
                            }
                            for (var y = null; u.length; ) {
                                var g = null
                                if (y) {
                                    var b = e.mirror.getId(y.value.parentNode),
                                        S = l(y.value)
                                    ;-1 !== b && -1 !== S && (g = y)
                                }
                                if (!g)
                                    for (var C = u.length - 1; C >= 0; C--) {
                                        var w = u.get(C)
                                        if (w) {
                                            ;(b = e.mirror.getId(w.value.parentNode)), (S = l(w.value))
                                            if (-1 !== b && -1 !== S) {
                                                g = w
                                                break
                                            }
                                        }
                                    }
                                if (!g) {
                                    for (; u.head; ) u.removeNode(u.head.value)
                                    break
                                }
                                ;(y = g.previous), u.removeNode(g.value), c(g.value)
                            }
                            var k = {
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
                                adds: s,
                            }
                            ;(k.texts.length || k.attributes.length || k.removes.length || k.adds.length) &&
                                ((e.texts = []),
                                (e.attributes = []),
                                (e.removes = []),
                                (e.addedSet = new Set()),
                                (e.movedSet = new Set()),
                                (e.droppedSet = new Set()),
                                (e.movedMap = {}),
                                e.mutationCb(k))
                        }
                    }),
                    (this.processMutation = function (t) {
                        var r, o, a, u
                        if (!H(t.target))
                            switch (t.type) {
                                case 'characterData':
                                    var l = t.target.textContent
                                    G(t.target, e.blockClass) ||
                                        l === t.oldValue ||
                                        e.texts.push({
                                            value:
                                                L(t.target, e.maskTextClass, e.maskTextSelector) && l
                                                    ? e.maskTextFn
                                                        ? e.maskTextFn(l)
                                                        : l.replace(/[\S]/g, '*')
                                                    : l,
                                            node: t.target,
                                        })
                                    break
                                case 'attributes':
                                    var c = t.target
                                    l = t.target.getAttribute(t.attributeName)
                                    if (
                                        ('value' === t.attributeName &&
                                            (l = s({
                                                maskInputOptions: e.maskInputOptions,
                                                tagName: t.target.tagName,
                                                type: t.target.getAttribute('type'),
                                                value: l,
                                                maskInputFn: e.maskInputFn,
                                            })),
                                        G(t.target, e.blockClass) || l === t.oldValue)
                                    )
                                        return
                                    var d = e.attributes.find(function (e) {
                                        return e.node === t.target
                                    })
                                    if (
                                        (d || ((d = { node: t.target, attributes: {} }), e.attributes.push(d)),
                                        'style' === t.attributeName)
                                    ) {
                                        var p = e.doc.createElement('span')
                                        t.oldValue && p.setAttribute('style', t.oldValue),
                                            (void 0 !== d.attributes.style && null !== d.attributes.style) ||
                                                (d.attributes.style = {})
                                        var f = d.attributes.style
                                        try {
                                            for (var m = n(Array.from(c.style)), h = m.next(); !h.done; h = m.next()) {
                                                var v = h.value,
                                                    y = c.style.getPropertyValue(v),
                                                    g = c.style.getPropertyPriority(v)
                                                ;(y === p.style.getPropertyValue(v) &&
                                                    g === p.style.getPropertyPriority(v)) ||
                                                    (f[v] = '' === g ? y : [y, g])
                                            }
                                        } catch (e) {
                                            r = { error: e }
                                        } finally {
                                            try {
                                                h && !h.done && (o = m.return) && o.call(m)
                                            } finally {
                                                if (r) throw r.error
                                            }
                                        }
                                        try {
                                            for (var b = n(Array.from(p.style)), S = b.next(); !S.done; S = b.next()) {
                                                v = S.value
                                                '' === c.style.getPropertyValue(v) && (f[v] = !1)
                                            }
                                        } catch (e) {
                                            a = { error: e }
                                        } finally {
                                            try {
                                                S && !S.done && (u = b.return) && u.call(b)
                                            } finally {
                                                if (a) throw a.error
                                            }
                                        }
                                    } else
                                        d.attributes[t.attributeName] = E(e.doc, t.target.tagName, t.attributeName, l)
                                    break
                                case 'childList':
                                    t.addedNodes.forEach(function (n) {
                                        return e.genAdds(n, t.target)
                                    }),
                                        t.removedNodes.forEach(function (n) {
                                            var r = e.mirror.getId(n),
                                                o = i(t.target)
                                                    ? e.mirror.getId(t.target.host)
                                                    : e.mirror.getId(t.target)
                                            G(t.target, e.blockClass) ||
                                                H(n) ||
                                                (e.addedSet.has(n)
                                                    ? (Q(e.addedSet, n), e.droppedSet.add(n))
                                                    : (e.addedSet.has(t.target) && -1 === r) ||
                                                      q(t.target, e.mirror) ||
                                                      (e.movedSet.has(n) && e.movedMap[J(r, o)]
                                                          ? Q(e.movedSet, n)
                                                          : e.removes.push({
                                                                parentId: o,
                                                                id: r,
                                                                isShadow: !!i(t.target) || void 0,
                                                            })),
                                                e.mapRemoves.push(n))
                                        })
                            }
                    }),
                    (this.genAdds = function (t, n) {
                        if (!n || !G(n, e.blockClass)) {
                            if (Z(t)) {
                                if (H(t)) return
                                e.movedSet.add(t)
                                var r = null
                                n && Z(n) && (r = n.__sn.id), r && (e.movedMap[J(t.__sn.id, r)] = !0)
                            } else e.addedSet.add(t), e.droppedSet.delete(t)
                            G(t, e.blockClass) ||
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
        })(),
        re = [],
        oe = 'undefined' != typeof CSSGroupingRule,
        ae = 'undefined' != typeof CSSMediaRule,
        ie = 'undefined' != typeof CSSSupportsRule,
        se = 'undefined' != typeof CSSConditionRule
    function ue(e) {
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
    function le(e, t) {
        var n,
            r,
            o = new ne()
        re.push(o), o.init(e)
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
        var s = new a(o.processMutations.bind(o))
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
    function ce(e) {
        var t = e.mouseInteractionCb,
            n = e.doc,
            r = e.mirror,
            o = e.blockClass,
            a = e.sampling
        if (!1 === a.mouseInteraction) return function () {}
        var i = !0 === a.mouseInteraction || void 0 === a.mouseInteraction ? {} : a.mouseInteraction,
            s = []
        return (
            Object.keys(w)
                .filter(function (e) {
                    return Number.isNaN(Number(e)) && !e.endsWith('_Departed') && !1 !== i[e]
                })
                .forEach(function (e) {
                    var a = e.toLowerCase(),
                        i = (function (e) {
                            return function (n) {
                                var a = ue(n)
                                if (!G(a, o)) {
                                    var i = B(n) ? n.changedTouches[0] : n
                                    if (i) {
                                        var s = r.getId(a),
                                            u = i.clientX,
                                            l = i.clientY
                                        t({ type: w[e], id: s, x: u, y: l })
                                    }
                                }
                            }
                        })(e)
                    s.push(F(a, i, n))
                }),
            function () {
                s.forEach(function (e) {
                    return e()
                })
            }
        )
    }
    function de(e) {
        var t = e.scrollCb,
            n = e.doc,
            r = e.mirror,
            o = e.blockClass
        return F(
            'scroll',
            z(function (e) {
                var a = ue(e)
                if (a && !G(a, o)) {
                    var i = r.getId(a)
                    if (a === n) {
                        var s = n.scrollingElement || n.documentElement
                        t({ id: i, x: s.scrollLeft, y: s.scrollTop })
                    } else t({ id: i, x: a.scrollLeft, y: a.scrollTop })
                }
            }, e.sampling.scroll || 100),
            n
        )
    }
    function pe(e, n) {
        var r = t({}, e)
        return n || delete r.userTriggered, r
    }
    var fe = ['INPUT', 'TEXTAREA', 'SELECT'],
        me = new WeakMap()
    function he(e) {
        return (function (e, t) {
            if (
                (oe && e.parentRule instanceof CSSGroupingRule) ||
                (ae && e.parentRule instanceof CSSMediaRule) ||
                (ie && e.parentRule instanceof CSSSupportsRule) ||
                (se && e.parentRule instanceof CSSConditionRule)
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
    function ve(e, a) {
        var i, u
        void 0 === a && (a = {})
        var l = e.doc.defaultView
        if (!l) return function () {}
        !(function (e, t) {
            var n = e.mutationCb,
                a = e.mousemoveCb,
                i = e.mouseInteractionCb,
                s = e.scrollCb,
                u = e.viewportResizeCb,
                l = e.inputCb,
                c = e.mediaInteractionCb,
                d = e.styleSheetRuleCb,
                p = e.styleDeclarationCb,
                f = e.canvasMutationCb,
                m = e.fontCb
            ;(e.mutationCb = function () {
                for (var e = [], a = 0; a < arguments.length; a++) e[a] = arguments[a]
                t.mutation && t.mutation.apply(t, o([], r(e), !1)), n.apply(void 0, o([], r(e), !1))
            }),
                (e.mousemoveCb = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
                    t.mousemove && t.mousemove.apply(t, o([], r(e), !1)), a.apply(void 0, o([], r(e), !1))
                }),
                (e.mouseInteractionCb = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
                    t.mouseInteraction && t.mouseInteraction.apply(t, o([], r(e), !1)), i.apply(void 0, o([], r(e), !1))
                }),
                (e.scrollCb = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
                    t.scroll && t.scroll.apply(t, o([], r(e), !1)), s.apply(void 0, o([], r(e), !1))
                }),
                (e.viewportResizeCb = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
                    t.viewportResize && t.viewportResize.apply(t, o([], r(e), !1)), u.apply(void 0, o([], r(e), !1))
                }),
                (e.inputCb = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
                    t.input && t.input.apply(t, o([], r(e), !1)), l.apply(void 0, o([], r(e), !1))
                }),
                (e.mediaInteractionCb = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
                    t.mediaInteaction && t.mediaInteaction.apply(t, o([], r(e), !1)), c.apply(void 0, o([], r(e), !1))
                }),
                (e.styleSheetRuleCb = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
                    t.styleSheetRule && t.styleSheetRule.apply(t, o([], r(e), !1)), d.apply(void 0, o([], r(e), !1))
                }),
                (e.styleDeclarationCb = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
                    t.styleDeclaration && t.styleDeclaration.apply(t, o([], r(e), !1)), p.apply(void 0, o([], r(e), !1))
                }),
                (e.canvasMutationCb = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
                    t.canvasMutation && t.canvasMutation.apply(t, o([], r(e), !1)), f.apply(void 0, o([], r(e), !1))
                }),
                (e.fontCb = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
                    t.font && t.font.apply(t, o([], r(e), !1)), m.apply(void 0, o([], r(e), !1))
                })
        })(e, a)
        var c = le(e, e.doc),
            d = (function (e) {
                var t = e.mousemoveCb,
                    n = e.sampling,
                    r = e.doc,
                    o = e.mirror
                if (!1 === n.mousemove) return function () {}
                var a,
                    i = 'number' == typeof n.mousemove ? n.mousemove : 50,
                    s = 'number' == typeof n.mousemoveCallback ? n.mousemoveCallback : 500,
                    u = [],
                    l = z(function (e) {
                        var n = Date.now() - a
                        t(
                            u.map(function (e) {
                                return (e.timeOffset -= n), e
                            }),
                            e
                        ),
                            (u = []),
                            (a = null)
                    }, s),
                    c = z(
                        function (e) {
                            var t = ue(e),
                                n = B(e) ? e.changedTouches[0] : e,
                                r = n.clientX,
                                i = n.clientY
                            a || (a = Date.now()),
                                u.push({ x: r, y: i, id: o.getId(t), timeOffset: Date.now() - a }),
                                l(
                                    'undefined' != typeof DragEvent && e instanceof DragEvent
                                        ? C.Drag
                                        : e instanceof MouseEvent
                                        ? C.MouseMove
                                        : C.TouchMove
                                )
                        },
                        i,
                        { trailing: !1 }
                    ),
                    d = [F('mousemove', c, r), F('touchmove', c, r), F('drag', c, r)]
                return function () {
                    d.forEach(function (e) {
                        return e()
                    })
                }
            })(e),
            p = ce(e),
            f = de(e),
            m = (function (e) {
                var t = e.viewportResizeCb,
                    n = -1,
                    r = -1
                return F(
                    'resize',
                    z(function () {
                        var e = U(),
                            o = V()
                        ;(n === e && r === o) || (t({ width: Number(o), height: Number(e) }), (n = e), (r = o))
                    }, 200),
                    window
                )
            })(e),
            h = (function (e) {
                var n = e.inputCb,
                    a = e.doc,
                    i = e.mirror,
                    u = e.blockClass,
                    l = e.ignoreClass,
                    c = e.maskInputOptions,
                    d = e.maskInputFn,
                    p = e.sampling,
                    f = e.userTriggeredOnInput
                function m(e) {
                    var t = ue(e),
                        n = e.isTrusted
                    if (
                        (t && 'OPTION' === t.tagName && (t = t.parentElement),
                        t && t.tagName && !(fe.indexOf(t.tagName) < 0) && !G(t, u))
                    ) {
                        var r = t.type
                        if (!t.classList.contains(l)) {
                            var o = t.value,
                                i = !1
                            'radio' === r || 'checkbox' === r
                                ? (i = t.checked)
                                : (c[t.tagName.toLowerCase()] || c[r]) &&
                                  (o = s({
                                      maskInputOptions: c,
                                      tagName: t.tagName,
                                      type: r,
                                      value: o,
                                      maskInputFn: d,
                                  })),
                                h(t, pe({ text: o, isChecked: i, userTriggered: n }, f))
                            var p = t.name
                            'radio' === r &&
                                p &&
                                i &&
                                a.querySelectorAll('input[type="radio"][name="'.concat(p, '"]')).forEach(function (e) {
                                    e !== t && h(e, pe({ text: e.value, isChecked: !i, userTriggered: !1 }, f))
                                })
                        }
                    }
                }
                function h(e, r) {
                    var o = me.get(e)
                    if (!o || o.text !== r.text || o.isChecked !== r.isChecked) {
                        me.set(e, r)
                        var a = i.getId(e)
                        n(t(t({}, r), { id: a }))
                    }
                }
                var v = ('last' === p.input ? ['change'] : ['input', 'change']).map(function (e) {
                        return F(e, m, a)
                    }),
                    y = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value'),
                    g = [
                        [HTMLInputElement.prototype, 'value'],
                        [HTMLInputElement.prototype, 'checked'],
                        [HTMLSelectElement.prototype, 'value'],
                        [HTMLTextAreaElement.prototype, 'value'],
                        [HTMLSelectElement.prototype, 'selectedIndex'],
                        [HTMLOptionElement.prototype, 'selected'],
                    ]
                return (
                    y &&
                        y.set &&
                        v.push.apply(
                            v,
                            o(
                                [],
                                r(
                                    g.map(function (e) {
                                        return W(e[0], e[1], {
                                            set: function () {
                                                m({ target: this })
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
                    o = e.sampling,
                    a = function (e) {
                        return z(function (o) {
                            var a = ue(o)
                            if (a && !G(a, n)) {
                                var i = a,
                                    s = i.currentTime,
                                    u = i.volume,
                                    l = i.muted
                                t({ type: e, id: r.getId(a), currentTime: s, volume: u, muted: l })
                            }
                        }, o.media || 500)
                    },
                    i = [F('play', a(0)), F('pause', a(1)), F('seeked', a(2)), F('volumechange', a(3))]
                return function () {
                    i.forEach(function (e) {
                        return e()
                    })
                }
            })(e),
            y = (function (e, t) {
                var n = e.styleSheetRuleCb,
                    a = e.mirror,
                    i = t.win,
                    s = i.CSSStyleSheet.prototype.insertRule
                i.CSSStyleSheet.prototype.insertRule = function (e, t) {
                    var r = a.getId(this.ownerNode)
                    return -1 !== r && n({ id: r, adds: [{ rule: e, index: t }] }), s.apply(this, arguments)
                }
                var u = i.CSSStyleSheet.prototype.deleteRule
                i.CSSStyleSheet.prototype.deleteRule = function (e) {
                    var t = a.getId(this.ownerNode)
                    return -1 !== t && n({ id: t, removes: [{ index: e }] }), u.apply(this, arguments)
                }
                var l = {}
                oe
                    ? (l.CSSGroupingRule = i.CSSGroupingRule)
                    : (ae && (l.CSSMediaRule = i.CSSMediaRule),
                      se && (l.CSSConditionRule = i.CSSConditionRule),
                      ie && (l.CSSSupportsRule = i.CSSSupportsRule))
                var c = {}
                return (
                    Object.entries(l).forEach(function (e) {
                        var t = r(e, 2),
                            i = t[0],
                            s = t[1]
                        ;(c[i] = { insertRule: s.prototype.insertRule, deleteRule: s.prototype.deleteRule }),
                            (s.prototype.insertRule = function (e, t) {
                                var s = a.getId(this.parentStyleSheet.ownerNode)
                                return (
                                    -1 !== s &&
                                        n({
                                            id: s,
                                            adds: [{ rule: e, index: o(o([], r(he(this)), !1), [t || 0], !1) }],
                                        }),
                                    c[i].insertRule.apply(this, arguments)
                                )
                            }),
                            (s.prototype.deleteRule = function (e) {
                                var t = a.getId(this.parentStyleSheet.ownerNode)
                                return (
                                    -1 !== t && n({ id: t, removes: [{ index: o(o([], r(he(this)), !1), [e], !1) }] }),
                                    c[i].deleteRule.apply(this, arguments)
                                )
                            })
                    }),
                    function () {
                        ;(i.CSSStyleSheet.prototype.insertRule = s),
                            (i.CSSStyleSheet.prototype.deleteRule = u),
                            Object.entries(l).forEach(function (e) {
                                var t = r(e, 2),
                                    n = t[0],
                                    o = t[1]
                                ;(o.prototype.insertRule = c[n].insertRule), (o.prototype.deleteRule = c[n].deleteRule)
                            })
                    }
                )
            })(e, { win: l }),
            g = (function (e, t) {
                var n = e.styleDeclarationCb,
                    r = e.mirror,
                    o = t.win,
                    a = o.CSSStyleDeclaration.prototype.setProperty
                o.CSSStyleDeclaration.prototype.setProperty = function (e, t, o) {
                    var i,
                        s,
                        u = r.getId(
                            null ===
                                (s = null === (i = this.parentRule) || void 0 === i ? void 0 : i.parentStyleSheet) ||
                                void 0 === s
                                ? void 0
                                : s.ownerNode
                        )
                    return (
                        -1 !== u &&
                            n({ id: u, set: { property: e, value: t, priority: o }, index: he(this.parentRule) }),
                        a.apply(this, arguments)
                    )
                }
                var i = o.CSSStyleDeclaration.prototype.removeProperty
                return (
                    (o.CSSStyleDeclaration.prototype.removeProperty = function (e) {
                        var t,
                            o,
                            a = r.getId(
                                null ===
                                    (o =
                                        null === (t = this.parentRule) || void 0 === t ? void 0 : t.parentStyleSheet) ||
                                    void 0 === o
                                    ? void 0
                                    : o.ownerNode
                            )
                        return (
                            -1 !== a && n({ id: a, remove: { property: e }, index: he(this.parentRule) }),
                            i.apply(this, arguments)
                        )
                    }),
                    function () {
                        ;(o.CSSStyleDeclaration.prototype.setProperty = a),
                            (o.CSSStyleDeclaration.prototype.removeProperty = i)
                    }
                )
            })(e, { win: l }),
            b = e.collectFonts
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
                      var s = j(n.fonts, 'add', function (e) {
                          return function (n) {
                              return (
                                  setTimeout(function () {
                                      var e = a.get(n)
                                      e && (t(e), a.delete(n))
                                  }, 0),
                                  e.apply(this, [n])
                              )
                          }
                      })
                      return (
                          o.push(function () {
                              r.FontFace = i
                          }),
                          o.push(s),
                          function () {
                              o.forEach(function (e) {
                                  return e()
                              })
                          }
                      )
                  })(e)
                : function () {},
            S = []
        try {
            for (var w = n(e.plugins), k = w.next(); !k.done; k = w.next()) {
                var I = k.value
                S.push(I.observer(I.callback, l, I.options))
            }
        } catch (e) {
            i = { error: e }
        } finally {
            try {
                k && !k.done && (u = w.return) && u.call(w)
            } finally {
                if (i) throw i.error
            }
        }
        return function () {
            re.forEach(function (e) {
                return e.reset()
            }),
                c.disconnect(),
                d(),
                p(),
                f(),
                m(),
                h(),
                v(),
                y(),
                g(),
                b(),
                S.forEach(function (e) {
                    return e()
                })
        }
    }
    var ye = (function () {
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
        ge = (function () {
            function e(e) {
                ;(this.restorePatches = []),
                    (this.mutationCb = e.mutationCb),
                    (this.scrollCb = e.scrollCb),
                    (this.bypassOptions = e.bypassOptions),
                    (this.mirror = e.mirror)
                var t = this
                this.restorePatches.push(
                    j(HTMLElement.prototype, 'attachShadow', function (e) {
                        return function () {
                            var n = e.apply(this, arguments)
                            return this.shadowRoot && t.addShadowRoot(this.shadowRoot, this.ownerDocument), n
                        }
                    })
                )
            }
            return (
                (e.prototype.addShadowRoot = function (e, n) {
                    le(
                        t(t({}, this.bypassOptions), {
                            doc: n,
                            mutationCb: this.mutationCb,
                            mirror: this.mirror,
                            shadowDomManager: this,
                        }),
                        e
                    ),
                        de(t(t({}, this.bypassOptions), { scrollCb: this.scrollCb, doc: e, mirror: this.mirror }))
                }),
                (e.prototype.observeAttachShadow = function (e) {
                    if (e.contentWindow) {
                        var t = this
                        this.restorePatches.push(
                            j(e.contentWindow.HTMLElement.prototype, 'attachShadow', function (n) {
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
        var be = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            Se = 'undefined' == typeof Uint8Array ? [] : new Uint8Array(256),
            Ce = 0;
        Ce < be.length;
        Ce++
    )
        Se[be.charCodeAt(Ce)] = Ce
    var we = function (e) {
            var t,
                n = new Uint8Array(e),
                r = n.length,
                o = ''
            for (t = 0; t < r; t += 3)
                (o += be[n[t] >> 2]),
                    (o += be[((3 & n[t]) << 4) | (n[t + 1] >> 4)]),
                    (o += be[((15 & n[t + 1]) << 2) | (n[t + 2] >> 6)]),
                    (o += be[63 & n[t + 2]])
            return (
                r % 3 == 2
                    ? (o = o.substring(0, o.length - 1) + '=')
                    : r % 3 == 1 && (o = o.substring(0, o.length - 2) + '=='),
                o
            )
        },
        ke = new Map()
    var Ie = function (e, t, n) {
        if (e && (Me(e, t) || 'object' === a(e))) {
            var r = (function (e, t) {
                    var n = ke.get(e)
                    return n || ((n = new Map()), ke.set(e, n)), n.has(t) || n.set(t, []), n.get(t)
                })(n, e.constructor.name),
                o = r.indexOf(e)
            return -1 === o && ((o = r.length), r.push(e)), o
        }
    }
    function xe(e, t, n) {
        return e instanceof Array
            ? e.map(function (e) {
                  return xe(e, t, n)
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
            ? { rr_type: e.constructor.name, base64: we(e) }
            : e instanceof DataView
            ? { rr_type: e.constructor.name, args: [xe(e.buffer, t, n), e.byteOffset, e.byteLength] }
            : e instanceof HTMLImageElement
            ? { rr_type: e.constructor.name, src: e.src }
            : e instanceof ImageData
            ? { rr_type: e.constructor.name, args: [xe(e.data, t, n), e.width, e.height] }
            : Me(e, t) || 'object' === a(e)
            ? { rr_type: e.constructor.name, index: Ie(e, t, n) }
            : e
    }
    var Oe = function (e, t, n) {
            return o([], r(e), !1).map(function (e) {
                return xe(e, t, n)
            })
        },
        Me = function (e, t) {
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
    function Te(e, t, a, i, s, u) {
        var l,
            c,
            d = [],
            p = Object.getOwnPropertyNames(e),
            f = function (n) {
                try {
                    if ('function' != typeof e[n]) return 'continue'
                    var l = j(e, n, function (l) {
                        return function () {
                            for (var c = [], d = 0; d < arguments.length; d++) c[d] = arguments[d]
                            var p = l.apply(this, c)
                            if ((Ie(p, u, e), !G(this.canvas, i))) {
                                s.getId(this.canvas)
                                var f = Oe(o([], r(c), !1), u, e),
                                    m = { type: t, property: n, args: f }
                                a(this.canvas, m)
                            }
                            return p
                        }
                    })
                    d.push(l)
                } catch (r) {
                    var c = W(e, n, {
                        set: function (e) {
                            a(this.canvas, { type: t, property: n, args: [e], setter: !0 })
                        },
                    })
                    d.push(c)
                }
            }
        try {
            for (var m = n(p), h = m.next(); !h.done; h = m.next()) {
                f(h.value)
            }
        } catch (e) {
            l = { error: e }
        } finally {
            try {
                h && !h.done && (c = m.return) && c.call(m)
            } finally {
                if (l) throw l.error
            }
        }
        return d
    }
    var Ne,
        Ee,
        Le = (function () {
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
                    var a = (function (e, t) {
                            var n = []
                            try {
                                var a = j(e.HTMLCanvasElement.prototype, 'getContext', function (e) {
                                    return function (n) {
                                        for (var a = [], i = 1; i < arguments.length; i++) a[i - 1] = arguments[i]
                                        return (
                                            G(this, t) || '__context' in this || (this.__context = n),
                                            e.apply(this, o([n], r(a), !1))
                                        )
                                    }
                                })
                                n.push(a)
                            } catch (e) {
                                console.error('failed to patch HTMLCanvasElement.prototype.getContext')
                            }
                            return function () {
                                n.forEach(function (e) {
                                    return e()
                                })
                            }
                        })(e, t),
                        i = (function (e, t, a, i) {
                            var s,
                                u,
                                l = [],
                                c = Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype),
                                d = function (n) {
                                    try {
                                        if ('function' != typeof t.CanvasRenderingContext2D.prototype[n])
                                            return 'continue'
                                        var i = j(t.CanvasRenderingContext2D.prototype, n, function (t) {
                                            return function () {
                                                for (var i = this, s = [], u = 0; u < arguments.length; u++)
                                                    s[u] = arguments[u]
                                                return (
                                                    G(this.canvas, a) ||
                                                        setTimeout(function () {
                                                            var t = o([], r(s), !1)
                                                            if (
                                                                'drawImage' === n &&
                                                                t[0] &&
                                                                t[0] instanceof HTMLCanvasElement
                                                            ) {
                                                                var a = t[0],
                                                                    u = a.getContext('2d'),
                                                                    l =
                                                                        null == u
                                                                            ? void 0
                                                                            : u.getImageData(0, 0, a.width, a.height),
                                                                    c = null == l ? void 0 : l.data
                                                                t[0] = JSON.stringify(c)
                                                            }
                                                            e(i.canvas, { type: k['2D'], property: n, args: t })
                                                        }, 0),
                                                    t.apply(this, s)
                                                )
                                            }
                                        })
                                        l.push(i)
                                    } catch (r) {
                                        var s = W(t.CanvasRenderingContext2D.prototype, n, {
                                            set: function (t) {
                                                e(this.canvas, { type: k['2D'], property: n, args: [t], setter: !0 })
                                            },
                                        })
                                        l.push(s)
                                    }
                                }
                            try {
                                for (var p = n(c), f = p.next(); !f.done; f = p.next()) d(f.value)
                            } catch (e) {
                                s = { error: e }
                            } finally {
                                try {
                                    f && !f.done && (u = p.return) && u.call(p)
                                } finally {
                                    if (s) throw s.error
                                }
                            }
                            return function () {
                                l.forEach(function (e) {
                                    return e()
                                })
                            }
                        })(this.processMutation.bind(this), e, t, this.mirror),
                        s = (function (e, t, n, a) {
                            var i = []
                            return (
                                i.push.apply(
                                    i,
                                    o([], r(Te(t.WebGLRenderingContext.prototype, k.WebGL, e, n, a, t)), !1)
                                ),
                                void 0 !== t.WebGL2RenderingContext &&
                                    i.push.apply(
                                        i,
                                        o([], r(Te(t.WebGL2RenderingContext.prototype, k.WebGL2, e, n, a, t)), !1)
                                    ),
                                function () {
                                    i.forEach(function (e) {
                                        return e()
                                    })
                                }
                            )
                        })(this.processMutation.bind(this), e, t, this.mirror)
                    this.resetObservers = function () {
                        a(), i(), s()
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
                            this.mutationCb({ id: t, type: o, commands: r }), this.pendingCanvasMutations.delete(e)
                        }
                    }
                }),
                e
            )
        })()
    function Re(e) {
        return t(t({}, e), { timestamp: Date.now() })
    }
    var _e = {
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
    function De(e) {
        void 0 === e && (e = {})
        var o = e.emit,
            a = e.checkoutEveryNms,
            i = e.checkoutEveryNth,
            s = e.blockClass,
            u = void 0 === s ? 'rr-block' : s,
            l = e.blockSelector,
            c = void 0 === l ? null : l,
            d = e.ignoreClass,
            p = void 0 === d ? 'rr-ignore' : d,
            f = e.maskTextClass,
            m = void 0 === f ? 'rr-mask' : f,
            h = e.maskTextSelector,
            v = void 0 === h ? null : h,
            y = e.inlineStylesheet,
            g = void 0 === y || y,
            b = e.maskAllInputs,
            w = e.maskInputOptions,
            k = e.slimDOMOptions,
            I = e.maskInputFn,
            x = e.maskTextFn,
            O = e.hooks,
            M = e.packFn,
            T = e.sampling,
            N = void 0 === T ? {} : T,
            E = e.mousemoveWait,
            L = e.recordCanvas,
            R = void 0 !== L && L,
            _ = e.userTriggeredOnInput,
            A = void 0 !== _ && _,
            P = e.collectFonts,
            z = void 0 !== P && P,
            W = e.inlineImages,
            j = void 0 !== W && W,
            G = e.plugins,
            H = e.keepIframeSrcFn,
            q =
                void 0 === H
                    ? function () {
                          return !1
                      }
                    : H
        if (!o) throw new Error('emit function is required')
        void 0 !== E && void 0 === N.mousemove && (N.mousemove = E)
        var B,
            Y =
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
                    : void 0 !== w
                    ? w
                    : { password: !0 },
            K =
                !0 === k || 'all' === k
                    ? {
                          script: !0,
                          comment: !0,
                          headFavicon: !0,
                          headWhitespace: !0,
                          headMetaSocial: !0,
                          headMetaRobots: !0,
                          headMetaHttpEquiv: !0,
                          headMetaVerification: !0,
                          headMetaAuthorship: 'all' === k,
                          headMetaDescKeywords: 'all' === k,
                      }
                    : k || {}
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
        var J = 0
        Ne = function (e, t) {
            var r
            if (
                (!(null === (r = re[0]) || void 0 === r ? void 0 : r.isFrozen()) ||
                    e.type === S.FullSnapshot ||
                    (e.type === S.IncrementalSnapshot && e.data.source === C.Mutation) ||
                    re.forEach(function (e) {
                        return e.unfreeze()
                    }),
                o(
                    (function (e) {
                        var t, r
                        try {
                            for (var o = n(G || []), a = o.next(); !a.done; a = o.next()) {
                                var i = a.value
                                i.eventProcessor && (e = i.eventProcessor(e))
                            }
                        } catch (e) {
                            t = { error: e }
                        } finally {
                            try {
                                a && !a.done && (r = o.return) && r.call(o)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return M && (e = M(e)), e
                    })(e),
                    t
                ),
                e.type === S.FullSnapshot)
            )
                (B = e), (J = 0)
            else if (e.type === S.IncrementalSnapshot) {
                if (e.data.source === C.Mutation && e.data.isAttachIframe) return
                J++
                var s = i && J >= i,
                    u = a && e.timestamp - B.timestamp > a
                ;(s || u) && Ee(!0)
            }
        }
        var Z = function (e) {
                Ne(Re({ type: S.IncrementalSnapshot, data: t({ source: C.Mutation }, e) }))
            },
            Q = function (e) {
                return Ne(Re({ type: S.IncrementalSnapshot, data: t({ source: C.Scroll }, e) }))
            },
            ee = function (e) {
                return Ne(Re({ type: S.IncrementalSnapshot, data: t({ source: C.CanvasMutation }, e) }))
            },
            te = new ye({ mutationCb: Z }),
            ne = new Le({ recordCanvas: R, mutationCb: ee, win: window, blockClass: u, mirror: _e }),
            oe = new ge({
                mutationCb: Z,
                scrollCb: Q,
                bypassOptions: {
                    blockClass: u,
                    blockSelector: c,
                    maskTextClass: m,
                    maskTextSelector: v,
                    inlineStylesheet: g,
                    maskInputOptions: Y,
                    maskTextFn: x,
                    maskInputFn: I,
                    recordCanvas: R,
                    inlineImages: j,
                    sampling: N,
                    slimDOMOptions: K,
                    iframeManager: te,
                    canvasManager: ne,
                },
                mirror: _e,
            })
        Ee = function (e) {
            var t, n, o, a
            void 0 === e && (e = !1),
                Ne(Re({ type: S.Meta, data: { href: window.location.href, width: V(), height: U() } }), e),
                re.forEach(function (e) {
                    return e.lock()
                })
            var i = r(
                    (function (e, t) {
                        var n = t || {},
                            r = n.blockClass,
                            o = void 0 === r ? 'rr-block' : r,
                            a = n.blockSelector,
                            i = void 0 === a ? null : a,
                            s = n.maskTextClass,
                            u = void 0 === s ? 'rr-mask' : s,
                            l = n.maskTextSelector,
                            c = void 0 === l ? null : l,
                            d = n.inlineStylesheet,
                            p = void 0 === d || d,
                            f = n.inlineImages,
                            m = void 0 !== f && f,
                            h = n.recordCanvas,
                            v = void 0 !== h && h,
                            y = n.maskAllInputs,
                            g = void 0 !== y && y,
                            b = n.maskTextFn,
                            S = n.maskInputFn,
                            C = n.slimDOM,
                            w = void 0 !== C && C,
                            k = n.dataURLOptions,
                            I = n.preserveWhiteSpace,
                            x = n.onSerialize,
                            O = n.onIframeLoad,
                            M = n.iframeLoadTimeout,
                            T = n.keepIframeSrcFn,
                            N = {}
                        return [
                            D(e, {
                                doc: e,
                                map: N,
                                blockClass: o,
                                blockSelector: i,
                                maskTextClass: u,
                                maskTextSelector: c,
                                skipChild: !1,
                                inlineStylesheet: p,
                                maskInputOptions:
                                    !0 === g
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
                                        : !1 === g
                                        ? { password: !0 }
                                        : g,
                                maskTextFn: b,
                                maskInputFn: S,
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
                                dataURLOptions: k,
                                inlineImages: m,
                                recordCanvas: v,
                                preserveWhiteSpace: I,
                                onSerialize: x,
                                onIframeLoad: O,
                                iframeLoadTimeout: M,
                                keepIframeSrcFn:
                                    void 0 === T
                                        ? function () {
                                              return !1
                                          }
                                        : T,
                            }),
                            N,
                        ]
                    })(document, {
                        blockClass: u,
                        blockSelector: c,
                        maskTextClass: m,
                        maskTextSelector: v,
                        inlineStylesheet: g,
                        maskAllInputs: Y,
                        maskTextFn: x,
                        slimDOM: K,
                        recordCanvas: R,
                        inlineImages: j,
                        onSerialize: function (e) {
                            $(e) && te.addIframe(e), X(e) && oe.addShadowRoot(e.shadowRoot, document)
                        },
                        onIframeLoad: function (e, t) {
                            te.attachIframe(e, t), oe.observeAttachShadow(e)
                        },
                        keepIframeSrcFn: q,
                    }),
                    2
                ),
                s = i[0],
                l = i[1]
            if (!s) return console.warn('Failed to snapshot the document')
            ;(_e.map = l),
                Ne(
                    Re({
                        type: S.FullSnapshot,
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
                                              (a =
                                                  null ===
                                                      (o =
                                                          null === document || void 0 === document
                                                              ? void 0
                                                              : document.body) || void 0 === o
                                                      ? void 0
                                                      : o.parentElement) || void 0 === a
                                              ? void 0
                                              : a.scrollTop) ||
                                          (null === document || void 0 === document
                                              ? void 0
                                              : document.body.scrollTop) ||
                                          0,
                            },
                        },
                    })
                ),
                re.forEach(function (e) {
                    return e.unlock()
                })
        }
        try {
            var ae = []
            ae.push(
                F('DOMContentLoaded', function () {
                    Ne(Re({ type: S.DomContentLoaded, data: {} }))
                })
            )
            var ie = function (e) {
                var n
                return ve(
                    {
                        mutationCb: Z,
                        mousemoveCb: function (e, t) {
                            return Ne(Re({ type: S.IncrementalSnapshot, data: { source: t, positions: e } }))
                        },
                        mouseInteractionCb: function (e) {
                            return Ne(Re({ type: S.IncrementalSnapshot, data: t({ source: C.MouseInteraction }, e) }))
                        },
                        scrollCb: Q,
                        viewportResizeCb: function (e) {
                            return Ne(Re({ type: S.IncrementalSnapshot, data: t({ source: C.ViewportResize }, e) }))
                        },
                        inputCb: function (e) {
                            return Ne(Re({ type: S.IncrementalSnapshot, data: t({ source: C.Input }, e) }))
                        },
                        mediaInteractionCb: function (e) {
                            return Ne(Re({ type: S.IncrementalSnapshot, data: t({ source: C.MediaInteraction }, e) }))
                        },
                        styleSheetRuleCb: function (e) {
                            return Ne(Re({ type: S.IncrementalSnapshot, data: t({ source: C.StyleSheetRule }, e) }))
                        },
                        styleDeclarationCb: function (e) {
                            return Ne(Re({ type: S.IncrementalSnapshot, data: t({ source: C.StyleDeclaration }, e) }))
                        },
                        canvasMutationCb: ee,
                        fontCb: function (e) {
                            return Ne(Re({ type: S.IncrementalSnapshot, data: t({ source: C.Font }, e) }))
                        },
                        blockClass: u,
                        ignoreClass: p,
                        maskTextClass: m,
                        maskTextSelector: v,
                        maskInputOptions: Y,
                        inlineStylesheet: g,
                        sampling: N,
                        recordCanvas: R,
                        inlineImages: j,
                        userTriggeredOnInput: A,
                        collectFonts: z,
                        doc: e,
                        maskInputFn: I,
                        maskTextFn: x,
                        blockSelector: c,
                        slimDOMOptions: K,
                        mirror: _e,
                        iframeManager: te,
                        shadowDomManager: oe,
                        canvasManager: ne,
                        plugins:
                            (null ===
                                (n =
                                    null == G
                                        ? void 0
                                        : G.filter(function (e) {
                                              return e.observer
                                          })) || void 0 === n
                                ? void 0
                                : n.map(function (e) {
                                      return {
                                          observer: e.observer,
                                          options: e.options,
                                          callback: function (t) {
                                              return Ne(Re({ type: S.Plugin, data: { plugin: e.name, payload: t } }))
                                          },
                                      }
                                  })) || [],
                    },
                    O
                )
            }
            te.addLoadListener(function (e) {
                ae.push(ie(e.contentDocument))
            })
            var se = function () {
                Ee(), ae.push(ie(document))
            }
            return (
                'interactive' === document.readyState || 'complete' === document.readyState
                    ? se()
                    : ae.push(
                          F(
                              'load',
                              function () {
                                  Ne(Re({ type: S.Load, data: {} })), se()
                              },
                              window
                          )
                      ),
                function () {
                    ae.forEach(function (e) {
                        return e()
                    })
                }
            )
        } catch (e) {
            console.warn(e)
        }
    }
    ;(De.addCustomEvent = function (e, t) {
        if (!Ne) throw new Error('please add custom event after start recording')
        Ne(Re({ type: S.Custom, data: { tag: e, payload: t } }))
    }),
        (De.freezePage = function () {
            re.forEach(function (e) {
                return e.freeze()
            })
        }),
        (De.takeFullSnapshot = function (e) {
            if (!Ee) throw new Error('please take full snapshot after start recording')
            Ee(e)
        }),
        (De.mirror = _e)
    var Fe = (function () {
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
        Ae = /(^|@)\S+:\d+/,
        Pe = /^\s*at .*(\S+:\d+|\(native\))/m,
        ze = /^(eval@)?(\[native code])?$/,
        We = {
            parse: function (e) {
                if (!e) return []
                if (void 0 !== e.stacktrace || void 0 !== e['opera#sourceloc']) return this.parseOpera(e)
                if (e.stack && e.stack.match(Pe)) return this.parseV8OrIE(e)
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
                        return !!e.match(Pe)
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
                        return new Fe({ functionName: a, fileName: i, lineNumber: o[1], columnNumber: o[2] })
                    }, this)
            },
            parseFFOrSafari: function (e) {
                return e.stack
                    .split('\n')
                    .filter(function (e) {
                        return !e.match(ze)
                    }, this)
                    .map(function (e) {
                        if (
                            (e.indexOf(' > eval') > -1 &&
                                (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ':$1')),
                            -1 === e.indexOf('@') && -1 === e.indexOf(':'))
                        )
                            return new Fe({ functionName: e })
                        var t = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                            n = e.match(t),
                            r = n && n[1] ? n[1] : void 0,
                            o = this.extractLocation(e.replace(t, ''))
                        return new Fe({ functionName: r, fileName: o[0], lineNumber: o[1], columnNumber: o[2] })
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
                    i && r.push(new Fe({ fileName: i[2], lineNumber: parseFloat(i[1]) }))
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
                    i && r.push(new Fe({ functionName: i[3] || void 0, fileName: i[2], lineNumber: parseFloat(i[1]) }))
                }
                return r
            },
            parseOpera11: function (e) {
                return e.stack
                    .split('\n')
                    .filter(function (e) {
                        return !!e.match(Ae) && !e.match(/^Error created at/)
                    }, this)
                    .map(function (e) {
                        var t = e.split('@'),
                            n = this.extractLocation(t.pop()),
                            r =
                                (t.shift() || '')
                                    .replace(/<anonymous function(: (\w+))?>/, '$2')
                                    .replace(/\([^)]*\)/g, '') || void 0
                        return new Fe({ functionName: r, fileName: n[0], lineNumber: n[1], columnNumber: n[2] })
                    }, this)
            },
        }
    function je(e) {
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
            o.length > 1 && (n += ':eq(' + o.indexOf(e) + ')'), (t = n + (t ? '>' + t : '')), (e = r)
        }
        return t
    }
    function Ue(e) {
        return '[object Object]' === Object.prototype.toString.call(e)
    }
    function Ve(e, t) {
        var r, o
        if (0 === t) return !0
        var a = Object.keys(e)
        try {
            for (var i = n(a), s = i.next(); !s.done; s = i.next()) {
                var u = s.value
                if (Ue(e[u]) && Ve(e[u], t - 1)) return !0
            }
        } catch (e) {
            r = { error: e }
        } finally {
            try {
                s && !s.done && (o = i.return) && o.call(i)
            } finally {
                if (r) throw r.error
            }
        }
        return !1
    }
    function Ge(e, t) {
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
            if (null == t) return t
            if (
                (function (e) {
                    if (Ue(e) && Object.keys(e).length > n.numOfKeysLimit) return !0
                    if ('function' == typeof e) return !0
                    if (Ue(e) && Ve(e, n.depthOfLimit)) return !0
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
                    var u = t[s]
                    Array.isArray(u) ? (i[s] = je(u.length ? u[0] : null)) : (i[s] = u)
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
    var He = {
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
    function qe(e, t, a) {
        var i,
            s,
            u,
            l = a.logger
        if (!l) return function () {}
        u = 'string' == typeof l ? t[l] : l
        var c = 0,
            d = []
        if (a.level.includes('error') && window) {
            var p = function (t) {
                var n = t.message,
                    r = t.error,
                    o = We.parse(r).map(function (e) {
                        return e.toString()
                    }),
                    i = [Ge(n, a.stringifyOptions)]
                e({ level: 'error', trace: o, payload: i })
            }
            window.addEventListener('error', p),
                d.push(function () {
                    window && window.removeEventListener('error', p)
                })
        }
        try {
            for (var f = n(a.level), m = f.next(); !m.done; m = f.next()) {
                var h = m.value
                d.push(v(u, h))
            }
        } catch (e) {
            i = { error: e }
        } finally {
            try {
                m && !m.done && (s = f.return) && s.call(f)
            } finally {
                if (i) throw i.error
            }
        }
        return function () {
            d.forEach(function (e) {
                return e()
            })
        }
        function v(t, n) {
            var i = this
            return t[n]
                ? j(t, n, function (t) {
                      return function () {
                          for (var s = [], u = 0; u < arguments.length; u++) s[u] = arguments[u]
                          t.apply(i, s)
                          try {
                              var l = We.parse(new Error())
                                      .map(function (e) {
                                          return e.toString()
                                      })
                                      .splice(1),
                                  d = s.map(function (e) {
                                      return Ge(e, a.stringifyOptions)
                                  })
                              ++c < a.lengthThreshold
                                  ? e({ level: n, trace: l, payload: d })
                                  : c === a.lengthThreshold &&
                                    e({
                                        level: 'warn',
                                        trace: [],
                                        payload: [Ge('The number of log records reached the threshold.')],
                                    })
                          } catch (e) {
                              t.apply(void 0, o(['rrweb logger error:', e], r(s), !1))
                          }
                      }
                  })
                : function () {}
        }
    }
    var Be = 'undefined' != typeof window ? window : {}
    ;(Be.rrweb = { record: De, version: 'v1', rrwebVersion: '1.1.3' }),
        (Be.rrwebConsoleRecord = {
            getRecordConsolePlugin: function (e) {
                return { name: 'rrweb/console@1', observer: qe, options: e ? Object.assign({}, He, e) : He }
            },
        })
})()
//# sourceMappingURL=recorder.js.map
