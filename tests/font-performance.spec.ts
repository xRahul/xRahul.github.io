import { test, expect } from '@playwright/test';

test('verify font-display property', async ({ page }) => {
  await page.goto('/');

  const fontDisplay = await page.evaluate(async () => {
    await document.fonts.ready;
    const faces = Array.from(document.fonts);
    const targetFont = faces.find(
      (face) => face.family === 'Cormorant Garamond'
    );
    return targetFont ? targetFont.display : 'font not found';
  });

  console.log(`Current font-display: ${fontDisplay}`);

  expect(fontDisplay).toBe('swap');
});
