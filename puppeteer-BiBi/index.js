// puppeteer


const puppeteer = require("puppeteer");

async function start(number = 10) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.bilibili.com');

    const cards = await page.evaluate(() => {
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
        function getText(card,className) {
            if (card.querySelector(className)) {
                return card.querySelector(className).innerText.trim();
            }
            return null;
        }
        return new Promise((reslove,rejected)=> {
            next( number , () => {
                const cs = document.querySelectorAll('.video-card-common');
                const cards =  [...cs].map(card => {
                    const title = getText(card,'.ex-title') ||  getText(card,'.title');
                    const up = getText(card,'.ex-up') || getText(card,'text') ;                                                                             
                    return {
                        title,
                        up,
                    };
                });
                reslove(cards);
            });
        });    
    }).then(res=>{
        console.log("is list");
        console.log(res.length);
    }).catch(err=>{
        console.log(err);
    });
}
start();
