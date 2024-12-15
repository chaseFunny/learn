// URL
const URL = require("url");
const util = require("util");

// const url = new URL.URL("https://www.baidu.com:4431/s?wd=nodejs#abc");
// console.log(url);
// console.log(url.searchParams.has("wd"));
// 打印得到
// URL {
//   href: 'https://www.baidu.com:4431/s?wd=nodejs#abc',
//   origin: 'https://www.baidu.com:4431',
//   protocol: 'https:',
//   username: '',
//   password: '',
//   host: 'www.baidu.com:4431',
//   hostname: 'www.baidu.com',
//   port: '4431',
//   pathname: '/s',
//   search: '?wd=nodejs',
//   searchParams: URLSearchParams { 'wd' => 'nodejs' },
//   hash: '#abc'
// }
// true

function delay(duration = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(duration);
    }, duration);
  });
}

// delay().then((duration) => {
//   console.log(duration);
// });

const delayCallback = util.callbackify(delay);
// delayCallback(300, (err, duration) => {
//   console.log(duration);
// });

const delayPromise = util.promisify(delayCallback);
delayPromise(300).then((duration) => {
  console.log(duration);
});
