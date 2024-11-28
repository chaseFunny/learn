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
  const dirname = path.resolve(__dirname, "../code");
  const paths = await fs.promises.readdir(dirname);
  console.log(paths);
}
name1();
