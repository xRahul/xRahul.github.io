import { test, expect } from '@playwright/test';

test('has description meta tag', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    'content',
    'Rahul Jain is a senior software engineer and tech enthusiast living in Singapore'
  );
});

test('has opengraph and twitter meta tags', async ({ page }) => {
  await page.goto('/');

  // Verify OpenGraph tags
  await Promise.all([
    expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      'content',
      'Rahul Jain'
    ),
    expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      'https://rahulja.in/assets/images/rahul-jain.jpg'
    ),
    expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      'content',
      'https://rahulja.in'
    ),
    expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
      'content',
      'Rahul Jain is a senior software engineer and tech enthusiast living in Singapore'
    ),
    expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute(
      'content',
      'Rahul Jain'
    ),
    expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
      'content',
      'website'
    ),
  ]);

  // Verify Twitter tags
  await Promise.all([
    expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      'content',
      'summary'
    ),
    expect(page.locator('meta[name="twitter:url"]')).toHaveAttribute(
      'content',
      'https://rahulja.in'
    ),
    expect(page.locator('meta[name="twitter:creator"]')).toHaveAttribute(
      'content',
      '@xRahulJain'
    ),
    expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute(
      'content',
      'Rahul Jain'
    ),
    expect(page.locator('meta[name="twitter:description"]')).toHaveAttribute(
      'content',
      'Rahul Jain is a senior software engineer and tech enthusiast living in Singapore'
    ),
    expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
      'content',
      'https://rahulja.in/assets/images/rahul-jain.jpg'
    ),
  ]);
});
