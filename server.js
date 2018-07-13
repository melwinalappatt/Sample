var http =  require ('http');
var server =http.createServer(function (require,response) {response.writeHead(200,{"content-Type":"tesxt/Plain"});
response.end("Hello,Namesthe\n");
});
server.listen(4321);
console.log("Server isctreated on 4321; Lol.....");
