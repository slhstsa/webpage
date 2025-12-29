import { useMemo, useState } from "react";
import "../styles/pages.css";
import resources from "../../data/resources.json";

export default function ResourcesList() {
    const live = (resources || []).filter(
        r => r && (r.status === "active" || r.status === "published")
    );

    const [category, setCategory] = useState("All");
    const [area, setArea] = useState("All");
    const [query, setQuery] = useState("");

    const categories = ["All", ...new Set(live.map(r => r.category).filter(Boolean))];
    const areas = ["All", ...new Set(live.flatMap(r => r.service_area || []).filter(Boolean))];

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();

        return live.filter(r => {
            const okCategory = category === "All" || r.category === category;
            const okArea = area === "All" || (r.service_area || []).includes(area);

            const okQuery =
                !q ||
                (r.name || "").toLowerCase().includes(q) ||
                (r.description || "").toLowerCase().includes(q) ||
                (r.tags || []).some(t => (t || "").toLowerCase().includes(q));

            return okCategory && okArea && okQuery;
        });
    }, [live, category, area, query]);

    return (
        <div className="page-wrapper">
            <h2>Resources ({filtered.length})</h2>

            <div className="filter-bar">
                <input
                    type="text"
                    placeholder="Search resources…"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />

                <select value={category} onChange={e => setCategory(e.target.value)}>
                    {categories.map(c => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>

                <select value={area} onChange={e => setArea(e.target.value)}>
                    {areas.map(a => (
                        <option key={a} value={a}>{a}</option>
                    ))}
                </select>
            </div>

            <div className="card-grid">
                {filtered.map(r => {
                    const href = r.website || "";
                    const Wrapper = href ? "a" : "div";

                    return (
                        <Wrapper
                            key={r.id}
                            className="card-link"
                            {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
                        >
                            <div className={`info-card ${href ? "clickable" : ""}`}>
                                <div className="top-row">
                                    <div style={{ fontWeight: 700 }}>{r.name}</div>
                                    <div className="muted">{r.category}</div>
                                </div>

                                {r.address ? <div className="muted">{r.address}</div> : null}

                                <div className="pill-row">
                                    {(r.tags || []).map(t => (
                                        <span key={t} className="pill">{t}</span>
                                    ))}
                                </div>

                                <div className="meta-row">
                                    <div className="muted">
                                        {r.phone ? <span>{r.phone}</span> : null}
                                    </div>
                                    {r.website ? (
                                        <span style={{ color: "var(--accent)" }}>
                                            Visit site →
                                        </span>
                                    ) : null}
                                </div>

                                {(r.hours || r.eligibility) ? (
                                    <div className="muted">
                                        {r.hours ? <div><b>Hours:</b> {r.hours}</div> : null}
                                        {r.eligibility ? <div><b>Eligibility:</b> {r.eligibility}</div> : null}
                                    </div>
                                ) : null}
                            </div>
                        </Wrapper>
                    );
                })}
            </div>
        </div>
    );
}
