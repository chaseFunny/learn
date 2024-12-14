// 搭建本地静态资源服务器

const http = require("http");
const fs = require("fs");
const path = require("path");

// 记录请求和错误
/**
 * 记录请求和错误
 * @param {string} message - 要记录的信息
 */
const log = (message) => {
    console.log(new Date().toISOString() + ': ' + message);
};

/**
 * 处理请求路径并返回文件路径
 * @param {string} p - 请求路径
 * @returns {string} - 解析后的文件路径
 */
const resolvePath = (p) => {
    // 去除开头的 /
    const filePath = p.startsWith("/") ? p.slice(1) : p;
    //  assets 文件夹作为根目录
    const fullPath = path.join(__dirname, "../assets", filePath);
    // 如果文件不存在
    if (!fs.existsSync(fullPath)) {
        log(`File not found: ${fullPath}`);
        return null;
    }
    return fullPath;
};

/**
 * 获取文件的内容类型
 * @param {string} filePath - 文件路径
 * @returns {string} - 内容类型
 */
const getContentType = (filePath) => {
    const ext = path.extname(filePath);
    switch (ext) {
        case '.html': return 'text/html;charset=utf-8';
        case '.css': return 'text/css;charset=utf-8';
        case '.js': return 'application/javascript;charset=utf-8';
        case '.json': return 'application/json;charset=utf-8';
        default: return 'application/octet-stream';
    }
};

/**
 * 处理接受的请求和发送合适的响应
 * @param {*} req HTTP 请求的请求对象，包含标头、正文和查询参数等属性。
 * @param {*} res 响应对象用于将响应发送回客户端，允许您设置状态代码和响应数据。 
 */
const handler = (req, res) => {
    const filePath = resolvePath(req.url);
    if (filePath) {
        // 如果文件存在
        if (fs.statSync(filePath).isFile()) {
            // 读取文件
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    log(`Error reading file: ${filePath} - ${err.message}`);
                    res.statusCode = 500;
                    res.end('500 Internal Server Error');
                    return;
                }
                // 设置状态码和响应头
                res.statusCode = 200;
                res.setHeader("Content-Type", getContentType(filePath));
                // 发送响应
                res.end(data);
            });
            return;
        } else if (fs.statSync(filePath).isDirectory()) {
            // 如果是目录
            //  index.html 作为目录的默认文件
            const indexPath = path.join(filePath, "index.html");
            if (fs.existsSync(indexPath)) {
                // 读取 index.html
                fs.readFile(indexPath, (err, data) => {
                    if (err) {
                        log(`Error reading index file: ${indexPath} - ${err.message}`);
                        res.statusCode = 500;
                        res.end('500 Internal Server Error');
                        return;
                    }
                    // 设置状态码和响应头
                    res.statusCode = 200;
                    res.setHeader("Content-Type", getContentType(indexPath));
                    // 发送响应
                    res.end(data);
                });
                return;
            }
        }
    }
    // 如果文件不存在
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.end("404 Not Found");
};

const server = http.createServer(handler);

server.listen(3003, () => {
    log('Server running at http://localhost:3003');
});