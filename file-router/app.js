const express = require("express");
// app().listen(3000, () => {
//     console.log("服务已经启动了");
// });
const app = express();

app.get("/",(req,res) => {
    res.send("hello world");
});
const fs = require('fs');
const path = require("path");

const pagesDir = path.resolve( __dirname, "pages");
const htmls = fs.readdirSync(pagesDir);

htmls.forEach( file => {
    const [name,ext] = file.split('.');
    app.get("/" + name ,  displayHtmlFile(name));
});


function displayHtmlFile(name) {
    return (req,res) => {
        const filePath = path.resolve( pagesDir, `${name}.html`);
        res.sendFile(filePath);
    }
}

app.listen(3000,() => {
    console.log("服务已经启动了");
});