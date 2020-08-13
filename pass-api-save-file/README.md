## 通过 nodejs http 模块请求 api 生成文件


### 1. 引入 http模块
`````
const http = require("http");
`````

### 2. 请求 api
``````
http
  .get(
    "xxxx",
    (res) => {})
``````

### 3. 处理获取文件
`````
res.on("end", () => {
    const parsedData = JSON.parse(rawData);
})  
`````

### 4. 引入 fs 模块
`````
const fs = require("fs");
`````

### 5. 保存文件
``````
fs.writeFile("./log.log", rows, function (error) {
    if (error) {
        console.log("写入成功");
    } else {
     console.log("写入成功");
    }
});
``````