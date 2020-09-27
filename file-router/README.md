## file-router

### 任务
- 根据路由名字去匹配相对应的文件
- 添加或删除文件，通过路由能继续访问

### 实现

``````
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
``````