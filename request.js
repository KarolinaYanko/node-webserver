var url = require('url');
// var debug = require('debug')('server:request');
var log = require('./log')(module);

module.exports = function(req, res){
	var urlParsed = url.parse(req.url, true); // true разбивает urlParsed.query на объекты

	// debug('Got request', req.method, req.url );
	log.info('Got request', req.method, req.url );

	if(req.method =='GET' && urlParsed.pathname == '/echo' && urlParsed.query.message){
		// res.writeHead(200, 'OK', {'Cache-control': 'no-cache'}); //выполняется тут же
		// res.setHeader('Cache-control', 'no-cache'); //or removeHeader запись с ближайшей записью, в примере с res.end();
		var message = urlParsed.query.message;
		// debug('Echo: ' + message);
		log.debug('Echo: ' + message);
		res.end(message);
		return;
	}

	// debug("Unknown URL");
	log.error("Unknown URL");

	res.statusCode = 404; //Not Found
	res.end('Page not found');
}