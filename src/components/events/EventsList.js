import React, { useMemo, useState } from "react";
import { events } from "../../utils/data";

function toDateLabel(iso) {
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

export default function EventsList() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return events;

    return events.filter((e) => {
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

      return hay.includes(s);
    });
  }, [q]);

  return (
    <div style={{ padding: "24px" }}>
      <h2 style={{ marginBottom: 12 }}>Events ({filtered.length})</h2>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search events..."
        style={{ padding: "8px 10px", width: 320, maxWidth: "100%" }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 16,
          marginTop: 16,
        }}
      >
        {filtered.map((e) => (
          <div
            key={e.id}
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: 14,
              boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontWeight: 800, marginBottom: 6 }}>{e.title}</div>

            <div style={{ fontSize: 13, opacity: 0.85 }}>
              {toDateLabel(e.start)}
            </div>

            <div style={{ fontSize: 13, marginTop: 6 }}>
              <div>
                <b>Where:</b> {e.locationName}
              </div>
              {e.address ? (
                <div style={{ opacity: 0.8 }}>{e.address}</div>
              ) : null}
            </div>

            {e.tags && e.tags.length ? (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginTop: 10,
                }}
              >
                {e.tags.slice(0, 6).map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 12,
                      padding: "4px 8px",
                      borderRadius: 999,
                      background: "rgba(0,0,0,0.06)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}

            <div style={{ marginTop: 10, fontSize: 13 }}>
              {e.url ? (
  <div style={{ marginTop: 10, fontSize: 13 }}>
    <a
      href={e.url}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "underline" }}
    >
      View details
    </a>
  </div>
) : null}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
