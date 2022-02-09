const { expect } = require('@playwright/test');

exports.clientsList = class clientsList {

  constructor(page) {
    this.page = page;
  }

  async goAboutUsPage() {
    await this.page.goto('https://www.lohika.com');
    await this.page.click('[href="https://www.lohika.com/about-us"]');
    await expect(this.page.url()).toContain('/about-us')
  }

  async getClientsList() {
    const clientsGrid = this.page.locator('.about-us-clients-carousel.events-carousel')
    await expect(clientsGrid).toBeVisible()

    let listItems = this.page.locator('//*[contains(@class, "about-us-clients-carousel events-carousel")]//*[contains(@class,"about-us-client__image")]');
    for (let i = 0; i < listItems.count(); i++) {
      await listItems.nth(0).toHaveAttribute('href', 'https://www.pinterest.com/');
      await listItems.nth(1).toHaveAttribute('href', 'https://www.adobe.com/')
      await listItems.nth(2).toHaveAttribute('href', 'https://www.lohika.com/client-work/twilio');
      await listItems.nth(3).toHaveAttribute('href', 'https://www.lohika.com/client-work/okta');
      await listItems.nth(4).toHaveAttribute('href', 'https://asana.com/');
      await listItems.nth(5).toHaveAttribute('href', 'https://www.pagerduty.com/');
      await listItems.nth(6).toHaveAttribute('href', 'https://www.paloaltonetworks.com/');
      await listItems.nth(7).toHaveAttribute('href', 'https://www.digicert.com/');
      await listItems.nth(8).toHaveAttribute('href', 'https://home.ibotta.com/');
      await listItems.nth(9).toHaveAttribute('href', 'https://www.lohika.com/client-work/virtru');
      await listItems.nth(10).toHaveAttribute('href', 'https://www.lohika.com/client-work/trane');
      await listItems.nth(11).toHaveAttribute('href', 'https://www.here.com/');
      await listItems.nth(12).toHaveAttribute('href', 'https://saucelabs.com/');
      await listItems.nth(13).toHaveAttribute('href', 'https://www.gladly.com/');
    }
  }

  async getPinterestIcon() {
    await expect(this.page.locator('(//*[@class="about-us-client__image"])[1]')).toBeVisible()
  }

  async goPinterestLink() {
    const [pinterest] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.click('a[href="https://www.pinterest.com/"]')
    ]);
    await expect(pinterest).toHaveURL('https://www.pinterest.com/');
    await pinterest.close();
  }

  async getAdobeIcon() {
    await expect(this.page.locator('(//*[@class="about-us-client__image"])[2]')).toBeVisible()
  }

  async goAdobeLink() {
    const [adobe] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.click('a[href="https://www.adobe.com/"]')
    ]);
    await expect(adobe).toHaveURL('https://www.adobe.com');
    await adobe.close();
  }

  async getTwilioIcon() {
    await expect(this.page.locator('(//*[@class="about-us-client__image"])[3]')).toBeVisible()
  }

  async goTwilioLink() {
    this.page.waitForNavigation(/*{ url: 'https://www.lohika.com/about-us' }*/),
    await this.page.click('[href="https://www.lohika.com/client-work/twilio"]')
    await expect(this.page).toHaveURL('https://www.lohika.com/client-work/twilio');
    await this.page.goto('https://www.lohika.com/about-us');
  }

  async getOktaIcon() {
    await expect(this.page.locator('(//*[@class="about-us-client__image"])[4]')).toBeVisible()
  }

  async goOktaLink() {
    await this.page.click('[href="https://www.lohika.com/client-work/okta"]')
    await expect(this.page).toHaveURL('https://www.lohika.com/client-work/okta');
    await this.page.goto('https://www.lohika.com/about-us');
  }

  async getAsanaIcon() {
    await expect(this.page.locator('(//*[@class="about-us-client__image"])[5]')).toBeVisible()
  }

  async goAsanaLink() {
    const [asana] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.click('[href="https://asana.com/"]')
    ]);
    await expect(asana).toHaveURL('https://asana.com/');
    await asana.close();
  }

  async getPagerdutyIcon() {
    await expect(this.page.locator('(//*[@class="about-us-client__image"])[6]')).toBeVisible()
  }

  async goPagerdutyLink() {
    const [pagerduty] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.click('[href="https://www.pagerduty.com/"]'),
    ]);
    await expect(pagerduty).toHaveURL('https://www.pagerduty.com/');
    await pagerduty.close();
  }

  async getPaloalToNetworksIcon() {
    await expect(this.page.locator('(//*[@class="about-us-client__image"])[7]')).toBeVisible()
  }

  async goPaloalToNetworksLink() {
    const [paloaltonetworks] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.click('[href="https://www.paloaltonetworks.com/"]')
    ]);
    await expect(paloaltonetworks).toHaveURL('https://www.paloaltonetworks.com/');
    await paloaltonetworks.close();
  }

  async getDigicertIcon() {
    await expect(this.page.locator('(//*[@class="about-us-client__image"])[8]')).toBeVisible()
  }

  async goDigicertLink() {
    const [digicert] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.click('[href="https://www.digicert.com/"]')
    ]);
    await expect(digicert).toHaveURL('https://www.digicert.com/');
    await digicert.close();
  }

  async getIbottaIcon() {
    await expect(this.page.locator('(//*[@class="about-us-client__image"])[9]')).toBeVisible()
  }

  async goIbottaLink() {
    const [ibotta] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.click('[href="https://home.ibotta.com/"]')
    ]);
    await expect(ibotta).toHaveURL('https://home.ibotta.com/');
    await ibotta.close();
  }

  async getVirtruIcon() {
    await expect(this.page.locator('(//*[@class="about-us-client__image"])[10]')).toBeVisible()
  }

  async goVirtruLink() {
    await this.page.click('[href="https://www.lohika.com/client-work/virtru"]'),
    await expect(this.page).toHaveURL('https://www.lohika.com/client-work/virtru');
    await this.page.goto('https://www.lohika.com/about-us');
  }

  async getTraneIcon() {
    await expect(this.page.locator('(//*[@class="about-us-client__image"])[11]')).toBeVisible()
  }

  async goTraneLink() {
    await this.page.click('[href="https://www.lohika.com/client-work/trane"]'),
    await expect(this.page).toHaveURL('https://www.lohika.com/client-work/trane');
    await this.page.goto('https://www.lohika.com/about-us');
  }

  async getHereIcon() {
    await expect(this.page.locator('(//*[@class="about-us-client__image"])[12]')).toBeVisible()
  }

  async goHereLink() {
    const [here] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.click('[href="https://www.here.com/"]')
    ]);
    await expect(here).toHaveURL('https://www.here.com/');
    await here.close();
  }

  async getSaucelabsIcon() {
    await expect(this.page.locator('(//*[@class="about-us-client__image"])[13]')).toBeVisible()
  }

  async goSaucelabsLink() {
    const [saucelabs] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.click('[href="https://saucelabs.com/"]')
    ]);
    await expect(saucelabs).toHaveURL('https://saucelabs.com/');
    await saucelabs.close();
  }

  async getGladlyIcon() {
    await expect(this.page.locator('(//*[@class="about-us-client__image"])[14]')).toBeVisible()
  }

  async goGladlyLink() {
    const [gladly] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.click('[href="https://www.gladly.com/"]')
    ]);
    await expect(gladly).toHaveURL('https://www.gladly.com/');
    await gladly.close();
  }
}