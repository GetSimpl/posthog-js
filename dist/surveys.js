!(function () {
    'use strict'
    function n(n, e) {
        var t = Object.keys(n)
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(n)
            e &&
                (o = o.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                })),
                t.push.apply(t, o)
        }
        return t
    }
    function e(n, e, t) {
        return (
            e in n
                ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 })
                : (n[e] = t),
            n
        )
    }
    function t(n) {
        return (
            (function (n) {
                if (Array.isArray(n)) return i(n)
            })(n) ||
            (function (n) {
                if (('undefined' != typeof Symbol && null != n[Symbol.iterator]) || null != n['@@iterator'])
                    return Array.from(n)
            })(n) ||
            o(n) ||
            (function () {
                throw new TypeError(
                    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
            })()
        )
    }
    function o(n, e) {
        if (n) {
            if ('string' == typeof n) return i(n, e)
            var t = Object.prototype.toString.call(n).slice(8, -1)
            return (
                'Object' === t && n.constructor && (t = n.constructor.name),
                'Map' === t || 'Set' === t
                    ? Array.from(n)
                    : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? i(n, e)
                    : void 0
            )
        }
    }
    function i(n, e) {
        ;(null == e || e > n.length) && (e = n.length)
        for (var t = 0, o = new Array(e); t < e; t++) o[t] = n[t]
        return o
    }
    function r(n, e) {
        var t = ('undefined' != typeof Symbol && n[Symbol.iterator]) || n['@@iterator']
        if (!t) {
            if (Array.isArray(n) || (t = o(n)) || (e && n && 'number' == typeof n.length)) {
                t && (n = t)
                var i = 0,
                    r = function () {}
                return {
                    s: r,
                    n: function () {
                        return i >= n.length ? { done: !0 } : { done: !1, value: n[i++] }
                    },
                    e: function (n) {
                        throw n
                    },
                    f: r,
                }
            }
            throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
        }
        var a,
            c = !0,
            s = !1
        return {
            s: function () {
                t = t.call(n)
            },
            n: function () {
                var n = t.next()
                return (c = n.done), n
            },
            e: function (n) {
                ;(s = !0), (a = n)
            },
            f: function () {
                try {
                    c || null == t.return || t.return()
                } finally {
                    if (s) throw a
                }
            },
        }
    }
    var a =
            '<svg class="emoji-svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm146 272q66 0 121.5-35.5T682-393h-52q-23 40-63 61.5T480.5-310q-46.5 0-87-21T331-393h-53q26 61 81 96.5T480-261Zm0 181q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z"/></svg>',
        c =
            '<svg class="emoji-svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm20 194h253v-49H354v49ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z"/></svg>',
        s =
            '<svg class="emoji-svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm146.174 116Q413-417 358.5-379.5T278-280h53q22-42 62.173-65t87.5-23Q528-368 567.5-344.5T630-280h52q-25-63-79.826-100-54.826-37-122-37ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z"/></svg>',
        l =
            '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.164752 0.164752C0.384422 -0.0549175 0.740578 -0.0549175 0.960248 0.164752L6 5.20451L11.0398 0.164752C11.2594 -0.0549175 11.6156 -0.0549175 11.8352 0.164752C12.0549 0.384422 12.0549 0.740578 11.8352 0.960248L6.79549 6L11.8352 11.0398C12.0549 11.2594 12.0549 11.6156 11.8352 11.8352C11.6156 12.0549 11.2594 12.0549 11.0398 11.8352L6 6.79549L0.960248 11.8352C0.740578 12.0549 0.384422 12.0549 0.164752 11.8352C-0.0549175 11.6156 -0.0549175 11.2594 0.164752 11.0398L5.20451 6L0.164752 0.960248C-0.0549175 0.740578 -0.0549175 0.384422 0.164752 0.164752Z" fill="black"/></svg>',
        u =
            '<svg width="77" height="14" viewBox="0 0 77 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2415_6911)"><mask id="mask0_2415_6911" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="77" height="14"><path d="M0.5 0H76.5V14H0.5V0Z" fill="white"/></mask><g mask="url(#mask0_2415_6911)"><path d="M5.77226 8.02931C5.59388 8.37329 5.08474 8.37329 4.90634 8.02931L4.4797 7.20672C4.41155 7.07535 4.41155 6.9207 4.4797 6.78933L4.90634 5.96669C5.08474 5.62276 5.59388 5.62276 5.77226 5.96669L6.19893 6.78933C6.26709 6.9207 6.26709 7.07535 6.19893 7.20672L5.77226 8.02931ZM5.77226 12.6946C5.59388 13.0386 5.08474 13.0386 4.90634 12.6946L4.4797 11.872C4.41155 11.7406 4.41155 11.586 4.4797 11.4546L4.90634 10.632C5.08474 10.288 5.59388 10.288 5.77226 10.632L6.19893 11.4546C6.26709 11.586 6.26709 11.7406 6.19893 11.872L5.77226 12.6946Z" fill="#1D4AFF"/><path d="M0.5 10.9238C0.5 10.508 1.02142 10.2998 1.32637 10.5938L3.54508 12.7327C3.85003 13.0267 3.63405 13.5294 3.20279 13.5294H0.984076C0.716728 13.5294 0.5 13.3205 0.5 13.0627V10.9238ZM0.5 8.67083C0.5 8.79459 0.551001 8.91331 0.641783 9.00081L5.19753 13.3927C5.28831 13.4802 5.41144 13.5294 5.53982 13.5294H8.0421C8.47337 13.5294 8.68936 13.0267 8.3844 12.7327L1.32637 5.92856C1.02142 5.63456 0.5 5.84278 0.5 6.25854V8.67083ZM0.5 4.00556C0.5 4.12932 0.551001 4.24802 0.641783 4.33554L10.0368 13.3927C10.1276 13.4802 10.2508 13.5294 10.3791 13.5294H12.8814C13.3127 13.5294 13.5287 13.0267 13.2237 12.7327L1.32637 1.26329C1.02142 0.969312 0.5 1.17752 0.5 1.59327V4.00556ZM5.33931 4.00556C5.33931 4.12932 5.39033 4.24802 5.4811 4.33554L14.1916 12.7327C14.4965 13.0267 15.0179 12.8185 15.0179 12.4028V9.99047C15.0179 9.86671 14.9669 9.74799 14.8762 9.66049L6.16568 1.26329C5.86071 0.969307 5.33931 1.17752 5.33931 1.59327V4.00556ZM11.005 1.26329C10.7 0.969307 10.1786 1.17752 10.1786 1.59327V4.00556C10.1786 4.12932 10.2296 4.24802 10.3204 4.33554L14.1916 8.06748C14.4965 8.36148 15.0179 8.15325 15.0179 7.7375V5.3252C15.0179 5.20144 14.9669 5.08272 14.8762 4.99522L11.005 1.26329Z" fill="#F9BD2B"/><path d="M21.0852 10.981L16.5288 6.58843C16.2238 6.29443 15.7024 6.50266 15.7024 6.91841V13.0627C15.7024 13.3205 15.9191 13.5294 16.1865 13.5294H23.2446C23.5119 13.5294 23.7287 13.3205 23.7287 13.0627V12.5032C23.7287 12.2455 23.511 12.0396 23.2459 12.0063C22.4323 11.9042 21.6713 11.546 21.0852 10.981ZM18.0252 12.0365C17.5978 12.0365 17.251 11.7021 17.251 11.2901C17.251 10.878 17.5978 10.5436 18.0252 10.5436C18.4527 10.5436 18.7996 10.878 18.7996 11.2901C18.7996 11.7021 18.4527 12.0365 18.0252 12.0365Z" fill="currentColor"/><path d="M0.5 13.0627C0.5 13.3205 0.716728 13.5294 0.984076 13.5294H3.20279C3.63405 13.5294 3.85003 13.0267 3.54508 12.7327L1.32637 10.5938C1.02142 10.2998 0.5 10.508 0.5 10.9238V13.0627ZM5.33931 5.13191L1.32637 1.26329C1.02142 0.969306 0.5 1.17752 0.5 1.59327V4.00556C0.5 4.12932 0.551001 4.24802 0.641783 4.33554L5.33931 8.86412V5.13191ZM1.32637 5.92855C1.02142 5.63455 0.5 5.84278 0.5 6.25853V8.67083C0.5 8.79459 0.551001 8.91331 0.641783 9.00081L5.33931 13.5294V9.79717L1.32637 5.92855Z" fill="#1D4AFF"/><path d="M10.1787 5.3252C10.1787 5.20144 10.1277 5.08272 10.0369 4.99522L6.16572 1.26329C5.8608 0.969306 5.33936 1.17752 5.33936 1.59327V4.00556C5.33936 4.12932 5.39037 4.24802 5.48114 4.33554L10.1787 8.86412V5.3252ZM5.33936 13.5294H8.04214C8.47341 13.5294 8.6894 13.0267 8.38443 12.7327L5.33936 9.79717V13.5294ZM5.33936 5.13191V8.67083C5.33936 8.79459 5.39037 8.91331 5.48114 9.00081L10.1787 13.5294V9.99047C10.1787 9.86671 10.1277 9.74803 10.0369 9.66049L5.33936 5.13191Z" fill="#F54E00"/><path d="M29.375 11.6667H31.3636V8.48772H33.0249C34.8499 8.48772 36.0204 7.4443 36.0204 5.83052C36.0204 4.21681 34.8499 3.17334 33.0249 3.17334H29.375V11.6667ZM31.3636 6.84972V4.81136H32.8236C33.5787 4.81136 34.0318 5.19958 34.0318 5.83052C34.0318 6.4615 33.5787 6.84972 32.8236 6.84972H31.3636ZM39.618 11.7637C41.5563 11.7637 42.9659 10.429 42.9659 8.60905C42.9659 6.78905 41.5563 5.45438 39.618 5.45438C37.6546 5.45438 36.2701 6.78905 36.2701 8.60905C36.2701 10.429 37.6546 11.7637 39.618 11.7637ZM38.1077 8.60905C38.1077 7.63838 38.7118 6.97105 39.618 6.97105C40.5116 6.97105 41.1157 7.63838 41.1157 8.60905C41.1157 9.57972 40.5116 10.2471 39.618 10.2471C38.7118 10.2471 38.1077 9.57972 38.1077 8.60905ZM46.1482 11.7637C47.6333 11.7637 48.6402 10.8658 48.6402 9.81025C48.6402 7.33505 45.2294 8.13585 45.2294 7.16518C45.2294 6.8983 45.5189 6.72843 45.9342 6.72843C46.3622 6.72843 46.8782 6.98318 47.0418 7.54132L48.527 6.94678C48.2375 6.06105 47.1677 5.45438 45.8713 5.45438C44.4743 5.45438 43.6058 6.25518 43.6058 7.21372C43.6058 9.53118 46.9663 8.88812 46.9663 9.84665C46.9663 10.1864 46.6391 10.417 46.1482 10.417C45.4434 10.417 44.9525 9.94376 44.8015 9.3735L43.3164 9.93158C43.6436 10.8537 44.6001 11.7637 46.1482 11.7637ZM53.4241 11.606L53.2982 10.0651C53.0843 10.1743 52.8074 10.2106 52.5808 10.2106C52.1278 10.2106 51.8257 9.89523 51.8257 9.34918V7.03172H53.3612V5.55145H51.8257V3.78001H49.9755V5.55145H48.9687V7.03172H49.9755V9.57972C49.9755 11.06 51.0202 11.7637 52.3921 11.7637C52.7696 11.7637 53.122 11.7031 53.4241 11.606ZM59.8749 3.17334V6.47358H56.376V3.17334H54.3874V11.6667H56.376V8.11158H59.8749V11.6667H61.8761V3.17334H59.8749ZM66.2899 11.7637C68.2281 11.7637 69.6378 10.429 69.6378 8.60905C69.6378 6.78905 68.2281 5.45438 66.2899 5.45438C64.3265 5.45438 62.942 6.78905 62.942 8.60905C62.942 10.429 64.3265 11.7637 66.2899 11.7637ZM64.7796 8.60905C64.7796 7.63838 65.3837 6.97105 66.2899 6.97105C67.1835 6.97105 67.7876 7.63838 67.7876 8.60905C67.7876 9.57972 67.1835 10.2471 66.2899 10.2471C65.3837 10.2471 64.7796 9.57972 64.7796 8.60905ZM73.2088 11.4725C73.901 11.4725 74.5177 11.242 74.845 10.8416V11.424C74.845 12.1034 74.2786 12.5767 73.4102 12.5767C72.7935 12.5767 72.2523 12.2854 72.1642 11.788L70.4776 12.0428C70.7042 13.1955 71.925 13.972 73.4102 13.972C75.361 13.972 76.6574 12.8679 76.6574 11.2298V5.55145H74.8324V6.07318C74.4926 5.69705 73.9136 5.45438 73.171 5.45438C71.409 5.45438 70.3014 6.61918 70.3014 8.46345C70.3014 10.3077 71.409 11.4725 73.2088 11.4725ZM72.1012 8.46345C72.1012 7.55345 72.655 6.97105 73.5109 6.97105C74.3793 6.97105 74.9331 7.55345 74.9331 8.46345C74.9331 9.37345 74.3793 9.95585 73.5109 9.95585C72.655 9.95585 72.1012 9.37345 72.1012 8.46345Z" fill="currentColor"/></g></g><defs><clipPath id="clip0_2415_6911"><rect width="76" height="14" fill="white" transform="translate(0.5)"/></clipPath></defs></svg>',
        d = function (n, e) {
            var t = {
                left: 'left: 30px;',
                right: 'right: 30px;',
                center: '\n            left: 50%;\n            transform: translateX(-50%);\n          ',
            }
            return '\n          .survey-'
                .concat(
                    n,
                    '-form {\n              position: fixed;\n              margin: 0px;\n              bottom: 0px;\n              color: black;\n              font-weight: normal;\n              font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n              text-align: left;\n              max-width: '
                )
                .concat(parseInt((null == e ? void 0 : e.maxWidth) || '290'), 'px;\n              z-index: ')
                .concat(parseInt((null == e ? void 0 : e.zIndex) || '99999'), ';\n              border: 1.5px solid ')
                .concat(
                    (null == e ? void 0 : e.borderColor) || '#c9c6c6',
                    ';\n              border-bottom: 0px;\n              width: 100%;\n              '
                )
                .concat(
                    t[(null == e ? void 0 : e.position) || 'right'] || 'right: 30px;',
                    '\n          }\n          .survey-'
                )
                .concat(
                    n,
                    '-form .tab {\n              display: none;\n          }\n          .form-submit[disabled] {\n              opacity: 0.6;\n              filter: grayscale(100%);\n              cursor: not-allowed;\n          }\n          .survey-'
                )
                .concat(n, '-form {\n              flex-direction: column;\n              background: ')
                .concat(
                    (null == e ? void 0 : e.backgroundColor) || '#eeeded',
                    ';\n              border-top-left-radius: 10px;\n              border-top-right-radius: 10px;\n              box-shadow: -6px 0 16px -8px rgb(0 0 0 / 8%), -9px 0 28px 0 rgb(0 0 0 / 5%), -12px 0 48px 16px rgb(0 0 0 / 3%);\n          }\n          .survey-'
                )
                .concat(
                    n,
                    '-form textarea {\n              color: #2d2d2d;\n              font-size: 14px;\n              font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n              background: white;\n              color: black;\n              outline: none;\n              padding-left: 10px;\n              padding-right: 10px;\n              padding-top: 10px;\n              border-radius: 6px;\n              border-color: '
                )
                .concat(
                    (null == e ? void 0 : e.borderColor) || '#c9c6c6',
                    ';\n              margin-top: 14px; \n          }\n          .form-submit {\n              box-sizing: border-box;\n              margin: 0;\n              font-family: inherit;\n              overflow: visible;\n              text-transform: none;\n              position: relative;\n              display: inline-block;\n              font-weight: 700;\n              white-space: nowrap;\n              text-align: center;\n              border: 1.5px solid transparent;\n              cursor: pointer;\n              user-select: none;\n              touch-action: manipulation;\n              padding: 12px;\n              font-size: 14px;\n              border-radius: 6px;\n              outline: 0;\n              background: '
                )
                .concat(
                    (null == e ? void 0 : e.submitButtonColor) || 'black',
                    ' !important;\n              text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);\n              box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);\n              width: 100%;\n          }\n          .form-cancel {\n              float: right;\n              border: none;\n              background: none;\n              cursor: pointer;\n          }\n          .cancel-btn-wrapper {\n              position: absolute;\n              width: 35px;\n              height: 35px;\n              border-radius: 100%;\n              top: 0;\n              right: 0;\n              transform: translate(50%, -50%);\n              background: white;\n              border: 1.5px solid '
                )
                .concat(
                    (null == e ? void 0 : e.borderColor) || '#c9c6c6',
                    ';\n              display: flex;\n              justify-content: center;\n              align-items: center;\n          }\n          .bolded { font-weight: 600; }\n          .buttons {\n              display: flex;\n              justify-content: center;\n          }\n          .footer-branding {\n              font-size: 11px;\n              margin-top: 10px;\n              text-align: center;\n              display: flex;\n              justify-content: center;\n              gap: 4px;\n              align-items: center;\n              font-weight: 500;\n              background: '
                )
                .concat(
                    (null == e ? void 0 : e.backgroundColor) || '#eeeded',
                    ';\n              text-decoration: none;\n          }\n          .survey-'
                )
                .concat(
                    n,
                    '-box {\n              padding: 20px 25px 10px;\n              display: flex;\n              flex-direction: column;\n          }\n          .survey-question {\n              font-weight: 500;\n              font-size: 14px;\n              background: '
                )
                .concat(
                    (null == e ? void 0 : e.backgroundColor) || '#eeeded',
                    ';\n          }\n          .question-textarea-wrapper {\n              display: flex;\n              flex-direction: column;\n          }\n          .description {\n              font-size: 13px;\n              margin-top: 5px;\n              opacity: .60;\n              background: '
                )
                .concat(
                    (null == e ? void 0 : e.backgroundColor) || '#eeeded',
                    ';\n          }\n          .ratings-number {\n              background-color: '
                )
                .concat(
                    (null == e ? void 0 : e.ratingButtonColor) || 'white',
                    ';\n              font-size: 14px;\n              padding: 8px 0px;\n              border: none;\n          }\n          .ratings-number:hover {\n              cursor: pointer;\n          }\n          .rating-options {\n              margin-top: 14px;\n          }\n          .rating-options-buttons {\n              display: grid;\n              border-radius: 6px;\n              overflow: hidden;\n              border: 1.5px solid '
                )
                .concat(
                    (null == e ? void 0 : e.borderColor) || '#c9c6c6',
                    ';\n          }\n          .rating-options-buttons > .ratings-number {\n              border-right: 1px solid '
                )
                .concat(
                    (null == e ? void 0 : e.borderColor) || '#c9c6c6',
                    ';\n          }\n          .rating-options-buttons > .ratings-number:last-of-type {\n              border-right: 0px;\n          }\n          .rating-options-buttons .rating-active {\n              background: '
                )
                .concat(
                    (null == e ? void 0 : e.ratingButtonActiveColor) || 'black',
                    ';\n          }\n          .rating-options-emoji {\n              display: flex;\n              justify-content: space-between;\n          }\n          .ratings-emoji {\n              font-size: 16px;\n              background-color: transparent;\n              border: none;\n              padding: 0px;\n          }\n          .ratings-emoji:hover {\n              cursor: pointer;\n          }\n          .ratings-emoji.rating-active svg {\n              fill: '
                )
                .concat(
                    (null == e ? void 0 : e.ratingButtonActiveColor) || 'black',
                    ';\n          }\n          .emoji-svg {\n              fill: '
                )
                .concat(
                    (null == e ? void 0 : e.ratingButtonColor) || '#c9c6c6',
                    ';\n          }\n          .rating-text {\n              display: flex;\n              flex-direction: row;\n              font-size: 11px;\n              justify-content: space-between;\n              margin-top: 6px;\n              background: '
                )
                .concat(
                    (null == e ? void 0 : e.backgroundColor) || '#eeeded',
                    ';\n              opacity: .60;\n          }\n          .multiple-choice-options {\n              margin-top: 13px;\n              font-size: 14px;\n          }\n          .multiple-choice-options .choice-option {\n              display: flex;\n              align-items: center;\n              gap: 4px;\n              font-size: 13px;\n              cursor: pointer;\n              margin-bottom: 5px;\n              position: relative;\n          }\n          .multiple-choice-options > .choice-option:last-of-type {\n              margin-bottom: 0px;\n          }\n          \n          .multiple-choice-options input {\n              cursor: pointer;\n              position: absolute;\n              opacity: 0;\n          }\n          .choice-check {\n              position: absolute;\n              right: 10px;\n              background: white;\n          }\n          .choice-check svg {\n              display: none;\n          }\n          .multiple-choice-options .choice-option:hover .choice-check svg {\n              display: inline-block;\n              opacity: .25;\n          }\n          .multiple-choice-options input:checked + label + .choice-check svg {\n              display: inline-block;\n              opacity: 100% !important;\n          }\n          .multiple-choice-options input[type=checkbox]:checked + label {\n              font-weight: bold;\n          }\n          .multiple-choice-options input:checked + label {\n              border: 1.5px solid rgba(0,0,0);\n          }\n          .multiple-choice-options label {\n              width: 100%;\n              cursor: pointer;\n              padding: 10px;\n              border: 1.5px solid rgba(0,0,0,.25);\n              border-radius: 4px;\n              background: white;\n          }\n          .thank-you-message {\n              position: fixed;\n              bottom: 0px;\n              z-index: '
                )
                .concat(
                    parseInt((null == e ? void 0 : e.zIndex) || '99999'),
                    ';\n              box-shadow: -6px 0 16px -8px rgb(0 0 0 / 8%), -9px 0 28px 0 rgb(0 0 0 / 5%), -12px 0 48px 16px rgb(0 0 0 / 3%);\n              font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n              border-top-left-radius: 10px;\n              border-top-right-radius: 10px;\n              padding: 20px 25px 10px;\n              background: '
                )
                .concat((null == e ? void 0 : e.backgroundColor) || '#eeeded', ';\n              border: 1.5px solid ')
                .concat(
                    (null == e ? void 0 : e.borderColor) || '#c9c6c6',
                    ';\n              text-align: center;\n              max-width: '
                )
                .concat(
                    parseInt((null == e ? void 0 : e.maxWidth) || '290'),
                    'px;\n              min-width: 150px;\n              width: 100%;\n              '
                )
                .concat(
                    t[(null == e ? void 0 : e.position) || 'right'] || 'right: 30px;',
                    '\n          }\n          .thank-you-message {\n              color: '
                )
                .concat(
                    (null == e ? void 0 : e.textColor) || 'black',
                    ';\n          }\n          .thank-you-message-body {\n              margin-top: 6px;\n              font-size: 14px;\n              color: '
                )
                .concat(
                    (null == e ? void 0 : e.descriptionTextColor) || '#4b4b52',
                    ';\n          }\n          .thank-you-message-header {\n              margin: 10px 0px 0px;\n          }\n          .thank-you-message-container .form-submit {\n              margin-top: 20px;\n              margin-bottom: 10px;\n          }\n          .thank-you-message-countdown {\n              margin-left: 6px;\n          }\n          .bottom-section {\n              margin-top: 14px;\n          }\n          '
                )
        },
        p = function (n, e) {
            var t = document.createElement('div')
            t.className = 'PostHogSurvey'.concat(e)
            var o = t.attachShadow({ mode: 'open' })
            if (n) {
                var i = Object.assign(document.createElement('style'), { innerText: n })
                o.appendChild(i)
            }
            return document.body.appendChild(t), o
        },
        v = function (n, e) {
            Object.assign(e.style, { display: 'none' }),
                localStorage.setItem('seenSurvey_'.concat(n), 'true'),
                window.setTimeout(function () {
                    window.dispatchEvent(new Event('PHSurveyClosed'))
                }, 2e3),
                e.reset()
        },
        m = function (n, e, t) {
            var o,
                i,
                r,
                a = t.type,
                c = t.description,
                s = t.question,
                d = '\n    <div class="survey-'
                    .concat(
                        e.id,
                        '-box">\n        <div class="cancel-btn-wrapper">\n            <button class="form-cancel" type="cancel">'
                    )
                    .concat(
                        l,
                        '</button>\n        </div>\n        <div class="question-textarea-wrapper">\n            <div class="survey-question auto-text-color">'
                    )
                    .concat(s, '</div>\n            ')
                    .concat(
                        c ? '<span class="description auto-text-color">'.concat(c, '</span>') : '',
                        '\n            '
                    )
                    .concat(
                        'open' === a
                            ? '<textarea class="survey-textarea" name="survey" rows=4 placeholder="'.concat(
                                  (null === (o = e.appearance) || void 0 === o ? void 0 : o.placeholder) || '',
                                  '"></textarea>'
                              )
                            : '',
                        '\n        </div>\n        <div class="bottom-section">\n            <div class="buttons">\n                <button class="form-submit auto-text-color" type="submit" '
                    )
                    .concat('open' === a ? 'disabled' : null, '>')
                    .concat(
                        (null === (i = e.appearance) || void 0 === i ? void 0 : i.submitButtonText) || 'Submit',
                        '</button>\n            </div>\n            <a href="https://posthog.com" target="_blank" rel="noopener" class="footer-branding auto-text-color">Survey by '
                    )
                    .concat(u, '</a>\n        </div>\n    </div>\n')
            1 === e.questions.length
                ? (r = Object.assign(document.createElement('form'), {
                      className: 'survey-'.concat(e.id, '-form'),
                      innerHTML: d,
                      onsubmit: function (o) {
                          var i
                          o.preventDefault()
                          var a = t.type
                          n.capture('survey sent', {
                              $survey_name: e.name,
                              $survey_id: e.id,
                              $survey_question: e.questions[0].question,
                              $survey_response: 'open' === a ? o.target.survey.value : 'link clicked',
                              sessionRecordingUrl:
                                  null === (i = n.get_session_replay_url) || void 0 === i ? void 0 : i.call(n),
                          }),
                              'link' === a && window.open(t.link || void 0),
                              window.setTimeout(function () {
                                  window.dispatchEvent(new Event('PHSurveySent'))
                              }, 200),
                              v(e.id, r)
                      },
                  }))
                : (r = Object.assign(document.createElement('div'), { innerHTML: d }))
                      .querySelector('.form-submit')
                      .addEventListener('click', function () {
                          'link' === a && window.open(t.link || void 0)
                      })
            return (
                r.addEventListener('input', function (n) {
                    r.querySelector('.form-submit') && (r.querySelector('.form-submit').disabled = !n.target.value)
                }),
                r
            )
        },
        g = function (n) {
            var e,
                t,
                o,
                i =
                    '\n    <div class="thank-you-message-container">\n        <div class="cancel-btn-wrapper">\n            <button class="form-cancel" type="cancel">'
                        .concat(l, '</button>\n        </div>\n        <h3 class="thank-you-message-header">')
                        .concat(
                            (null === (e = n.appearance) || void 0 === e ? void 0 : e.thankYouMessageHeader) ||
                                'Thank you!',
                            '</h3>\n        <div class="thank-you-message-body">'
                        )
                        .concat(
                            (null === (t = n.appearance) || void 0 === t ? void 0 : t.thankYouMessageDescription) || '',
                            '</div>\n        <button class="form-submit auto-text-color"><span>Close</span><span class="thank-you-message-countdown"></span></button>\n        '
                        )
                        .concat(
                            null !== (o = n.appearance) && void 0 !== o && o.whiteLabel
                                ? ''
                                : '<a href="https://posthog.com" target="_blank" rel="noopener" class="footer-branding auto-text-color">Survey by '.concat(
                                      u,
                                      '</a>'
                                  ),
                            '\n    </div>\n    '
                        )
            return Object.assign(document.createElement('div'), { className: 'thank-you-message', innerHTML: i })
        },
        b = function (n, e, t, o) {
            var i
            ;(null === (i = e.getElementsByClassName('form-cancel')) || void 0 === i ? void 0 : i[0]).addEventListener(
                'click',
                function (i) {
                    i.preventDefault(),
                        Object.assign(e.style, { display: 'none' }),
                        localStorage.setItem('seenSurvey_'.concat(t), 'true'),
                        n.capture('survey dismissed', {
                            $survey_name: o,
                            $survey_id: t,
                            sessionRecordingUrl: n.get_session_replay_url(),
                        }),
                        window.dispatchEvent(new Event('PHSurveyClosed'))
                }
            )
        },
        f = function (n, e, t) {
            var o,
                i = t.scale,
                d = t.display,
                p = document.createElement('div')
            if ('number' === d) {
                ;(p.className = 'rating-options-buttons'),
                    (p.style.gridTemplateColumns = 'repeat('.concat(i, ', minmax(0, 1fr))'))
                for (var m = 1; m <= i; m++) {
                    var g = document.createElement('button')
                    ;(g.className = 'ratings-number rating_'.concat(m, ' auto-text-color')),
                        (g.type = 'submit'),
                        (g.value = ''.concat(m)),
                        (g.innerHTML = ''.concat(m)),
                        p.append(g)
                }
            } else if ('emoji' === d) {
                p.className = 'rating-options-emoji'
                for (
                    var b = [s, c, a],
                        f = [
                            '<svg class="emoji-svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-417q-67 0-121.5 37.5T278-280h404q-25-63-80-100t-122-37Zm-183-72 50-45 45 45 31-36-45-45 45-45-31-36-45 45-50-45-31 36 45 45-45 45 31 36Zm272 0 44-45 51 45 31-36-45-45 45-45-31-36-51 45-44-45-31 36 44 45-44 45 31 36ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142 0 241-99t99-241q0-142-99-241t-241-99q-142 0-241 99t-99 241q0 142 99 241t241 99Z"/></svg>',
                            s,
                            c,
                            a,
                            '<svg class="emoji-svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M479.504-261Q537-261 585.5-287q48.5-26 78.5-72.4 6-11.6-.75-22.6-6.75-11-20.25-11H316.918Q303-393 296.5-382t-.5 22.6q30 46.4 78.5 72.4 48.5 26 105.004 26ZM347-578l27 27q7.636 8 17.818 8Q402-543 410-551q8-8 8-18t-8-18l-42-42q-8.8-9-20.9-9-12.1 0-21.1 9l-42 42q-8 7.636-8 17.818Q276-559 284-551q8 8 18 8t18-8l27-27Zm267 0 27 27q7.714 8 18 8t18-8q8-7.636 8-17.818Q685-579 677-587l-42-42q-8.8-9-20.9-9-12.1 0-21.1 9l-42 42q-8 7.714-8 18t8 18q7.636 8 17.818 8Q579-543 587-551l27-27ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z"/></svg>',
                        ],
                        y = 1;
                    y <= i;
                    y++
                ) {
                    var h = document.createElement('button')
                    ;(h.className = 'ratings-emoji rating_'.concat(y)),
                        (h.type = 'submit'),
                        (h.value = ''.concat(y)),
                        (h.innerHTML = 3 === i ? b[y - 1] : f[y - 1]),
                        p.append(h)
                }
            }
            var x,
                w = '\n    <div class="survey-'
                    .concat(
                        e.id,
                        '-box">\n        <div class="cancel-btn-wrapper">\n            <button class="form-cancel" type="cancel">'
                    )
                    .concat(l, '</button>\n        </div>\n        <div class="survey-question auto-text-color">')
                    .concat(t.question, '</div>\n        ')
                    .concat(
                        t.description
                            ? '<span class="description auto-text-color">'.concat(t.description, '</span>')
                            : '',
                        '\n        <div class="rating-section">\n            <div class="rating-options">\n            </div>\n            '
                    )
                    .concat(
                        t.lowerBoundLabel || t.upperBoundLabel
                            ? '<div class="rating-text auto-text-color">\n            <div>'
                                  .concat(t.lowerBoundLabel || '', '</div>\n            <div>')
                                  .concat(t.upperBoundLabel || '', '</div>\n            </div>')
                            : '',
                        '\n            <div class="bottom-section">\n            <div class="buttons">\n                <button class="form-submit auto-text-color" type="submit" disabled>'
                    )
                    .concat(
                        (null === (o = e.appearance) || void 0 === o ? void 0 : o.submitButtonText) || 'Submit',
                        '</button>\n            </div>\n            <a href="https://posthog.com" target="_blank" rel="noopener" class="footer-branding auto-text-color">Survey by '
                    )
                    .concat(u, '</a>\n        </div>\n        </div>\n    </div>\n            ')
            ;(x =
                1 === e.questions.length
                    ? Object.assign(document.createElement('form'), {
                          className: 'survey-'.concat(e.id, '-form'),
                          innerHTML: w,
                          onsubmit: function (o) {
                              var i
                              o.preventDefault()
                              var r = x.querySelector('.rating-active')
                              n.capture('survey sent', {
                                  $survey_name: e.name,
                                  $survey_id: e.id,
                                  $survey_question: t.question,
                                  $survey_response: parseInt(null == r ? void 0 : r.value),
                                  sessionRecordingUrl:
                                      null === (i = n.get_session_replay_url) || void 0 === i ? void 0 : i.call(n),
                              }),
                                  window.setTimeout(function () {
                                      window.dispatchEvent(new Event('PHSurveySent'))
                                  }, 200),
                                  v(e.id, x)
                          },
                      })
                    : Object.assign(document.createElement('div'), { innerHTML: w }))
                .getElementsByClassName('rating-options')[0]
                .insertAdjacentElement('afterbegin', p)
            var C,
                k = r(Array(t.scale).keys())
            try {
                var T = function () {
                    var n = C.value,
                        e = x.getElementsByClassName('rating_'.concat(n + 1))[0]
                    e.addEventListener('click', function (n) {
                        n.preventDefault()
                        var t,
                            o = r(x.getElementsByClassName('rating-active'))
                        try {
                            for (o.s(); !(t = o.n()).done; ) {
                                t.value.classList.remove('rating-active')
                            }
                        } catch (n) {
                            o.e(n)
                        } finally {
                            o.f()
                        }
                        e.classList.add('rating-active'),
                            x.querySelector('.form-submit') && (x.querySelector('.form-submit').disabled = !1),
                            q(x)
                    })
                }
                for (k.s(); !(C = k.n()).done; ) T()
            } catch (n) {
                k.e(n)
            } finally {
                k.f()
            }
            return x
        },
        y = function (n, e, o) {
            var i,
                r,
                a = o.question,
                c = o.description,
                s = o.choices,
                d = o.type,
                p = '\n    <div class="survey-'
                    .concat(
                        e.id,
                        '-box">\n        <div class="cancel-btn-wrapper">\n            <button class="form-cancel" type="cancel">'
                    )
                    .concat(l, '</button>\n        </div>\n        <div class="survey-question auto-text-color">')
                    .concat(a, '</div>\n        ')
                    .concat(
                        c ? '<span class="description auto-text-color">'.concat(c, '</span>') : '',
                        '\n        <div class="multiple-choice-options">\n        '
                    )
                    .concat(
                        s
                            .map(function (n, e) {
                                return '<div class="choice-option"><input type='
                                    .concat(
                                        'single_choice' === d ? 'radio' : 'checkbox',
                                        ' id=surveyQuestionMultipleChoice'
                                    )
                                    .concat(e, ' name="choice" value="')
                                    .concat(
                                        n,
                                        '">\n            <label class="auto-text-color" for=surveyQuestionMultipleChoice'
                                    )
                                    .concat(e, '>')
                                    .concat(n, '</label><span class="choice-check auto-text-color">')
                                    .concat(
                                        '<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.30769 10.6923L4.77736 11.2226C4.91801 11.3633 5.10878 11.4423 5.30769 11.4423C5.5066 11.4423 5.69737 11.3633 5.83802 11.2226L5.30769 10.6923ZM15.5303 1.53033C15.8232 1.23744 15.8232 0.762563 15.5303 0.46967C15.2374 0.176777 14.7626 0.176777 14.4697 0.46967L15.5303 1.53033ZM1.53033 5.85429C1.23744 5.56139 0.762563 5.56139 0.46967 5.85429C0.176777 6.14718 0.176777 6.62205 0.46967 6.91495L1.53033 5.85429ZM5.83802 11.2226L15.5303 1.53033L14.4697 0.46967L4.77736 10.162L5.83802 11.2226ZM0.46967 6.91495L4.77736 11.2226L5.83802 10.162L1.53033 5.85429L0.46967 6.91495Z" fill="currentColor"/></svg>',
                                        '</span></div>'
                                    )
                            })
                            .join(' '),
                        '\n        </div>\n        <div class="bottom-section">\n        <div class="buttons">\n            <button class="form-submit auto-text-color" type="submit" disabled>'
                    )
                    .concat(
                        (null === (i = e.appearance) || void 0 === i ? void 0 : i.submitButtonText) || 'Submit',
                        '</button>\n        </div>\n        <a href="https://posthog.com" target="_blank" rel="noopener" class="footer-branding auto-text-color">Survey by '
                    )
                    .concat(u, '</a>\n    </div>\n\n    </div>\n    ')
            return (
                (r =
                    1 === e.questions.length
                        ? Object.assign(document.createElement('form'), {
                              className: 'survey-'.concat(e.id, '-form'),
                              innerHTML: p,
                              onsubmit: function (o) {
                                  var i, a
                                  o.preventDefault()
                                  var c = o.target,
                                      s =
                                          'single_choice' === d
                                              ? null === (i = c.querySelector('input[type=radio]:checked')) ||
                                                void 0 === i
                                                  ? void 0
                                                  : i.value
                                              : t(c.querySelectorAll('input[type=checkbox]:checked')).map(function (n) {
                                                    return n.value
                                                })
                                  n.capture('survey sent', {
                                      $survey_name: e.name,
                                      $survey_id: e.id,
                                      $survey_question: e.questions[0].question,
                                      $survey_response: s,
                                      sessionRecordingUrl:
                                          null === (a = n.get_session_replay_url) || void 0 === a ? void 0 : a.call(n),
                                  }),
                                      window.setTimeout(function () {
                                          window.dispatchEvent(new Event('PHSurveySent'))
                                      }, 200),
                                      v(e.id, r)
                              },
                          })
                        : Object.assign(document.createElement('div'), { innerHTML: p })).addEventListener(
                    'change',
                    function () {
                        var n
                        ;(null !==
                            (n = (
                                'single_choice' === d
                                    ? r.querySelectorAll('input[type=radio]:checked')
                                    : r.querySelectorAll('input[type=checkbox]:checked')
                            ).length) && void 0 !== n
                            ? n
                            : 0) > 0
                            ? (r.querySelector('.form-submit').disabled = !1)
                            : (r.querySelector('.form-submit').disabled = !0)
                    }
                ),
                r
            )
        },
        h = function (n) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            null == n ||
                n.getActiveMatchingSurveys(function (e) {
                    e.filter(function (n) {
                        return 'api' !== n.type
                    }).forEach(function (e) {
                        if (0 === document.querySelectorAll("div[class^='PostHogSurvey']").length) {
                            var t,
                                o = null === (t = e.conditions) || void 0 === t ? void 0 : t.seenSurveyWaitPeriodInDays,
                                i = localStorage.getItem('lastSeenSurveyDate')
                            if (o && i) {
                                var a = new Date(),
                                    c = Math.abs(a.getTime() - new Date(i).getTime())
                                if (Math.ceil(c / 864e5) < o) return
                            }
                            if (!localStorage.getItem('seenSurvey_'.concat(e.id))) {
                                var s,
                                    l,
                                    u,
                                    v,
                                    m = p(d(e.id, null == e ? void 0 : e.appearance), e.id)
                                if ((u = e.questions.length < 2 ? w(n, e, e.questions[0]) : x(n, e)))
                                    b(n, u, e.id, e.name),
                                        null !== (v = e.appearance) &&
                                            void 0 !== v &&
                                            v.whiteLabel &&
                                            (u.getElementsByClassName('footer-branding')[0].style.display = 'none'),
                                        m.appendChild(u)
                                if (e.questions.length > 1) {
                                    k(0, e.id)
                                }
                                q(m),
                                    window.dispatchEvent(new Event('PHSurveyShown')),
                                    n.capture('survey shown', {
                                        $survey_name: e.name,
                                        $survey_id: e.id,
                                        sessionRecordingUrl:
                                            null === (s = n.get_session_replay_url) || void 0 === s
                                                ? void 0
                                                : s.call(n),
                                    }),
                                    localStorage.setItem('lastSeenSurveyDate', new Date().toISOString()),
                                    null !== (l = e.appearance) &&
                                        void 0 !== l &&
                                        l.displayThankYouMessage &&
                                        window.addEventListener('PHSurveySent', function () {
                                            var n = g(e)
                                            m.appendChild(n)
                                            var t,
                                                o = r(n.querySelectorAll('.form-cancel, .form-submit'))
                                            try {
                                                for (o.s(); !(t = o.n()).done; ) {
                                                    t.value.addEventListener('click', function () {
                                                        n.remove()
                                                    })
                                                }
                                            } catch (n) {
                                                o.e(n)
                                            } finally {
                                                o.f()
                                            }
                                            var i = n.querySelector('.thank-you-message-countdown')
                                            if (i) {
                                                var a = 3
                                                i.textContent = '('.concat(a, ')')
                                                var c = setInterval(function () {
                                                    if ((a -= 1) <= 0) return clearInterval(c), void n.remove()
                                                    i.textContent = '('.concat(a, ')')
                                                }, 1e3)
                                            }
                                            q(m)
                                        })
                            }
                        }
                    })
                }, e)
        },
        x = function (o, i) {
            var a = i.questions,
                c = { open: m, link: m, rating: f, single_choice: y, multiple_choice: y },
                s = Object.assign(document.createElement('form'), {
                    className: 'survey-'.concat(i.id, '-form'),
                    onsubmit: function (a) {
                        var c
                        a.preventDefault()
                        var l,
                            u = {},
                            d = 0,
                            p = r(a.target.getElementsByClassName('tab'))
                        try {
                            for (p.s(); !(l = p.n()).done; ) {
                                var m,
                                    g = l.value,
                                    b = g.classList[2],
                                    f = void 0
                                if ('open' === b)
                                    f = null === (m = g.querySelector('textarea')) || void 0 === m ? void 0 : m.value
                                else if ('link' === b) f = 'link clicked'
                                else if ('rating' === b) {
                                    var y
                                    f = parseInt(
                                        null === (y = g.querySelector('.rating-active')) || void 0 === y
                                            ? void 0
                                            : y.value
                                    )
                                } else if ('single_choice' === b || 'multiple_choice' === b) {
                                    f =
                                        'single_choice' === b
                                            ? g.querySelector('input[type=radio]:checked').value
                                            : t(g.querySelectorAll('input[type=checkbox]:checked')).map(function (n) {
                                                  return n.value
                                              })
                                }
                                void 0 !== f &&
                                    (0 === d ? (u.$survey_response = f) : (u['$survey_response_'.concat(d)] = f)),
                                    d++
                            }
                        } catch (n) {
                            p.e(n)
                        } finally {
                            p.f()
                        }
                        o.capture(
                            'survey sent',
                            (function (t) {
                                for (var o = 1; o < arguments.length; o++) {
                                    var i = null != arguments[o] ? arguments[o] : {}
                                    o % 2
                                        ? n(Object(i), !0).forEach(function (n) {
                                              e(t, n, i[n])
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                        : n(Object(i)).forEach(function (n) {
                                              Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(i, n))
                                          })
                                }
                                return t
                            })(
                                {
                                    $survey_name: i.name,
                                    $survey_id: i.id,
                                    $survey_questions: i.questions.map(function (n) {
                                        return n.question
                                    }),
                                    sessionRecordingUrl:
                                        null === (c = o.get_session_replay_url) || void 0 === c ? void 0 : c.call(o),
                                },
                                u
                            )
                        ),
                            window.setTimeout(function () {
                                window.dispatchEvent(new Event('PHSurveySent'))
                            }, 200),
                            v(i.id, s)
                    },
                })
            return (
                a.map(function (n, e) {
                    var t = c[n.type](o, i, n),
                        r = document.createElement('div')
                    if (((r.className = 'tab question-'.concat(e, ' ').concat(n.type)), e < a.length - 1)) {
                        var l = t.getElementsByClassName('form-submit')[0]
                        ;(l.innerText = 'Next'),
                            (l.type = 'button'),
                            l.addEventListener('click', function () {
                                var n, t, o, r
                                ;(n = e),
                                    (t = i.id),
                                    ((null === (o = document.getElementsByClassName('PostHogSurvey'.concat(t))[0]) ||
                                    void 0 === o ||
                                    null === (r = o.shadowRoot) ||
                                    void 0 === r
                                        ? void 0
                                        : r.querySelectorAll('.tab'))[n].style.display = 'none'),
                                    k(n + 1, t)
                            })
                    }
                    r.insertAdjacentElement('beforeend', t), s.insertAdjacentElement('beforeend', r)
                }),
                s
            )
        },
        w = function (n, e, t) {
            var o = t.type
            return 'rating' === o
                ? f(n, e, t)
                : 'open' === o || 'link' === o
                ? m(n, e, t)
                : 'single_choice' === o || 'multiple_choice' === o
                ? y(n, e, t)
                : null
        }
    function C(n) {
        var e = window.getComputedStyle(n).backgroundColor
        if ('rgba(0, 0, 0, 0)' === e) return 'black'
        var t = e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)
        if (!t) return 'black'
        var o = parseInt(t[1]),
            i = parseInt(t[2]),
            r = parseInt(t[3])
        return Math.sqrt(o * o * 0.299 + i * i * 0.587 + r * r * 0.114) > 127.5 ? 'black' : 'white'
    }
    function q(n) {
        var e,
            t = r(n.querySelectorAll('.auto-text-color'))
        try {
            for (t.s(); !(e = t.n()).done; ) {
                var o = e.value
                o.style.color = C(o)
            }
        } catch (n) {
            t.e(n)
        } finally {
            t.f()
        }
    }
    function k(n, e) {
        var t, o
        ;(null === (t = document.getElementsByClassName('PostHogSurvey'.concat(e))[0]) ||
        void 0 === t ||
        null === (o = t.shadowRoot) ||
        void 0 === o
            ? void 0
            : o.querySelectorAll('.tab'))[n].style.display = 'block'
    }
    function T(n) {
        h(n, !0)
        var e = location.href
        location.href &&
            setInterval(function () {
                location.href !== e && ((e = location.href), h(n, !1))
            }, 1500)
    }
    ;('undefined' != typeof window ? window : {}).extendPostHogWithSurveys = T
})()
//# sourceMappingURL=surveys.js.map
