# node 概述

要求：熟悉

先盖棺定论，java 可以的， node 都行，但是：

1. JavaScript 是一门解释性语言，

## 什么是 node？

- 一个 JavaScript 运行环境
- 它相比较游览器中的 js ，拥有更多的能力，Node Api 几乎提供了所有能做的事情
- node 提供完整的控制计算机的能力，所以 NodeJs 是可以通过 Node 提供的接口实现对整个操作系统的控制

node 官网：https://nodejs.org/en

node 优点：

1、单线程异步回调模式，IO 速度快，没有线程的竞争

2、不适合大型运算

## 通常使用 node 干什么？

桌面应用程序开发

开发服务器应用程序

1）作为服务器端提供接口服务，访问和操作数据库，适用于小型站点

2）中间层，简单把请求发送到真正后端，利用 node 的 IO 速度快特点来做中间层，接受大量请求，实现快速响应请求

## 安装

官网：https://nodejs.org/zh-cn/
安装成功，在命令行输入 node -v 查看版本，安装成功会自动安装 npm，使用 npm -v 查看版本

## 使用

node 是一个 js 运行环境，所以 node 可以运行 js 代码，那我们新建一个 js 文件，然后在命令行输入 node 文件名.js 就可以运行 js 代码了

# 参考

渡一付费课程

小满 zs nodejs 视频课程：https://www.bilibili.com/video/BV1cV4y1B7P4

文章：https://juejin.cn/post/7258881840823713848
