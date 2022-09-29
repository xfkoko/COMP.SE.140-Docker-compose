import * as http from 'http';
import fetch from 'node-fetch';

const hostname = '0.0.0.0';
const port = 12345;


const server = http.createServer((req, res) => {
    var response = "Hello from " + req.client.remoteAddress + ":" + req.client.remotePort + "\n" +
                    "to " + req.client.localAddress + ":" + req.client.localPort + "\n";
    
    fetch('http://service2:12346').then((r) => r.text())
    .then(t => {
        response = response + t;
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        console.log("New message:");
        console.log(response);
        res.end(response);
    });
  });

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });