const { test, expect } = require('@playwright/test');
const { clientsList } = require('../pages/aboutUs.js')

test.describe('Clients grid', () => {
  test('User can view information about client in grid by clicking it - client company page opens', async ({ page }) => {
    const clientsListItems = new clientsList(page);
    await clientsListItems.goAboutUsPage();
    await clientsListItems.getClientsList();

    await clientsListItems.getPinterestIcon();
    await clientsListItems.goPinterestLink();

    await clientsListItems.getAdobeIcon();
    await clientsListItems.goAdobeLink()
    
    await clientsListItems.getTwilioIcon();
    await clientsListItems.goTwilioLink();
    
    await clientsListItems.getOktaIcon();
    await clientsListItems.goOktaLink();

    await clientsListItems.getAsanaIcon();
    await clientsListItems.goAsanaLink();

    await clientsListItems.getPagerdutyIcon();
    await clientsListItems.goPagerdutyLink();

    await clientsListItems.getPaloalToNetworksIcon();
    await clientsListItems.goPaloalToNetworksLink();

    await clientsListItems.getDigicertIcon();
    await clientsListItems.goDigicertLink();

    await clientsListItems.getIbottaIcon();
    await clientsListItems.goIbottaLink();

    await clientsListItems.getVirtruIcon();
    await clientsListItems.goVirtruLink();

    await clientsListItems.getTraneIcon();
    await clientsListItems.goTraneLink();
    
    await clientsListItems.getHereIcon();
    await clientsListItems.goHereLink();
    
    await clientsListItems.getSaucelabsIcon();
    await clientsListItems.goSaucelabsLink();
    
    await clientsListItems.getGladlyIcon();
    await clientsListItems.goGladlyLink();
    
  });
})