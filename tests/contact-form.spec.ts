import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://carlcod.es/');

  // Load the h1 tag to a variable
  const title = await page.$eval('h1', (el) => el.textContent);
  // Expect the title to be "Carl's Blog"
  expect(title).toBe("CarlCod.es");
});

test('Embedded contact form link', async ({ page }) => {
  await page.goto('https://simple-forms.azurewebsites.net/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Contact (Embedded)' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*contact-embedded/);
});
