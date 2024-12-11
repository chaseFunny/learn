# net 模块

为什么要学？
为了 http 模块学习做铺垫，更加深入了解网络请求

## 回顾 HTTP 请求

普通模式：客户端请求服务器，通过三次握手来建立连接，然后发送请求，服务器返回响应，然后通过四次挥手来断开连接，我们的 Ajax 请求就是这样

长连接模式：依然是三次握手，但是在建立连接后，发送请求的时候，会设置请求头的`Connection: keep-alive`，设置这个后，就不会去很快进行断开连接，而是服务器返回响应，然后客户端继续发送请求，服务器返回响应，直到客户端主动断开连接，或者服务器主动断开连接，当然我们也是会走四次挥手的逻辑的

## net 模块的作用

net 是一个通信模块，利用它，我们可以实现进程间的通信（IPC），也可以实现**网络通信**（TCP/IP）

## 创建客户端

```js
const net = require("net");
const socket = net.createConnection(
  // socket 是一个流对象
  {
    port: 8080, // 端口
    host: "127.0.0.1", // 要连接的主机
  },
  cb
); // 创建客户端。 cb 是一个回调函数
```

关于 socket

可以理解为一个特殊的文件，它可以让我们进行写入内容，它会把写入的内容发送到服务器，它也可以接受服务器的响应，我们可以通过读这个文件的方式来读取服务器的响应。所以它的表现是一个双工流，通过写内容发送数据，通过监听流的内容获取数据

所以我们可以使用 流 的方法来操作它

```js
socket.on("data", (chunk) => {
  console.log(chunk.toString()); // 监听到服务器的响应
});
```

当我们请求一个真实的服务器，看到它的返回，会看到就是一个字符串，当然，我们发送给服务器的其实也是一个字符串，这就是底层发送和接收请求的过程

socket 还有一些方法

```js
socket.write("hello"); // 向服务器发送请求
socket.end(); //// 关闭连接
socket.on("close", () => {}); // 监听关闭连接
```

如果我们实践去发送请求，会发现请求是一块一块传输的，也就是流式传输的，我们可以通过 `Content-Length`（消息体的总字节数） 来判断我们是否接收完了服务器发送的数据

## 创建服务器

```js
const net = require("net");
const server = net.createServer();

server.listen(8080);

server.on("listening", () => {
  console.log("listening");
});

server.on("connection", (socket) => {
  console.log("connection");

  socket.on("data", (chunk) => {
    console.log(chunk.toString());
    // 可以在这里发送数据给客户端
    socket.write("hello"); // 里面的字符串会发送给客户端，如果是 http 协议，那么就需要遵守http 协议的规范进行返回数据
    socket.end();
  });

  socket.on("end", () => {});
});
```

server 对象：

- listen: 监听端口
- on: listening 监听连接
- on: connection 监听客户端连接，当某个连接到来，触发该事件，事件监听函数会获得一个 socket,它也是一个流对象，所以可以使用流的方法，这个对象就是客户端的连接对象，我们可以通过它来与客户端进行通信，例如：向客户端发送数据，关闭连接等

服务器
