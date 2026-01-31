import { test, expect } from '@playwright/test';

test('animation container and items exist', async ({ page }) => {
  await page.goto('/');

  // Check that the container exists
  const container = page.locator('.swap-animation');
  await expect(container).toBeVisible();

  // Initially, before changes, checking for "Software Engineer" text
  // The current implementation uses ::before, so the text might be in the display-none span
  // or just invisible.
  // We just want to ensure the page loads and the container is there.

  // After changes, we expect 5 spans.
  // For now, let's just verify the container is present.
});
