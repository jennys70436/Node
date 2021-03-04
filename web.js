var http = require('http')
var fs = require('fs');
var server = http.createServer(function (request, response) {
    // 帶入status Code及Header屬性, 放在最上面
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    var html = fs.readFileSync('./index.html');
    response.write(html)
    // response.write('Hello World') // 直接輸出文字
    response.end() // 傳輸完畢
})
server.listen(3000, '127.0.0.1') // 監聽3000 port
