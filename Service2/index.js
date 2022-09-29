const http = require('http');
//const axios = require('axios');

const hostname = '0.0.0.0';
const port = 12346;

const server = http.createServer((req, res) => {
    console.log("Hello from service2");
    var response = "Hello from " + req.client.remoteAddress + ":" + req.client.remotePort + "\n" +
                    "to " + req.client.localAddress + ":" + req.client.localPort;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(response);
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });