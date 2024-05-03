const express = require('express')
const app = express();
app.use(express.static(__dirname+'/public'))
const socketio = require('socket.io')
const expressserver = app.listen(9000)
const helmet = require('helmet')
app.use(helmet())
const io = socketio(expressserver)
console.log("listen for the client")
module.exports ={
    app,
    io
}