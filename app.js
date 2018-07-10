const http = require('http');

const hostname= '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
  res.StstusCode = 200;
  res.SetHeader('content-type',text/plan);
  res.end("Hai ... Ithionnu nirtho.....");
});
server.listen(port,hostname,()=> {
  console.log('Server started on port'+port);
});
