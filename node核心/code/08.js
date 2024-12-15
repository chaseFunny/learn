// 写入流

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "./test1/test.txt");

const writeStream = fs.createWriteStream(filePath, {
  encoding: "utf-8",
  highWaterMark: 2 * 1024, // 每次写入的缓冲区大小，默认是 16kb
  autoClose: true, // 写入完毕自动关闭，默认是 true
  flags: "w", // 写入方式，默认是 w，覆盖写入
});

writeStream.on("open", () => {
  console.log("文件打开");
});

writeStream.on("close", () => {
  console.log("文件关闭");
});

writeStream.on("error", (err) => {
  console.log(err);
});

writeStream.on("finish", () => {
  console.log("写入完成");
});

let i = 0;
let flag = true;
function write() {
  while (flag && i < 1000000) {
    flag = writeStream.write("a");
    i++;
    if (i >= 1000000) {
      writeStream.end();
    }
  }
}

// write();

writeStream.on("drain", () => {
  console.log("排空");
  flag = true;
  write();
});

// 把 test1/a.txt 文件中的内容读取出来，写入到 test1/b.txt 文件中
function copy() {
  console.time("copy");
  const readStream = fs.createReadStream(path.join(__dirname, "./test1/test.txt"));
  const writeStream = fs.createWriteStream(path.join(__dirname, "./test1/b.txt"));
  readStream.pipe(writeStream);
  console.timeEnd("copy");
}

// copy();

// 原始方法
function copy1() {
  console.time("copy1");
  const from = path.join(__dirname, "./test1/test.txt");
  const to = path.join(__dirname, "./test1/test2.txt");
  const fromBuffer = fs.readFileSync(from);
  fs.writeFileSync(to, fromBuffer);
  console.timeEnd("copy1");
}

// copy1();

function copy2() {
  console.time("copy2");
  const readStream = fs.createReadStream(path.join(__dirname, "./test1/test.txt"));
  const writeStream = fs.createWriteStream(path.join(__dirname, "./test1/test3.txt"));
  readStream.on("data", (chunk) => {
    const flag = writeStream.write(chunk);
    if (!flag) {
      readStream.pause();
    }
  });
  writeStream.on("drain", () => {
    readStream.resume();
  });
  readStream.on("close", () => {
    writeStream.end();
    console.timeEnd("copy2");
  });
}

copy2();
