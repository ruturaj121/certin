const puppeteer = require("puppeteer");
const axios = require("axios");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.cert-in.org.in/" );
//  await page.screenshot({ path: "example.png", fullPage: true });
  //  const getData = await frame.$eval(() => { 
    await page.evaluate(() => { document.querySelector('tr[class*="TPadX"]')})
    let elements = await page.$$('tr[class*="TPadX"]');
    for (let element of elements) {
      let listTitle = await element.$eval(('td[class="Content"] > span[class="BContent"]'), node => node.innerText.trim());
      console.log(listTitle);
    }

    

})()