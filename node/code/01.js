//  全局对象
// console.log(global, "global");
// console.log(globalThis.global, "globalThis");

// __dirname 和 __filename
// console.log(__dirname, __filename, globalThis.__dirname, globalThis.__filename);

// console.log(Buffer.from("hello"), globalThis.Buffer);

// cwd
// console.log("当前命令行：", process.cwd());

// exit
// const timer = setTimeout(() => {
//   console.log("定时器执行");
// }, 1000);

// process.exit(1); // 强制退出当前进程，接收一个参数，表示退出码，0 表示正常退出，非 0 表示异常退出

// argv
// console.log(process.argv, "argv");
// 第一个参数是 node 命令，第二个参数是当前文件路径，第三个以后参数是执行命令时候的参数

// platform
// console.log(process.platform, "platform");

// version
// console.log(process.version, "version");

// kill
// process.kill(86740); // 杀死进程，接收一个参数，表示进程的 pid

// env
// console.log(process.env.HOMEBREW_BOTTLE_DOMAIN, "env");

//

const a = require("./02");

console.log(a);
