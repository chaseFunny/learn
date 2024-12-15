// path
const path = require("path");

// console.log(path.basename(__filename, "js"));

// console.log(path.sep, path.delimiter);

console.log(path.relative("/a/b/c", "/c/g/d"));

// resolve
// console.log(path.resolve(__filename, "code", "04.js"));
console.log(path.resolve("code", "04.js"));
