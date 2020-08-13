const Koa = require("./koa")

const app = new Koa();


app.use((req,res) =>{
    res.writeHead(200);
    res.end("hellow my Koa")
})

app.listen(3000,()=>{
    console.log("Server is runnning on 3000");
})