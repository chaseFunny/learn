// 文件流
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../08文件IO.md");

const readStream = fs.createReadStream(filePath, {
  encoding: "utf-8",
  highWaterMark: 1, // 每次读取的缓冲区大小，默认是 64kb
  autoClose: true, // 读完自动关闭，默认为 true
});

readStream.on("data", (chunk) => {
  console.log("一次读取的内容：" + chunk);
});
readStream.on("end", () => {
  console.log("end");
});
readStream.on("error", (err) => {
  console.log(err);
});

// 函数：先在当前目录下创建 99.js 文件，两秒后删除
const createAndDeleteFn = () => {
  const filepath = path.resolve(__dirname, "./99.js");
  fs.promises.writeFile(filepath, "hhhh");
  setTimeout(() => {
    fs.promises.unlink(filepath);
  }, 2000);
};

createAndDeleteFn();
