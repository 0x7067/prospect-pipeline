const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = process.argv[2] || process.cwd();
const port = process.argv[3] || 8765;

const server = http.createServer((req, res) => {
  const filePath = path.join(dir, req.url === '/' ? 'index.html' : req.url);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.writeHead(200);
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
