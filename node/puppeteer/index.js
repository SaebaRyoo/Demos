const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.goto('https://etherscan.io/address/0x0264438173ebcd19651e6b2a5f63dcec0f0afc4d#code');

  // Wait for the results page to load and display the results.
  const divIdCodeSelector = '#dividcode';
  const divIdCodeHandle = await page.waitForSelector(divIdCodeSelector);

  // Extract the results from the page.
  const result = await page.evaluate(async (divCode) => {

    // find title which contains 'Contract Source Code'
    const contractSourceCodeTitleEle = [...document.querySelectorAll('#dividcode h4.card-header-title')].filter(ele => {
      return ele.innerHTML.match(/contract source code/gi)
    })[0];


    // ele.parentElement.querySelector('a.js-clipboard').click()
    // const code = await navigator.clipboard.readText()
    const contractSourceCodeWrapper = contractSourceCodeTitleEle.parentElement.parentElement;
    // 根据Contract Source Code 找到父节点的父节点，然后在这个结构找查找.texttext-secondary
    const sourceCodeNames =
      [...contractSourceCodeWrapper.querySelectorAll('span.text-secondary')]
      .filter((_, index) => index > 0) // 过滤掉第一个'span.text-secondary',它是标题中的元素，无用
      .map((ele) => {
        // find code
        ele.parentElement.querySelector('a.js-clipboard').click();
        navigator.clipboard.readText().then((clipText) => document.querySelector("body").innerText = clipText)
        return {
          filname: ele.innerHTML,
        }
      });

    await sourceCodeNames;


    // final result
    return {
      // sourceCode: sourceCodeNames.map((name) => ({filename: name})),
      sourceCode: sourceCodeNames,
      // code
    }
  }, divIdCodeHandle);

  // Print all the files.
  console.log(result);

  // await browser.close();
})();
