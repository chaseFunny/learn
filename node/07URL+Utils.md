# URL 模块

要求：掌握

URL 模块是 Node.js 中用于处理 URL 字符串和对象的内置模块。它提供了一系列方法来解析、构造和操作 URL。

主要用途：

1. 解析 URL 字符串为 URL 对象
2. 构造新的 URL 对象
3. 获取和修改 URL 的各个组成部分
4. 处理查询字符串参数

常用属性：

1. href - 完整的 URL 字符串
2. protocol - URL 的协议部分
3. host - 主机名和端口
4. hostname - 主机名
5. port - 端口号
6. pathname - 路径名
7. search - 查询字符串
8. searchParams - 查询参数对象
9. hash - 锚点

学习目标：

- 掌握 URL 模块的基本使用方法
- 理解 URL 的各个组成部分
- 能在实际开发中正确处理 URL 相关的操作

## URL.parse()

地址：https://nodejs.org/docs/v22.11.0/api/url.html#urlparseurlstring-parsequerystring-slashesdenotehost
和 URL.URL() 一样，也返回一个 URL 对象，但返回的对象是旧版本的 URL 对象，不推荐使用。目前已经废弃

---

## URL.format()

地址：https://nodejs.org/docs/v22.11.0/api/url.html#urlformaturlobject
将 URL 对象转换为 URL 字符串

## util

地址：https://nodejs.org/docs/v22.11.0/api/url.html#urlutil

util 模块提供了一组实用工具，用于处理回调函数、对象比较、错误处理等。

1. callbackify(original) : 把一个异步函数转换为回调函数
2. inherits(constructor, superConstructor)：继承，第一个参数是子类，第二个参数是父类
3. isDeepStrictEqual(value)：判断两个对象是否深入严格相等
4. promisify(original)：把一个异步函数转换为 Promise 对象
