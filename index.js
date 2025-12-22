const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    // Navigate to a website
    await page.goto('https://example.com');
    
    // Take a screenshot
    await page.screenshot({ path: 'screenshot.png' });
    
    await browser.close();
})();