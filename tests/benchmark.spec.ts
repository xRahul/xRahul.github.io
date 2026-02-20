import { test, expect } from '@playwright/test';

test('measure fps of flip animation', async ({ page }) => {
  await page.goto('/');

  // Wait for the animation elements to be present
  await expect(page.locator('.flip-animation span').first()).toBeVisible();

  // Measure FPS
  const fps = await page.evaluate(async () => {
    return new Promise<number>((resolve) => {
      let frames = 0;
      const startTime = performance.now();
      const duration = 5000; // Measure for 5 seconds

      function loop(time: number) {
        frames++;
        if (time - startTime < duration) {
          requestAnimationFrame(loop);
        } else {
          const elapsed = time - startTime;
          const fps = (frames / elapsed) * 1000;
          resolve(fps);
        }
      }

      requestAnimationFrame((time) => {
        // Reset start time to align with first frame
        // Actually, let's just use the loop logic
        loop(time);
      });
    });
  });

  console.log(`Average FPS: ${fps.toFixed(2)}`);
});
