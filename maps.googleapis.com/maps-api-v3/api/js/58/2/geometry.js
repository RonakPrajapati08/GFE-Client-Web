google.maps.__gjsload__('geometry', function(_) {
    var Zra = function(a, b) {
            return Math.abs(_.$i(b - a, -180, 180))
        },
        $ra = function(a, b, c, d, e) {
            if (!d) {
                c = Zra(a.lng(), c) / Zra(a.lng(), b.lng());
                if (!e) return e = Math.sin(_.Vf(a.lat())), e = Math.log((1 + e) / (1 - e)) / 2, b = Math.sin(_.Vf(b.lat())), _.Wf(2 * Math.atan(Math.exp(e + c * (Math.log((1 + b) / (1 - b)) / 2 - e))) - Math.PI / 2);
                a = e.fromLatLngToPoint(a);
                b = e.fromLatLngToPoint(b);
                return e.fromPointToLatLng(new _.Vk(a.x + c * (b.x - a.x), a.y + c * (b.y - a.y))).lat()
            }
            e = _.Vf(a.lat());
            a = _.Vf(a.lng());
            d = _.Vf(b.lat());
            b = _.Vf(b.lng());
            c = _.Vf(c);
            return _.$i(_.Wf(Math.atan2(Math.sin(e) *
                Math.cos(d) * Math.sin(c - b) - Math.sin(d) * Math.cos(e) * Math.sin(c - a), Math.cos(e) * Math.cos(d) * Math.sin(a - b))), -90, 90)
        },
        asa = function(a, b) {
            a = new _.Ej(a, !1);
            b = new _.Ej(b, !1);
            return a.equals(b)
        },
        bsa = function(a, b) {
            const c = [];
            let d = [0, 0],
                e;
            for (let f = 0, g = _.Si(a); f < g; ++f) e = b ? b(a[f]) : a[f], lA.mD(e[0] - d[0], c), lA.mD(e[1] - d[1], c), d = e;
            return c.join("")
        },
        mA = {
            containsLocation: function(a, b) {
                a = _.Jj(a);
                const c = _.$i(a.lng(), -180, 180),
                    d = !!b.get("geodesic"),
                    e = b.get("latLngs");
                var f = b.get("map");
                f = !d && f ? f.getProjection() : null;
                let g = !1;
                for (let k = 0, m = e.getLength(); k < m; ++k) {
                    const p = e.getAt(k);
                    for (let t = 0, u = p.getLength(); t < u; ++t) {
                        const w = p.getAt(t),
                            x = p.getAt((t + 1) % u);
                        var h = _.$i(w.lng(), -180, 180);
                        const z = _.$i(x.lng(), -180, 180),
                            B = Math.max(h, z);
                        h = Math.min(h, z);
                        (B - h > 180 ? c >= B || c < h : c < B && c >= h) && $ra(w, x, c, d, f) < a.lat() && (g = !g)
                    }
                }
                return g || mA.isLocationOnEdge(a, b)
            }
        };
    _.Ga("module$exports$mapsapi$geometry$polyGeometry.PolyGeometry.containsLocation", mA.containsLocation);
    mA.isLocationOnEdge = function(a, b, c) {
        a = _.Jj(a);
        c = c || 1E-9;
        const d = _.$i(a.lng(), -180, 180),
            e = b instanceof _.gn,
            f = !!b.get("geodesic"),
            g = b.get("latLngs");
        b = b.get("map");
        b = !f && b ? b.getProjection() : null;
        for (let t = 0, u = g.getLength(); t < u; ++t) {
            const w = g.getAt(t),
                x = w.getLength(),
                z = e ? x : x - 1;
            for (let B = 0; B < z; ++B) {
                var h = w.getAt(B);
                const C = w.getAt((B + 1) % x);
                if (asa(h, a) || asa(C, a)) return !0;
                var k = _.$i(h.lng(), -180, 180),
                    m = _.$i(C.lng(), -180, 180);
                const F = Math.max(k, m),
                    J = Math.min(k, m);
                if (k = Math.abs(_.$i(k - m, -180, 180)) <= 1E-9 &&
                    (Math.abs(_.$i(k - d, -180, 180)) <= c || Math.abs(_.$i(m - d, -180, 180)) <= c)) {
                    k = a.lat();
                    m = Math.min(h.lat(), C.lat()) - c;
                    var p = Math.max(h.lat(), C.lat()) + c;
                    k = k >= m && k <= p
                }
                if (k) return !0;
                if (F - J > 180 ? d + c >= F || d - c <= J : d + c >= J && d - c <= F)
                    if (h = $ra(h, C, d, f, b), Math.abs(h - a.lat()) < c) return !0
            }
        }
        return !1
    };
    _.Ga("module$exports$mapsapi$geometry$polyGeometry.PolyGeometry.isLocationOnEdge", mA.isLocationOnEdge);
    var lA = {
        decodePath: function(a) {
            const b = _.Si(a),
                c = Array(Math.floor(a.length / 2));
            let d = 0,
                e = 0,
                f = 0,
                g;
            for (g = 0; d < b; ++g) {
                let h = 1,
                    k = 0,
                    m;
                do m = a.charCodeAt(d++) - 63 - 1, h += m << k, k += 5; while (m >= 31);
                e += h & 1 ? ~(h >> 1) : h >> 1;
                h = 1;
                k = 0;
                do m = a.charCodeAt(d++) - 63 - 1, h += m << k, k += 5; while (m >= 31);
                f += h & 1 ? ~(h >> 1) : h >> 1;
                c[g] = new _.Ej(e * 1E-5, f * 1E-5, !0)
            }
            c.length = g;
            return c
        }
    };
    _.Ga("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.decodePath", lA.decodePath);
    lA.encodePath = function(a) {
        a instanceof _.Ol && (a = a.getArray());
        a = (0, _.rk)(a);
        return bsa(a, function(b) {
            return [Math.round(b.lat() * 1E5), Math.round(b.lng() * 1E5)]
        })
    };
    _.Ga("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.encodePath", lA.encodePath);
    lA.mD = function(a, b) {
        for (a = a < 0 ? ~(a << 1) : a << 1; a >= 32;) b.push(String.fromCharCode((32 | a & 31) + 63)), a >>= 5;
        b.push(String.fromCharCode(a + 63))
    };
    var csa = {
        encoding: lA,
        spherical: _.op,
        poly: mA
    };
    _.ra.google.maps.geometry = csa;
    _.Li("geometry", csa);
});