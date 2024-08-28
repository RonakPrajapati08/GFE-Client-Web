google.maps.__gjsload__('search', function(_) {
    var Qua = function() {},
        PB = function(a) {
            this.setValues(a);
            _.Ki("search_impl")
        },
        Sua = function(a) {
            let b = _.ml,
                c = -1;
            a.tiles.forEach(e => {
                e.zoom > c && (b = e.ii, c = e.zoom)
            });
            if (c === -1) return [];
            const d = [];
            a.cu().forEach(e => {
                e.a && e.a.length >= 2 && d.push(new Rua(e, b, c))
            });
            return d
        },
        Tua = function(a) {
            const b = [];
            a.data.forEach(c => {
                b.push(...Sua(c))
            });
            return b
        };
    _.Ia(Qua, _.jk);
    var Uua = {
            ["1"]: {}
        },
        Rua = class {
            constructor(a, b, c) {
                this.vp = b;
                this.zoom = c;
                this.bounds = this.anchor = null;
                this.Eg = Uua;
                this.source = a;
                this.featureId = this.source.id || "0";
                this.infoWindowOffset = (this.source.io || []).length === 2 ? new google.maps.Point(this.source.io[0], this.source.io[1]) : null
            }
            getAnchor() {
                if (!this.anchor) {
                    const a = 1 << this.zoom;
                    this.anchor = _.Ml(new _.Yl((this.vp.x * 256 + this.source.a[0]) / a, (this.vp.y * 256 + this.source.a[1]) / a)).toJSON()
                }
                return this.anchor
            }
            getCompleteBounds() {
                return this.getBounds().reduce((a,
                    b) => {
                    a.extendByBounds(b);
                    return a
                }, _.Ql(0, 0, 0, 0))
            }
            getBounds() {
                if (this.bounds === null) {
                    this.bounds = [];
                    const a = this.source.bb || [];
                    if (a.length % 4 === 0)
                        for (let b = 0; b < a.length; b += 4) {
                            const c = this.bounds[this.bounds.length - 1],
                                d = _.Ql(a[b], a[b + 1], a[b + 2], a[b + 3]);
                            c && c.equals(d) || this.bounds.push(d)
                        }
                }
                return [...this.bounds]
            }
            getExtendedContent(a) {
                if (this.Eg === Uua) try {
                    this.Eg = this.source.c ? JSON.parse(this.source.c) : {}
                } catch (b) {
                    this.Eg = {}
                }
                return this.Eg[a] ? ? {}
            }
            getFeatureName() {
                return this.getExtendedContent("1") ? .title ? ?
                    null
            }
            isTransitStation() {
                return this.getExtendedContent("1") ? .is_transit_station ? ? !1
            }
        };
    var Vua = new WeakSet;
    _.Ia(PB, Qua);
    PB.prototype.changed = function() {
        const a = this;
        var b = this.get("map");
        let c = null;
        b && (c = b.__gm, b = c.get("blockingLayerCount") || 0, c.set("blockingLayerCount", b + 1), c.set("disableLabelingHysteresis", this.get("disableLabelingHysteresis")), c.set("tilePrefetchEnabled", this.get("tilePrefetchEnabled")));
        _.Ki("search_impl").then(d => {
            d.yF(a);
            c && (d = c.get("blockingLayerCount") || 0, c.set("blockingLayerCount", d - 1))
        })
    };
    PB.enableFeatureMapEventsRasterOnly = function(a) {
        if (_.Am[15]) {
            var b = a.__gm.Yg;
            if (!Vua.has(a)) {
                Vua.add(a);
                var c = [],
                    d = (f, g) => {
                        f = Sua(f);
                        f.length && _.fk(a, g, f)
                    },
                    e = () => {
                        for (; c.length > 0;) c.pop().remove();
                        b.forEach(f => {
                            if (f = f.data) c.push(_.Tj(f, "insert", g => d(g, "addfeatures"))), c.push(_.Tj(f, "remove", g => d(g, "removefeatures")))
                        })
                    };
                b.addListener("insert_at", e);
                b.addListener("remove_at", e);
                b.addListener("set_at", e);
                e()
            }(() => {
                const f = [];
                b.forEach(g => {
                    f.push(...Tua(g))
                });
                f.length && _.fk(a, "addfeatures", f)
            })()
        }
    };
    _.Ga("module$contents$mapsapi$onionLayers$search$googleLayer_GoogleLayer.enableFeatureMapEventsRasterOnly", PB.enableFeatureMapEventsRasterOnly);
    _.Kk(PB.prototype, {
        map: _.Io
    });
    _.ra.google.maps.search = {
        GoogleLayer: PB
    };
    _.Li("search", {});
});