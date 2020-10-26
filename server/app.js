

import dealWebsocket from './socket.js'
// import Io from 'socket.io'
var socketIo = require('socket.io');
var https = require('https');
var fs = require('fs');
var express = require('express');

var app = express();


var options = {
	key : fs.readFileSync('./cert/1557605_www.learningrtc.cn.key'),
	cert: fs.readFileSync('./cert/1557605_www.learningrtc.cn.pem')
}
var https_server = https.createServer(options, app);
var io = socketIo.listen(https_server);


// const io = Io('9000')

io.on('connection', socket => dealWebsocket({ io, socket }))


https_server.listen(9000, '0.0.0.0');
