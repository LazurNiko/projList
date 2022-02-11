// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // getClientsList: async function() {
    //   this.amOnPage('https://www.lohika.com/clients');
    //   const clienList = this.usePlayWright('get clients list', async({ page }) => {
    //     let clientsObj = {};
    //     const clientList = await page.$$(`//div[@class='all-clients__item-wrapper']`);
    //     for(const el of clientList) {
    //       const a = await el.waitForSelector('//a');
    //       const img = await el.waitForSelector('//img');
    //       const alt = await el.waitForSelector('alt');
    //       const src = await el.waitForSelector('href');
    //       clientsObj[alt] = src;
    //     }
    //     console.log(JSON.stringify(clientsObj));
    //   })
    // }

  });
}
