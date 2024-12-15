# http 模块

建立在 tcp/ip （net 模块） 基础上，是一种基于 http 协议的网络通信模块
使用 http 模块，有两个优点：
- 无需手动管理 socket
- 无需手动组装消息格式

## 发送请求

```js
const http = require("http");

const options = {
    hostname: "www.baidu.com",
    port: 80,
    path: "/",
    method: "GET",
};

const req = http.request(options, (res) => {
    console.log(`状态码:${res.statusCode}`);
    console.log(`响应头:${JSON.stringify(res.headers)}`);
    res.on("data", (chunk) => {
        console.log(`数据:${chunk}`);
    });
    res.on("end", () => {
        console.log("数据接收完成");
    });
});

req.on("error", (error) => {
    console.error(error);
});

req.end(); // 发送请求，拼装完整的请求体
```

## 创建服务器

官方文档：https://nodejs.org/docs/v22.12.0/api/https.html#httpscreateserveroptions-requestlistener

```js
const http = require("http");
const server = http.createServer((req, res) => {
    console.log("请求方法", req.method);
    console.log("请求路径", req.url);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write("Hello World");
    res.end("Hello World");
});
server.listen(8080, () => {
    console.log("服务器已启动，监听端口 8080");
});
```


## 总结

我是客户端：
请求： ClientRequest 对象
响应： IncomingMessage 对象

我是服务端：
请求： IncomingMessage 对象
响应： ServerResponse 对象


## 实现一个静态资源服务器

1. 创建一个服务器
2. 把请求路径转化为文件路径
3. 判断文件是否存在，如果存在
4. 判断是否是文件夹
5. 如果是文件夹，拼接默认文件 html，如果拼接的文件不存在，返回 404，如果拼接的文件存在，返回文件
6. 如果是文件，返回文件