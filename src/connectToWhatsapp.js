const puppeteer=require('puppeteer')
const DefaultOptions = {
    puppeteer: {
        headless: false,
        defaultViewport: null,
        userDataDir:"user-data-dir",
        slowMo:30
    },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36'
};  
module.exports=(async ()=>{
const browser = await puppeteer.launch(DefaultOptions.puppeteer); 

const page = await browser.newPage();
page.setUserAgent(DefaultOptions.userAgent)
const phone="5584996363633"
const message="Oi Amor"
await page.goto(`https://web.whatsapp.com/send?phone=${phone}&text=${message}`)
await page.waitForSelector("._3FRCZ").toString()
await page.waitForSelector("._1U1xa")
const sendButton = await page.$("._1U1xa")
// const messages=await page.$$eval('.message-in',(message)=>message)
console.log(messages.length)
sendButton.click()
console.log('aaaaaa')
 
// await page.screenshot({path:'./screenshot.png'});
 
// await browser.close()
})()