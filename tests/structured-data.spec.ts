import { test, expect } from '@playwright/test';

test('has valid structured data', async ({ page }) => {
  await page.goto('/');

  const scriptTag = page.locator('script[type="application/ld+json"]');
  await expect(scriptTag).toBeAttached();

  const scriptContent = await scriptTag.textContent();
  expect(scriptContent).not.toBeNull();

  const data = JSON.parse(scriptContent as string);

  expect(data['@context']).toBe('http://schema.org');
  expect(data['@type']).toBe('Person');
  expect(data.name).toBe('Rahul Jain');
  expect(data.jobTitle).toBe('Senior Software Engineer');
  expect(data.url).toBe('https://rahulja.in');

  const expectedSameAs = [
    'https://www.linkedin.com/in/xrahuljain',
    'https://github.com/xRahul',
    'https://www.facebook.com/xRahulJain',
    'https://twitter.com/xRahulJain',
    'http://stackoverflow.com/users/1435626/rahul',
  ];

  expect(Array.isArray(data.sameAs)).toBe(true);

  for (const url of expectedSameAs) {
    expect(data.sameAs).toContain(url);
  }
});
