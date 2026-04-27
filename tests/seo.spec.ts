import { test, expect } from '@playwright/test';

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

test('has favicon and manifest tags', async ({ page }) => {
  await page.goto('/');

  await Promise.all([
    expect(page.locator('link[rel="manifest"]')).toHaveAttribute(
      'href',
      '/manifest.json'
    ),
    expect(page.locator('link[rel="apple-touch-icon"]')).toHaveAttribute(
      'href',
      '/assets/favicons/apple-touch-icon.png'
    ),
    expect(page.locator('link[rel="icon"][sizes="16x16"]')).toHaveAttribute(
      'href',
      '/assets/favicons/favicon-16x16.png'
    ),
    expect(page.locator('link[rel="icon"][sizes="32x32"]')).toHaveAttribute(
      'href',
      '/assets/favicons/favicon-32x32.png'
    ),
    expect(page.locator('link[rel="icon"][sizes="96x96"]')).toHaveAttribute(
      'href',
      '/assets/favicons/favicon-96x96.png'
    ),
    expect(page.locator('link[rel="icon"][sizes="128x128"]')).toHaveAttribute(
      'href',
      '/assets/favicons/favicon-128.png'
    ),
    expect(page.locator('link[rel="icon"][sizes="192x192"]')).toHaveAttribute(
      'href',
      '/assets/favicons/android-chrome-192x192.png'
    ),
    expect(page.locator('link[rel="mask-icon"]')).toHaveAttribute(
      'href',
      '/assets/favicons/safari-pinned-tab.svg'
    ),
    expect(page.locator('link[rel="shortcut icon"]')).toHaveAttribute(
      'href',
      '/assets/favicons/favicon.ico'
    ),
  ]);
});
