const http = require("http");

const request = http.request("http://www.baidu.com/",{
    method: "GET",
    headers: {
        // "Content-Type": "application/json",
    }
}, (res) => {
    console.log(res.method);
    let result = "";
    res.on("data", (chunk) => {
        console.log(chunk.toString());
        
        result += chunk.toString();
    });
    console.log(result, '123');
    
    res.on("end", () => {
        console.log("end");
    });

});

request.write("hello");

request.end(); 