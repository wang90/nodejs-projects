const cheerio = require('cheerio');
const https = require('https');
const fs = require('fs');
console.log('app is running');

const url = 'https://xxx.com';
const text = [];

function puppter_allwords() {
    https.get( url , function( res ) {  //发送get请求
        let val=''
        res.on('data',function( data ) {
            val += data  //字符串的拼接
        })
        res.on('end', function() {
          const $ = cheerio.load(val);
          //  根据页面查找 dom
          // 如果有下一页  puppter_allwords( page + 1 );
          savefile( text );
        })
    }).on('error', function () {
        console.log('获取资源出错！')
    })
}

function savefile( texts ) {
    const text = texts.join('\n')
    fs.writeFile('save.txt', text,  function(err) {
        if (err) {
            console.log("数据写入失败！");
            return console.error(err);
        }
        console.log("数据写入成功！");
     });
}


puppter_allwords();


