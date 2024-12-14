const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.method);
    res.write("hello 12313");
    res.end();
});

server.listen(3000, () => {
    console.log("http://localhost:3000");
});