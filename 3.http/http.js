
/**
 * Created by Administrator on 2017/10/25.
 */
var http = require("http");
function service(request,response) {
    console.log(request.method);
    console.log(request.url);
    console.log(request.headers);


    response.statusCode=200;
    response.setHeader("server_name","test");
    response.setHeader("Content-Type","text/html;charset=utf-8");
    response.write(new Date().toString());
    response.end();
}
var server = http.createServer(service);
server.listen("83","localhost");
