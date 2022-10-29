const http = require('http');
const fs = require('fs')

const hostname = '0.0.0.0';
const port = 8080;

const filename = '/filefolder/file.txt'

fs.writeFile(filename, '', function(){console.log('file cleared')})

const server = http.createServer((req, res) => {
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) throw err;
        console.log(data)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(data);
    })
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://localhost:${port}/`);
});