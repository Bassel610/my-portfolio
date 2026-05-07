/**
 * Capture interior screenshots per project, login-aware.
 *
 * Outputs to public/images/projects/<slug>/<n>.png
 *
 * Each flow is hand-tuned so we get distinct frames:
 *   - login screen
 *   - post-login shell / dashboard
 *   - form / list / detail / cart / etc.
 *
 * Usage:
 *   node scripts/capture-project-shots.mjs            # all
 *   node scripts/capture-project-shots.mjs <slug>     # one
 */
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdir } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_ROOT = join(__dirname, '..', 'public', 'images', 'projects');

const VIEWPORT = { width: 1440, height: 900 };
const NAV_TIMEOUT = 45000;

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

async function settle(page, ms = 1500) {
  await page.waitForTimeout(ms);
}

async function gotoSafe(page, url) {
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: NAV_TIMEOUT });
  } catch {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT });
  }
  await settle(page);
}

async function tryFill(page, selectors, value) {
  for (const sel of selectors) {
    const loc = page.locator(sel).first();
    if (await loc.count()) {
      try {
        await loc.fill(value, { timeout: 1500 });
        return true;
      } catch {}
    }
  }
  return false;
}

async function tryClick(page, ...selectors) {
  for (const sel of selectors) {
    const loc = typeof sel === 'string' ? page.locator(sel).first() : sel;
    if (await loc.count()) {
      try {
        await loc.click({ timeout: 2000 });
        return true;
      } catch {}
    }
  }
  return false;
}

async function clickThroughNav(page, shooter, max = 5) {
  const seen = new Set();
  const links = await page
    .locator('nav a:visible, aside a:visible, header a:visible, [role="navigation"] a:visible')
    .all();
  let added = 0;
  for (const link of links) {
    if (added >= max) break;
    const href = await link.getAttribute('href').catch(() => null);
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.includes('javascript:')) continue;
    if (seen.has(href)) continue;
    seen.add(href);
    try {
      await link.click({ timeout: 2000 });
      await settle(page, 1500);
      const ok = await shooter.snap(`nav ${href}`);
      if (ok) added += 1;
    } catch {}
  }
  return added;
}

const FLOWS = {
  twindix: async (page) => {
    const s = new Shooter(page, 'twindix');
    await gotoSafe(page, 'https://twindix.com/');
    await s.snap('hero');
    for (const top of [800, 1600, 2400, 3200, 4000]) {
      await page.evaluate((t) => window.scrollTo({ top: t, behavior: 'instant' }), top);
      await settle(page, 600);
      await s.snap(`scroll ${top}`);
    }
  },

  'twindix-performance-indicator': async (page) => {
    const s = new Shooter(page, 'twindix-performance-indicator');
    await gotoSafe(page, 'https://twindix-performance-indicator.netlify.app/login');
    await s.snap('login');
    await tryFill(page, ['input[placeholder="Enter your email"]', 'input[type="email"]'], 'admin@twindix.com');
    await tryFill(page, ['input[placeholder="Enter your password"]', 'input[type="password"]'], 'password');
    await tryClick(page, page.getByRole('button', { name: /sign in/i }));
    await settle(page, 2500);
    await s.snap('dashboard');
    for (const route of ['/projects', '/tasks', '/blockers', '/users', '/teams', '/red-flags', '/decisions']) {
      await gotoSafe(page, `https://twindix-performance-indicator.netlify.app${route}`);
      await s.snap(route);
    }
  },

  'twindix-benchmark': async (page) => {
    const s = new Shooter(page, 'twindix-benchmark');
    await gotoSafe(page, 'https://benchmark.twindix.com/');
    await s.snap('login');
    await tryFill(page, ['input[type="email"]', 'input[placeholder*="mail" i]'], 'admin@benchmark.test');
    await tryFill(page, ['input[type="password"]'], 'Admin@123');
    await tryClick(page, page.getByRole('button', { name: /(login|sign in|دخول)/i }));
    await settle(page, 3000);
    await s.snap('shell');
    // The benchmark form shows after picking a project; try common routes
    for (const route of ['/benchmark', '/dashboard', '/projects', '/create', '/history', '/reports']) {
      await gotoSafe(page, `https://benchmark.twindix.com${route}`);
      await s.snap(route);
    }
    // Fill the form if visible to show a populated state
    const filled = await tryFill(page, ['input[placeholder*="Technology" i]', 'input[placeholder*="Industry" i]'], 'Technology');
    if (filled) {
      await tryFill(page, ['input[placeholder*="Engineer" i]', 'input[placeholder*="Job" i]'], 'AI Engineer');
      await tryFill(page, ['input[placeholder*="senior" i]', 'input[placeholder*="lead" i]'], 'senior');
      await tryFill(page, ['textarea, input[placeholder*="machine learning" i]'], 'Build and deploy ML pipelines for production analytics workloads.');
      await settle(page, 600);
      await s.snap('form filled');
    }
    await clickThroughNav(page, s, 3);
  },

  careerfinder: async (page) => {
    const s = new Shooter(page, 'careerfinder');
    await gotoSafe(page, 'https://careerfinder.twindix.com/login');
    await s.snap('login');
    await tryFill(page, ['input[type="email"]', 'input[placeholder*="mail" i]'], 'admin@careerfinder.com');
    await tryFill(page, ['input[type="password"]'], 'Admin@123');
    await tryClick(page, page.getByRole('button', { name: /(login|sign in)/i }));
    await settle(page, 3000);
    await s.snap('shell');
    for (const route of ['/dashboard', '/results', '/history', '/profile', '/admin', '/jobs', '/careers']) {
      await gotoSafe(page, `https://careerfinder.twindix.com${route}`);
      await s.snap(route);
    }
    await clickThroughNav(page, s, 3);
  },

  'data-nile': async (page) => {
    const s = new Shooter(page, 'data-nile');
    await gotoSafe(page, 'https://lambent-choux-e63b31.netlify.app/');
    await s.snap('home');
    await page.evaluate(() => window.scrollTo({ top: 800, behavior: 'instant' }));
    await settle(page, 600);
    await s.snap('home scroll');
    // Admin passcode
    await gotoSafe(page, 'https://lambent-choux-e63b31.netlify.app/admin');
    await s.snap('admin gate');
    const code = page.locator('input[type="password"], input[type="text"], input').first();
    if (await code.count()) {
      try {
        await code.fill('datanile', { timeout: 1500 });
        const btn = page.getByRole('button').first();
        await btn.click({ timeout: 2000 }).catch(() => {});
        await settle(page, 2500);
        await s.snap('manage home');
      } catch {}
    }
    // Click each admin sidebar item by name
    for (const label of ['Manage Images', 'Manage Layout', 'Invites']) {
      const link = page.getByRole('button', { name: new RegExp(label, 'i') }).first();
      const fallback = page.getByText(new RegExp(`^${label}$`, 'i')).first();
      const target = (await link.count()) ? link : fallback;
      if (await target.count()) {
        await target.click({ timeout: 2500 }).catch(() => {});
        await settle(page, 1800);
        await s.snap(`admin ${label.toLowerCase()}`);
      }
    }
  },

  pico: async (page) => {
    const s = new Shooter(page, 'pico');
    await gotoSafe(page, 'https://picco.netlify.app/');
    await s.snap('home');
    // Header category nav
    for (const cat of ['Fruits', 'Veggies', 'Herbs', 'Honey', 'Gift']) {
      const link = page.getByRole('link', { name: new RegExp(`^${cat}$`, 'i') }).first();
      if (await link.count()) {
        await link.click({ timeout: 2000 }).catch(() => {});
        await settle(page, 1500);
        await s.snap(`category ${cat}`);
      }
    }
    // Back home, click first product card for detail view
    await gotoSafe(page, 'https://picco.netlify.app/');
    const productHeading = page.getByRole('heading').filter({ hasText: /^[A-Z]/ }).first();
    if (await productHeading.count()) {
      const card = productHeading.locator('xpath=ancestor::*[self::article or self::a or self::div][1]');
      await card.click({ timeout: 2000 }).catch(() => {});
      await settle(page, 1500);
      await s.snap('product detail');
      // Click add to cart on detail
      const addBtn = page.getByRole('button', { name: /add to cart|add/i }).first();
      if (await addBtn.count()) {
        await addBtn.click({ timeout: 2000 }).catch(() => {});
        await settle(page, 800);
        await s.snap('product after add');
      }
      // Click heart (wishlist) on detail
      const heart = page.locator('button:has(svg[class*="heart" i]), button[aria-label*="wish" i]').first();
      if (await heart.count()) {
        await heart.click({ timeout: 1500 }).catch(() => {});
        await settle(page, 600);
      }
    }
    // Open header icons by clicking
    const cartIcon = page.locator('button[aria-label*="cart" i], a[aria-label*="cart" i], [data-testid*="cart" i], button:has(svg[class*="ShoppingCart" i])').first();
    if (await cartIcon.count()) {
      await cartIcon.click({ timeout: 2000 }).catch(() => {});
      await settle(page, 1500);
      await s.snap('cart');
      // From cart, click checkout
      const checkoutBtn = page.getByRole('button', { name: /checkout|secure checkout/i }).first();
      if (await checkoutBtn.count()) {
        await checkoutBtn.click({ timeout: 2000 }).catch(() => {});
        await settle(page, 1800);
        await s.snap('checkout');
      }
    }
    // Add a couple more items to wishlist via cards on home, then open wishlist
    await gotoSafe(page, 'https://picco.netlify.app/');
    const heartButtons = await page.locator('button:has(svg)').all();
    for (let i = 0; i < Math.min(3, heartButtons.length); i++) {
      const aria = await heartButtons[i].getAttribute('aria-label').catch(() => '');
      if (aria && /wish|favourite|favorite|heart/i.test(aria)) {
        await heartButtons[i].click({ timeout: 1000 }).catch(() => {});
      }
    }
    const wishIcon = page.locator('header a[href*="wishlist" i], header button[aria-label*="wish" i], a[aria-label*="wish" i], button:has(svg[class*="Heart" i])').first();
    if (await wishIcon.count()) {
      await wishIcon.click({ timeout: 2000 }).catch(() => {});
      await settle(page, 1500);
      await s.snap('wishlist');
    }
    // Login popup via account icon — match MUI Account/Person testid
    await gotoSafe(page, 'https://picco.netlify.app/');
    await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
    await settle(page, 1500);
    const accountByTestId = page.locator(
      'svg[data-testid="AccountCircleIcon"], svg[data-testid="PersonIcon"], svg[data-testid="AccountIcon"]'
    ).first();
    if (await accountByTestId.count()) {
      const button = accountByTestId.locator('xpath=ancestor::button[1]');
      const btnHas = (await button.count()) ? button : accountByTestId;
      await btnHas.click({ timeout: 3000 }).catch(() => {});
      await settle(page, 2000);
      await s.snap('login popup', { force: true });
    } else {
      // Fallback: pick the rightmost button with an svg in the top 100px of the page
      const headerButtons = await page.locator('button:has(svg)').all();
      let best = null;
      let bestX = -1;
      for (const btn of headerButtons) {
        const box = await btn.boundingBox().catch(() => null);
        if (!box) continue;
        if (box.y > 100) continue;
        if (box.x > bestX) {
          bestX = box.x;
          best = btn;
        }
      }
      if (best) {
        await best.click({ timeout: 3000 }).catch(() => {});
        await settle(page, 2000);
        await s.snap('login popup', { force: true });
      }
    }
  },

  'linas-portfolio': async (page) => {
    const s = new Shooter(page, 'linas-portfolio');
    await gotoSafe(page, 'https://linas-portfolio.netlify.app/');
    // Wait for hero/slider images to actually decode before screenshotting
    await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
    await page
      .waitForFunction(() => {
        const imgs = Array.from(document.images);
        return imgs.length > 0 && imgs.every((img) => img.complete && img.naturalWidth > 0);
      }, { timeout: 15000 })
      .catch(() => {});
    await settle(page, 1500);
    await s.snap('home');
    await page.evaluate(() => window.scrollTo({ top: 900, behavior: 'instant' }));
    await settle(page, 1200);
    await s.snap('home scroll');
    // Click in-app nav links rather than guessing routes
    for (const label of ['My Work', 'About Me', 'Contact Me']) {
      const link = page.getByRole('link', { name: new RegExp(label, 'i') }).first();
      if (await link.count()) {
        await link.click({ timeout: 2500 }).catch(() => {});
        await settle(page, 1500);
        // Wait for new page's images to render
        await page
          .waitForFunction(() => {
            const imgs = Array.from(document.images);
            return imgs.length === 0 || imgs.every((img) => img.complete);
          }, { timeout: 8000 })
          .catch(() => {});
        await settle(page, 800);
        await s.snap(label);
      }
    }
  },

  dalilk: async (page) => {
    const s = new Shooter(page, 'dalilk');
    await gotoSafe(page, 'https://mellow-pixie-196274.netlify.app/');
    await s.snap('home');
    // Click first place-card to land on a detail page
    const detailLink = page
      .locator('a[href*="/place"], a[href*="/details"], a[href*="/restaurant"], main a, .card a, article a')
      .first();
    if (await detailLink.count()) {
      await detailLink.click({ timeout: 2000 }).catch(() => {});
      await settle(page, 2000);
      await s.snap('detail');
    }
    // Try /admin/login then /dashboard
    await gotoSafe(page, 'https://mellow-pixie-196274.netlify.app/admin/login');
    await s.snap('admin login');
    await tryFill(page, ['input[type="email"]', 'input[placeholder*="mail" i]'], 'admin@dalilk.com');
    await tryFill(page, ['input[type="password"]'], 'MyPassword123');
    await tryClick(page, page.getByRole('button', { name: /(login|sign in|دخول|submit)/i }));
    await settle(page, 3000);
    await s.snap('admin after login');
    await gotoSafe(page, 'https://mellow-pixie-196274.netlify.app/dashboard');
    await s.snap('dashboard');
    await gotoSafe(page, 'https://mellow-pixie-196274.netlify.app/admin/dashboard');
    await s.snap('admin dashboard');
  },
};

async function ensureDirs() {
  await mkdir(OUT_ROOT, { recursive: true });
}

async function main() {
  await ensureDirs();
  const targets = process.argv[2] ? [process.argv[2]] : Object.keys(FLOWS);

  const browser = await chromium.launch();
  for (const slug of targets) {
    const flow = FLOWS[slug];
    if (!flow) {
      console.error(`✗ unknown slug: ${slug}`);
      continue;
    }
    console.log(`→ ${slug}`);
    const ctx = await browser.newContext({
      viewport: VIEWPORT,
      deviceScaleFactor: 1,
      ignoreHTTPSErrors: true,
    });
    const page = await ctx.newPage();
    try {
      await flow(page);
    } catch (err) {
      console.error(`  ✗ ${slug} flow failed: ${err.message}`);
    } finally {
      await ctx.close();
    }
  }
  await browser.close();
  console.log('\nDone.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
