var http = require("http");

var PORT = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {
    response.end("You are an amazing person!!! Bless you, child!!");
};

function handleRequest2(request, response) {
    response.end("You are a big piece of doggy doo doo!!!");
};

var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT)
});

server2.listen(PORT2, function() {
    console.log("Server listening on: http://localhost:" + PORT2)
});


