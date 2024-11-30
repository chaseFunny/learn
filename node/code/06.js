// fs
const fs = require("fs");
const path = require("path");
const os = require("os");

const filename = path.resolve(__dirname, "../../assets/file/test.txt");

// fs.readFile(
//   filename,
//   // {
//   //   encoding: "utf-8",
//   // },
//   (err, context) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.dir(context);
//     console.log(context.toString());
//   }
// );

// async function test1() {
//   const elo = os.EOL;
//   const writePath = path.resolve(__dirname, "./test.js");
//   const hasFile = fs.existsSync(writePath);
//   const data = new Uint8Array(Buffer.from(`${hasFile ? elo : ""}console.log('luckySnail use fs writeFile API !')`));
//   const res = await fs.promises.writeFile(writePath, data, {
//     encoding: "utf-8",
//     flag: "a",
//   });
//   console.log(res);
// }
// test1();

async function name1() {
  // const filename = path.resolve(__dirname, "./01.js");
  // const state = await fs.promises.stat(filename);
  // console.log(state);

  // fs.readdir
  // const dirname = path.resolve(__dirname, "../code");
  // const paths = await fs.promises.readdir(dirname);
  // console.log(paths);

  // fs.mkdir
  const dirname = path.resolve(__dirname, "./test1");
  // fs.promises.mkdir(dirname);
  // fs.promises.writeFile(dirname + "/a.js", `const a  = 'luckySnail'; \n console.log(a)`);

  // 判断文件是否存在
  fs.promises
    .access(dirname + "/a.js")
    .then(() => {
      console.log("文件存在");
      // 判断是否是文件
      const filename = dirname + "/a.js";
      fs.promises.stat(filename).then((res) => {
        if (res.isFile()) {
          fs.promises.readFile(filename, { encoding: "utf-8" }).then((res) => {
            console.log("文件内容是：" + res);
          });
        } else {
          console.log("不是文件");
        }
      });
    })
    .catch(() => {
      console.log("文件不存在");
    });
}
name1();
