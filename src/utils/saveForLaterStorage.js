const STORAGE_KEY = "calcvoyager.savedExamples";

function readAll() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeAll(examples) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(examples));
  } catch {
    // localStorage unavailable (private browsing, quota, etc.) — fail silently
  }
}

function makeId(sectionId, exampleTitle) {
  return `${sectionId}::${exampleTitle}`;
}

export function getSavedExamples() {
  return readAll();
}

export function isExampleSaved(sectionId, exampleTitle) {
  const id = makeId(sectionId, exampleTitle);
  return readAll().some((entry) => entry.id === id);
}

export function saveExample({ sectionId, exampleTitle, guideTitle, route, anchorId }) {
  const id = makeId(sectionId, exampleTitle);
  const existing = readAll();
  if (existing.some((entry) => entry.id === id)) return;

  const entry = {
    id,
    sectionId,
    exampleTitle,
    guideTitle: guideTitle || null,
    route: route || null,
    anchorId: anchorId || null,
    savedAt: new Date().toISOString(),
  };
  writeAll([...existing, entry]);
}

export function unsaveExample(sectionId, exampleTitle) {
  const id = makeId(sectionId, exampleTitle);
  writeAll(readAll().filter((entry) => entry.id !== id));
}