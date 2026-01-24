import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Rahul Jain/);
});

test('has main heading', async ({ page }) => {
  await page.goto('/');

  // Expect the main heading to be visible
  await expect(page.locator('h1.title')).toBeVisible();
});

test('has social links', async ({ page }) => {
  await page.goto('/');

  // Check for social links
  await expect(page.getByLabel('Stack Overflow')).toBeVisible();
  await expect(page.getByLabel('Linkedin')).toBeVisible();
  await expect(page.getByLabel('Github')).toBeVisible();
  await expect(page.getByLabel('Twitter')).toBeVisible();
});
