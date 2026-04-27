import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Rahul Jain/);
});

test('has main heading', async ({ page }) => {
  // Expect the main heading to be visible
  await expect(page.locator('h1.title')).toBeVisible();
});

test('has social links', async ({ page }) => {
  // Check for social links
  await Promise.all([
    expect(page.getByLabel('Stack Overflow')).toBeVisible(),
    expect(page.getByLabel('Linkedin')).toBeVisible(),
    expect(page.getByLabel('Github')).toBeVisible(),
    expect(page.getByLabel('Twitter')).toBeVisible(),
  ]);
});
