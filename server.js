var http = require('http');
// var debug = require('debug')('server');
var log = require('winston');

var server = new http.Server();

server.on('request', require('./request'));

server.listen(1337);

// debug('Server is running');
log.info('Server is running');