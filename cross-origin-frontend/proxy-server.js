const http = require("http");
const httpProxy = require("http-proxy");
const fs = require("fs");

// 创建代理服务器
const proxyServer = httpProxy.createProxyServer({})

// 自定义路由规则
const server = http.createServer((request, response) => {

    const path = request.url;
    console.log(`request url: ${path}`);

    if(/^\/api\/.*/.test(path)) {
        // 转发
        proxyServer.web(request, response, { 
            target: `http://192.168.1.4:5000`
        });
    }else{
        // 其余的读取文件内容
        fs.readFile(path.substr(1), (err, data) => {
            if(err) {
                response.writeHead(404, {'Content-Type': 'text/html'});
            }else{
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
            }
            response.end();
        });

    }
});

server.listen(8080);

console.log("proxy server is listening to port 8080");