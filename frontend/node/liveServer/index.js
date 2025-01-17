const fs = require("fs");
const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const express = require("express");

// 创建 Express 应用
const app = express();

// 使用 connect-livereload 中间件
app.use(connectLivereload());

// 记录请求和错误
const log = (message) => {
  console.log(new Date().toISOString() + ": " + message);
};

// 处理请求路径并返回文件路径
const resolvePath = (p) => {
  const filePath = p.startsWith("/") ? p.slice(1) : p;
  const fullPath = path.join(__dirname, "assets", filePath);
  if (!fs.existsSync(fullPath)) {
    log(`File not found: ${fullPath}`);
    return null;
  }
  return fullPath;
};

// 获取文件的内容类型
const getContentType = (filePath) => {
  const ext = path.extname(filePath);
  switch (ext) {
    case ".html":
      return "text/html;charset=utf-8";
    case ".css":
      return "text/css;charset=utf-8";
    case ".js":
      return "application/javascript;charset=utf-8";
    case ".json":
      return "application/json;charset=utf-8";
    default:
      return "application/octet-stream";
  }
};

// 处理接受的请求和发送合适的响应
app.get("*", (req, res) => {
  const filePath = resolvePath(req.url);
  if (filePath) {
    if (fs.statSync(filePath).isFile()) {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          log(`Error reading file: ${filePath} - ${err.message}`);
          res.status(500).send("500 Internal Server Error");
          return;
        }
        res.status(200).type(getContentType(filePath)).send(data);
      });
    } else if (fs.statSync(filePath).isDirectory()) {
      const indexPath = path.join(filePath, "index.html");
      if (fs.existsSync(indexPath)) {
        fs.readFile(indexPath, (err, data) => {
          if (err) {
            log(`Error reading index file: ${indexPath} - ${err.message}`);
            res.status(500).send("500 Internal Server Error");
            return;
          }
          res.status(200).type(getContentType(indexPath)).send(data);
        });
      }
    }
  } else {
    res.status(404).type("text/html;charset=utf-8").send("404 Not Found");
  }
});

// 创建 LiveReload 服务器并监控 assets 目录
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "assets"));

// 启动服务器
const PORT = 3003;
app.listen(PORT, () => {
  log(`Server running at http://localhost:${PORT}`);
});
