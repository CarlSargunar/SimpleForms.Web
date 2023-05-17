import { test, expect } from '@playwright/test';

test('About Page', async ({ page }) => {
  await page.goto('https://simple-forms.azurewebsites.net/');

  // Click the get started link.
  await page.getByRole('link', { name: '(Embedded)' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*embedded/);

  // Test the H1 says Simple Forms
  const title = await page.$eval('h1', (el) => el.textContent);
  expect(title).toContain("Embedded");
  
});
