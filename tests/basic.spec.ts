import { test, expect } from '@playwright/test';

test('Homepage Title', async ({ page }) => {
  await page.goto('https://simple-forms.azurewebsites.net/');

  // Test the H1 says Simple Forms
  const title = await page.$eval('h1', (el) => el.textContent);
  expect(title).toContain("Simple Forms");
});

test('About Page', async ({ page }) => {
  await page.goto('https://simple-forms.azurewebsites.net/');

  // Click the get started link.
  await page.getByRole('link', { name: 'About Simple forms' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*about-simple-forms/);

  // Test the H1 says Simple Forms
  const title = await page.$eval('h1', (el) => el.textContent);
  expect(title).toContain("About");
  
});
