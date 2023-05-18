import { test, expect } from '@playwright/test';

test('Contact Form Embedded', async ({ page }) => {
  await page.goto('https://simple-forms.azurewebsites.net/');

  // Click the get started link.
  await page.getByRole('link', { name: '(Embedded)' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*embedded/);

  // Test the H1 says Simple Forms
  const title = await page.$eval('h1', (el) => el.textContent);
  expect(title).toContain("Embedded");

  await page.screenshot({ path: './playwright-screenshot/Contact-Form-Embedded.png' });  
});

test('Contact Form Partial', async ({ page }) => {
  await page.goto('https://simple-forms.azurewebsites.net/');

  // Click the get started link.
  await page.getByRole('link', { name: '(Partial View)' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*partial-view/);

  // Test the H1 says Simple Forms
  const title = await page.$eval('h1', (el) => el.textContent);
  expect(title).toContain("Partial");

  await page.screenshot({ path: './playwright-screenshot/Contact-Form-Partial.png' });  
});


test('Contact Form TagHelper', async ({ page }) => {
  await page.goto('https://simple-forms.azurewebsites.net/');

  // Click the get started link.
  await page.getByRole('link', { name: '(TagHelper)' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*taghelper/);

  // Test the H1 says Simple Forms
  const title = await page.$eval('h1', (el) => el.textContent);
  expect(title).toContain("Taghelper");

  await page.screenshot({ path: './playwright-screenshot/Contact-Form-Taghelper.png' });  
});
