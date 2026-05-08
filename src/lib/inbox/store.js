'use client';

const KEY = 'portfolio-inbox';
const PASS_KEY = 'portfolio-inbox-pass';

export function readMessages() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function appendMessage(payload) {
  if (typeof window === 'undefined') return;
  const list = readMessages();
  list.unshift({
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
    ...payload,
  });
  window.localStorage.setItem(KEY, JSON.stringify(list));
}

export function clearMessages() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(KEY);
}

export function deleteMessage(id) {
  if (typeof window === 'undefined') return;
  const list = readMessages().filter((m) => m.id !== id);
  window.localStorage.setItem(KEY, JSON.stringify(list));
}

export function isUnlocked() {
  if (typeof window === 'undefined') return false;
  return window.sessionStorage.getItem(PASS_KEY) === 'ok';
}

export function unlock(passcode) {
  if (typeof window === 'undefined') return false;
  if (passcode === 'basel-2026') {
    window.sessionStorage.setItem(PASS_KEY, 'ok');
    return true;
  }
  return false;
}

export function lock() {
  if (typeof window === 'undefined') return;
  window.sessionStorage.removeItem(PASS_KEY);
}
