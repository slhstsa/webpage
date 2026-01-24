import rawEvents from "../data/events.json";
import rawResources from "../data/resources.json";
import rawHighlights from "../data/highlights.json";

export function onlyPublished(items) {
  return (items || []).filter((x) => x && x.status === "published");
}

export function sortByStart(items) {
  return [...(items || [])].sort((a, b) => {
    const da = new Date(a.start).getTime();
    const db = new Date(b.start).getTime();
    if (Number.isNaN(da) && Number.isNaN(db)) return 0;
    if (Number.isNaN(da)) return 1;
    if (Number.isNaN(db)) return -1;
    return da - db;
  });
}

export const events = sortByStart(onlyPublished(rawEvents));

export const resources = rawResources;
export const highlights = rawHighlights;
