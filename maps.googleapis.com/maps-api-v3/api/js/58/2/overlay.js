google.maps.__gjsload__('overlay', function(_) {
    var yC = function(a) {
            this.Eg = a
        },
        mya = function() {},
        zC = function(a) {
            a.sz = a.sz || new mya;
            return a.sz
        },
        nya = function(a) {
            this.Fh = new _.nm(() => {
                const b = a.sz;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Cx && a.onAdd) a.onAdd();
                        b.Cx = !0;
                        a.draw()
                    }
                } else {
                    if (b.Cx)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Cx = !1
                }
            }, 0)
        },
        oya = function(a, b) {
            const c = zC(a);
            let d = c.Gw;
            d || (d = c.Gw = new nya(a));
            _.Mb(c.Rh || [], _.Vj);
            var e = c.pi = c.pi || new _.Wra;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            e = c.oD = c.oD || new yC(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.om(d.Fh);
            c.Rh = [_.Tj(a, "panes_changed", e), _.Tj(f, "zoom_changed", e), _.Tj(f, "offset_changed", e), _.Tj(b, "projection_changed", e), _.Tj(f, "projectioncenterq_changed", e)];
            _.om(d.Fh);
            b instanceof _.ok ? (_.Ok(b, "Ox"), _.L(b, 148440)) : b instanceof _.el && (_.Ok(b, "Oxs"),
                _.L(b, 181451))
        },
        tya = function(a) {
            if (a) {
                var b = a.getMap();
                if (pya(a) !== b && b && b instanceof _.ok) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new qya(b, a, c.overlayLayer) : c.Fg.then(({
                        lh: d
                    }) => {
                        const e = new rya(b, d);
                        d.Bi(e);
                        c.overlayLayer = e;
                        sya(a);
                        tya(a)
                    })
                }
            }
        },
        sya = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.Eg.unbindAll(), b.Eg.set("panes", null), b.Eg.set("projection", null), b.Hg.xl(b), b.Fg && (b.Fg = !1, b.Eg.onRemove ? b.Eg.onRemove() : b.Eg.remove()))
            }
        },
        pya = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        uya = function(a,
            b) {
            a.Eg.get("projection") != b && (a.Eg.bindTo("panes", a.map.__gm), a.Eg.set("projection", b))
        };
    _.Ia(yC, _.jk);
    yC.prototype.changed = function(a) {
        a != "outProjection" && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.cj(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.Eg : null))
    };
    var AC = {};
    _.Ia(nya, _.jk);
    AC.Dl = function(a) {
        if (a) {
            var b = a.getMap();
            (zC(a).VC || null) !== b && (b && oya(a, b), zC(a).VC = b)
        }
    };
    AC.xl = function(a) {
        const b = zC(a);
        var c = b.pi;
        c && c.unbindAll();
        (c = b.oD) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Rh && _.Mb(b.Rh, _.Vj);
        b.Rh = null;
        b.Gw && (b.Gw.Fh.Ej(), b.Gw = null);
        delete zC(a).VC
    };
    var BC = {},
        qya = class {
            constructor(a, b, c) {
                this.map = a;
                this.Eg = b;
                this.Hg = c;
                this.Fg = !1;
                _.Ok(this.map, "Ox");
                _.L(this.map, 148440);
                c.Dl(this)
            }
            draw() {
                this.Fg || (this.Fg = !0, this.Eg.onAdd && this.Eg.onAdd());
                this.Eg.draw && this.Eg.draw()
            }
        },
        rya = class {
            constructor(a, b) {
                this.Ig = a;
                this.Hg = b;
                this.Eg = null;
                this.Fg = []
            }
            dispose() {}
            di(a, b, c, d, e, f, g, h) {
                const k = this.Eg = this.Eg || new _.tz(this.Ig, this.Hg, () => {});
                k.di(a, b, c, d, e, f, g, h);
                for (const m of this.Fg) uya(m, k), m.draw()
            }
            Dl(a) {
                this.Fg.push(a);
                this.Eg && uya(a, this.Eg);
                this.Hg.refresh()
            }
            xl(a) {
                _.Tb(this.Fg,
                    a)
            }
        };
    BC.Dl = tya;
    BC.xl = sya;
    _.Li("overlay", {
        cB: function(a) {
            if (a) {
                (0, AC.xl)(a);
                (0, BC.xl)(a);
                var b = a.getMap();
                b && (b instanceof _.ok ? (0, BC.Dl)(a) : (0, AC.Dl)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.ou(a, {
                ul: ({
                    event: b
                }) => {
                    _.ys(b.Eg)
                },
                dk: b => _.$t(b),
                aq: b => _.au(b),
                Xk: b => _.au(b),
                vk: b => _.bu(b)
            }).Pr(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.Rj);
            a.addEventListener("contextmenu", _.Rj);
            a.addEventListener("dblclick", _.Rj);
            a.addEventListener("mousedown", _.Rj);
            a.addEventListener("mousemove", _.Rj);
            a.addEventListener("MSPointerDown",
                _.Rj);
            a.addEventListener("pointerdown", _.Rj);
            a.addEventListener("touchstart", _.Rj);
            a.addEventListener("wheel", _.Rj)
        }
    });
});