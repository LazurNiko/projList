Feature('Client list');

Scenario('go to about-us page', ({ I }) => {
  
  I.amOnPage('https://www.lohika.com/clients')
  I.getClientsList()

  I.amOnPage('/');
  I.see('About Us')
  I.click('a:has-text("About Us")')
  I.seeInCurrentUrl('/about-us');

  I.seeElement('.about-us-clients-carousel.events-carousel')
  I.seeElement('(//*[@class="about-us-client__image"])[1]');
  I.click('a[href="https://www.pinterest.com/"]');
  I.switchToNextTab(1);
  I.seeCurrentUrlEquals('https://www.pinterest.com/');
  I.wait(3)
  I.saveScreenshot('pinterest.png');

  I.amOnPage('https://www.lohika.com/about-us');
  I.seeElement('(//*[@class="about-us-client__image"])[2]');
  I.click('a[href="https://www.adobe.com/"]');
  I.switchToNextTab(1);
  I.seeCurrentUrlEquals('https://www.adobe.com/');
  I.click('.dexter-CloseButton');
  I.wait(8);
  I.saveScreenshot('adobe.png');

  I.amOnPage('https://www.lohika.com/about-us');
  I.seeElement('(//*[@class="about-us-client__image"])[3]');
  I.click('a[href="https://www.lohika.com/client-work/twilio"]');
  I.seeInCurrentUrl('/twilio');
  I.wait(3)
  I.saveScreenshot('twilio.png');

  I.amOnPage('https://www.lohika.com/about-us');
  I.seeElement('(//*[@class="about-us-client__image"])[4]');
  I.click('a[href="https://www.lohika.com/client-work/okta"]');
  I.seeInCurrentUrl('/okta');
  I.wait(3)
  I.saveScreenshot('okta.png');

  I.amOnPage('https://www.lohika.com/about-us');
  I.seeElement('(//*[@class="about-us-client__image"])[5]');
  I.click('a[href="https://asana.com/"]');
  I.switchToNextTab(1);
  I.seeCurrentUrlEquals('https://asana.com/');
  I.wait(4)
  I.saveScreenshot('asana.png');

  I.amOnPage('https://www.lohika.com/about-us');
  I.seeElement('(//*[@class="about-us-client__image"])[6]');
  I.click('a[href="https://www.pagerduty.com/"]');
  I.switchToNextTab(1);
  I.seeCurrentUrlEquals('https://www.pagerduty.com/');
  I.wait(3)
  I.saveScreenshot('pagerduty.png');

  I.amOnPage('https://www.lohika.com/about-us');
  I.seeElement('(//*[@class="about-us-client__image"])[7]');
  I.click('a[href="https://www.paloaltonetworks.com/"]');
  I.switchToNextTab(1);
  I.seeCurrentUrlEquals('https://www.paloaltonetworks.com/');
  I.wait(3)
  I.saveScreenshot('paloalnetworks.png');

  I.amOnPage('https://www.lohika.com/about-us');
  I.seeElement('(//*[@class="about-us-client__image"])[8]');
  I.click('a[href="https://www.digicert.com/"]');
  I.switchToNextTab(1);
  I.seeCurrentUrlEquals('https://www.digicert.com/');
  I.wait(3)
  I.saveScreenshot('digicert.png');

  I.amOnPage('https://www.lohika.com/about-us');
  I.seeElement('(//*[@class="about-us-client__image"])[9]');
  I.click('a[href="https://home.ibotta.com/"]');
  I.switchToNextTab(1);
  I.seeCurrentUrlEquals('https://home.ibotta.com/');
  I.wait(3)
  I.saveScreenshot('ibotta.png');

  I.amOnPage('https://www.lohika.com/about-us');
  I.seeElement('(//*[@class="about-us-client__image"])[10]');
  I.click('a[href="https://www.lohika.com/client-work/virtru"]');
  I.seeInCurrentUrl('/virtru');
  I.wait(3)
  I.saveScreenshot('virtru.png');

  I.amOnPage('https://www.lohika.com/about-us');
  I.seeElement('(//*[@class="about-us-client__image"])[11]');
  I.click('a[href="https://www.lohika.com/client-work/trane"]');
  I.seeInCurrentUrl('/trane');
  I.wait(3)
  I.saveScreenshot('trane.png');

  I.amOnPage('https://www.lohika.com/about-us');
  I.seeElement('(//*[@class="about-us-client__image"])[12]');
  I.click('a[href="https://www.here.com/"]');
  I.switchToNextTab(1);
  I.seeCurrentUrlEquals('https://www.here.com/');
  I.wait(3)
  I.saveScreenshot('here.png');

  I.amOnPage('https://www.lohika.com/about-us');
  I.seeElement('(//*[@class="about-us-client__image"])[13]');
  I.click('a[href="https://saucelabs.com/"]');
  I.switchToNextTab(1);
  I.seeCurrentUrlEquals('https://saucelabs.com/');
  I.wait(3)
  I.saveScreenshot('saucelabs.png');

  I.amOnPage('https://www.lohika.com/about-us');
  I.seeElement('(//*[@class="about-us-client__image"])[14]');
  I.click('a[href="https://www.gladly.com/"]');
  I.switchToNextTab(1);
  I.seeCurrentUrlEquals('https://www.gladly.com/');
  I.wait(3)
  I.saveScreenshot('gladly.png');
});
