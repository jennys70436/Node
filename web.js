var http = require('http')
var server = http.createServer(function (request, response) {
    response.write('Hello')
    response.end() // 傳輸完畢
})
server.listen(3000, '127.0.0.1') // 監聽3000 port
