const puppeteer = require("puppeteer"); 
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const pdfkit = require("pdfkit");

const getPdf = require("./scrapping");

let page; 
const browserOpenpromise = puppeteer.launch({
     headless: false,
    //  slowMo: 20,
     defaultViewport: null,
     args:["--start -maximized"] 
    }); 
browserOpenpromise 
    .then(function (browser){
         // currently opened tabs 
    const pagesArrpromise = browser.pages(); 
    return pagesArrpromise; 
    }).then(function (browserPages){ 
        page = browserPages[0]; 
        let gotoPromise = page.goto("https://www.google.com/"); 
        return gotoPromise; 
    }).then(function () { 
        // waiting for the element to appear on the page 
        let elementWaitPromise = page.waitForSelector("input[type='text']", { visible: true }); 
        return elementWaitPromise; 
    }) .then(function () { 
        // console.log("Reached google home page"); 
        // type any element on that page -> selector 
        let keysWillBeSendPromise = page.type("input[type='text'", "wikipedia"); 
        return keysWillBeSendPromise; 
    }).then(function () { // page.keyboard to type special characters 
        let enterWillBePressed = page.keyboard.press("Enter"); 
        return enterWillBePressed; 
    }).then(function () { 
        let elementWaitpromise = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", { visible: true });
        return elementWaitpromise; 
    }).then(function () {
         //mouse 
         let keysWillBeSendPromise = page.click("h3.LC20lb.MBeuO.DKV0Md"); 
         return keysWillBeSendPromise;
    }).then(function () { 
        // selecting English attribute
        let elementWaitpromise = page.waitForSelector("#js-link-box-en", { visible: true });
        return elementWaitpromise; 
    }).then(function () {
        // Clicking on English 
        let keysWillBeSendPromise = page.click("#js-link-box-en"); 
        return keysWillBeSendPromise;
   }).then(function () { 
        // selecting All Portals
        let elementWaitpromise = page.waitForSelector(".portal-hright.portal-vbot", { visible: true });
        return elementWaitpromise; 
    }).then(function () {
        // Clicking All Portals
        let keysWillBeSendPromise = page.click(".portal-hright.portal-vbot"); 
        return keysWillBeSendPromise;
    }) .then(function () { 
        // selecting A-Z
        let elementWaitpromise = page.waitForSelector("a[title='Wikipedia:Contents/A–Z index']", { visible: true });
        return elementWaitpromise; 
    }).then(function () {
        // Clicking A-Z
        let keysWillBeSendPromise = page.click("a[title='Wikipedia:Contents/A–Z index']"); 
        return keysWillBeSendPromise;
    }).then(function () { 
        // selecting S
        let elementWaitpromise = page.waitForSelector("a[title='Special:AllPages/S']", { visible: true });
        return elementWaitpromise; 
    }).then(function () {
        // Clicking S
        let keysWillBeSendPromise = page.click("a[title='Special:AllPages/S']"); 
        return keysWillBeSendPromise;
    }).then(function () { 
        // selecting "S"
        let elementWaitpromise = page.waitForSelector("a[title='S']", { visible: true });
        return elementWaitpromise; 
    }).then(function () {
        // Clicking "S"
        let keysWillBeSendPromise = page.click("a[title='S']"); 
        return keysWillBeSendPromise;
    }).then(function () { 
        // selecting "S"
        let elementWaitpromise = page.waitForSelector("a[title='S']", { visible: true });
        return elementWaitpromise; 
    }).then(function () {
        // Clicking "S"
        let keysWillBeSendPromise = page.click("a[title='S']"); 
        return keysWillBeSendPromise;
    }).then(function(){
        let timeWait = page.waitForTimeout(3000);
        let urll = page.url();
        console.log(urll)
        getPdf(urll);
        return timeWait;
    }).then(function () { 
        // selecting History
        let elementWaitpromise = page.waitForSelector(".toclevel-1.tocsection-1 a[href='#History']", { visible: true });
        return elementWaitpromise; 
    }).then(function () {
        // Clicking History
        let keysWillBeSendPromise = page.click(".toclevel-1.tocsection-1 a[href='#History']"); 
        return keysWillBeSendPromise;
    }).then(function(){
        let timeWait = page.waitForTimeout(3000);
        return timeWait;
    }).then(function () { 
        // selecting Use in Writing System
        let elementWaitpromise = page.waitForSelector("a[href='#Use_in_writing_systems']", { visible: true });
        return elementWaitpromise; 
    }).then(function () {
        // Clicking Use in Writing System
        let keysWillBeSendPromise = page.click("a[href='#Use_in_writing_systems']"); 
        return keysWillBeSendPromise;
    }).then(function(){
        let timeWait = page.waitForTimeout(3000);
        return timeWait;
    }).then(function () { 
        // selecting Related Characters
        let elementWaitpromise = page.waitForSelector("a[href='#Related_characters']", { visible: true });
        return elementWaitpromise; 
    }).then(function () {
        // Clicking Related Characters
        let keysWillBeSendPromise = page.click("a[href='#Related_characters']"); 
        // let topic="S";
        // let folderpath = path.join(__dirname , topic);
        // dirCreator(folderpath);
        // let filePath = path.join(folderpath +"S.pdf");
        
        
        

        return keysWillBeSendPromise;
       
    }).catch(function (err){
         console.log(err); 
    }) 

// function dirCreator(folderpath){
//     if(fs.existsSync(folderpath)==false){
//         fs.mkdirSync(folderpath);
//     }
// }    


    
