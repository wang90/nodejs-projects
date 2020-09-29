## 利用 pupeteer B站

### 使用

`````
npm install
node index.js
`````
### 参数
`````
start(number:number = 15) // 默认10 
`````
### 原理
- 引入 puppeteer
`````
const puppeteer = require("puppeteer");

`````
- 读取B站
``````
async function start() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.bilibili.com');
    const cards = await page.evaluate(() => {
        // 获取网页内部内容
    };
}
``````
- 根据标签寻找内容
`````
const cs = document.querySelectorAll('.video-card-common');
const cards =  [...cs].map(card => {
    const title = getText(card,'.ex-title') ||  getText(card,'.title');
    const up = getText(card,'.ex-up') || getText(card,'text');
    return { title, up};
});
function getText(card,className) {
    if (card.querySelector(className)) {
        return card.querySelector(className).innerText.trim();
    }
    return null;
}
`````
- 滚动加载
``````
function next(n , callback) {
    if (n > 0 ) {
        window.scrollBy(0,window.innerHeight);
    }else{
        callback();
        return ;
    }

    setTimeout(() => {
        next( n - 1 , callback);
    },1000);
}
``````
- 启用
``````
start();
``````