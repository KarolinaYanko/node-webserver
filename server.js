//-- Echo Server  http://127.0.0.1:1337/echo?message=Hello -> Hello
var http = require('http');
var url = require('url');

var server = new http.Server(function(req, res){

	// console.log(req.headers) //info about browser and it requests

	var urlParsed = url.parse(req.url, true); // true разбивает urlParsed.query на объекты

	// console.log(urlParsed);

	if(urlParsed.pathname == '/echo' && urlParsed.query.message){
		// res.writeHead(200, 'OK', {'Cache-control': 'no-cache'}); //выполняется тут же
		// res.setHeader('Cache-control', 'no-cache'); //or removeHeader запись с ближайшей записью, в примере с res.end();
		res.end(urlParsed.query.message);
		return
	} else{
		res.statusCode = 404; //Not Found
		res.end('Page not found');
	}
});

server.listen(1337);
console.log('Server is running');