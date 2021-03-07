const http = require('http')
const fs = require('fs')
const url = require('url')
const mime = require('mime')
const server = http.createServer(function (request, response) {
    const myUrl = new URL(`http://127.0.0.1:3000${request.url}`)
    console.log(myUrl.pathname)
    var relativePathname = decodeURIComponent(myUrl.pathname);
    if (myUrl.pathname.endsWith('/')){
        myUrl.pathname += 'index.html'
    } 
    fs.stat(`.${relativePathname}`, function(err, stats){
        if(!err && stats.isDirectory()) {
            response.writeHead(302, {
                'Location': myUrl.pathname + '/' + (myUrl.search || "")
            })
            response.end();
            return;
        }
        if(!err && stats.isFile()) {            
            // 非同步 
            fs.readFile(`.${relativePathname}`, function(err, html){
                if(!err){
                    // 帶入status Code及Header屬性, 放在最上面
                    response.writeHead(200, {
                        'Content-Type': mime.getType(myUrl.pathname)
                    })
                    response.write(html)
                    response.end()
                }
            });
        } else {
            response.writeHead(404)
            response.write('NOT FOUND')
            response.end()
        }
    })
})
server.listen(3000, '127.0.0.1') // 監聽3000 port
