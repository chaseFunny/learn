// 使用 http 和 eventEmitter 实现一个请求封装

const http = require("http");
const EventEmitter = require("events");

module.exports = class Request extends EventEmitter {
    constructor(url ,options) {
        super();
        this._url = url;
        this._options = options;
    }
    send(body="") {
        const req = http.request(this._url, this._options, (res) => {
            let result = "";
            res.on("data", (chunk) => {
                result += chunk.toString();
            });
            res.on("end", () => {
                this.emit("res", result);
            });
        });
        req.write(body);
        req.end();
    }
};

// 使用

const request = new Request("http://www.baidu.com/", {
    method: "GET",
    headers: {
        // "Content-Type": "application/json",
    }
});

request.on("res", (result) => {
    console.log(result);
});

request.send();