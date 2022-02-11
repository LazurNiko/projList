const Helper = require('@codeceptjs/helper');

class Clientslist extends Helper {

  async getClientsList() {
    const { page } = this.helpers.Playwright;
  
      await page.waitForSelector('.all-clients__wrapper');
      const clients = await page.$eval('.all-clients__wrapper', 
        navElm => {
          let name = []
          let url = []
          let atags = navElm.getElementsByTagName("a");
          let alt = navElm.getElementsByTagName("img");
          for (let item of alt) {
          name.push(item.alt);
        }
  
              for (let item of atags) {
              url.push(item.href);
            }
            
          return Object.assign(...name.map((n, i) => ({ [n]: url[i] })));
        })
      console.log('clients--->>>>', JSON.stringify(clients));
      await page.waitForTimeout(5000);
  }
}

module.exports = Clientslist;
