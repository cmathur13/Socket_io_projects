const http = require('http')
const websocket = require('ws')
const socketio = require('socket.io')
const cors  = require('cors')
const express = require('express')
const app = express()


app.use(cors())
server = http.Server(app);

app.get('/', function (req, res) {
  res.send('I am connected')
})

// creating the socket from socket io
const io = socketio(server)
io.on('connection', (socket,req)=>{
    socket.emit('welcome','Welcome to the socket io server')
    socket.on('message',(msg)=>{
        console.log(msg)
    })
})

// Creating websocket from native library

// const wss = new websocket.Server({server})
// wss.on('headers',(headers,req)=>{
//     console.log(headers)
// })
// wss.on('connection',(ws,req)=>{
//     ws.send("welcome to the websocket server")
//     ws.on('message',(msg)=>{
//         console.log(msg.toString())
//     })
// })


server.listen(8080);
