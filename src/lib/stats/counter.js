const BASE = 'https://abacus.jasoncameron.dev';
const NAMESPACE = 'basel-portfolio-2026';
const KEY = 'homepage';

export async function incrementVisit() {
  try {
    const res = await fetch(`${BASE}/hit/${NAMESPACE}/${KEY}`, { method: 'GET' });
    const json = await res.json();
    return json?.value ?? null;
  } catch {
    return null;
  }
}

export async function getVisitCount() {
  try {
    const res = await fetch(`${BASE}/get/${NAMESPACE}/${KEY}`, { method: 'GET', cache: 'no-store' });
    const json = await res.json();
    return json?.value ?? null;
  } catch {
    return null;
  }
}
