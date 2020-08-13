const http = require("http");
const fs = require("fs");

http
  .get(
    "http://if-staging.caiyunai.com/api/user/5efae62729163f367a4f27f9/chat/5f33aec15a3faf8063fc8a68?_id=&author_name=&author_type=&orderBy=&orderDir=&page=1&per_page=300&s_id=",
    (res) => {
      const { statusCode } = res;
      const contentType = res.headers["content-type"];

      let error;
      // 任何 2xx 状态码都表示成功的响应，但是这里只检查 200。
      if (statusCode !== 200) {
        error = new Error("请求失败\n" + `状态码: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error(
          "无效的 content-type.\n" +
            `期望的是 application/json 但接收到的是 ${contentType}`
        );
      }
      if (error) {
        console.error(error.message);
        // 消费响应的数据来释放内存。
        res.resume();
        return;
      }

      res.setEncoding("utf8");
      let rawData = "";
      res.on("data", (chunk) => {
        rawData += chunk;
      });
      res.on("end", () => {
        try {
          //   console.log(rawData);
          const parsedData = JSON.parse(rawData);

          if (parsedData.status === 0) {
            const data = parsedData.data.rows;
            console.log(data);
            let rows = data.map((v) => {
              return `${v.author_name}:${v.content}`;
            });
            console.log(rows);
            rows = rows.join("\n");
            fs.writeFile("./file.txt", rows, function (error) {
              if (error) {
                console.log("写入成功");
              } else {
                console.log("写入成功");
              }
            });
          }
        } catch (e) {
          console.error(e.message);
        }
      });
    }
  )
  .on("error", (e) => {
    console.error(`出现错误: ${e.message}`);
  });
