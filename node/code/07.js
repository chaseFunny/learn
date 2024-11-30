// 文件流
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../08文件IO.md");

const readStream = fs.createReadStream(filePath, {
  encoding: "utf-8",
});

readStream.on("data", (chunk) => {
  console.log(chunk);
});
readStream.on("end", () => {
  console.log("end");
});
readStream.on("error", (err) => {
  console.log(err);
});
