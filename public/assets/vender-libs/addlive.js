/**
 * Created by skessler on 6/3/15.
 */

!function () {
    ADL.UI = {}
}(), function (e, t) {
    function n(e) {
        var t = e.length, n = ct.type(e);
        return ct.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e) {
        var t = Dt[e] = {};
        return ct.each(e.match(ft) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function r(e, n, i, r) {
        if (ct.acceptData(e)) {
            var o, s, a = ct.expando, u = e.nodeType, l = u ? ct.cache : e, c = u ? e[a] : e[a] && a;
            if (c && l[c] && (r || l[c].data) || i !== t || "string" != typeof n)return c || (c = u ? e[a] = tt.pop() || ct.guid++ : a), l[c] || (l[c] = u ? {} : {toJSON: ct.noop}), ("object" == typeof n || "function" == typeof n) && (r ? l[c] = ct.extend(l[c], n) : l[c].data = ct.extend(l[c].data, n)), s = l[c], r || (s.data || (s.data = {}), s = s.data), i !== t && (s[ct.camelCase(n)] = i), "string" == typeof n ? (o = s[n], null == o && (o = s[ct.camelCase(n)])) : o = s, o
        }
    }

    function o(e, t, n) {
        if (ct.acceptData(e)) {
            var i, r, o = e.nodeType, s = o ? ct.cache : e, u = o ? e[ct.expando] : ct.expando;
            if (s[u]) {
                if (t && (i = n ? s[u] : s[u].data)) {
                    ct.isArray(t) ? t = t.concat(ct.map(t, ct.camelCase)) : t in i ? t = [t] : (t = ct.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                    for (; r--;)delete i[t[r]];
                    if (n ? !a(i) : !ct.isEmptyObject(i))return
                }
                (n || (delete s[u].data, a(s[u]))) && (o ? ct.cleanData([e], !0) : ct.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null)
            }
        }
    }

    function s(e, n, i) {
        if (i === t && 1 === e.nodeType) {
            var r = "data-" + n.replace(Nt, "-$1").toLowerCase();
            if (i = e.getAttribute(r), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : At.test(i) ? ct.parseJSON(i) : i
                } catch (o) {
                }
                ct.data(e, n, i)
            } else i = t
        }
        return i
    }

    function a(e) {
        var t;
        for (t in e)if (("data" !== t || !ct.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
        return !0
    }

    function u() {
        return !0
    }

    function l() {
        return !1
    }

    function c() {
        try {
            return Y.activeElement
        } catch (e) {
        }
    }

    function d(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function f(e, t, n) {
        if (ct.isFunction(t))return ct.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType)return ct.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (qt.test(t))return ct.filter(t, e, n);
            t = ct.filter(t, e)
        }
        return ct.grep(e, function (e) {
            return ct.inArray(e, t) >= 0 !== n
        })
    }

    function h(e) {
        var t = zt.split("|"), n = e.createDocumentFragment();
        if (n.createElement)for (; t.length;)n.createElement(t.pop());
        return n
    }

    function p(e, t) {
        return ct.nodeName(e, "table") && ct.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function m(e) {
        return e.type = (null !== ct.find.attr(e, "type")) + "/" + e.type, e
    }

    function g(e) {
        var t = on.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function v(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++)ct._data(n, "globalEval", !t || ct._data(t[i], "globalEval"))
    }

    function y(e, t) {
        if (1 === t.nodeType && ct.hasData(e)) {
            var n, i, r, o = ct._data(e), s = ct._data(t, o), a = o.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)for (i = 0, r = a[n].length; r > i; i++)ct.event.add(t, n, a[n][i])
            }
            s.data && (s.data = ct.extend({}, s.data))
        }
    }

    function b(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ct.support.noCloneEvent && t[ct.expando]) {
                r = ct._data(t);
                for (i in r.events)ct.removeEvent(t, i, r.handle);
                t.removeAttribute(ct.expando)
            }
            "script" === n && t.text !== e.text ? (m(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ct.support.html5Clone && e.innerHTML && !ct.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function x(e, n) {
        var i, r, o = 0, s = typeof e.getElementsByTagName !== K ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== K ? e.querySelectorAll(n || "*") : t;
        if (!s)for (s = [], i = e.childNodes || e; null != (r = i[o]); o++)!n || ct.nodeName(r, n) ? s.push(r) : ct.merge(s, x(r, n));
        return n === t || n && ct.nodeName(e, n) ? ct.merge([e], s) : s
    }

    function w(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked)
    }

    function C(e, t) {
        if (t in e)return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = Dn.length; r--;)if (t = Dn[r] + n, t in e)return t;
        return i
    }

    function _(e, t) {
        return e = t || e, "none" === ct.css(e, "display") || !ct.contains(e.ownerDocument, e)
    }

    function T(e, t) {
        for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++)i = e[s], i.style && (o[s] = ct._data(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && _(i) && (o[s] = ct._data(i, "olddisplay", S(i.nodeName)))) : o[s] || (r = _(i), (n && "none" !== n || !r) && ct._data(i, "olddisplay", r ? n : ct.css(i, "display"))));
        for (s = 0; a > s; s++)i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function D(e, t, n) {
        var i = yn.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function A(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === n && (s += ct.css(e, n + Tn[o], !0, r)), i ? ("content" === n && (s -= ct.css(e, "padding" + Tn[o], !0, r)), "margin" !== n && (s -= ct.css(e, "border" + Tn[o] + "Width", !0, r))) : (s += ct.css(e, "padding" + Tn[o], !0, r), "padding" !== n && (s += ct.css(e, "border" + Tn[o] + "Width", !0, r)));
        return s
    }

    function N(e, t, n) {
        var i = !0, r = "width" === t ? e.offsetWidth : e.offsetHeight, o = dn(e), s = ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = fn(e, t, o), (0 > r || null == r) && (r = e.style[t]), bn.test(r))return r;
            i = s && (ct.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + A(e, t, n || (s ? "border" : "content"), i, o) + "px"
    }

    function S(e) {
        var t = Y, n = wn[e];
        return n || (n = k(e, t), "none" !== n && n || (cn = (cn || ct("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = k(e, t), cn.detach()), wn[e] = n), n
    }

    function k(e, t) {
        var n = ct(t.createElement(e)).appendTo(t.body), i = ct.css(n[0], "display");
        return n.remove(), i
    }

    function E(e, t, n, i) {
        var r;
        if (ct.isArray(t))ct.each(t, function (t, r) {
            n || Nn.test(e) ? i(e, r) : E(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
        }); else if (n || "object" !== ct.type(t))i(e, t); else for (r in t)E(e + "[" + r + "]", t[r], n, i)
    }

    function L(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0, o = t.toLowerCase().match(ft) || [];
            if (ct.isFunction(n))for (; i = o[r++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function M(e, n, i, r) {
        function o(u) {
            var l;
            return s[u] = !0, ct.each(e[u] || [], function (e, u) {
                var c = u(n, i, r);
                return "string" != typeof c || a || s[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c), o(c), !1)
            }), l
        }

        var s = {}, a = e === Vn;
        return o(n.dataTypes[0]) || !s["*"] && o("*")
    }

    function O(e, n) {
        var i, r, o = ct.ajaxSettings.flatOptions || {};
        for (r in n)n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        return i && ct.extend(!0, e, i), e
    }

    function I(e, n, i) {
        for (var r, o, s, a, u = e.contents, l = e.dataTypes; "*" === l[0];)l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)for (a in u)if (u[a] && u[a].test(o)) {
            l.unshift(a);
            break
        }
        if (l[0]in i)s = l[0]; else {
            for (a in i) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    s = a;
                    break
                }
                r || (r = a)
            }
            s = s || r
        }
        return s ? (s !== l[0] && l.unshift(s), i[s]) : t
    }

    function j(e, t, n, i) {
        var r, o, s, a, u, l = {}, c = e.dataTypes.slice();
        if (c[1])for (s in e.converters)l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())if ("*" === o)o = u; else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s)for (r in l)if (a = r.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                s === !0 ? s = l[r] : l[r] !== !0 && (o = a[0], c.unshift(a[1]));
                break
            }
            if (s !== !0)if (s && e["throws"])t = s(t); else try {
                t = s(t)
            } catch (d) {
                return {state: "parsererror", error: s ? d : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    function P() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function H() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function R() {
        return setTimeout(function () {
            Zn = t
        }), Zn = ct.now()
    }

    function W(e, t, n) {
        for (var i, r = (oi[t] || []).concat(oi["*"]), o = 0, s = r.length; s > o; o++)if (i = r[o].call(n, t, e))return i
    }

    function F(e, t, n) {
        var i, r, o = 0, s = ri.length, a = ct.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (r)return !1;
            for (var t = Zn || R(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, o = 1 - i, s = 0, u = l.tweens.length; u > s; s++)l.tweens[s].run(o);
            return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
        }, l = a.promise({
            elem: e,
            props: ct.extend({}, t),
            opts: ct.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Zn || R(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var i = ct.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(i), i
            },
            stop: function (t) {
                var n = 0, i = t ? l.tweens.length : 0;
                if (r)return this;
                for (r = !0; i > n; n++)l.tweens[n].run(1);
                return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
            }
        }), c = l.props;
        for (B(c, l.opts.specialEasing); s > o; o++)if (i = ri[o].call(l, e, c, l.opts))return i;
        return ct.map(c, W, l), ct.isFunction(l.opts.start) && l.opts.start.call(e, l), ct.fx.timer(ct.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function B(e, t) {
        var n, i, r, o, s;
        for (n in e)if (i = ct.camelCase(n), r = t[i], o = e[n], ct.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = ct.cssHooks[i], s && "expand"in s) {
            o = s.expand(o), delete e[i];
            for (n in o)n in e || (e[n] = o[n], t[n] = r)
        } else t[i] = r
    }

    function q(e, t, n) {
        var i, r, o, s, a, u, l = this, c = {}, d = e.style, f = e.nodeType && _(e), h = ct._data(e, "fxshow");
        n.queue || (a = ct._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
            a.unqueued || u()
        }), a.unqueued++, l.always(function () {
            l.always(function () {
                a.unqueued--, ct.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ct.css(e, "display") && "none" === ct.css(e, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ct.support.shrinkWrapBlocks || l.always(function () {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (i in t)if (r = t[i], ti.exec(r)) {
            if (delete t[i], o = o || "toggle" === r, r === (f ? "hide" : "show"))continue;
            c[i] = h && h[i] || ct.style(e, i)
        }
        if (!ct.isEmptyObject(c)) {
            h ? "hidden"in h && (f = h.hidden) : h = ct._data(e, "fxshow", {}), o && (h.hidden = !f), f ? ct(e).show() : l.done(function () {
                ct(e).hide()
            }), l.done(function () {
                var t;
                ct._removeData(e, "fxshow");
                for (t in c)ct.style(e, t, c[t])
            });
            for (i in c)s = W(f ? h[i] : 0, i, l), i in h || (h[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function U(e, t, n, i, r) {
        return new U.prototype.init(e, t, n, i, r)
    }

    function V(e, t) {
        var n, i = {height: e}, r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)n = Tn[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function $(e) {
        return ct.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    var z, X, K = typeof t, G = e.location, Y = e.document, Q = Y.documentElement, J = e.jQuery, Z = e.$, et = {}, tt = [], nt = "1.10.1", it = tt.concat, rt = tt.push, ot = tt.slice, st = tt.indexOf, at = et.toString, ut = et.hasOwnProperty, lt = nt.trim, ct = function (e, t) {
        return new ct.fn.init(e, t, X)
    }, dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ft = /\S+/g, ht = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, pt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, mt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, gt = /^[\],:{}\s]*$/, vt = /(?:^|:|,)(?:\s*\[)+/g, yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, xt = /^-ms-/, wt = /-([\da-z])/gi, Ct = function (e, t) {
        return t.toUpperCase()
    }, _t = function (e) {
        (Y.addEventListener || "load" === e.type || "complete" === Y.readyState) && (Tt(), ct.ready())
    }, Tt = function () {
        Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", _t, !1), e.removeEventListener("load", _t, !1)) : (Y.detachEvent("onreadystatechange", _t), e.detachEvent("onload", _t))
    };
    ct.fn = ct.prototype = {
        jquery: nt, constructor: ct, init: function (e, n, i) {
            var r, o;
            if (!e)return this;
            if ("string" == typeof e) {
                if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : pt.exec(e), !r || !r[1] && n)return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                if (r[1]) {
                    if (n = n instanceof ct ? n[0] : n, ct.merge(this, ct.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : Y, !0)), mt.test(r[1]) && ct.isPlainObject(n))for (r in n)ct.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
                    return this
                }
                if (o = Y.getElementById(r[2]), o && o.parentNode) {
                    if (o.id !== r[2])return i.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = Y, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ct.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ct.makeArray(e, this))
        }, selector: "", length: 0, toArray: function () {
            return ot.call(this)
        }, get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        }, pushStack: function (e) {
            var t = ct.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return ct.each(this, e, t)
        }, ready: function (e) {
            return ct.ready.promise().done(e), this
        }, slice: function () {
            return this.pushStack(ot.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, map: function (e) {
            return this.pushStack(ct.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: rt, sort: [].sort, splice: [].splice
    }, ct.fn.init.prototype = ct.fn, ct.extend = ct.fn.extend = function () {
        var e, n, i, r, o, s, a = arguments[0] || {}, u = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, u = 2), "object" == typeof a || ct.isFunction(a) || (a = {}), l === u && (a = this, --u); l > u; u++)if (null != (o = arguments[u]))for (r in o)e = a[r], i = o[r], a !== i && (c && i && (ct.isPlainObject(i) || (n = ct.isArray(i))) ? (n ? (n = !1, s = e && ct.isArray(e) ? e : []) : s = e && ct.isPlainObject(e) ? e : {}, a[r] = ct.extend(c, s, i)) : i !== t && (a[r] = i));
        return a
    }, ct.extend({
        expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""), noConflict: function (t) {
            return e.$ === ct && (e.$ = Z), t && e.jQuery === ct && (e.jQuery = J), ct
        }, isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? ct.readyWait++ : ct.ready(!0)
        }, ready: function (e) {
            if (e === !0 ? !--ct.readyWait : !ct.isReady) {
                if (!Y.body)return setTimeout(ct.ready);
                ct.isReady = !0, e !== !0 && --ct.readyWait > 0 || (z.resolveWith(Y, [ct]), ct.fn.trigger && ct(Y).trigger("ready").off("ready"))
            }
        }, isFunction: function (e) {
            return "function" === ct.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === ct.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? et[at.call(e)] || "object" : typeof e
        }, isPlainObject: function (e) {
            var n;
            if (!e || "object" !== ct.type(e) || e.nodeType || ct.isWindow(e))return !1;
            try {
                if (e.constructor && !ut.call(e, "constructor") && !ut.call(e.constructor.prototype, "isPrototypeOf"))return !1
            } catch (i) {
                return !1
            }
            if (ct.support.ownLast)for (n in e)return ut.call(e, n);
            for (n in e);
            return n === t || ut.call(e, n)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, error: function (e) {
            throw Error(e)
        }, parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e)return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || Y;
            var i = mt.exec(e), r = !n && [];
            return i ? [t.createElement(i[1])] : (i = ct.buildFragment([e], t, r), r && ct(r).remove(), ct.merge([], i.childNodes))
        }, parseJSON: function (n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ct.trim(n), n && gt.test(n.replace(yt, "@").replace(bt, "]").replace(vt, ""))) ? Function("return " + n)() : (ct.error("Invalid JSON: " + n), t)
        }, parseXML: function (n) {
            var i, r;
            if (!n || "string" != typeof n)return null;
            try {
                e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
            } catch (o) {
                i = t
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + n), i
        }, noop: function () {
        }, globalEval: function (t) {
            t && ct.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(xt, "ms-").replace(wt, Ct)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, i) {
            var r, o = 0, s = e.length, a = n(e);
            if (i) {
                if (a)for (; s > o && (r = t.apply(e[o], i), r !== !1); o++); else for (o in e)if (r = t.apply(e[o], i), r === !1)break
            } else if (a)for (; s > o && (r = t.call(e[o], o, e[o]), r !== !1); o++); else for (o in e)if (r = t.call(e[o], o, e[o]), r === !1)break;
            return e
        }, trim: lt && !lt.call("﻿ ") ? function (e) {
            return null == e ? "" : lt.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(ht, "")
        }, makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? ct.merge(i, "string" == typeof e ? [e] : e) : rt.call(i, e)), i
        }, inArray: function (e, t, n) {
            var i;
            if (t) {
                if (st)return st.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)if (n in t && t[n] === e)return n
            }
            return -1
        }, merge: function (e, n) {
            var i = n.length, r = e.length, o = 0;
            if ("number" == typeof i)for (; i > o; o++)e[r++] = n[o]; else for (; n[o] !== t;)e[r++] = n[o++];
            return e.length = r, e
        }, grep: function (e, t, n) {
            var i, r = [], o = 0, s = e.length;
            for (n = !!n; s > o; o++)i = !!t(e[o], o), n !== i && r.push(e[o]);
            return r
        }, map: function (e, t, i) {
            var r, o = 0, s = e.length, a = n(e), u = [];
            if (a)for (; s > o; o++)r = t(e[o], o, i), null != r && (u[u.length] = r); else for (o in e)r = t(e[o], o, i), null != r && (u[u.length] = r);
            return it.apply([], u)
        }, guid: 1, proxy: function (e, n) {
            var i, r, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), ct.isFunction(e) ? (i = ot.call(arguments, 2), r = function () {
                return e.apply(n || this, i.concat(ot.call(arguments)))
            }, r.guid = e.guid = e.guid || ct.guid++, r) : t
        }, access: function (e, n, i, r, o, s, a) {
            var u = 0, l = e.length, c = null == i;
            if ("object" === ct.type(i)) {
                o = !0;
                for (u in i)ct.access(e, n, u, i[u], !0, s, a)
            } else if (r !== t && (o = !0, ct.isFunction(r) || (a = !0), c && (a ? (n.call(e, r), n = null) : (c = n, n = function (e, t, n) {
                    return c.call(ct(e), n)
                })), n))for (; l > u; u++)n(e[u], i, a ? r : r.call(e[u], u, n(e[u], i)));
            return o ? e : c ? n.call(e) : l ? n(e[0], i) : s
        }, now: function () {
            return (new Date).getTime()
        }, swap: function (e, t, n, i) {
            var r, o, s = {};
            for (o in t)s[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t)e.style[o] = s[o];
            return r
        }
    }), ct.ready.promise = function (t) {
        if (!z)if (z = ct.Deferred(), "complete" === Y.readyState)setTimeout(ct.ready); else if (Y.addEventListener)Y.addEventListener("DOMContentLoaded", _t, !1), e.addEventListener("load", _t, !1); else {
            Y.attachEvent("onreadystatechange", _t), e.attachEvent("onload", _t);
            var n = !1;
            try {
                n = null == e.frameElement && Y.documentElement
            } catch (i) {
            }
            n && n.doScroll && function r() {
                if (!ct.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(r, 50)
                    }
                    Tt(), ct.ready()
                }
            }()
        }
        return z.promise(t)
    }, ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        et["[object " + t + "]"] = t.toLowerCase()
    }), X = ct(Y), function (e, t) {
        function n(e, t, n, i) {
            var r, o, s, a, u, l, c, d, f, h;
            if ((t ? t.ownerDocument || t : V) !== P && j(t), t = t || P, n = n || [], !e || "string" != typeof e)return n;
            if (1 !== (a = t.nodeType) && 9 !== a)return [];
            if (R && !i) {
                if (r = _t.exec(e))if (s = r[1]) {
                    if (9 === a) {
                        if (o = t.getElementById(s), !o || !o.parentNode)return n;
                        if (o.id === s)return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && q(t, o) && o.id === s)return n.push(o), n
                } else {
                    if (r[2])return rt.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = r[3]) && N.getElementsByClassName && t.getElementsByClassName)return rt.apply(n, t.getElementsByClassName(s)), n
                }
                if (N.qsa && (!W || !W.test(e))) {
                    if (d = c = U, f = t, h = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (l = m(e), (c = t.getAttribute("id")) ? d = c.replace(At, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;)l[u] = d + g(l[u]);
                        f = vt.test(e) && t.parentNode || t, h = l.join(",")
                    }
                    if (h)try {
                        return rt.apply(n, f.querySelectorAll(h)), n
                    } catch (p) {
                    } finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return T(e.replace(pt, "$1"), t, n, i)
        }

        function i(e) {
            return Ct.test(e + "")
        }

        function r() {
            function e(n, i) {
                return t.push(n += " ") > k.cacheLength && delete e[t.shift()], e[n] = i
            }

            var t = [];
            return e
        }

        function o(e) {
            return e[U] = !0, e
        }

        function s(e) {
            var t = P.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function a(e, t, n) {
            e = e.split("|");
            for (var i, r = e.length, o = n ? null : t; r--;)(i = k.attrHandle[e[r]]) && i !== t || (k.attrHandle[e[r]] = o)
        }

        function u(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : e[t] === !0 ? t.toLowerCase() : null
        }

        function l(e, t) {
            return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }

        function c(e) {
            return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t
        }

        function d(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Z) - (~e.sourceIndex || Z);
            if (i)return i;
            if (n)for (; n = n.nextSibling;)if (n === t)return -1;
            return e ? 1 : -1
        }

        function f(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function h(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function p(e) {
            return o(function (t) {
                return t = +t, o(function (n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--;)n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function m(e, t) {
            var i, r, o, s, a, u, l, c = K[e + " "];
            if (c)return t ? 0 : c.slice(0);
            for (a = e, u = [], l = k.preFilter; a;) {
                (!i || (r = mt.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(o = [])), i = !1, (r = gt.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(pt, " ")
                }), a = a.slice(i.length));
                for (s in k.filter)!(r = wt[s].exec(a)) || l[s] && !(r = l[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i)break
            }
            return t ? a.length : a ? n.error(e) : K(e, u).slice(0)
        }

        function g(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++)i += e[t].value;
            return i
        }

        function v(e, t, n) {
            var i = t.dir, r = n && "parentNode" === i, o = z++;
            return t.first ? function (t, n, o) {
                for (; t = t[i];)if (1 === t.nodeType || r)return e(t, n, o)
            } : function (t, n, s) {
                var a, u, l, c = $ + " " + o;
                if (s) {
                    for (; t = t[i];)if ((1 === t.nodeType || r) && e(t, n, s))return !0
                } else for (; t = t[i];)if (1 === t.nodeType || r)if (l = t[U] || (t[U] = {}), (u = l[i]) && u[0] === c) {
                    if ((a = u[1]) === !0 || a === S)return a === !0
                } else if (u = l[i] = [c], u[1] = e(t, n, s) || S, u[1] === !0)return !0
            }
        }

        function y(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;)if (!e[r](t, n, i))return !1;
                return !0
            } : e[0]
        }

        function b(e, t, n, i, r) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (!n || n(o, i, r)) && (s.push(o), l && t.push(a));
            return s
        }

        function x(e, t, n, i, r, s) {
            return i && !i[U] && (i = x(i)), r && !r[U] && (r = x(r, s)), o(function (o, s, a, u) {
                var l, c, d, f = [], h = [], p = s.length, m = o || _(t || "*", a.nodeType ? [a] : a, []), g = !e || !o && t ? m : b(m, f, e, a, u), v = n ? r || (o ? e : p || i) ? [] : s : g;
                if (n && n(g, v, a, u), i)for (l = b(v, h), i(l, [], a, u), c = l.length; c--;)(d = l[c]) && (v[h[c]] = !(g[h[c]] = d));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (l = [], c = v.length; c--;)(d = v[c]) && l.push(g[c] = d);
                            r(null, v = [], l, u)
                        }
                        for (c = v.length; c--;)(d = v[c]) && (l = r ? st.call(o, d) : f[c]) > -1 && (o[l] = !(s[l] = d))
                    }
                } else v = b(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, u) : rt.apply(s, v)
            })
        }

        function w(e) {
            for (var t, n, i, r = e.length, o = k.relative[e[0].type], s = o || k.relative[" "], a = o ? 1 : 0, u = v(function (e) {
                return e === t
            }, s, !0), l = v(function (e) {
                return st.call(t, e) > -1
            }, s, !0), c = [function (e, n, i) {
                return !o && (i || n !== O) || ((t = n).nodeType ? u(e, n, i) : l(e, n, i))
            }]; r > a; a++)if (n = k.relative[e[a].type])c = [v(y(c), n)]; else {
                if (n = k.filter[e[a].type].apply(null, e[a].matches), n[U]) {
                    for (i = ++a; r > i && !k.relative[e[i].type]; i++);
                    return x(a > 1 && y(c), a > 1 && g(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(pt, "$1"), n, i > a && w(e.slice(a, i)), r > i && w(e = e.slice(i)), r > i && g(e))
                }
                c.push(n)
            }
            return y(c)
        }

        function C(e, t) {
            var i = 0, r = t.length > 0, s = e.length > 0, a = function (o, a, u, l, c) {
                var d, f, h, p = [], m = 0, g = "0", v = o && [], y = null != c, x = O, w = o || s && k.find.TAG("*", c && a.parentNode || a), C = $ += null == x ? 1 : Math.random() || .1;
                for (y && (O = a !== P && a, S = i); null != (d = w[g]); g++) {
                    if (s && d) {
                        for (f = 0; h = e[f++];)if (h(d, a, u)) {
                            l.push(d);
                            break
                        }
                        y && ($ = C, S = ++i)
                    }
                    r && ((d = !h && d) && m--, o && v.push(d))
                }
                if (m += g, r && g !== m) {
                    for (f = 0; h = t[f++];)h(v, p, a, u);
                    if (o) {
                        if (m > 0)for (; g--;)v[g] || p[g] || (p[g] = nt.call(l));
                        p = b(p)
                    }
                    rt.apply(l, p), y && !o && p.length > 0 && m + t.length > 1 && n.uniqueSort(l)
                }
                return y && ($ = C, O = x), v
            };
            return r ? o(a) : a
        }

        function _(e, t, i) {
            for (var r = 0, o = t.length; o > r; r++)n(e, t[r], i);
            return i
        }

        function T(e, t, n, i) {
            var r, o, s, a, u, l = m(e);
            if (!i && 1 === l.length) {
                if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && N.getById && 9 === t.nodeType && R && k.relative[o[1].type]) {
                    if (t = (k.find.ID(s.matches[0].replace(Nt, St), t) || [])[0], !t)return n;
                    e = e.slice(o.shift().value.length)
                }
                for (r = wt.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !k.relative[a = s.type]);)if ((u = k.find[a]) && (i = u(s.matches[0].replace(Nt, St), vt.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(r, 1), e = i.length && g(o), !e)return rt.apply(n, i), n;
                    break
                }
            }
            return M(e, l)(i, t, !R, n, vt.test(e)), n
        }

        function D() {
        }

        var A, N, S, k, E, L, M, O, I, j, P, H, R, W, F, B, q, U = "sizzle" + -new Date, V = e.document, $ = 0, z = 0, X = r(), K = r(), G = r(), Y = !1, Q = function () {
            return 0
        }, J = typeof t, Z = 1 << 31, et = {}.hasOwnProperty, tt = [], nt = tt.pop, it = tt.push, rt = tt.push, ot = tt.slice, st = tt.indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++)if (this[t] === e)return t;
                return -1
            }, at = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ut = "[\\x20\\t\\r\\n\\f]", lt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", dt = lt.replace("w", "w#"), ft = "\\[" + ut + "*(" + lt + ")" + ut + "*(?:([*^$|!~]?=)" + ut + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + dt + ")|)|)" + ut + "*\\]", ht = ":(" + lt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ft.replace(3, 8) + ")*)|.*)\\)|)", pt = RegExp("^" + ut + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ut + "+$", "g"), mt = RegExp("^" + ut + "*," + ut + "*"), gt = RegExp("^" + ut + "*([>+~]|" + ut + ")" + ut + "*"), vt = RegExp(ut + "*[+~]"), yt = RegExp("=" + ut + "*([^\\]'\"]*)" + ut + "*\\]", "g"), bt = RegExp(ht), xt = RegExp("^" + dt + "$"), wt = {
            ID: RegExp("^#(" + lt + ")"),
            CLASS: RegExp("^\\.(" + lt + ")"),
            TAG: RegExp("^(" + lt.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + ft),
            PSEUDO: RegExp("^" + ht),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ut + "*(even|odd|(([+-]|)(\\d*)n|)" + ut + "*(?:([+-]|)" + ut + "*(\\d+)|))" + ut + "*\\)|)", "i"),
            bool: RegExp("^(?:" + at + ")$", "i"),
            needsContext: RegExp("^" + ut + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ut + "*((?:-\\d)?\\d*)" + ut + "*\\)|)(?=[^-]|$)", "i")
        }, Ct = /^[^{]+\{\s*\[native \w/, _t = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Tt = /^(?:input|select|textarea|button)$/i, Dt = /^h\d$/i, At = /'|\\/g, Nt = RegExp("\\\\([\\da-f]{1,6}" + ut + "?|(" + ut + ")|.)", "ig"), St = function (e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
        };
        try {
            rt.apply(tt = ot.call(V.childNodes), V.childNodes), tt[V.childNodes.length].nodeType
        } catch (kt) {
            rt = {
                apply: tt.length ? function (e, t) {
                    it.apply(e, ot.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        L = n.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, N = n.support = {}, j = n.setDocument = function (e) {
            var n = e ? e.ownerDocument || e : V, r = n.parentWindow;
            return n !== P && 9 === n.nodeType && n.documentElement ? (P = n, H = n.documentElement, R = !L(n), r && r.frameElement && r.attachEvent("onbeforeunload", function () {
                j()
            }), N.attributes = s(function (e) {
                return e.innerHTML = "<a href='#'></a>", a("type|href|height|width", l, "#" === e.firstChild.getAttribute("href")), a(at, u, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className")
            }), N.input = s(function (e) {
                return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }), a("value", c, N.attributes && N.input), N.getElementsByTagName = s(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), N.getElementsByClassName = s(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), N.getById = s(function (e) {
                return H.appendChild(e).id = U, !n.getElementsByName || !n.getElementsByName(U).length
            }), N.getById ? (k.find.ID = function (e, t) {
                if (typeof t.getElementById !== J && R) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, k.filter.ID = function (e) {
                var t = e.replace(Nt, St);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete k.find.ID, k.filter.ID = function (e) {
                var t = e.replace(Nt, St);
                return function (e) {
                    var n = typeof e.getAttributeNode !== J && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), k.find.TAG = N.getElementsByTagName ? function (e, n) {
                return typeof n.getElementsByTagName !== J ? n.getElementsByTagName(e) : t
            } : function (e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];)1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, k.find.CLASS = N.getElementsByClassName && function (e, n) {
                    return typeof n.getElementsByClassName !== J && R ? n.getElementsByClassName(e) : t
                }, F = [], W = [], (N.qsa = i(n.querySelectorAll)) && (s(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || W.push("\\[" + ut + "*(?:value|" + at + ")"), e.querySelectorAll(":checked").length || W.push(":checked")
            }), s(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && W.push("[*^$]=" + ut + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || W.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), W.push(",.*:")
            })), (N.matchesSelector = i(B = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && s(function (e) {
                N.disconnectedMatch = B.call(e, "div"), B.call(e, "[s!='']:x"), F.push("!=", ht)
            }), W = W.length && RegExp(W.join("|")), F = F.length && RegExp(F.join("|")), q = i(H.contains) || H.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                return !1
            }, N.sortDetached = s(function (e) {
                return 1 & e.compareDocumentPosition(n.createElement("div"))
            }), Q = H.compareDocumentPosition ? function (e, t) {
                if (e === t)return Y = !0, 0;
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !N.sortDetached && t.compareDocumentPosition(e) === i ? e === n || q(V, e) ? -1 : t === n || q(V, t) ? 1 : I ? st.call(I, e) - st.call(I, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var i, r = 0, o = e.parentNode, s = t.parentNode, a = [e], u = [t];
                if (e === t)return Y = !0, 0;
                if (!o || !s)return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : I ? st.call(I, e) - st.call(I, t) : 0;
                if (o === s)return d(e, t);
                for (i = e; i = i.parentNode;)a.unshift(i);
                for (i = t; i = i.parentNode;)u.unshift(i);
                for (; a[r] === u[r];)r++;
                return r ? d(a[r], u[r]) : a[r] === V ? -1 : u[r] === V ? 1 : 0
            }, n) : P
        }, n.matches = function (e, t) {
            return n(e, null, null, t)
        }, n.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== P && j(e), t = t.replace(yt, "='$1']"), !(!N.matchesSelector || !R || F && F.test(t) || W && W.test(t)))try {
                var i = B.call(e, t);
                if (i || N.disconnectedMatch || e.document && 11 !== e.document.nodeType)return i
            } catch (r) {
            }
            return n(t, P, null, [e]).length > 0
        }, n.contains = function (e, t) {
            return (e.ownerDocument || e) !== P && j(e), q(e, t)
        }, n.attr = function (e, n) {
            (e.ownerDocument || e) !== P && j(e);
            var i = k.attrHandle[n.toLowerCase()], r = i && et.call(k.attrHandle, n.toLowerCase()) ? i(e, n, !R) : t;
            return r === t ? N.attributes || !R ? e.getAttribute(n) : (r = e.getAttributeNode(n)) && r.specified ? r.value : null : r
        }, n.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, n.uniqueSort = function (e) {
            var t, n = [], i = 0, r = 0;
            if (Y = !N.detectDuplicates, I = !N.sortStable && e.slice(0), e.sort(Q), Y) {
                for (; t = e[r++];)t === e[r] && (i = n.push(r));
                for (; i--;)e.splice(n[i], 1)
            }
            return e
        }, E = n.getText = function (e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += E(e)
                } else if (3 === r || 4 === r)return e.nodeValue
            } else for (; t = e[i]; i++)n += E(t);
            return n
        }, k = n.selectors = {
            cacheLength: 50,
            createPseudo: o,
            match: wt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Nt, St), e[3] = (e[4] || e[5] || "").replace(Nt, St), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                }, PSEUDO: function (e) {
                    var n, i = !e[5] && e[2];
                    return wt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : i && bt.test(i) && (n = m(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (e[0] = e[0].slice(0, n), e[2] = i.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Nt, St).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = X[e + " "];
                    return t || (t = RegExp("(^|" + ut + ")" + e + "(" + ut + "|$)")) && X(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== J && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, t, i) {
                    return function (r) {
                        var o = n.attr(r, e);
                        return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.slice(-i.length) === i : "~=" === t ? (" " + o + " ").indexOf(i) > -1 : "|=" === t ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === i && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, d, f, h, p, m = o !== s ? "nextSibling" : "previousSibling", g = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !u && !a;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)return !1;
                                    p = m = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? g.firstChild : g.lastChild], s && y) {
                                for (c = g[U] || (g[U] = {}), l = c[e] || [], h = l[0] === $ && l[1], f = l[0] === $ && l[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (f = h = 0) || p.pop();)if (1 === d.nodeType && ++f && d === t) {
                                    c[e] = [$, h, f];
                                    break
                                }
                            } else if (y && (l = (t[U] || (t[U] = {}))[e]) && l[0] === $)f = l[1]; else for (; (d = ++h && d && d[m] || (f = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[U] || (d[U] = {}))[e] = [$, f]), d !== t)););
                            return f -= r, f === i || 0 === f % i && f / i >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var i, r = k.pseudos[e] || k.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return r[U] ? r(t) : r.length > 1 ? (i = [e, e, "", t], k.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function (e, n) {
                        for (var i, o = r(e, t), s = o.length; s--;)i = st.call(e, o[s]), e[i] = !(n[i] = o[s])
                    }) : function (e) {
                        return r(e, 0, i)
                    }) : r
                }
            },
            pseudos: {
                not: o(function (e) {
                    var t = [], n = [], i = M(e.replace(pt, "$1"));
                    return i[U] ? o(function (e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), !n.pop()
                    }
                }), has: o(function (e) {
                    return function (t) {
                        return n(e, t).length > 0
                    }
                }), contains: o(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                    }
                }), lang: o(function (e) {
                    return xt.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(Nt, St).toLowerCase(), function (t) {
                        var n;
                        do if (n = R ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === H
                }, focus: function (e) {
                    return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)return !1;
                    return !0
                }, parent: function (e) {
                    return !k.pseudos.empty(e)
                }, header: function (e) {
                    return Dt.test(e.nodeName)
                }, input: function (e) {
                    return Tt.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                }, first: p(function () {
                    return [0]
                }), last: p(function (e, t) {
                    return [t - 1]
                }), eq: p(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: p(function (e, t) {
                    for (var n = 0; t > n; n += 2)e.push(n);
                    return e
                }), odd: p(function (e, t) {
                    for (var n = 1; t > n; n += 2)e.push(n);
                    return e
                }), lt: p(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;)e.push(i);
                    return e
                }), gt: p(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; t > ++i;)e.push(i);
                    return e
                })
            }
        };
        for (A in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})k.pseudos[A] = f(A);
        for (A in{submit: !0, reset: !0})k.pseudos[A] = h(A);
        M = n.compile = function (e, t) {
            var n, i = [], r = [], o = G[e + " "];
            if (!o) {
                for (t || (t = m(e)), n = t.length; n--;)o = w(t[n]), o[U] ? i.push(o) : r.push(o);
                o = G(e, C(r, i))
            }
            return o
        }, k.pseudos.nth = k.pseudos.eq, D.prototype = k.filters = k.pseudos, k.setFilters = new D, N.sortStable = U.split("").sort(Q).join("") === U, j(), [0, 0].sort(Q), N.detectDuplicates = Y, ct.find = n, ct.expr = n.selectors, ct.expr[":"] = ct.expr.pseudos, ct.unique = n.uniqueSort, ct.text = n.getText, ct.isXMLDoc = n.isXML, ct.contains = n.contains
    }(e);
    var Dt = {};
    ct.Callbacks = function (e) {
        e = "string" == typeof e ? Dt[e] || i(e) : ct.extend({}, e);
        var n, r, o, s, a, u, l = [], c = !e.once && [], d = function (t) {
            for (r = e.memory && t, o = !0, a = u || 0, u = 0, s = l.length, n = !0; l && s > a; a++)if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                r = !1;
                break
            }
            n = !1, l && (c ? c.length && d(c.shift()) : r ? l = [] : f.disable())
        }, f = {
            add: function () {
                if (l) {
                    var t = l.length;
                    !function i(t) {
                        ct.each(t, function (t, n) {
                            var r = ct.type(n);
                            "function" === r ? e.unique && f.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                        })
                    }(arguments), n ? s = l.length : r && (u = t, d(r))
                }
                return this
            }, remove: function () {
                return l && ct.each(arguments, function (e, t) {
                    for (var i; (i = ct.inArray(t, l, i)) > -1;)l.splice(i, 1), n && (s >= i && s--, a >= i && a--)
                }), this
            }, has: function (e) {
                return e ? ct.inArray(e, l) > -1 : !(!l || !l.length)
            }, empty: function () {
                return l = [], s = 0, this
            }, disable: function () {
                return l = c = r = t, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return c = t, r || f.disable(), this
            }, locked: function () {
                return !c
            }, fireWith: function (e, t) {
                return t = t || [], t = [e, t.slice ? t.slice() : t], !l || o && !c || (n ? c.push(t) : d(t)), this
            }, fire: function () {
                return f.fireWith(this, arguments), this
            }, fired: function () {
                return !!o
            }
        };
        return f
    }, ct.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", ct.Callbacks("once memory"), "resolved"], ["reject", "fail", ct.Callbacks("once memory"), "rejected"], ["notify", "progress", ct.Callbacks("memory")]], n = "pending", i = {
                state: function () {
                    return n
                }, always: function () {
                    return r.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return ct.Deferred(function (n) {
                        ct.each(t, function (t, o) {
                            var s = o[0], a = ct.isFunction(e[t]) && e[t];
                            r[o[1]](function () {
                                var e = a && a.apply(this, arguments);
                                e && ct.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return null != e ? ct.extend(e, i) : i
                }
            }, r = {};
            return i.pipe = i.then, ct.each(t, function (e, o) {
                var s = o[2], a = o[3];
                i[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), e && e.call(r, r), r
        }, when: function (e) {
            var t, n, i, r = 0, o = ot.call(arguments), s = o.length, a = 1 !== s || e && ct.isFunction(e.promise) ? s : 0, u = 1 === a ? e : ct.Deferred(), l = function (e, n, i) {
                return function (r) {
                    n[e] = this, i[e] = arguments.length > 1 ? ot.call(arguments) : r, i === t ? u.notifyWith(n, i) : --a || u.resolveWith(n, i)
                }
            };
            if (s > 1)for (t = Array(s), n = Array(s), i = Array(s); s > r; r++)o[r] && ct.isFunction(o[r].promise) ? o[r].promise().done(l(r, i, o)).fail(u.reject).progress(l(r, n, t)) : --a;
            return a || u.resolveWith(i, o), u.promise()
        }
    }), ct.support = function (t) {
        var n, i, r, o, s, a, u, l, c, d = Y.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], i = d.getElementsByTagName("a")[0], !i || !i.style || !n.length)return t;
        o = Y.createElement("select"), a = o.appendChild(Y.createElement("option")), r = d.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(i.getAttribute("style")), t.hrefNormalized = "/a" === i.getAttribute("href"), t.opacity = /^0.5/.test(i.style.opacity), t.cssFloat = !!i.style.cssFloat, t.checkOn = !!r.value, t.optSelected = a.selected, t.enctype = !!Y.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, r.checked = !0, t.noCloneChecked = r.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !a.disabled;
        try {
            delete d.test
        } catch (f) {
            t.deleteExpando = !1
        }
        r = Y.createElement("input"), r.setAttribute("value", ""), t.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), t.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), s = Y.createDocumentFragment(), s.appendChild(r), t.appendChecked = r.checked, t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (c in{
            submit: !0,
            change: !0,
            focusin: !0
        })d.setAttribute(u = "on" + c, "t"), t[c + "Bubbles"] = u in e || d.attributes[u].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (c in ct(t))break;
        return t.ownLast = "0" !== c, ct(function () {
            var n, i, r, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", s = Y.getElementsByTagName("body")[0];
            s && (n = Y.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = d.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = l && 0 === r[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ct.swap(s, null != s.style.zoom ? {zoom: 1} : {}, function () {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {width: "4px"}).width, i = d.appendChild(Y.createElement("div")), i.style.cssText = d.style.cssText = o, i.style.marginRight = i.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), typeof d.style.zoom !== K && (d.innerHTML = "", d.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(n), n = d = r = i = null)
        }), n = o = s = a = i = r = null, t
    }({});
    var At = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Nt = /([A-Z])/g;
    ct.extend({
        cache: {},
        noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return e = e.nodeType ? ct.cache[e[ct.expando]] : e[ct.expando], !!e && !a(e)
        },
        data: function (e, t, n) {
            return r(e, t, n)
        },
        removeData: function (e, t) {
            return o(e, t)
        },
        _data: function (e, t, n) {
            return r(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return o(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)return !1;
            var t = e.nodeName && ct.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), ct.fn.extend({
        data: function (e, n) {
            var i, r, o = null, a = 0, u = this[0];
            if (e === t) {
                if (this.length && (o = ct.data(u), 1 === u.nodeType && !ct._data(u, "parsedAttrs"))) {
                    for (i = u.attributes; i.length > a; a++)r = i[a].name, 0 === r.indexOf("data-") && (r = ct.camelCase(r.slice(5)), s(u, r, o[r]));
                    ct._data(u, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                ct.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                ct.data(this, e, n)
            }) : u ? s(u, e, ct.data(u, e)) : null
        }, removeData: function (e) {
            return this.each(function () {
                ct.removeData(this, e)
            })
        }
    }), ct.extend({
        queue: function (e, n, i) {
            var r;
            return e ? (n = (n || "fx") + "queue", r = ct._data(e, n), i && (!r || ct.isArray(i) ? r = ct._data(e, n, ct.makeArray(i)) : r.push(i)), r || []) : t
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = ct.queue(e, t), i = n.length, r = n.shift(), o = ct._queueHooks(e, t), s = function () {
                ct.dequeue(e, t)
            };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ct._data(e, n) || ct._data(e, n, {
                    empty: ct.Callbacks("once memory").add(function () {
                        ct._removeData(e, t + "queue"), ct._removeData(e, n)
                    })
                })
        }
    }), ct.fn.extend({
        queue: function (e, n) {
            var i = 2;
            return "string" != typeof e && (n = e, e = "fx", i--), i > arguments.length ? ct.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = ct.queue(this, e, n);
                ct._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ct.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                ct.dequeue(this, e)
            })
        }, delay: function (e, t) {
            return e = ct.fx ? ct.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var i = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, n) {
            var i, r = 1, o = ct.Deferred(), s = this, a = this.length, u = function () {
                --r || o.resolveWith(s, [s])
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;)i = ct._data(s[a], e + "queueHooks"), i && i.empty && (r++, i.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var St, kt, Et = /[\t\r\n\f]/g, Lt = /\r/g, Mt = /^(?:input|select|textarea|button|object)$/i, Ot = /^(?:a|area)$/i, It = /^(?:checked|selected)$/i, jt = ct.support.getSetAttribute, Pt = ct.support.input;
    ct.fn.extend({
        attr: function (e, t) {
            return ct.access(this, ct.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                ct.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return ct.access(this, ct.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = ct.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {
                }
            })
        }, addClass: function (e) {
            var t, n, i, r, o, s = 0, a = this.length, u = "string" == typeof e && e;
            if (ct.isFunction(e))return this.each(function (t) {
                ct(this).addClass(e.call(this, t, this.className))
            });
            if (u)for (t = (e || "").match(ft) || []; a > s; s++)if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : " ")) {
                for (o = 0; r = t[o++];)0 > i.indexOf(" " + r + " ") && (i += r + " ");
                n.className = ct.trim(i)
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, r, o, s = 0, a = this.length, u = 0 === arguments.length || "string" == typeof e && e;
            if (ct.isFunction(e))return this.each(function (t) {
                ct(this).removeClass(e.call(this, t, this.className))
            });
            if (u)for (t = (e || "").match(ft) || []; a > s; s++)if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : "")) {
                for (o = 0; r = t[o++];)for (; i.indexOf(" " + r + " ") >= 0;)i = i.replace(" " + r + " ", " ");
                n.className = e ? ct.trim(i) : ""
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, i = "boolean" == typeof t;
            return this.each(ct.isFunction(e) ? function (n) {
                ct(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n)for (var r, o = 0, s = ct(this), a = t, u = e.match(ft) || []; r = u[o++];)a = i ? a : !s.hasClass(r), s[a ? "addClass" : "removeClass"](r); else(n === K || "boolean" === n) && (this.className && ct._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ct._data(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Et, " ").indexOf(t) >= 0)return !0;
            return !1
        }, val: function (e) {
            var n, i, r, o = this[0];
            return arguments.length ? (r = ct.isFunction(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (o = r ? e.call(this, n, ct(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ct.isArray(o) && (o = ct.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), i = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], i && "set"in i && i.set(this, o, "value") !== t || (this.value = o))
            })) : o ? (i = ct.valHooks[o.type] || ct.valHooks[o.nodeName.toLowerCase()], i && "get"in i && (n = i.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(Lt, "") : null == n ? "" : n)) : void 0
        }
    }), ct.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = ct.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            }, select: {
                get: function (e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, u = 0 > r ? a : o ? r : 0; a > u; u++)if (n = i[u], !(!n.selected && u !== r || (ct.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ct.nodeName(n.parentNode, "optgroup"))) {
                        if (t = ct(n).val(), o)return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    for (var n, i, r = e.options, o = ct.makeArray(t), s = r.length; s--;)i = r[s], (i.selected = ct.inArray(ct(i).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }, attr: function (e, n, i) {
            var r, o, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? typeof e.getAttribute === K ? ct.prop(e, n, i) : (1 === s && ct.isXMLDoc(e) || (n = n.toLowerCase(), r = ct.attrHooks[n] || (ct.expr.match.bool.test(n) ? kt : St)), i === t ? r && "get"in r && null !== (o = r.get(e, n)) ? o : (o = ct.find.attr(e, n), null == o ? t : o) : null !== i ? r && "set"in r && (o = r.set(e, i, n)) !== t ? o : (e.setAttribute(n, i + ""), i) : (ct.removeAttr(e, n), t)) : void 0
        }, removeAttr: function (e, t) {
            var n, i, r = 0, o = t && t.match(ft);
            if (o && 1 === e.nodeType)for (; n = o[r++];)i = ct.propFix[n] || n, ct.expr.match.bool.test(n) ? Pt && jt || !It.test(n) ? e[i] = !1 : e[ct.camelCase("default-" + n)] = e[i] = !1 : ct.attr(e, n, ""), e.removeAttribute(jt ? n : i)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ct.support.radioValue && "radio" === t && ct.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, n, i) {
            var r, o, s, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? (s = 1 !== a || !ct.isXMLDoc(e), s && (n = ct.propFix[n] || n, o = ct.propHooks[n]), i !== t ? o && "set"in o && (r = o.set(e, i, n)) !== t ? r : e[n] = i : o && "get"in o && null !== (r = o.get(e, n)) ? r : e[n]) : void 0
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = ct.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Mt.test(e.nodeName) || Ot.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), kt = {
        set: function (e, t, n) {
            return t === !1 ? ct.removeAttr(e, n) : Pt && jt || !It.test(n) ? e.setAttribute(!jt && ct.propFix[n] || n, n) : e[ct.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, ct.each(ct.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var i = ct.expr.attrHandle[n] || ct.find.attr;
        ct.expr.attrHandle[n] = Pt && jt || !It.test(n) ? function (e, n, r) {
            var o = ct.expr.attrHandle[n], s = r ? t : (ct.expr.attrHandle[n] = t) != i(e, n, r) ? n.toLowerCase() : null;
            return ct.expr.attrHandle[n] = o, s
        } : function (e, n, i) {
            return i ? t : e[ct.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), Pt && jt || (ct.attrHooks.value = {
        set: function (e, n, i) {
            return ct.nodeName(e, "input") ? (e.defaultValue = n, t) : St && St.set(e, n, i)
        }
    }), jt || (St = {
        set: function (e, n, i) {
            var r = e.getAttributeNode(i);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(i)), r.value = n += "", "value" === i || n === e.getAttribute(i) ? n : t
        }
    }, ct.expr.attrHandle.id = ct.expr.attrHandle.name = ct.expr.attrHandle.coords = function (e, n, i) {
        var r;
        return i ? t : (r = e.getAttributeNode(n)) && "" !== r.value ? r.value : null
    }, ct.valHooks.button = {
        get: function (e, n) {
            var i = e.getAttributeNode(n);
            return i && i.specified ? i.value : t
        }, set: St.set
    }, ct.attrHooks.contenteditable = {
        set: function (e, t, n) {
            St.set(e, "" === t ? !1 : t, n)
        }
    }, ct.each(["width", "height"], function (e, n) {
        ct.attrHooks[n] = {
            set: function (e, i) {
                return "" === i ? (e.setAttribute(n, "auto"), i) : t
            }
        }
    })), ct.support.hrefNormalized || ct.each(["href", "src"], function (e, t) {
        ct.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ct.support.style || (ct.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), ct.support.optSelected || (ct.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ct.propFix[this.toLowerCase()] = this
    }), ct.support.enctype || (ct.propFix.enctype = "encoding"), ct.each(["radio", "checkbox"], function () {
        ct.valHooks[this] = {
            set: function (e, n) {
                return ct.isArray(n) ? e.checked = ct.inArray(ct(e).val(), n) >= 0 : t
            }
        }, ct.support.checkOn || (ct.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Ht = /^(?:input|select|textarea)$/i, Rt = /^key/, Wt = /^(?:mouse|contextmenu)|click/, Ft = /^(?:focusinfocus|focusoutblur)$/, Bt = /^([^.]*)(?:\.(.+)|)$/;
    ct.event = {
        global: {},
        add: function (e, n, i, r, o) {
            var s, a, u, l, c, d, f, h, p, m, g, v = ct._data(e);
            if (v) {
                for (i.handler && (l = i, i = l.handler, o = l.selector), i.guid || (i.guid = ct.guid++), (a = v.events) || (a = v.events = {}), (d = v.handle) || (d = v.handle = function (e) {
                    return typeof ct === K || e && ct.event.triggered === e.type ? t : ct.event.dispatch.apply(d.elem, arguments)
                }, d.elem = e), n = (n || "").match(ft) || [""], u = n.length; u--;)s = Bt.exec(n[u]) || [], p = g = s[1], m = (s[2] || "").split(".").sort(), p && (c = ct.event.special[p] || {}, p = (o ? c.delegateType : c.bindType) || p, c = ct.event.special[p] || {}, f = ct.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && ct.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, l), (h = a[p]) || (h = a[p] = [], h.delegateCount = 0, c.setup && c.setup.call(e, r, m, d) !== !1 || (e.addEventListener ? e.addEventListener(p, d, !1) : e.attachEvent && e.attachEvent("on" + p, d))), c.add && (c.add.call(e, f), f.handler.guid || (f.handler.guid = i.guid)), o ? h.splice(h.delegateCount++, 0, f) : h.push(f), ct.event.global[p] = !0);
                e = null
            }
        },
        remove: function (e, t, n, i, r) {
            var o, s, a, u, l, c, d, f, h, p, m, g = ct.hasData(e) && ct._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(ft) || [""], l = t.length; l--;)if (a = Bt.exec(t[l]) || [], h = m = a[1], p = (a[2] || "").split(".").sort(), h) {
                    for (d = ct.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, f = c[h] || [], a = a[2] && RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length; o--;)s = f[o], !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (f.splice(o, 1), s.selector && f.delegateCount--, d.remove && d.remove.call(e, s));
                    u && !f.length && (d.teardown && d.teardown.call(e, p, g.handle) !== !1 || ct.removeEvent(e, h, g.handle), delete c[h])
                } else for (h in c)ct.event.remove(e, h + t[l], n, i, !0);
                ct.isEmptyObject(c) && (delete g.handle, ct._removeData(e, "events"))
            }
        },
        trigger: function (n, i, r, o) {
            var s, a, u, l, c, d, f, h = [r || Y], p = ut.call(n, "type") ? n.type : n, m = ut.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = d = r = r || Y, 3 !== r.nodeType && 8 !== r.nodeType && !Ft.test(p + ct.event.triggered) && (p.indexOf(".") >= 0 && (m = p.split("."), p = m.shift(), m.sort()), a = 0 > p.indexOf(":") && "on" + p, n = n[ct.expando] ? n : new ct.Event(p, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = r), i = null == i ? [n] : ct.makeArray(i, [n]), c = ct.event.special[p] || {}, o || !c.trigger || c.trigger.apply(r, i) !== !1)) {
                if (!o && !c.noBubble && !ct.isWindow(r)) {
                    for (l = c.delegateType || p, Ft.test(l + p) || (u = u.parentNode); u; u = u.parentNode)h.push(u), d = u;
                    d === (r.ownerDocument || Y) && h.push(d.defaultView || d.parentWindow || e)
                }
                for (f = 0; (u = h[f++]) && !n.isPropagationStopped();)n.type = f > 1 ? l : c.bindType || p, s = (ct._data(u, "events") || {})[n.type] && ct._data(u, "handle"), s && s.apply(u, i), s = a && u[a], s && ct.acceptData(u) && s.apply && s.apply(u, i) === !1 && n.preventDefault();
                if (n.type = p, !o && !n.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), i) === !1) && ct.acceptData(r) && a && r[p] && !ct.isWindow(r)) {
                    d = r[a], d && (r[a] = null), ct.event.triggered = p;
                    try {
                        r[p]()
                    } catch (g) {
                    }
                    ct.event.triggered = t, d && (r[a] = d)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = ct.event.fix(e);
            var n, i, r, o, s, a = [], u = ot.call(arguments), l = (ct._data(this, "events") || {})[e.type] || [], c = ct.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (a = ct.event.handlers.call(this, e, l), n = 0; (o = a[n++]) && !e.isPropagationStopped();)for (e.currentTarget = o.elem, s = 0; (r = o.handlers[s++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, i = ((ct.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, u), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var i, r, o, s, a = [], u = n.delegateCount, l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                for (o = [], s = 0; u > s; s++)r = n[s], i = r.selector + " ", o[i] === t && (o[i] = r.needsContext ? ct(i, this).index(l) >= 0 : ct.find(i, this, null, [l]).length), o[i] && o.push(r);
                o.length && a.push({elem: l, handlers: o})
            }
            return n.length > u && a.push({elem: this, handlers: n.slice(u)}), a
        },
        fix: function (e) {
            if (e[ct.expando])return e;
            var t, n, i, r = e.type, o = e, s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Wt.test(r) ? this.mouseHooks : Rt.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new ct.Event(o), t = i.length; t--;)n = i[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var i, r, o, s = n.button, a = n.fromElement;
                return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || Y, o = r.documentElement, i = r.body, e.pageX = n.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== c() && this.focus)try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === c() && this.blur ? (this.blur(), !1) : t
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return ct.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }, _default: function (e) {
                    return ct.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, i) {
            var r = ct.extend(new ct.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            i ? ct.event.trigger(r, null, t) : ct.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, ct.removeEvent = Y.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === K && (e[i] = null), e.detachEvent(i, n))
    }, ct.Event = function (e, n) {
        return this instanceof ct.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u : l) : this.type = e, n && ct.extend(this, n), this.timeStamp = e && e.timeStamp || ct.now(), this[ct.expando] = !0, t) : new ct.Event(e, n)
    }, ct.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = u, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = u, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = u, this.stopPropagation()
        }
    }, ct.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        ct.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return (!r || r !== i && !ct.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ct.support.submitBubbles || (ct.event.special.submit = {
        setup: function () {
            return ct.nodeName(this, "form") ? !1 : (ct.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target, i = ct.nodeName(n, "input") || ct.nodeName(n, "button") ? n.form : t;
                i && !ct._data(i, "submitBubbles") && (ct.event.add(i, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), ct._data(i, "submitBubbles", !0))
            }), t)
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ct.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            return ct.nodeName(this, "form") ? !1 : (ct.event.remove(this, "._submit"), t)
        }
    }), ct.support.changeBubbles || (ct.event.special.change = {
        setup: function () {
            return Ht.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ct.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ct.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ct.event.simulate("change", this, e, !0)
            })), !1) : (ct.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Ht.test(t.nodeName) && !ct._data(t, "changeBubbles") && (ct.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ct.event.simulate("change", this.parentNode, e, !0)
                }), ct._data(t, "changeBubbles", !0))
            }), t)
        }, handle: function (e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        }, teardown: function () {
            return ct.event.remove(this, "._change"), !Ht.test(this.nodeName)
        }
    }), ct.support.focusinBubbles || ct.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, i = function (e) {
            ct.event.simulate(t, e.target, ct.event.fix(e), !0)
        };
        ct.event.special[t] = {
            setup: function () {
                0 === n++ && Y.addEventListener(e, i, !0)
            }, teardown: function () {
                0 === --n && Y.removeEventListener(e, i, !0)
            }
        }
    }), ct.fn.extend({
        on: function (e, n, i, r, o) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = t);
                for (s in e)this.on(s, n, i, e[s], o);
                return this
            }
            if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), r === !1)r = l; else if (!r)return this;
            return 1 === o && (a = r, r = function (e) {
                return ct().off(e), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = ct.guid++)), this.each(function () {
                ct.event.add(this, e, r, i, n)
            })
        }, one: function (e, t, n, i) {
            return this.on(e, t, n, i, 1)
        }, off: function (e, n, i) {
            var r, o;
            if (e && e.preventDefault && e.handleObj)return r = e.handleObj, ct(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (o in e)this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = l), this.each(function () {
                ct.event.remove(this, e, i, n)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                ct.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, n) {
            var i = this[0];
            return i ? ct.event.trigger(e, n, i, !0) : t
        }
    });
    var qt = /^.[^:#\[\.,]*$/, Ut = /^(?:parents|prev(?:Until|All))/, Vt = ct.expr.match.needsContext, $t = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ct.fn.extend({
        find: function (e) {
            var t, n = [], i = this, r = i.length;
            if ("string" != typeof e)return this.pushStack(ct(e).filter(function () {
                for (t = 0; r > t; t++)if (ct.contains(i[t], this))return !0
            }));
            for (t = 0; r > t; t++)ct.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? ct.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, has: function (e) {
            var t, n = ct(e, this), i = n.length;
            return this.filter(function () {
                for (t = 0; i > t; t++)if (ct.contains(this, n[t]))return !0
            })
        }, not: function (e) {
            return this.pushStack(f(this, e || [], !0))
        }, filter: function (e) {
            return this.pushStack(f(this, e || [], !1))
        }, is: function (e) {
            return !!f(this, "string" == typeof e && Vt.test(e) ? ct(e) : e || [], !1).length
        }, closest: function (e, t) {
            for (var n, i = 0, r = this.length, o = [], s = Vt.test(e) || "string" != typeof e ? ct(e, t || this.context) : 0; r > i; i++)for (n = this[i]; n && n !== t; n = n.parentNode)if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && ct.find.matchesSelector(n, e))) {
                n = o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? ct.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? ct.inArray(this[0], ct(e)) : ct.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            var n = "string" == typeof e ? ct(e, t) : ct.makeArray(e && e.nodeType ? [e] : e), i = ct.merge(this.get(), n);
            return this.pushStack(ct.unique(i))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ct.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return ct.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return ct.dir(e, "parentNode", n)
        }, next: function (e) {
            return d(e, "nextSibling")
        }, prev: function (e) {
            return d(e, "previousSibling")
        }, nextAll: function (e) {
            return ct.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return ct.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return ct.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return ct.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return ct.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return ct.sibling(e.firstChild)
        }, contents: function (e) {
            return ct.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ct.merge([], e.childNodes)
        }
    }, function (e, t) {
        ct.fn[e] = function (n, i) {
            var r = ct.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = ct.filter(i, r)), this.length > 1 && ($t[e] || (r = ct.unique(r)), Ut.test(e) && (r = r.reverse())), this.pushStack(r)
        }
    }), ct.extend({
        filter: function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ct.find.matchesSelector(i, e) ? [i] : [] : ct.find.matches(e, ct.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, dir: function (e, n, i) {
            for (var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !ct(o).is(i));)1 === o.nodeType && r.push(o), o = o[n];
            return r
        }, sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var zt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Xt = / jQuery\d+="(?:null|\d+)"/g, Kt = RegExp("<(?:" + zt + ")[\\s/>]", "i"), Gt = /^\s+/, Yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Qt = /<([\w:]+)/, Jt = /<tbody/i, Zt = /<|&#?\w+;/, en = /<(?:script|style|link)/i, tn = /^(?:checkbox|radio)$/i, nn = /checked\s*(?:[^=]|=\s*.checked.)/i, rn = /^$|\/(?:java|ecma)script/i, on = /^true\/(.*)/, sn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, an = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ct.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, un = h(Y), ln = un.appendChild(Y.createElement("div"));
    an.optgroup = an.option, an.tbody = an.tfoot = an.colgroup = an.caption = an.thead, an.th = an.td, ct.fn.extend({
        text: function (e) {
            return ct.access(this, function (e) {
                return e === t ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            for (var n, i = e ? ct.filter(e, this) : this, r = 0; null != (n = i[r]); r++)t || 1 !== n.nodeType || ct.cleanData(x(n)), n.parentNode && (t && ct.contains(n.ownerDocument, n) && v(x(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ct.cleanData(x(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
                e.options && ct.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return ct.clone(this, e, t)
            })
        }, html: function (e) {
            return ct.access(this, function (e) {
                var n = this[0] || {}, i = 0, r = this.length;
                if (e === t)return 1 === n.nodeType ? n.innerHTML.replace(Xt, "") : t;
                if (!("string" != typeof e || en.test(e) || !ct.support.htmlSerialize && Kt.test(e) || !ct.support.leadingWhitespace && Gt.test(e) || an[(Qt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Yt, "<$1></$2>");
                    try {
                        for (; r > i; i++)n = this[i] || {}, 1 === n.nodeType && (ct.cleanData(x(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {
                    }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = ct.map(this, function (e) {
                return [e.nextSibling, e.parentNode]
            }), t = 0;
            return this.domManip(arguments, function (n) {
                var i = e[t++], r = e[t++];
                r && (i && i.parentNode !== r && (i = this.nextSibling), ct(this).remove(), r.insertBefore(n, i))
            }, !0), t ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t, n) {
            e = it.apply([], e);
            var i, r, o, s, a, u, l = 0, c = this.length, d = this, f = c - 1, h = e[0], p = ct.isFunction(h);
            if (p || !(1 >= c || "string" != typeof h || ct.support.checkClone) && nn.test(h))return this.each(function (i) {
                var r = d.eq(i);
                p && (e[0] = h.call(this, i, r.html())), r.domManip(e, t, n)
            });
            if (c && (u = ct.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = u.firstChild, 1 === u.childNodes.length && (u = i), i)) {
                for (s = ct.map(x(u, "script"), m), o = s.length; c > l; l++)r = u, l !== f && (r = ct.clone(r, !0, !0), o && ct.merge(s, x(r, "script"))), t.call(this[l], r, l);
                if (o)for (a = s[s.length - 1].ownerDocument, ct.map(s, g), l = 0; o > l; l++)r = s[l], rn.test(r.type || "") && !ct._data(r, "globalEval") && ct.contains(a, r) && (r.src ? ct._evalUrl(r.src) : ct.globalEval((r.text || r.textContent || r.innerHTML || "").replace(sn, "")));
                u = i = null
            }
            return this
        }
    }), ct.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        ct.fn[e] = function (e) {
            for (var n, i = 0, r = [], o = ct(e), s = o.length - 1; s >= i; i++)n = i === s ? this : this.clone(!0), ct(o[i])[t](n), rt.apply(r, n.get());
            return this.pushStack(r)
        }
    }), ct.extend({
        clone: function (e, t, n) {
            var i, r, o, s, a, u = ct.contains(e.ownerDocument, e);
            if (ct.support.html5Clone || ct.isXMLDoc(e) || !Kt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ln.innerHTML = e.outerHTML, ln.removeChild(o = ln.firstChild)), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ct.isXMLDoc(e)))for (i = x(o), a = x(e), s = 0; null != (r = a[s]); ++s)i[s] && b(r, i[s]);
            if (t)if (n)for (a = a || x(e), i = i || x(o), s = 0; null != (r = a[s]); s++)y(r, i[s]); else y(e, o);
            return i = x(o, "script"), i.length > 0 && v(i, !u && x(e, "script")), i = a = r = null, o
        }, buildFragment: function (e, t, n, i) {
            for (var r, o, s, a, u, l, c, d = e.length, f = h(t), p = [], m = 0; d > m; m++)if (o = e[m], o || 0 === o)if ("object" === ct.type(o))ct.merge(p, o.nodeType ? [o] : o); else if (Zt.test(o)) {
                for (a = a || f.appendChild(t.createElement("div")), u = (Qt.exec(o) || ["", ""])[1].toLowerCase(), c = an[u] || an._default, a.innerHTML = c[1] + o.replace(Yt, "<$1></$2>") + c[2], r = c[0]; r--;)a = a.lastChild;
                if (!ct.support.leadingWhitespace && Gt.test(o) && p.push(t.createTextNode(Gt.exec(o)[0])), !ct.support.tbody)for (o = "table" !== u || Jt.test(o) ? "<table>" !== c[1] || Jt.test(o) ? 0 : a : a.firstChild, r = o && o.childNodes.length; r--;)ct.nodeName(l = o.childNodes[r], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (ct.merge(p, a.childNodes), a.textContent = ""; a.firstChild;)a.removeChild(a.firstChild);
                a = f.lastChild
            } else p.push(t.createTextNode(o));
            for (a && f.removeChild(a), ct.support.appendChecked || ct.grep(x(p, "input"), w), m = 0; o = p[m++];)if ((!i || -1 === ct.inArray(o, i)) && (s = ct.contains(o.ownerDocument, o), a = x(f.appendChild(o), "script"), s && v(a), n))for (r = 0; o = a[r++];)rn.test(o.type || "") && n.push(o);
            return a = null, f
        }, cleanData: function (e, t) {
            for (var n, i, r, o, s = 0, a = ct.expando, u = ct.cache, l = ct.support.deleteExpando, c = ct.event.special; null != (n = e[s]); s++)if ((t || ct.acceptData(n)) && (r = n[a], o = r && u[r])) {
                if (o.events)for (i in o.events)c[i] ? ct.event.remove(n, i) : ct.removeEvent(n, i, o.handle);
                u[r] && (delete u[r], l ? delete n[a] : typeof n.removeAttribute !== K ? n.removeAttribute(a) : n[a] = null, tt.push(r))
            }
        }, _evalUrl: function (e) {
            return ct.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }
    }), ct.fn.extend({
        wrapAll: function (e) {
            if (ct.isFunction(e))return this.each(function (t) {
                ct(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ct(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return this.each(ct.isFunction(e) ? function (t) {
                ct(this).wrapInner(e.call(this, t))
            } : function () {
                var t = ct(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = ct.isFunction(e);
            return this.each(function (n) {
                ct(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var cn, dn, fn, hn = /alpha\([^)]*\)/i, pn = /opacity\s*=\s*([^)]*)/, mn = /^(top|right|bottom|left)$/, gn = /^(none|table(?!-c[ea]).+)/, vn = /^margin/, yn = RegExp("^(" + dt + ")(.*)$", "i"), bn = RegExp("^(" + dt + ")(?!px)[a-z%]+$", "i"), xn = RegExp("^([+-])=(" + dt + ")", "i"), wn = {BODY: "block"}, Cn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, _n = {
        letterSpacing: 0,
        fontWeight: 400
    }, Tn = ["Top", "Right", "Bottom", "Left"], Dn = ["Webkit", "O", "Moz", "ms"];
    ct.fn.extend({
        css: function (e, n) {
            return ct.access(this, function (e, n, i) {
                var r, o, s = {}, a = 0;
                if (ct.isArray(n)) {
                    for (o = dn(e), r = n.length; r > a; a++)s[n[a]] = ct.css(e, n[a], !1, o);
                    return s
                }
                return i !== t ? ct.style(e, n, i) : ct.css(e, n)
            }, e, n, arguments.length > 1)
        }, show: function () {
            return T(this, !0)
        }, hide: function () {
            return T(this)
        }, toggle: function (e) {
            var t = "boolean" == typeof e;
            return this.each(function () {
                (t ? e : _(this)) ? ct(this).show() : ct(this).hide()
            })
        }
    }), ct.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = fn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": ct.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, n, i, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, a, u = ct.camelCase(n), l = e.style;
                if (n = ct.cssProps[u] || (ct.cssProps[u] = C(l, u)), a = ct.cssHooks[n] || ct.cssHooks[u], i === t)return a && "get"in a && (o = a.get(e, !1, r)) !== t ? o : l[n];
                if (s = typeof i, "string" === s && (o = xn.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(ct.css(e, n)), s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" !== s || ct.cssNumber[u] || (i += "px"), ct.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (l[n] = "inherit"), a && "set"in a && (i = a.set(e, i, r)) === t)))try {
                    l[n] = i
                } catch (c) {
                }
            }
        },
        css: function (e, n, i, r) {
            var o, s, a, u = ct.camelCase(n);
            return n = ct.cssProps[u] || (ct.cssProps[u] = C(e.style, u)), a = ct.cssHooks[n] || ct.cssHooks[u], a && "get"in a && (s = a.get(e, !0, i)), s === t && (s = fn(e, n, r)), "normal" === s && n in _n && (s = _n[n]), "" === i || i ? (o = parseFloat(s), i === !0 || ct.isNumeric(o) ? o || 0 : s) : s
        }
    }), e.getComputedStyle ? (dn = function (t) {
        return e.getComputedStyle(t, null)
    }, fn = function (e, n, i) {
        var r, o, s, a = i || dn(e), u = a ? a.getPropertyValue(n) || a[n] : t, l = e.style;
        return a && ("" !== u || ct.contains(e.ownerDocument, e) || (u = ct.style(e, n)), bn.test(u) && vn.test(n) && (r = l.width, o = l.minWidth, s = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = a.width, l.width = r, l.minWidth = o, l.maxWidth = s)), u
    }) : Y.documentElement.currentStyle && (dn = function (e) {
        return e.currentStyle
    }, fn = function (e, n, i) {
        var r, o, s, a = i || dn(e), u = a ? a[n] : t, l = e.style;
        return null == u && l && l[n] && (u = l[n]), bn.test(u) && !mn.test(n) && (r = l.left, o = e.runtimeStyle, s = o && o.left, s && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = r, s && (o.left = s)), "" === u ? "auto" : u
    }), ct.each(["height", "width"], function (e, n) {
        ct.cssHooks[n] = {
            get: function (e, i, r) {
                return i ? 0 === e.offsetWidth && gn.test(ct.css(e, "display")) ? ct.swap(e, Cn, function () {
                    return N(e, n, r)
                }) : N(e, n, r) : t
            }, set: function (e, t, i) {
                var r = i && dn(e);
                return D(e, t, i ? A(e, n, i, ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ct.support.opacity || (ct.cssHooks.opacity = {
        get: function (e, t) {
            return pn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, i = e.currentStyle, r = ct.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ct.trim(o.replace(hn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = hn.test(o) ? o.replace(hn, r) : o + " " + r)
        }
    }), ct(function () {
        ct.support.reliableMarginRight || (ct.cssHooks.marginRight = {
            get: function (e, n) {
                return n ? ct.swap(e, {display: "inline-block"}, fn, [e, "marginRight"]) : t
            }
        }), !ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"], function (e, n) {
            ct.cssHooks[n] = {
                get: function (e, i) {
                    return i ? (i = fn(e, n), bn.test(i) ? ct(e).position()[n] + "px" : i) : t
                }
            }
        })
    }), ct.expr && ct.expr.filters && (ct.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ct.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ct.css(e, "display"))
    }, ct.expr.filters.visible = function (e) {
        return !ct.expr.filters.hidden(e)
    }), ct.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        ct.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)r[e + Tn[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, vn.test(e) || (ct.cssHooks[e + t].set = D)
    });
    var An = /%20/g, Nn = /\[\]$/, Sn = /\r?\n/g, kn = /^(?:submit|button|image|reset|file)$/i, En = /^(?:input|select|textarea|keygen)/i;
    ct.fn.extend({
        serialize: function () {
            return ct.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = ct.prop(this, "elements");
                return e ? ct.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !ct(this).is(":disabled") && En.test(this.nodeName) && !kn.test(e) && (this.checked || !tn.test(e))
            }).map(function (e, t) {
                var n = ct(this).val();
                return null == n ? null : ct.isArray(n) ? ct.map(n, function (e) {
                    return {name: t.name, value: e.replace(Sn, "\r\n")}
                }) : {name: t.name, value: n.replace(Sn, "\r\n")}
            }).get()
        }
    }), ct.param = function (e, n) {
        var i, r = [], o = function (e, t) {
            t = ct.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(e) || e.jquery && !ct.isPlainObject(e))ct.each(e, function () {
            o(this.name, this.value)
        }); else for (i in e)E(i, e[i], n, o);
        return r.join("&").replace(An, "+")
    }, ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        ct.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ct.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Ln, Mn, On = ct.now(), In = /\?/, jn = /#.*$/, Pn = /([?&])_=[^&]*/, Hn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Rn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Wn = /^(?:GET|HEAD)$/, Fn = /^\/\//, Bn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, qn = ct.fn.load, Un = {}, Vn = {}, $n = "*/".concat("*");
    try {
        Mn = G.href
    } catch (zn) {
        Mn = Y.createElement("a"), Mn.href = "", Mn = Mn.href
    }
    Ln = Bn.exec(Mn.toLowerCase()) || [], ct.fn.load = function (e, n, i) {
        if ("string" != typeof e && qn)return qn.apply(this, arguments);
        var r, o, s, a = this, u = e.indexOf(" ");
        return u >= 0 && (r = e.slice(u, e.length), e = e.slice(0, u)), ct.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (s = "POST"), a.length > 0 && ct.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n
        }).done(function (e) {
            o = arguments, a.html(r ? ct("<div>").append(ct.parseHTML(e)).find(r) : e)
        }).complete(i && function (e, t) {
                a.each(i, o || [e.responseText, t, e])
            }), this
    }, ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ct.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ct.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Mn,
            type: "GET",
            isLocal: Rn.test(Ln[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $n,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": ct.parseJSON, "text xml": ct.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? O(O(e, ct.ajaxSettings), t) : O(ct.ajaxSettings, e)
        },
        ajaxPrefilter: L(Un),
        ajaxTransport: L(Vn),
        ajax: function (e, n) {
            function i(e, n, i, r) {
                var o, d, y, b, w, _ = n;
                2 !== x && (x = 2, u && clearTimeout(u), c = t, a = r || "", C.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, i && (b = I(f, C, i)), b = j(f, b, C, o), o ? (f.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (ct.lastModified[s] = w), w = C.getResponseHeader("etag"), w && (ct.etag[s] = w)), 204 === e || "HEAD" === f.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = b.state, d = b.data, y = b.error, o = !y)) : (y = _, (e || !_) && (_ = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || _) + "", o ? m.resolveWith(h, [d, _, C]) : m.rejectWith(h, [C, _, y]), C.statusCode(v), v = t, l && p.trigger(o ? "ajaxSuccess" : "ajaxError", [C, f, o ? d : y]), g.fireWith(h, [C, _]), l && (p.trigger("ajaxComplete", [C, f]), --ct.active || ct.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, o, s, a, u, l, c, d, f = ct.ajaxSetup({}, n), h = f.context || f, p = f.context && (h.nodeType || h.jquery) ? ct(h) : ct.event, m = ct.Deferred(), g = ct.Callbacks("once memory"), v = f.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", C = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === x) {
                        if (!d)for (d = {}; t = Hn.exec(a);)d[t[1].toLowerCase()] = t[2];
                        t = d[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === x ? a : null
                },
                setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e, y[e] = t), this
                },
                overrideMimeType: function (e) {
                    return x || (f.mimeType = e), this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if (2 > x)for (t in e)v[t] = [v[t], e[t]]; else C.always(e[C.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || w;
                    return c && c.abort(t), i(0, t), this
                }
            };
            if (m.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, f.url = ((e || f.url || Mn) + "").replace(jn, "").replace(Fn, Ln[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = ct.trim(f.dataType || "*").toLowerCase().match(ft) || [""], null == f.crossDomain && (r = Bn.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === Ln[1] && r[2] === Ln[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Ln[3] || ("http:" === Ln[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = ct.param(f.data, f.traditional)), M(Un, f, n, C), 2 === x)return C;
            l = f.global, l && 0 === ct.active++ && ct.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Wn.test(f.type), s = f.url, f.hasContent || (f.data && (s = f.url += (In.test(s) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Pn.test(s) ? s.replace(Pn, "$1_=" + On++) : s + (In.test(s) ? "&" : "?") + "_=" + On++)), f.ifModified && (ct.lastModified[s] && C.setRequestHeader("If-Modified-Since", ct.lastModified[s]), ct.etag[s] && C.setRequestHeader("If-None-Match", ct.etag[s])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + $n + "; q=0.01" : "") : f.accepts["*"]);
            for (o in f.headers)C.setRequestHeader(o, f.headers[o]);
            if (f.beforeSend && (f.beforeSend.call(h, C, f) === !1 || 2 === x))return C.abort();
            w = "abort";
            for (o in{success: 1, error: 1, complete: 1})C[o](f[o]);
            if (c = M(Vn, f, n, C)) {
                C.readyState = 1, l && p.trigger("ajaxSend", [C, f]), f.async && f.timeout > 0 && (u = setTimeout(function () {
                    C.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, c.send(y, i)
                } catch (_) {
                    if (!(2 > x))throw _;
                    i(-1, _)
                }
            } else i(-1, "No Transport");
            return C
        },
        getJSON: function (e, t, n) {
            return ct.get(e, t, n, "json")
        },
        getScript: function (e, n) {
            return ct.get(e, t, n, "script")
        }
    }), ct.each(["get", "post"], function (e, n) {
        ct[n] = function (e, i, r, o) {
            return ct.isFunction(i) && (o = o || r, r = i, i = t), ct.ajax({
                url: e,
                type: n,
                dataType: o,
                data: i,
                success: r
            })
        }
    }), ct.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return ct.globalEval(e), e
            }
        }
    }), ct.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ct.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, i = Y.head || ct("head")[0] || Y.documentElement;
            return {
                send: function (t, r) {
                    n = Y.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || r(200, "success"))
                    }, i.insertBefore(n, i.firstChild)
                }, abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Xn = [], Kn = /(=)\?(?=&|$)|\?\?/;
    ct.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Xn.pop() || ct.expando + "_" + On++;
            return this[e] = !0, e
        }
    }), ct.ajaxPrefilter("json jsonp", function (n, i, r) {
        var o, s, a, u = n.jsonp !== !1 && (Kn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Kn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ct.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Kn, "$1" + o) : n.jsonp !== !1 && (n.url += (In.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return a || ct.error(o + " was not called"), a[0]
        }, n.dataTypes[0] = "json", s = e[o], e[o] = function () {
            a = arguments
        }, r.always(function () {
            e[o] = s, n[o] && (n.jsonpCallback = i.jsonpCallback, Xn.push(o)), a && ct.isFunction(s) && s(a[0]), a = s = t
        }), "script") : t
    });
    var Gn, Yn, Qn = 0, Jn = e.ActiveXObject && function () {
            var e;
            for (e in Gn)Gn[e](t, !0)
        };
    ct.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && P() || H()
    } : P, Yn = ct.ajaxSettings.xhr(), ct.support.cors = !!Yn && "withCredentials"in Yn, Yn = ct.support.ajax = !!Yn, Yn && ct.ajaxTransport(function (n) {
        if (!n.crossDomain || ct.support.cors) {
            var i;
            return {
                send: function (r, o) {
                    var s, a, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)for (a in n.xhrFields)u[a] = n.xhrFields[a];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in r)u.setRequestHeader(a, r[a])
                    } catch (l) {
                    }
                    u.send(n.hasContent && n.data || null), i = function (e, r) {
                        var a, l, c, d;
                        try {
                            if (i && (r || 4 === u.readyState))if (i = t, s && (u.onreadystatechange = ct.noop, Jn && delete Gn[s]), r)4 !== u.readyState && u.abort(); else {
                                d = {}, a = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (d.text = u.responseText);
                                try {
                                    c = u.statusText
                                } catch (f) {
                                    c = ""
                                }
                                a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = d.text ? 200 : 404
                            }
                        } catch (h) {
                            r || o(-1, h)
                        }
                        d && o(a, c, d, l)
                    }, n.async ? 4 === u.readyState ? setTimeout(i) : (s = ++Qn, Jn && (Gn || (Gn = {}, ct(e).unload(Jn)), Gn[s] = i), u.onreadystatechange = i) : i()
                }, abort: function () {
                    i && i(t, !0)
                }
            }
        }
    });
    var Zn, ei, ti = /^(?:toggle|show|hide)$/, ni = RegExp("^(?:([+-])=|)(" + dt + ")([a-z%]*)$", "i"), ii = /queueHooks$/, ri = [q], oi = {
        "*": [function (e, t) {
            var n = this.createTween(e, t), i = n.cur(), r = ni.exec(t), o = r && r[3] || (ct.cssNumber[e] ? "" : "px"), s = (ct.cssNumber[e] || "px" !== o && +i) && ni.exec(ct.css(n.elem, e)), a = 1, u = 20;
            if (s && s[3] !== o) {
                o = o || s[3], r = r || [], s = +i || 1;
                do a = a || ".5", s /= a, ct.style(n.elem, e, s + o); while (a !== (a = n.cur() / i) && 1 !== a && --u)
            }
            return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
        }]
    };
    ct.Animation = ct.extend(F, {
        tweener: function (e, t) {
            ct.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; r > i; i++)n = e[i], oi[n] = oi[n] || [], oi[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? ri.unshift(e) : ri.push(e)
        }
    }), ct.Tween = U, U.prototype = {
        constructor: U, init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ct.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = U.propHooks[this.prop];
            return e && e.get ? e.get(this) : U.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = U.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ct.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : U.propHooks._default.set(this), this
        }
    }, U.prototype.init.prototype = U.prototype, U.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ct.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                ct.fx.step[e.prop] ? ct.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ct.cssProps[e.prop]] || ct.cssHooks[e.prop]) ? ct.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, U.propHooks.scrollTop = U.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ct.each(["toggle", "show", "hide"], function (e, t) {
        var n = ct.fn[t];
        ct.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(V(t, !0), e, i, r)
        }
    }), ct.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(_).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, i) {
            var r = ct.isEmptyObject(e), o = ct.speed(t, n, i), s = function () {
                var t = F(this, ct.extend({}, e), o);
                (r || ct._data(this, "finish")) && t.stop(!0)
            };
            return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        }, stop: function (e, n, i) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(i)
            };
            return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, n = null != e && e + "queueHooks", o = ct.timers, s = ct._data(this);
                if (n)s[n] && s[n].stop && r(s[n]); else for (n in s)s[n] && s[n].stop && ii.test(n) && r(s[n]);
                for (n = o.length; n--;)o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(i), t = !1, o.splice(n, 1));
                (t || !i) && ct.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = ct._data(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = ct.timers, s = i ? i.length : 0;
                for (n.finish = !0, ct.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; s > t; t++)i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), ct.each({
        slideDown: V("show"),
        slideUp: V("hide"),
        slideToggle: V("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        ct.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), ct.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? ct.extend({}, e) : {
            complete: n || !n && t || ct.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ct.isFunction(t) && t
        };
        return i.duration = ct.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ct.fx.speeds ? ct.fx.speeds[i.duration] : ct.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            ct.isFunction(i.old) && i.old.call(this), i.queue && ct.dequeue(this, i.queue)
        }, i
    }, ct.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ct.timers = [], ct.fx = U.prototype.init, ct.fx.tick = function () {
        var e, n = ct.timers, i = 0;
        for (Zn = ct.now(); n.length > i; i++)e = n[i], e() || n[i] !== e || n.splice(i--, 1);
        n.length || ct.fx.stop(), Zn = t
    }, ct.fx.timer = function (e) {
        e() && ct.timers.push(e) && ct.fx.start()
    }, ct.fx.interval = 13, ct.fx.start = function () {
        ei || (ei = setInterval(ct.fx.tick, ct.fx.interval))
    }, ct.fx.stop = function () {
        clearInterval(ei), ei = null
    }, ct.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ct.fx.step = {}, ct.expr && ct.expr.filters && (ct.expr.filters.animated = function (e) {
        return ct.grep(ct.timers, function (t) {
            return e === t.elem
        }).length
    }), ct.fn.offset = function (e) {
        if (arguments.length)return e === t ? this : this.each(function (t) {
            ct.offset.setOffset(this, e, t)
        });
        var n, i, r = {top: 0, left: 0}, o = this[0], s = o && o.ownerDocument;
        return s ? (n = s.documentElement, ct.contains(n, o) ? (typeof o.getBoundingClientRect !== K && (r = o.getBoundingClientRect()), i = $(s), {
            top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : r) : void 0
    }, ct.offset = {
        setOffset: function (e, t, n) {
            var i = ct.css(e, "position");
            "static" === i && (e.style.position = "relative");
            var r, o, s = ct(e), a = s.offset(), u = ct.css(e, "top"), l = ct.css(e, "left"), c = ("absolute" === i || "fixed" === i) && ct.inArray("auto", [u, l]) > -1, d = {}, f = {};
            c ? (f = s.position(), r = f.top, o = f.left) : (r = parseFloat(u) || 0, o = parseFloat(l) || 0), ct.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (d.top = t.top - a.top + r), null != t.left && (d.left = t.left - a.left + o), "using"in t ? t.using.call(e, d) : s.css(d)
        }
    }, ct.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, i = this[0];
                return "fixed" === ct.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ct.nodeName(e[0], "html") || (n = e.offset()), n.top += ct.css(e[0], "borderTopWidth", !0), n.left += ct.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ct.css(i, "marginTop", !0),
                    left: t.left - n.left - ct.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Q; e && !ct.nodeName(e, "html") && "static" === ct.css(e, "position");)e = e.offsetParent;
                return e || Q
            })
        }
    }), ct.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
        var i = /Y/.test(n);
        ct.fn[e] = function (r) {
            return ct.access(this, function (e, r, o) {
                var s = $(e);
                return o === t ? s ? n in s ? s[n] : s.document.documentElement[r] : e[r] : (s ? s.scrollTo(i ? ct(s).scrollLeft() : o, i ? o : ct(s).scrollTop()) : e[r] = o, t)
            }, e, r, arguments.length, null)
        }
    }), ct.each({Height: "height", Width: "width"}, function (e, n) {
        ct.each({padding: "inner" + e, content: n, "": "outer" + e}, function (i, r) {
            ct.fn[r] = function (r, o) {
                var s = arguments.length && (i || "boolean" != typeof r), a = i || (r === !0 || o === !0 ? "margin" : "border");
                return ct.access(this, function (n, i, r) {
                    var o;
                    return ct.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? ct.css(n, i, a) : ct.style(n, i, r, a)
                }, n, s ? r : t, s, null)
            }
        })
    }), ct.fn.size = function () {
        return this.length
    }, ct.fn.andSelf = ct.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ct : (e.ADL.UI.jQuery = e.ADL.UI.$ = ct, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ct
    }))
}(window), function (e, t) {
    function n(t, n) {
        var r, o, s, a = t.nodeName.toLowerCase();
        return "area" === a ? (r = t.parentNode, o = r.name, t.href && o && "map" === r.nodeName.toLowerCase() ? (s = e("img[usemap=#" + o + "]")[0], !!s && i(s)) : !1) : (/input|select|textarea|button|object/.test(a) ? !t.disabled : "a" === a ? t.href || n : n) && i(t)
    }

    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
                return "hidden" === e.css(this, "visibility")
            }).length
    }

    var r = 0, o = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        focus: function (t) {
            return function (n, i) {
                return "number" == typeof n ? this.each(function () {
                    var t = this;
                    setTimeout(function () {
                        e(t).focus(), i && i.call(t)
                    }, n)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus), scrollParent: function () {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        }, zIndex: function (n) {
            if (n !== t)return this.css("zIndex", n);
            if (this.length)for (var i, r, o = e(this[0]); o.length && o[0] !== document;) {
                if (i = o.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (r = parseInt(o.css("zIndex"), 10), !isNaN(r) && 0 !== r))return r;
                o = o.parent()
            }
            return 0
        }, uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++r)
            })
        }, removeUniqueId: function () {
            return this.each(function () {
                o.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
            return function (n) {
                return !!e.data(n, t)
            }
        }) : function (t, n, i) {
            return !!e.data(t, i[3])
        }, focusable: function (t) {
            return n(t, !isNaN(e.attr(t, "tabindex")))
        }, tabbable: function (t) {
            var i = e.attr(t, "tabindex"), r = isNaN(i);
            return (r || i >= 0) && n(t, !r)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (n, i) {
        function r(t, n, i, r) {
            return e.each(o, function () {
                n -= parseFloat(e.css(t, "padding" + this)) || 0, i && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), r && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), n
        }

        var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], s = i.toLowerCase(), a = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + i] = function (n) {
            return n === t ? a["inner" + i].call(this) : this.each(function () {
                e(this).css(s, r(this, n) + "px")
            })
        }, e.fn["outer" + i] = function (t, n) {
            return "number" != typeof t ? a["outer" + i].call(this, t) : this.each(function () {
                e(this).css(s, r(this, t, !0, n) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
        return function (n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart"in document.createElement("div"), e.fn.extend({
        disableSelection: function () {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
                e.preventDefault()
            })
        }, enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function (t, n, i) {
                var r, o = e.ui[t].prototype;
                for (r in i)o.plugins[r] = o.plugins[r] || [], o.plugins[r].push([n, i[r]])
            }, call: function (e, t, n) {
                var i, r = e.plugins[t];
                if (r && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)for (i = 0; r.length > i; i++)e.options[r[i][0]] && r[i][1].apply(e.element, n)
            }
        }, hasScroll: function (t, n) {
            if ("hidden" === e(t).css("overflow"))return !1;
            var i = n && "left" === n ? "scrollLeft" : "scrollTop", r = !1;
            return t[i] > 0 ? !0 : (t[i] = 1, r = t[i] > 0, t[i] = 0, r)
        }
    })
}(ADL.UI.jQuery), function (e, t) {
    var n = 0, i = Array.prototype.slice, r = e.cleanData;
    e.cleanData = function (t) {
        for (var n, i = 0; null != (n = t[i]); i++)try {
            e(n).triggerHandler("remove")
        } catch (o) {
        }
        r(t)
    }, e.widget = function (n, i, r) {
        var o, s, a, u, l = {}, c = n.split(".")[0];
        n = n.split(".")[1], o = c + "-" + n, r || (r = i, i = e.Widget), e.expr[":"][o.toLowerCase()] = function (t) {
            return !!e.data(t, o)
        }, e[c] = e[c] || {}, s = e[c][n], a = e[c][n] = function (e, n) {
            return this._createWidget ? (arguments.length && this._createWidget(e, n), t) : new a(e, n)
        }, e.extend(a, s, {
            version: r.version,
            _proto: e.extend({}, r),
            _childConstructors: []
        }), u = new i, u.options = e.widget.extend({}, u.options), e.each(r, function (n, r) {
            return e.isFunction(r) ? (l[n] = function () {
                var e = function () {
                    return i.prototype[n].apply(this, arguments)
                }, t = function (e) {
                    return i.prototype[n].apply(this, e)
                };
                return function () {
                    var n, i = this._super, o = this._superApply;
                    return this._super = e, this._superApply = t, n = r.apply(this, arguments), this._super = i, this._superApply = o, n
                }
            }(), t) : (l[n] = r, t)
        }), a.prototype = e.widget.extend(u, {widgetEventPrefix: s ? u.widgetEventPrefix : n}, l, {
            constructor: a,
            namespace: c,
            widgetName: n,
            widgetFullName: o
        }), s ? (e.each(s._childConstructors, function (t, n) {
            var i = n.prototype;
            e.widget(i.namespace + "." + i.widgetName, a, n._proto)
        }), delete s._childConstructors) : i._childConstructors.push(a), e.widget.bridge(n, a)
    }, e.widget.extend = function (n) {
        for (var r, o, s = i.call(arguments, 1), a = 0, u = s.length; u > a; a++)for (r in s[a])o = s[a][r], s[a].hasOwnProperty(r) && o !== t && (n[r] = e.isPlainObject(o) ? e.isPlainObject(n[r]) ? e.widget.extend({}, n[r], o) : e.widget.extend({}, o) : o);
        return n
    }, e.widget.bridge = function (n, r) {
        var o = r.prototype.widgetFullName || n;
        e.fn[n] = function (s) {
            var a = "string" == typeof s, u = i.call(arguments, 1), l = this;
            return s = !a && u.length ? e.widget.extend.apply(null, [s].concat(u)) : s, this.each(a ? function () {
                var i, r = e.data(this, o);
                return r ? e.isFunction(r[s]) && "_" !== s.charAt(0) ? (i = r[s].apply(r, u), i !== r && i !== t ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : t) : e.error("no such method '" + s + "' for " + n + " widget instance") : e.error("cannot call methods on " + n + " prior to initialization; attempted to call method '" + s + "'")
            } : function () {
                var t = e.data(this, o);
                t ? t.option(s || {})._init() : e.data(this, o, new r(s, this))
            }), l
        }
    }, e.Widget = function () {
    }, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: !1, create: null},
        _createWidget: function (t, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function () {
            return this.element
        },
        option: function (n, i) {
            var r, o, s, a = n;
            if (0 === arguments.length)return e.widget.extend({}, this.options);
            if ("string" == typeof n)if (a = {}, r = n.split("."), n = r.shift(), r.length) {
                for (o = a[n] = e.widget.extend({}, this.options[n]), s = 0; r.length - 1 > s; s++)o[r[s]] = o[r[s]] || {}, o = o[r[s]];
                if (n = r.pop(), i === t)return o[n] === t ? null : o[n];
                o[n] = i
            } else {
                if (i === t)return this.options[n] === t ? null : this.options[n];
                a[n] = i
            }
            return this._setOptions(a), this
        },
        _setOptions: function (e) {
            var t;
            for (t in e)this._setOption(t, e[t]);
            return this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _on: function (n, i, r) {
            var o, s = this;
            "boolean" != typeof n && (r = i, i = n, n = !1), r ? (i = o = e(i), this.bindings = this.bindings.add(i)) : (r = i, i = this.element, o = this.widget()), e.each(r, function (r, a) {
                function u() {
                    return n || s.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? s[a] : a).apply(s, arguments) : t
                }

                "string" != typeof a && (u.guid = a.guid = a.guid || u.guid || e.guid++);
                var l = r.match(/^(\w+)\s*(.*)$/), c = l[1] + s.eventNamespace, d = l[2];
                d ? o.delegate(d, c, u) : i.bind(c, u)
            })
        },
        _off: function (e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function (e, t) {
            function n() {
                return ("string" == typeof e ? i[e] : e).apply(i, arguments)
            }

            var i = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                }, focusout: function (t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (t, n, i) {
            var r, o, s = this.options[t];
            if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], o = n.originalEvent)for (r in o)r in n || (n[r] = o[r]);
            return this.element.trigger(n, i), !(e.isFunction(s) && s.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
        }
    }, e.each({show: "fadeIn", hide: "fadeOut"}, function (t, n) {
        e.Widget.prototype["_" + t] = function (i, r, o) {
            "string" == typeof r && (r = {effect: r});
            var s, a = r ? r === !0 || "number" == typeof r ? n : r.effect || n : t;
            r = r || {}, "number" == typeof r && (r = {duration: r}), s = !e.isEmptyObject(r), r.complete = o, r.delay && i.delay(r.delay), s && e.effects && e.effects.effect[a] ? i[t](r) : a !== t && i[a] ? i[a](r.duration, r.easing, o) : i.queue(function (n) {
                e(this)[t](), o && o.call(i[0]), n()
            })
        }
    })
}(ADL.UI.jQuery), function (e) {
    var t = !1;
    e(document).mouseup(function () {
        t = !1
    }), e.widget("ui.mouse", {
        version: "1.10.3",
        options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
        _mouseInit: function () {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function (e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function (n) {
                return !0 === e.data(n.target, t.widgetName + ".preventClickEvent") ? (e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (n) {
            if (!t) {
                this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
                var i = this, r = 1 === n.which, o = "string" == typeof this.options.cancel && n.target.nodeName ? e(n.target).closest(this.options.cancel).length : !1;
                return r && !o && this._mouseCapture(n) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = this._mouseStart(n) !== !1, !this._mouseStarted) ? (n.preventDefault(), !0) : (!0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                    return i._mouseMove(e)
                }, this._mouseUpDelegate = function (e) {
                    return i._mouseUp(e)
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), n.preventDefault(), t = !0, !0)) : !0
            }
        },
        _mouseMove: function (t) {
            return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function (t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function (e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {
        },
        _mouseDrag: function () {
        },
        _mouseStop: function () {
        },
        _mouseCapture: function () {
            return !0
        }
    })
}(ADL.UI.jQuery), function (e, t) {
    e.widget("ui.progressbar", {
        version: "1.10.3",
        options: {max: 100, value: 0, change: null, complete: null},
        min: 0,
        _create: function () {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
        },
        _destroy: function () {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        },
        value: function (e) {
            return e === t ? this.options.value : (this.options.value = this._constrainedValue(e), this._refreshValue(), t)
        },
        _constrainedValue: function (e) {
            return e === t && (e = this.options.value), this.indeterminate = e === !1, "number" != typeof e && (e = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, e))
        },
        _setOptions: function (e) {
            var t = e.value;
            delete e.value, this._super(e), this.options.value = this._constrainedValue(t), this._refreshValue()
        },
        _setOption: function (e, t) {
            "max" === e && (t = Math.max(this.min, t)), this._super(e, t)
        },
        _percentage: function () {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function () {
            var t = this.options.value, n = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(n.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
        }
    })
}(ADL.UI.jQuery), function (e) {
    var t = 5;
    e.widget("ui.slider", e.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function () {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function () {
            var t, n, i = this.options, r = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", s = [];
            for (n = i.values && i.values.length || 1, r.length > n && (r.slice(n).remove(), r = r.slice(0, n)), t = r.length; n > t; t++)s.push(o);
            this.handles = r.add(e(s.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (t) {
                e(this).data("ui-slider-handle-index", t)
            })
        },
        _createRange: function () {
            var t = this.options, n = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = e("<div></div>").appendTo(this.element), n = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(n + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : this.range = e([])
        },
        _setupEvents: function () {
            var e = this.handles.add(this.range).filter("a");
            this._off(e), this._on(e, this._handleEvents), this._hoverable(e), this._focusable(e)
        },
        _destroy: function () {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function (t) {
            var n, i, r, o, s, a, u, l, c = this, d = this.options;
            return d.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), n = {
                x: t.pageX,
                y: t.pageY
            }, i = this._normValueFromMouse(n), r = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
                var n = Math.abs(i - c.values(t));
                (r > n || r === n && (t === c._lastChangedValue || c.values(t) === d.min)) && (r = n, o = e(this), s = t)
            }), a = this._start(t, s), a === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = s, o.addClass("ui-state-active").focus(), u = o.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - u.left - o.width() / 2,
                top: t.pageY - u.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, s, i), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (e) {
            var t = {x: e.pageX, y: e.pageY}, n = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, n), !1
        },
        _mouseStop: function (e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (e) {
            var t, n, i, r, o;
            return "horizontal" === this.orientation ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), i = n / t, i > 1 && (i = 1), 0 > i && (i = 0), "vertical" === this.orientation && (i = 1 - i), r = this._valueMax() - this._valueMin(), o = this._valueMin() + i * r, this._trimAlignValue(o)
        },
        _start: function (e, t) {
            var n = {handle: this.handles[t], value: this.value()};
            return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n)
        },
        _slide: function (e, t, n) {
            var i, r, o;
            this.options.values && this.options.values.length ? (i = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && n > i || 1 === t && i > n) && (n = i), n !== this.values(t) && (r = this.values(), r[t] = n, o = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n,
                values: r
            }), i = this.values(t ? 0 : 1), o !== !1 && this.values(t, n, !0))) : n !== this.value() && (o = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n
            }), o !== !1 && this.value(n))
        },
        _stop: function (e, t) {
            var n = {handle: this.handles[t], value: this.value()};
            this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n)
        },
        _change: function (e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var n = {handle: this.handles[t], value: this.value()};
                this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, n)
            }
        },
        value: function (e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function (t, n) {
            var i, r, o;
            if (arguments.length > 1)return this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), void this._change(null, t);
            if (!arguments.length)return this._values();
            if (!e.isArray(arguments[0]))return this.options.values && this.options.values.length ? this._values(t) : this.value();
            for (i = this.options.values, r = arguments[0], o = 0; i.length > o; o += 1)i[o] = this._trimAlignValue(r[o]), this._change(null, o);
            this._refreshValue()
        },
        _setOption: function (t, n) {
            var i, r = 0;
            switch ("range" === t && this.options.range === !0 && ("min" === n ? (this.options.value = this._values(0), this.options.values = null) : "max" === n && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (r = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments), t) {
                case"orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case"value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case"values":
                    for (this._animateOff = !0, this._refreshValue(), i = 0; r > i; i += 1)this._change(null, i);
                    this._animateOff = !1;
                    break;
                case"min":
                case"max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                    break;
                case"range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function () {
            var e = this.options.value;
            return e = this._trimAlignValue(e)
        },
        _values: function (e) {
            var t, n, i;
            if (arguments.length)return t = this.options.values[e], t = this._trimAlignValue(t);
            if (this.options.values && this.options.values.length) {
                for (n = this.options.values.slice(), i = 0; n.length > i; i += 1)n[i] = this._trimAlignValue(n[i]);
                return n
            }
            return []
        },
        _trimAlignValue: function (e) {
            if (this._valueMin() >= e)return this._valueMin();
            if (e >= this._valueMax())return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1, n = (e - this._valueMin()) % t, i = e - n;
            return 2 * Math.abs(n) >= t && (i += n > 0 ? t : -t), parseFloat(i.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var t, n, i, r, o, s = this.options.range, a = this.options, u = this, l = this._animateOff ? !1 : a.animate, c = {};
            this.options.values && this.options.values.length ? this.handles.each(function (i) {
                n = 100 * ((u.values(i) - u._valueMin()) / (u._valueMax() - u._valueMin())), c["horizontal" === u.orientation ? "left" : "bottom"] = n + "%", e(this).stop(1, 1)[l ? "animate" : "css"](c, a.animate), u.options.range === !0 && ("horizontal" === u.orientation ? (0 === i && u.range.stop(1, 1)[l ? "animate" : "css"]({left: n + "%"}, a.animate), 1 === i && u.range[l ? "animate" : "css"]({width: n - t + "%"}, {
                    queue: !1,
                    duration: a.animate
                })) : (0 === i && u.range.stop(1, 1)[l ? "animate" : "css"]({bottom: n + "%"}, a.animate), 1 === i && u.range[l ? "animate" : "css"]({height: n - t + "%"}, {
                    queue: !1,
                    duration: a.animate
                }))), t = n
            }) : (i = this.value(), r = this._valueMin(), o = this._valueMax(), n = o !== r ? 100 * ((i - r) / (o - r)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, a.animate), "min" === s && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({width: n + "%"}, a.animate), "max" === s && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({width: 100 - n + "%"}, {
                queue: !1,
                duration: a.animate
            }), "min" === s && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({height: n + "%"}, a.animate), "max" === s && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({height: 100 - n + "%"}, {
                queue: !1,
                duration: a.animate
            }))
        },
        _handleEvents: {
            keydown: function (n) {
                var i, r, o, s, a = e(n.target).data("ui-slider-handle-index");
                switch (n.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (n.preventDefault(), !this._keySliding && (this._keySliding = !0, e(n.target).addClass("ui-state-active"), i = this._start(n, a), i === !1))return
                }
                switch (s = this.options.step, r = o = this.options.values && this.options.values.length ? this.values(a) : this.value(), n.keyCode) {
                    case e.ui.keyCode.HOME:
                        o = this._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        o = this._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        o = this._trimAlignValue(r + (this._valueMax() - this._valueMin()) / t);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        o = this._trimAlignValue(r - (this._valueMax() - this._valueMin()) / t);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (r === this._valueMax())return;
                        o = this._trimAlignValue(r + s);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (r === this._valueMin())return;
                        o = this._trimAlignValue(r - s)
                }
                this._slide(n, a, o)
            }, click: function (e) {
                e.preventDefault()
            }, keyup: function (t) {
                var n = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, n), this._change(t, n), e(t.target).removeClass("ui-state-active"))
            }
        }
    })
}(ADL.UI.jQuery), function () {
    function e(e, t) {
        I = !1, b = ADL.UI.SetupAssistant.$$, b("#doneCheckingConnection").hide(), b("#busyCheckingConnection").show(), w = t.testConnDescr.authDetails, x = t.testConnDescr.scopeId, _ = t.linkQualityConnDescr, C = e;
        var n = new ADL.AddLiveServiceListener;
        n.onMediaConnTypeChanged = m, n.onMediaStats = p, ADL.getService().addServiceListener(ADL.r(), n), i(), o()
    }

    function t() {
        try {
            ADL.getService().disconnect(ADL.r(), x)
        } catch (e) {
        }
        I = !0
    }

    function n(e) {
        M !== N.BAD && e !== N.OK && (M = e)
    }

    function i() {
        if (!I) {
            D.d("Testing the CPU");
            var e = b(".cpuTest"), t = function (t) {
                var i = r(t);
                e.find(".cpuInfo").text(t.brand_string), v(e, i), D.d("CPU Test complete"), n(i)
            }, i = function () {
                j() ? e.html("<span class='heading'>1. CPU: skipping test for WebRTC</span>") : (e.hide(), b(".cpuErr").show()), n(N.WARN)
            };
            ADL.getService().getHostCpuDetails(ADL.r(t, i))
        }
    }

    function r(e) {
        var t = N.BAD;
        return void 0 !== k[e.cores] ? e.clock > k[e.cores].ok ? t = N.OK : e.clock > k[e.cores].warn && (t = N.WARN) : e.cores > 4 && (t = N.OK), T.each(E, function (n, i) {
            e.brand_string.match(i) && (t = N.WARN)
        }), T.each(L, function (n, i) {
            e.brand_string.match(i) && (t = N.BAD)
        }), t
    }

    function o() {
        if (!I) {
            D.d("Establishing RTT test connection");
            var e = {scopeId: x, authDetails: w, publishVideo: !1, publishAudio: !0};
            ADL.getService().connect(ADL.r(s, a), e)
        }
    }

    function s() {
        I && ADL.getService().disconnect(ADL.r(), x), D.d("RTT test connection established. Polling stats"), v(b(".connTest"), N.OK), ADL.getService().startMeasuringStatistics(ADL.r(), x, 1), c(), setTimeout(l, S)
    }

    function a() {
        D.w("Failed to connect"), v(b(".connTest"), N.BAD), u()
    }

    function u() {
        b(".connectivity-test").removeClass(N.PENDING).addClass(N.SKIPPED), b(".connectingMsg").html("No Internet connection"), h()
    }

    function l() {
        ADL.getService().disconnect(ADL.r(), x), g()
    }

    function c() {
        I || ADL.getService().networkTest(ADL.r(d, f), _)
    }

    function d(e) {
        if (!I) {
            var t;
            t = e !== ADL.ConnectionQuality.FINE ? N.WARN : N.OK, v(b(".bandwithTest"), t), b(".connectingMsg").html("Connection checked"), h()
        }
    }

    function f() {
        v(b(".bandwithTest"), N.WARN), b(".connectingMsg").html("Connection checked"), h()
    }

    function h() {
        I || (M === N.OK ? b(".goToPage5Btn").html('<a href="javascript://nop" class="btn-action">Next</a>').click(y) : b(".goToPage5Btn").html('<a href="javascript://nop" class="btn-action">I\'ll continue anyway</a>').click(y), b(".goToPage5Btn").parent().addClass("btn-holder"), b(".goToPage5Btn").next().removeClass(), b("#busyCheckingConnection").hide(), b("#doneCheckingConnection").show())
    }

    function p(e) {
        e.mediaType === ADL.MediaType.AUDIO && (D.d("Got media stats"), O.push(e.stats.rtt))
    }

    function m(e) {
        var t, n;
        switch (t = b(e.mediaType === ADL.MediaType.AUDIO ? ".connTypeAudioTest" : ".connTypeVideoTest"), e.connectionType) {
            case ADL.ConnectionType.UDP_RELAY:
                n = N.OK;
                break;
            case ADL.ConnectionType.TCP_RELAY:
                n = N.WARN
        }
        v(t, n)
    }

    function g() {
        var e, t = b(".distanceTest"), n = 0;
        T.each(O, function (e, t) {
            n += parseInt(t, 10)
        }), O.length > 0 && (n /= O.length), n > A ? e = N.WARN : (e = N.OK, t.find(".rttInfo").text(Math.floor(n))), v(t, e)
    }

    function v(e, t) {
        M !== N.BAD && t !== N.OK && (M = t), e.removeClass("loading").addClass(t)
    }

    function y() {
        C.result()
    }

    var b, x, w, C, _, T = ADL.UI.$, D = ADL.Log, A = 300, N = {
        BAD: "invalid",
        WARN: "warning",
        OK: "valid",
        PENDING: "loading",
        SKIPPED: "skipped"
    }, S = 15e3, k = {
        1: {warn: 2500, ok: Number.MAX_VALUE},
        2: {warn: 1700, ok: 2500},
        3: {warn: 1700, ok: 2500},
        4: {ok: 0}
    }, E = [/Atom/, /Celeron/], L = [/Pentium III/, /Pentium II/], M = N.OK, O = [], I = !1, j = function () {
        if (/Chrome\//.test(navigator.userAgent)) {
            var e = navigator.userAgent.match(/Chrome\/(\d+)/);
            if (e && e[1] && parseInt(e[1], 10) >= 42)return !0
        }
        return !1
    };
    ADL.UI.SAConnectivity = {start: e, terminate: t}
}(), function () {
    function e(e) {
        T = ADL.UI.SetupAssistant.$$, E = !1, L = !1, M = !1, O = !1, D = e, T(".camSelect").change(i), T(".micSelect").change(a), T(".spkSelect").change(h), T(".skipCam").click(s), T(".skipMic").click(c), T(".skipSpk").click(g), T(".micTestAgainBtn").click(u), T(".camTestAgainBtn").click(n), T(".playTestSoundBtn").click(v), T(".micActivityBar").progressbar({value: 10}), T(".volumeCtrlSlider").slider({
            min: 0,
            max: 255,
            animate: !0,
            value: 127,
            slide: y
        });
        var t = new ADL.AddLiveServiceListener;
        t.onDeviceListChanged = _, t.onMicActivity = f, ADL.getService().addServiceListener(ADL.r(), t), x(n)
    }

    function t() {
        try {
            O = !0, s(), c(), g()
        } catch (e) {
        }
    }

    function n() {
        if (!O) {
            I = !1;
            var e = T(".camSetupStepWrapper"), t = T(".camPreviewRenderer"), n = "adlSaRenderContainer" + (new Date).getTime(), i = function (e) {
                I ? ADL.getService().stopLocalVideo(ADL.r()) : (T(".camNextBtn").removeClass("disabled").click(r), ADL.renderSink({
                    sinkId: e,
                    containerId: n
                }), T(".camMessage").hide(), T(".camSucc").show())
            }, o = function () {
                E = !0, I || ADL.getService().startLocalVideo(ADL.r(i))
            }, s = function () {
                e.find(".camMessage").hide(), e.find(".camError").show()
            };
            T(".camMessage").show(), T(".camSucc").hide(), T(".camError").hide(), t.attr("id", n), ADL.getService().setVideoCaptureDevice(ADL.r(o, s), T(".camSelect").val())
        }
    }

    function i() {
        T(".camNextBtn").addClass("disabled").unbind("click"), n()
    }

    function r() {
        o(!0)
    }

    function o(e) {
        ADL.getService().stopLocalVideo(ADL.r()), T(".camSetupStepWrapper").addClass(e ? "valid" : "warning"), T(".skipCamWrapper").hide(), T(".camNextBtn").addClass("disabled").unbind("click"), I = !0, u()
    }

    function s() {
        o(!1)
    }

    function a() {
        u()
    }

    function u() {
        if (!O) {
            j = !1, T(".micSetupStepWrapper").show(), T(".micMsg").show(), T(".micError").hide(), T(".micSucc").hide();
            var e = T(".micSelect").val(), t = function () {
                L = !0, ADL.getService().setMicrophoneVolume(ADL.r(), 125), ADL.getService().monitorMicActivity(ADL.r(), !0), A = setTimeout(l, S)
            }, n = function () {
                L = !1, T(".micMsg").hide(), T(".micError").show()
            };
            T(".micNextBtn").unbind("click").addClass("disabled"), ADL.getService().setAudioCaptureDevice(ADL.r(t, n), e)
        }
    }

    function l(e) {
        j || (T(".micMsg").hide(), e ? (T(".micNextBtn").click(function () {
            d(!0)
        }).removeClass("disabled"), T(".micError").hide(), T(".micSucc").show()) : T(".micError").show())
    }

    function c() {
        d(!1)
    }

    function d(e) {
        ADL.getService().monitorMicActivity(ADL.r(), !1), j = !0, T(".micSetupStepWrapper").addClass(e ? "valid" : "warning"), T(".micNextBtn").addClass("disabled").unbind("click"), T(".skipMicWrapper").hide(), p()
    }

    function f(e) {
        j || (T(".micActivityBar").progressbar("value", e.activity / 255 * 100), e.activity > k && (clearTimeout(A), l(!0)))
    }

    function h() {
        p()
    }

    function p() {
        if (!O) {
            var e = T(".spkSelect").val(), t = function () {
                M = !0;
                var e = function (e) {
                    T(".volumeCtrlSlider").slider("value", e)
                };
                ADL.getService().getSpeakersVolume(ADL.r(e))
            }, n = function () {
                M = !1, T(".spkMsg").hide(), T(".spkError").show()
            };
            T(".spkSetupStepWrapper").show(), T(".spkMsg").show(), T(".spkError").hide(), T(".spkSucc").hide(), ADL.getService().setAudioOutputDevice(ADL.r(t, n), e)
        }
    }

    function m(e) {
        return T(".spkSetupStepWrapper").addClass(e ? "valid" : "warning"), T(".spkNextBtn").addClass("disabled").unbind("click"), T(".playTestSoundBtn").addClass("disabled").unbind("click"), T(".skipSpkWrapper").hide(), b(), !1
    }

    function g() {
        m(!1)
    }

    function v() {
        var e = function () {
            T(".spkNextBtn").removeClass("disabled").click(function () {
                m(!0)
            }), T(".spkMsg").hide(), T(".spkSucc").show()
        }, t = function () {
            T(".spkMsg").hide(), T(".spkError").show()
        };
        ADL.getService().startPlayingTestSound(ADL.r(e, t))
    }

    function y(e, t) {
        ADL.getService().setSpeakersVolume(ADL.r(), t.value)
    }

    function b() {
        T(".goToPage6Btn").parent().addClass("btn-holder"), T(".goToPage6Btn").html('<a href="javascript://nop" class="btn-action">Next</a>').click(C), T(".goToPage6Btn").next().removeClass()
    }

    function x(e) {
        var t = 3, n = function () {
            t -= 1, 0 === t && e()
        };
        w(".camSelect", "VideoCapture", n), w(".micSelect", "AudioCapture", n), w(".spkSelect", "AudioOutput", n)
    }

    function w(e, t, n) {
        var i = function (i) {
            var r = T(e);
            r.empty(), N.each(i, function (e, t) {
                N('<option value="' + e + '">' + t + "</option>").appendTo(r)
            });
            var o = function (e) {
                r.val(e), n()
            };
            ADL.getService()["get" + t + "Device"](ADL.r(o))
        };
        ADL.getService()["get" + t + "DeviceNames"](ADL.r(i))
    }

    function C() {
        D.result({audioCaptureDevFunctional: L, videoCaptureDevFunctional: E, audioOutputDevFunctional: M})
    }

    function _(e) {
        e.audioInChanged && w(".micSelect", "AudioCapture"), e.audioOutChanged && w(".spkSelect", "AudioOutput"), e.videoInChanged && w(".camSelect", "VideoCapture")
    }

    var T, D, A, N = ADL.UI.$, S = 8e3, k = 20, E = !1, L = !1, M = !1, O = !1, I = !1, j = !1;
    ADL.UI.SADevicesSetup = {start: e, terminate: t}
}(), function () {
    function e(e, t) {
        p = t, m = e;
        var i = n();
        ADL.initPlatform(i, t.platformOptions)
    }

    function t(e) {
        return w.find(e)
    }

    function n() {
        var e = new ADL.PlatformInitListener;
        return e.onInitProgressChanged = function (e) {
            m.onInitProgressChanged(e)
        }, e.onInitStateChanged = function (e) {
            switch (e.state) {
                case ADL.InitState.INSTALLATION_REQUIRED:
                    s(e.installerURL);
                    break;
                case ADL.InitState.INSTALLATION_COMPLETE:
                    u();
                    break;
                case ADL.InitState.INITIALIZED:
                    if (_)return void c();
                    break;
                case ADL.InitState.DEVICES_INIT_BEGIN:
                    T = !0, p.alwaysShow && s()
            }
            m.onInitStateChanged(e)
        }, e
    }

    function i() {
        if (ADL.UI.SADevicesSetup.terminate(), ADL.UI.SAConnectivity.terminate(), T)r(); else {
            o();
            var e = new ADL.InitStateChangedEvent(ADL.InitState.ERROR, void 0, y.ErrorCodes.USER_INTERRUPTION, "User cancelled the installation before the SDK was ready");
            m.onInitStateChanged(e), m.onInitProgressChanged(100)
        }
    }

    function r() {
        o();
        var e = new ADL.InitStateChangedEvent(ADL.InitState.INITIALIZED);
        b.each(C, function (t, n) {
            e[t] = n
        }), m.onInitStateChanged(e), m.onInitProgressChanged(100)
    }

    function o() {
        w.remove(), b(document.body).css({height: g, overflow: v})
    }

    function s(e) {
        if (!_) {
            _ = !0;
            var n = function (n) {
                return window.scrollTo(0, 0), g = b(document.body).css("height"), v = b(document.body).css("overflow"), b(document.body).css({
                    height: "100%",
                    overflow: "hidden"
                }), b(document.body).append(b(n)), w = b(".adlSetupAssistant"), t(".btn-cancel").click(i), p.label && (t(".adl-label").text(p.label), t("a.adl-label").attr("href", p.labelUrl)), e ? (w.addClass(ADL.UI.ENV.os).addClass(ADL.UI.ENV.browser), b(".adl-page1").css("display", "block"), b(".adl-footer1").css("display", "block"), t(".btn-install").attr("href", e), void("firefox" === ADL.UI.ENV.browser ? t(".btn-install-main").attr("href", e).click(l) : t(".btn-install-main").click(function () {
                    l(), setTimeout(function () {
                        w.append('<iframe width="0" height="0" frameborder="0" src="' + e + '"></iframe>')
                    }, 100)
                }))) : void u()
            }, r = function () {
                m.onInitProgressChanged(100);
                var e = new ADL.InitStateChangedEvent(ADL.InitState.ERROR, void 0, ADL.ErrorCodes.Communication.NETWORK_ERROR, "Cannot initialize the SDK as plug-in installation is needed but SDK failed to get the installer URL due to Internet failure");
                m.onInitStateChanged(e)
            }, o = p.templateURL || ADL.UI._ASSETS_ROOT + x;
            ADL.Utils.doGet(ADL.r(n, r), o)
        }
    }

    function a(e) {
        t(".main").hide(), t(".footerContent").hide(), t(".adl-page" + e).css("display", "block"), t(".adl-footer" + e).css("display", "block")
    }

    function u() {
        a(3)
    }

    function l() {
        a(2)
    }

    function c() {
        a(4), y.SAConnectivity.start(ADL.r(d), p)
    }

    function d() {
        a(5), y.SADevicesSetup.start(ADL.r(f), p)
    }

    function f(e) {
        C = e, a(6), t(".doneBtn").css("display", "inline-block").click(r)
    }

    function h() {
        var e = window.navigator.userAgent;
        ADL.UI.ENV = {
            os: "other",
            browser: "browser-other"
        }, /Windows/.test(e) ? ADL.UI.ENV.os = "win" : /Intel Mac/.test(e) && (ADL.UI.ENV.os = "mac"), /Chrome/.test(e) ? ADL.UI.ENV.browser = "chrome" : /Firefox/.test(e) && (ADL.UI.ENV.browser = "firefox")
    }

    var p, m, g, v, y = ADL.UI, b = y.jQuery, x = "/html/setup_assistant.html", w = null, C = {}, _ = !1, T = !1;
    h(), y.SetupAssistant = {
        $$: t, initPlatform: e, updateContainer: function () {
            w = b(".adlSetupAssistant")
        }
    }, y.ErrorCodes = {USER_INTERRUPTION: "USER_INTERRUPTION"}
}(), function () {
    ADL.UI._ASSETS_ROOT = "/assets/addlive-setup-assistant"
}();