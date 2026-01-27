import React, { useMemo, useState } from "react";
import { events } from "../../utils/data";
import "../styles/pages.css";

const KATY_EVENTS_URL = "https://www.katy.com/events/";
const DAY_LABELS = {
  SU: "Sunday",
  MO: "Monday",
  TU: "Tuesday",
  WE: "Wednesday",
  TH: "Thursday",
  FR: "Friday",
  SA: "Saturday",
};

function toDateLabel(iso) {
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

function toHref(url) {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  return `https://${url}`;
}

function formatDayLabel(day) {
  if (!day) return "";
  const key = String(day).toUpperCase();
  return DAY_LABELS[key] || day;
}

function formatDayList(days) {
  const labels = (days || []).map(formatDayLabel).filter(Boolean);
  if (!labels.length) return "";
  if (labels.length === 1) return labels[0];
  if (labels.length === 2) return `${labels[0]} and ${labels[1]}`;
  return `${labels.slice(0, -1).join(", ")} and ${labels[labels.length - 1]}`;
}

function recurrenceLabel(recurrence) {
  if (!recurrence || !Array.isArray(recurrence.byDay)) return "";
  const dayText = formatDayList(recurrence.byDay);
  if (!dayText) return "";
  return `Repeats: ${dayText}`;
}

export default function EventsList() {
  const [category, setCategory] = useState("All Categories");
  const [location, setLocation] = useState("All Locations");
  const [query, setQuery] = useState("");

  const categories = [
    "All Categories",
    ...new Set(events.map((e) => e.category).filter(Boolean)),
  ];
  const locations = [
    "All Locations",
    ...new Set(events.map((e) => e.locationName).filter(Boolean)),
  ];

  const filtered = useMemo(() => {
    const s = query.trim().toLowerCase();

    return events.filter((e) => {
      const okCategory =
        category === "All Categories" || e.category === category;
      const okLocation =
        location === "All Locations" || e.locationName === location;

      const hay = [
        e.title,
        e.locationName,
        e.address,
        e.category,
        (e.tags || []).join(" "),
        e.description,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const okQuery = !s || hay.includes(s);

      return okCategory && okLocation && okQuery;
    });
  }, [category, location, query]);

  return (
    <div className="page-wrapper events-page">
      <h1>
        Browse Over{" "}
        <span className="hundred">
          <span className="one"> 2</span>
          <span className="zero">0</span>
          <span className="zero-second"></span>
        </span>{" "}
        Events
      </h1>
      <h2>Upcoming Events ({filtered.length})</h2>

      <div className="bar-wrapper">
        <div className="search-bar-this">
          <img
            className="magnifying-img"
            src={`${process.env.PUBLIC_URL}/images/searchicon.svg`}
            alt="Magnifying glass"
          />
          <input
            type="text"
            placeholder="Search events…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bar-this"
          />
        </div>
      </div>

      <div className="filter-bar">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          {locations.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>

      <div className="resources-container">
        <div className="cards-container">
          <div className="card-grid">
            {filtered.map((e) => {
              const href = toHref(e.website || e.url || KATY_EVENTS_URL);
              const Wrapper = href ? "a" : "div";
              const repeats = recurrenceLabel(e.recurrence);

              return (
                <Wrapper
                  key={e.id}
                  className="card-link"
                  {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
                >
                  <div className={`info-card ${href ? "clickable" : ""}`}>
                    <div className="top-row">
                      <div className="card-title">{e.title}</div>
                      <div className="muted">{e.category}</div>
                    </div>

                    <div className="muted">{toDateLabel(e.start)}</div>
                    {repeats ? <div className="muted">{repeats}</div> : null}

                    {e.locationName ? (
                      <div className="muted">{e.locationName}</div>
                    ) : null}
                    {e.address ? <div className="muted">{e.address}</div> : null}

                    {e.tags && e.tags.length ? (
                      <div className="pill-row">
                        {e.tags.slice(0, 6).map((t) => (
                          <span key={t} className="pill">
                            {t}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <div className="meta-row">
                      <div className="muted">
                        {e.cost ? <span>Cost: {e.cost}</span> : null}
                      </div>
                      {href ? (
                        <span style={{ color: "var(--accent)" }}>
                          View details →
                        </span>
                      ) : null}
                    </div>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
