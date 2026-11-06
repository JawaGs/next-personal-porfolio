import { expect, test } from '@playwright/test';
import { experience } from '../src/data/experience';
import { projects } from '../src/data/projects';

const toggle = (page: import('@playwright/test').Page) =>
  page.getByRole('button', { name: 'Toggle color theme' });
const theme = (page: import('@playwright/test').Page) =>
  page.evaluate(() => document.documentElement.dataset.theme);

test.describe('sections', () => {
  test('renders every section in order', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { level: 1, name: 'Jose Valor' })).toBeVisible();
    const ids = await page.locator('main > section').evaluateAll((s) => s.map((el) => el.id));
    expect(ids).toEqual(['hero', 'projects', 'experience', 'about', 'contact']);
    for (const name of ['Projects', 'Experience', 'About', 'Contact']) {
      await expect(page.getByRole('heading', { level: 2, name })).toBeVisible();
    }
    await expect(page.locator('#experience ol > li')).toHaveCount(experience.length);
  });

  test('project links have the correct hrefs and open in a new tab', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('article')).toHaveCount(projects.length);
    for (const project of projects) {
      const demo = page.getByRole('link', { name: `Live demo: ${project.title} (opens in a new tab)` });
      const code = page.getByRole('link', { name: `Code: ${project.title} (opens in a new tab)` });
      await expect(demo).toHaveAttribute('href', project.url);
      await expect(code).toHaveAttribute('href', project.repoUrl);
      await expect(demo).toHaveAttribute('target', '_blank');
      await expect(code).toHaveAttribute('target', '_blank');
    }
  });
});

test.describe('color theme', () => {
  test.describe('system dark', () => {
    test.use({ colorScheme: 'dark' });

    test('defaults to the system theme', async ({ page }) => {
      await page.goto('/');
      expect(await theme(page)).toBe('dark');
      await expect(toggle(page)).toHaveAttribute('aria-pressed', 'true');
    });

    test('toggle changes the theme and persists across reload', async ({ page }) => {
      await page.goto('/');
      const background = () =>
        page.evaluate(() => getComputedStyle(document.body).backgroundColor);
      const darkBackground = await background();

      await toggle(page).click();
      expect(await theme(page)).toBe('light');
      await expect(toggle(page)).toHaveAttribute('aria-pressed', 'false');
      expect(await background()).not.toBe(darkBackground);

      await page.reload();
      expect(await theme(page)).toBe('light');
      await expect(toggle(page)).toHaveAttribute('aria-pressed', 'false');
    });

    test('sets a saved theme before the body exists, with no bundle loaded', async ({ page }) => {
      await page.addInitScript(() => {
        localStorage.setItem('theme', 'light');
        new MutationObserver((_, observer) => {
          if (document.body) {
            (window as unknown as { themeAtBody?: string }).themeAtBody =
              document.documentElement.dataset.theme;
            observer.disconnect();
          }
        }).observe(document, { childList: true, subtree: true });
      });
      await page.route('**/_next/static/chunks/*.js', (route) => route.abort());
      await page.goto('/', { waitUntil: 'domcontentloaded' });

      expect(await page.evaluate(() => (window as unknown as { themeAtBody?: string }).themeAtBody)).toBe('light');
    });

    test('works when localStorage is unavailable', async ({ page }) => {
      await page.addInitScript(() => {
        const fail = () => {
          throw new Error('storage disabled');
        };
        Storage.prototype.getItem = fail;
        Storage.prototype.setItem = fail;
      });
      const errors: string[] = [];
      page.on('pageerror', (error) => errors.push(error.message));

      await page.goto('/');
      expect(await theme(page)).toBe('dark');
      await toggle(page).click();
      expect(await theme(page)).toBe('light');
      expect(errors).toEqual([]);
    });
  });

  test.describe('system light', () => {
    test.use({ colorScheme: 'light' });

    test('defaults to the system theme', async ({ page }) => {
      await page.goto('/');
      expect(await theme(page)).toBe('light');
      await expect(toggle(page)).toHaveAttribute('aria-pressed', 'false');
    });
  });
});
