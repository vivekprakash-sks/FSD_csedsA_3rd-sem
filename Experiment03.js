const http = require('http');
const PORT = 3000;
const server = http.createServer((req, res) => {
    console.log('request received: $ { req.method}${req.url}');

    //set status code and headers
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-Powered-By', 'Node.js');

    //Send response body
    res.end('HEllo World!');
});
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});