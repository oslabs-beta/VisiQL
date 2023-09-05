const puppeteer = require('puppeteer');

/*
 * This is the test file for frontend integration 
 * and end-to-end browser testing using Puppeteer
 */







//defines the app address
// const APP = `http://localhost:${process.env.PORT || 3000}/`;

// describe('Front-end Integration/Features', () => {
//   const timeout = 7000;
//   let browser;
//   let page;

//   beforeAll(async () => {
//     browser = await puppeteer.launch({
//       args: ['--no-sandbox', '--disable-setuid-sandbox'],
//     });
//     page = await browser.newPage();
//   }, timeout);

//   afterAll(() => {
//     browser.close();
//   });

//   describe('Initial display', () => {
//     it('loads successfully', async () => {
//       // We navigate to the page at the beginning of each case so we have a
//       // fresh start
//       await page.goto(APP);
//       await page.waitForSelector('#homepage-container');
      
//     }, timeout);

//     it('displays a usable database input field', async () => {
//       await page.goto(APP);
//       await page.waitForSelector('.db-textfield');
//       // const textField = await page.waitForSelector('.db-textfield');
//       // textField.onChange = (e) => e.target.value;
//       // await page.click('.db-textfield');
//       // await page.keyboard.type('db-textfield', 'Tallahassee');
//       // const inputValue = await page.$eval('.db-textfield', el => el.value);
//       // expect(inputValue).toBe('Tallahassee');

//     }, timeout);
// //unable to test this as shown in the Unit because of the useInput hook
//   }, timeout);
// });
