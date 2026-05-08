/**
 * One-off capture of the locally-running Dalilk dev server (localhost:3000).
 * Uses the /admin route (different from /login) where DEMO ACCESS box has
 * an autofill link.
 *
 *   node scripts/capture-dalilk-local.mjs
 */
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdir } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_ROOT = join(__dirname, '..', 'public', 'images', 'projects');

const BASE = 'http://localhost:3000';
const SLUG = 'dalilk';
const VIEWPORT = { width: 1440, height: 900 };

class Shooter {
  constructor(page, slug) {
    this.page = page;
    this.slug = slug;
    this.n = 0;
    this.lastSig = null;
  }
  async snap(label = '', { force = false } = {}) {
    const sig = await this.page.evaluate(
      () =>
        `${location.href}|${document.title}|${document.body.innerText.length}|${Math.round(window.scrollY / 50)}`
    );
    if (!force && sig === this.lastSig) {
      console.log(`  · skip (dup) ${this.slug}/${this.n + 1} ${label}`);
      return false;
    }
    this.lastSig = sig;
    this.n += 1;
    const file = join(OUT_ROOT, `${this.slug}-${this.n}.png`);
    await this.page.screenshot({ path: file, fullPage: false });
    console.log(`  ✓ ${this.slug}-${this.n}.png ${label}`);
    return true;
  }
}

const settle = (page, ms = 1500) => page.waitForTimeout(ms);

async function gotoSafe(page, path) {
  try {
    await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle', timeout: 30000 });
  } catch {
    await page.goto(`${BASE}${path}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  }
  await settle(page);
}

async function clickByText(page, text) {
  const loc = page.getByText(text, { exact: false }).first();
  if (await loc.count()) {
    try {
      await loc.click({ timeout: 2500 });
      await settle(page, 2000);
      return true;
    } catch {}
  }
  return false;
}

async function main() {
  await mkdir(OUT_ROOT, { recursive: true });
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const s = new Shooter(page, SLUG);

  try {
    await gotoSafe(page, '/');
    await s.snap('public home');

    // Try several admin paths until we find inputs
    const adminPaths = ['/admin/login', '/admin', '/login'];
    for (const p of adminPaths) {
      await gotoSafe(page, p);
      await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
      await settle(page, 2500);
      const ic = await page.locator('input').count();
      console.log(`  i ${p}: inputs=${ic}`);
      if (ic >= 2) break;
    }
    await s.snap('admin login');
    const inputCount = await page.locator('input').count();

    if (inputCount >= 2) {
      const inputs = page.locator('input');
      await inputs.nth(0).fill('admin@dalilk.com').catch(() => {});
      await inputs.nth(1).fill('MyPassword123').catch(() => {});
      await settle(page, 600);
      await inputs.nth(1).press('Enter').catch(() => {});
      await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
      await settle(page, 5000);
      await s.snap('admin landing', { force: true });

      // Click each item in the sidebar nav by Arabic text
      const adminLabels = ['تعديل محل', 'إضافة محل', 'إدارة المستخدمين', 'كل المحلات'];
      for (const label of adminLabels) {
        const link = page.getByText(label, { exact: false }).first();
        if (await link.count()) {
          await link.click({ timeout: 2500 }).catch(() => {});
          await settle(page, 2500);
          await s.snap(`admin ${label}`);
        }
      }
    }

    // Walk the visible nav links from the admin shell
    const navLinks = await page.locator('a[href^="/"]').all();
    const seen = new Set(['/', '/admin']);
    for (const link of navLinks) {
      const href = await link.getAttribute('href').catch(() => null);
      if (!href || seen.has(href) || href.startsWith('http')) continue;
      seen.add(href);
      try {
        await link.click({ timeout: 2000 });
        await settle(page, 1800);
        await s.snap(`nav ${href}`);
      } catch {}
      if (s.n >= 12) break;
    }
  } catch (err) {
    console.error(`✗ flow failed: ${err.message}`);
  } finally {
    await ctx.close();
    await browser.close();
  }
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
