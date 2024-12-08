const http = require('http');

const server = http.createServer(async (req, res) => {
  // Simulate a long-running operation using async/await
  await new Promise(resolve => setTimeout(resolve, 1000));//Simulate long operation

  for (let i = 0; i < 1000000000; i++) {
    // Do nothing
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});