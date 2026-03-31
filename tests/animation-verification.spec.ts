import { test, expect } from '@playwright/test';

test('animation container and items exist', async ({ page }) => {
  await page.goto('/');

  // Check that the container exists
  const container = page.locator('.swap-animation');
  await expect(container).toBeVisible();

  // After changes, we expect 5 spans.
  const spans = container.locator('span');
  await expect(spans).toHaveCount(5);

  const expectedTexts = [
    'Software Engineer',
    'Avid Reader',
    'Tech Enthusiast',
    'Gamer',
    'Amateur Guitarist',
  ];

  await expect(spans).toHaveText(expectedTexts);
});
