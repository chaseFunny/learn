# Nodejs 中的 es 模块化

开启方式：

1. 在 package.json 中添加 `"type": "module"`，这样整个项目都是 es 模块化
2. 文件后缀改为 `.mjs`

使用方法：

1. 导入模块：`import { a } from "./a.js";`
2. 导出模块：`export default { a: 1 };` 和 `export { a };`

动态导入：
动态导入是 es 模块化特有的，可以动态导入模块，返回一个 promise 对象，可以通过 `await` 来获取导入的模块。
使用方式：`import("./a.js").then((res) => { console.log(res); });`
