import { test, expect } from '@playwright/test';

test('verify font-display property', async ({ page }) => {
  await page.goto('/');

  const fontDisplay = await page.evaluate(async () => {
    await document.fonts.ready;
    for (const face of document.fonts) {
      if (face.family === 'Cormorant Garamond') {
        return face.display;
      }
    }
    return 'font not found';
  });

  console.log(`Current font-display: ${fontDisplay}`);

  expect(fontDisplay).toBe('swap');
});
