import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

for (const colorScheme of ['dark', 'light'] as const) {
  for (const { width, height } of [
    { width: 1440, height: 900 },
    { width: 390, height: 844 },
  ]) {
    test.describe(`${colorScheme} at ${width}px`, () => {
      test.use({ colorScheme, viewport: { width, height } });

      test('home page has no axe violations', async ({ page }) => {
        await page.goto('/');
        expect(await page.evaluate(() => document.documentElement.dataset.theme)).toBe(colorScheme);
        await page.waitForFunction(() =>
          document.getAnimations().every((animation) => animation.playState === 'finished'),
        );

        const { violations } = await new AxeBuilder({ page }).analyze();

        expect(violations.map(({ id, nodes }) => ({ id, targets: nodes.map((n) => n.target) }))).toEqual([]);
      });
    });
  }
}
