const cheerio = require('cheerio');
const https = require('https');
const fs = require('fs');
const { parse } = require('path');
console.log('app is running');

const url = 'https://zh.greatfire.org/search/weibo-searches';
const text = [];
let error_count = 0;

function puppter_allwords( page = 0 ) {
    console.log( page );
    https.get(`${ url }?page=${ page }`, function( res ) {  //发送get请求
        let val=''
        res.on('data',function( data ) {
            val += data  //字符串的拼接
        })
        res.on( 'end', function() {
            const $ = cheerio.load(val);
            const trvals = $('tbody > tr');
            for ( let i = 0 ; i < trvals.length ; i ++ ) {
                const trdom = trvals[i];
                const vals = $(trdom).find('.first').text();
                const blocked = parseInt($(trdom).find('.blocked').text()) || 0;
                let val = vals.split('s.weibo.com/weibo/')[1];
                if ( val ) {
                    if ( val.indexOf('?') > -1 ){
                        val = val.split('?')[0];
                    }
                    console.log(`${ val }, ${ blocked }`);
                    text.push({
                        value: val,
                        blocked: blocked,
                    });
                }
            }
            // if ( page < 5 ) {
            if ( page < 374 ) {
                puppter_allwords( page + 1 );
            } else {
                savefile( text );
            }
        })
    }).on('error', function (error) {
        console.log(error);
        if ( error_count < 3 ) {
            puppter_allwords( page );
            error_count += 1;
            console.log(`重试第${ error_count }次`)
        } else {
            console.log('获取资源出错！')
        }
    })
}

function savefile( texts ) {
    const t1 = texts.map(v => {
        return v.value;
    }).join('\n');

    const t2 = texts.map(v => {
        return v.value + ',' +v.blocked;
    }).join('\n');
   
    fs.writeFile('微博敏感词汇总.txt', t1,  function(err) {
        if (err) {
            console.log("数据写入失败！");
            return console.error(err);
        }
        console.log("数据写入成功！");
    });

    fs.writeFile('微博敏感词信息表汇总.txt', t2,  function(err) {
        if (err) {
            console.log("数据写入失败！");
            return console.error(err);
        }
        console.log("数据写入成功！");
    });
}


puppter_allwords( 0 );


