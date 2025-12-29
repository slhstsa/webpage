const DAY = ["SU","MO","TU","WE","TH","FR","SA"];

function toDateOnly(d) {
  const x = new Date(d);
  x.setHours(0,0,0,0);
  return x;
}

function addDays(d, n) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}

function ymd(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function dayCode(d) {
  return DAY[d.getDay()];
}

export function expandEvents(rawEvents, rangeStart, rangeEnd) {
  const start = toDateOnly(rangeStart);
  const end = toDateOnly(rangeEnd);

  const out = [];

  for (const e of rawEvents) {
    if (!e.recurrence) {
      out.push(e);
      continue;
    }

    const r = e.recurrence;
    if (r.freq !== "WEEKLY") {
      out.push(e);
      continue;
    }

    const rStart = toDateOnly(r.startDate);
    const rUntil = r.until ? toDateOnly(r.until) : end;

    const windowStart = start > rStart ? start : rStart;
    const windowEnd = end < rUntil ? end : rUntil;

    // check day matches
    for (let d = new Date(windowStart); d <= windowEnd; d = addDays(d, 1)) {
      if (!r.byDay.includes(dayCode(d))) continue;

      const dateStr = ymd(d);
      out.push({
        ...e,
        id: `${e.id}__${dateStr}`,
        start: `${dateStr}T00:00:00`,
        end: `${dateStr}T23:59:00`,
        instanceOf: e.id
      });
    }
  }

  // sort by start date
  out.sort((a, b) => (a.start || "").localeCompare(b.start || ""));
  return out;
}
