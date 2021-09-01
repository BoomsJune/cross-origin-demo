const http = require("http");
const fs = require("fs");

// 创建服务器
const server = http.createServer((request, response) => {

    // 读取文件内容
    fs.readFile(request.url.substr(1), (err, data) => {
        if(err) {
            console.log(err);
            response.writeHead(404, {'Content-Type': 'text/html'});
        }else{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
        }
        response.end();
    });

});

server.listen(8080);

console.log("server running at http://127.0.0.1:8080/");