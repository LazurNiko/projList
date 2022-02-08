const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.lohika.com');
});

test.describe('Clients grid', () => {
  test('User can view information about client in grid by clicking it - client company page opens', async ({ page }) => {
    await page.click('[href="https://www.lohika.com/about-us"]');
    expect(page.url()).toContain('/about-us')
    const clientsGrid = page.locator('.about-us-clients-carousel.events-carousel')
    expect(clientsGrid).toBeVisible()
    const clientListItem = page.locator('div.about-us-client')
    await expect(clientListItem).toHaveCount(14);
    await expect(page.locator('(//*[@class="about-us-client__image"])[1]')).toHaveAttribute('href', 'https://www.pinterest.com/')
    await page.click('[href="https://www.pinterest.com/"]');
    const [pinterest] = await Promise.all([
      page.waitForEvent('popup'),
      page.click('[href="https://www.pinterest.com/"]'),
      page.evaluate(() => window.open('https://example.com')),
    ]);
    await pinterest.close();
   
    await expect(page.locator('(//*[@class="about-us-client__image"])[2]')).toHaveAttribute('href', 'https://www.adobe.com/')
    await expect(page.locator('(//*[@class="about-us-client__image"])[3]')).toHaveAttribute('href', 'https://www.lohika.com/client-work/twilio')
    await expect(page.locator('(//*[@class="about-us-client__image"])[4]')).toHaveAttribute('href', 'https://www.lohika.com/client-work/okta')
    await expect(page.locator('(//*[@class="about-us-client__image"])[5]')).toHaveAttribute('href', 'https://asana.com/')
    await expect(page.locator('(//*[@class="about-us-client__image"])[6]')).toHaveAttribute('href', 'https://www.pagerduty.com/')
    await expect(page.locator('(//*[@class="about-us-client__image"])[7]')).toHaveAttribute('href', 'https://www.paloaltonetworks.com/')
    await expect(page.locator('(//*[@class="about-us-client__image"])[8]')).toHaveAttribute('href', 'https://www.digicert.com/')
    await expect(page.locator('(//*[@class="about-us-client__image"])[9]')).toHaveAttribute('href', 'https://home.ibotta.com/')
    await expect(page.locator('(//*[@class="about-us-client__image"])[10]')).toHaveAttribute('href', 'https://www.lohika.com/client-work/virtru')
    await expect(page.locator('(//*[@class="about-us-client__image"])[11]')).toHaveAttribute('href', 'https://www.lohika.com/client-work/trane')
    await expect(page.locator('(//*[@class="about-us-client__image"])[12]')).toHaveAttribute('href', 'https://www.here.com/')
    await expect(page.locator('(//*[@class="about-us-client__image"])[13]')).toHaveAttribute('href', 'https://saucelabs.com/')
    await expect(page.locator('(//*[@class="about-us-client__image"])[14]')).toHaveAttribute('href', 'https://www.gladly.com/')

  });
})